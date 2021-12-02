[Trang chủ](/)

# Hướng dẫn dành cho tác giả

## Phân loại công việc

- Thiết kế cơ sở dữ liệu
- Đảm bảo toàn vẹn dữ liệu
- Xử lí dữ liệu trước khi cập nhật
- Phân quyền
- Viết truy vấn các trường hợp sử dụng
- Cấu hình một khối
- Thiết kế giao diện
- Phân tích trạng thái sử dụng
- Viết components giao diện
- Viết components xử lí logic
- Xuất bộ components
- Lắp ráp components

## Phân chia nhiệm vụ

### Người làm dữ liệu.

Thiết kế dữ liệu, phân quyền, viết truy vấn mẫu.

### Người làm giao diện.

Xử các các thư viện giao diện có sẵn để xây dựng components giao diện.

### Người làm trung gian

Giao tiếp với người làm dữ để lấy dữ liệu cung cấp cho nhóm giao diện

## Tổ chức nhóm

Một nhóm gồm có 3 người tương ứng với 3 vị trí. Nếu ứng dụng có nhiều giao diện hoặc giao diện trên nhiều nền tảng.
Thì mỗi nền tảng có một người phụ trách.

## Quy trình làm việc

### Nhận yêu cầu
Tiếp nhận yêu cầu và trao đổi cơ bản để tiến hành phân tích thiết kế.

### Phân tích, thiết kế

Phân tích thiết kế hệ thống, cần chia ra các service nào.
Đặc tả yêu cầu. Thiết kế database, các trạng thái sử dụng.
Thiết kế giao diện người dùng.

### Chia chức năng

Phần chia thiết kế thành từng components tương ứng với một bảng trong cơ sở dữ liệu.

### Phát triển chức năng

#### 1. Nhận yêu cầu

Yêu cầu cho một nhóm 3 người vào gồm một database diagram. Một mô tả trạng thái sử dụng.
Và một thiết kế giao diện.

#### 4. Triển khai

Khi tiếp nhận yêu cầu, người làm dữ liệu và người làm trung gian sẽ làm việc với nhau
để triển khai nhanh từ các phân tích thiết kế thành một hoặc nhiều cấu trúc cài đặt.

Cấu trúc này sẽ thông qua thư viện để tự sinh ra trang quản trị và API.

Sau khi cài đặt xong, người làm dữ liệu sẽ tạo dữ liệu mẫu để kiểm thử.

Người làm trung gian sẽ viết components xử lí logic.

Người làm giao diện thì độc lập hơn. Một vùng phân tích thiết kế được chia ra.
Nếu 2 người trước đó nhận được các diagram thì người làm giao diện nhận được design
và tiến hành chuyển thành components giao diện.

Hoặc, nếu các trạng thái của phần mềm chưa được xác định, chưa được design tổng quát
thì sẽ không có bản thiết kế cụ thể và người làm giao diện sẽ tự hoàn thiện component
của mình riêng biệt.

#### 5. Kiểm thử

Khi hoàn thành, các components sẽ được lắp ráp với nhau tại một trang hoặc trạng thái
sử dụng cụ thể để kiểm thử.

### Cập nhật chức năng, giao diện

#### 1. Nhận yêu cầu

Một thay đổi về chức năng hoặc giao diện thường không đáng kể.
Nên sẽ mô tả bằng từ ngữ. Người làm dữ liệu sẽ là người nhận yêu cầu đầu tiên.

#### 4. Triển khai

Người làm dữ liệu cần thông báo cập nhật cho người làm dữ liệu.
Sau đó sẽ chỉnh sửa cấu trúc để đáp ứng yêu cầu. Và thông báo cho người làm trung gian
lắp ráp phần chỉnh sửa.

#### 5. Kiểm thử

Sau khi hoàn thành, components cũng được kiểm thử ngay tại vị trí sẽ được sử dụng trong
môi trường triển khai thực tế.


| Tên                |   Vị trí   |                 Yêu cầu |
| :----------------- | :--------: | ----------------------: |
| Trần Diệp Phương   |  Dữ liệu   | Node, Itoa, GraphQL |
| Trần Vũ Minh Triết | Trung gian |  Apollo client, GraphQL |
| Trần Ngọc Huy      | Giao diện  |            React native |
| Nguyễn Kim Huy     | Giao diện  |         Next, Chakra-ui |
