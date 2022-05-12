import React from 'react';

const Card = ({ card, cards, setCards }) => {
    const {cardName, set_num, id} = card
    const imgSrc = `https://den-cards.pokellector.com/119/${cardName.replaceAll(' ','-').replace("'","")}.BS.${set_num}.png`
    
    const handleDeleteCard = async () => {
        let req = await fetch(`http://localhost:9292/cards/${id}`,{
            method : 'DELETE'
        })
        
        const updatedCards = cards.filter((el) => el.id !== id)
        setCards(updatedCards)
    }

    const handleTradeCard = () => {
        console.log(card)
    }

    return(
        <div className='cards'>
            <p className='card-name'>{card.cardName}</p>
            <img src={imgSrc} className='card-img' />
            <p>set number : {card.set_num}/102</p>
            <button className='sell-btn' onClick={handleDeleteCard}>SELL</button>
            <button className='trade-btn' onClick={handleTradeCard}>TRADE </button>
        </div>
    )
}


export default Card;