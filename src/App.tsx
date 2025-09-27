import Header from "./components/Header";
import Hero from "./components/Hero";
import ProblemOverview from "./components/ProblemOverview";
import Methodology from "./components/Methodology";
import Results from "./components/Results";
import Demo from "./components/Demo";
import UseCaseProposal from "./components/UseCaseProposal";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <Hero />
      <ProblemOverview />
      <Methodology />
      <Results />
      <Demo />
      <UseCaseProposal />
      <Footer />
    </div>
  );
}

export default App;