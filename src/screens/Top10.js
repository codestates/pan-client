import React from "react";
import routes from "../routes";
import { Link, useHistory } from "react-router-dom";
import { Wrapper, HeadCard, HeaderText, CardList, CardWrap, CardImg, CardOverlay, CardContent} from "../components/MainPages/Style_Top10";

export default function Top10({allDiaries}) {
    const history = useHistory();
    // like순으로 정렬 현재로선 5개만 나오게 함 (slice)
    const sortDiaries = allDiaries.sort(function(a, b) {
        return a.like > b.like ? -1 : a.like < b.like ? 1 : 0;
    }).slice(0,5);

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
                    <CardImg src={"https://source.unsplash.com/user/erondu"}/>
                    <Link to={routes.main}>
                        <CardContent>
                            <h2>{post.title}</h2>
                            <h2>{post.content}</h2>
                            <h3>{post.weather}</h3>
                            <h3>{post.feelings}</h3>
                        </CardContent>
                        <CardOverlay />
                    </Link>
                </CardWrap>
                    )
                })}
            </CardList>
        </Wrapper>
    )
}