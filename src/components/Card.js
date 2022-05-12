import React from 'react';

const Card = ({card}) => {
    const {cardName, set_num} = card
    const imgSrc = `https://den-cards.pokellector.com/119/${cardName.replaceAll(' ','-').replace("'","")}.BS.${set_num}.png`
    return(
        <div className='cards'>
            <p className='card-name'>{card.cardName}</p>
            <img src={imgSrc} className='card-img' />
            <p>set number : {card.set_num}/102</p>
            <button className='btn'>SELL</button>
            <button className='btn'>TRADE</button>
        </div>
    )
}


export default Card;