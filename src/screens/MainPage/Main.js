import React, {useState, useEffect} from "react";
import axios from 'axios';
import routes from "../../routes";
import Top10 from '../SubPage/Top10';
import ToggleButton from '../ToggleButton';
import Header from '../../components/Header';
import PublicNote from '../SubPage/PublicNote';
import Pagination from '../../components/Pagination';
import { MainBody, PhraseGroup, Phrase, Div1, Div2, Div3, MainFooter, MainLabel, CautionEx } from "../../components/MainPages/Style_Main";

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
        const resI = await axios.get('https://api.picanote.me/diaries');
        console.log(resI)
        // const resG = await axios.get('https://api.picanote.me//group-diaries');
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
    // 개인일기와 교환일기를 합쳐서 like가 1개라도 있으면 top10으로 props 전달
    const allDiaries = individual.concat(group).filter((e)=> {return e.like !== null})

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
    
    if (loading) {
      return <h2>Loading...</h2>;
    }
    console.log(loading);

    return (
      <>
        <Header main={routes.main} login={routes.login}></Header>
        <MainBody>
          <PhraseGroup>
              <Phrase style={{ animation: "fadein 1s", fontWeight: "bolder"}}>순간의 기억을 정리하고</Phrase>
              <Phrase style={{ animation: "fadein 2s", color: "#CCDEE2", fontWeight: "bolder" }}>영원한 추억으로 기록하세요.</Phrase>
              <Phrase style={{ color: "#75A5A9", fontWeight: "bolder" }}>글과 그림으로 오늘을 표현하다. <span style={{ color: "#3D8DAB" }}>Pic, a note</span></Phrase>
          </PhraseGroup>
          <Div1>
            {/* 개인일기과 그룹일기를 합쳐서 top10에 보내준다. */}
            <Top10 allDiaries={allDiaries} />
          </Div1>
          <Div2>
            <Div3>
              {/* mainlabel을 maping해서 갯수에 맞게 pagenation 적용해야됨 */}
              <MainLabel  choose={cur.individual} onClick={()=>setCur({individual:true, group:false})}>공유된 개인일기</MainLabel>
              <MainLabel  choose={cur.group} onClick={()=>setCur({individual:false, group:true})}>공유된 교환일기</MainLabel>
            </Div3>
            {/* 개인과 그룹을 구별하기 위한 삼항 연산자 */}
            {cur.individual ? 
              <>
                <PublicNote current={currentIndividual}/> 
                <Pagination postsPerPage={postsPerPage} totalPosts={individual.length} paginate={paginate} currentPage={currentPage} color={["#343a40","#C57951"]} />
              </>
              : 
              <>
                { currentGroup ? 
                  <>
                    <CautionEx>
                      현재 공유된 교환일기가 없습니다.
                    </CautionEx>
                  </>
                :
                  <>
                    <PublicNote current={currentGroup}/>
                    <Pagination postsPerPage={postsPerPage} totalPosts={group.length} paginate={paginate} currentPage={currentPage} color={["#343a40","#C57951"]} />
                  </>
                }
              </>
            }
          </Div2>
          <MainFooter></MainFooter>
        </MainBody>
        <ToggleButton />
      </>
    )
}