import React from 'react';
import styled from 'styled-components';


const Pagination = ({ postsPerPage, totalPosts, paginate, color, currentPage }) => {
// 전체 페이지를 담기 위한 빈 배열
  const pageNumbers = [];
// 페이지 수를 구해서 pageNubers에 담아준다.
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <Nav>
        {pageNumbers.map(number => (
          // 현재페이지를 찾아서 그 페이지만 color 색을 변경하기 위한 삼항 연산자 (color는 props로 전달받았다)
          // main 와 mypage/Diaries 파일을 보면 props 확인 가능
          currentPage === number ?
          <Item color={color[1]} key={number} onClick={() => paginate(number)}>
              {number}
          </Item> 
          :
          <Item color={color[0]} key={number} onClick={() => paginate(number)}>
              {number}
          </Item> 
        ))}
      </Nav>
    </>
  );
};


const Nav = styled.ul`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  /* border: 1px solid red; */
`
const Item = styled.li`
  display: flex;
  font-size: x-large;
  /* color: #83B799; */
  color: ${props => props.color || "black"};
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover{
    background-color: gray;
    transform: translateY(-0.5rem);
    border-radius: 12px;
  }
`


export default Pagination;