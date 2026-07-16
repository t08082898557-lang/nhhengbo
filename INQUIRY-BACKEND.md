# HENGBO 询盘后端接入说明

当前网站是 GitHub Pages 静态站点，不能直接执行 `POST /api/inquiries`、保存数据库记录或发送邮件。仓库中的 `api/inquiries.js` 是无依赖的 Fetch-style Serverless 接口契约，默认测试模式；没有真实配置时，接口会返回失败状态，前端不会误报“提交成功”。

## 上线前需要配置

把 API 部署到你选择的 Serverless 运行环境，并将 `/api/inquiries` 代理到该函数。不要把下列值写进 HTML、JavaScript 或 Git：

```text
INQUIRY_MODE=production
INQUIRY_TO_EMAIL=sales@nhhengbo.com
INQUIRY_STORAGE_URL=<持久化询盘存储服务地址>
INQUIRY_STORAGE_TOKEN=<服务端密钥>
INQUIRY_EMAIL_URL=<服务端邮件发送服务地址>
INQUIRY_EMAIL_TOKEN=<服务端密钥>
INQUIRY_CONFIRMATION_URL=<客户确认邮件服务地址>
INQUIRY_CONFIRMATION_TOKEN=<服务端密钥>
INQUIRY_ALLOWED_ORIGIN=https://nhhengbo.com
```

`INQUIRY_TO_EMAIL` 未确认可用前，可以暂时配置为内部测试收件箱；前台不展示内部销售人员私人邮箱。邮件服务应使用 `sales@nhhengbo.com` 作为发件人，并设置 `Reply-To` 为客户提交的 Business Email（客户确认邮件则设置为销售邮箱）。

## 数据和邮件要求

- 存储服务需要保存询盘编号、客户资料、产品清单、定制要求、来源页面、语言、UTM、提交时间、保存状态、通知状态、客户确认邮件状态、跟进状态和内部备注字段。
- 邮件服务需要同时发送纯文本和 HTML 内容；邮件模板应包含询盘编号和完整产品/定制信息。
- 域名邮箱需要完成 MX、SPF、DKIM、DMARC 配置；在配置前不要对外承诺固定送达时间。
- 目前没有自动付款、客户账号、CRM后台和文件上传功能。第二阶段再增加，不能把B2B询盘变成商城结账。

## 测试验收

先使用开发收件人和测试数据库，验证普通产品询盘、多产品询价、样品申请、字段验证、重复提交、限流、存储失败、通知失败、客户确认邮件、网络中断和失败后保留表单内容。测试期间不能向真实客户或现有联系人群发消息。
