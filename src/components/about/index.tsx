import Image from 'next/image';
import { person2 } from '../../../public/assets/images';
import * as s from './styles';

export default function About() {
  return (
    <s.About>
      <s.Title>about</s.Title>
      <s.Biography>
        <p>
          大學與研究所皆主修地理，因對地理空間與資訊的結合應用很感興趣，於大學時輔修資管系，並從C++與Java程式設計課程了解基本的程式語言與物件導向設計，以及修習資料庫、資料結構與UNIX系統等課程補足電腦科學知識。
        </p>
        <p>
          我曾有一年的大型空間資料操作和處理的專案管理實務工作經驗，熟悉ArcGIS、QGIS和PostgreSQL資料庫的空間資料處理，並擅長利用所學的電腦知識與邏輯，以程式語言實作迅速地解決工作問題。
          因工作業務有幸參與公司網站開發的過程而產生對於網站開發的興趣，也透過自學網頁前後端開發及現今流行的開發工具、框架與套件
        </p>
        <p></p>
      </s.Biography>
      <s.Photo>
        <Image src={person2} alt="picture of the author" />
      </s.Photo>
    </s.About>
  );
}
