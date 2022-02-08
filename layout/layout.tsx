import { ReactChild, ReactChildren } from "react";
import Header from '../components/Header'

import { ContentLayout } from './style'

interface IpropsLayout {
  children: ReactChild | ReactChildren;
}

export default function Layout({ children } : IpropsLayout) {
  return (
    <>
      <Header />
      <ContentLayout>{children}</ContentLayout>
    </>
  )
}