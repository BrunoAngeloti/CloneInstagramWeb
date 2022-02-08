import styled from 'styled-components'

export const ContainerHome = styled.main`
  display: flex;
  flex-direction: row;
  
  width: 935px;
`

export const LeftContent = styled.div`
  display: flex;
  max-width: 65%; 
`

export const RightContent = styled.div`
  display: flex;
  padding: 0px 10px 15px 20px;
  width: 35%;
  
`

export const Perfil = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  img{
    border-radius: 50%;
  }
`

export const InfoPerfil = styled.div`
  h1{
    font-size: 0.8rem;
    color: black;
    font-weight: 500;
    margin: 0;
  }
  h2{
    font-size: 0.9rem;
    color: grey;
    font-weight: 500;
    margin: 0;
  }
`