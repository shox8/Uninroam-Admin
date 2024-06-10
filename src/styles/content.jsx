import styled from "styled-components";

export const FormStyle = styled.div`
  .input {
    height: 40px;
  }
  .number {
    input {
      height: 40px;
    }
  }
  .btn {
    width: 100%;
    height: 45px;
    margin-top: 20px;
    font-size: 20px;
  }
  .item {
    display: flex;
    justify-content: space-between;
  }
  button {
    height: 40px;
    color: #fff;
    background-color: #000000;
    &:hover {
      background-color: #303030 !important;
    }
    &:disabled {
      color: #fff;
    }
  }
`;

export const Card = styled.div`
  border-radius: 20px;
  padding: 20px;
  border: 1px solid #fff;
  background-color: #eee5dc;
  backdrop-filter: blur(30px);
  margin-bottom: 20px;
  .image {
    border-radius: 10px;
    overflow: hidden;
    img {
      border-radius: 10px;
    }
  }
  .line {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Btn = styled.div`
  button {
    width: 100%;
    height: 40px;
    color: #fff;
    background-color: #000000;
    &:enabled:hover {
      background-color: #303030 !important;
    }
    &:disabled {
      color: #000;
    }
  }
`;
