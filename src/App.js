import { BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from './Components/Homepage';
import MissingContent from './Components/404';
import Graphpage from "./Components/Graphpage";
import './styles/main.css';

const App = () => {
  // router will go here
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Homepage/>}/>
        <Route path = '/graph'>
          <Route path = ':country' element = {<Graphpage/>}/>
        </Route>
        <Route path = '*' element = {<MissingContent/>}/>
      </Routes>
    </BrowserRouter>
      
  );
}

export default App;
