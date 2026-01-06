import { Presentation } from './components/Presentation';
import {
  Slide01Title,
  Slide02Overview,
  Slide03aRulesExamples,
  Slide03bRulesAbstract,
  Slide03cRulesGraph,
  Slide03dRulesText,
  Slide04aTransformExamples,
  Slide04bTransformAbstract,
  Slide04cTransformGraph,
  Slide04dTransformText,
  Slide04eSoftware,
  Slide04fConnectionism,
  Slide05aLinearLimitGraph,
  Slide05bLinearLimitText,
  Slide06aActivationGraph,
  Slide06bActivationText,
  Slide07aNeuralNetwork,
  Slide07bWordChain,
  Slide07cSegmentation,
  Slide07dTransformer,
  Slide08LLMEssence,
  Slide09LLMBoundary,
  Slide10Agent,
  Slide11AgentForms,
  Slide12FunctionCall,
  Slide13MCP,
  Slide13bHeimaAI,
  Slide13cWildmetaStatus,
  Slide13dWildmetaNext,
  Slide13eAIEra,
  Slide13fUnattended,
  Slide15Summary,
} from './slides';
import './styles/global.css';

const slides = [
  <Slide01Title />,
  <Slide02Overview />,
  // Part 01: 用规则理解世界
  <Slide03aRulesExamples />,
  <Slide03bRulesAbstract />,
  <Slide03cRulesGraph />,
  <Slide03dRulesText />,
  // Part 02: 规则的变换与软件的边界
  <Slide04aTransformExamples />,
  <Slide04cTransformGraph />,
  <Slide04bTransformAbstract />,
  <Slide04dTransformText />,
  <Slide04eSoftware />,
  <Slide04fConnectionism />,
  // Part 03: 突破线性的边界
  <Slide05aLinearLimitGraph />,
  <Slide05bLinearLimitText />,
  <Slide06aActivationGraph />,
  <Slide06bActivationText />,
  // Part 04: 从神经元到 Transformer
  <Slide07aNeuralNetwork />,
  <Slide07bWordChain />,
  <Slide07cSegmentation />,
  <Slide07dTransformer />,
  // Part 05: 大语言模型
  <Slide08LLMEssence />,
  <Slide09LLMBoundary />,
  // Part 06: Agent 与工具调用
  <Slide10Agent />,
  <Slide11AgentForms />,
  <Slide12FunctionCall />,
  <Slide13MCP />,
  // Heima 团队与 AI
  <Slide13bHeimaAI />,
  <Slide13cWildmetaStatus />,
  <Slide13dWildmetaNext />,
  <Slide13eAIEra />,
  <Slide13fUnattended />,
  // Part 07: 总结
  <Slide15Summary />,
];

function App() {
  return <Presentation slides={slides} />;
}

export default App;
