import React from "react";
import * as S from '../Styles/Styles'
import MyPhoto2 from '../Img/MyPhoto2.jpg';
export default function About() {
    return (
        <S.ContainerAbout>
            <S.Div>
                <div>
                    <S.H3>Quem sou eu ? </S.H3>
                    <h2>Meu nome é Jordan, desde a infância sempre gostei de computadores ganhei o meu primeiro computador aos 8 anos e até o momento sou apaixonato por computador, meu amigo me apresentou a programação e foi desde aquele momento que eu buscava programar, eu estudei um tempo python mas não me aprofundei tanto e depois de uns anos eu descobri o VaiNaWeb que me mostrou essa porta de entra que é a programação por completo e no momento busco melhorar cada vez mais minha programação. </h2>
                </div>
            
                <figure>
                    <S.MyPhoto2 src={MyPhoto2} alt='Foto de Formatura' />
                </figure>
            </S.Div>
        </S.ContainerAbout>
    )
}