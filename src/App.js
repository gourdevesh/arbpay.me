import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Component/Home';
import Login from './Component/Login';
import Main from './Component/Main';
import Task from './Component/Task';
import Order from './Component/Order';
import RegisterForm from "./Component/Register";
import BuyTutorial from "./Component/BuyTutorial";
import SellTutorial from "./Component/SellTutorial";
import Notice from "./Component/Notice";
import OrderComplete from "./Component/OrderComplete";
import Verified from "./Component/Main/Verified";
import Collection from "./Component/Main/Collection";
import PaymentPwd from "./Component/Main/PaymentPwd";
import Explain from "./Component/Main/Explain";
import Transaction from "./Component/Main/Transaction";
import Setting from "./Component/Main/Seting";
import Announcement from "./Component/Main/Announcement";
import SecurityCenter from "./Component/Main/SecurityCenter";
import Language from "./Component/Main/Language";
import Activity from "./Component/Main/Activity";
import Team from "./Component/Main/Team";
import Sell from "./Component/Sell";
import Arb from "./Component/Arb";
import ArbBuy from "./Component/ArbBuy";
import UserLevel from "./Component/Task/UserLevel";
import Rule from "./Component/Task/Rule";
import Details from "./Component/Task/Details";
import TeamTutorial from "./Component/Main/TeamTutorial";
import SellDetailOrder from "./Component/SellDetailsOrder";
import VipTask from "./Component/Task/VipTask";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/main" element={<Main />} />
        <Route path="/task" element={<Task />} />
        <Route path="/order" element={<Order />} />
        <Route path="/buyTutorial" element={<BuyTutorial />} />
        <Route path="/sell-tutorial" element={<SellTutorial />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/order-complete" element={<OrderComplete />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/paymentPwd" element={< PaymentPwd />} />
        <Route path="/explain" element={< Explain />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/announcement" element={<Announcement />} />

        <Route path="/securityCenter" element={<SecurityCenter />} />
        <Route path="/language" element={<Language />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/team" element={<Team />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/arb" element={<Arb />} />
        <Route path="/arbbuy" element={<ArbBuy />} />
        <Route path="/user-level" element={<UserLevel />} />
        <Route path="/rule" element={<Rule />} />
        <Route path="/task-detail" element={<Details />} />
                <Route path="/teamTutorial" element={<TeamTutorial />} />

                <Route path="/sell-detail-order" element={<SellDetailOrder />} />

                <Route path="/VipTak" element={<VipTask />} />


















        <Route path="/verified" element={<Verified />} />




      </Routes>
    </Router>
  );
}

export default App;
