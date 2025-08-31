import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AppNavbar from "./sneakers/AppNavbar";
import Men from "./men/Men";
import Collections from "./collections/Collections";
import Sneakers from "./sneakers/Sneakers";
import Women from "./women/Women";
import About from "./about/About";
import Contact from "./contact/Contact";

import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { useState } from "react";

function App() {
  
  const [mode, setMode] = useState<"light" | "dark">("light");

  const theme = createTheme({
    palette: {
      mode, 
    },
  });

  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        
        <AppNavbar toggleMode={toggleMode} mode={mode} />

        <Routes>
          <Route path="/" element={<Navigate to="/sneakers" replace />} />
          <Route path="/sneakers" element={<Sneakers />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
