"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.YuntiAiSalesModule = void 0;

const { NodeConnectionTypes } = require("n8n-workflow");

const moduleOptions = [
  { name: "标准化客户消息", value: "normalize-message" },
  { name: "AI识别销售意图", value: "sales-intent" },
  { name: "课程知识库检索", value: "rag-course" },
  { name: "Playbook匹配", value: "playbook-match" },
  { name: "沟通技能执行", value: "sales-skill" },
  { name: "读取客户跟进状态", value: "customer-state-read" },
  { name: "写入当前跟进状态", value: "customer-state-write" },
  { name: "生成回复和跟进计划", value: "reply-plan" },
  { name: "转人工", value: "handoff" },
  { name: "停止跟进", value: "stop-follow" },
];

class YuntiAiSalesModule {
  description = {
    displayName: "AI销售 模块｜模块执行器",
    name: "yuntiAiSalesModule",
    icon: "fa:network-wired",
    iconColor: "purple",
    group: ["transform"],
    version: 1,
    description: "调用云梯智客模块注册中心里的 RAG、Playbook、销售技能、客户状态和 Agent 基础设定。",
    codex: {
      categories: ["AI销售 模块"],
      alias: ["AI销售 模块", "云梯", "销售模块", "RAG", "Playbook"],
    },
    defaults: {
      name: "AI销售模块执行器",
    },
    inputs: [NodeConnectionTypes.Main],
    outputs: [NodeConnectionTypes.Main],
    properties: [
      {
        displayName: "模块",
        name: "moduleId",
        type: "options",
        options: moduleOptions,
        default: "sales-intent",
        description: "选择模块注册中心中的一个销售业务模块。",
      },
      {
        displayName: "模块版本",
        name: "moduleVersion",
        type: "string",
        default: "latest",
        description: "可填写 latest、测试版或正式版本号，例如 v1.0.0。",
      },
      {
        displayName: "模块输入",
        name: "moduleInput",
        type: "json",
        default: "={ $json }",
        description: "传给模块服务的输入。默认使用上游节点的 JSON。",
      },
      {
        displayName: "模块服务 URL",
        name: "moduleEndpoint",
        type: "string",
        default: "http://127.0.0.1:4177/api/modules/execute",
        description: "云梯智客模块调度 API。原型阶段可以先返回调度计划，生产环境替换为真实服务。",
      },
      {
        displayName: "只生成调度计划",
        name: "dryRun",
        type: "boolean",
        default: true,
        description: "打开时不请求外部服务，只把模块、输入和预期输出写入执行结果，便于在画布上调试。",
      },
    ],
  };

  async execute() {
    const items = this.getInputData();
    const returnItems = [];

    for (let itemIndex = 0; itemIndex < items.length; itemIndex += 1) {
      const moduleId = this.getNodeParameter("moduleId", itemIndex);
      const moduleVersion = this.getNodeParameter("moduleVersion", itemIndex);
      const moduleInput = this.getNodeParameter("moduleInput", itemIndex);
      const moduleEndpoint = this.getNodeParameter("moduleEndpoint", itemIndex);
      const dryRun = this.getNodeParameter("dryRun", itemIndex);
      const input = typeof moduleInput === "object" ? moduleInput : { value: moduleInput };

      if (dryRun) {
        returnItems.push({
          json: {
            ...items[itemIndex].json,
            yuntiModule: {
              moduleId,
              moduleVersion,
              moduleEndpoint,
              mode: "dry-run",
              input,
              outputs: ["result", "confidence", "nextAction", "auditTrail"],
            },
          },
          pairedItem: { item: itemIndex },
        });
        continue;
      }

      const response = await this.helpers.httpRequest({
        method: "POST",
        url: moduleEndpoint,
        body: {
          moduleId,
          version: moduleVersion,
          input,
        },
        json: true,
      });

      returnItems.push({
        json: {
          ...items[itemIndex].json,
          yuntiModule: response,
        },
        pairedItem: { item: itemIndex },
      });
    }

    return [returnItems];
  }
}

exports.YuntiAiSalesModule = YuntiAiSalesModule;
