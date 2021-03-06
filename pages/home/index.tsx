import Image from 'next/image'

import ImagePerfil from '../../components/ImagePerfil'

import { ContainerHome, LeftContent, RightContent, Perfil, InfoPerfil, Teste } from '../../styles/pages/Home'

import Stories from '../../components/Stories'

const Home = () => {
  return (
    <ContainerHome>
      <LeftContent>
        <Stories />
        <Teste />
        <Teste />
        <Teste />
        <Teste />
      </LeftContent>
      <RightContent>
        <Perfil>
        <ImagePerfil/>
          <InfoPerfil>
            <h1>bruno_angeloti</h1>
            <h2>Bruno Angeloti Pires</h2>
          </InfoPerfil>
        </Perfil>
      </RightContent>
    </ContainerHome>
  )
}

export default Home
