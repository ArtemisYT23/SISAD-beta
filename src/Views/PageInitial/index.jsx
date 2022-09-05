import NavBar from "../../Components/PageInitial/Navbar";
import Body from "../../Components/PageInitial/Body";
import CardDatos from "../../Components/PageInitial/CardDatos";
import Scrool from "../../Components/PageInitial/Scrool";
import InfoBody from "../../Components/PageInitial/InfoBody";
import Footer from "../../Components/PageInitial/Footer";
import EndFooter from "../../Components/PageInitial/EndFooter";

const PageInitial = () => {
  return (
    <div>
      <NavBar />
      <Body />
      <CardDatos />
      <Scrool />
      <InfoBody />
      <Footer />
      <EndFooter />
    </div>
  );
};

export default PageInitial;
