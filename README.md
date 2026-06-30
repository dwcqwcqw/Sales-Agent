# 云梯智客 Agent 本地运行

## 普通前端和后端代理

```bash
npm run dev
```

打开：

```text
http://127.0.0.1:4177/?v=workspaceglow2#agentos
```

## 接入本地 n8n

1. 启动 n8n：

```bash
npm run n8n
```

2. 在本地 n8n 里创建 API Key。

3. 启动云梯智客本地服务：

```bash
N8N_API_URL=http://127.0.0.1:5678 N8N_API_KEY=你的本地n8n密钥 npm run dev
```

4. 打开智能体配置：

```text
http://127.0.0.1:4177/?v=workspaceglow2#n8n
```

浏览器只访问 `/api/n8n/*`，n8n API Key 只保存在本地 Node 服务环境变量里。
