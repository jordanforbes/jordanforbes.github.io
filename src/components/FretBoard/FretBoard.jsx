///////////////////////////////////////////////////////////////
//defines virtual fretboard, which holds all of the note buttons
////////////////////////////////////////////////////////////

import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Scale } from '@tonaljs/tonal'
import HelpModal from '../Help/HelpModal';
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { useState } from "react";

//components
import NoteButton from './NoteButton';

const FretBoard=(props)=>{
    //sets tuning by creating arrays of scales that represent individual guitar strings
    const scaleRange = Scale.rangeOf('E chromatic')
    const [displayModal, setDisplayModal] =useState(false)

    function* range(start, end) {
        yield start;
        if (start === end) return;
        yield* range(start + 1, end);
    }
    const fretNums = [...range(0,12)]
    console.log(fretNums)

    //sets the range of notes for each string or column
    const standardTuning = [
        scaleRange('E2','E3'),
        scaleRange('A2','A3'),
        scaleRange('D2','D3'),
        scaleRange('G3','G4'),
        scaleRange('B4','B5'),
        scaleRange('E4','E5')
    ]

    //dynamically builds fretboard based on inserted notes
    const stringTuner=(scaleArray)=>{
        return scaleArray.map((n,i) =>(
            <NoteButton
                setSelectedNotes ={props.setSelectedNotes}
                setNotes={props.setNotes}
                thisNote={n}
                fret={i}
                grouping = {props.grouping}
            />
        ))
    }

    const fretboardBuilder=()=>{
        return standardTuning.map(s=>(
            <div className=" noteBar ">
                <ButtonGroup vertical>
                    {stringTuner(s)}
                </ButtonGroup>
            </div>
        ))
    }

    const toggleModal =()=>{
        setDisplayModal(!displayModal)
    }

    const handleClick = ()=>{
        setDisplayModal(true)
    }
    return(
        <div className="fBoardContainer note-bar container d-flex flex-nowrap">
            {fretboardBuilder()}
            < AiOutlineQuestionCircle
                className="helpBtn"
                onClick={handleClick}
            />
            <HelpModal
                displayModal={displayModal}
                setDisplayModal={setDisplayModal}
            />
        </div>
    )

  }

export default FretBoard;
