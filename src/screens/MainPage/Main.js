import React, {useState, useEffect} from "react";
import axios from 'axios';
import routes from "../../routes";
import Top10 from './Top10';
import ToggleButton from '../../components/ToggleButton';
import Header from '../../components/Header';
import PublicNote from './PublicNote';
import Pagination from '../../components/Pagination';
import { MainBody, PhraseGroup, Phrase, Div1, Div2, Div3, MainFooter, MainLabel } from "../../components/MainPages/Style_Main";

export default function Main() {
  // 개인, 그룹 규별
    const [cur, setCur] = useState({
      individual : true,
      group : false,
    })
  // search
    const [keywords, SetKeywords] = useState('');
    const [isMain] = useState(true);
    const [searchDiary, setSearchDiary] = useState([]);
  // pagination을 위한 states
   // I = 개인 , G = 그룹 , S = 검색
    const [individual, setIndividual] = useState([]);
    const [group, setGroup] = useState([]);
    const [currentPageI, setCurrentPageI] = useState(1);
    const [currentPageG, setCurrentPageG] = useState(1);
    const [currentPageS, setCurrentPageS] = useState(1);
    const [postsPerPage] = useState(10);

  // (resI:개인, resG:그룹) 렌더링 될 때  각 state에 담아줌
    useEffect(() => {
      const fetchPosts = async () => {
        const resI = await axios.get('https://api.picanote.me/diaries');
        const resG = await axios.get('https://api.picanote.me/group-diaries');
        setIndividual(resI.data.data);
        setGroup(resG.data.data);
      };   
      fetchPosts();
    }, []);
    // searchDiary 나오게하는 useEffect 
    useEffect(() => {},
    [searchDiary])

    // Get current posts
    const indexOfLastPostI = currentPageI * postsPerPage;
    const indexOfLastPostG = currentPageG * postsPerPage;
    const indexOfLastPostS = currentPageG * postsPerPage;
    const indexOfFirstPostI = indexOfLastPostI - postsPerPage;
    const indexOfFirstPostG = indexOfLastPostG - postsPerPage;
    const indexOfFirstPostS = indexOfLastPostG - postsPerPage;
    const currentIndividual = individual.slice(indexOfFirstPostI, indexOfLastPostI);
    const currentSearchDiary = searchDiary.slice(indexOfFirstPostS, indexOfLastPostS);
    const currentGroup = group.slice(indexOfFirstPostG, indexOfLastPostG);
    
    // 개인일기와 교환일기를 합쳐서 like가 1개라도 있으면 top10으로 props 전달
    const allDiaries = individual.concat(group).filter((e)=> {return e.like !== null})

    // Change page
    const paginateI = pageNumber => setCurrentPageI(pageNumber);
    const paginateG = pageNumber => setCurrentPageG(pageNumber);
    const paginateS = pageNumber => setCurrentPageS(pageNumber);

    // search
    const handlerSearch = async () => {
        await axios({
          method: 'get',
          url: `https://api.picanote.me/search?q=${keywords}`,
          withCredentials : true,  
        })
        .then(res => 
          setSearchDiary(res.data.data),
        )
    }
 
    return (
      <>
        <Header isMain={isMain} SetKeywords={SetKeywords} handlerSearch={handlerSearch} main={routes.main} login={routes.login}></Header>
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
            {currentSearchDiary.length >= 1 ? 
            <>
              <PublicNote current={currentSearchDiary}/> 
              <Pagination postsPerPage={postsPerPage} totalPosts={searchDiary.length} paginate={paginateS} currentPage={currentPageS} color={["#343a40","#C57951"]} /> 
            </>
            :
              cur.individual ? 
                <>
                  <PublicNote current={currentIndividual}/> 
                  <Pagination postsPerPage={postsPerPage} totalPosts={individual.length} paginate={paginateI} currentPage={currentPageI} color={["#343a40","#C57951"]} /> 
                </>
                : 
                <>
                  <PublicNote current={currentGroup}/>
                  <Pagination postsPerPage={postsPerPage} totalPosts={group.length} paginate={paginateG} currentPage={currentPageG} color={["#343a40","#C57951"]} />
                </>
            }
          </Div2>
          <MainFooter></MainFooter>
        </MainBody>
        <ToggleButton />
      </>
    )
}