import React from 'react';
import Draggable from 'react-draggable';
import Xarrow, { useXarrow, Xwrapper } from 'react-xarrows';


const boxStyle = {
    border: "grey solid 2px",
    borderRadius: "10px",
    padding: "5px"
}


// that is the parent point where to the line is start 
const DraggableBox = ({id}) => {
    const updateXarrow = useXarrow()
    return (
        <Draggable onDrag={updateXarrow} onStop={updateXarrow}>
            <div id={id} className=' bg-red-400 p-2 rounded-full w-5 h-5'>
                {id}
            </div>
        </Draggable>
    )
}

const LearnXarros = () => {
  return (
    <div>
      <Xwrapper>
        <DraggableBox id={"elem1"}/>
        <DraggableBox id={"elem2"}/>
        <Xarrow
        start={"elem1"}
        end={"elem2"}
        />
      </Xwrapper>
    </div>
  );
}

export default LearnXarros;
