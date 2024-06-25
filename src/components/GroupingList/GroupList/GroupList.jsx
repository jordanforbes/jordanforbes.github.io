///////////////////////////////////////////////////////////////
//contains GroupingBtn components, which list out every group
//passes props to the GroupingBtn components
/////////////////////////////////////////////// ////////////////

import React from 'react';
import Table from 'react-bootstrap/Table';
import GroupingBtn from './GroupingBtn';
import { useSelector } from 'react-redux';

const GroupList =(props)=>{

    const root = useSelector(state => state.groupSelector.root)

    //finds all of the names of scales and chords
    const allGroupings =()=>{
        let groupArr = props.groupType.names()
        if(root){
        return groupArr.map(name =>(
            <>
                <GroupingBtn grouping={props.grouping} name={name} />
            </>
        ))}
    }

    return(
        <>
            <div className={`overflow-auto groupContainer ${!root? 'hideContainer': props.areScales ? 'scaleContainer' : 'chordContainer'}`}>
                <Table bordered>
                    <tbody>
                        {allGroupings()}
                    </tbody>
                </Table>
            </div>
        </>
        )
}

export default GroupList
