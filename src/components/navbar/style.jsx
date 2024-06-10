import styled from "styled-components";

export const Style = styled.div`
  height: 80px;
  padding: 15px;
  background-color: #ffffffae;
  backdrop-filter: blur(30px);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ffffff;
  position: sticky;
  top: 0;
  overflow: hidden;
  transition: 1s;
  z-index: 10;
  .brand {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
      text-decoration: none;
      color: #000;
      img {
        width: 50px;
        border-radius: 10px;
      }
      h2 {
        font-weight: 600;
      }
    }
  }
  .menu-btn {
    display: none;
  }
  button {
    height: 45px;
    color: #fff;
    border-radius: 45px;
    background-color: #000000;
    display: flex;
    align-items: center;
    &:hover {
      background-color: #12131d !important;
    }
    &:disabled {
      color: #fff;
    }
  }
  .line {
    display: flex;
    align-items: center;
    gap: 20px;
    a {
      text-decoration: none;
      color: #000000;
      font-weight: 800;
    }
    div {
      display: flex;
      gap: 20px;
    }
  }
  @media screen and (max-width: 600px) {
    height: ${(p) => (p.open ? "auto" : "70px")};
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px;
    .line {
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 20px;
    }
    .menu-btn {
      display: flex;
    }
  }
`;
