import styled from 'styled-components';

export const DiaryWritingWrapper = styled.div`
    /* border: 5px solid tomato; */
    height: 87vh;
    max-width: 1500px;
    width: 100%;
    margin: 0 auto;
`;
export const DiaryWritingMain = styled.div`
    /* display: flex; */
    justify-content: center;
    /* border:1px solid blue; */
    width: 100%;
    height: 100%;
    margin-top: 20px;
`;

export const WriteHeader = styled.div`
    display: flex;
    align-items: center;
    /* border: 1px solid #3D8DAB; */
    width: 100%;
    height: 10%;
    padding: 10px;
    font-family: 'Cafe24SsurroundAir';
    font-weight: bold;
    margin-bottom: 20px;
`;
export const WriteHeaderLeft = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 50%;
    height: 100%;
    /* border: 2px solid black; */
    font-size: 20px;
`;
export const WriteTitle = styled.div`
    display: flex;
    align-items: center;
    width: 80%;
    height: 20%;
    padding-left: 10px;
    margin-bottom: 40px;
    input {
        width: 400px;
        height: 40px;
        border: 1px solid #3D8DAB;
        margin-left: 10px;
        border-radius: 12px;
        padding-left: 10px;
    }
`;
export const WriteWeather = styled.div`
    display: flex;
    align-items: center;
    width: 80%;
    height: 20%;
    padding-left: 10px;
    input {
        width: 400px;
        height: 40px;
        border: 1px solid #3D8DAB;
        margin-left: 10px;
        border-radius: 12px;
        padding-left: 10px;
    }
    img {
        margin-left: 20px;
    }
`;
export const WriteHeaderRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 50%;
    height: 100%;
    /* border: 2px solid black; */
    font-size: 20px;
`;
export const WriteFeel = styled.div`
    display: flex;
    align-items: center;
    width: 80%;
    height: 20%;
    padding-left: 10px;
    margin-bottom: 40px;
    input {
        width: 40px;
        height: 40px;
        margin-left: 20px;
    }
    img {
        margin-left: 20px;
    }
`;
export const WriteDate = styled.div`
    display: flex;
    align-items: center;
    width: 80%;
    height: 20%;
    padding-left: 10px;
    input {
        width: 400px;
        height: 40px;
        border: 1px solid #3D8DAB;
        margin-left: 10px;
        border-radius: 12px;
        padding-left: 10px;
    }
`;

export const WriteContents = styled.div`
    align-items: center;
    justify-content: center;
    padding: 10px;
`;

export const Wirte = styled.section`
    border:1px solid pink;
    width: 50%;
    height: 100%;
`;

export const Preview = styled.section`
    border:1px solid pink;
    width: 50%;
    height: 100%;
`;

export const Footer = styled.div`
    width: 100%;
    height: 6%;
    display: flex;      
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 20px;
    /* border: 2px solid red; */
    padding-right: 20px;
`;

export const WriteButton = styled.button`
    width: 90px;
    height: 40px;
    margin-left: 15px;
    border: 1px solid #242D40;
    border-radius: 10px;
    outline: 0;
    background-color: white;
    font-size: large;
    color: black;
    cursor: pointer;
    font-family: 'Cafe24SsurroundAir';
    font-weight: bolder;
    :hover {
        transform: scale(1.05);
        border: 2px solid #242D40;
    }
`;

export const CancelButton = styled.button`
    width: 90px;
    height: 40px;
    margin-left: 15px;
    border: 1px solid #D9A9A9;
    border-radius: 10px;
    outline: 0;
    background-color: white;
    font-size: large;
    color: black;
    cursor: pointer;
    font-family: 'Cafe24SsurroundAir';
    font-weight: bolder;
    opacity: 0.7;
    :hover {
        transform: scale(1.05);
        border: 2px solid #D9A9A9;
        opacity: 0.7;
    }
`;