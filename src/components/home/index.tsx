import * as s from './styles';
import Links from 'components/layout/links';

export default function Home() {
  return (
    <s.Home>
      <s.Title>
        Hi, I am <span>You-Lun Lin.</span>
      </s.Title>
      <s.SubTitle>
        <p>目前在通往前端開發的路上</p>
        <p>具備HTML5、CSS3、JavaScript基本前端技能</p>
        <p>曾有使用React獨立開發及協作開發上線產品的經驗</p>
        <p>也正在學習Node.js、Express和MongoDB等後端工具應用</p>
      </s.SubTitle>
      <s.LinksContainer>
        <Links />
      </s.LinksContainer>
    </s.Home>
  );
}
