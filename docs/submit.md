# Hướng Dẫn Trả Kết Quả

## 1. Tách nhánh
```
git checkout main
git pull origin main
git switch -c tên_nhánh
```

## 2. Thực hiện thay đôỉ

Thực hiện các thay đôỉ như chỉnh sửa code, thêm file, xóa file,...

## 3. Đẩy lên nhánh

```
git add .
git commit -m "Nôị dung thay đôỉ"
git push origin tên_nhánh
```
## 4. Taọ pull request

Pull request bao gồm yêu cầu review và gộp code sang nhánh chính. Taọ trên trang cuả github.

## 5. Chỉnh sưả

Tiếp tục chỉnh sưả và commit cho đến khi pull request kết thúc
