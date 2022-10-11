import Footer from "./components/Footer";
import MyBiodata from "./components/MyBiodata";
import MyContact from "./components/MyContact";
import NamaProfile from "./components/NamaProfile";
import NavigationBar from "./components/NavigationBar";
import "./style/LandingPage.css";

function App() {
  return (
    <div>
      <NavigationBar />
      <NamaProfile />
      <MyBiodata />
      <MyContact />
      <Footer />
    </div>
  );
}

export default App;
