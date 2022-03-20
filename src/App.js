import { BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from './Components/Homepage';
import Graphs from './Components/Graphs';
import MissingContent from './Components/404';

const App = () => {
  // router will go here
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Homepage/>}/>
        <Route path = '/graph' element = {<Graphs/>}/>
        <Route path = '*' element = {<MissingContent/>}/>
      </Routes>
    </BrowserRouter>
      
  );
}

export default App;
