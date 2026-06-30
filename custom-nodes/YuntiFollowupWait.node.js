"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YuntiFollowupWait = void 0;
const { NodeConnectionTypes } = require("n8n-workflow");
class YuntiFollowupWait {
  description = {
    displayName: "AI销售 模块｜跟进等待节点",
    name: "yuntiFollowupWait",
    icon: "fa:clock",
    iconColor: "orange",
    group: ["transform"],
    version: 1,
    description: "表达 5分钟、1小时、21点30 等业务跟进等待节点，可再编译为 n8n Wait/IF。",
    codex: {
      categories: ["AI销售 模块"],
      alias: ["AI销售 模块", "云梯", "销售模块", "跟进", "Wait"],
    },
    defaults: { name: "跟进等待节点" },
    inputs: [NodeConnectionTypes.Main],
    outputs: [NodeConnectionTypes.Main],
    properties: [
      { displayName: "跟进类型", name: "followupType", type: "options", options: [{ name: "5分钟跟进", value: "five-min-follow" }, { name: "1小时跟进", value: "hour-follow" }, { name: "21点30统一跟进", value: "night-follow" }], default: "five-min-follow" },
    ],
  };
  async execute() {
    const items = this.getInputData();
    return [items.map((item, index) => ({ json: { ...item.json, yuntiModule: { moduleId: this.getNodeParameter("followupType", index), node: "跟进等待节点", compileTo: ["Wait", "IF", "客户状态读取"] } }, pairedItem: { item: index } }))];
  }
}
exports.YuntiFollowupWait = YuntiFollowupWait;
