import React from 'react';
import { MoonLoader } from 'react-spinners';
import palette from '@constants/styles';
import * as Styled from '@styles/Loading.styles';

export const LoadingPage = () => {
  return (
    <Styled.Background>
      <MoonLoader color={palette.blueM} loading={true} size={100} />
      <Styled.LoadingText>잠시만 기다려 주세요...</Styled.LoadingText>
    </Styled.Background>
  );
};
