# 演示文稿目录

## 当前结构（待修改）

> 问题：Part 01 重复、节奏不均、Transformer 缺失

---

## 新结构方案

### 封面 & 概览

| # | Slide | 主题内容 | 状态 |
|---|-------|----------|------|
| 1 | Slide01Title | **封面**：深入浅出大语言模型 | 保留 |
| 2 | Slide02Overview | **内容概览**：更新为新的 Part 结构 | 需改 |

### Part 01: 用规则理解世界

| # | Slide | 主题内容 | 状态 |
|---|-------|----------|------|
| 3 | Slide03aRulesExamples | **现象**：生活中的对应关系 | 保留 |
| 4 | Slide03bRulesAbstract | **抽象**：转化为坐标点 (x, y) | 保留 |
| 5 | Slide03cRulesGraph | **图像**：归纳出 y = x | 保留 |
| 6 | Slide03dRulesText | **总结**：规则的力量与来源 | 保留 |

### Part 02: 规则的变换与软件的边界

| # | Slide | 主题内容 | 状态 |
|---|-------|----------|------|
| 7 | Slide04aTransformExamples | **现象**：程度/偏好/综合差异 | 保留 |
| 8 | Slide04bTransformAbstract | **抽象**：k（斜率）和 b（截距） | 保留 |
| 9 | Slide04cTransformGraph | **图像**：三种变换图示 | 保留 |
| 10 | Slide04dTransformText | **总结**：y = kx + b | 保留 |
| 11 | Slide04eSoftware | **软件的诞生**：点状规律的自动化（符号主义） | 移动（原03e） |
| 12 | Slide04fConnectionism | **联结主义**：线性拟合的成功与局限 | 新增 |

### Part 03: 突破线性的边界

| # | Slide | 主题内容 | 状态 |
|---|-------|----------|------|
| 13 | Slide05aLinearLimitGraph | **线性局限-图像**：曲线无法拟合 | 保留 |
| 14 | Slide05bLinearLimitText | **线性局限-总结**：引出激活函数 | 保留 |
| 15 | Slide06aActivationGraph | **激活函数-图像**：线性 vs 非线性 | 保留 |
| 16 | Slide06bActivationText | **激活函数-总结**：ReLU/Sigmoid/Tanh | 保留 |

### Part 04: 从神经元到 Transformer

| # | Slide | 主题内容 | 状态 |
|---|-------|----------|------|
| 16 | Slide07aNeuralNetwork | **神经网络基础**：神经元 = 一次变换 | 需改（拆分） |
| 17 | Slide07bDeepLearning | **深度学习**：多层堆叠，函数嵌套 | 新增 |
| 18 | Slide07cAttention | **Attention 机制**：「关注」哪些词更重要 | 新增 |
| 19 | Slide07dTransformer | **Transformer**：Self-Attention + 并行计算 | 新增 |

### Part 05: 大语言模型

| # | Slide | 主题内容 | 状态 |
|---|-------|----------|------|
| 20 | Slide08LLMEssence | **LLM本质**：超级文字补全器 | 保留 |
| 21 | Slide08bTokenization | **Token化**：文字如何变成数字（可选） | 新增（可选） |
| 22 | Slide09LLMBoundary | **能力边界**：擅长 vs 不擅长 | 保留 |

### Part 06: Agent 与工具调用

| # | Slide | 主题内容 | 状态 |
|---|-------|----------|------|
| 23 | Slide10Agent | **Agent比喻**：发动机 + 外壳 = 产品 | 保留 |
| 24 | Slide11AgentForms | **Agent形态**：CLI / Web / API | 保留 |
| 25 | Slide12FunctionCall | **Function Call**：结构化输出 | 保留 |
| 26 | Slide13MCP | **MCP协议**：统一工具调用 | 保留 |

### Part 07: 挑战与总结

| # | Slide | 主题内容 | 状态 |
|---|-------|----------|------|
| 27 | Slide14Challenges | **当前挑战**：Context/工具选择/安全 | 保留 |
| 28 | Slide15Summary | **总结**：从规则到智能 | 保留 |
| 29 | Slide16Appendix | **附录**：数学题类比 Token 补全 | 保留 |

---

## 修改清单

### 1. 结构调整
- [x] Part 标号重新规划（01-07）
- [x] 将 Slide03eSoftware 移动到 Part 02 末尾，改名为 Slide04eSoftware
- [x] 更新 Slide02Overview 的主题列表
- [x] 更新所有 Slides 的 PartLabel 编号

### 2. 新增 Slides（Part 04 扩展）
- [x] **Slide07bDeepLearning**：深度学习 - 多层神经网络如何堆叠
- [x] **Slide07cAttention**：Attention 机制 - 用生活例子解释「注意力」
- [x] **Slide07dTransformer**：Transformer 架构简图

### 3. 可选新增
- [ ] **Slide08bTokenization**：Token 化过程（如果时间允许）

### 4. 需要修改的现有 Slides
- [x] Slide02Overview：更新 6 个主题为新的 7 个 Part
- [x] Slide07NeuralNetwork：拆分/精简为 Slide07aNeuralNetwork
- [x] 删除旧文件 Slide03eSoftware.tsx, Slide07NeuralNetwork.tsx
