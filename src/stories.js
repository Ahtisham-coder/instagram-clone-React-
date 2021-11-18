import React from "react";
import './Stories.css';
 
const Stories = () =>{
    const [state ,setState] = React.useState([
        {id:1, image:"images/img/1.jpg", name:"imrankhan"},
        {id:2, image:"images/img/2.jpg", name:"salman"},
        {id:3, image:"images/img/3.jpg", name:"Rasool"},
        {id:4, image:"images/img/4.jpg", name:"khanbaba"},
        {id:5, image:"images/img/5.jpg", name:"imran"},
        {id:6, image:"images/img/6.jpg", name:"ikhan"},
        {id:7, image:"images/img/7.jpg", name:"quaid"},
        {id:8, image:"images/img/8.jpg", name:"rehman"},
        {id:9, image:"images/img/9.jpg", name:"camran"},
        
        ]);
    return(
        <div className="container flex  justify-content-center">
        <div className="stories ">
            {state.map(user =>(
                        <div className="stories__info" >
                        <div className="stories__img">
                            <span>
                                
                                <img src={user.image} alt="" />
                            </span>
        
                        </div>
                        <div className="storiesName">{user.name}</div>
                    </div>
            ))}
        </div>
        </div>
    );
};
export default Stories;