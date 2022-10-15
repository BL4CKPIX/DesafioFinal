import React from "react";
import * as S from '../Styles/Styles'
import MyPhoto2 from '../Img/MyPhoto2.jpg';
export default function About() {
    return (
        <S.ContainerAbout>
            <S.Div>
                <div>
                    <S.H3>Quem sou eu ? </S.H3>
                    <h2>What is Lorem Ipsum?
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h2>
                </div>
            
                <figure>
                    <S.MyPhoto2 src={MyPhoto2} alt='Foto de Formatura' />
                </figure>
            </S.Div>
        </S.ContainerAbout>
    )
}