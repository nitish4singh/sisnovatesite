import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  ChooseUs,
  SubscriptionService,
  WebAppProduct,
} from "./components";

import Header from "./Hero/header";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Header />

      <ChooseUs />

      <SubscriptionService />
      <WebAppProduct />
      <div className="relative z-0">
        <About />
        <StarsCanvas />

        <Experience />
      </div>
      <Tech />
      <Works />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </BrowserRouter>
  );
};

export default App;
