import React from "react";
import lodging1 from '../../assets/gallery/lodging1.jpg';
import lodging2 from '../../assets/gallery/lodging2.jpeg';
import lodging3 from '../../assets/gallery/lodging3.jpg';

function Lodging() {
    return(
        <div class="lodging_cards">
            <div class="lodging_card">
                <div class="card__image-holder">
                    <img class="card__image card-img-top" src={lodging1} alt="beach" />
                </div>
            </div>

            <div class="lodging_card">
                <div class="card__image-holder">
                     <p class="card__image">
                            Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown 
                        printer took a galley of type and scrambled it to make a 
                        type specimen book. It has survived not only five centuries, 
                        but also the leap into electronic typesetting.
                    </p>
                </div>
            </div>

            <div class="lodging_card">
                <div class="card__image-holder">
                    <img class="card__image card-img-top" src={lodging2} alt="mountain" />
                </div>
            </div>

             <div class="lodging_card">
                <div class="card__image-holder">
                     <p class="card__image">
                            Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown 
                        printer took a galley of type and scrambled it to make a 
                        type specimen book. It has survived not only five centuries, 
                        but also the leap into electronic typesetting.
                    </p>
                </div>
            </div>

            <div class="lodging_card">
                <div class="card__image-holder">
                    <img class="card__image card-img-top" src={lodging3} alt="field" />
                </div>
            </div>

            <div class="lodging_card">
                <div class="card__image-holder">
                    <p class="card__image">
                            Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown 
                        printer took a galley of type and scrambled it to make a 
                        type specimen book. It has survived not only five centuries, 
                        but also the leap into electronic typesetting.
                    </p>
                </div>
            </div>

            <div class="lodging_card">
                <div class="card__image-holder">
                    <p class="card__image">
                            Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown 
                        printer took a galley of type and scrambled it to make a 
                        type specimen book. It has survived not only five centuries, 
                        but also the leap into electronic typesetting.
                    </p>
                </div>
            </div>

            <div class="lodging_card">
                <div class="card__image-holder">
                    <img class="card__image" src="https://source.unsplash.com/300x225/?water" alt="water" />
                </div>
            </div>

            <div class="lodging_card">
                <div class="card__image-holder">
                    <img class="card__image" src="https://source.unsplash.com/300x225/?river" alt="river" />
                </div>
            </div>

            <div class="lodging_card">
                <div class="card__image-holder">
                    <p class="card__image">
                            Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown 
                        printer took a galley of type and scrambled it to make a 
                        type specimen book. It has survived not only five centuries, 
                        but also the leap into electronic typesetting.
                    </p>
                </div>
            </div>
  
            <div class="lodging_card">
                <div class="card__image-holder">
                    <img class="card__image" src="https://source.unsplash.com/300x225/?underwater" alt="underwater" />
                </div>
            </div>
            
            <div class="lodging_card">
                <div class="card__image-holder">
                    <p class="card__image">
                            Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, when an unknown 
                        printer took a galley of type and scrambled it to make a 
                        type specimen book. It has survived not only five centuries, 
                        but also the leap into electronic typesetting.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Lodging;