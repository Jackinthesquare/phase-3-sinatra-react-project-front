import logo from './logo.svg';
import './App.css';
import React from 'react';
import Card from './components/Card';
import NewCard from './components/NewCard';
import AddForm from './components/AddForm';
import TradeForm from './components/TradeForm';
import { useState, useEffect } from 'react';



function App() {
  const [cards, setCards] = useState([])
  const [isVisibleAddForm, setIsVisibleAddForm] = useState(false)
  const [isVisibleTradeForm, setIsVisibleTradeForm] = useState(false)

  // States for Forms
  const [cardName, setCardName] = useState('')
  const [imgSrc, setImgSrc] = useState('')
  const [set_num, setNum] = useState(103)
  

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
        {isVisibleAddForm ? <AddForm setIsVisibleAddForm={setIsVisibleAddForm} cards={cards} setCards={setCards} cardName={cardName} setCardName={setCardName} imgSrc={imgSrc} setImgSrc={setImgSrc} set_num={set_num} setNum={setNum}  /> : null}
      </div>
      <div className='trade-form'>
        {isVisibleTradeForm ? <TradeForm setIsVisibleTradeForm={setIsVisibleTradeForm} cards={cards} setCards={setCards} cardName={cardName} setCardName={setCardName} imgSrc={imgSrc} setImgSrc={setImgSrc} set_num={set_num} setNum={setNum} /> : null}
      </div>
      <div className='card-container'>
        <NewCard setIsVisibleAddForm={setIsVisibleAddForm} />
        {
          cards.map((card) => {
            return (
              <Card key={card.id} card={card} cards={cards} setCards={setCards} setIsVisibleTradeForm={setIsVisibleTradeForm} />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
