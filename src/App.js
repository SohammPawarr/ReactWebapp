import React from 'react';
// Remove the router import since we're using react-scroll for navigation
import Header from './components/Header';
import Project from './components/Project';
import Details from './components/Details';
import AboutCompany from './components/AboutCompany';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Project />
        <Details />
        <AboutCompany />
      </main>
      <Footer />
    </div>
  );
}

export default App;
