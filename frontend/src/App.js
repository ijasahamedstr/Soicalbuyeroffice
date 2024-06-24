import AlertDismissibleExample from "./component/Page/Alert/topbar";
import Navbar from "./component/Page/Navigation/Navigation";
import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from "./component/Page/Home/Home";
import Social from "./component/Page/Social Medias/Social Medias";
import Games from "./component/Page/Games/Games";
import Services from "./component/Page/Services/Services";
import Users from "./component/Page/Users/Users";
import Market from "./component/Page/Market History/market history";
import Leaderboard from "./component/Page/Leaderboard/Leaderboard";
import Store from "./component/Page/USRGG Store/USRGG Store";
import './css/main.css';




function App() {
  return (
    <>
    <AlertDismissibleExample/>
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/التواصل الإجتماعي" element={<Social/>}/>
      <Route path="/Games" element={<Games/>}/>
      <Route path="/Services" element={<Services/>}/>
      <Route path="/Users" element={<Users/>}/>
      <Route path="/Market History" element={<Market/>}/>
      <Route path="/Leaderboard" element={<Leaderboard/>}/>
      <Route path="/USRGG Store" element={<Store/>}/>
    </Routes>
    </Router>

    </>
  );
}

export default App;