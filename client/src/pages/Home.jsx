import Description from "../components/Description";
import GenerateBtn from "../components/GenerateBtn";
import Header from "../components/Header";
import Steps from "../components/steps";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      <Header />
      <Steps />
      <Description />
      <Testimonials />
      <GenerateBtn />
    </div>
  );
};

export default Home;
