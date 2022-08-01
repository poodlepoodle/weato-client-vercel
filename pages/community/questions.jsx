import styled from '@emotion/styled';

import { Subhead4 } from '../../styles/FontStyle';

import { text_black } from '../../styles/Colors';

import TabBar from '../../src/components/community/TabBar';
import BoardRow from '../../src/components/community/BoardRow';
import BoardCard from '../../src/components/community/BoardCard';
import Pagenator from '../../src/components/common/Pagenator';

const Layout = styled.div`
  margin: 39px 300px 67px;

  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Board = styled.div`
  margin-top: 51px;

  display: flex;
  flex-direction: column;
`;

const BoardRecommend = styled.div`
  margin-top: 59px;

  width: 427px;

  display: flex;
  flex-direction: column;
`;

const BoardRecommendHeader = styled.span`
  ${Subhead4}

  color :${text_black};
`;

const BottomRow = styled.div`
  margin-top: 22px;

  display: flex;
  justify-content: center;
`;

function Questions() {
  const contents = [
    {
      id: '0',
      category: '질문',
      title: '현재는 아토피 완치된 사람의 관리경험 공유합니다.',
      view: '200',
      like: '200',
      name: '아토랑',
      level: '새싹',
    },
    {
      id: '1',
      category: '질문',
      title: '생활습관과 함께 다른 부분에서 관리하는 경험 공유합니다.',
      view: '200',
      like: '200',
      name: '아토랑',
      level: '새싹',
    },
    {
      id: '2',
      category: '질문',
      title: '다시 재발한 아토피, 현재 어떻게 관리하는지 공유하고자 합니다.',
      view: '200',
      like: '200',
      name: '아토랑',
      level: '새싹',
    },
    {
      id: '3',
      category: '질문',
      title: '스트레스 때문에 아토피도 같이 안 좋아지나요?',
      view: '200',
      like: '200',
      name: '아토랑',
      level: '새싹',
    },
    {
      id: '4',
      category: '질문',
      title: '아토피 걸리면 고기도 먹지 말아야 하나요?',
      view: '200',
      like: '200',
      name: '아토랑',
      level: '새싹',
    },
  ];

  const recommends = [
    {
      id: '0',
      title: '아토피 이제 괜찮아졌어요',
      content: '이 부분은 내용입니다.',
      view: '200',
      like: '200',
    },
    {
      id: '1',
      title: '아토피 이제 괜찮아졌어요',
      content:
        '이 부분은 내용입니다. 이 부분은 내용입니다. 이 부분은 내용입니다. 이 부분은 내용입니다. 이 부분은 내용입니다. 이 부분은 내용입니다. 이 부분은 내용입니다. 이 부분은 내용입니다. 이 부분은 내용입니다. 이 부분은 내용입니다. 이 부분은 내용입니다. 이 부분은 내용입니다. 이 부분은 내용입니다. 이 부분은 내용입니다. 이 부분은 내용입니다. 이 부분은 내용입니다. ',
      view: '200',
      like: '200',
    },
  ];

  return (
    <Layout>
      <TabBar selected="questions" />
      <Row>
        <Board>
          {contents.map(({ id, category, title, view, like, name, level }) => (
            <BoardRow
              key={id}
              category={category}
              title={title}
              view={view}
              like={like}
              name={name}
              level={level}
            />
          ))}

          <BottomRow>
            <Pagenator currnet={3} />
          </BottomRow>
        </Board>
        <BoardRecommend>
          <BoardRecommendHeader>실시간 추천글</BoardRecommendHeader>
          {recommends.map(({ id, title, content, view, like }) => (
            <BoardCard
              key={id}
              title={title}
              content={content}
              view={view}
              like={like}
            />
          ))}
        </BoardRecommend>
      </Row>
    </Layout>
  );
}

export default Questions;
