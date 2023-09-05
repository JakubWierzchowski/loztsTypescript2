"use client";
import styled, { keyframes } from "styled-components";
const showText = keyframes`
0%{
  opacity:0;
  transform: translateX(-2%);
}
100% {
  opacity: 1;
  transform: translateX(0)
}
`;
export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  z-index: 0;
  margin-top: 50px;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  list-style: none;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;

  .mainDiv {
    .flexItem {
      cursor: pointer;
      list-style: none;
      font-size: 2.7rem;
      &:hover {
        transform: scale(1.01);
      }

      &:after {
        content: ">";
        position: absolute;
        left: 40px;
        transition: transform 0.2s ease-in-out;
        transform: rotate(90deg);
      }
    }
    .details {
      .textAnimation {
        opacity: 0;
        animation: 0.2s 0.4s ease-in 1 forwards ${showText};
        color: black;
        margin: 0;
        font-size: 30px;
        padding-bottom: 30px;
        .detailsBox {
          display: flex;
          justify-content: space-around;
          width: 100%;
          align-items: center;
          .links {
            text-decoration: none;
          }
        }
      }
    }
    &[open] {
      .flexItem::after {
        transform: rotate(-90deg);
      }
    }
    &:nth-child(1) {
      .details {
        background: #ffff00;
      }
      .flexItem {
        padding: 40px 40px 40px 80px;

        background: #ffff00;
        clip-path: polygon(
          0 2.4rem,
          2.4rem 0,
          calc(100% - 2.4rem) 0,
          100% 2.4rem,
          100% calc(100% - 2.4rem),
          100% 100%,
          0 100%,
          0 100%,
          0 0
        );
      }
    }
    &:nth-child(2) {
      .details {
        background: #5154fc;
      }
      background: #ffff00;
      .flexItem {
        padding: 40px 40px 40px 80px;
        background: #5154fc;
        clip-path: polygon(
          0 2.4rem,
          2.4rem 0,
          calc(100% - 2.4rem) 0,
          100% 2.4rem,
          100% calc(100% - 2.4rem),
          100% 100%,
          0 100%,
          0 100%,
          0 0
        );
      }
    }
  }
`;

export const Span = styled.span`
  display: block;
  cursor: pointer !important;
  position: relative;
  padding: 0.2em 0;
  color: ${({ theme }) => theme.dark};
  text-decoration: none;
  font-size: 1.6rem;
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1.5px;
    background-color: #100b00;
    bottom: 0;
    left: 0;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.25s linear;
  }
  &:hover:after {
    transform-origin: bottom left;
    transform: scaleX(1);
  }
`;
