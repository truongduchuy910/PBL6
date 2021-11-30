# Quy trình quản lý Task

| #   | Action                   | Backlog Status | Assignee             | Note                                                                                                                                                      |
| --- | ------------------------ | -------------- | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0   | Create                   | New            | BrSE                 | Khách tạo ticket rồi chuyển cho BrSE                                                                                                                      |
| 1   | Translate                | New            | Dev Leader           |                                                                                                                                                           |
| 2   | Estimate Dev/QA          | New            | Dev Leader/QA Leader | Điền thời gian Estimate rồi notification cho BrSE                                                                                                         |
| 3   | Assign                   | New            | Dev/QA               | Dev Leader chuyển ticket cho member hoặc member tự nhận ticket về rồi notification cho Dev Leader                                                         |
| 4   | Specification Refinement | New            | BrSE                 | Dev và QA viết phân tích theo mẫu https://disco-cr.backlog.jp/wiki/CFN2019/Specification+Refinement                                                       |
| 5   | Translate                | New            | Dev                  | BrSE dịch báo khách rồi chuyển cho Dev làm                                                                                                                |
| 6   | Doing                    | In progress    | Dev                  |                                                                                                                                                           |
| 7   | Review                   | Reviewing      | Dev                  | Trước khi chuyển Review Dev phải điền đầy đủ Dev report trên PR theo đúng format https://disco-cr.backlog.jp/wiki/CFN2019/Pull+Request+description+format |
| 8   | Merge                    | Merged         | Dev Leader           | Notification cho Dev để điền Actual Time                                                                                                                  |
| 9   | Deploy Work              | Deployed       | QA Leader            |                                                                                                                                                           |
| 10  | Test                     | Testing        | QA Member            | QA Leader chuyển ticket cho member                                                                                                                        |
| 11  | Confirm                  | Feedback       | Dev                  | Dev và QA trao đổi với leader và BrSE để chốt, nếu không chốt được thì tạo Q&A để hỏi khách (tham khảo quy trình tạo Q&A bên dưới)                        |
| 12  | Done R1                  | Testing        | QA Leader            | QA test xong R1 thì comment trong ticket rồi chuyển cho QA Leader, điền Actual Time                                                                       |
| 13  | Test R2                  | Testing        | QA                   | QA Leader chuyển ticket cho QA khác test tiếp Round 2                                                                                                     |
| 14  | Done R2                  | VN Closed      | Dev Leader           |                                                                                                                                                           |
| 15  | Deploy Staging           | VN Closed      | BrSE                 | Check vào checkbox Staging Deployed                                                                                                                       |
| 16  | Assign to Disco          | VN Closed      | Disco                | BrSE chuyển cho khách để test trên staging                                                                                                                |
| 17  | Closed                   | Closed         | Disco                | Release xong khách tự close                                                                                                                               |

# Quy trình quản lý Bug

| #   | Action            | Backlog Status | Assignee   | Note                                                                                                                                                                                                            |
| --- | ----------------- | -------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Create            | New            | QA/BrSE    | QA tạo bug, ghi rõ step tái hiện, precondition, account...chụp ảnh hoặc quay video nếu có thể  /  Nếu là JP_Bug thì chuyển cho BrSE                                                                             |
| 2   | Assign            | New            | Dev Leader | QA tạo xong chuyển cho Dev Leader                                                                                                                                                                               |
| 3   | Assign            | New            | Dev        | Dev Leader chuyển ticket cho member hoặc member tự nhận ticket về rồi notification cho Dev Leader                                                                                                               |
| 4   | Bug Investigation | New            | BrSE       | Dev viết  theo mẫu điều tra bug theo mẫu rồi chuyển cho BrSE, dựa vào kết quả điều tra, dev điền thời điểm phát sinh bug vào mục: Occurred Milestone https://disco-cr.backlog.jp/wiki/CFN2019/Bug+Investigation |
| 5   | Translate         | New            | Dev        | BrSE dịch báo khách rồi chuyển cho Dev làm                                                                                                                                                                      |
| 6   | Doing             | In progress    | Dev        |                                                                                                                                                                                                                 |
| 7   | Review            | Reviewing      | Dev        | Trước khi chuyển Review Dev phải điền đầy đủ Dev report trên PR theo đúng format                                                                                                                                |
| 8   | Merge             | Merged         | Dev Leader | Notification cho Dev để điền Actual Time                                                                                                                                                                        |
| 9   | Deploy Work       | Deployed       | QA Leader  |                                                                                                                                                                                                                 |
| 10  | Test              | Testing        | QA Member  | QA Leader chuyển ticket cho member                                                                                                                                                                              |
| 11  | Confirm           | Feedback       | Dev        | Dev và QA trao đổi với leader và BrSE để chốt, nếu không chốt được thì tạo Q&A để hỏi khách (tham khảo quy trình tạo Q&A bên dưới)                                                                              |
| 12  | Reopen            | Reopen         | Dev        |                                                                                                                                                                                                                 |
| 13  | Done R1           | Testing        | QA Leader  | QA test xong R1 thì comment trong ticket rồi chuyển cho QA Leader, điền Actual Time                                                                                                                             |
| 14  | Test R2           | Testing        | QA         | QA Leader chuyển ticket cho QA khác test tiếp Round 2                                                                                                                                                           |
| 15  | Done R2           | VN Closed      | Dev Leader |                                                                                                                                                                                                                 |
| 16  | Deploy Staging    | VN Closed      | BrSE       | Check vào checkbox Staging Deployed                                                                                                                                                                             |
| 17  | Assign to Disco   | VN Closed      | Disco      | BrSE chuyển cho khách để test trên staging                                                                                                                                                                      |
| 18  | Closed            | Closed         | Disco      | Release xong khách tự close                                                                                                                                                                                     |

# Một số chú ý khác

- Ticket Rspec: 
  Mỗi đợt sẽ tạo 1 ticket cha chung cho tất cả các ticket rspec con. Tiêu đề các ticket Rpsec đều phải để [DEV ONLY]
- Ticket script production:
  Với những ticket phải chạy script production manual thì tiêu đề phải có [PRODUCTION SCRIPT]. Nếu là ticket phát sinh thì phải để là con của ticket gốc.
- Những task, bug mà không phải làm nữa thì close đi rồi chọn lí do trong "Resolution".
