import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from "../../store/UserStore";
import axios from 'axios';
import routes from '../../routes';
import Header from '../../components/Header';
import ToggleButton from '../ToggleButton';
import { FiHeart } from "react-icons/fi";
import { CommentHeader, CommentMain, CommentMiddle, CommentLeft, CommentRight, ContentBottom, 
    ContentHeader, ContentMain, DetailComment, DetailContent, DetailsMain, DetailsWrapper, CommentEditBtn, 
    CommentDeleteBtn, BottomEditBtn, BottomDeleteBtn, BottomRight, BottomPreBtn, BottomNextBtn, BottomLikeBtn, 
    CommentBottom, CommentInput, CommentSubmitBtn, BottomLeft, BottomWriter, ContentTitle, ContentDate, ContentFeel, 
    ContentWeather, ContentHeaderT, ContentHeaderB, ContentHBLeft, ContentHBRight, DisableComment } 
    from "../../components/Details/DetailsLayout"
import { useHistory } from 'react-router-dom';
// import { getDefaultNormalizer } from '@testing-library/react';

export default function Details ({match}) {
    const [details, setDetails] = useState([]);
    const [loading, setLoading] = useState(false);
    const histoy = useHistory();

    const context = useContext(UserContext);
    const {username, accessTokenRequest} = context ;

    // 토큰 유무를 확인해서 로그인 상태라면 에세스 토큰으로 정보를 추출함 => 본인 일기라면 수정,삭제 보이게 해주기 위함
    useEffect(() => {
        if(localStorage.getItem('CC_Token')) {
            accessTokenRequest()
        }
    },[])
    // url params에 맞춰서 일기를 렌더링 한다.
    useEffect(() => {
        try {
            const getDetails = async() => {
                setLoading(true);
                const id = await match.params.id
                const res = await axios.get(`https://api.picanote.me/diaries/${id}`, {
                    headers:{
                        Authorization : `Bearer ${localStorage.getItem('CC_Token')}`,
                        'ContentType' : 'application/json',
                    },
                    withCredentials : true
                },[])
                
                setDetails(res.data.data[0])
                setLoading(false);
            }
            getDetails()
        } catch {
            console.error("err");
        }
    }, [])
    console.log(details)
    // 다이어리 삭제 메소드
    const deleteDiary = async () => {
        try{
            setLoading(true);
            const id = await match.params.id
            await axios.delete(`https://api.picanote.me/diaries/${id}`, {
                headers: {
                    Authorization : `Bearer ${localStorage.getItem('CC_Token')}`,
                    'ContentType' : 'apllication/json',
                },
                withCredentials : true
            })
            .then(setLoading(false),
                  alert('일기장이 삭제되었습니다'))
            .then(()=>{ histoy.push('/mypage')})
        }catch{
            console.error("err");
        }
    };

    // 좋아요 기능 구현
    const handlerHeart = async () => {
        const id = await match.params.id
        await axios({
            method: 'post',
            url: `https://api.picanote.me/diaries/${id}/trending`,
            headers:{
                Authorization : `Bearer ${localStorage.getItem('CC_Token')}`,
                'ContentType' : 'application/json',
                },
            withCredentials: true,
        })
        .then(alert('좋아요 눌렀는지 어떻게 확인하지?'))
    }

    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <DetailsWrapper>
            <Header main={routes.main} login={routes.login} />
            <DetailsMain>
                <DetailContent>
                    <ContentHeader>
                        <ContentHeaderT>
                            <ContentHBLeft>
                                제목: <ContentTitle> {details.title} </ContentTitle>
                            </ContentHBLeft>
                            <ContentHBRight>
                                날짜: <ContentDate> {details.date} </ContentDate >
                            </ContentHBRight>
                        </ContentHeaderT>
                        <ContentHeaderB>
                            <ContentHBLeft>
                                기분:<ContentFeel
                                            style = {{
                                            backgroundImage: `url(${details.feelings})`,
                                            backgroundSize: '100% 100%',
                                        }}
                                    />
                            </ContentHBLeft>
                            <ContentHBRight>
                                날씨:<ContentWeather             
                                            style = {{
                                            backgroundImage: `url(${details.weather})`,
                                            backgroundSize: '100% 100%',
                                        }}
                                    />
                            </ContentHBRight>
                        </ContentHeaderB>
                    </ContentHeader>
                    {/* 일기 본문 내용 */}
                    <ContentMain>
                        <div dangerouslySetInnerHTML={ {__html: details.content} }></div>
                        {/* {details.content} */}
                    </ContentMain>
                    <ContentBottom>
                        <BottomLeft>
                            <BottomWriter>
                                작성자: {details.username}
                            </BottomWriter>
                            <BottomLikeBtn>
                                <FiHeart onClick={handlerHeart}/>
                            </BottomLikeBtn>
                        </BottomLeft>
                        <BottomRight>
                            <BottomPreBtn>
                                이전일기
                            </BottomPreBtn>
                            <BottomNextBtn>
                                다음일기
                            </BottomNextBtn>
                            {/* username 먼저 확인 있다면 일기장username과 username 비교 */}
                            {/* 없다면 수정,삭제 버튼 안보이게 함 */}
                            { username ?
                                details.username === username ? 
                                <>
                                    <BottomEditBtn>
                                        수 정
                                    </BottomEditBtn>
                                    <BottomDeleteBtn onClick={deleteDiary}>
                                        삭 제
                                    </BottomDeleteBtn> 
                                </>   : null : null
                            }
                 
                        </BottomRight>
                    </ContentBottom>
                </DetailContent>
                {/* 댓글부분 */}
                <DetailComment>
                    <CommentHeader>
                        <CommentLeft>
                            BJ CHRIS
                        </CommentLeft>
                        <CommentMiddle>
                            2021-06-05
                        </CommentMiddle>
                        <CommentRight>
                            <CommentEditBtn>
                                수 정
                            </CommentEditBtn>
                            <CommentDeleteBtn>
                                삭 제
                            </CommentDeleteBtn>
                        </CommentRight>
                    </CommentHeader>
                    <CommentMain>
                        초심자의 행운이란건, 어떻게 보면 일정한 시간이 흐른뒤에는 사라지는 슬픈 행운이네요.
                    </CommentMain>
                    <CommentBottom>
                        <CommentInput placeholder="댓글을 입력하세요" type="text" />
                        <CommentSubmitBtn type="submit">입 력</CommentSubmitBtn>
                    </CommentBottom>
                </DetailComment>
                {/* <DisableComment>
                    <p>공개된 일기의 경우에만</p>
                    <p>댓글 작성이 가능합니다</p>
                </DisableComment> */}
            </DetailsMain>
            <ToggleButton />
        </DetailsWrapper>
    )
}