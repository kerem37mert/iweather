import { BrowserRouter, Routes, Route } from "react-router-dom";

//Pages
import Home from "./pages/Home";
import Weather from "./pages/Weather";


const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route index element={ <Home /> } />
        <Route path="/weather/:cityId" element={ <Weather /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;