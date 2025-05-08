import React, { useEffect, useState } from 'react';
import {useDraggable} from '@dnd-kit/core';
import { Icon } from '@iconify/react/dist/iconify.js';
import styled from 'styled-components';
import { TableTask } from './TableTask';

export const TaskStatusDraggable= ({titleStatusTask,colorTask})=> {
  const {attributes, listeners, setNodeRef, transform,isDragging} = useDraggable({
    id: 'draggable-item',
  });
  const [position,setPosition] = useState({x:0,y:0})
  const style = {
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
    cursor: 'grab',
  };

  return (
    <Container  ref={setNodeRef} style={style} {...listeners} {...attributes} >
      <div className='task'>
        <div className='task_icons'>
          <Icon icon="icon-park-outline:drag" className='iconDraggable'/>
          <ButtonStatus colorTask={colorTask} className='btnStatus'> <Icon icon="dashicons:arrow-up" className='arrow'/> <span className='title'>{titleStatusTask}</span></ButtonStatus>
        </div>
        <div className='task_controls'>
          <Icon icon="mynaui:plus-solid"/>
          <Icon icon="proicons:more"/>
        </div>
      </div>
      <TableTask/>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  .task{
    display: flex;
    justify-content: space-between;
    width: 100%;
    &_icons{
      display: flex;
      align-items: center;
      gap: 15px;
    }
    &_controls{
      display: flex;
    }
  }

  .iconDraggable{
    font-size: 22px;
    color: #b9b8b8;
  }

  .btnStatus{
  }
  `

const ButtonStatus = styled.button`
  display: flex;
  align-items: center;
  height: 100%;
  background-color: #e7e7e7;
  width: 100%;
  border-radius: 5px;
  .arrow{
    color: ${({ colorTask }) => colorTask};
    font-size: 35px;
  }
  .title{
    color: ${({ colorTask }) => colorTask};
    font-weight: 600;
    width: 100%;
  }
`


