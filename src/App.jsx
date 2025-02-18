import ContactForm from "./component/ContactForm";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Hero from "./component/Hero";
import ImmidiatelyInvoked from "./component/ImmidiatelyInvoked";
import TernaryOperator from "./component/ternaryOperator";

const App = () => {
  return (
    <div
      style={{
        colro: "Red",
        backgroundColor: "lightblue",
      }}
    >
      <Header />
      <Hero />
      <ContactForm />
      <Footer />
      <button onClick={() => alert("Hello")}>Submit</button>

      <TernaryOperator />
      <ImmidiatelyInvoked />
      <mapLooping />
    </div>
  );
};

export default App;
