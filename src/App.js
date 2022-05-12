import logo from './logo.svg';
import './App.css';
import React from 'react';
import Card from './components/Card';
import NewCard from './components/NewCard';
import AddForm from './components/AddForm';
import { useState, useEffect } from 'react';



function App() {
  const [cards, setCards] = useState([])
  const [isVisibleAddForm, setIsVisibleAddForm] = useState(false)

  useEffect(() => {
    (async () => {
      let req = await fetch('http://localhost:9292/cards')
      let res = await req.json()
      setCards(res.cardList)

    })()
  }, [])
  // console.log(cards)

  return (
    <div className="App">
      <h1 className='welcome'>My Charizard brings all the boys to the yard</h1>
      <div className='add-form'>
        {isVisibleAddForm ? <AddForm setIsVisibleAddForm={setIsVisibleAddForm} cards={cards} setCards={setCards}  /> : null}
      </div>
      <div className='card-container'>

        <NewCard setIsVisibleAddForm={setIsVisibleAddForm} />
        {
          cards.map((card) => {
            return (
              <Card key={card.id} card={card} cards={cards} setCards={setCards} />
            )
          })
        }
      </div>


    </div>
  );
}

export default App;
