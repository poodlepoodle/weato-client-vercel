import styled from '@emotion/styled';

import { useRouter } from 'next/router';

import Button from '@common/ButtonContainer';
import NewsletterResult from '@search/NewsletterResult';
import CommunityResult from '@search/CommunityResult';
import Pagenator from '@common/Pagenator';

import { Display1, Body4 } from '@styles/FontStyle';

import { main, text_black } from '@styles/Colors';

const Layout = styled.div`
  margin: 0px 300px 167px;

  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  margin: 95px 0px 30px;

  align-self: center;

  ${Display1}

  color :${text_black};
`;

const SubtitleBox = styled.div`
  width: 100%;

  margin: 100px 0px 40px;

  display: flex;
  justify-content: space-between;
`;

const SubTitle = styled.span`
  ${Body4}

  color : ${main};
`;

const ButtonBox = styled.div`
  margin-top: 60px;

  display: flex;
  justify-content: center;
`;

const PagenatorBox = styled.div`
  margin: 73px 0px 210px;

  display: flex;
  justify-content: center;
`;

const Search = (props) => {
  const router = useRouter();

  const newsletterLength = 3;
  const communityLength = 5;

  const communityData = [
    {
      id: '0',
      category: '관리법',
      title: '아토피 이제 괜찮아졌어요',
      view: '200',
      like: '200',
      name: '아토랑',
      level: '새싹',
    },
    {
      id: '1',
      category: '질문',
      title: '아토피 이제 괜찮아졌어요',
      view: '200',
      like: '200',
      name: '아토랑',
      level: '새싹',
    },
    {
      id: '2',
      category: '관리법',
      title: '아토피 이제 괜찮아졌어요',
      view: '200',
      like: '200',
      name: '아토랑',
      level: '새싹',
    },
    {
      id: '3',
      category: '질문',
      title: '아토피 이제 괜찮아졌어요',
      view: '200',
      like: '200',
      name: '아토랑',
      level: '새싹',
    },
    {
      id: '4',
      category: '관리법',
      title: '아토피 이제 괜찮아졌어요',
      view: '200',
      like: '200',
      name: '아토랑',
      level: '새싹',
    },
  ];

  return (
    <Layout>
      <Title>
        &apos;{props.keyword}&apos;
        {props.category === 'all' ? ' 에 대한 검색결과' : undefined}
        {props.category === 'newsletter'
          ? ' 에 대한 뉴스레터 검색결과'
          : undefined}
        {props.category === 'community'
          ? ' 에 대한 커뮤니티 검색결과'
          : undefined}
      </Title>

      {props.category === 'all' || props.category === 'newsletter' ? (
        <>
          <SubtitleBox>
            <SubTitle>
              &apos;{props.keyword}&apos; 에 대한 뉴스레터입니다. (
              {newsletterLength})
            </SubTitle>
          </SubtitleBox>
          <NewsletterResult />
        </>
      ) : undefined}
      {props.category === 'all' ? (
        <ButtonBox>
          <Button
            text="더보기"
            btnType="4"
            href={`/search?keyword=${props.keyword}&category=newsletter`}
          />
        </ButtonBox>
      ) : undefined}

      {props.category === 'all' || props.category === 'community' ? (
        <>
          <SubtitleBox>
            <SubTitle>
              &apos;{props.keyword}&apos; 에 대한 커뮤니티 글입니다. (
              {communityLength})
            </SubTitle>
          </SubtitleBox>
          <CommunityResult communityData={communityData} />
        </>
      ) : undefined}
      {props.category === 'all' ? (
        <ButtonBox>
          <Button
            text="더보기"
            btnType="4"
            href={`/search?keyword=${props.keyword}&category=community`}
          />
        </ButtonBox>
      ) : undefined}

      {props.category === 'newsletter' || props.category === 'community' ? (
        <PagenatorBox>
          <Pagenator path={router.pathname} {...props} />
        </PagenatorBox>
      ) : undefined}
    </Layout>
  );
};

export const getServerSideProps = async (context) => {
  const query = context.query;
  let defaultKeyword = '빈 검색어';
  let defaultCategory = 'all';
  let defaultPage = 1;

  if (Object.keys(query).length !== 0 && query.hasOwnProperty('keyword')) {
    defaultKeyword = query.keyword;
  }

  if (Object.keys(query).length !== 0 && query.hasOwnProperty('category')) {
    defaultCategory = query.category;
  }

  if (Object.keys(query).length !== 0 && query.hasOwnProperty('page')) {
    defaultPage = query.page;
  }

  return {
    props: {
      keyword: defaultKeyword,
      category: defaultCategory,
      page: defaultPage,
    },
  };
};

export default Search;
