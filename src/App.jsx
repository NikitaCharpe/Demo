import { Route, Routes } from 'react-router-dom'
import Login from "./component/Login"
import Jobs from "./component/Jobs"
import Home from "./component/Home"
import Notfound from "./component/Notfound"




const App = () => (
        <Routes>

                <Route path='/Login' element={<Login/>}></Route>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/Jobs' element={<Jobs/>}></Route>
                <Route path='/*' element={<Notfound/>}></Route>
                
        </Routes>
);

export default App;
