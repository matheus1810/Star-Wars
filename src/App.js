import { Routers } from "./Routes/Routes";
import {Header} from "./components/header/Header"
import { BrowserRouter } from "react-router-dom";



function App() {
  return (
 
    <BrowserRouter>
      <Header/>
    <Routers/>
    </BrowserRouter>
  );
}

export default App;
