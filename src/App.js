import './App.css';
import React , {useEffect} from 'react';
import Header from './components/includes/Header';
import { BrowserRouter } from 'react-router-dom';
import MyRoutes from './components/includes/sub-includes/MyRoutes';
import Footer from './components/includes/Footer';
import MobNav from './components/includes/sub-includes/MobNav';
import ToggleChange from './components/hooks/ToggleChange';  
import Loader from './components/includes/Loader';


function App() {
  const [change , changeMe , loader , changeLoader] = ToggleChange(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      changeLoader();
    }, 4000);
    return () => clearTimeout(timer);
    //  eslint-disable-next-line
  }, []);

  return (
    <>   
     {loader ? <Loader /> :
      <BrowserRouter basename='/' onUpdate={() => window.scrollTo(0, 0)}>
      {change ? <MobNav changeMe={changeMe} /> : ''}  
       <Header changeMe={changeMe} />
       <MyRoutes />
       <Footer />
       </BrowserRouter>
      } 
    </>

  );
}

export default App;
