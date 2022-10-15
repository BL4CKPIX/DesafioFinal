import React from "react";
import * as S from '../Styles/Styles'
import MyPhoto from '../Img/MyPhoto.png'
import {AiFillGithub, AiFillLinkedin, AiOutlineInstagram} from 'react-icons/ai'

export default function Home(){

    return(
        <S.ContainerHome>
            <div>
                <S.MyPhoto src={MyPhoto} alt='Minha Foto' />
                <S.H2>I'm Jordan, Front End Developer </S.H2>
                <S.icones>
                    <ul>
                        <li><a href="https://github.com/BL4CKPIX" target={"_blank"} rel="noopener noreferrer"><AiFillGithub/></a></li>
                        <li><a href="https://www.linkedin.com/in/jordan-santos-15411b234/" target={"_blank"} rel="noopener noreferrer" ><AiFillLinkedin/></a></li>
                        <li><a href="https://www.instagram.com/Jordan.Santos3215/" target={"_blank"} rel="noopener noreferrer"><AiOutlineInstagram/></a></li>
                    </ul>
                </S.icones>
            </div>
        </S.ContainerHome>
    )
}