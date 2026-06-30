"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YuntiFeishuMessageEntry = void 0;
const { NodeConnectionTypes } = require("n8n-workflow");
class YuntiFeishuMessageEntry {
  description = {
    displayName: "AI销售 模块｜飞书消息入口",
    name: "yuntiFeishuMessageEntry",
    icon: "fa:comments",
    iconColor: "blue",
    group: ["trigger"],
    version: 1,
    description: "接收飞书私聊、群聊、URL 验证和报名点击事件。",
    codex: {
      categories: ["AI销售 模块"],
      alias: ["AI销售 模块", "云梯", "销售模块", "飞书", "入口"],
    },
    defaults: { name: "飞书消息入口" },
    inputs: [NodeConnectionTypes.Main],
    outputs: [NodeConnectionTypes.Main],
    properties: [
      { displayName: "入口说明", name: "description", type: "notice", default: "通常接在 Webhook 或 Respond to Webhook 后，用来把飞书事件交给云梯销售 SOP。" },
    ],
  };
  async execute() {
    const items = this.getInputData();
    return [items.map((item, index) => ({ json: { ...item.json, yuntiModule: { moduleId: "feishu-entry", node: "飞书消息入口", mode: "native-business-node" } }, pairedItem: { item: index } }))];
  }
}
exports.YuntiFeishuMessageEntry = YuntiFeishuMessageEntry;
