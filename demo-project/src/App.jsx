import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Second from "./pages/Second";
import LayOut from "./pages/LayOut";
import Content from "./pages/Content";
import AboutPage from "./pages/AboutPage";
import Detail from "./pages/Detail";
import HookOne from "./Hooks/HookOne";
import AppPage from "./Hooks/AppPage";
import FetchApi from "./fetchApi/FetchApi";
import FetchDetail from "./fetchApi/FetchDetail";
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

                    {/* hooks */}
                    <Route path="/hook_one" element={<HookOne />} />
                    <Route path="/app_page" element={<AppPage />} />

                    {/* Fetch API  */}
                    <Route path="fetchApi" element={<FetchApi />} />
                    <Route path="fetchApi/detail/:id" element={<FetchDetail />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App; 