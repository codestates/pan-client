import React, { useState, useEffect }  from 'react';
import styled from 'styled-components';
import Pagination from '../Pagination';
import axios from 'axios';

export default function Diaries () {
  // pagenation state 
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

  // pagenation useEffect   
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://localhost:80/diaries');
      console.log(res)
      setPosts(res.data.data);
      setLoading(false);
    };   
    fetchPosts();
  }, []);

  // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
    
  // 없애거나 좋은 이미지 있으면 넣으면 좋을 듯 ex) 비바 로딩
    if (loading) {
      return <h2>Loading...</h2>;
    }

    return (
      <Container>
        <DiaryHeader>
          <button>연도</button>
          <button>월</button>
        </DiaryHeader>
        {/* 전체 페이지에서 한페이지당 10개만 나오게 설정 */}
        {currentPosts.map(post => (
          <DiaryWrapper key={post.createdAt}>
            <Public type="checkbox"/>
            <Diary>
              <Ttitle>{post.title}</Ttitle>
              {post.picUrl === null ?  <ChooseTP>T</ChooseTP> :  <ChooseTP>P</ChooseTP> }
              {/* 더미 데이터 말고 date 들어올때 날짜추출 메소드를 쓸것인지 slice를 쓸것인지 정해야됨 */}
              <Date>{post.date.slice(0,10)}</Date>
            </Diary>
          </DiaryWrapper>
        ))}
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

const Container = styled.div`
  width: 100%;
  height: 120%;
  /* border:1px solid black; */
`

const DiaryHeader = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 70px;
  button {
    background-color: #83B799;
    background-repeat:no-repeat;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    overflow: hidden;
    outline:none;
    color: white;
    width: 15%;
    margin: 0.5rem 1rem;
    font-size: x-large;
    :hover{
      background-color: gray;
    }
  }
`

const DiaryWrapper = styled.div`
  width: 100%;
  height: 5.5%;
  margin-top: 13px;
  font-family: 'MapoGoldenPier';
  /* border: 1px solid black; */
`

const Public = styled.input` 
  display: inline-block;
  width:3.5%;
  height: 85%;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 50%;
  cursor: pointer;
  background-color: white;
  :checked {
    background-color: #3D8DAB;
    border: none;
  }
`

const Diary = styled.div`
  display: flex;
  align-items: center;
  float: right;
  width: 96%;
  height: 100%;
  cursor: pointer; 
  font-size: xx-large;
  background-image: url("https://source.unsplash.com/random/1920x1080");
  border-radius: 10px;
  :hover{
    transform: translateY(-0.2rem);
  }
`

const Ttitle = styled.span`
  width: 40%;
  height: 80%;
  display: flex;
  margin: 0 1rem 0 1rem;
  padding-left: 10px;
  border-radius: 10px;
  background-color: #CCDEE2;
  font-size: 17px;
  font-weight: bold;
  /* justify-content: center; */
  align-items: center;
`

const Date = styled.span`
  position: relative;
  left: 34%;
  width: 17%;
  height: 80%;
  display: flex;
  background-color: #CCDEE2;
  border-radius: 10px;
  font-size: 20px;
  justify-content: center;
  align-items: center;
`

const ChooseTP = styled.span`
  display: flex;
  width: 3%;
  height: 70%;
  background-color: #D85941;
  border-radius: 50%;
  font-size: x-large;
  justify-content: center;
  align-items: center;
`