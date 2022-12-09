import React from "react";
import ReuseComponent from "./ReuseSubComponent";
import guided_tours from '../../assets/gallery/guided_tours.jpeg';
import wild_life_tours from '../../assets/gallery/wild_life_tours.jpeg';
import family_tours from '../../assets/gallery/family_tours.jpeg';

function Tourism() {
    const tours = 
        [
            {name: 'Guided Tours', img: guided_tours, url: "/GuidedTours"}, 
            {name: 'Wild Life Tours', img: wild_life_tours, url: "/WildLifeTours"}, 
            {name: 'Family Tours', img: family_tours, url: "/FamilyTours"}, 
        ];
    return(
        <div>
            <ReuseComponent datas={tours}/>
        </div>
    )
}
export default Tourism;