import styled from 'styled-components'

export const ContainerStories = styled.div`
  display: flex;
  background-color: white;
  border: 1px solid #DBDBDB;
  flex-direction: row;
  gap: 20px;
  padding: 20px;
  overflow-x: scroll;

  &::-webkit-scrollbar { 
	  display: none;
  }
`

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 56px; 
  
  span{
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 12px;
  }
  img{
    border-radius: 50%;
    border: 2px solid #CB2C8A !important;
    padding: 2px !important;
  }
`