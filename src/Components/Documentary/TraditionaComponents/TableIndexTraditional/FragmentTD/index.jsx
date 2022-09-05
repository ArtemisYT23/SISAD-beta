import { Collapse } from "@material-ui/core";
import React from "react";
import { useState } from "react";

const FragmentTD = ({ name }) => {
    
    const [open, setOpen] = useState(false);

    return(
        //recibe el cod documento y apertura la seccion de files
        <React.Fragment>
            <td className="icon" onClick={() => setOpen(!open)}>
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                <div className="DocTitle">{name}</div>
            </td>
            
        </React.Fragment>
    );
}

export default FragmentTD;