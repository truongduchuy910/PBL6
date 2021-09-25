
## Lựa chọn công nghệ, kiến trúc

### 1. Database server hoặc cluster database server.

Database server để lưu trữ dữ liệu người dùng, các phiên đăng nhập.

Cluster giúp ghép nối nhiều database server lại với nhau.

### 2. Proxy, load balancer.

reverse proxy giúp điều hướng request từ mạng ngoài đến một server đang chạy cục bộ.

load balancer giúp cân bằng tải giữa các server.

### 3. Server xử lí dữ.

Server làm việc trực tiếp với dữ liệu từ database. Xử lí các truy vấn,
phần quyền, đảm bảo toàn vẹn dữ liệu. Được khởi chạy ở nhiều luồng
hoặc nhiều server khi triển khai thực tế.

### 4. Server để phản hồi với người dùng cuối.

Nhóm server này nhận các yêu cầu từ người dùng và gửi về cho server dữ liệu xử lý.
Cache các dữ liệu cần thiết. Điều hướng giữa các trang và phản hồi HTML về cho người dùng.

![](https://v5.keystonejs.com/MutationLifecycleMasterDiagram-80d08af56ae981ef3fa02c9431e0345a.svg)
![](https://wp.apollographql.com/wp-content/uploads/2021/08/The-Graph-4.png)
