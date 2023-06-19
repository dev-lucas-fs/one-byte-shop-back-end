import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle, theme } from "./styles/globalCSS"
import Home from "./pages/Home";
import { ThemeProvider } from "styled-components";

export default function App() {


  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

