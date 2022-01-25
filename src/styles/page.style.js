import styled from "styled-components"

export default {
  Hr: styled.div`
    content: "";
    display: block;
    width: 100px;
    /* height: 0.2em; */
    height: 3px;
    border-radius: 1px;
    background-color: rgba(0, 0, 0, 0.3);
    margin: 15px auto 30px;
  `,
  Title: styled.h1`
    font-size: 18px;
    /* font-size: 1.25em; */
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
    /* color: rgba(0, 0, 0, 0.7); */
  `,
  padding: "50px 40px 0",
  maxWidth: "600px",
}
