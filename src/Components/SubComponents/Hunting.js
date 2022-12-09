import React from "react";
import ReuseComponent from "./ReuseSubComponent";
import marco_polo from '../../assets/gallery/marco_polo.jpeg';
import ibex from '../../assets/gallery/ibex.jpeg';
import brown_bear from '../../assets/gallery/brown_bear.jpeg';
import wild_bore from '../../assets/gallery/wild_bore.jpeg';


function Hunting() {
    const animals = 
        [
            {name: 'Marco Polo', img: marco_polo, url: "/MarcoPolo"}, 
            {name: 'Ibex', img: ibex, url: "/Ibex"}, 
            {name: "Brown Bear", img: brown_bear, url: "/BrownBear"}, 
            {name: "Wild Bore", img: wild_bore, url: "/WildBore"}
        ];
    return(
        <div>
            <ReuseComponent datas={animals}/>
        </div>
    )
}
export default Hunting;