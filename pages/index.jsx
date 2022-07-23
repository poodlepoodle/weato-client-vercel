/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { text_white } from '../styles/Colors';

import { Display1, Headline2 } from '../styles/FontStyle';

import Card from '../src/components/common/card';
import Button from '../src/components/common/button';

import banner from '../public/main_banner.png';

const HomeLayout = styled.div`
  margin-bottom: 30px;
`;

const BannerLayout = styled.div`
  /* height: 240px; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BannerContent = styled.div`
  position: absolute;
  right: 18%;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;

  height: 120px;
`;

const BannerText = styled.article`
  color: ${text_white};

  text-align: right;
  line-height: 32px;
`;

const HomeContent = styled.main`
  margin: 0px 224px;
  padding-top: 50px;
  background-color: blue;
`;

const CardRow = styled.div`
  display: flex;

  justify-content: space-between;
  margin: 15px 0px;
`;

const ButtonRow = styled.div`
  height: 80px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Home() {
  return (
    <HomeLayout>
      <Head>
        <title>Weato Title</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <BannerLayout>
          <Image src={banner} />
          <BannerContent>
            {/* <BannerText css={Headline2}>아토피와의 긴 여정,</BannerText> */}
            <BannerText css={Headline2}>
              아토피와의 긴 여정,
              <br />
              이제는 위아토와 함께해요!
            </BannerText>
            <BannerText css={Headline2}></BannerText>
            <Button text={'바로 구독하기'} />
          </BannerContent>
        </BannerLayout>

        <HomeContent>
          <h1 css={Display1}>이주의 아토레터</h1>
          <CardRow>
            <Card
              text={'샤워부터 시작하는 아토피 관리 샤워부터 시작하는'}
              date={'2022.07.21'}
              tag={'약품'}
            />
            <Card
              text={'샤워부터 시작하는 아토피 관리 샤워부터 시작하는'}
              date={'2022.07.21'}
              tag={'약품'}
            />
            <Card
              text={'샤워부터 시작하는 아토피 관리 샤워부터 시작하는'}
              date={'2022.07.21'}
              tag={'약품'}
            />
            <Card
              text={'샤워부터 시작하는 아토피 관리 샤워부터 시작하는'}
              date={'2022.07.21'}
              tag={'약품'}
            />
          </CardRow>
          <CardRow>
            <Card
              text={'샤워부터 시작하는 아토피 관리 샤워부터 시작하는'}
              date={'2022.07.21'}
              tag={'약품'}
            />
            <Card
              text={'샤워부터 시작하는 아토피 관리 샤워부터 시작하는'}
              date={'2022.07.21'}
              tag={'약품'}
            />
            <Card
              text={'샤워부터 시작하는 아토피 관리 샤워부터 시작하는'}
              date={'2022.07.21'}
              tag={'약품'}
            />
            <Card
              text={'샤워부터 시작하는 아토피 관리 샤워부터 시작하는'}
              date={'2022.07.21'}
              tag={'약품'}
            />
          </CardRow>
          <ButtonRow>
            <Button text={'더 보기'} />
          </ButtonRow>

          <h1 css={Display1}>가장 많은 스크랩</h1>
          <CardRow>
            <Card
              text={'샤워부터 시작하는 아토피 관리 샤워부터 시작하는'}
              date={'2022.07.21'}
              tag={'약품'}
            />
            <Card
              text={'샤워부터 시작하는 아토피 관리 샤워부터 시작하는'}
              date={'2022.07.21'}
              tag={'약품'}
            />
            <Card
              text={'샤워부터 시작하는 아토피 관리 샤워부터 시작하는'}
              date={'2022.07.21'}
              tag={'약품'}
            />
            <Card
              text={'샤워부터 시작하는 아토피 관리 샤워부터 시작하는'}
              date={'2022.07.21'}
              tag={'약품'}
            />
          </CardRow>
          <CardRow>
            <Card
              text={'샤워부터 시작하는 아토피 관리 샤워부터 시작하는'}
              date={'2022.07.21'}
              tag={'약품'}
            />
            <Card
              text={'샤워부터 시작하는 아토피 관리 샤워부터 시작하는'}
              date={'2022.07.21'}
              tag={'약품'}
            />
            <Card
              text={'샤워부터 시작하는 아토피 관리 샤워부터 시작하는'}
              date={'2022.07.21'}
              tag={'약품'}
            />
            <Card
              text={'샤워부터 시작하는 아토피 관리 샤워부터 시작하는'}
              date={'2022.07.21'}
              tag={'약품'}
            />
          </CardRow>
          <ButtonRow>
            <Button text={'더 보기'} />
          </ButtonRow>
        </HomeContent>
      </div>
    </HomeLayout>
  );
}
