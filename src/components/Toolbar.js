import React from 'react';
import {BboxIcon, Ploygun, HandelIcon, Clean, Undo , Redo, TextIcon, PlusIcon, MiusIcon} from './Icons';

function Toolbar (){
    return(
        <div className="Toolbar">
            <ul>
            <li> <HandelIcon/></li>
            <li> <BboxIcon /></li>
            <li> <Ploygun /></li>
            <li> <TextIcon /></li>
            <li> <Clean/></li>
            <li> <PlusIcon/></li>
            <li> <MiusIcon/></li>
            <li> <Redo/></li>
            <li> <Undo/></li>
            </ul>
        </div>
    )
}

export default Toolbar;