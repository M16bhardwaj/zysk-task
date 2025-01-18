import AnalyticsSection from "./components/AnalyticsSection";
import BlogSection from "./components/BlogSection";
import CTASection from "./components/CTASection";
import FeaturesSection from "./components/FeaturesSection";
// import Footer from "./Components/Footer";
import Footer from "./components/Footer";
import FreqAskQuestions from "./components/FreqAskQuestions";
import Header from "./components/Header";
import TestimonialSection from "./components/TestimonialSection";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <AnalyticsSection />
      <FeaturesSection />
      <TestimonialSection />
      <FreqAskQuestions />
      <BlogSection />
      <CTASection />
      <Footer />
    </Router>
  );
}

export default App;
