import AlertDismissibleExample from "./component/Page/Alert/topbar";
import Navbar from "./component/Page/Navigation/Navigation";
import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from "./component/Page/Home/Home";
import Social from "./component/Page/Social Medias/Social Medias";
import Users from "./component/Page/Users/Users";
import Market from "./component/Page/Market History/market history";
import Leaderboard from "./component/Page/Leaderboard/Leaderboard";
import Store from "./component/Page/USRGG Store/USRGG Store";
import './css/main.css';
import Footer from "./component/Page/Footer/Footer";
import Gamesaccount from "./component/Page/Games/Games";
import Servicesuser from "./component/Page/Services-user/Services-user";




function App() {
  return (
    <>
    <AlertDismissibleExample/>
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/التواصل الإجتماعي" element={<Social/>}/>
      <Route path="/الألعاب" element={<Gamesaccount/>}/>
      <Route path="/الخدمات" element={<Servicesuser/>}/>
      <Route path="/Users" element={<Market/>}/>
      <Route path="/طلبات المستخدمين" element={<Users/>}/>
      <Route path="/Leaderboard" element={<Leaderboard/>}/>
      <Route path="/USRGG Store" element={<Store/>}/>
    </Routes>
    </Router>
    <Footer/>


    </>
  );
}

export default App;