import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Second from "./pages/Second";
import LayOut from "./pages/LayOut";
import Content from "./pages/Content";
import AboutPage from "./pages/AboutPage";
import Detail from "./pages/Detail";
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LayOut />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/product" element={<Second />} />
                    <Route path="/content" element={<Content />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/detail/:id" element={<Detail />} />
                    <Route path="/detail/about/:name" element={<AboutPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App; 