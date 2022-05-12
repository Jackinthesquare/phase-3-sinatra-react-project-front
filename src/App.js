import logo from './logo.svg';
import './App.css';
import React from 'react';
import Card from './components/Card';
import { useState, useEffect } from 'react';


function App() {
  const [cards, setCards] = useState([])

  useEffect(() => {
    (async () => {
      let req = await fetch('http://localhost:9292/cards')
      let res = await req.json()
      setCards(res.cardList)
      
    }) ()
  },[])
    console.log(cards)
  

  return (
    <div className="App">
    <h1 className='welcome'>My Charizard brings all the boys to the yard</h1>
    <div className='card-container'>
      <div className='cards'>
        <p className='new-card'>Add Card</p>
        <p className='plus-sign'> + </p>
      </div>
      {
        cards.map((card) => {
          return(
            <Card key={card.id} card={card}/>
          )
        })
      }
    </div>
    
   
    </div>
  );
}

export default App;
