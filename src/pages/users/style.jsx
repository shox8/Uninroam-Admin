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
  @media screen and (max-width: 600px) {
  }
`;
