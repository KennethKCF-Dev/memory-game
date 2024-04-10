import React from 'react';
import './App.css';
import MemoryGame from './components/memoryGame/MemoryGame';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Body = styled.div`
  background: linear-gradient(38.73deg, rgba(176, 230, 62, 0.15) 0%, rgba(167, 227, 41, 0) 50%), linear-gradient(141.27deg, rgba(240, 174, 31, 0) 50%, rgba(240, 174, 31, 0.15) 100%);
  width: 100%;
  height: 100dvh;
  overflow-x: hidden;
`;

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Body>
        <MemoryGame />
      </Body>
    </div>
  );
}

export default App;
