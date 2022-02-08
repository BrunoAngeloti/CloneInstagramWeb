import styled from 'styled-components'

export const ContainerStories = styled.div`
  display: flex;
  background-color: white;
  border: 1px solid #DBDBDB;
  flex-direction: row;
  gap: 20px;
  padding: 20px;
  overflow-x: scroll;
  max-width: 100%;
  position: relative;
  &::-webkit-scrollbar { 
	  display: none;
  }
`

export const Profile = styled.div<{ move?: number }>`
  display: flex;
  flex-direction: column;
  max-width: 60px; 
  transition: 0.5s;
  transform: translateX(${props => props.move}px);
  
  span{
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 12px;
  }
`

export const Button = styled.button<{ left?: boolean, right?: boolean, move?: number, controlMax?: number }>`
  display:  ${props => props.move === 0 || props.controlMax === 0 ? 'none' : 'flex'};
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  z-index: 2;
  top: 50%;
  transform: translateY(-50%);
  height: 20px;
  width: 20px;
  border-radius: 50%;
  box-shadow: 1px 1px 5px rgba(0,0,0,0.25);
  border: none;
  right: ${props => props.right ? 0 : {}};
  left: ${props => props.left ? 0 : {}};

  margin: ${props => props.right ? '0px 10px 0px 0px' : '0px 0px 0px 10px'};
`