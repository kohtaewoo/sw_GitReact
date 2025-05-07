import React, { useState } from "react";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import CalculatePage from "./pages/CalculatePage";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  const handleLogin = (username, password) => {
    if (username === "admin" && password === "1234") {
      setIsLoggedIn(true);
      return true;
    }
    return false;
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "about":
        return <AboutPage />;
      case "projects":
        return <ProjectsPage setCurrentPage={setCurrentPage} />; // ✅ 수정된 부분
      case "contact":
        return <ContactPage />;
      case "calculate":
        return <CalculatePage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="app">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="main-content">
        {!isLoggedIn ? <LoginPage onLogin={handleLogin} /> : renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
