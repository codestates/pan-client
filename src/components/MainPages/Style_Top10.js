import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1600px;
    height: 100%;
    width: 90%;
`;

export const HeadCard = styled.header`
    position: relative;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    margin: 1rem 0 10px 0;
    border-radius: 10px;
    padding: 2rem 2rem 2rem 1rem;
    height: 16vh;
    text-shadow: 4px 4px 4px lightgray;
`;

export const HeaderText = styled.div`
    font-size: 40px;
    color: #BB2B2A;
    font-family: 'Cafe24Ssurround';
    font-weight: 900;
    animation: zoom 2s;
    @keyframes zoom {
        from {
        transform: scale(0);
        }
        to {
        transform: scale (1);
        }
    }
    -ms-user-select: none; 
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
`;

export const CardList = styled.section`
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(20, minmax(250px, 1fr));
    padding-top: 2rem;
    padding-left: 2rem;
    overflow: scroll;
    height: 38vh;
    &::-webkit-scrollbar {
        width: 10px;
        height: 26px;
        margin-top: 2rem;
    }
    &::-webkit-scrollbar-thumb {
        background: #006D77;
        border-radius: 20px;
        background-clip: padding-box;
        border: 7px solid transparent;
    }
`;

export const CardWrap = styled.article`
    width: 90%;
    height: 99%;
    box-shadow: #ced4da 0 1px 4px;
    background-color: none;
    position: relative;
    display: flex;
    flex-direction: column;
    transition: all 0.4s;
    border-radius: 20px;
    z-index: 1;
    position: relative;
    &:after{
        width: 100%;
        height: 100%;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        border-radius: 20px;
        background: rgba(50, 50, 50, 0.1);
    }
    &:focus-within ~ .card,
    &:hover ~ .card {
        transform: translateX(200px);
    }
    &:hover {
        transform: translateY(-1rem);
        opacity: 1.0;
        filter: brightness(1.3);
    }
`;

export const CardImg = styled.img`
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
    opacity: 0.7;
    background-size: 100% 100%;
`;

export const CardOverlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #DAEDBD;
    opacity: 0.5;
    left: 0;
    top: 0;
    z-index: 0;
    border: none;
    border-radius: 20px;
    &:hover {
        opacity: 0.2;
    }
`;

export const CardContent = styled.article`
    position: absolute;
    left: 8px;
    bottom: 30px;
    display: flex;
    flex-direction: column;
    font-family: 'Cafe24SsurroundAir';
    padding: 10px;
    filter: brightness(1);
    opacity: 1;
    &:hover {
        filter: brightness(3.5);
    }
    h2 {
        color: black;
        opacity: 1;
        font-size: 2rem;
        font-weight: 800px;
        text-shadow: 2px 2px 0 #E3DFD4;
        margin: 0 0 12px;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        word-break: break-word;
        overflow: hidden;
        line-height: 2.6rem;
    }
    h3 {
        color: black;
        font-size: 1rem;
        font-weight: 700;
        margin: 0 0 10px;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        word-break: break-word;
        overflow: hidden;
        text-shadow: 1px 1px 0 #E3DFD4;
    }
`;