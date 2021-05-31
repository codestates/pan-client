import React, { useState }  from 'react';
import routes from '../routes';
import Header from '../components/Header';
import ToggleButton from './ToggleButton';
import { CommentDate, CommentDetails, CommentHeader, CommentMain, CommentUser, ContentsHeader, ContentsMain, DetailsComment, DetailsContent, DetailsMain, DetailsWrapper } from "../components/auth/DetailsLayout"

export default function Details () {
    
    return (
        <DetailsWrapper>
            <Header main={routes.main} login={routes.login} />
            <DetailsMain>
                <DetailsContent>
                    <ContentsHeader>
                        제목, 날씨, 기분, 날짜 영역
                    </ContentsHeader>
                    <ContentsMain>
                        <p>무엇인가 찾아 나서는 도전은 언제나 초심자의 행운으로 시작되고</p>
                        <p>반드시 가혹한 시험으로 끝을 맺는다.</p>
                        <br />
                        <p>모두가 자아의 신화를 실현하려는 간절한 소망을 가지고</p>
                        <p>그 것을 달성하기 위한 끈질긴 집념, 그리고 비록 많은 시련과</p>
                        <p>포기하고 싶은 좌절의 순간이 있었겠지만</p>
                        <br />
                        <p>오직 하나를 위한 성실한 노력과 연습으로</p>
                        <p>마지막의 벽을 넘어서야 가혹한 시험을 통과할 수 있다.</p>
                        <br />
                        <p>- 연금술사 (파울로 코넬료) -</p>
                    </ContentsMain>
                </DetailsContent>
                <DetailsComment>
                    <CommentHeader>
                        <CommentUser>BJ CHRIS</CommentUser>
                        <CommentDate>2021-05-31</CommentDate>
                    </CommentHeader>
                    <CommentMain>
                        <CommentDetails>
                            슬프지만 감성적인 내용입니다.
                        </CommentDetails>
                    </CommentMain>
                </DetailsComment>
            </DetailsMain>
            <ToggleButton />
        </DetailsWrapper>
    )
}
