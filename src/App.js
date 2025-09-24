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
import AddPaymentMethod from "./Component/Main/AddPaymenyMethod";
import AuthorizeKyc from "./Component/Main/AuthorizeKyc";
import EventDetail from "./Component/Main/EventDetail";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ForgetPassword from "./Component/ForgetPassWord";
import ProtectedRoute from "./Component/ProtectedRoute";
import PublicRoute from "./Component/PublicRoute";
import ChangeName from "./Component/Main/ChangeName";
import Avatar from "./Component/Main/Avatar";
function App() {
  return (
    <Router>
      <ToastContainer />
        {/* Public Routes */}
        <Routes>
        {/* Public Routes */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <RegisterForm />
            </PublicRoute>
          }
        />
        <Route
          path="/forget-password"
          element={
            <PublicRoute>
              <ForgetPassword />
            </PublicRoute>
          }
        />

        {/* Protected Routes */}
        <Route
          path="/main"
          element={
            <ProtectedRoute>
              <Main />
            </ProtectedRoute>
          }
        />

         <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/task"
          element={
            <ProtectedRoute>
              <Task />
            </ProtectedRoute>
          }
        />
        <Route
          path="/order"
          element={
            <ProtectedRoute>
              <Order />
            </ProtectedRoute>
          }
        />
        <Route
          path="/buyTutorial"
          element={
            <ProtectedRoute>
              <BuyTutorial />
            </ProtectedRoute>
          }
        />
        <Route
          path="/sell-tutorial"
          element={
            <ProtectedRoute>
              <SellTutorial />
            </ProtectedRoute>
          }
        />
        <Route
          path="/notice"
          element={
            <ProtectedRoute>
              <Notice />
            </ProtectedRoute>
          }
        />
        <Route
          path="/order-complete"
          element={
            <ProtectedRoute>
              <OrderComplete />
            </ProtectedRoute>
          }
        />
        <Route
          path="/collection"
          element={
            <ProtectedRoute>
              <Collection />
            </ProtectedRoute>
          }
        />
        <Route
          path="/paymentPwd"
          element={
            <ProtectedRoute>
              <PaymentPwd />
            </ProtectedRoute>
          }
        />
        <Route
          path="/explain"
          element={
            <ProtectedRoute>
              <Explain />
            </ProtectedRoute>
          }
        />
        <Route
          path="/transaction"
          element={
            <ProtectedRoute>
              <Transaction />
            </ProtectedRoute>
          }
        />
        <Route
          path="/setting"
          element={
            <ProtectedRoute>
              <Setting />
            </ProtectedRoute>
          }
        />
        <Route
          path="/announcement"
          element={
            <ProtectedRoute>
              <Announcement />
            </ProtectedRoute>
          }
        />
        <Route
          path="/securityCenter"
          element={
            <ProtectedRoute>
              <SecurityCenter />
            </ProtectedRoute>
          }
        />
        <Route
          path="/language"
          element={
            <ProtectedRoute>
              <Language />
            </ProtectedRoute>
          }
        />
        <Route
          path="/activity"
          element={
            <ProtectedRoute>
              <Activity />
            </ProtectedRoute>
          }
        />
        <Route
          path="/team"
          element={
            <ProtectedRoute>
              <Team />
            </ProtectedRoute>
          }
        />
        <Route
          path="/sell"
          element={
            <ProtectedRoute>
              <Sell />
            </ProtectedRoute>
          }
        />
        <Route
          path="/arb"
          element={
            <ProtectedRoute>
              <Arb />
            </ProtectedRoute>
          }
        />
        <Route
          path="/arbbuy"
          element={
            <ProtectedRoute>
              <ArbBuy />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user-level"
          element={
            <ProtectedRoute>
              <UserLevel />
            </ProtectedRoute>
          }
        />
        <Route
          path="/rule"
          element={
            <ProtectedRoute>
              <Rule />
            </ProtectedRoute>
          }
        />
        <Route
          path="/task-detail"
          element={
            <ProtectedRoute>
              <Details />
            </ProtectedRoute>
          }
        />
        <Route
          path="/teamTutorial"
          element={
            <ProtectedRoute>
              <TeamTutorial />
            </ProtectedRoute>
          }
        />
        <Route
          path="/sell-detail-order"
          element={
            <ProtectedRoute>
              <SellDetailOrder />
            </ProtectedRoute>
          }
        />
        <Route
          path="/VipTak"
          element={
            <ProtectedRoute>
              <VipTask />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-payment"
          element={
            <ProtectedRoute>
              <AddPaymentMethod />
            </ProtectedRoute>
          }
        />
        <Route
          path="/authorizekyc"
          element={
            <ProtectedRoute>
              <AuthorizeKyc />
            </ProtectedRoute>
          }
        />
        <Route
          path="/event-detail"
          element={
            <ProtectedRoute>
              <EventDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/verified"
          element={
            <ProtectedRoute>
              <Verified />
            </ProtectedRoute>
          }
        />
         <Route
          path="/change-name"
          element={
            <ProtectedRoute>
              <ChangeName />
            </ProtectedRoute>
          }
        />
         <Route
          path="/avatar"
          element={
            <ProtectedRoute>
              <Avatar />
            </ProtectedRoute>
          }
        />
      </Routes>
      
    </Router>
  );
}

export default App;
