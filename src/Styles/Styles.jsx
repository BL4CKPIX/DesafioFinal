import styled,{createGlobalStyle} from "styled-components";
import { Link } from "react-router-dom";
import FundoH from '../Img/Fundo3.png'
import Fundo from '../Img/Fundo2.png'
import FundoM from '../Img/FundoM.png'
import Carousel from "nuka-carousel/lib/carousel";


// RESET DO SITE //
export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`


// HEADER //

export const ContainerHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 20vh;
    width: 100%;
    flex-wrap: wrap;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: 100%;
    background-image: url(${FundoH});
    @media (max-width: 768px){
        height: 15vh;
    }
`



export const Nav = styled.nav`
    display: flex;
    width: 40%;
    justify-content: center;
    
    @media (max-width: 768px) {
        z-index: 3;
        position: absolute;
        top: 14.9vh;
        width: 100%;
        height: 45vh;
        backdrop-filter: blur(10px);
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
    color: black;
    font-weight: 600;
    font-size: 1.5rem;
    font-family: 'Montserrat', sans-serif;
    @media (max-width: 768px){
        color: red;
    }
    :hover{
        transition: ease-in-out 1s;
        color: #74dd19;
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
    width: 7vw;
    @media (max-width: 768px) {
        width: 10vw;
        
    }
`

// HOME //


export const H2 = styled.h2`
    color: #72ff00;
    animation: typing 3s 1s normal steps(48) both, blink 500ms  infinite alternate ;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    font-family: monospace;
    font-size: 2rem;
    @keyframes typing {
        from{
            width: 0em;
        }
        to{
            width: 17.5em;
        }
    }
    @keyframes blink {
        from{
            border-right: 3px solid;
        }
        to{
            border-color: transparent;
        }   
    }
    @media (max-width: 768px){
        @keyframes typing {
            to{
                width: 12em;
            }
        }
    }
`

export const MyPhoto = styled.img`
    width: 20vw;
    @media (max-width: 768px){
        width: 65vw;
    }
`

export const ContainerHome = styled.div`
        background-image: url(${Fundo});
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100%;
        background-attachment: fixed;
        height: 80vh;
        @media (max-width: 768px){
            background-image: url(${FundoM});
            height: 100vh;
        }
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;


        div{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        
        
`

export const icones = styled.div`
    width: 30%;
    color: white;
    font-size: 2.5rem;
    ul{
        display: flex;
        justify-content: space-evenly;
        list-style: none;
        width: 15vw;
    }
    a{
        color: white;
    }
`



// ABOUT //

export const ContainerAbout = styled.div`
        background-image: url(${Fundo});
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100%;
        background-attachment: fixed;
        height: 100vh;
        @media (max-width: 768px){
            background-image: url(${FundoM});
            height: 200vh;
        }
        display: flex;
        align-items: center;
        justify-content: center;
`

export const MyPhoto2 = styled.img`
    width: 20vw;
    height: 65vh;
    object-fit: cover;
    @media (max-width: 768px){
        width: 70vw;
    }
`

export const Div = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 70vw;
    height: 80vh;
    h2{
        color: #72ff00;
        width: 40vw;
    }
    
    @media (max-width: 768px){
        flex-direction: column-reverse;
        h2{
            width: 90vw;
        }
    }
`

export const H3 = styled.h3`
    color: white;
    animation: typing 4s 1s normal steps(28) both, blink 500ms  infinite alternate ;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    font-family: 'Orbitron', sans-serif;
    font-size: 2rem;
    @keyframes typing {
        from{
            width: 0em;
        }
        to{
            width: 9em;
        }
    }
    @keyframes blink {
        from{
            border-right: 3px solid;
        }
        to{
            border-color: transparent;
        }   
    }
    @media (max-width: 768px){
        @keyframes typing {
            to{
                width: 12em;
            }
        }
    }
`

// WORKS //

export const ContainerWorks = styled.div`
        background-image: url(${Fundo});
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100%;
        background-attachment: fixed;
        height: 80vh;
        @media (max-width: 768px){
            background-image: url(${FundoM});
            height: 100vh;
        }
        color:white;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        overflow: hidden;
`

export const DivWorks = styled(Carousel)`
`

export const ImgWorks = styled.img`
    width: 80%;
    height: 70%;
    @media (max-width: 768px){
        width: 98%;
        height: 90%;
    }
`