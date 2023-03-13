import React, { useState } from 'react';
import './App.css';
import socket from './socket/socket';

function App() {
  const [connect, setConnect] = useState(socket.connected);

   
  return (
    <div className="App">
      

      <button onClick={() => {
        console.log('clicado');
        socket.emit('message', 'testando');
      }}/>
    </div>
  );
}

export default App;
