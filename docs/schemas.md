[Trang chủ](/)
# Schemas
<!-- ## 1. Role
### Mô tả: 
- Bảng Role: phân quyền, các quyền hiện tại gồm:
    +   admin 
    +   user  
    +   Có thể thêm: guest,...

|       Field   |      Type     |       Description     | 
| :------------:|:-------------:|:---------------------:|
| name          |     Text      |  Tên phân quyền       | 
| description   |     Text      |   Mô tả               |  -->

## 1. User
### Mô tả
- Bảng User: chứa thông tin của người dùng 

|       Field   |      Type                                |      Description                             |
| :------------:|:----------------------------------------:|:--------------------------------------------:|
| userName      |     Text                                 |       Tên đăng nhập                          |
| passWord      |     Password                             |     Mật khẩu                                 |
| firstName     |     Text                                 |     Tên                                      |
| lastName      |     Text                                 |     Họ                                       |
| gender        |     Text                                 |     Giới tính                                |
| email         |     Text                                 |     Email                                    |
| phoneNumber   |     Text                                 |     Số điện thoại                            |
| address       |     Text                                 |     Địa chỉ                                  |
| avatar        |     Upload_Image                         |     Ảnh đại diện                             |
| posts         |     Relationship, ref:'Post', many: true |     Các bài đăng                             |
| isAdmin       |     Boolean                              |     Có phải là tài khoản admin hay không     |
<!-- | photos        |     Relationship, ref:'Photo'   |     Album ảnh                    | -->


## 2. Post
### Mô tả
- Bảng Post: chứa nội dung, thông tin bài đăng.

|       Field   |      Type                                         |  Description                  |
| :------------:|:-------------------------------------------------:|:-----------------------------:|
| content       |     Text                                          | Nội dung bài đăng             |
| tags          |     Relationship, ref:'Tag', many: true           | Các thẻ tag gắn thêm          |
| images        |     Relationship, ref:'Upload_Image', many: true  | Các hình ảnh                  |
| interactive   |     Relationship, ref:'Interactive'               | Các comments, reactions       |
<!-- | comments      |     Relationship, ref:'Comment'| Các bình luận                 | -->
<!-- | userId        |     Uuid                       | ID của người đăng             | -->

## 3. Upload_Image
### Mô tả
- Bảng Photo: chứa hình ảnh.

|       Field   |      Type                     |  Description              | 
| :------------:|:-----------------------------:|:-------------------------:|
| image         |     File                      | Hình ảnh                  | 
| information   |     Text                      | Thông tin: size, ngày,... | 
<!-- | postId        |     Uuid                      | ID của bài post           |  -->

## 4. Tag
### Mô tả
- Bảng Tag: chứa các thẻ tag.

|       Field   |      Type                     | Description                   | 
| :------------:|:-----------------------------:|:-----------------------------:|
| content       |     Text                      | Nội dung tag: #cats, #man,... | 
<!-- | postId        |     Uuid                      | ID của bài post               |  -->

## 5. Interactive 
### Mô tả
- Bảng Interactive : bảng trung gian, liên kết giữa Post và các bảng Reaction, Comment. Một bài Post có thể có nhiều comment và reaction. Mục đích: nếu muốn một bảng khác cũng có chức năng tương tự Comment, Reaction thì chỉ cần kết nối với bảng này.

|       Field   |      Type                                    | 
| :------------:|:--------------------------------------------:|
|    Comments   | Relationship, ref:'Intractive', many: true   |  
|    Reactions  | Relationship, ref:'Intractive', many: true   |  
## 6. Interactive_Reaction
### Mô tả
- Bảng Interactive_Reaction: lưu trữ thông tin người dùng khi nhấn thả reation (Like, Heart, Angry, Smile, Sad, Surprise...) cho một đối tượng (Hiện tại: một bài post; có thể nâng cấp: một comment, một hình ảnh,...).

|       Field   |      Type                     | Description                                                    | 
| :------------:|:-----------------------------:|:--------------------------------------------------------------:|
| emoij         |     Select                    | Chuỗi ký tự thể hiện cảm xúc (ví dụ: _:like_ , _:sad:_ ...)    |


## 7. Interactive_Comment
### Mô tả
- Bảng Interactive_Comment: lưu trữ bình luận của người dùng trong một bài post.

|       Field   |      Type                     | Description                   | 
| :------------:|:-----------------------------:|:-----------------------------:|
| content       |     Text                      | Bình luận của người dùng      | 

