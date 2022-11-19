import * as s from './styles';
import Links from 'components/layout/links';
import useInView from 'hooks/use-in-view';
import { useRef } from 'react';

interface Props {
  setIsBackToTopVisible: (param: boolean) => void;
}

const intersectionCallback = function (
  setState: (param: boolean) => void,
): IntersectionObserverCallback {
  return (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    if (entry.intersectionRatio < 0.1) {
      setState(true);
    } else {
      setState(false);
    }
  };
};

export default function Home(props: Props) {
  const observedRef = useRef<HTMLElement>(null);

  const callback = intersectionCallback(props.setIsBackToTopVisible);

  useInView({
    observedRef,
    callback: callback,
    options: {
      root: null,
      threshold: 0.1,
      rootMargin: '-25%',
    },
    willUnObserve: false,
  });

  return (
    <s.Home ref={observedRef}>
      <s.Title>
        <p className="typing">
          Hi, I am <span>You-Lun Lin.</span>
        </p>
      </s.Title>
      <s.SubTitle className="fadeIn">
        <p>在前端開發的路上</p>
        <p>具備HTML5、CSS3、JavaScript基本前端技能</p>
        <p>曾有使用React獨立開發及協作開發上線產品的經驗</p>
        <p>也正在學習後端工具（Node.js、Express、MongoDB）</p>
      </s.SubTitle>
      <s.LinksContainer className="fadeIn">
        <Links />
      </s.LinksContainer>
    </s.Home>
  );
}
