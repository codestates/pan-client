import React from "react";
import routes from "../../routes";
import { Link, useHistory } from "react-router-dom";
import { Wrapper, HeadCard, HeaderText, CardList, CardWrap, CardImg, CardContent} from "../../components/MainPages/Style_Top10";

export default function Top10({allDiaries}) {
    const history = useHistory();
    
    // like순으로 정렬 
    const sortDiaries = allDiaries.sort(function(a, b) {
        return a.like > b.like ? -1 : a.like < b.like ? 1 : 0;
    }).slice(0,10);

    const ToDetails = (id) => {
        history.push(`/details/${id}`) 
    }


    return (
        <Wrapper>
            <HeadCard>
                <HeaderText>
                    a
                    <br />
                    Popular
                    <br />
                    Diary
                </HeaderText>
            </HeadCard>
            <CardList>
                {sortDiaries.map((post)=>{
                    return (
                        <CardWrap key={post.id} onClick={() => ToDetails(post.id)}>
                            <CardImg src={post.bookCover} />
                            <Link to={routes.main}>
                                <CardContent>
                                    <h2>{post.title}</h2>
                                    <h3>{post.username}</h3>  
                                    <h3>{post.date}</h3>
                                </CardContent>
                            </Link>
                        </CardWrap>
                    )
                })}
            </CardList>
        </Wrapper>
    )
}