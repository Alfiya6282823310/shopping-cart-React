import logo from './logo.svg';
import './App.css';
import Viewall from './Components/Viewall';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Add from './Components/Add';
import Search from './Components/Search';
import DeleteItems from './Components/DeleteItems';
import ViewallLive from './Components/ViewallLive';

function App() {
  return (
    <BrowserRouter>
   <Routes>
    <Route path='/' element={<Add/>}/>
    <Route path='/search' element={<Search/>}/>
    <Route path='/delete' element={<DeleteItems/>}/>
    <Route path='/viewall' element={<Viewall/>}/>
    <Route path='/viewalllive' element={<ViewallLive/>}/>
   </Routes>
    </BrowserRouter>
  );
}

export default App;
