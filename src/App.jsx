import { useState } from 'react'
import data from "../src/assets/data.js"
import JournalEntry from './components/JournalEntry';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import './styles.css'; // Import the CSS file

function App() {
  console.log(data);
  const journalEntryList = data.map( (entry) => {
      return <JournalEntry entry={entry} />
    }
    )
  return (
    <>
      <NavBar/>
      <div className="entries">
        {journalEntryList}
      </div>
      <Footer/>
    </>
  )
}

export default App
