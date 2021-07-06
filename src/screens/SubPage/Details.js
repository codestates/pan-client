import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from "../../store/UserStore";
import axios from 'axios';
import routes from '../../routes';
import Header from '../../components/Header';
import ToggleButton from '../../components/ToggleButton';
import { FiHeart } from "react-icons/fi";
import { CommentHeader, CommentMain, CommentMiddle, CommentLeft, CommentRight, ContentBottom,CommnetBG, DetailBG,
    ContentHeader, ContentMain, DetailComment, DetailContent, DetailsMain, DetailsWrapper, CommentEditBtn, 
    CommentDeleteBtn, BottomEditBtn, BottomDeleteBtn, BottomRight, BottomPreBtn, BottomNextBtn, BottomLikeBtn, PublicBtn, 
    CommentBottom, CommentInput, CommentSubmitBtn, BottomLeft, BottomWriter, ContentTitle, ContentDate, ContentFeel, 
    ContentWeather, ContentHeaderT, ContentHeaderB, ContentHBLeft, ContentHBRight, DisableComment } 
    from "../../components/Details/DetailsLayout"
import { useHistory } from 'react-router-dom';

export default function Details ({ match }) {
    const id = match.params.id;
    
    const [details, setDetails] = useState({
        title : '',
        content: '',
        feelings: '',
        weather: '',
        picUrl: '',
        username: '',
        date: '',
        private: '',
        like: '',
        comments: [],
        isLike: []
    });
    const [comment, setComment] = useState('');
    const histoy = useHistory();
    

    // user contextAPI
    const userContext = useContext(UserContext);
    const {username, accessTokenRequest } = userContext ;
   
    // 토큰 유무를 확인해서 로그인 상태라면 에세스 토큰으로 정보를 추출함 => 본인 일기라면 수정,삭제 보이게 해주기 위함
    // url params에 맞춰서 일기를 렌더링 한다.
    useEffect(() => {
        // 토큰이 있다면
        if(localStorage.getItem('CC_Token')) {
            accessTokenRequest()
            const getDetails = async() => {
                // const id = await match.params.id
                await axios.get(`https://api.picanote.me/diaries/${id}`, {
                    headers:{
                        Authorization : `Bearer ${localStorage.getItem('CC_Token')}`,
                        'ContentType' : 'application/json',
                    },
                    withCredentials : true
                })
                .then(
                    res => 
                    res.data.data[0] === undefined ? 
                    alert('작성되지 않은 일기입니다.')
                : 
                setDetails({      
                    title : res.data.data[0].title,
                    content: res.data.data[0].content,
                    feelings: res.data.data[0].feelings,
                    weather: res.data.data[0].weather,
                    picUrl: res.data.data[0].picUrl,
                    username: res.data.data[0].username,
                    date: res.data.data[0].date,
                    private: res.data.data[0].private,
                    like: res.data.data[0].like,
                    comments : res.data.data[0].Comments,
                    isLike : res.data.data[0].Likes
                }),
                )
            }
            getDetails();
        // 토큰이 없다면
        } else {
            const fetchPosts = async () => {
                const res = await axios.get(`https://api.picanote.me/diaries/${id}`);
                // console.log(res)
                    setDetails({      
                        title : res.data.data[0].title,
                        content: res.data.data[0].content,
                        feelings: res.data.data[0].feelings,
                        weather: res.data.data[0].weather,
                        picUrl: res.data.data[0].picUrl,
                        username: res.data.data[0].username,
                        date: res.data.data[0].date,
                        private: res.data.data[0].private,
                        like: res.data.data[0].like,
                        comments : res.data.data[0].Comments,
                        isLike : res.data.data[0].Likes
                    })
              };   
          
              fetchPosts();
        }
    },[]);
    // 다이어리 삭제 메소드
    const deleteDiary = async () => {
            // const id = await match.params.id
            await axios.delete(`https://api.picanote.me/diaries/${id}`, {
                headers: {
                    Authorization : `Bearer ${localStorage.getItem('CC_Token')}`,
                    'ContentType' : 'apllication/json',
                },
                withCredentials : true
            })
            .then(()=>alert('일기장이 삭제되었습니다'))
            .then(()=>{ histoy.push('/mypage')})
    };

    // 좋아요 기능 구현
    const handlerHeart = async () => {
        // const id = await match.params.id
        await axios({
            method: 'post',
            url: `https://api.picanote.me/diaries/${id}/trending`,
            headers:{
                Authorization : `Bearer ${localStorage.getItem('CC_Token')}`,
                'ContentType' : 'application/json',
                },
            withCredentials: true,
        })
        setTimeout(()=> {
           (window.location.reload(true));
        },1000)
    }
    
    // 이전 일기로 이동
    const PreviousDiary = () => {
        const prvious = parseInt(match.params.id) - 1;
        histoy.push(`/details/${prvious}`);
        window.location.reload(true);
    }

    // 다음 일기로 이동
    const afterDiary = () => {
        const next = parseInt(match.params.id) + 1;
        histoy.push(`/details/${next}`);
        window.location.reload(true);
    }

    // 수정 하기
    const FixedDiary = () => {
        localStorage.setItem('temp', JSON.stringify(details));
        localStorage.setItem('id', JSON.stringify(id));
        !details.picUrl ? histoy.push('/writing') : histoy.push('/drawing')
    }


    // 댓글 포스트 
    const commentPost = async () => {
        await axios({
            method: 'post',
            url: `https://api.picanote.me/diaries/${id}/comments`,
            headers:{
                Authorization : `Bearer ${localStorage.getItem('CC_Token')}`,
                'ContentType' : 'application/json',
                },
            data: {
                text: comment
            },
            withCredentials: true,
        })
        .then(alert('댓글이 등록되었습니다.'),)
        .then(() => {
            window.location.reload(true);
            }
        )
    }

    // 댓글 삭제
    const deleteCommnet = async (id) => {
        await axios({
            method: 'delete',
            url: `https://api.picanote.me/comments/${id}`,
            headers:{
                Authorization : `Bearer ${localStorage.getItem('CC_Token')}`,
                'ContentType' : 'application/json',
                },
            data: {
                text: comment
            },
            withCredentials: true,
        })
        .then(() => 
            alert('댓글이 삭제 되었습니다.'),
            setTimeout(()=> {
                window.location.reload(true)
            },2000)
            )
    }
    

    // 일기 공개 비공개 소스
    // 체크박스 클릭후 버튼 클릭하면 공개 비공개 전환 (true, false)
    const handleSubmit = async () => {
        await axios({
            method: 'post',
            url: `https://api.picanote.me/diaries/${id}/private`,
            headers:{
                Authorization : `Bearer ${localStorage.getItem('CC_Token')}`,
                'ContentType' : 'application/json',
            },
            withCredentials : true,    
        })
        .then(
            // setTiomeout으로 공개 비공개 전환을 가능하게 해주었다.
            setTimeout(()=> { window.location.reload(true)}, 100)
        )
};

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
                        { details.picUrl ? <img src={details.picUrl}/> : null }                       
                        <div dangerouslySetInnerHTML={ {__html: details.content} }></div>
                        {/* {details.content} */}
                    </ContentMain>
                    <ContentBottom>
                        <BottomLeft>
                            <BottomWriter>
                                작성자: {details.username}
                            </BottomWriter>
                            <BottomLikeBtn>   
                             <>
                                 <FiHeart onClick={handlerHeart}/>
                                 <div>&nbsp;</div>        
                                 {details.like}
                             </>
                            </BottomLikeBtn>
                        </BottomLeft>
                        <BottomRight>
                            <BottomPreBtn onClick={PreviousDiary}>
                                이전일기
                            </BottomPreBtn>
                            <BottomNextBtn onClick={afterDiary}>
                                다음일기
                            </BottomNextBtn>
                            {/* username 먼저 확인 있다면 일기장username과 username 비교 */}
                            {/* 없다면 수정,삭제 버튼 안보이게 함 */}
                            { username ?
                                details.username === username ? 
                                <>
                                {details.private ?  
                                <PublicBtn onClick={handleSubmit}> 공 개 </PublicBtn> 
                                : <PublicBtn onClick={handleSubmit}> 비 공 개 </PublicBtn>
                                }
                                    <BottomEditBtn onClick={FixedDiary}>
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
                {/* private true면 비공개 false면 공개 */}
                {!details.private  
                ? 
                <DetailComment>
                <DetailBG>
                {details.comments.map((comment) => {
                    return(
                        <CommnetBG key={comment.id}>
                            <CommentHeader>
                                <CommentLeft>
                                    {comment.User.username}
                                </CommentLeft>
                                <CommentMiddle>
                                    {comment.createdAt.slice(0,10)}
                                </CommentMiddle>
                                <CommentRight>
                                    <CommentDeleteBtn onClick={() => deleteCommnet(comment.id)}>
                                        삭 제
                                    </CommentDeleteBtn>
                                    {/* <CommentEditBtn>
                                        수 정
                                    </CommentEditBtn> */}
                                </CommentRight>
                            </CommentHeader>
                            <CommentMain>
                                {comment.text}
                            </CommentMain>
                        </CommnetBG>
                    )
                })}
                </DetailBG>
                <CommentBottom>
                        <CommentInput placeholder="댓글을 입력하세요" type="text" onChange={(e) => {setComment(e.target.value)}}/>
                        <CommentSubmitBtn type="submit" onClick={commentPost}>입 력</CommentSubmitBtn>
                </CommentBottom>
             
                </DetailComment>
                :
                <DisableComment>
                    <p>공개된 일기의 경우에만</p>
                    <p>댓글 작성이 가능합니다</p>
                </DisableComment>
                }
            </DetailsMain>
            <ToggleButton />
        </DetailsWrapper>
    )
}