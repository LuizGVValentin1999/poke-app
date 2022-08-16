import styled from "styled-components";

export const CardName = styled.h1`
  text-transform: capitalize;
  font-size: 2rem;
  font-weight: 700;

  width: 170px;
`;


export const Card = styled.div`
  background: #ecf0f1;
  color: #e4c439;
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid;
  text-align: center;
  position: relative;
  overflow: hidden;

  transition: 0.5s ease-in-out all;
  -webkit-transition: 0.5s ease-out;
  -moz-transition: 0.5s ease-out;
  -o-transition: 0.5s ease-out;

  cursor: pointer;

  &:hover {
    color: #fff;
  }

  }
`;

