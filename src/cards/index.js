import classNames from "classnames";
import photo from "../img/photo.jpg";
import photo1 from "../img/photo1.jpg";
import { useState } from "react";

export const Card = () => {
    const [active, setActive] = useState(false);
    const [activeCard, setActiveCard] = useState(false);
    const styleCard = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "400px",
        height: "600px",
        margin: "20px",
        border: "1px solid",
        borderRadius: "30px",
        padding: "20px",
        justifyContent: "space-around",
        backgroundColor: "rgb(180, 235, 217)",
        color: "rgb(238, 97, 97)"
    }
    
    if (activeCard) {
        styleCard.backgroundColor = "rgb(238, 97, 97)";
        styleCard.color = "rgb(180, 235, 217)";
    }

    const styleImg = {
        width: "350px",
        height: "200px",
        borderRadius: "10px"
    }
    return(
        <div style={{display: "flex", justifyContent: "center"}}>
            <div className={classNames("cardOne", {active: active})}>
                <header>Солнечный лес</header>
                <img className="imgOne" src={photo}/>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia, 
                    sem ut tincidunt porttitor, lorem nisi scelerisque nunc, eu rhoncus diam arcu quis magna. 
                    Proin ullamcorper egestas purus ut ullamcorper.
                </p>
                <button onClick={() => {setActive(!active)}} className="btn">Сменить цвет</button>
            </div>
            <div style={styleCard}>
                <header>Теплый пляж</header>
                <img style={styleImg} src={photo1}/>
                <p>
                    Mauris molestie faucibus quam at semper. Phasellus elementum, tellus eget volutpat dignissim, ipsum tortor ornare ex, 
                    malesuada tristique velit augue ut lorem. Quisque non sapien ullamcorper, lobortis purus quis, pellentesque nisi. 
                    Aliquam volutpat turpis sit amet tincidunt pretium. Nam suscipit tincidunt diam ac maximus.
                </p>
                <button onClick={() => {setActiveCard(!activeCard)}} className="btn">Сменить цвет</button>
            </div>
        </div>
    )
};