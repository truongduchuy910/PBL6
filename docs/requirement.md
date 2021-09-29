[Trang chủ](/)

# Mô tả yêu cầu của đề tài

- [Mô tả yêu cầu của đề tài](#mô-tả-yêu-cầu-của-đề-tài)
- [Giới thiệu](#giới-thiệu)
  - [Mục tiêu](#mục-tiêu)
  - [Phạm vi](#phạm-vi)
- [Phân công nhiệm vụ](#phân-công-nhiệm-vụ)
- [Yêu cầu chức năng chính:](#yêu-cầu-chức-năng-chính)
- [Thiết kế hệ thống](#thiết-kế-hệ-thống)
- [Tài liệu tham khảo](#tài-liệu-tham-khảo)

## Giới thiệu

### Mục tiêu

- Tài liệu cung cấp các yêu cầu chi tiết cho phần mềm: Mạng xã hội FAKEBOOK.
- Mục tiêu phần mềm:
    + Tạo một mạng xã hội với các tính năng cơ bản, giao diện dễ sử dụng.
    + Có AdminUI

### Phạm vi

- Web app + mobile app

## Phân công nhiệm vụ

| Tên                |   Vị trí   |                 Yêu cầu |
| :----------------- | :--------: | ----------------------: |
| Trần Diệp Phương   |  Dữ liệu   | Node, Keystone, GraphQL |
| Trần Vũ Minh Triết | Trung gian |  Apollo client, GraphQL |
| Trần Ngọc Huy      | Giao diện  |            React native |
| Nguyễn Kim Huy     | Giao diện  |         Next, Chakra-ui |

## Yêu cầu chức năng chính:

- Đối với user:

    + Tạo tài khoản và đăng nhập

    + Upload avatar

    + Tìm kiếm user khác, kết bạn

    + Chỉnh sửa thông tin cá nhân

    + Đăng bài, có thể chỉnh sửa/ xoá bài đã đăng

    + Thêm tag cho post

    + Chức năng like, bình luận

    + Chỉnh sửa bình luận của chính mình

    + Xoá bình luận của người khác ở bài đăng của mình

    + Tìm kiếm bài theo tag, keyword in post

    + ...

- Đối với admin:

    + Tất cả quyền của user

    + Quản lý user: enable/disable user

    + Quản lý post: xoá post

    + ...

## Thiết kế hệ thống
![Untitled](https://user-images.githubusercontent.com/63086038/133872684-67f3199e-df8a-454c-b186-ffe27ddddbdc.png)
## Tài liệu tham khảo
-
Trên đây là những chức năng chính dự kiến, có thể phát sinh/loại bỏ trong giai đoạn phát triển.
