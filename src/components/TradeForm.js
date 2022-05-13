import React from "react";

const TradeForm = ({ setIsVisibleTradeForm, setCardName}) => {
    const handleTradeForm = () => {

    }
    return(
        <div className="trade-form-container">
            <h2 className="trade-form-header">Trade a Card</h2>
            {/* <form className='trade-form'>
                <input onChange={(e) => setCardName(e.target.value)} placeholder="Card Name" value={cardName} />
                <input onChange={(e) => setImgSrc(e.target.value)} placeholder="Card Img Url" value={imgSrc} />
            </form>
            <button className="btn" onClick={handleTradeForm}>Trade Card</button>
            <button className="btn" onClick={() => setIsVisibleTradeForm(false)}>Cancel</button> */}
        </div>
    )
}

export default TradeForm;