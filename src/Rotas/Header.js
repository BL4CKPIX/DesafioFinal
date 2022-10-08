import React,{useState} from "react";
import * as S from '../Styles/Styles'
import J from '../Img/J.png'
import Menu from '../Img/MenuH.png'

export default function Header({rota,rota2,rota3}){

    const [open, setOpen] = useState(true)

    const Toggle = () =>{
        setOpen(!open)
    }

    return(
        <S.ContainerHeader>
            <figure>
                <S.Logo src={J} alt='Logo' />
            </figure>
            <S.Menu src={Menu} onClick={Toggle} />
            
            {open && <S.Nav>
                <S.Ul>
                    <li>
                        <S.Linkin to='/'>{rota}</S.Linkin>
                    </li>
                    <li>
                        <S.Linkin to='/Works'>{rota2}</S.Linkin>
                    </li>
                    <li>
                        <S.Linkin to='/About'>{rota3}</S.Linkin>
                    </li>
                </S.Ul>
            </S.Nav>}
            
        </S.ContainerHeader>
    )
}