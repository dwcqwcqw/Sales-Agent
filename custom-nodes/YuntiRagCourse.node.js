"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YuntiRagCourse = void 0;
const { NodeConnectionTypes } = require("n8n-workflow");
class YuntiRagCourse {
  description = {
    displayName: "AI销售 模块｜课程知识库检索",
    name: "yuntiRagCourse",
    icon: "fa:book-open",
    iconColor: "green",
    group: ["transform"],
    version: 1,
    description: "从课程 FAQ、价格政策、试听流程中检索可溯源答案。",
    codex: {
      categories: ["AI销售 模块"],
      alias: ["AI销售 模块", "云梯", "销售模块", "RAG", "知识库"],
    },
    defaults: { name: "课程知识库检索" },
    inputs: [NodeConnectionTypes.Main],
    outputs: [NodeConnectionTypes.Main],
    properties: [
      { displayName: "问题字段", name: "questionField", type: "string", default: "question" },
      { displayName: "Top K", name: "topK", type: "number", default: 5 },
    ],
  };
  async execute() {
    const items = this.getInputData();
    return [items.map((item, index) => ({ json: { ...item.json, yuntiModule: { moduleId: "rag-course", node: "课程知识库检索", questionField: this.getNodeParameter("questionField", index), topK: this.getNodeParameter("topK", index), outputs: ["answer", "sources", "confidence"] } }, pairedItem: { item: index } }))];
  }
}
exports.YuntiRagCourse = YuntiRagCourse;
