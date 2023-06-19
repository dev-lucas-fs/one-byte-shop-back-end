import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./assets/globalCSS"
import Home from "./pages/Home";

export default function App() {


  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

