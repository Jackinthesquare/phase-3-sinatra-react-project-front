import React from "react";

const TradeForm = ({ setIsVisibleTradeForm, card, setCardName}) => {
    const handleTradeForm = () => {
        // const tradeNewCard = { cardName, imgSrc, set_num }
        
        // let req = await fetch('http://localhost:9292/cards${cards.id}',{
        //     method: 'PATCH',
        //     headers: {'CONTENT-TYPE':'application/json'},
        //     body: JSON.stringify(tradeNewCard)
        // })
        // let res = await req.json(tradeNewCard)
    
    }
    return(
        <div className="trade-form-container">
            <h2 className="trade-form-header">Trade a Card</h2>
            {/* <form className='trade-form'>
                <input onChange={(e) => setCardName(e.target.value)} placeholder="Card Name" value={cardName} />
                <input onChange={(e) => setImgSrc(e.target.value)} placeholder="Card Img Url" value={imgSrc} />
            </form> */}
            <button className="btn" onClick={handleTradeForm}>Trade Card</button>
            <button className="btn" onClick={() => setIsVisibleTradeForm(false)}>Cancel</button>
        </div>
    )
}

export default TradeForm;