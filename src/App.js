// src/App.js
import React from 'react';
import Header from './components/Header';
import NewsList from './components/NewsList';
import Footer from './components/Footer';
import './styles.css';

const App = () => (
  <div className="app">
    <Header />
    <NewsList />
    <Footer />
  </div>
);

export default App;
