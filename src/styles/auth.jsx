import styled from "styled-components";

export const Block = styled.div`
  width: 100%;
  min-height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  .form {
    width: 380px;
    border-radius: 20px;
    padding: 20px;
    border: 1px solid #fff;
    background-color: #ffffffae;
    backdrop-filter: blur(30px);
    .input {
      height: 40px;
      display: flex;
      align-items: center;
      gap: 5px;
    }
    button {
      width: 100%;
      height: 45px;
      font-size: 20px;
      margin-top: 10px;
      background-color: #000000;
      &:hover {
        background-color: #303030 !important;
      }
      &:disabled {
        color: #fff;
      }
    }
  }
  @media screen and (max-width: 600px) {
    padding: 20px;
  }
`;
