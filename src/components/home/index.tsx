import * as s from './styles';
import { useEffect, useRef } from 'react';
import Links from 'components/layout/links';

interface Props {
  setIsBackToTopVisible: (param: boolean) => void;
}

export default function Home(props: Props) {
  const observedRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (observedRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.intersectionRatio < 0.1) {
            props.setIsBackToTopVisible(true);
          } else {
            props.setIsBackToTopVisible(false);
          }
        },
        {
          root: null,
          threshold: 0.1,
          rootMargin: '-25%',
        },
      );

      observer.observe(observedRef.current);
    }
  }, [observedRef, props.setIsBackToTopVisible]);

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
