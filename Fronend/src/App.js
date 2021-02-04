import { React, useState } from 'react'
import './App.css';
import axios from 'axios';
import Button from '@material-ui/core/Button'
import CheckIcon from '@material-ui/icons/Check';

const App = () => {

  const [timer1, setTimer1] = useState(0)
  const [timer2, setTimer2] = useState(0)
  const [showicon1, setIcon1] = useState(false)
  const [showicon2, setIcon2] = useState(false)

  const sendRequests = () => {
    setTimer1(0);
    setTimer2(0);
    const interval = setInterval(() => {
      setTimer1(timenow => (timenow + 0.01))
    }, 10)
    const interval2 = setInterval(() => {
      setTimer2(timenow => (timenow + 0.01))
    }, 10)

    axios.get('http://127.0.0.1:5000/1').then(resp =>
      clearInterval(interval));
    axios.get('http://127.0.0.1:5000/2').then(resp =>
      clearInterval(interval2));
  }

  return (
    <div className="App">
      <h1>Request 1 : {timer1.toFixed(2)} { showicon1 && <CheckIcon/> }</h1>
      <h1>Request 2 : {timer2.toFixed(2)} { showicon2 && <CheckIcon/> }</h1>
      <Button variant="contained" color="primary" onClick={sendRequests}>
          send requests
      </Button>
    </div>
  );
}

export default App;
