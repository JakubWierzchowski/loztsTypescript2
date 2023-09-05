import { WrapperProps, SpanProps } from "@/types/navBar.types";
import styled from "styled-components";
export const Wrapper = styled.nav<WrapperProps>`
  padding-top: ${(props) => props.paddingTop};
  background-color: ${(props) => props.background};
  nav {
    padding-top: ${(props) => props.paddingTop};
  }
`;

export const Span = styled.span<SpanProps>`
  display: block;
  cursor: pointer !important;
  position: relative;
  padding: 0.2em 0;
  color: #fff
  font-size: 1.5rem;
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1.5px;
    background-color: ${({ color }) =>
      color === "true" ? "#FFFFEA" : "#100B00"};
    color:rgb(0, 135, 253);
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

@media (min-width: 768px) {
    font-size: 1.3rem;
    color: ${({ color }) => (color === "true" ? "#FFFFEA" : "#100B00")};
  }
@media (min-width: 1024px) {
    font-size: 1.7rem;
  }
@media (min-width: 1280px) {
    font-size: 2rem;
  }
`;
