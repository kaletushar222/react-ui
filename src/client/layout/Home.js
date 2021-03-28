import React, { Component } from 'react';
import { DashCircleFill } from 'react-bootstrap-icons';

class ComponentHome extends Component {
    render() {
        return (
            <div className="container">
                <div className="my_heading">
                    <DashCircleFill /> &nbsp; &nbsp;| &nbsp;&nbsp;<b>Healthy Fruits</b>
                </div>
                <div className="section_1">
                    <div className="row">
                        <div className="col-7 section_1_text_container">
                            <h1 className="section_1_heading">Lorem Ipsum </h1>
                            <h5 className="section_1_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
                        </div>
                        <div className="col-5">
                            <img alt="fruit1" src={ process.env.PUBLIC_URL+"/images/mango_kiwi.png" } className="section_1_fruit_image" />
                        </div>
                    </div>
                </div>
                <div className="section_2">
                    <div className="row">
                        <div className="col-3">
                            <img alt="fruit2" src={ process.env.PUBLIC_URL+"/images/pineapple_avo.png" }  className="section_2_fruit_image" />
                        </div>
                        <div className="col-8 section_2_text_container">
                            <h1 className="section_2_heading">Lorem Ipsum </h1>
                            <h5 className="section_2_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
                        </div>
                    </div>
                </div>
                <div className="section_3">
                    <div className="row">
                        <div className="col-7 section_3_text_container">
                            <h1 className="section_3_heading">Lorem Ipsum </h1>
                            <h5 className="section_3_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
                        </div>
                        <div className="col-5">
                            <img alt="fruit3" src={ process.env.PUBLIC_URL+"/images/lemon_avo.png" } s className="section_3_fruit_image" />
                        </div>
                    </div>
                </div>
                <br/><br/>
                <div className="nutrition_facts_section">
                    <div className="container" style={{marginTop: '2%'}}>
                        <h3 className="nutrition_heading">Nutrition Facts</h3>
                        <div className="row">
                            <div className="col-2">Serving Size</div>
                            <div className="col-9" />
                            <div className="col-1">100g</div>
                        </div>
                        <hr className="horizontal_line"/>
                        <div className="row">
                            <div className="col-2">Amount Per Serving</div>
                            <div className="col-9" />
                            <div className="col-1">100g</div>
                        </div>
                        <br/>
                        <h2 className="nutrition_heading">Calories</h2>
                        <hr className="horizontal_line"/>
                        <br/>
                        <div className="row">
                            <div className="col-10" />
                            <div className="col-2">% Daily value*</div>
                        </div>
                        <hr className="light_horizontal_line"/>
                        <div className="row">
                            <div className="col-2"><b>Total fat</b> &nbsp; 0.3g</div>
                            <div className="col-9" />
                            <div className="col-1">0%</div>
                        </div>
                        <hr className="light_horizontal_line"/>
                        <div className="row">
                            <div className="col-2">&nbsp; Saturated fat 0.1g</div>
                            <div className="col-9" />
                            <div className="col-1">0%</div>
                        </div>
                        <hr className="light_horizontal_line"/>
                        <div className="row">
                            <div className="col-2"><b>Sodium</b> &nbsp; 1mg</div>
                            <div className="col-9" />
                            <div className="col-1">0%</div>
                        </div>
                        <hr className="light_horizontal_line"/>
                        <div className="row">
                            <div className="col-3"><b>Total Carbohydrate</b> &nbsp; 23g</div>
                            <div className="col-8" />
                            <div className="col-1">8%</div>
                        </div>
                        <hr className="light_horizontal_line"/>
                        <div className="row">
                            <div className="col-2">&nbsp; Dietary fiber 2.6g</div>
                            <div className="col-9" />
                            <div className="col-1">9%</div>
                        </div>
                        <hr className="light_horizontal_line"/>
                        <div className="row">
                            <div className="col-2">&nbsp; Sugar 12g</div>
                            <div className="col-9" />
                            <div className="col-1"></div>
                        </div>
                        <hr className="light_horizontal_line"/>
                        <div className="row">
                            <div className="col-2"><b>Protein</b> &nbsp; 1.1g</div>
                            <div className="col-9" />
                            <div className="col-1">2%</div>
                        </div>
                        <hr className="dark_horizontal_line"/>
                        <div className="row">
                            <div className="col-2">Vitamin D 0.00mcg</div>
                            <div className="col-9" />
                            <div className="col-1">0%</div>
                        </div>
                        <hr className="light_horizontal_line"/>
                        <div className="row">
                            <div className="col-2">Calcium 5.00m</div>
                            <div className="col-9" />
                            <div className="col-1">0%</div>
                        </div>
                        <hr className="light_horizontal_line"/>
                        <div className="row">
                            <div className="col-2">Iron 0.26mg</div>
                            <div className="col-9" />
                            <div className="col-1">1%</div>
                        </div>
                        <hr className="light_horizontal_line"/>
                        <div className="row">
                            <div className="col-2">Potassium 358mg</div>
                            <div className="col-9" />
                            <div className="col-1">8%</div>
                        </div>
                        <hr className="dark_horizontal_line"/>
                        <br/>
                        <div className="row">
                            <div className="col-12">
                                The % Daily Value(DV) tells you how much a nutrient in a serving of food contribure to a daily diet 2000 Calories a day is used for general Nutrition advice.
                            </div>
                        </div>
                        
                        <br/><br/><br/>
                    </div>
                </div>
                <br/><br/>
            </div>
        )
    }
}
export default ComponentHome;