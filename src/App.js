import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ClickColdbrew from './pages/container/Click/ClickColdbrew';
import Coffee from './pages/container/Coffee';
import Food from './pages/container/Food';
import Product from './pages/container/Product';
import LookOne from './pages/detaillook/LookOne';
import LookTwo from './pages/detaillook/LookTwo';
import Menu from './pages/detailmain/Menu';
import DetailView from './pages/DetailView';
import Magazine from './pages/Magazine';
import Main from './pages/Main';
import Findid from './pages/member/Findid';
import Findpassword from './pages/member/Findpassword';
import Join from './pages/member/Join';
import Login from './pages/member/Login';
import WriteCoffee from './write/WriteCoffee';
import Writefood from './write/Writefood';
import Writepage from './write/Writepage';
import Writeproduct from './write/Writeproduct';

function App() {
  return (
    <div className="App">  
    <Header/>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/Login' element={<Login/>}/> 
        <Route path='/Menu' element={<Menu/>}/>
        <Route path='/Coffee' element={<Coffee/>}/>
        <Route path='/Coldbrew' element={<ClickColdbrew/>}/>
        <Route path='/Food' element={<Food/>}/> 
        <Route path='/Product' element={<Product/>}/> 
        <Route path='/Join' element={<Join/>}/>
        <Route path='/Findid' element={<Findid/>}/> 
        <Route path='/Findpass' element={<Findpassword/>}/>
        <Route path='/Write' element={<Writepage/>}/>
        <Route path='/Coffee/:no' element={<DetailView/>}/>
        <Route path='/Magazine' element={<Magazine/>}/>   
        <Route path='/LookOne' element={<LookOne/>}/>   
        <Route path='/LookTwo' element={<LookTwo/>}/>
        <Route path='/Writepage' element={<Writepage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
