///////////////////////////////////////////////////////////////
//Defines Button which selects the scale or chord grouping depending
//on props passed
///////////////////////////////////////////////////////////////

import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formatter, noteFormatter } from '../../../utilities/utils';
import { selectGroup, clearGroup } from '../../../features/groupSelector/groupSelectorSlice';

const GroupingBtn=(props)=>{
    const [active, setActive] = useState(false)

    const areScales = useSelector(state => state.groupSelector.areScales)
    const rawRoot = useSelector(state => state.groupSelector.rawRoot)
    var selectedGroup = useSelector(state => state.groupSelector.selectedGroup)

    const dispatch = useDispatch();

    const selectGrouping =(group)=> {
        dispatch(selectGroup(group))
    }

    const checkActive =()=>{
        if(selectedGroup === props.name){
            setActive(true)
        }else{
            setActive(false)
        }
    }

    useEffect(()=>{
        checkActive()
    },[selectedGroup])

    const handleClick=()=>{
        if(rawRoot){
            selectGrouping(props.name)
            checkActive()
        }
        if(active){
            setActive(false)
            dispatch(clearGroup())
        }
    }

    const showNotes =()=>{
        let groupArr = rawRoot ? props.grouping.get(rawRoot+' '+props.name).notes : props.grouping.get(props.name).intervals

        return groupArr.map(n => (<span className="groupSpacing">{rawRoot ? noteFormatter(n):n} </span>))
    }


    const changeBgColor = () =>{
        return areScales ? 'selectedScaleRow':'selectedChordRow'
    }
    const changeHoverColor = () =>{
        return areScales ? 'scaleRow':'chordRow'
    }

    const showIntervals =()=>{
        let intArr = props.grouping.get(props.name).intervals
        return (
            <>
            <br />
            <span className={`groupSpacing ${active? 'selInterGroup' : 'interGroup'} intervals`}>
                {intArr.map(n => (<span className="interSpacing">{n[1]+n[0]} </span> ))}
            </span>
            </>
        )
    }

    return(
        <tr className={`groupBtn ${changeHoverColor()} ${active? changeBgColor():''}`}onClick={handleClick}>
            <div>

            <span className={`groupSpacing ${active? 'selectedScaleName':''}`}>
                <span className={`groupSpacing ${active? 'selectedGroupName selectedScale':''} noteList`}>
                {formatter(props.name)}
                </span>
                <br />
                <span className={`groupSpacing ${active? 'selectedGroupNoteList': 'groupNoteList' }`}>
                    {showNotes()}
                </span>
                    {showIntervals()}
                {/* {active ? showIntervals() : '' } */}
            </span>
                <div className={`${active? 'xClearGroupingBtn' : 'unselectedClear'}`}>
                    x
                </div>
            </div>
        </tr>
    )
}

export default GroupingBtn
