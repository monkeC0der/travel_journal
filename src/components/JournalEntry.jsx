import { useState } from 'react'
import data from "../assets/data.js"

export default function JournalEntry (props) {
    return (
        <div className="journalEntry">
                <div className="journalEntry--imgPane">
                <img className="journalEntry--imgPane--coverImg" src={`./src/assets/${props.entry.coverImg}`} />
        </div>
        <div className="journalEntry--infoPane">
            <h1>{props.entry.title}</h1>
            <span>{props.entry.dates.arrival} - {props.entry.dates.departure}</span>
            <p>{props.entry.description}</p>
        </div>
        </div>
    )
}