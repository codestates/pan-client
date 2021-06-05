import React from 'react';
import styled from 'styled-components';


const Pagination = ({ postsPerPage, totalPosts, paginate, color, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <Nav>
        {pageNumbers.map(number => (
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
  font-size: large;
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
  }
`


export default Pagination;