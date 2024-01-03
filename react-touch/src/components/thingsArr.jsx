import {useState} from "react";

export default function Thing() {
    const [thingsArray, setThingsArray] = useState(['Thing 1', 'Thing 2'])
    
    function addItem() {
        let addToArr = `Thing ${thingsArray.length + 1}`
        setThingsArray(iniArr => [...iniArr, addToArr])
    }
    
    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    
    return (
        <div>
            <button onClick={addItem} >Add Item</button>
            {thingsElements}
        </div>
    )
}