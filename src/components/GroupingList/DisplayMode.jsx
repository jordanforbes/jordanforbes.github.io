///////////////////////////////////////////////////////////////
//Container Interface for mode switching and group selection
///////////////////////////////////////////////////////////////

import GroupList from "./GroupList/GroupList"
import ClearBtn from './DisplayButtons/ClearBtn'
import ModeBtn  from "./DisplayButtons/ModeBtn"
import { useDispatch, useSelector } from 'react-redux';
import { setGroupMode, clearGroup } from '../../features/groupSelector/groupSelectorSlice';


//contains the note list and the group list
const DisplayMode = (props)=>{
  const dispatch = useDispatch();
  const areScales = useSelector(state => state.groupSelector.areScales)

  const root = useSelector(state => state.groupSelector.root)


  const scaleMode =()=>{
    dispatch(clearGroup())
    dispatch(setGroupMode(true))
  }

  const chordMode =()=>{
    dispatch(clearGroup())
    dispatch(setGroupMode(false))
  }

    return(
      <div className={`col-md-8 displayColumn ${ !root ? 'displayNoRootBorder': areScales? 'displayScaleBorder': 'displayChordBorder'}`}
      // style={{'padding-right':'50px'}}
      >
        {/* Clear Button */}
        <div style={{'height':'7px'}} />
        <ClearBtn
          root = {root}
        />
        <div style={{'height':'7px'}} />
        <div style={{'height':'60px'}} />
        <div style={{'display':'block','float':'left'}}>
          {/* Scale Button */}
          <ModeBtn
            scaleMode={true}
            areScales={areScales}
            groupMode={scaleMode}
            root={root}
          />
          {/* Chord Button */}
          <ModeBtn
            scaleMode={false}
            areScales={areScales}
            groupMode={chordMode}
            root={root}
          />
        </div>
        <div style={{'height':'10px'}} />
          <GroupList
            areScales={areScales}
            grouping={props.grouping}
            groupType = {props.groupType}
            root={root}
        />
      </div>
    )
  }

export default DisplayMode
