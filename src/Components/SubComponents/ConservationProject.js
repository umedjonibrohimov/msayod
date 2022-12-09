import React from "react";
import ReuseComponent from "./ReuseSubComponent";
import snow_leopard from '../../assets/gallery/snow_leopard.jpeg';
import bees from '../../assets/gallery/bees.jpeg';

function ConservationProject() {
    const projects = 
        [
            {name: 'Snow Leopard Project', img: snow_leopard, url: "/SnowLeopardProject"}, 
            {name: 'Bee Keeping Project', img: bees, url: "/BeeKeepingProject"}, 
        ];
    return(
        <div>
            <ReuseComponent datas={projects}/>
        </div>
    )
}
export default ConservationProject;