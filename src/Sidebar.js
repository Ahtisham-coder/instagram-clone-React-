import React from 'react'
import Avatar from '@mui/material/Avatar';
import './sidebar.css'
import { color, style } from '@mui/system';

const Sidebar = () => {
    const [side,usestate] = React.useState([
        {id:'1', images:"./images/img/2.jpg", name:"Ahsam_Ullah",cap:"Ahsam121"},
        {id:'1', images:"./images/img/3.jpg", name:"Ahtram_ullah" ,cap:"Ahtram212"},
        {id:'1', images:"./images/img/5.jpg", name:"Ahtisham_12",cap:"Ahsam__121"},
        {id:'1', images:"./images/img/4.jpg", name:"Khan_baba_1",cap:"Baba__khan"},
       
    ])
    return(
        <div className="sidebar ">
            <div className="top">
                <div className="top__img">
                    <img src="images/img/4.jpg" alt="" />
                </div>
                <div className="top__header">
                <h6>Ahtisham Ullah <br/><span>Broung_12</span></h6>
                </div>
                <div className="top__caption">
                   <a href=""> <p>Switch</p></a>
                </div>

            </div>
            <h4>Suggestions for you</h4>
            {
                side.map( item =>(
            <div className="top1">
                <div className="top__img1">
                    <img src={item.images} alt="" />
                </div>
                <div className="top__header1">
                <h6 style={{width:"80px"}}>{item.name} <br/><span>{item.cap}</span></h6>
                </div>
                <div className="top__caption1">

                   <a href=""> <p>Follow</p></a>
                </div>

            </div>))}
            <br/>
            <span style={{fontSize:"12px" ,color:"#8E8E8E"}}>About  Help  Press  APIJobs  Privacy Terms<br/><br/>
             LocationsTop accounts Hashtags Language
             English (UK)<br/><br/>
             © 2021 INSTAGRAM FROM FACEBOOK</span>
   </div>
    )
}
export default Sidebar;