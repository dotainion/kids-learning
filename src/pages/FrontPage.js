import React from 'react';
import { useHistory } from 'react-router';
import img from '../images/abc.jpg';

//https://www.adventureacademy.com/?src_tag=nonbrand::goog:car&utm_campaignid=2042883281&utm_adgroupid=72968648795&utm_adextensionid=&utm_targetid=kwd-55226951275&utm_matchtype=e&utm_network=g&utm_device=c&utm_devicemodel=&utm_creativeid=382082014229&utm_placement=&utm_adposition=&utm_geo=CAR&gclid=CjwKCAjw_L6LBhBbEiwA4c46ukeztcNl8YwR-r5dJk2MN_8sXO6rrndGFNygxrk6o3iOGmCjaTxpShoCRfcQAvD_BwE

export const FrontPage = () =>{
    const history = useHistory();
    return(
        <div className="front-page">
            <div className="float-top-center page-header-title">
                <div><span>FOR KIDS</span></div>
                <div><span>READING.MATHS.SCIENCE. AND MORE</span></div>
            </div>
            <div onClick={()=>history.push("/learn")}  className="float-center btn-image">
                <b>TRY NOW</b>
            </div>
        </div>
    )
}