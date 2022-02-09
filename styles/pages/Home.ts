import styled from 'styled-components'

export const ContainerHome = styled.main`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 935px;
`

export const LeftContent = styled.div`
  display: flex;
  max-width: 65%; 
  flex-direction: column;

`

export const Teste = styled.div`
  display: flex;
  min-width: 100%; 
  height: 400px;
  background-color: white;
`

export const RightContent = styled.div`
  display: flex;
  padding: 20px 10px 15px 20px;
  width: 35%;
  height: 100%;
  position: relative;
  align-items: flex-start;
`

export const Perfil = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
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
    font-weight: 400;
    margin: 0;
  }
`