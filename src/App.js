import React from 'react';
import './App.css';

function App() {
  const [red, setRed] = React.useState()
  const [green, setGreen] = React.useState()
  const [blue, setBlue] = React.useState()

  const redd = Math.floor(Math.random() * 255) + 1;
  const reddd = redd < 100 ? '0' + redd : redd

  const greenn = Math.floor(Math.random() * 255) + 1;
  const grennn = greenn < 100 ? '0' + greenn : greenn

  const bluee = Math.floor(Math.random() * 255) + 1;
  const blueee = bluee < 100 ? '0' + bluee : bluee

  React.useEffect(() => {
    setRed(reddd)
    setGreen(grennn)
    setBlue(blueee)
  }, [])


  function handleClick (){
    setRed(reddd)
    setGreen(grennn)
    setBlue(blueee)
    
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
  }

  return (
    <section>
      <button type="button" onClick={handleClick}>PLS GIMME A NEW COLOR!</button>
      <span>Current color: rgb({red}, {green}, {blue})</span>
    </section>
  );
}

export default App;
