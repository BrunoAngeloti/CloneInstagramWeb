import Image from 'next/image'

import { ContainerHome, LeftContent, RightContent } from '../../styles/pages/Home'

import Stories from '../../components/Stories'

const Home = () => {
  return (
    <ContainerHome>
      <LeftContent>
        <Stories />
      </LeftContent>
      <RightContent>dasdas</RightContent>
    </ContainerHome>
  )
}

export default Home
