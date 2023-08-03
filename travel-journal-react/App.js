import React from "react"
import Header from "./components/Header"
import Body from "./components/Body"
import data from "./data"

export default function App() {
    const article = data.map(item => {
        return(
            <Body 
                key={item.id}
                {...item}
            />
        )
    })
    return(
        <div>
            <Header />
            {article}
        </ div>
    )
}