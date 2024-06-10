import styled from "styled-components";

export const Block = styled.div`
  width: ${(p) => p.w};
  height: calc(${(p) => p.h} - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
  .loader {
    --ui-size: 2.8rem;
    --ui-speed: 0.9s;
    --ui-color: #000;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: var(--ui-size);
    width: var(--ui-size);
    .dot {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      height: 100%;
      width: 100%;
    }
    .dot::before {
      content: "";
      height: 20%;
      width: 20%;
      border-radius: 50%;
      background-color: var(--ui-color);
      transform: scale(0);
      opacity: 0.5;
      animation: ImageLoader calc(var(--ui-speed) * 1.111) ease-in-out infinite;
      box-shadow: 0 0 20px rgba(18, 31, 53, 0.3);
    }
    .dot:nth-child(2) {
      transform: rotate(45deg);
    }
    .dot:nth-child(2)::before {
      animation-delay: calc(var(--ui-speed) * -0.875);
    }
    .dot:nth-child(3) {
      transform: rotate(90deg);
    }
    .dot:nth-child(3)::before {
      animation-delay: calc(var(--ui-speed) * -0.75);
    }
    .dot:nth-child(4) {
      transform: rotate(135deg);
    }
    .dot:nth-child(4)::before {
      animation-delay: calc(var(--ui-speed) * -0.625);
    }
    .dot:nth-child(5) {
      transform: rotate(180deg);
    }
    .dot:nth-child(5)::before {
      animation-delay: calc(var(--ui-speed) * -0.5);
    }
    .dot:nth-child(6) {
      transform: rotate(225deg);
    }
    .dot:nth-child(6)::before {
      animation-delay: calc(var(--ui-speed) * -0.375);
    }
    .dot:nth-child(7) {
      transform: rotate(270deg);
    }
    .dot:nth-child(7)::before {
      animation-delay: calc(var(--ui-speed) * -0.25);
    }
    .dot:nth-child(8) {
      transform: rotate(315deg);
    }
    .dot:nth-child(8)::before {
      animation-delay: calc(var(--ui-speed) * -0.125);
    }
    @keyframes ImageLoader {
      0%,
      100% {
        transform: scale(0);
        opacity: 0.5;
      }
      50% {
        transform: scale(1);
        opacity: 1;
      }
    }
  }
  @media screen and (max-width: 600px) {
    height: calc(${(p) => p.h} - 70px);
  }
`;
