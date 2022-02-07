import { ReactChild, ReactChildren } from "react";
import Header from '../components/Header'

interface IpropsLayout {
  children: ReactChild | ReactChildren;
}

export default function Layout({ children } : IpropsLayout) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}