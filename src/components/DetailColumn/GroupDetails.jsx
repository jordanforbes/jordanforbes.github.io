// ///////////////////////////////////////////////////////////////
// //Component Container which shows details about selected group
// //-CURRENTLY UNUSED-
// ///////////////////////////////////////////////////////////////////////////////////////////////

// import { useSelector } from 'react-redux';
// import { Chord, Scale } from '@tonaljs/tonal'

// const GroupDetails=(props)=>{
//     var selectedGroup =  useSelector(state => state.groupSelector.selectedGroup)
//     const root = useSelector(state => state.groupSelector.root)

//     const showIntervals=()=>{
//         let intArr = props.groupType.get(selectedGroup).intervals
//         return intArr.map(i =>(<>{i+' '}</>))
//     }

//     const showNotes=()=>{
//         let thisGroup = root+' '+selectedGroup
//         let noteArr = props.areScales? Scale.get(thisGroup).notes : Chord.get(thisGroup).notes
//         return noteArr.map(i =>(<>{i+' '}</>))
//     }

//     return(
//         <div>
//             <p>Group Details</p>
//             <p>
//             <b>Name:</b><span> {selectedGroup}</span>
//             </p>
//             <p>
//             <b>intervals:</b><span> {showIntervals()}</span>
//             </p>

//             <p>
//             <b>notes:</b><span> {root ? showNotes(): 'select root'}</span>
//             </p>
//         </div>
//     )
// }

// export default GroupDetails
