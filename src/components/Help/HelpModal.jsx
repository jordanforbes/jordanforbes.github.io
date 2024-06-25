/////////////////// //////////////////////////
// Help Modal triggered by question mark which explains how app works
///////////////////////////// /////////// ///////

import React from "react";
import { useState } from "react";

const HelpModal =(props)=>{

    // const [display, setDisplay] =useState(false)

    const isShowing =()=>{
        return props.displayModal ? 'showModal': 'hideModal'
    }

    const handleClick = ()=>{
        props.setDisplayModal(false)
        console.log('click Fire')
    }
    return(
        <>
        <div
            className={`${isShowing()}`}
            onClick={handleClick}
        >
            <h1>How to Use This Thing</h1>
            <p>(click to close)</p>
            <p>Power Gord is an app that allows you to find <br/>Chords and Scales on a virtual guitar fretboard</p>
            <br/>
            <p>Select a note on the fretboard<br />
            This should reveal all of the possible Chords or Scales <br />
            Which use that note as a root.
            <br />
            <br/>
            <p>
            The <span style={{"color":"#ffb300", "font-weight":"bold"}}>root</span> note will be lit up in yellow, with all notes in that grouping colored red or blue depending on if it's a <span style={{"color":"#ff0000", "font-weight":"bold"}}>scale</span> or a  <span style={{"color":"#2238ff", "font-weight":"bold"}}>chord</span>.
            <br /> <br />
            notes which are darker than others are fifths, which are identified <br/> to help you navigate each chord easier
            </p>
            <br />
            Switch between <span style={{"color":"#2238ff", "font-weight":"bold"}}>Chords</span> and <span style={{"color":"#ff0000", "font-weight":"bold"}}>Scales</span> by clicking on their buttons
            <br />
            And clear the current root by clicking on the <span style={{"color":"#ffb300", "font-weight":"bold"}}>Root</span> button.
            <br/><br />
            Have fun!
            </p>
        </div>
        </>
    )
}

export default HelpModal;
