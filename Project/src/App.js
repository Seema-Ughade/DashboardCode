import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import MainLayout1 from './Components/MainLayout1';
import Dashboard from './Pages/Dashboard';
function App() {
  return (
   <div>
    <BrowserRouter>
<Routes>
  <Route path='/product' element={<Home/>}></Route>
  <Route path='/' element={<MainLayout1/>}>
  <Route index element={<Dashboard/>}/>
  </Route>
</Routes>

    </BrowserRouter>
    </div>
  );
}

export default App;
