import React from "react";
import routes from "../../routes";
import { Link, useHistory } from "react-router-dom";
import { Wrapper, HeadCard, HeaderText, CardList, CardWrap, CardImg, CardOverlay, CardContent} from "../../components/MainPages/Style_Top10";

import img01 from "../../images/Cover_img/11.png";
import img02 from "../../images/Cover_img/12.png";
import img03 from "../../images/Cover_img/13.png";
import img04 from "../../images/Cover_img/14.png";
import img05 from "../../images/Cover_img/15.png";
import img06 from "../../images/Cover_img/16.png";
import img07 from "../../images/Cover_img/17.png";


export default function Top10({allDiaries}) {
    const history = useHistory();
    
    // like순으로 정렬 
    const sortDiaries = allDiaries.sort(function(a, b) {
        return a.like > b.like ? -1 : a.like < b.like ? 1 : 0;
    }).slice(0,10);

    const ToDetails = (id) => {
        history.push(`/details/${id}`) 
    }

    const images = [img01,img02,img03,img04,img05,img06,img07];
    const randomNumber = Math.floor(Math.random() * images.length);
    const bgImg =  images[randomNumber];

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
                            <CardImg src={`${bgImg}`} />
                            <Link to={routes.main}>
                                <CardContent>
                                    <h2>{post.title}</h2>
                                    <h2 dangerouslySetInnerHTML={ {__html: post.content} }></h2>
                                    <h3>{post.username}</h3>  
                                    <h3>{post.date}</h3>
                                </CardContent>
                                {/* <CardOverlay /> */}
                            </Link>
                        </CardWrap>
                    )
                })}
            </CardList>
        </Wrapper>
    )
}