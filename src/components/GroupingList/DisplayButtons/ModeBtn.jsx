////////////////////////////////////////////////////////////////////
// Defines the ModeBtn component which switches to either
// the Chord Mode or the Scale Mode depending on the props
///////////////////////////////////////////////////////////////////

import { Button } from "react-bootstrap";

const ModeBtn=(props)=>{
    const groupClasses = ()=>{
        if(props.root){
        return props.scaleMode ?
            `${props.areScales ? 'activeModeScales':'inactiveModeScales btn-outline-danger'}`
        :
            `${props.areScales ? 'inactiveModeChords btn-outline-primary':'activeModeChords'}`
        }else{
            return 'noRootMode'
        }
    }

    return(
        <>
            <Button
                className={ "btn modeBtn "+groupClasses()}
                type="button"
                onClick={props.groupMode}
            >
                <h2>{props.scaleMode ? 'Scales' : 'Chords'}</h2>
            </Button>
        </>
    )
}

export default ModeBtn
