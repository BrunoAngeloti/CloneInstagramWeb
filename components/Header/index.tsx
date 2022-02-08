import Image from 'next/image'

import { ContainerHeader, ContentHeader, InputSearch, Icons } from './style'

const Header = () => {
  return (
    <ContainerHeader>
      <ContentHeader>
      <Image src="/logoInsta.svg" width={100} height={40} alt="logo do instagram"/>
      <InputSearch placeholder='Pesquisar'/>
      <Icons>
        <Image src="/icons/home.svg" width={24} height={24} alt="icone pra home"/>
        <Image src="/icons/message-circle.svg" width={24} height={24} alt="icone pras conversas"/>
        <Image src="/icons/plus-square.svg" width={24} height={24} alt="icone pra adicionar coisa nova"/>
        <Image src="/icons/compass.svg" width={24} height={24} alt="icone o explorador"/>
        <Image src="/icons/heart.svg" width={24} height={24} alt="icone pras atividades"/>
      </Icons>
      </ContentHeader>
    </ContainerHeader>
  )
}

export default Header