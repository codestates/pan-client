import React, { useEffect, useState } from 'react';
import axios from 'axios';
import routes from '../../routes';
import Header from '../../components/Header';
import ToggleButton from '../ToggleButton';
import { FiHeart } from "react-icons/fi";
import { CommentHeader, CommentMain, CommentMiddle, CommentLeft, CommentRight, ContentBottom, ContentHeader, ContentMain, DetailComment, DetailContent, DetailsMain, DetailsWrapper, CommentEditBtn, CommentDeleteBtn, BottomEditBtn, BottomDeleteBtn, BottomRight, BottomPreBtn, BottomNextBtn, BottomLikeBtn, CommentBottom, CommentInput, CommentSubmitBtn, BottomLeft, BottomWriter, ContentTitle, ContentDate, ContentFeel, ContentWeather, ContentHeaderT, ContentHeaderB, ContentHBLeft, ContentHBRight, DisableComment } from "../../components/Details/DetailsLayout"
// import { getDefaultNormalizer } from '@testing-library/react';

export default function Details ({match}) {
    const [details, setDetails] = useState([]);
    const [loading, setLoading] = useState(false);
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
                    </ContentMain>
                    <ContentBottom>
                        <BottomLeft>
                            <BottomWriter>
                                작성자: {details.username}
                            </BottomWriter>
                            <BottomLikeBtn>
                                <FiHeart />
                            </BottomLikeBtn>
                        </BottomLeft>
                        <BottomRight>
                            <BottomPreBtn>
                                이전일기
                            </BottomPreBtn>
                            <BottomNextBtn>
                                다음일기
                            </BottomNextBtn>
                            <BottomEditBtn>
                                수 정
                            </BottomEditBtn>
                            <BottomDeleteBtn>
                                삭 제
                            </BottomDeleteBtn>
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

