import React from 'react'
import { Breadcrumb } from '../organismos/Task/Breadcrumb'
import styled from 'styled-components'
import { Icon } from '@iconify/react/dist/iconify.js'
import { TasksListView } from '../organismos/Task/TasksListView'
import { useTaskStore } from '../../store/TaskStore'
import { TaskForm } from '../organismos/Forms/TaskForm'

export const TasksTemplate = () => {

  const {isFormTaskOpen,setIsFormTaskOpen} = useTaskStore()

  return (
    <Container>
      {isFormTaskOpen && <TaskForm/>}
      <Breadcrumb/>
      <section className='titletasklist'>
        <h1 className='titletasklist_title'>List Tasks</h1>
        <button className='buttonTask'> <Icon icon="iconoir:plus" className='buttonTask_icon'/> <span className='buttonTask_text' onClick={setIsFormTaskOpen}>Add task</span></button>
      </section>
      <TasksListView/>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 98%;
  height: 98%;
  .titletasklist{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    &_title{
      font-size: 25px;
    }
  }
  .buttonTask{
    display: flex;
    align-items: center;
    padding: 5px 10px;
    background-color: #196fdf;
    border-radius: 10px;
    &_text{
      color:white;
      font-size: 16px;
    }
    &_icon{
      color:white;
      font-size: 25px;
    }
  }

`

