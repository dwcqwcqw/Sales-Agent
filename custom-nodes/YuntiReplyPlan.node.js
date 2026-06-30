"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YuntiReplyPlan = void 0;
const { NodeConnectionTypes } = require("n8n-workflow");
class YuntiReplyPlan {
  description = {
    displayName: "AI销售 模块｜生成回复和跟进计划",
    name: "yuntiReplyPlan",
    icon: "fa:pen-nib",
    iconColor: "purple",
    group: ["transform"],
    version: 1,
    description: "生成分条回复、顾问摘要、下一次触达时间和跟进原因。",
    codex: {
      categories: ["AI销售 模块"],
      alias: ["AI销售 模块", "云梯", "销售模块", "回复", "跟进计划"],
    },
    defaults: { name: "生成回复和跟进计划" },
    inputs: [NodeConnectionTypes.Main],
    outputs: [NodeConnectionTypes.Main],
    properties: [
      { displayName: "语气", name: "tone", type: "options", options: [{ name: "顾问式", value: "consultative" }, { name: "安抚式", value: "supportive" }, { name: "成交推进", value: "closing" }], default: "consultative" },
    ],
  };
  async execute() {
    const items = this.getInputData();
    return [items.map((item, index) => ({ json: { ...item.json, yuntiModule: { moduleId: "reply-plan", node: "生成回复和跟进计划", tone: this.getNodeParameter("tone", index), outputs: ["replyParts", "advisorSummary", "nextFollowupAt"] } }, pairedItem: { item: index } }))];
  }
}
exports.YuntiReplyPlan = YuntiReplyPlan;
