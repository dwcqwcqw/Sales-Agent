"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YuntiCustomerState = void 0;
const { NodeConnectionTypes } = require("n8n-workflow");
class YuntiCustomerState {
  description = {
    displayName: "AI销售 模块｜客户跟进状态",
    name: "yuntiCustomerState",
    icon: "fa:database",
    iconColor: "blue",
    group: ["transform"],
    version: 1,
    description: "读取或写入客户标签、阶段、历史回复、待执行计划和群发记录。",
    codex: {
      categories: ["AI销售 模块"],
      alias: ["AI销售 模块", "云梯", "销售模块", "客户状态", "用户标签"],
    },
    defaults: { name: "客户跟进状态" },
    inputs: [NodeConnectionTypes.Main],
    outputs: [NodeConnectionTypes.Main],
    properties: [
      { displayName: "操作", name: "operation", type: "options", options: [{ name: "读取", value: "read" }, { name: "写入", value: "write" }], default: "read" },
      { displayName: "客户 ID 字段", name: "customerIdField", type: "string", default: "customerId" },
    ],
  };
  async execute() {
    const items = this.getInputData();
    return [items.map((item, index) => ({ json: { ...item.json, yuntiModule: { moduleId: this.getNodeParameter("operation", index) === "read" ? "customer-state-read" : "customer-state-write", node: "客户跟进状态", operation: this.getNodeParameter("operation", index), customerIdField: this.getNodeParameter("customerIdField", index) } }, pairedItem: { item: index } }))];
  }
}
exports.YuntiCustomerState = YuntiCustomerState;
