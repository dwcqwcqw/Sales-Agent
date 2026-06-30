(() => {
  function initFeishuInbox() {
    window.__feishuInboxCleanup?.();
    const root = document.querySelector('.feishu-inbox-shell');
    if (!root) return;
    const conversationSnapshotKey = "yunti-zhike-agent:feishu-inbox-demo:v1";
    const tagRulesKey = "yunti-zhike-agent:feishu-tag-rules:v1";
    const workflowOptions = [
      "不触发工作流",
      "自然拼读-高意向跟进",
      "扫码资源-人工处理",
      "38天自动消息任务",
      "报名后开课提醒",
      "停止跟进与拒绝挽回",
    ];
    const state = {
      view: "all",
      q: "",
      conversations: [],
      tags: [],
      selectedConversationId: "",
      pendingFile: null,
      recorder: null,
      recordChunks: [],
      recordingStartedAt: 0,
      expandedHistory: {},
      memoryAddOpen: {},
      memoryEditOpen: {},
      tagManagerOpen: false,
      tagEditOpen: {},
      tagRules: loadTagRules(),
      refreshInFlight: null,
      refreshQueued: false,
      dataScope: "",
      lastRenderSignature: "",
    };
    
    const commonTagOptions = [
      "38天自动消息任务",
      "人工处理中",
      "扫码资源-待人工处理",
      "自然拼读-意向购买",
      "点雷达",
      "要买/怎么买",
      "自然拼读-考虑中",
      "自然拼读-明确拒绝",
      "自然拼读-已报名",
      "自然拼读-已购买",
      "自然拼读-停止跟进",
      "拒绝挽回",
      "购买后/报名",
      "赠品/实物",
      "硬件与操作",
      "上课时间/回放",
      "扫码资源-验证码",
      "扫码资源-答案",
      "扫码资源-暂无资源",
      "扫码资源-资源不对",
    ];
    
    const memorySections = ["个人信息", "学习状况", "购买情况", "疑难问题"];
    const mockConversations = [
      {
        id: "demo-tianya",
        userId: "ou_bd758_demo_tianya",
        chatId: "oc_demo_tianya",
        displayName: "天涯",
        avatarUrl: "",
        currentTag: "自然拼读-学习内容，38天自动消息任务",
        intent: "学习内容咨询",
        stopFollowup: false,
        lastAt: new Date(Date.now() - 2 * 60 * 1000).toISOString(),
        lastMessage: "咱们教的是英语底层的“发音规律”，规律是通用的！规律掌握了，不管学校用什么教材，他背单词都轻松。",
        unreadCount: 4,
        handoff: false,
        manualTags: [],
        messages: [
          { id: "t1", role: "bot", type: "text", text: "全国（除极少数受限区）都包邮！只要孩子完课达标后在 APP 里填写地址，我们一般 48 小时内发货，3 天左右就能收到这套惊喜啦。", at: new Date(Date.now() - 11 * 60 * 1000).toISOString() },
          { id: "t2", role: "user", type: "text", text: "跟学校人教版/外研版教材同步吗？", at: new Date(Date.now() - 10 * 60 * 1000).toISOString() },
          { id: "t3", role: "bot", type: "text", text: "咱们教的是英语底层的“发音规律”，规律是通用的！规律掌握了，不管学校用什么教材，他背单词都轻松。", at: new Date(Date.now() - 9 * 60 * 1000).toISOString() },
        ],
        memories: [
          { section: "个人信息", items: [{ id: "auto:tianya-grade", text: "家长关注小学英语教材同步问题，可能是小学低年级家庭。", source: "auto", updatedAt: new Date().toISOString() }] },
          { section: "学习状况", items: [{ id: "auto:tianya-need", text: "核心疑问是自然拼读是否能迁移到校内教材。", source: "auto", updatedAt: new Date().toISOString() }] },
        ],
        plans: [
          { stage: "每日群发 · 第2天 · 20:00", at: new Date(Date.now() + 6 * 60 * 60 * 1000).toISOString(), text: "补发自然拼读和校内单词记忆的对比说明，并提醒家长完成体验课打卡。", condition: "发送前确认未出现停止跟进/已报名/退款等标签" },
        ],
      },
      {
        id: "demo-xiaban",
        userId: "ou_38b1_demo_xiaban",
        chatId: "oc_demo_xiaban",
        displayName: "夏般",
        avatarUrl: "",
        currentTag: "自然拼读-顾问自由聊天，38天自动消息任务",
        intent: "自由聊天",
        stopFollowup: false,
        lastAt: new Date(Date.now() - 14 * 60 * 1000).toISOString(),
        lastMessage: "这边主要负责英语自然拼读课、扫码资源、报名售后这类问题哦。如果你是想咨询课程、登录、上课或退款，我可以继续帮你。",
        unreadCount: 2,
        handoff: true,
        manualTags: [{ tag: "人工处理中", createdAt: new Date(Date.now() - 5 * 60 * 1000).toISOString() }],
        messages: [
          { id: "x1", role: "bot", type: "text", text: "理解，这边主要负责英语自然拼读课、扫码资源、报名售后这类问题哦。如果你是想咨询课程、登录、上课或退款，我可以继续帮你。", at: new Date(Date.now() - 16 * 60 * 1000).toISOString() },
          { id: "x2", role: "user", type: "text", text: "约吗", at: new Date(Date.now() - 15 * 60 * 1000).toISOString() },
          { id: "x3", role: "bot", type: "text", text: "这边主要负责英语自然拼读课、扫码资源、报名售后这类问题哦。如果你是想咨询课程、登录、上课或退款，我可以继续帮你。", at: new Date(Date.now() - 14 * 60 * 1000).toISOString() },
        ],
        memories: [
          { section: "购买情况", items: [{ id: "auto:xiaban-paid", text: "用户提到已付款、已报名或需要核实支付/订单信息。", source: "auto", updatedAt: new Date().toISOString() }] },
        ],
        plans: [],
      },
      {
        id: "demo-baike",
        userId: "ou_demo_baike",
        chatId: "oc_demo_baike",
        displayName: "百科",
        avatarUrl: "",
        currentTag: "自然拼读-意向购买，购买链接已发送",
        intent: "意向购买",
        stopFollowup: false,
        lastAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
        lastMessage: "家长，看您进入报名通道了，支付以后麻烦您发我支付成功截图或者报名手机号，我来帮您核实。",
        unreadCount: 0,
        handoff: false,
        manualTags: [],
        messages: [
          { id: "b1", role: "user", type: "text", text: "怎么买？有链接吗？", at: new Date(Date.now() - 24 * 60 * 60 * 1000 - 8 * 60 * 1000).toISOString() },
          { id: "b2", role: "bot", type: "text", text: "可以的，我先发你报名入口。报名后把手机号或截图发我，我帮你确认课程开通状态。", at: new Date(Date.now() - 24 * 60 * 60 * 1000 - 7 * 60 * 1000).toISOString() },
          { id: "b3", role: "user", type: "text", text: "好的，我先看看", at: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString() },
        ],
        memories: [
          { section: "购买情况", items: [{ id: "auto:baike-buy", text: "家长已进入购买路径，后续重点核实支付状态和开课提醒。", source: "auto", updatedAt: new Date().toISOString() }] },
        ],
        plans: [
          { stage: "购买跟进 · 30分钟后", at: new Date(Date.now() + 30 * 60 * 1000).toISOString(), text: "如果家长未回复，提醒可先完成报名，随后发送开课指引。", condition: "未出现已购买/明确拒绝/人工处理中标签" },
        ],
      },
    ];
    
    const els = {
      syncStatus: document.querySelector("#syncStatus"),
      refreshButton: document.querySelector("#refreshButton"),
      conversationList: document.querySelector("#conversationList"),
      searchInput: document.querySelector("#searchInput"),
      chatTitle: document.querySelector("#chatTitle"),
      chatSubtitle: document.querySelector("#chatSubtitle"),
      messages: document.querySelector("#messages"),
      tagPanel: document.querySelector("#tagPanel"),
      memoryPanel: document.querySelector("#memoryPanel"),
      planPanel: document.querySelector("#planPanel"),
      composerText: document.querySelector("#composerText"),
      sendButton: document.querySelector("#sendButton"),
      handoffButton: document.querySelector("#handoffButton"),
      recordButton: document.querySelector("#recordButton"),
      recordButtonText: document.querySelector("#recordButtonText"),
      pendingFile: document.querySelector("#pendingFile"),
      toast: document.querySelector("#toast"),
    };
    
    document.querySelectorAll("[data-view]").forEach((button) => {
      button.addEventListener("click", () => {
        document.querySelectorAll("[data-view]").forEach((item) => item.classList.remove("active"));
        button.classList.add("active");
        state.view = button.dataset.view;
        refresh();
      });
    });
    
    document.querySelectorAll("[data-detail-tab]").forEach((button) => {
      button.addEventListener("click", () => {
        const tab = button.dataset.detailTab;
        document.querySelectorAll("[data-detail-tab]").forEach((item) => item.classList.toggle("active", item === button));
        document.querySelectorAll("[data-detail-panel]").forEach((panel) => panel.classList.toggle("active", panel.dataset.detailPanel === tab));
      });
    });
    
    els.refreshButton.addEventListener("click", refresh);
    els.searchInput.addEventListener("input", debounce(() => {
      state.q = els.searchInput.value.trim();
      refresh();
    }, 250));
    els.sendButton.addEventListener("click", sendCurrentMessage);
    els.composerText.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        sendCurrentMessage();
      }
    });
    els.handoffButton.addEventListener("click", () => {
      setManualHandoff();
    });
    els.recordButton.addEventListener("click", toggleRecording);
    document.querySelectorAll("input[type=file]").forEach((input) => {
      input.addEventListener("change", () => {
        const file = input.files?.[0];
        if (!file) return;
        state.pendingFile = { file, type: input.id.replace("Input", "") };
        els.pendingFile.textContent = `${file.name} · ${formatBytes(file.size)}`;
      });
    });
    refresh();
    const pollTimer = setInterval(() => refresh({ silent: true }), 5000);
    window.__feishuInboxCleanup = () => clearInterval(pollTimer);
    
    async function refresh(options = {}) {
      if (state.refreshInFlight) {
        state.refreshQueued = true;
        return state.refreshInFlight;
      }
      state.refreshInFlight = (async () => {
      try {
        if (!options.silent) els.syncStatus.textContent = "同步中";
        const params = new URLSearchParams({ view: state.view, limit: "120", detailBudget: "32", t: String(Date.now()) });
        if (state.q) params.set("q", state.q);
        const data = await fetchJson(`/api/conversations?${params}`);
        const scope = `${state.view}\n${state.q}`;
        const incomingConversations = data.conversations || [];
        const snapshot = loadConversationSnapshot(scope);
        state.conversations = shouldKeepHistoricalSnapshot(scope)
          ? mergeConversations(snapshot, mergeConversations(state.conversations, incomingConversations))
          : incomingConversations;
        state.dataScope = scope;
        state.tags = data.tags || [];
        if (!state.conversations.some((conversation) => conversation.id === state.selectedConversationId)) {
          state.selectedConversationId = state.conversations[0]?.id || "";
        }
        if (shouldKeepHistoricalSnapshot(scope)) saveConversationSnapshot(scope, state.conversations);
        const signature = renderSignature();
        if (signature !== state.lastRenderSignature) {
          renderConversationList();
          renderSelected();
          state.lastRenderSignature = signature;
        }
        els.syncStatus.textContent = `${countMessages(state.conversations)} 条消息 · ${formatTime(data.updatedAt)}`;
      } catch (error) {
        els.syncStatus.textContent = "同步失败";
        if (!options.silent) toast(error.message || String(error));
      } finally {
        state.refreshInFlight = null;
        if (state.refreshQueued) {
          state.refreshQueued = false;
          setTimeout(() => refresh({ silent: true }), 0);
        }
      }
      })();
      return state.refreshInFlight;
    }
    
    function shouldKeepHistoricalSnapshot(scope) {
      return scope === "all\n";
    }
    
    function loadConversationSnapshot(scope) {
      if (!shouldKeepHistoricalSnapshot(scope)) return [];
      try {
        const payload = JSON.parse(localStorage.getItem(conversationSnapshotKey) || "{}");
        if (payload.scope !== scope || !Array.isArray(payload.conversations)) return [];
        return payload.conversations;
      } catch {
        return [];
      }
    }
    
    function saveConversationSnapshot(scope, conversations) {
      if (!shouldKeepHistoricalSnapshot(scope)) return;
      try {
        localStorage.setItem(conversationSnapshotKey, JSON.stringify({
          scope,
          savedAt: new Date().toISOString(),
          conversations: (conversations || []).slice(0, 120),
        }));
      } catch {
        // Storage can be full or blocked; live data still renders normally.
      }
    }
    
    function mergeConversations(existing, incoming) {
      const byId = new Map();
      for (const conversation of existing || []) {
        const id = conversationIdentity(conversation);
        if (id) byId.set(id, conversation);
      }
      for (const conversation of incoming || []) {
        const id = conversationIdentity(conversation);
        if (!id || !byId.has(id)) {
          if (id) byId.set(id, conversation);
          continue;
        }
        byId.set(id, mergeConversation(byId.get(id), conversation));
      }
      return [...byId.values()].sort((a, b) => String(b.lastAt || "").localeCompare(String(a.lastAt || "")));
    }
    
    function mergeConversation(existing, incoming) {
      const messages = mergeMessages(existing.messages || [], incoming.messages || []);
      const merged = {
        ...existing,
        ...incoming,
        messages,
        executions: uniqueText([...(existing.executions || []), ...(incoming.executions || [])]),
      };
      if ((existing.messages || []).length > (incoming.messages || []).length) {
        merged.lastMessage = messages[messages.length - 1]?.text || incoming.lastMessage || existing.lastMessage || "";
      }
      if (!(incoming.plans || []).length && (existing.plans || []).length) {
        merged.plans = existing.plans;
      }
      if (!(incoming.memories || []).length && (existing.memories || []).length) {
        merged.memories = existing.memories;
      }
      return merged;
    }
    
    function mergeMessages(existing, incoming) {
      const byId = new Map();
      for (const message of [...existing, ...incoming]) {
        const key = messageIdentity(message);
        const current = byId.get(key);
        byId.set(key, current ? { ...current, ...message } : message);
      }
      return [...byId.values()].sort((a, b) => String(a.at || "").localeCompare(String(b.at || "")));
    }
    
    function conversationIdentity(conversation) {
      return conversation?.id || conversation?.chatId || conversation?.userId || "";
    }
    
    function messageIdentity(message) {
      return message?.id || [
        message?.role || "",
        message?.type || "",
        message?.at || "",
        message?.text || "",
        (message?.media || []).map((item) => item.key).join("|"),
      ].join("::");
    }
    
    function renderSignature() {
      return JSON.stringify({
        selected: state.selectedConversationId,
        tags: state.tags,
        conversations: state.conversations.map((conversation) => ({
          id: conversationIdentity(conversation),
          title: conversation.displayName,
          avatarUrl: conversation.avatarUrl,
          currentTag: conversation.currentTag,
          intent: conversation.intent,
          stopFollowup: conversation.stopFollowup,
          lastAt: conversation.lastAt,
          lastMessage: conversation.lastMessage,
          resetAt: conversation.resetAt,
          unreadCount: conversation.unreadCount,
          handoff: conversation.handoff,
          manualTags: conversation.manualTags,
          messages: (conversation.messages || []).map((message) => ({
            id: messageIdentity(message),
            role: message.role,
            type: message.type,
            text: message.text,
            at: message.at,
            media: (message.media || []).map((item) => `${item.type || ""}:${item.key || ""}:${item.messageId || ""}`).join("|"),
          })),
          memories: conversation.memories,
          plans: conversation.plans,
        })),
      });
    }
    
    function renderConversationList() {
      if (!state.conversations.length) {
        els.conversationList.innerHTML = `<div class="empty-state"><p>没有匹配的会话</p></div>`;
        return;
      }
      els.conversationList.innerHTML = state.conversations.map((conversation) => {
        const id = conversation.id || conversation.chatId || conversation.userId;
        const active = id === state.selectedConversationId ? "active" : "";
        const handoff = conversation.handoff ? `<span class="mini-pill">转人工</span>` : "";
        const title = conversation.displayName || shortId(conversation.chatId || conversation.userId || id);
        const visibleCount = displayMessages(conversation).length;
        const totalCount = conversation.messages?.length || 0;
        const messageCount = conversation.resetAt && visibleCount < totalCount ? `${visibleCount}/${totalCount}` : totalCount;
        return `
          <button class="conversation-item ${active}" data-conversation-id="${escapeHtml(id)}">
            ${renderAvatar(conversation.avatarUrl, title, "avatar-letter")}
            <div class="item-main">
              <div class="item-top">
                <span class="item-title">${escapeHtml(title)}</span>
                <span class="item-time">${formatTime(conversation.lastAt)}</span>
              </div>
              <div class="item-meta">${handoff}${escapeHtml(conversation.currentTag || conversation.intent || "未打标")}</div>
              <div class="item-preview">${escapeHtml(conversation.lastMessage || "暂无消息")}</div>
            </div>
            <span class="message-count">${escapeHtml(messageCount)} 条</span>
          </button>
        `;
      }).join("");
      document.querySelectorAll(".conversation-item").forEach((button) => {
        button.addEventListener("click", () => {
          state.selectedConversationId = button.dataset.conversationId;
          renderConversationList();
          renderSelected();
        });
      });
    }
    
    function renderSelected() {
      const conversation = selectedConversation();
      if (!conversation) {
        els.chatTitle.textContent = "选择一个用户";
        els.chatSubtitle.textContent = "查看聚合历史、标签和待发送内容";
        els.messages.innerHTML = `<div class="empty-state"><h2>暂无会话</h2><p>调整筛选条件或点击刷新。</p></div>`;
        els.tagPanel.textContent = "未选择用户";
        els.memoryPanel.textContent = "未选择用户";
        els.planPanel.textContent = "暂无";
        return;
      }
      els.chatTitle.textContent = conversation.displayName || shortId(conversation.chatId || conversation.userId);
      const visibleMessages = displayMessages(conversation);
      const hiddenCount = hiddenHistoryCount(conversation);
      els.chatSubtitle.textContent = `${visibleMessages.length}${hiddenCount ? "/" + conversation.messages.length : ""} 条消息 · ${formatTime(conversation.lastAt)} · ${shortId(conversation.userId || conversation.chatId)}`;
      els.messages.innerHTML = [
        renderHistoryFold(conversation, hiddenCount),
        ...visibleMessages.map((message) => renderMessage(message, conversation)),
      ].join("");
      els.messages.scrollTop = els.messages.scrollHeight;
      const tagItems = buildTagItems(conversation);
      const addOptions = buildAddTagOptions(tagItems);
      els.tagPanel.innerHTML = `
        <div class="tag-toolbar">
          <div>
            <strong>标签管理</strong>
            <span>配置标签条件、触发工作流和当前会话标签</span>
          </div>
          <button class="tag-manage-button" data-tag-manager-toggle>${state.tagManagerOpen ? "收起" : "管理"}</button>
        </div>
        ${state.tagManagerOpen ? renderTagManager(conversation, tagItems) : ""}
        <div class="tag-current-list">
          ${tagItems.length
            ? tagItems.map((item) => `
          <div class="tag-text-item" data-edit-tag="${escapeHtml(item.tag)}" title="点击编辑标签规则">
            <span>${escapeHtml(displayTagName(item.tag))}</span>
            <button class="tag-remove-button" data-remove-tag="${escapeHtml(item.tag)}" title="删除标签" aria-label="删除 ${escapeHtml(item.tag)}">×</button>
          </div>
        `).join("")
            : `<span class="muted">未打标</span>`}
        </div>
        <div class="tag-add-panel">
          <div class="tag-add-title">手动添加标签</div>
          <div class="tag-option-list">
            ${addOptions.length
              ? addOptions.map((tag) => `<button class="tag-option-button" data-add-tag="${escapeHtml(tag)}">${escapeHtml(tag)}</button>`).join("")
              : `<span class="muted">暂无可添加标签</span>`}
          </div>
        </div>
      `;
      document.querySelectorAll("[data-tag-manager-toggle]").forEach((button) => {
        button.addEventListener("click", () => {
          state.tagManagerOpen = !state.tagManagerOpen;
          renderSelected();
        });
      });
      document.querySelectorAll("[data-edit-tag]").forEach((item) => {
        item.addEventListener("click", (event) => {
          if (event.target.closest("[data-remove-tag]")) return;
          state.tagManagerOpen = true;
          state.tagEditOpen[item.dataset.editTag || ""] = true;
          renderSelected();
        });
      });
      document.querySelectorAll("[data-tag-rule-edit]").forEach((button) => {
        button.addEventListener("click", () => {
          const tag = button.dataset.tagRuleEdit || "";
          state.tagEditOpen[tag] = !state.tagEditOpen[tag];
          renderSelected();
        });
      });
      document.querySelectorAll("[data-tag-rule-save]").forEach((button) => {
        button.addEventListener("click", () => saveTagRule(button.dataset.tagRuleSave || ""));
      });
      document.querySelectorAll("[data-tag-current-save]").forEach((button) => {
        button.addEventListener("click", () => renameCurrentTag(button.dataset.tagCurrentSave || ""));
      });
      document.querySelectorAll("[data-tag-rule-delete]").forEach((button) => {
        button.addEventListener("click", () => deleteManagedTag(button.dataset.tagRuleDelete || ""));
      });
      document.querySelectorAll("[data-remove-tag]").forEach((button) => {
        button.addEventListener("click", () => removeTag(button.dataset.removeTag || ""));
      });
      document.querySelectorAll("[data-add-tag]").forEach((button) => {
        button.addEventListener("click", () => addTag(button.dataset.addTag || ""));
      });
      renderMemoryPanel(conversation);
      els.planPanel.innerHTML = conversation.plans.length ? `
        <div class="plan-summary">共 ${conversation.plans.length} 条待发送，到点发送前仍会重新检查标签</div>
        ${conversation.plans.map((plan, index) => `
        <div class="plan-item">
          <strong><span>${index + 1}</span>${escapeHtml(plan.stage)} ${plan.at ? "· " + escapeHtml(formatTime(plan.at)) : ""}</strong>
          <p>${escapeHtml(plan.text)}</p>
          ${renderPlanMedia(plan)}
          ${plan.condition ? `<small>${escapeHtml(plan.condition)}</small>` : ""}
        </div>
      `).join("")}
      ` : `<span class="muted">暂无待发送</span>`;
      document.querySelectorAll("[data-toggle-history]").forEach((button) => {
        button.addEventListener("click", () => {
          const id = button.dataset.toggleHistory;
          state.expandedHistory[id] = !state.expandedHistory[id];
          renderSelected();
        });
      });
    }
    
    function renderPlanMedia(plan) {
      const images = [
        ...(plan.contentImages || []).map((item) => ({ ...item, label: "内容图" })),
        ...(plan.signupImages || []).map((item) => ({ ...item, label: "报名图" })),
      ].filter((item) => item.file);
      if (!images.length) return "";
      return `
        <div class="plan-media">
          ${images.map((item) => `
            <a href="${escapeHtml(item.file)}" target="_blank" rel="noreferrer">
              <img src="${escapeHtml(item.file)}" alt="${escapeHtml(item.label)}" loading="lazy" />
              <span>${escapeHtml(item.label)}</span>
            </a>
          `).join("")}
        </div>
      `;
    }

    function renderTagManager(conversation, tagItems) {
      const managedTags = getManagedTags(tagItems);
      return `
        <section class="tag-manager">
          <div class="tag-manager-header">
            <div>
              <strong>统一标签规则</strong>
              <span>点击任一标签可设置生成条件、触发工作流、改名或删除</span>
            </div>
            <span>${managedTags.length} 个标签</span>
          </div>
          <div class="tag-manager-current">
            <div class="tag-rule-section-title">当前会话标签</div>
            ${tagItems.length ? tagItems.map((item) => renderCurrentTagEditor(item.tag)).join("") : `<span class="muted">当前会话暂无标签</span>`}
          </div>
          <div class="tag-rule-section-title">规则库</div>
          <div class="tag-rule-list">
            ${managedTags.map((tag) => renderTagRuleRow(tag)).join("")}
          </div>
        </section>
      `;
    }

    function renderCurrentTagEditor(tag) {
      const open = Boolean(state.tagEditOpen[tag]);
      if (!open) {
        return `
          <button class="tag-current-edit" data-tag-rule-edit="${escapeHtml(tag)}">
            <span>${escapeHtml(displayTagName(tag))}</span>
            <em>编辑当前标签</em>
          </button>
        `;
      }
      return `
        <div class="tag-rule-card active">
          <label>
            <span>标签名称</span>
            <input data-tag-current-name="${escapeHtml(tag)}" value="${escapeHtml(displayTagName(tag))}" />
          </label>
          <div class="tag-rule-actions">
            <button data-tag-current-save="${escapeHtml(tag)}">保存名称</button>
            <button class="ghost" data-remove-tag="${escapeHtml(tag)}">从当前会话删除</button>
          </div>
        </div>
      `;
    }

    function renderTagRuleRow(tag) {
      const rule = getTagRule(tag);
      const open = Boolean(state.tagEditOpen[tag]);
      const workflow = rule.workflow || defaultTagRule(tag).workflow;
      if (!open) {
        return `
          <article class="tag-rule-row">
            <div>
              <strong>${escapeHtml(displayTagName(tag))}</strong>
              <span>${escapeHtml(rule.condition || defaultTagRule(tag).condition)}</span>
            </div>
            <em>${escapeHtml(workflow)}</em>
            <button data-tag-rule-edit="${escapeHtml(tag)}">设置</button>
          </article>
        `;
      }
      return `
        <article class="tag-rule-card active">
          <label>
            <span>标签名称</span>
            <input data-tag-name="${escapeHtml(tag)}" value="${escapeHtml(displayTagName(tag))}" />
          </label>
          <label>
            <span>生成条件</span>
            <textarea rows="3" data-tag-condition="${escapeHtml(tag)}">${escapeHtml(rule.condition || defaultTagRule(tag).condition)}</textarea>
          </label>
          <label>
            <span>触发工作流</span>
            <select data-tag-workflow="${escapeHtml(tag)}">
              ${workflowOptions.map((option) => `<option value="${escapeHtml(option)}" ${option === workflow ? "selected" : ""}>${escapeHtml(option)}</option>`).join("")}
            </select>
          </label>
          <div class="tag-rule-actions">
            <button data-tag-rule-save="${escapeHtml(tag)}">保存规则</button>
            <button class="ghost danger" data-tag-rule-delete="${escapeHtml(tag)}">删除标签</button>
          </div>
        </article>
      `;
    }
    
    function renderMemoryPanel(conversation) {
      const memories = normalizeMemoryGroups(conversation.memories || []);
      els.memoryPanel.innerHTML = `
        <div class="memory-intro">根据当前对话实时更新，矛盾信息以用户最近表达为准</div>
        ${memories.map((group) => `
          <section class="memory-card">
            <div class="memory-card-header">
              <div>
                <div class="memory-card-title">${escapeHtml(group.section)}</div>
                <div class="memory-card-count">${group.items.length ? `${group.items.length} 条` : "暂无记录"}</div>
              </div>
              <button class="memory-add-open" data-memory-add-open="${escapeHtml(group.section)}">添加</button>
            </div>
            <div class="memory-items">
              ${group.items.length
                ? group.items.map((item) => renderMemoryItem(group.section, item)).join("")
                : `<div class="memory-empty">暂无</div>`}
            </div>
            ${state.memoryAddOpen[group.section] ? renderMemoryAddForm(group.section) : ""}
          </section>
        `).join("")}
      `;
      document.querySelectorAll("[data-memory-add-open]").forEach((button) => {
        button.addEventListener("click", () => {
          const section = button.dataset.memoryAddOpen || "";
          state.memoryAddOpen[section] = !state.memoryAddOpen[section];
          renderMemoryPanel(conversation);
        });
      });
      document.querySelectorAll("[data-memory-add-cancel]").forEach((button) => {
        button.addEventListener("click", () => {
          state.memoryAddOpen[button.dataset.memoryAddCancel || ""] = false;
          renderMemoryPanel(conversation);
        });
      });
      document.querySelectorAll("[data-memory-edit-open]").forEach((button) => {
        button.addEventListener("click", () => {
          const id = button.dataset.memoryEditOpen || "";
          state.memoryEditOpen[id] = true;
          renderMemoryPanel(conversation);
        });
      });
      document.querySelectorAll("[data-memory-edit-cancel]").forEach((button) => {
        button.addEventListener("click", () => {
          delete state.memoryEditOpen[button.dataset.memoryEditCancel || ""];
          renderMemoryPanel(conversation);
        });
      });
      document.querySelectorAll("[data-memory-add]").forEach((button) => {
        button.addEventListener("click", () => addMemory(button.dataset.memoryAdd || ""));
      });
      document.querySelectorAll("[data-memory-save]").forEach((button) => {
        button.addEventListener("click", () => saveMemory(button.dataset.memorySave || "", button.dataset.memorySection || ""));
      });
      document.querySelectorAll("[data-memory-remove]").forEach((button) => {
        button.addEventListener("click", () => removeMemory(button.dataset.memoryRemove || "", button.dataset.memorySection || ""));
      });
    }
    
    function renderMemoryAddForm(section) {
      return `
        <div class="memory-add-form">
          <textarea rows="3" data-memory-new="${escapeHtml(section)}" placeholder="补充一条${escapeHtml(section)}"></textarea>
          <div class="memory-actions">
            <span>手动记忆</span>
            <button data-memory-add="${escapeHtml(section)}">保存</button>
            <button class="ghost" data-memory-add-cancel="${escapeHtml(section)}">取消</button>
          </div>
        </div>
      `;
    }
    
    function normalizeMemoryGroups(groups) {
      const bySection = new Map(memorySections.map((section) => [section, []]));
      for (const group of groups || []) {
        const section = memorySections.includes(group.section) ? group.section : "个人信息";
        if (!bySection.has(section)) bySection.set(section, []);
        bySection.get(section).push(...(group.items || []));
      }
      return [...bySection.entries()].map(([section, items]) => ({ section, items }));
    }
    
    function renderMemoryItem(section, item) {
      const source = item.source === "manual" ? "人工" : "AI";
      const editing = Boolean(state.memoryEditOpen[item.id]);
      if (editing) {
        return `
          <div class="memory-item manual editing">
            <textarea rows="2" data-memory-input="${escapeHtml(item.id)}">${escapeHtml(item.text)}</textarea>
            <div class="memory-actions">
              <span>${source === "AI" ? "转为人工记忆" : "人工编辑中"}</span>
              <button data-memory-save="${escapeHtml(item.id)}" data-memory-section="${escapeHtml(section)}">保存</button>
              <button class="ghost" data-memory-edit-cancel="${escapeHtml(item.id)}">取消</button>
              <button data-memory-remove="${escapeHtml(item.id)}" data-memory-section="${escapeHtml(section)}">删除</button>
            </div>
          </div>
        `;
      }
      return `
        <div class="memory-item ${item.source === "manual" ? "manual" : "auto"}">
          <p>${escapeHtml(item.text)}</p>
          <div class="memory-actions">
            <span>${source}</span>
            <button data-memory-edit-open="${escapeHtml(item.id)}">编辑</button>
            <button data-memory-remove="${escapeHtml(item.id)}" data-memory-section="${escapeHtml(section)}">删除</button>
          </div>
        </div>
      `;
    }
    
    function displayMessages(conversation) {
      const messages = conversation.messages || [];
      if (!conversation.resetAt || state.expandedHistory[conversation.id]) return messages;
      const resetTime = Date.parse(conversation.resetAt);
      if (!Number.isFinite(resetTime)) return messages;
      return messages.filter((message) => {
        const time = Date.parse(message.at || "");
        return !Number.isFinite(time) || time >= resetTime;
      });
    }
    
    function hiddenHistoryCount(conversation) {
      const messages = conversation.messages || [];
      if (!conversation.resetAt) return 0;
      const resetTime = Date.parse(conversation.resetAt);
      if (!Number.isFinite(resetTime)) return 0;
      return messages.filter((message) => {
        const time = Date.parse(message.at || "");
        return Number.isFinite(time) && time < resetTime;
      }).length;
    }
    
    function renderHistoryFold(conversation, hiddenCount) {
      if (!conversation.resetAt || !hiddenCount) return "";
      const expanded = Boolean(state.expandedHistory[conversation.id]);
      return `
        <button class="history-fold" data-toggle-history="${escapeHtml(conversation.id)}">
          ${expanded ? "收起历史对话" : `查看历史对话（${hiddenCount} 条）`}
        </button>
      `;
    }
    
    function renderMessage(message, conversation) {
      const role = message.role === "user" ? "user" : message.role === "agent" ? "agent" : "bot";
      const label = role === "user" ? "用户" : role === "agent" ? "人工" : "机器人";
      const bodyText = cleanDisplayText(message.text || "");
      const summary = message.mediaSummary && !bodyText.includes(message.mediaSummary) ? `\n\n[图片/语音识别]\n${message.mediaSummary}` : "";
      const initial = role === "user" ? "用" : role === "agent" ? "人" : "机";
      const avatarUrl = role === "user" ? conversation.avatarUrl : "";
      const media = renderMedia(message);
      return `
        <div class="message-row ${role}">
          ${renderAvatar(avatarUrl, initial, "message-avatar")}
          <div class="bubble">
            <div class="bubble-meta">
              <strong>${label}</strong>
              <span>${escapeHtml(formatTime(message.at))}</span>
            </div>
            ${media}
            <div class="bubble-text">${escapeHtml(bodyText + summary)}</div>
          </div>
        </div>
      `;
    }
    
    function renderMedia(message) {
      const images = (message.media || []).filter((item) => item.type === "image" && item.key);
      if (!images.length) return "";
      return `<div class="media-grid">${images.map((image, index) => {
        const messageId = image.messageId || message.id || "";
        const src = `/api/feishu-image/${encodeURIComponent(image.key)}?messageId=${encodeURIComponent(messageId)}`;
        const ratio = image.width && image.height ? `style="aspect-ratio:${image.width}/${image.height}"` : "";
        return `
          <a class="media-thumb" href="${src}" target="_blank" rel="noreferrer" ${ratio}>
            <img src="${src}" alt="历史图片 ${index + 1}" />
            <span>图片 ${index + 1}</span>
          </a>
        `;
      }).join("")}</div>`;
    }
    
    function renderAvatar(url, fallback, className) {
      const text = String(fallback || "O").slice(0, 1).toUpperCase();
      if (!url) return `<div class="${className}">${escapeHtml(text)}</div>`;
      return `
        <div class="${className} has-image">
          <img src="${escapeHtml(url)}" alt="" loading="lazy" onerror="this.remove(); this.parentElement.classList.remove('has-image'); this.parentElement.textContent='${escapeHtml(text)}';" />
          <span>${escapeHtml(text)}</span>
        </div>
      `;
    }
    
    function buildTagItems(conversation) {
      const manual = (conversation.manualTags || []).map((item) => item.tag);
      return uniqueMeaningfulTags([
        ...manual,
        conversation.currentTag || "",
        conversation.intent || "",
        conversation.stopFollowup ? "已停止跟进" : "",
      ])
        .flatMap((tag) => String(tag || "").split(/[，,]/))
        .map((tag) => tag.trim())
        .filter(Boolean)
        .filter((tag) => !getTagRule(tag).deleted)
        .map((tag) => ({ tag }));
    }
    
    function buildAddTagOptions(currentItems) {
      const current = new Set(currentItems.map((item) => item.tag));
      const fromServer = (state.tags || []).map((item) => item.tag).filter(Boolean);
      return uniqueText([...commonTagOptions, ...fromServer])
        .filter((tag) => !getTagRule(tag).deleted)
        .filter((tag) => !current.has(tag))
        .slice(0, 36);
    }

    function getManagedTags(currentItems = []) {
      const fromServer = (state.tags || []).map((item) => item.tag).filter(Boolean);
      const current = currentItems.map((item) => item.tag);
      return uniqueText([...current, ...commonTagOptions, ...fromServer, ...Object.keys(state.tagRules || {})])
        .filter((tag) => !getTagRule(tag).deleted);
    }

    function getTagRule(tag) {
      return { ...defaultTagRule(tag), ...(state.tagRules?.[tag] || {}) };
    }

    function displayTagName(tag) {
      return getTagRule(tag).name || tag;
    }

    function defaultTagRule(tag) {
      const text = String(tag || "");
      if (/人工|待人工/.test(text)) {
        return {
          name: text,
          condition: "AI 识别到投诉、无法自动回答、用户明确要求人工，或对话连续两轮无法解决。",
          workflow: "扫码资源-人工处理",
        };
      }
      if (/意向购买|要买|怎么买|点雷达|购买链接/.test(text)) {
        return {
          name: text,
          condition: "用户询价、要链接、进入报名页、点击雷达或主动确认购买路径。",
          workflow: "自然拼读-高意向跟进",
        };
      }
      if (/扫码资源|验证码|答案|资源/.test(text)) {
        return {
          name: text,
          condition: "用户反馈扫码、验证码、资料领取、答案资源缺失或资源不匹配。",
          workflow: "扫码资源-人工处理",
        };
      }
      if (/已报名|已购买|购买后|报名/.test(text)) {
        return {
          name: text,
          condition: "用户提供支付成功、报名手机号、订单截图，或系统确认课包开通。",
          workflow: "报名后开课提醒",
        };
      }
      if (/拒绝|停止|挽回/.test(text)) {
        return {
          name: text,
          condition: "用户明确拒绝、要求停止跟进、退款，或表达强烈反感。",
          workflow: "停止跟进与拒绝挽回",
        };
      }
      return {
        name: text,
        condition: "AI 根据最近对话意图、历史记忆和人工标注综合判断。",
        workflow: /38天/.test(text) ? "38天自动消息任务" : "不触发工作流",
      };
    }

    function loadTagRules() {
      try {
        const raw = localStorage.getItem(tagRulesKey);
        return raw ? JSON.parse(raw) || {} : {};
      } catch {
        return {};
      }
    }

    function saveTagRules() {
      localStorage.setItem(tagRulesKey, JSON.stringify(state.tagRules || {}));
    }

    function saveTagRule(tag) {
      if (!tag) return toast("标签为空");
      const name = document.querySelector(`[data-tag-name="${cssEscape(tag)}"]`)?.value.trim() || tag;
      const condition = document.querySelector(`[data-tag-condition="${cssEscape(tag)}"]`)?.value.trim() || defaultTagRule(tag).condition;
      const workflow = document.querySelector(`[data-tag-workflow="${cssEscape(tag)}"]`)?.value || defaultTagRule(tag).workflow;
      state.tagRules[tag] = { ...getTagRule(tag), name, condition, workflow, deleted: false, updatedAt: new Date().toISOString() };
      saveTagRules();
      state.tagEditOpen[tag] = false;
      toast("标签规则已保存");
      renderSelected();
    }

    async function renameCurrentTag(tag) {
      const conversation = selectedConversation();
      if (!conversation) return toast("先选择一个用户");
      const name = document.querySelector(`[data-tag-current-name="${cssEscape(tag)}"]`)?.value.trim();
      if (!name) return toast("请输入标签名称");
      state.tagRules[tag] = { ...getTagRule(tag), name, updatedAt: new Date().toISOString() };
      saveTagRules();
      if (name !== tag) {
        conversation.currentTag = replaceTagText(conversation.currentTag || "", tag, name);
        conversation.manualTags = (conversation.manualTags || []).map((item) => item.tag === tag ? { ...item, tag: name } : item);
        await fetchJson("/api/manual-tag", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ action: "remove", tag, userId: conversation.userId, chatId: conversation.chatId }),
        });
        await fetchJson("/api/manual-tag", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ action: "add", tag: name, userId: conversation.userId, chatId: conversation.chatId }),
        });
      }
      state.tagEditOpen[tag] = false;
      toast("当前标签已更新");
      await refresh();
    }

    function deleteManagedTag(tag) {
      if (!tag) return toast("标签为空");
      state.tagRules[tag] = { ...getTagRule(tag), deleted: true, updatedAt: new Date().toISOString() };
      saveTagRules();
      delete state.tagEditOpen[tag];
      toast("已从标签库移除");
      renderSelected();
    }

    function replaceTagText(source, oldTag, newTag) {
      return uniqueText(String(source || "").split(/[，,]/).map((item) => item.trim() === oldTag ? newTag : item)).join("，");
    }
    
    async function setManualHandoff() {
      const conversation = selectedConversation();
      if (!conversation) return toast("先选择一个用户");
      await fetchJson("/api/manual-tag", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          action: "add",
          tag: "人工处理中",
          userId: conversation.userId,
          chatId: conversation.chatId,
        }),
      });
      els.composerText.value = "家长，我这边先帮您接着处理，麻烦您把具体问题或相关截图发我一下，我来核实";
      els.composerText.focus();
      toast("已标记人工处理中");
      await refresh();
    }
    
    async function addTag(tag) {
      const conversation = selectedConversation();
      if (!conversation) return toast("先选择一个用户");
      if (!tag) return toast("请选择标签");
      await fetchJson("/api/manual-tag", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          action: "add",
          tag,
          userId: conversation.userId,
          chatId: conversation.chatId,
          currentTag: conversation.currentTag || "",
        }),
      });
      toast(/意向购买|点雷达|要买|怎么买|考虑|犹豫|购买链接/.test(tag) ? "已添加标签并生成待发送计划" : "已添加标签");
      await refresh();
    }
    
    async function removeTag(tag) {
      const conversation = selectedConversation();
      if (!conversation) return toast("先选择一个用户");
      if (!tag) return toast("标签为空");
      await fetchJson("/api/manual-tag", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          action: "remove",
          tag,
          userId: conversation.userId,
          chatId: conversation.chatId,
          currentTag: conversation.currentTag || "",
        }),
      });
      toast("已删除标签");
      await refresh();
    }
    
    async function addMemory(section) {
      const conversation = selectedConversation();
      if (!conversation) return toast("先选择一个用户");
      const input = document.querySelector(`[data-memory-new="${cssEscape(section)}"]`);
      const text = input?.value.trim() || "";
      if (!text) return toast("请输入记忆内容");
      await fetchJson("/api/manual-memory", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          action: "upsert",
          section,
          text,
          userId: conversation.userId,
          chatId: conversation.chatId,
        }),
      });
      if (input) input.value = "";
      state.memoryAddOpen[section] = false;
      toast("已添加聊天记忆");
      await refresh();
    }
    
    async function saveMemory(id, section) {
      const conversation = selectedConversation();
      if (!conversation) return toast("先选择一个用户");
      const input = document.querySelector(`[data-memory-input="${cssEscape(id)}"]`);
      const text = input?.value.trim() || "";
      if (!text) return toast("记忆内容不能为空");
      await fetchJson("/api/manual-memory", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          action: "upsert",
          id,
          section,
          text,
          hideAuto: id.startsWith("auto:"),
          userId: conversation.userId,
          chatId: conversation.chatId,
        }),
      });
      delete state.memoryEditOpen[id];
      toast("已更新聊天记忆");
      await refresh();
    }
    
    async function removeMemory(id, section) {
      const conversation = selectedConversation();
      if (!conversation) return toast("先选择一个用户");
      await fetchJson("/api/manual-memory", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          action: "remove",
          id,
          section,
          text: document.querySelector(`[data-memory-input="${cssEscape(id)}"]`)?.value.trim() || "",
          userId: conversation.userId,
          chatId: conversation.chatId,
        }),
      });
      delete state.memoryEditOpen[id];
      toast("已删除聊天记忆");
      await refresh();
    }
    
    async function sendCurrentMessage() {
      const conversation = selectedConversation();
      if (!conversation) return toast("先选择一个用户");
      const text = els.composerText.value.trim();
      if (!text && !state.pendingFile) return toast("请输入内容或选择附件");
      const payload = {
        chatId: conversation.chatId,
        type: state.pendingFile?.type || "text",
        text,
      };
      if (state.pendingFile) {
        payload.fileName = state.pendingFile.file.name;
        payload.base64 = await fileToBase64(state.pendingFile.file);
      }
      const result = await fetchJson("/api/send", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!result.ok) throw new Error(result.error || "发送失败");
      conversation.messages.push({
        id: `agent:${Date.now()}`,
        role: "agent",
        type: payload.type,
        text: text || `[${payload.type}] ${payload.fileName}`,
        at: new Date().toISOString(),
      });
      els.composerText.value = "";
      state.pendingFile = null;
      els.pendingFile.textContent = "";
      renderSelected();
      toast("已发送");
      setTimeout(() => refresh({ silent: true }), 1200);
    }
    
    async function toggleRecording() {
      if (state.recorder?.state === "recording") {
        state.recorder.stop();
        return;
      }
      if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === "undefined") {
        return toast("当前浏览器不支持录音");
      }
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const mimeType = chooseRecordingMimeType();
        const recorder = new MediaRecorder(stream, mimeType ? { mimeType } : undefined);
        state.recordChunks = [];
        state.recordingStartedAt = Date.now();
        state.recorder = recorder;
        recorder.addEventListener("dataavailable", (event) => {
          if (event.data && event.data.size > 0) state.recordChunks.push(event.data);
        });
        recorder.addEventListener("stop", () => {
          stream.getTracks().forEach((track) => track.stop());
          const duration = Math.max(1, Math.round((Date.now() - state.recordingStartedAt) / 1000));
          const type = recorder.mimeType || mimeType || "audio/webm";
          const ext = type.includes("ogg") || type.includes("opus") ? "opus" : type.includes("mp4") ? "m4a" : "webm";
          const blob = new Blob(state.recordChunks, { type });
          if (!blob.size) {
            resetRecordingUi();
            return toast("录音为空，请重试");
          }
          const file = new File([blob], `browser-recording-${Date.now()}.${ext}`, { type });
          state.pendingFile = { file, type: "audio" };
          els.pendingFile.textContent = `浏览器录音 ${duration}s · ${formatBytes(file.size)}`;
          resetRecordingUi();
        });
        recorder.start();
        els.recordButton.classList.add("recording");
        els.recordButtonText.textContent = "停止";
        els.pendingFile.textContent = "正在录音，再点一次停止";
      } catch (error) {
        resetRecordingUi();
        toast(error?.name === "NotAllowedError" ? "麦克风权限未开启" : "录音启动失败");
      }
    }
    
    function chooseRecordingMimeType() {
      const options = [
        "audio/ogg;codecs=opus",
        "audio/webm;codecs=opus",
        "audio/mp4",
        "audio/webm",
      ];
      return options.find((item) => MediaRecorder.isTypeSupported(item)) || "";
    }
    
    function resetRecordingUi() {
      state.recorder = null;
      state.recordChunks = [];
      state.recordingStartedAt = 0;
      els.recordButton.classList.remove("recording");
      els.recordButtonText.textContent = "录音";
    }
    
    function selectedConversation() {
      return state.conversations.find((conversation) => conversation.id === state.selectedConversationId);
    }
    
    function countMessages(conversations) {
      return conversations.reduce((total, conversation) => total + (conversation.messages?.length || 0), 0);
    }
    
    async function fetchJson(url, options = {}) {
      await new Promise((resolve) => setTimeout(resolve, 180));
      const path = String(url).split("?")[0];
      if (path === "/api/conversations") {
        const params = new URLSearchParams(String(url).split("?")[1] || "");
        const view = params.get("view") || "all";
        const q = (params.get("q") || "").trim().toLowerCase();
        let conversations = mockConversations;
        if (view === "handoff") conversations = conversations.filter((item) => item.handoff);
        if (q) {
          conversations = conversations.filter((item) => [
            item.displayName,
            item.currentTag,
            item.intent,
            item.lastMessage,
            ...(item.messages || []).map((message) => message.text),
          ].join(" ").toLowerCase().includes(q));
        }
        return {
          ok: true,
          updatedAt: new Date().toISOString(),
          total: mockConversations.length,
          tags: commonTagOptions.map((tag) => ({ tag, count: mockConversations.filter((item) => `${item.currentTag} ${item.intent}`.includes(tag)).length })),
          conversations: conversations.map(clone),
        };
      }
      const body = options.body ? JSON.parse(options.body) : {};
      const conversation = mockConversations.find((item) => item.chatId === body.chatId || item.userId === body.userId || item.id === body.id);
      if (path === "/api/manual-tag") {
        if (!conversation) return { ok: true };
        const manual = conversation.manualTags || [];
        if (body.action === "remove") {
          conversation.manualTags = manual.filter((item) => item.tag !== body.tag);
          conversation.currentTag = uniqueText(String(conversation.currentTag || "").split(/[，,]/).filter((tag) => tag.trim() !== body.tag)).join("，");
        } else if (body.tag && !manual.some((item) => item.tag === body.tag)) {
          conversation.manualTags = [...manual, { tag: body.tag, createdAt: new Date().toISOString() }];
          conversation.currentTag = uniqueMeaningfulTags([conversation.currentTag, body.tag]).join("，");
          conversation.handoff = conversation.handoff || /人工处理中|转人工|待人工|投诉/.test(body.tag);
        }
        conversation.lastAt = new Date().toISOString();
        return { ok: true };
      }
      if (path === "/api/manual-memory") {
        if (!conversation) return { ok: true };
        const section = body.section || "个人信息";
        const groups = normalizeMemoryGroups(conversation.memories || []);
        const group = groups.find((item) => item.section === section) || { section, items: [] };
        if (!groups.includes(group)) groups.push(group);
        if (body.action === "remove") {
          group.items = group.items.filter((item) => item.id !== body.id);
        } else {
          const id = body.id || `manual:${Date.now()}`;
          const existing = group.items.find((item) => item.id === id);
          const next = { id, text: body.text, source: "manual", updatedAt: new Date().toISOString() };
          if (existing) Object.assign(existing, next);
          else group.items.push(next);
        }
        conversation.memories = groups;
        return { ok: true };
      }
      if (path === "/api/send") return { ok: true, demo: true };
      return { ok: true };
    }

    function clone(value) {
      return JSON.parse(JSON.stringify(value));
    }
    
    function fileToBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(String(reader.result || "").split(",")[1] || "");
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    }
    
    function shortId(id) {
      if (!id) return "未知用户";
      return id.length > 18 ? `${id.slice(0, 8)}…${id.slice(-6)}` : id;
    }
    
    function formatTime(value) {
      if (!value) return "-";
      const date = new Date(value);
      if (Number.isNaN(date.getTime())) return value;
      return new Intl.DateTimeFormat("zh-CN", { month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" }).format(date);
    }
    
    function formatBytes(bytes) {
      if (bytes < 1024) return `${bytes} B`;
      if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
      return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
    }
    
    function escapeHtml(value) {
      return String(value ?? "").replace(/[&<>"']/g, (char) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      }[char]));
    }
    
    function cleanDisplayText(value) {
      return String(value || "").replace(/^\[object Object\](,\[object Object\])*$/g, "").trim();
    }
    
    function uniqueText(values) {
      const seen = new Set();
      const result = [];
      for (const value of values) {
        const text = String(value || "").trim();
        if (!text || seen.has(text)) continue;
        seen.add(text);
        result.push(text);
      }
      return result;
    }
    
    function uniqueMeaningfulTags(values) {
      const compact = uniqueText(values);
      return compact.filter((tag, index) => {
        return !compact.some((other, otherIndex) => {
          if (index === otherIndex) return false;
          return other.length > tag.length && other.includes(tag);
        });
      });
    }
    
    function cssEscape(value) {
      if (window.CSS?.escape) return CSS.escape(String(value));
      return String(value).replace(/["\\]/g, "\\$&");
    }
    
    function debounce(fn, delay) {
      let timer;
      return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
      };
    }
    
    function toast(message) {
      els.toast.textContent = message;
      els.toast.classList.add("show");
      clearTimeout(toast.timer);
      toast.timer = setTimeout(() => els.toast.classList.remove("show"), 2400);
    }
    
  }

  window.initFeishuInbox = initFeishuInbox;
})();
