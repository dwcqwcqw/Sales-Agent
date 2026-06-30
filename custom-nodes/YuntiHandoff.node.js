"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YuntiHandoff = void 0;
const { NodeConnectionTypes } = require("n8n-workflow");
class YuntiHandoff {
  description = {
    displayName: "AI销售 模块｜转人工",
    name: "yuntiHandoff",
    icon: "fa:user-check",
    iconColor: "red",
    group: ["transform"],
    version: 1,
    description: "价格特批、投诉、退款、明确找顾问时生成摘要并进入人工队列。",
    codex: {
      categories: ["AI销售 模块"],
      alias: ["AI销售 模块", "云梯", "销售模块", "转人工", "人工控制"],
    },
    defaults: { name: "转人工" },
    inputs: [NodeConnectionTypes.Main],
    outputs: [NodeConnectionTypes.Main],
    properties: [
      { displayName: "转人工原因", name: "reason", type: "string", default: "投诉 / 价格特批 / 明确找人工" },
    ],
  };
  async execute() {
    const items = this.getInputData();
    return [items.map((item, index) => ({ json: { ...item.json, yuntiModule: { moduleId: "handoff", node: "转人工", reason: this.getNodeParameter("reason", index), outputs: ["summary", "requiredOwner", "queue"] } }, pairedItem: { item: index } }))];
  }
}
exports.YuntiHandoff = YuntiHandoff;
