import React from 'react';


const NewCard = ({ setIsVisibleAddForm }) => {

    return (
        <div className='cards' onClick={() => setIsVisibleAddForm(true)}>
            <p className='new-card'>Add Card</p>
            <p className='plus-sign'> + </p>
        </div>
    )
}

export default NewCard;