import React, { useState, useEffect }  from 'react';
import Pagination from '../../components/Pagination';
import { useHistory } from "react-router-dom";

import { 
    Container, DiaryHeader, DiaryWrapper, DiaryBG,
    Public, Diary, Ttitle, Date, ChooseTP 
} from "../../components/Mypages/style_Diaries";

import Text from "../../images/text.png";
import Drawing from "../../images/drawing.png";

export default function Diaries ({diary}) {
    // pagenation state 
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    
    // pagenation useEffect   
    useEffect(() => {
        setLoading(true);
        setPosts(diary);
        setLoading(false);
    }, []);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    //  page이동을 위한 변수!
    const history = useHistory();

    // Details 페이지로 이동 하는 메소드
    // onClick하면 해당 일기의 id값을 추출해서 params로 전달하면서 페이지 이동
    const ToDetails = (id) => {
        history.push(`/details/${id}`) 
    }
    // 없애거나 좋은 이미지 있으면 넣으면 좋을 듯 ex) 비바 로딩
    if (loading) {
        return <h2>Loading...</h2>;
    }

    // 일기 공개 비공개 소스
    // 체크박스 클릭후 버튼 클릭하면 공개 비공개 전환 (true, false)
    // const [ private, setPrivate ] = useState([]);
    
    return (
        <Container>
            <DiaryHeader>
                <img src={Text} width="40px" height="40px" alt="textnote" /> : Text Diary
                <img src={Drawing} width="40px" height="40px" alt="drawingnote" /> : Drawing Diary
            </DiaryHeader>
            {/* 전체 페이지에서 한페이지당 10개만 나오게 설정 */}
            <DiaryBG>
                {currentPosts.map(post => (
                    <DiaryWrapper key={post.id}>
                        <Public type="checkbox"/>
                        <Diary onClick={()=> ToDetails(post.id)}>
                            <Ttitle>{post.title}</Ttitle>
                            {post.picUrl === null ?  <ChooseTP><img src={Text} width="30px" height="30px" alt="textnote" /></ChooseTP> :  <ChooseTP><img src={Drawing} width="30px" height="30px" alt="drawingnote" /></ChooseTP> }
                            {/* 더미 데이터 말고 date 들어올때 날짜추출 메소드를 쓸것인지 slice를 쓸것인지 정해야됨 */}
                            <Date>{post.date.slice(0,10)}</Date>
                        </Diary>
                    </DiaryWrapper>
                ))}
            </DiaryBG>
            {/* pagination 을 불러오고 위에 상태들을 props로 전달 */}
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate}
                currentPage={currentPage}
                color={["#83B799","black"]}
            />
        </Container>

    )
} 