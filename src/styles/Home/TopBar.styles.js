import styled from 'styled-components';
import palette from '@constants/styles';

export const Container = styled.div`
  background: ${palette.white500};
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
  position: relative;
  width: calc(100vw - 10px);
  min-width: 890px;
  height: 55px;
  display: flex;
  margin: 0 auto;
  padding-right: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
`;

export const AddressSearchBarContainer = styled.div`
  width: 440px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const AddressSearchBar = styled.input`
  background: ${palette.gray300};
  width: 390px;
  height: 36px;
  border: none;
  border-radius: 6px;
  padding-left: 15px;
  padding-right: 40px;
  font-size: 15px;
  color: ${palette.black500};
  outline: none;
  transition: border-color 0.3s ease-in-out;
`;

export const ServiceTitleText = styled.div`
  height: auto;
  margin-left: 54px;
  color: ${palette.blue500};
  font-size: 24px;
  font-family: 'kumap-bold';
  text-align: center;
`;

export const RelatedSearchBox = styled.div`
  width: 430px;
  padding: 10px;
  background-color: ${palette.white500};
  border: 1px solid ${palette.gray500};
  position: absolute;
  top: 50px;
  right: 0;
  max-height: 210px;
  overflow-y: auto;
  z-index: 10;
`;

export const RelatedSearchItem = styled.div`
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${palette.gray300};
  }
`;
