import React, {useState, useContext} from 'react';
import routes from '../routes';
import Header from '../components/Header';
import ToggleButton from './ToggleButton';
import { FiHeart } from "react-icons/fi";
import { CommentHeader, CommentMain, CommentMiddle, CommentLeft, CommentRight, ContentBottom, ContentHeader, ContentMain, DetailComment, DetailContent, DetailsMain, DetailsWrapper, CommentEditBtn, CommentDeleteBtn, BottomEditBtn, BottomDeleteBtn, BottomRight, DisableComment, BottomPreBtn, BottomNextBtn, BottomLikeBtn, CommentBottom, CommentInput, CommentSubmitBtn, BottomLeft, BottomWriter, ContentTitle, ContentDate, ContentFeel, ContentWeather, ContentHeaderT, ContentHeaderB, ContentHBLeft, ContentHBRight } from "../components/Details/DetailsLayout"
import { DiaryContext } from "../store/DiaryStore"
export default function Details () {
  // diaryInfo 안에 해당 diary 관련 데이터 들어 있음
  const diaryInfo = useContext(DiaryContext);
  console.log(diaryInfo.diary);

    return (
        <DetailsWrapper>
            <Header main={routes.main} login={routes.login} />
            <DetailsMain>
                <DetailContent>
                    <ContentHeader>
                        <ContentHeaderT>
                            <ContentHBLeft>
                                제목: <ContentTitle />
                            </ContentHBLeft>
                            <ContentHBRight>
                                날짜: <ContentDate />
                            </ContentHBRight>
                        </ContentHeaderT>
                        <ContentHeaderB>
                            <ContentHBLeft>
                                기분: <ContentFeel />
                            </ContentHBLeft>
                            <ContentHBRight>
                                날씨: <ContentWeather />
                            </ContentHBRight>
                        </ContentHeaderB>
                    </ContentHeader>
                    {/* 일기 본문 내용 */}
                    <ContentMain>
                        <p>무엇인가 찾아나서는 도전은 언제나 초심자의 행운으로 시작되고 반드시 가혹한 시험으로 끝을 맺는다.</p>
                        <p>모두가 자아의 신화를 실현하려는 간절한 소망을 가지고 그 것을 달성하기 위한 끈질긴 집념,</p>
                        <p>그리고 비록 많은 시련과 포기하고 싶은 좌절의 순간이 있었겠지만,</p>
                        <p>오직 하나를 위한 성실한 노력과 연습으로 마지막의 벽을 넘어서야 가혹한 시험을 통과할 수 있다.</p>
                    </ContentMain>
                    <ContentBottom>
                        <BottomLeft>
                            <BottomWriter>
                                작성자: lunaticholic
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
