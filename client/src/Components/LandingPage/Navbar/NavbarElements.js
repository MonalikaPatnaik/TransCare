import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom'
//import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
display: flex;
justify-content: center;
align-items: center;
width: 100%;
top: 0px;
position: sticky; 
height: 80px;
top: 0;
z-index: 19;

overflow-y: hidden;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 768px){
    transition: 0.8s all ease;
    overflow: visible;
    padding-top: 20px;
    padding-left: 10px;
  }
  @media screen and (max-width: 480px){
    // width: auto;
    height: auto;
  }
`

export const NavbarContainer = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;
row-gap: 32px;

width: auto;
height: auto;

flex: none;
order: 1;
flex-grow: 0;
@media screen and (max-width: 480px){
  width: auto;
  height: auto;
}
`

export const NavLogo = styled.div`
  height: auto;
  width: auto;
  color: #fff;
  justify-self: flex-start;  
  font-size: 2rem;
  display: flex;
  margin-bottom: 0px;
  flex-direction:column; 
  margin-left: 6px;
  font-weight: bold;  
  text-decoration: none;  
`
export const MobileIcon = styled.div`
  display: none;
  align-items: center;
  margin-bottom: 60px;
  @media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    ${'' /* width: auto; */}
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
    padding-top: 10px;
  }
`
export const NavMenu = styled.ul`
display: flex;
flex-direction: row;
align-items: center;
padding: 16px 50px 0px 90px;
gap: 21px;
width: auto;
height: 45px;


/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;

  @media screen and  (max-width: 768px){
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
    width: 100%;
    height: 41vh; 
    position: absolute;
    top: ${({ isOpen }) => (isOpen ? '80px' : '-41vh')};
    left: 0;
    transition: 0.3s ease-in-out;
    background-color: #2B394A;

  }

`
export const SubLogo = styled.span`
font-size: 0.7rem; /* Adjust the font size as per your preference */
color: #fff;
@media screen and  (max-width: 468px){
  font-size: 8px;
}

// margin-top: 0px;
  // width: auto;
  // height: 14px;
  // display: flex;
  // justify-content: flex-start;
  //  margin-top: 0px; 
  // font-weight: 100;
  // font-size: 10px;
  // color: #FFF;
  // text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);

  // flex-grow: 0;
`;

export const Navitem = styled.li`
 
box-sizing: border-box;
display: flex;
justify-content: center;
flex-direction: row;
align-items: center;
${'' /* justify-content: center; */}
padding: 0px 20px;
gap: 10px;
border:0.5px solid #FAE4CD;
width:120px;
height: 34px;
border-radius: 22px;
color: #fff;
/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
&:hover {
  background: #FDA5A4;
  color: #000; 
}

&.custom {
  padding-left: 10px; 
  padding-right: 10px; 
}
`

export const NavImg = styled.div`
width: 400px;
height: 200x;
display: flex;
align-items: flex-start;
flex-direction: row;
padding-left: 40px;
margin-right: auto; /* Pushes the container to the left */
${'' /* margin-bottom: 20px; */}
flex: none;
order: 0;
flex-grow: 0;
`;


export const NavLinks = styled(LinkR)`

  width: auto;
  height: 36px;
  padding: 8px;
  padding-left: 10px;
  padding-right: 10px;
  text-decoration: none;
  font-style: normal;
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 22px;
  color: #fff;
  ${'' /* flex: none; */}
  align-items: center;
  justify-content: center;
  order: 0;
  flex-grow: 0;

  &.active {
    border-bottom: 3px solid #01bf71;
  }

  &:hover {
    color: #000;
  }
`;