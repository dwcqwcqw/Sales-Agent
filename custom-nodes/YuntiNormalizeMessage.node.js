"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YuntiNormalizeMessage = void 0;
const { NodeConnectionTypes } = require("n8n-workflow");
class YuntiNormalizeMessage {
  description = {
    displayName: "AI销售 模块｜标准化客户消息",
    name: "yuntiNormalizeMessage",
    icon: "fa:align-left",
    iconColor: "green",
    group: ["transform"],
    version: 1,
    description: "统一 chat_id、message_id、文本、语音和来源渠道。",
    codex: {
      categories: ["AI销售 模块"],
      alias: ["AI销售 模块", "云梯", "销售模块", "标准化", "客户消息"],
    },
    defaults: { name: "标准化客户消息" },
    inputs: [NodeConnectionTypes.Main],
    outputs: [NodeConnectionTypes.Main],
    properties: [
      { displayName: "模块输入", name: "moduleInput", type: "json", default: "={ $json }" },
    ],
  };
  async execute() {
    const items = this.getInputData();
    return [items.map((item, index) => ({ json: { ...item.json, yuntiModule: { moduleId: "normalize-message", node: "标准化客户消息", input: this.getNodeParameter("moduleInput", index) } }, pairedItem: { item: index } }))];
  }
}
exports.YuntiNormalizeMessage = YuntiNormalizeMessage;
