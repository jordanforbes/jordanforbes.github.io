////////////////////////////////////////////////////////////////////////////////////
//Defines the clear button which displays the root and also erases it
////////////////////////////////////////////////////////////////////////////////////

import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { reset} from '../../../features/groupSelector/groupSelectorSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ClearBtn =(props)=>{
    const dispatch = useDispatch()

    const clearBoard=()=>{
        dispatch(reset())
      }

    return(
      <>
        <Button
          style={{'display':'block','float':'left'}}
          type="button"
          className={`btn btn-outline-dark ${props.root ? 'clearBtn modeBtn': 'disabled'}`}
          onClick={clearBoard}
        >
          {/* Root Note Display */}
          <div style={{'display':'block','float':'left'}}>
            <h3 className={`${!props.root ? 'noRootMessage':''}`}>
              {props.root ? 'Root: '+props.root : 'Select Root'}
            </h3>
          </div>

          {/* X for clear */}
          <div className={`xClear`}>
              {props.root ?
              'x': ''}
          </div>
        </Button>

      </>
    )

}

export default ClearBtn
