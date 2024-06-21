import styled from "styled-components";

export const Block = styled.div`
  width: 100%;
  min-height: 100dvh;
  .table {
    margin: 20px;
    .btn {
      height: 40px;
      color: #fff;
      border-radius: 50%;
      background-color: #000000;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      &:hover {
        background-color: #12131d !important;
      }
      &:disabled {
        background-color: #52525270;
        color: #fff;
      }
    }
  }
  .title {
    display: flex;
    gap: 10px;
    align-items: center;
    .avatar {
      width: 45px;
      height: 45px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      border-radius: 10px;
      border: 1px solid #d3d3d3;
      img {
        min-width: 45px;
        min-height: 45px;
        object-fit: cover;
      }
    }
  }
  @media screen and (max-width: 600px) {
  }
`;
