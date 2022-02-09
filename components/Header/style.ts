import styled from 'styled-components'

export const ContainerHeader = styled.header`
  display: flex;
  align-items: center;
  position: fixed;
  width: 100%;
  justify-content: center;
  background-color: white;
  border: 1px solid #DBDBDB;
  z-index: 3;
`

export const ContentHeader = styled.div`
  display: flex;
  width: 1280px;
  align-items: center;
  justify-content: space-evenly;
  background-color: white;
  padding: 10px;
`


export const InputSearch = styled.input`
  border: none;
  background-color: #EFEFEF;
  background-image: url('/icons/search.svg');
  background-size: auto;
  background-position: 10% 50%;
  background-repeat: no-repeat;
  text-indent: 20px;
  /* Extra Styling */
  padding: 12px 5px 12px 30px;
  transition:0.3s;
  border-radius: 8px;
  outline: none;

  width: 250px;

  &:focus{
    background-image:none;
    text-indent:0px
  }

`

export const Icons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`