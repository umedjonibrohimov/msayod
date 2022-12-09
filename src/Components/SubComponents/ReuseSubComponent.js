import React from "react";

function ReuseComponent(props) {
    const datas = props.datas;
    return (
        <div>
            <section id="portfolio" class="portfolio">
                <div class="container" data-aos="fade-up">
                    <div class="section-header">
                        <p class="section-description text-center"></p>
                    </div> 
                    <div class="container">
                        <div class="row">
                            {datas.map((data) =>
                                <div class="col-lg-6 mb-4">
                                    <div class="card shadow-lg p-3 mb-5 bg-body rounded">
                                        <a href={data.url}>
                                            <img src={data.img} alt="" id='img' className="card-img-top img-fluid shadow-2-strong mask"/>
                                        </a>
                                        <div class="card-body">
                                            <h5 class="card-title text-center">{data.name}</h5>  
                                        </div>
                                    </div>
                                </div>
                                )
                            }    
                        </div>
                    </div>
                </div>
            </section> 
        </div>
    )
}
export default ReuseComponent;