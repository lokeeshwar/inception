import './App.css';
import Header from './header/header';
import TopBar from './topbar/topbar';
// import Hero from './hero/hero';
import Services from './services/services';
import Aboutsec from './about-us-sec/about-us';
import Aboutbtm from './about-btm/about-btm';
import Aboutlist from './about-list/about-list';
import Counts from './counts/counts';
import Countsbtm from './countsbtm/countsbtm';
import News from './news/news';
import Contact from './contact/contact';
import Product from './header/navbar/product/product';

function App() {
  return (
    <div className="App">
      <TopBar/>
      <div className='head'>      <Header/></div>

      {/* <Hero/> */}
      <Services/>
      <Aboutsec/>
      <Aboutlist/>
      <Counts/>
      <Aboutbtm/>
      <Countsbtm/>
      <News/>
      <Contact/>
      <div> <Product/> </div>
    </div>
  );
}

export default App;
