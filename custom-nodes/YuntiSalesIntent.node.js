"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YuntiSalesIntent = void 0;
const { NodeConnectionTypes } = require("n8n-workflow");
class YuntiSalesIntent {
  description = {
    displayName: "AI销售 模块｜AI识别销售意图",
    name: "yuntiSalesIntent",
    icon: "fa:brain",
    iconColor: "purple",
    group: ["transform"],
    version: 1,
    description: "识别试听、价格、课程匹配、投诉、找人工等销售 SOP 意图。",
    codex: {
      categories: ["AI销售 模块"],
      alias: ["AI销售 模块", "云梯", "销售模块", "意图识别", "AI"],
    },
    defaults: { name: "AI识别销售意图" },
    inputs: [NodeConnectionTypes.Main],
    outputs: [NodeConnectionTypes.Main],
    properties: [
      { displayName: "产品线", name: "productLine", type: "string", default: "自然拼读" },
      { displayName: "消息字段", name: "messageField", type: "string", default: "text" },
    ],
  };
  async execute() {
    const items = this.getInputData();
    return [items.map((item, index) => ({ json: { ...item.json, yuntiModule: { moduleId: "sales-intent", node: "AI识别销售意图", productLine: this.getNodeParameter("productLine", index), messageField: this.getNodeParameter("messageField", index) } }, pairedItem: { item: index } }))];
  }
}
exports.YuntiSalesIntent = YuntiSalesIntent;
