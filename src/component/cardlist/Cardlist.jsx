import React from "react";
import './cardlist.css'
import { Card } from "../card/Card";

export const Cardlist = props=>(
    <div className='card-list'> 
        {props.monsters.map(monster => (
            <Card key={monster.id}  monster={monster}/>
        ))}
    </div>
);