import styled from 'styled-components';

const HeaderWrapper = styled.header`
  width: 87.5%;
  background-color: #201060;
  padding: 14px 160px 14px 40px;
  position: fixed;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  z-index: 9;
`

const HeaderHistory = styled.div`
  width: 100%;
  max-width: 80px;
  display: flex;
  gap: 16px;

  button {
    width: 32px;
    height: 32px;
    font-weight: 700;
    color: #ffffff;
    background: #000000;
    border-radius: 50%;
  }
`

const HeaderUserArea = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`

const HeaderAvatarName = styled.p`
  font-size: 18px;
  line-height: 21px;
  font-weight: 600;
  color: #ffffff;
  margin-left: 8px;
`

export { HeaderWrapper, HeaderHistory, HeaderAvatarName, HeaderUserArea };
