import { Provider } from "react-redux";
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import appStore from "./utils/appStore";
import Body from "./components/Body";
import BookaCall from "./components/BookCall";
import HomebuyerGuide from "./components/BrambleGuides";
import CashBackCalculater from "./components/CashBackCalculater";
import ContactModal from "./components/ContactModal";
import Login from "./components/Login";
import ServicesSection from "./components/ServicesSection";
import PropertyManagementUI from "./components/Transactions";
import TermsOfUse from "./components/TermsOfUse";

function App() {
  return (
    <Provider store={appStore}>
      <Router>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/cashback" element={<CashBackCalculater />} />
          <Route path="/speak" element={<ContactModal />} />
          <Route path="/guide" element={<HomebuyerGuide />} />
          <Route path="/services" element={<ServicesSection />} />
          <Route path="/bookcall" element={<BookaCall />} />
          <Route path="/login" element={<Login />} />
          <Route path="/transactions" element={<PropertyManagementUI />} />
          <Route path="/terms" element={<TermsOfUse />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
