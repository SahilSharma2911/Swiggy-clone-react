import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Banner from './component/Banner';
import Food_item from './component/Food_item';
import Restaurant_1_item from './component/Restaurant_1_item';
import Restaurant_2_item from './component/Restaurant_2_item';
import Info from './component/Info';
import Footer from './component/Footer';
import Login from './component/Login';
import { createRoot } from "react-dom/client";


function App() {
  return (
    <>
      <Header/>
      <Banner/>
      <Food_item/>
      <Restaurant_1_item/>
      <Info/>
      <Footer/>
    </>
  );
}

export default App;
