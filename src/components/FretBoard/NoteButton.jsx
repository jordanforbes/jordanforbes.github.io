////////////////////////////////////////////////////////////////
//component which defines the individual note buttons on the fretboard.
//sets active Root
////////////////////////////////////////////////////////////////

import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { octaveRemove } from '../../utilities/utils';
import { selectRoot } from '../../features/groupSelector/groupSelectorSlice';
import NoteString from './NoteString';

const NoteButton=(props)=>{
    const [isRoot, setIsRoot] = useState(false)
    const [inRange, setInRange] = useState(true)
    const [isEnharmonic, setIsEnharmonic] = useState(false)
    const [thisInterval, setThisInterval] = useState('')
    const [isFifth, setIsFifth] = useState(false)
    // const [isThird, setIsThird] = useState(false)

    const dispatch = useDispatch();
    const root = useSelector(state => state.groupSelector.root)
    const areScales = useSelector(state => state.groupSelector.areScales)

    const checkIsFifth =()=>{ thisInterval[1] === '5'? setIsFifth(true) : setIsFifth(false)}
    // const checkIsThird =()=>{ thisInterval[1] === '3'? setIsThird(true) : setIsThird(false)}

    //sets the default color value for the group based on if it's scales or chords.
    var rangeColor = areScales ? 'isInRangeScales':'isInRangeChords'
    var fifthColor = areScales ? 'sIsFifth' : 'cIsFifth'
    // var thirdColor = areScales ? 'sIsThird' : 'cIsThird'

    //adds root and group together to plug back into the tonaljs library
    useEffect(()=>{
        if(root === octaveRemove(props.thisNote)){
            setIsRoot(true)
        }else{
            setIsRoot(false)
        }
    },[root])

    useEffect(()=>{
        checkIsFifth()
        // checkIsThird()
    },[thisInterval])

    //sets the root for the chord/scale on button press
    const activate=(note)=>{
        setIsRoot(current => !current);
        dispatch(selectRoot(note))
    }

    const handleClick=()=>{
        isRoot ? activate(""):
        activate(props.thisNote)

    }
    return(
        <button
            type="button"
            className={`
                noteButton btn
                ${
                    isRoot ? 'isRoot' :
                    // isThird ? thirdColor :
                    isFifth ? fifthColor :
                    inRange? rangeColor :'isNotInRange'
                }
            `}
            onClick={handleClick}
        >
            <NoteString
                thisNote = {props.thisNote}
                grouping = {props.grouping}
                isRoot = {isRoot}
                inRange = {inRange} setInRange = {setInRange}
                isEnharmonic = {isEnharmonic} setIsEnharmonic = {setIsEnharmonic}
                thisInterval = {thisInterval} setThisInterval = {setThisInterval}
                isFifth = {isFifth} setIsFifth = {setIsFifth}
                // isThird = {isThird}
            />
        </button>
    )
  }

export default NoteButton;
