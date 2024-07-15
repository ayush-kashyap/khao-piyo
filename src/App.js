import './App.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Progress from './components/Progress';
import Home from './components/Home';
import LogIn from './components/Login';
import HeaderTag from './components/Navbar';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import HomePageLoggedin from './components/HomePageLoggedin';
import HeaderTagg from './components/NavbarLoggedin';
import Restaurant from './components/restaurant';
function App(){
  const [AppItem, setItem] = useState({
    headertag:<HeaderTag/>,
  authToken:"",
  email:"",
  creds:{},
  hometag:<Home/>
})
function loader(){
  var per=0
  var progress =document.querySelector('.progress');
setInterval(() => {
  if(progress.style.width<="90%"){
      per++;
      progress.style.width=`${per}%`;
  }else if(progress.style.width>="90%"){
      per+=0.1;
      progress.style.width=`${per}%`;
  }
}, 50);
}
  return (
    <div className="App">
      <Progress/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={AppItem.headertag }>
          <Route index element={AppItem.hometag}/>
          <Route path='login' element={<LogIn setnav={setItem} loader={loader}/>}/>
          <Route path='signup' element={<SignUp setnav={setItem} loader={loader}/>}/>
          <Route path='restaurants' element={<Restaurant/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
