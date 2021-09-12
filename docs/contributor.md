# Hướng dẫn dành cho tác giả

## Lựa chọn công nghệ, kiến trúc

### Database server hoặc cluster database server.

Database server để lưu trữ dữ liệu người dùng, các phiên đăng nhập.

Cluster giúp ghép nối nhiều database server lại với nhau.

### Một reverse proxy, load balancer.

reverse proxy giúp điều hướng request từ mạng ngoài đến một server đang chạy cục bộ.

load balancer giúp cân bằng tải giữa các server.

### Nhóm server về dữ liệu giống nhau để chia tải.

Server làm việc trực tiếp với dữ liệu từ database. Xử lí các truy vấn,
phần quyền, đảm bảo toàn vẹn dữ liệu. Được khởi chạy ở nhiều luồng
hoặc nhiều server khi triển khai thực tế.

### Nhóm server để phản hồi với người dùng cuối.

Nhóm server này nhận các yêu cầu từ người dùng và gửi về cho server dữ liệu xử lý.
Cache các dữ liệu cần thiết. Điều hướng giữa các trang và phản hồi HTML về cho người dùng.

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