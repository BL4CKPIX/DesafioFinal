import styled,{createGlobalStyle} from "styled-components";
import { Link } from "react-router-dom";
import Fundo from '../Img/Fundo.jpg'
import FundoM from '../Img/FundoMobile.jpg'

// RESET DO SITE
export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-image: url(${Fundo});
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100%;
        background-attachment: fixed;
        @media screen and (max-width: 768px) {
            background-image: url(${FundoM});
        }
    }
`

export const H2 = styled.h2`
    color: #72ff00;
    text-align: center;
`

// HEADER

export const ContainerHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 20vh;
    width: 100%;
    flex-wrap: wrap;
    
`

export const Nav = styled.nav`
    display: flex;
    width: 40%;
    justify-content: center;
    
    @media (max-width: 768px) {
        z-index: 1;
        position: absolute;
        top: 19.5vh;
        width: 100%;
        height: 45vh;
    }
`
export const Ul = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 100%;
    list-style: none;
    @media (max-width: 768px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
        height: 40vh;
    }
    
`

export const Linkin = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 1.5rem;
    :hover{
        transition: ease-in-out 1s;
        color: #72ff00;
        font-size: 1.6rem;
        
    }
    @media (max-width: 768px) {
        font-size: 1.5rem;
        font-weight: 600;
    }
`

export const Menu = styled.img`
    display: none;
    @media (max-width: 768px) {
        display: flex;
        width: 10vw;
    } 
`
export const Logo = styled.img`
    width: 5vw;
    @media (max-width: 768px) {
        width: 10vw;
        
    }
`

// HOME 

