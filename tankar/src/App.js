import './App.css';
import Index from './pages';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Service from './pages/service';

import Service_details from './pages/service_details';
import Case_study1 from './pages/case_study1';
import Case_study2 from './pages/case_study2';
import Case_study_details from './pages/case_study_details';
import About from './pages/about';
import Blog_standard from './pages/Blog_standard';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Faq from './pages/Faq';
import Features from './pages/Features';
import Industry from './pages/industry';
import Portfolio_details from './pages/Portfolio_details';
import Portfolio_grid from './pages/Portfolio_grid';
import Portfolio_info_flow from './pages/Portfolio_info_flow';
import Portfolio_list from './pages/Portfolio_list';
import Portfolio_masonary from './pages/Portfolio_masonary';
import Pricing_plan from './pages/Pricing_plan';
import Product_details from './pages/Product_details';
import Shop from './pages/Shop';
import Team1 from './pages/team1';
import Team2 from './pages/team2';
import Creative_agency from './pages/Creative_agency';
import Creative_agency_Dark from './pages/Creative_agency_Dark';
import Index_Dark from './pages/Index_Dark';
import Saas from './pages/Saas';
import Saas_Dark from './pages/Saas_Dark';
import It_Solutions from './pages/It_Solutions';
import It_Solutions_Dark from './pages/It_Solutions_Dark';
import Digital_Marketing from './pages/Digital_Marketing';
import Digital_Marketing_Dark from './pages/Digital_Marketing_Dark';
import Software_Devlopment from './pages/Software_Devlopment';
import It_consulting from './pages/IT_Consulting_Advisory';
import Ui_Ux from './pages/UX_UX_Designing';
import Web_Devlopment from './pages/Web_Devlopment';
import Mobile_App from './pages/Mobile_App_Devlopment';
import Custom_Software from './pages/Custom_Software_Development';
import Digital_Marketing_page from './pages/Digital_marketing_page';
import Game_development from './pages/Game_Development';
import ERP_Solution from './pages/ERP_Solution';
import Why_us from './pages/Why_us';
import Blog1 from './pages/How_Tankar_Solution_Blog';
import Blog2 from './pages/The_Future_of_IT_Consulting_Blog2';
import Blog3 from './pages/Revolutionizing_Mobile_Blog3';
import Blog4 from './pages/Strengthening_Cybersecurity_Blog4';
import Blog5 from './pages/UX_Blog5';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/service" element={<Service />} />
      
      <Route path="/case-study1" element={<Case_study1 />} />
      <Route path="/case-study2" element={<Case_study2 />} />
      <Route path="/case-study-details" element={<Case_study_details />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog-standard" element={<Blog_standard />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/error" element={<Error />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/features" element={<Features />} />
      <Route path="/industry" element={<Industry />} />
      <Route path="/portfolio-details" element={<Portfolio_details />} />
      <Route path="/portfolio-grid" element={<Portfolio_grid />} />
      <Route path="/portfolio-info-flow" element={<Portfolio_info_flow />} />
      <Route path="/portfolio-list" element={<Portfolio_list />} />
      <Route path="/portfolio-masonary" element={<Portfolio_masonary />} />
      <Route path="/pricing-plan" element={<Pricing_plan />} />
      <Route path="/product-details" element={<Product_details />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/team1" element={<Team1 />} />
      <Route path="/team2" element={<Team2 />} />
      <Route path="/creative-agency" element={<Creative_agency />} />
      <Route path="/creative-agency-dark" element={<Creative_agency_Dark />} />
      <Route path="/index-dark" element={<Index_Dark />} />
      <Route path="/saas" element={<Saas />} />
      <Route path="/saas-dark" element={<Saas_Dark />} />
      <Route path="/it-solutions" element={<It_Solutions />} />
      <Route path="/it-solutions-dark" element={<It_Solutions_Dark />} />
      <Route path="/digital-marketing" element={<Digital_Marketing />} />
      <Route path="/digital-marketing-dark" element={<Digital_Marketing_Dark />} />
      <Route path='/why-us' element={<Why_us />} />



      <Route path="/software-devlopment" element={<Software_Devlopment />} />
      <Route path='/it-consulting' element={<It_consulting />} />
      <Route path='/ui-ux' element={<Ui_Ux />} />
      <Route path='/web-devlopment' element={<Web_Devlopment />} />
      <Route path='/mobile-app' element={<Mobile_App />} />
      <Route path='/custom-software' element={<Custom_Software />} />
      <Route path='/digital-marketing-page' element={<Digital_Marketing_page />} />
      <Route path='/game-development' element={<Game_development />} />
      <Route path='/erp-solution' element={<ERP_Solution />} />
      <Route path='/blog/how-tankar-solution' element={<Blog1 />} />
      <Route path='/blog/the-future-of-it-consulting' element={<Blog2 />} />
      <Route path='/blog/revolutionizing-mobile' element={<Blog3 />} />
      <Route path='/blog/strengthening-cybersecurity' element={<Blog4 />} />
      <Route path='/blog/the-role-of-ui-ux' element={<Blog5 />} />



    </Routes>
    </BrowserRouter>
  );
}

export default App;
