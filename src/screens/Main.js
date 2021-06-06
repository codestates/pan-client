import Header from '../components/Header'
import routes from "../routes";
import styled from 'styled-components';
import ToggleButton from './ToggleButton';
import Top10 from '../components/MainPages/Top10';
import PublicNote from '../components/MainPages/PublicNote';
import Fade from 'react-reveal/Fade';
import React, {useState, useEffect} from "react";
import Pagination from '../components/Pagination';
import axios from 'axios';

export default function Main() {
  // 개인, 그룹 규별
    const [cur, setCur] = useState({
      individual : true,
      group : false,
    })

  // pagination을 위한 states
    const [individual, setIndividual] = useState([]);
    const [group, setGroup] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

  // (resI:개인, resG:그룹) 렌더링 될 때  각 state에 담아줌
    useEffect(() => {
      const fetchPosts = async () => {
        setLoading(true);
        const resI = await axios.get('https://localhost:80/diaries');
        // console.log(resI)
        // const resG = await axios.get('https://localhost:80//group-diaries');
        setIndividual(resI.data.data);
        // setGroup(resG.data.data);
        setLoading(false);
      };   
  
      fetchPosts();
    }, []);

       // Get current posts
       const indexOfLastPost = currentPage * postsPerPage;
       const indexOfFirstPost = indexOfLastPost - postsPerPage;
       const currentIndividual = individual.slice(indexOfFirstPost, indexOfLastPost);
       const currentGroup = group.slice(indexOfFirstPost, indexOfLastPost);
   
       // Change page
       const paginate = pageNumber => setCurrentPage(pageNumber);
       
       if (loading) {
         return <h2>Loading...</h2>;
       }


    return (
      <>
        <Header main={routes.main} login={routes.login}></Header>
        <MainBody>
          <PhraseGroup>
            <Fade top>
              <Phrase>순간의 기억을 정리하고</Phrase>
            </Fade>
            <Fade top delay={700}>
              <Phrase style={{ color: "#CCDEE2" }}>영원한 추억으로 기록하세요.</Phrase>
            </Fade>
            <Fade top delay={1400}>
              <Phrase style={{ color: "#75A5A9" }}>글과 그림으로 오늘을 표현하다. <span style={{ color: "#3D8DAB" }}>Pic, a note</span></Phrase>
            </Fade>
          </PhraseGroup>
          <Div1>
            <Top10 />
          </Div1>
          <Div2>
            <Div3>
              {/* mainlabel을 maping해서 갯수에 맞게 pagenation 적용해야됨 */}
              <MainLabel  choose={cur.individual} onClick={()=>setCur({individual:true, group:false})}>공유된 개인일기</MainLabel>
              <MainLabel  choose={cur.group} onClick={()=>setCur({individual:false, group:true})}>공유된 교환일기</MainLabel>
            </Div3>
            {/* 개인과 그룹을 구별하기 위한 삼한 연산자 */}
            {cur.individual ? 
              <>
                <PublicNote current={currentIndividual}/> 
                <Pagination
                  postsPerPage={postsPerPage}
                  totalPosts={individual.length}
                  paginate={paginate}
                  currentPage={currentPage}
                  color={["#343a40","#C57951"]}
                />
              </>
              : 
              <>
                <PublicNote current={currentGroup}/>
                <Pagination
                  postsPerPage={postsPerPage}
                  totalPosts={group.length}
                  paginate={paginate}
                  currentPage={currentPage}
                  color={["#343a40","#C57951"]}
                />
              </>
              }
          </Div2>
          <MainFooter></MainFooter>
        </MainBody>
        <ToggleButton />
      </>
    )
}

const MainBody = styled.div`
  /* border: 2px solid black; */
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 1600px;
  width: 100%;
  height: 100%;
`

const PhraseGroup = styled.div`
  position: relative;
  width: 100%;
  margin: 40px 0;
  /* border : 1px solid black; */
  max-width: 1600px;
`;

const Phrase = styled.div`
  display: block;
  padding-left: 2rem;
  margin-bottom: 15px;
  font-size: 2rem;
  /* font-family: "Noto Serif KR", serif; */
  font-family: 'MapoGoldenPier';
  font-weight: bolder;
  color: #E3DFD4;
`;

const Div1 = styled.div`
  /* border: 1px solid red; */
  height: 40vh;
  margin-top: 40px;
`;

const Div2 = styled.div`
  height: 60vh;
  margin: 40px 0;
  /* overflow: hidden; */
`;

const Div3 = styled.div`
  display: flex;
`;

const MainFooter = styled.footer`
  width: 100%;
  height: 10vh;
`



const MainLabel = styled.h3`
  font-size: 30px;
  font-family: 'MapoGoldenPier';
  font-weight: bolder;
  letter-spacing: -4px;
  word-spacing: 5px;
  margin: 0 2rem 1.8rem;
  padding-bottom: 8px;
  width: fit-content;
  border-bottom: ${props => props.choose ? "3px solid black" : "none" };
  cursor: pointer;
  opacity: ${props => props.choose ? "1.0" : "0.5"};
`;