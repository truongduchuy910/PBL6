# Chi tiết về GraphQL API

## Lấy dữ liệu

### `allUsers`

Lấy tất cả bản ghi trong danh sách `User`. Truy vấn `allUsers` cho phép tìm kiếm, giới hạn và lọc các kết quả. Chi tiết xem bên dưới:

```graphql
query {
  allUsers {
    id
  }
}
```

### `_allUsersMeta`

Tương tự như `allUsers`. `_allUsersMeta` trả về tổng số bản ghi hợp lệ vào `count`.

```graphql
query {
  _allUsersMeta {
    count
  }
}
```

### `User`

Truy cập chính xác đến bản ghi trong danh sách `User`. Truy vấn này bắt buộc có `$id`

```graphql
query {
  User(where: { id: $id }) {
    name
  }
}
```

### `_UsersMeta`

Trả về thông tin của chính danh sách `User`, chẳng hạn như trạng thái phân quyền.

## Thêm, sửa, xóa

Có 6 phương thức

- `createUser`
- `createUsers`
- `updateUser`
- `updateUsers`
- `deleteUser`
- `deleteUsers`

### `createUser`

Thêm một `User` vào danh sách. Yêu cầu có tham số `data`

```graphql
mutation {
  createUser(data: { name: "Mike" }) {
    id
  }
}
```

### `createUsers`

Tạo nhiều `Users`. Đầu vào tương tự như `createUser` nhưng ở đây có dạng là `[data, data,...]`

```graphql
mutation {
  createUsers(data: [{ data: { name: "Mike" } }, { data: { name: "Maher" } }]) {
    id
    name
  }
}
```

### `updateUser`

Cập nhật `User` thông qua ID.

```graphql
mutation {
  updateUser(id: ID, data: { name: "Simon" }) {
    id
  }
}
```

### `updateUsers`

Cập nhật nhiều `Users` thông qua ID. Tham số truyền vào tương tự như `createUser`. Cần được bao trong bảng và truyền vào biến `data` như ví dụ

```graphql
mutation {
  updateUsers(data: [{ id: ID, data: { name: "Simon" } }]) {
    id
  }
}
```

### `deleteUser`

Xóa một `User` thông qua ID

```graphql
mutation {
  deleteUser(id: ID) {
    id
  }
}
```

### `deleteUsers`

Xóa nhiều `User` thông qua danh sách ID

```graphql
mutation {
  deleteUsers(ids: [ID]) {
    id
  }
}
```

## Lọc, giới hạn, sắp xếp

Bên trong tham số của truy vấn chúng ta có thể thêm:

- `where`
- `search`
- `skip`
- `first`
- `sortBy`

### `where`

Giới hạn số kết quả trả về đúng với điều kiện truyền vào.

```graphql
query {
  allUsers(where: { name_starts_with_i: "A" }) {
    id
  }
}
```

#### lọc trường là một Relationship `where`

- `{relatedList}_every`: whereInput
- `{relatedList}_some`: whereInput
- `{relatedList}_none`: whereInput
- `{relatedList}_is_null`: Boolean

#### lọc trường là một String `where`

- `{Field}:` String
- `{Field}_not`: String
- `{Field}_contains`: String
- `{Field}_not_contains`: String
- `{Field}_starts_with`: String
- `{Field}_not_starts_with`: String
- `{Field}_ends_with`: String
- `{Field}_not_ends_with`: String
- `{Field}_i`: String
- `{Field}_not_i`: String
- `{Field}_contains_i`: String
- `{Field}_not_contains_i`: String
- `{Field}_starts_with_i`: String
- `{Field}_not_starts_with_i`: String
- `{Field}_ends_with_i`: String
- `{Field}_not_ends_with_i`: String
- `{Field}_in`: [String]
- `{Field}_not_in`: [String]

#### lọc trường là một ID `where`

- `{Field}`: ID
- `{Field}_not`: ID
- `{Field}_in`: [ID!]
- `{Field}_not_in`: [ID!]

#### lọc trường là một Integer `where`

- `{Field}`: Int
- `{Field}_not`: Int
- `{Field}_lt`: Int
- `{Field}_lte`: Int
- `{Field}_gt`: Int
- `{Field}_gte`: Int
- `{Field}_in`: [Int]
- `{Field}_not_in`: [Int]

#### Toán tử

Có hai toán tử

- `AND`: [whereInput]
- `OR`: [whereInput]

```graphql
query {
  allUsers(where: { OR: [{ name_starts_with_i: "A" }, { email_starts_with_i: "A" }] }) {
    id
  }
}
```

### `search`

Sẽ tìm kiếm danh sách theo trường `name`

```graphql
query {
  allUsers(search: "Mike") {
    id
  }
}
```

### `sortBy`

Sắp xếp kết quả

Kiểu được cung cấp (lấy ví dụ cho bảng `User`)

```graphql
enum SortUsersBy {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
}
```

`sortBy` cho phép một hoặc nhiều giá trị tham gia vào điều kiện sắp xếp.

```graphql
query {
  allUsers(sortBy: name_DESC) {
    id
  }
}
```

```graphql title=
query {
  allUsers(sortBy: [name_DESC, email_ASC]) {
    id
  }
}
```

### `first`

Giới hạn số kết quả trả về trong truy vấn. Sau khi áp dụng các tham số sau: `skip`, `sortBy`, `where` and `search`.

```graphql
query {
  allUsers(first: 10) {
    id
  }
}
```

### `skip`

Bỏ qua các số bản ghi đầu tìm thấy theo chỉ định. Nó được áp dụng trước khi `first`, nhưng sau `sortBy`, `where` and `search`.

If the value of `skip` is greater than the number of available results, zero results will be returned.

```graphql
query {
  allUsers(skip: 10) {
    id
  }
}
```
