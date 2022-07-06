import styled from "styled-components";

const CallToAction = styled.button`
  max-width: 140px;
  font-size: 0.8rem;
  line-height: 1rem;
  font-weight: 600;
  border: solid 1px rgba(255,255,255,0.75);
  border-radius: 10px;
  padding: 7px 15px;
  color: #ffffff;
  background: #000000;
  display: block;
`

const PlayButton = styled.button`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background: #ffffff;
  color: #000000;
  margin-bottom: 8px;
  transform: scale(1);
  transition: transform ease-in-out 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`

const IconWrapper = styled.button`
  height: auto;
  width: auto;
  background: transparent;
  display: block;
`

export { CallToAction, PlayButton, IconWrapper };
