"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YuntiPlaybookMatch = void 0;
const { NodeConnectionTypes } = require("n8n-workflow");
class YuntiPlaybookMatch {
  description = {
    displayName: "AI销售 模块｜Playbook匹配",
    name: "yuntiPlaybookMatch",
    icon: "fa:route",
    iconColor: "orange",
    group: ["transform"],
    version: 1,
    description: "根据客户意图、阶段和产品线匹配销售 SOP 与下一步动作。",
    codex: {
      categories: ["AI销售 模块"],
      alias: ["AI销售 模块", "云梯", "销售模块", "Playbook", "SOP"],
    },
    defaults: { name: "Playbook匹配" },
    inputs: [NodeConnectionTypes.Main],
    outputs: [NodeConnectionTypes.Main],
    properties: [
      { displayName: "Playbook", name: "playbook", type: "string", default: "试听转化 Playbook" },
    ],
  };
  async execute() {
    const items = this.getInputData();
    return [items.map((item, index) => ({ json: { ...item.json, yuntiModule: { moduleId: "playbook-match", node: "Playbook匹配", playbook: this.getNodeParameter("playbook", index), outputs: ["nextStep", "scriptTemplate", "handoffReason"] } }, pairedItem: { item: index } }))];
  }
}
exports.YuntiPlaybookMatch = YuntiPlaybookMatch;
