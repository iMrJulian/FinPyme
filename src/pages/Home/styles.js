import styled from 'styled-components';

export const WrapHome = styled.div` 
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100vh;   

    .outlet{
        width: 100%;
        height: 100vh;
    }

    .nameFinPyme{
        display: flex;
        width: 100%;
        justify-content: center;
        font-size: 25px;
        font-weight: 600;
        margin-right: 5%;
    }
`; 

export const ContainerBottons = styled.div` 
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    cursor: pointer;
`; 