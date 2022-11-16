import Image from 'next/image';
import { images } from '../../../public/assets';
import * as s from './styles';
import { useEffect, useState, useRef } from 'react';

export default function About() {
  const [isInView, setIsInView] = useState(false);
  const observedRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (observedRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          } else {
            setIsInView(false);
          }
        },
        {
          threshold: 0.1,
          rootMargin: '-20px',
        },
      );

      observer.observe(observedRef.current);
    }
  }, [observedRef]);

  return (
    <s.About id="about" ref={observedRef} className={isInView ? '' : 'hidden'}>
      <s.Title>about</s.Title>
      <s.Biography id="bio">
        <p>
          大學與研究所皆主修地理，因對地理空間與資訊的結合應用很感興趣，於大學時輔修資管系，並從C++與Java程式設計課程了解基本的程式語言與物件導向設計，以及修習資料庫、資料結構與UNIX系統等課程補足電腦科學知識。
        </p>
        <p>
          我曾有一年的大型空間資料操作和處理的專案管理實務工作經驗，熟悉ArcGIS、QGIS和PostgreSQL資料庫的空間資料處理，並擅長利用所學的電腦知識與邏輯，以程式語言實作迅速地解決工作問題。
          因工作業務有幸參與公司網站開發過程而對開發產生興趣。
        </p>
        <p>
          開始自學網頁前後端開發以後，我已具備基本的HTML5/CSS3/JavaScript前端技能，並有使用Vite、React和TypeScript獨立開發上線產品，以及使用Git
          flow流程協作開發的web實習經驗。
        </p>
        <p>
          我目前在嘗試運用其他流行的前端開發工具、框架與套件，如webpack、Next.js等改善我的作品集，也正在學習Node.js、MongoDB了解後端處理流程，繼續朝向成為更專業的網頁開發者目標邁進。
        </p>
        <s.Resume>
          歡迎檢視
          <s.ResumeLink href="#" title="my resume">
            我的履歷
          </s.ResumeLink>
          了解我的個人基本資料和經歷，或者繼續往下瀏覽技能與作品集介紹!
        </s.Resume>
      </s.Biography>
      <s.Photo id="photo">
        <Image src={images.person2} alt="picture of the author" />
      </s.Photo>
    </s.About>
  );
}
