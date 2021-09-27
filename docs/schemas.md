[Trang chủ](/)
# Schemas
## 1. Role
### Mô tả: 
- Bảng Role: phân quyền, các quyền hiện tại gồm:
    +   admin 
    +   user  
    +   Có thể thêm: guest,...

|       Field   |      Type     |       Description     | 
| :------------:|:-------------:|:---------------------:|
| name          |     Text      |  Tên phân quyền       | 
| description   |     Text      |   Mô tả               | 

## 2. User
### Mô tả
- Bảng User: chứa thông tin của người dùng 

|       Field   |      Type                       |      Description                             |
| :------------:|:-------------------------------:|:--------------------------------------------:|
| userName      |     Text                        |       Tên đăng nhập                          |
| passWord      |     Password                    |     Mật khẩu                                 |
| firstName     |     Text                        |     Tên                                      |
| lastName      |     Text                        |     Họ                                       |
| gender        |     Text                        |     Giới tính                                |
| email         |     Text                        |     Email                                    |
| phoneNumber   |     Text                        |     Số điện thoại                            |
| address       |     Text                        |     Địa chỉ                                  |
| avatar        |     File                        |     Ảnh đại diện                             |
| entities      |     Relationship, ref:'Entity'  |     Các bài post, like, bình luận, hình ảnh  |
| roles         |     Relationship, ref:'Role'    |     Các quyền hạn                |
<!-- | posts         |     Relationship, ref:'Post'    |     Danh sách các bài đăng       |
| photos        |     Relationship, ref:'Photo'   |     Album ảnh                    | -->


## 3. Post
### Mô tả
- Bảng Post: chứa nội dung, thông tin bài đăng.

|       Field   |      Type                     |  Description                  |
| :------------:|:-----------------------------:|:-----------------------------:|
| content       |     Text                       | Nội dung bài đăng             |
| tags          |     Relationship, ref:'Tag'    | Các thẻ tag gắn thêm          |
| photos        |     Relationship, ref:'Photo'  | Các hình ảnh                  |
| comments      |     Relationship, ref:'Comment'| Các bình luận                 |
<!-- | userId        |     Uuid                      | ID của người đăng             | -->

## 4. Photo
### Mô tả
- Bảng Photo: chứa hình ảnh.

|       Field   |      Type                     |  Description              | 
| :------------:|:-----------------------------:|:-------------------------:|
| photo         |     File                      | Hình ảnh                  | 
| information   |     Text                      | Thông tin: size, ngày,... | 
<!-- | postId        |     Uuid                      | ID của bài post           |  -->

## 5. Tag
### Mô tả
- Bảng Tag: chứa các thẻ tag.

|       Field   |      Type                     | Description                   | 
| :------------:|:-----------------------------:|:-----------------------------:|
| content       |     Text                      | Nội dung tag: #cats, #man     | 
<!-- | postId        |     Uuid                      | ID của bài post               |  -->

## 6. Like
### Mô tả
- Bảng Like: lưu trữ thông tin người dùng khi nhấn like một đối tượng (một bài post hoặc một user khác).

|       Field   |      Type                     | Description                                            | 
| :------------:|:-----------------------------:|:------------------------------------------------------:|
| objectId      |     Uuid                      | ID của đối tượng (postID hoặc userID hoặc commentID )  | 


## 7. Comment
### Mô tả
- Bảng Comment: lưu trữ bình luận của người dùng trong một bài post.

|       Field   |      Type                     | Description                   | 
| :------------:|:-----------------------------:|:-----------------------------:|
| content       |     Text                      | Bình luận của người dùng      | 

## 8. Entity
### Mô tả
- Bảng Entyti: bảng trung gian, liên kết giữa user và các bảng Like, Post, Photo, Comment.

|       Field   |      Type                     | 
| :------------:|:-----------------------------:|
|               |                               |  