import { BrowserRouter, Route, Routes } from "react-router-dom";

import Contact from "./components/Contact";
import Home from "./components/Home";
import Blog from "./components/Blog";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/blog/:fbUrl" element={<Blog></Blog>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
