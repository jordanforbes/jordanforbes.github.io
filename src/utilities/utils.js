/////////////////////   /////////////////////// //////////////////////
//Defines commonly used utility functions
/////////////////////////////   ////////////////////////////////

export const formatter = (entry)=>{
    let entryArr = entry.split(" ");
    let fString = ''
    for(let i= 0; i< entryArr.length; i++){
        fString += capitalizer(entryArr[i])+" "
    }
    return(<span>{fString}</span>)
}

export const noteFormatter=(note) =>{
    return note.slice(0,note.length-1)
}

 //capitalize first letter in each word
 export const capitalizer = (entry)=>{
    return entry.charAt(0).toUpperCase() + entry.slice(1).toLowerCase()
}

//removes the octave number from the root.
export const octaveRemove =(note)=>{
    return note.slice(0, note.length-1)
}


// export default {formatter(), noteFormatter()}
