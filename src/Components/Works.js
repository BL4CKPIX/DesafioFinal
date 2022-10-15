import React from "react";
import * as S from '../Styles/Styles'
import Recipes from '../Img/Recipes.jpg'
import FilmesFlix from '../Img/FilmesFlix.jpg'
import Lol from '../Img/LOL.jpg'
import StarWars from '../Img/StarWars.jpg'
export default function Works(){



    const settings = {
        dots: false,
        wrapAround: true,
        pauseOnHover: true,
        autoplay: true,
        slidesToShow: 3,
        speed: 500,
        cellAlign: "center",
        slidesToScroll: 1,
        dragThreshold: 1,
        adaptiveWidth: true,
        enableKeyboardControls: true,
        defaultControlsConfig: {
          nextButtonText: ">",
          prevButtonText: "<",
          pagingDotsStyle: {
            fill: "red",
            width: "2vw",
            position: "relative",
            top: "10vh",
          },
          nextButtonStyle: {
            border: "none",
            color: "black",
            backgroundColor: "#72ff00",
          },
          prevButtonStyle: {
            color: "black",
            border: "none",
            backgroundColor: "#72ff00"
          }
        }
      };
    return(
        <S.ContainerWorks >
            <S.DivWorks {... settings}>
                <div>
                    <a href="https://magenta-moxie-78c1fd.netlify.app" target={"_blank"} rel="noopener noreferrer" ><S.ImgWorks src={Recipes} alt='Receitas' /></a>
                    <h2>Recipes</h2>
                </div>
                <div>
                    <a href="https://coruscating-cactus-e20f49.netlify.app" target={"_blank"} rel="noopener noreferrer" ><S.ImgWorks src={FilmesFlix} alt='Filmes e Series' /></a>
                    <h2>Filmes</h2>
                </div>
                <div>
                    <a href="https://bl4ckpix.github.io/Login_League_Of_Legends/" target={"_blank"} rel="noopener noreferrer" ><S.ImgWorks src={Lol} alt='Login League of legends' /></a>
                    <h2>League Of Legends</h2>
                </div>
                <div>
                    <a href="https://bl4ckpix.github.io/Star-Wars/" target={"_blank"} rel="noopener noreferrer" ><S.ImgWorks src={StarWars} alt='StarWars' /></a>
                    <h2>StarWars</h2>
                </div>
            </S.DivWorks>
        </S.ContainerWorks>
    )
}