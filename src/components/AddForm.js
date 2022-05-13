import React from "react";
import { useState } from "react";

const AddForm = ({ setIsVisibleAddForm, cards, setCards }) => {
    const [cardName, setCardName] = useState('')
    const [imgSrc, setImgSrc] = useState('')
    const [set_num, setNum] = useState(103)
    const addNewCard = { cardName, imgSrc, set_num }

    const handleAddForm = async (e) => {
        e.preventDefault();
        setNum(set_num +1)
        let req = await fetch('http://localhost:9292/cards',{
            method: 'POST',
            headers: {'CONTENT-TYPE':'application/json'},
            body: JSON.stringify(addNewCard)
        })
        let res = await req.json(addNewCard)
    
        setCards((prevState) => { return [res, ...prevState]})
        }
    

    return (
        <div className="add-form-container">
            <h2 className="buy-form-header">Add a Card</h2>
            <form className='add-form'>
                <input onChange={(e) => setCardName(e.target.value)} placeholder="Card Name" value={cardName} />
                <input onChange={(e) => setImgSrc(e.target.value)} placeholder="Card Img Url" value={imgSrc} />
            </form>
            <button className="btn" onClick={handleAddForm}>Add Card</button>
            <button className="btn" onClick={() => setIsVisibleAddForm(false)}>Cancel</button>
        </div>

    )
}

export default AddForm;