import React from "react";
import routes from "../../routes";
import { Link, useHistory } from "react-router-dom";
import { ListSection, ListItemBox, ItemImg, ItemContent } from "../../components/MainPages/Style_PublicNote"

export default function PublicNote({current}) {
    //  page이동을 위한 변수들!
    const history = useHistory();
    // Details 페이지로 이동 하는 메소드
    // onClick하면 해당 일기의 id값을 추출해서 params로 전달하면서 페이지 이동
    const ToDetails = (id) => {
        history.push(`/details/${id}`) 
    }
    return (
        <ListSection>
            {/*  main페이지에서 props로 current를 받아서 이것을 반복문으로 돌려줌
            current는 공개된 전체 데이터 
            대신, 개인일기는 개인 일기 / 교환일기면 교환 일기 데이터를 받게 해줌  */}
            {current.map(post => {
            return (
                <ListItemBox key={post.id} onClick={()=> ToDetails(post.id)}>
                    <ItemImg src={post.bookCover} />
                    <Link to={routes.main}>
                        <ItemContent>
                            <h3>{post.title}</h3>
                            <h4>{post.username}</h4>
                            <h4>{post.date}</h4>
                            {/* <p dangerouslySetInnerHTML={ {__html: post.content} }></p> */}
                        </ItemContent>
                        {/* <ItemOverlay /> */}
                    </Link>
                </ListItemBox>
            )})}
        </ListSection>
    )
}

