////////////////////////////////////////////////////////////////
//defines the note listed on each noteBtn
///////////////////////////////////////////////////////////////

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Note } from '@tonaljs/tonal'
import { octaveRemove } from '../../utilities/utils';

const NoteString=(props)=>{
    const rawRoot = useSelector(state => state.groupSelector.rawRoot)
    var selectedGroup = useSelector(state => state.groupSelector.selectedGroup)
    var groupInterval = useSelector(state => state.groupSelector.groupInterval)
    const selectionReady = useSelector(state => state.groupSelector.selectionReady)

    // const [thisInterval, setThisInterval] = useState('')

    //separate note from octave
    let note = octaveRemove(props.thisNote)

    //gets notes from grouping
    const findGroup =(group)=>{
        let groupArr = props.grouping.get(rawRoot+' '+group).notes
        return groupArr.map(n =>(
            n.slice(0,n.length-1)
        ))
    }

    //is this note within the selected group?
    const checkInRange =()=>{
        let currentGroup = findGroup(selectedGroup)
        let noteChroma = Note.chroma(note)
        let chromaGroup = currentGroup.map(Note.chroma)

        if(chromaGroup.includes(noteChroma) && selectionReady){
            props.setInRange(true)
            let selInterval = groupInterval[chromaGroup.indexOf(noteChroma)]
            props.setThisInterval(`${selInterval[1]}${selInterval[0]}`)
            // props.setThisInterval(`${selInterval[1]}${selInterval[0]}`)
        }else{
            props.setInRange(false)
            props.setThisInterval('')
        }
    }

    useEffect(()=>{
        checkInRange()
    },[selectedGroup,rawRoot])


    const getEnharmonic=(n)=>{
        return Note.enharmonic(n)
    }

    note = props.isEnharmonic ?getEnharmonic(note) : note

    return (
        <>
        <span className={`btnNote ${note[1] ? 'hasAcc':'noAcc'}`}>{note}</span>

        <span className={`topright
            ${props.isRoot ? 'boldInterval' :props.isFifth ? 'boldInterval' : 'btnOctave'}
        `}>
            {props.thisInterval}
        </span>
        </>)
}

export default NoteString
