import type React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';

interface Props {
  children: React.ReactNode;
}

export default function Theme(props: Props) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}
