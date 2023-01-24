import React, { useState } from 'react'
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Zoom from "@material-ui/core/Zoom";

const CreateArea = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    
    function expand(){
        setIsExpanded(true)
    }
  return (
    <div>
      <form className="create-note">
        {isExpanded && <input name="title" placeholder="Title" />}
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={3}
          onClick={expand}
        />
        <Zoom in={isExpanded}>
          <Fab>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea