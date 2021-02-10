import styled from 'styled-components/macro';
import {css} from "styled-components";

const NiceButton = styled.button`
       background: transparent;
        border-radius: 3px;
        border: 7px solid palevioletred;
        color: palevioletred;
        margin: 0 3em;
        padding: 0.25em 1em;
 
 ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `} 


`;

export default function Button ({onClick, buttonheadline}){
 return <NiceButton onClick={onClick} primary>{buttonheadline}</NiceButton>

}