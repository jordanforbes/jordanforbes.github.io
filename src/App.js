/////////////////// //////////////////////////
// Main App file containing all components
///////////////////////////// /////////// ///////

import './stylesheets/App.scss';
import React from 'react';
import { useSelector } from 'react-redux';
import { Chord, Scale, ChordType, ScaleType } from '@tonaljs/tonal'
import { AiOutlineQuestionCircle } from 'react-icons/ai'


import FretBoard from './components/FretBoard/FretBoard';
import PowerHeader from './components/PowerHeader';
import DisplayMode from './components/GroupingList/DisplayMode';

const App=()=>{

  //decides which group will be passed to components, swapping modes
  const areScales = useSelector(state => state.groupSelector.areScales)
  const selectedGroup =  useSelector(state => state.groupSelector.selectedChord)
  const grouping = areScales ? Scale : Chord
  const groupType = areScales ? ScaleType : ChordType


  return (
    <div className="App bg">
      <div className="container">
        <div className="row">
          <PowerHeader />
        </div>
        <br />
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-4"
            // style={{'margin-right':'-40px'}}
          >
            {/* fretboard grid */}
            <div>
            <FretBoard
              selectedGroup = {selectedGroup}
              grouping={grouping}
            />
            </div>

          </div>
          <div className="col-md-4">
            <div className="row">
              <DisplayMode
                selectedGroup = {selectedGroup}
                grouping={grouping}
                groupType = {groupType}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}





export default App;
