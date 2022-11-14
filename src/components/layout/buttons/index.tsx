import * as s from './styles';
import { IoMdArrowRoundUp } from 'react-icons/io';
import Link from 'next/link';

interface Props {
  isBackToTopVisible: boolean;
}

export const BackToTop = function (props: Props) {
  return (
    <s.BackToTop className={props.isBackToTopVisible ? 'visible' : ''}>
      <Link href="/">
        <IoMdArrowRoundUp />
      </Link>
    </s.BackToTop>
  );
};
