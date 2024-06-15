import RegisterPage from "./pages/RegisterPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import DashboardPage from "./pages/Dashboard";
import WelcomePage from "../src/pages/WelcomePage";


function App() {
  return (
    <div className="App">
          
          <BrowserRouter>

              <Routes>  
                <Route path="/" element={<WelcomePage />} />
                <Route path="/register" element={<RegisterPage/>} /> 
                <Route path="login" element={<LoginPage/>} />
                <Route path="/dashboard" element={<DashboardPage/>} />
                
                
              


              </Routes>

          </BrowserRouter>
           
    </div>
  );
}

export default App;
