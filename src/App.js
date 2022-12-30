import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { productInputs, userInputs } from "./formSource";
import Contact from "./pages/ContactUs/Contact";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import "./style/dark.css";


function App() {


  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
            <Route path="/new" element={<New />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
