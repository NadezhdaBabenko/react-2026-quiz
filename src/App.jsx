import { QuizProvider } from "./store/QuizContext.jsx";

import Header from "./components/Header.jsx";
import Quiz from "./components/Quiz.jsx";

function App() {
  return (
    <QuizProvider>
      <Header />
      <Quiz />
    </QuizProvider>
  );
}

export default App;
