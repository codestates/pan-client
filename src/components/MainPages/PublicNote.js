import React from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import routes from "../../routes";

function PublicNote({current}) {
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
              <ItemImg src={"https://source.unsplash.com/user/erondu"} />
              <Link to={routes.main}>
                  <ItemContent>
                      <h3>{post.title}</h3>
                      <h4>{post.writer}</h4>
                      <p>{post.content}</p>
                  </ItemContent>
                  <ItemOverlay />
              </Link>
          </ListItemBox>
            )})}

        </ListSection>
    )
}



export default PublicNote;

const ListSection = styled.section`
    display: grid;
    max-width: 1600px;
    grid-gap: 10px;
    grid-template-columns: repeat(5, minmax(100px, 1fr));
    margin-top: 1rem;
    padding-left: 1rem;
    width: 100%;
    overflow: hidden;
`;
const ListItemBox = styled.div`
    width: 90%;
    height: 200px;
    box-shadow: #ced4da 0 1px 4px;
    background-color: none;
    position: relative;
    display: flex;
    flex-direction: column;
    transition: all 0.4s;
    border-radius: 8px;
    overflow: hidden;
    &:hover {
        -ms-transform: scale(1.1);
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
`;

const ItemImg = styled.img`
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
`;

const ItemOverlay = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #868e96;
    opacity: 0.3;
    border: none;
    border-radius: 8px;
    &:hover {
        opacity: 0;
    }
`;

const ItemContent = styled.article`
    position: absolute;
    left: 15px;
    bottom: 15px;
    display: flex;
    flex-direction: column;
    font-family: 'MapoGoldenPier';
    color: #fff;
    padding: 10px;

    h3 {
        color: #343a40;
        font-size: x-large;
        font-weight: 800;
        margin: 0 0 10px;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        word-break: break-word;
        overflow: hidden;
        text-shadow: 2px 2px 0 #fff;
    }

    h4 {
        color: #343a40;
        font-size: 1rem;
        font-weight: 700;
        margin: 0 0 10px;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        word-break: break-word;
        overflow: hidden;
        text-shadow: 2px 2px 0 #fff;
    }

    p {
        color: #343a40;
        font-size: 1.3rem;
        font-weight: 700;
        margin: 0 0 10px;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        word-break: break-;
        text-shadow: 2px 2px 0 #fff;
        overflow: hidden;
    }
`;