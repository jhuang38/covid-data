import {Route, Routes, useLocation} from "react-router-dom";
import Homepage from './Components/Homepage';
import MissingContent from './Components/404';
import Graphpage from "./Components/Graphpage";
import {AnimatePresence} from 'framer-motion';
import './styles/main.css';

const App = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence exitBeforeEnter >
        <Routes key = {location.pathname} location = {location}>
          <Route path = '/' element = {<Homepage/>}/>
          <Route path = '/graph'>
            <Route path = ':country' element = {<Graphpage/>}/>
          </Route>
          <Route path = '*' element = {<MissingContent/>}/>
        </Routes>
      </AnimatePresence>
    </> 
  );
}

export default App;
