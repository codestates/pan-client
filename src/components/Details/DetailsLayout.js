import styled from 'styled-components';

export const DetailsWrapper = styled.div`
    /* border: 1px solid black; */
`;

export const DetailsMain = styled.div`
    /* vertical-align: middle; */
    /* border: 3px solid tomato; */
    display: flex;
    flex-direction: row;
    height: 88vh;
    max-width: 1500px;
    width: 100%;
    margin: 0 auto;
`;

export const DetailContent = styled.div`
    /* border: 4px solid rgba(40, 42, 54, 0.8);
    border-radius: 20px 0 0 20px; */
    width: 65%;
    height: 100%;
    margin: 0 auto;
    position: relative;
    color: white;
    z-index: 1;
    ::after{
        width: 100%;
        height: 100%;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        border-radius: 20px 0 0 20px;
        background: linear-gradient(
            to right,
            rgba(20, 20, 20, 0.5) 10%,
            rgba(20, 20, 20, 0.5) 100%
        ), url("https://source.unsplash.com/user/erondu");
        background-size: cover;
    }
`;

export const ContentHeader = styled.div`
    /* border: 3px solid #E2CD6D; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 15%;
    padding: 10px;
    font-size: 20px;
    font-family: 'MapoGoldenPier';
`;

export const ContentHeaderT = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContentHTLeft = styled.div`
    width: 50%;
    height: 50px;
    display: flex;
    align-items: center;
`;

export const ContentTitle = styled.div`
    margin-left: 20px;
    border: 3px solid #E2CD6D;
    width: 80%;
    height: 30px;
`;

export const ContentHTRight = styled.div`
    width: 50%;
    height: 50px;
    display: flex;
    align-items: center;
`;

export const ContentDate = styled.div`
    margin-left: 20px;
    border: 3px solid #E2CD6D;
    width: 80%;
    height: 30px;
`;

export const ContentHeaderB = styled.div`
    /* border: 3px solid #E2CD6D; */
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const ContentHBLeft = styled.div`
    width: 50%;
    height: 50px;
    display: flex;
    align-items: center;
`;

export const ContentFeel = styled.div`
    margin-left: 20px;
    border: 3px solid #E2CD6D;
    width: 80%;
    height: 30px;
`;

export const ContentHBRight = styled.div`
    width: 50%;
    height: 50px;
    display: flex;
    align-items: center;
`;

export const ContentWeather = styled.div`
    margin-left: 20px;

    border: 3px solid #E2CD6D;
    width: 80%;
    height: 30px;
`;

export const ContentMain = styled.div`
    /* border: 3px solid #83B799; */
    width: 100%;
    height: 80%;
    padding-top: 20px;
    padding-left: 20px;
    font-family: 'MapoGoldenPier';
    font-size: 20px;
    line-height: 40px;
`;

export const ContentBottom = styled.div`
    /* border: 3px solid #C08A90; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 5%;
    padding: 10px;
    font-family: 'GmarketSansBold';
`;

export const BottomLeft = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BottomWriter = styled.div`
    margin-left: 10px;
    font-family: 'GmarketSansMedium';
`;

export const BottomLikeBtn = styled.div`
    margin-left: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
`;

export const BottomRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BottomPreBtn = styled.div`
    margin-left: 20px;
    width: 70px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 5px solid #75A5A9;
    background-color: #75A5A9;
    font-family: 'GmarketSansMedium';
    font-size: 15px;
    color: #FFF9E9;
`;

export const BottomNextBtn = styled.div`
    margin-left: 20px;
    width: 70px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 5px solid #75A5A9;
    background-color: #75A5A9;
    font-family: 'GmarketSansMedium';
    font-size: 15px;
    color: #FFF9E9;
`;

export const BottomEditBtn = styled.div`
    margin-left: 20px;
    width: 60px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 5px solid #75A5A9;
    background-color: #75A5A9;
    font-family: 'GmarketSansMedium';
    font-size: 15px;
    color: #FFF9E9;
`;

export const BottomDeleteBtn = styled.div`
    margin-left: 20px;
    width: 60px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 5px solid #75A5A9;
    background-color: #75A5A9;
    font-family: 'GmarketSansMedium';
    font-size: 15px;
    color: #FFF9E9;
`;

export const DetailComment = styled.div`
    /* border: 3px solid violet; */
    width: 35%;
    height: 100%;
    margin: 0 auto;
    /* background-color: #FFF9E9; */
    border: 4px solid #3D8DAB;
    border-left: none;
    border-radius: 0 20px 20px 0;
    position: relative;
`;

export const CommentHeader = styled.div`
    /* border: 3px solid #C57951; */
    display: flex;
    align-items: center;
    width: 100%;
    height: 30px;
    margin-top: 10px;
    padding-left: 10px;
    
`;

export const CommentLeft = styled.div`
    font-family: 'GmarketSansBold';
    font-size: 15px;
`;

export const CommentMiddle = styled.div`
    margin-left: 10px;
    font-family: 'GmarketSansMedium';
    font-size: 12px;
`;

export const CommentRight = styled.div`
    display: flex;
    margin-left: 190px;
    font-family: 'GmarketSansLight';
    font-size: 12px;
`;

export const CommentEditBtn = styled.div`
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 5px solid #75A5A9;
    background-color: #75A5A9;
    margin-left: 20px;
    font-family: 'GmarketSansMedium';
    font-size: 15px;
    color: #FFF9E9;
`;

export const CommentDeleteBtn = styled.div`
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 5px solid #75A5A9;
    background-color: #75A5A9;
    margin-left: 20px;
    font-family: 'GmarketSansMedium';
    font-size: 15px;
    color: #FFF9E9;
`;

export const CommentMain = styled.div`
    /* border: 3px solid #9196E1; */
    width: 100%;
    height: 10%;
    padding: 10px;
    font-family: 'GmarketSansMedium';
    font-size: 18px;
`;

export const CommentBottom = styled.div`
    /* border: 3px solid tomato; */
    width: 100%;
    height: 5.5%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 5px;
`;

export const CommentInput = styled.input`
    border: 3px solid black;
    width: 80%;
    margin-left: 10px;
    padding: 0.5em;
    position: absolute;
    bottom: 0px;
    left: 0px;
    background-color: white;
`;

export const CommentSubmitBtn = styled.div`
    width: 50px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 5px solid #75A5A9;
    border-radius: 5px;
    background-color: #75A5A9;
    margin-right: 10px;
    font-family: 'GmarketSansMedium';
    font-size: 15px;
    color: #FFF9E9;
    position: absolute;
    bottom: 0px;
    right: 0px;
`;

export const DisableComment = styled.div`
    background-color: rgba(40, 42, 54, 0.8);
    border-radius: 0 20px 20px 0;
    width: 35%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'MapoGoldenPier';
    font-size: 35px;
    color: white;
    line-height: 60px;
`;