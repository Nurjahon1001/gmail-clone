import React from 'react';
import './App.css';
import Header from './Header.jsx';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mail from './Mail';
import EmailList from './EmailList';
import SendMail from './SendMail';
import { selectSendMessageIsOpen } from './features/counter/mailSlice';
import { useSelector } from 'react-redux';

function App() {

  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)

  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app__body">
          <Sidebar />
          <Routes>
            <Route path='/' element={<EmailList />} />
            <Route path='/mail' element={<Mail />} />
          </Routes>
        </div>

        {sendMessageIsOpen && <SendMail/>}
      </div>
    </Router>
  );
}

export default App;
