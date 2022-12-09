import React from "react";

function ReusSubSubComponents(props) {
    return(
        <div>
            <div class='container' style={{height:'50px'}}>
                <div class='row'></div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col"></div>
                    <div class="col-10">
                        <h2 class='text-center' >{props.props.name}</h2>
                        <h4 class='text-justify'>{props.props.desc}</h4>
                    </div>
                    <div class="col"></div>
                </div>
            </div>
        </div>
    )
}
export default ReusSubSubComponents;