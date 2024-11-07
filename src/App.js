import { Provider } from "react-redux";
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import appStore from "./utils/appStore"; // Ensure this file exports a valid store
import AuthListener from "./components/AuthListener"; // Import AuthListener
import BookaCall from "./components/BookCall";
import HomebuyerGuide from "./components/BrambleGuides";
import CashBackCalculater from "./components/CashBackCalculater";
import ContactModal from "./components/ContactModal";
import Login from "./components/Login";
import ServicesSection from "./components/ServicesSection";
import PropertyManagementUI from "./components/Transactions";
import TermsOfUse from "./components/TermsOfUse";
import PrivacyPolicy from "./components/PrivacyPolicy";
import CookiePolicy from "./components/CookiePolicy";
import UserAccount from "./components/Dashboard";
import Footer from "./components/Footer";
import SignUpHomePage from "./components/SignUpHomePage";
import ForSale from "./components/ForSale";

function App() {
  return (
    <Provider store={appStore}>
      <Router>
        <AuthListener />  
        <Routes>
          <Route path="/" element={<SignUpHomePage />} />
          <Route path="/cashback" element={<CashBackCalculater />} />
          <Route path="/speak" element={<ContactModal />} />
          <Route path="/guide" element={<HomebuyerGuide />} />
          <Route path="/services" element={<ServicesSection />} />
          <Route path="/bookcall" element={<BookaCall />} />
          <Route path="/login" element={<Login />} />
          <Route path="/transactions" element={<PropertyManagementUI />} />
          <Route path="/terms" element={<TermsOfUse />} />
          <Route path="/cookies" element={<CookiePolicy />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/profile" element={<UserAccount />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/forSale" element={<ForSale />} />

        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
