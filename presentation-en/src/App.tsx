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
  // Part 01: Understanding the World Through Rules
  <Slide03aRulesExamples />,
  <Slide03bRulesAbstract />,
  <Slide03cRulesGraph />,
  <Slide03dRulesText />,
  // Part 02: Rule Transformations and Software Boundaries
  <Slide04aTransformExamples />,
  <Slide04cTransformGraph />,
  <Slide04bTransformAbstract />,
  <Slide04dTransformText />,
  <Slide04eSoftware />,
  <Slide04fConnectionism />,
  // Part 03: Breaking Through Linear Boundaries
  <Slide05aLinearLimitGraph />,
  <Slide05bLinearLimitText />,
  <Slide06aActivationGraph />,
  <Slide06bActivationText />,
  // Part 04: From Neurons to Transformer
  <Slide07aNeuralNetwork />,
  <Slide07bWordChain />,
  <Slide07cSegmentation />,
  <Slide07dTransformer />,
  // Part 05: Large Language Models
  <Slide08LLMEssence />,
  <Slide09LLMBoundary />,
  // Part 06: Agents and Tool Calling
  <Slide10Agent />,
  <Slide11AgentForms />,
  <Slide12FunctionCall />,
  <Slide13MCP />,
  // Heima Team and AI
  <Slide13bHeimaAI />,
  <Slide13cWildmetaStatus />,
  <Slide13dWildmetaNext />,
  <Slide13eAIEra />,
  <Slide13fUnattended />,
  // Part 07: Summary
  <Slide15Summary />,
];

function App() {
  return <Presentation slides={slides} />;
}

export default App;
