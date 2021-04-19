import React from 'react';
import Slotm from './Slotm';
import './index.css';



const App = () => {

    return(
        <>
            <h1 className="heading_style"> 🎰 Welcome to <span style={{ fontWeight: 'bold' , backgroundColor:'#d2dbdd'}}>Slot Machine Game</span> 🎰</h1>
            <Slotm x='😃' y='😃' z='😃'/>
            <Slotm x='💻' y='🤑' z='💻'/>
            <Slotm x='🍎' y='🍎' z='🥭'/>
            <Slotm x='👧' y='👧' z='👧'/>
        </>
    )

}

export default App;