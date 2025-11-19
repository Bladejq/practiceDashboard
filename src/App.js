import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import StudentAlbum from "./pages/StudentAlbum";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop /> 
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student/:id" element={<StudentAlbum />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
