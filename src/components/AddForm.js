import React from "react";
import { useState } from "react";

const AddForm = ({ setIsVisibleAddForm, cards, setCards }) => {
    const [newCardName, setNewCardName] = useState('')
    const [newImg, setNewImg] = useState('')
    const [newSetNum, setNewNum] = useState(103)
    const addNewCard = { newCardName, newImg, newSetNum }

    const handleAddForm = async (e) => {
        newSetNum++;
        e.preventdefault()
        let req = await fetch(`http://localhost:9292/cards`,{
            method : 'POST',
            header: {'CONTENT-TYPE':'application/json'},
            body: JSON.stringify()
        })
        let res = await req.json(addNewCard)
    
        setCards({addNewCard,...cards})
        }

    return (
        <div className="add-form-container">
            <form className='add-form'>
                <input onChange={(e) => e.target.value} placeholder="Card Name" value={newCardName} />
                <input onChange={(e) => e.target.value} placeholder="Card Img Url" value={newImg} />
            </form>
            <button onClick={() => handleAddForm}>Add Card</button>
            <button onClick={() => setIsVisibleAddForm(false)}>Cancel</button>
        </div>

    )
}

export default AddForm;