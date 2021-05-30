import styled from 'styled-components';

export const DetailsWrapper = styled.div`
    /* border: 1px solid black; */
`;

export const DetailsMain = styled.div`
    vertical-align: middle;
    border: 5px solid tomato;
    align-items: center;
    justify-content: center;
    height: 120vh;
    max-width: 1500px;
    width: 100%;
    margin: 0 auto;
    font-family: 'MapoGoldenPier';
`;

export const DetailsContent = styled.div`
    border: 5px solid blue;
    position: relative;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50%;
`;

export const DetailsComment = styled.div`
    border: 5px solid orange;
    position: relative;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50%;
`;

export const ContentsHeader = styled.div`
    border: 5px solid orangered;
    width: 100%;
    height: 20%;
`;

export const ContentsMain = styled.div`
    border: 5px solid olive;
    width: 90%;
    height: 80%;
    padding-top: 15px;
    position: relative;
    left: 10px;
    font-size: 30px;
`;

export const CommentHeader = styled.div`
    /* border: 5px solid skyblue; */
    width: 100%;
    height: 40px;
    display: flex;
`;

export const CommentMain = styled.div`
    /* border: 5px solid silver; */
    width: 100%;
    height: 50px;
`;

export const CommentUser = styled.div`
    /* border: 2px solid gray; */
    display: flex;
    width: 150px;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: #3D8DAB;
    font-size: 25px;
    font-weight: 600;
`;

export const CommentDate = styled.div`
    /* border: 2px solid #274040; */
    width: 200px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: left;
    font-size: 16px;
`;

export const CommentDelete = styled.div`

`;

export const CommentDetails = styled.div`
    /* border: 2px solid gainsboro; */
    display: flex;
    align-items: center;
    width: 70%;
    height: 100%;
    position: relative;
    left: 30px;
    font-size: 20px;
`;