import './App.css';
import React from 'react';
import Content from './Layout/Content';
import Header from './Layout/Header';
import Home from './Layout/Home';
import Sidebar from './Layout/Sidebar';
import MyContent from './Layout/MyContent';
import Section from './Layout/Section';
import Email from './Layout/Email';
import Footer from './Layout/Footer';



function App() {
  return (
    <div className="app">
        <div className="bg-gray-900">
            <Header />
        </div>
        <div>
          <Content />
        </div>
        <div>
          <Home />
        </div>
        <div>
          <Sidebar />
        </div>
        <div>
          <MyContent />
        </div>
        <div>
          <Section />
        </div>
        <div>
          <Email/>
        </div>
        <div>
          <Footer/>
        </div>
    </div>
  );
}

export default App;
