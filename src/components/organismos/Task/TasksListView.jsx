import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import styled from 'styled-components'

export const TasksListView = () => {
  return (
    <Container>
        <section className='tasktoolbar'>
            <div className='tasktoolbar_opt'>
                <Icon icon="circum:view-timeline" className='tasktoolbar_icon'/>
                <span className='tasktoolbar_text'>Timeline</span>
            </div>
            <div className='tasktoolbar_opt active'>
                <Icon icon="bi:view-list" className='tasktoolbar_icon'/>
                <span className='tasktoolbar_text'>List</span>
            </div>
        </section>
        <section className='tasksectionlist'>

        </section>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  .tasktoolbar{
      display: flex;
      gap: 10px;
      height: 6%;
    &_opt{
        display: flex;
        align-items: center;
        gap: 5px;
        position: relative;
        &.active{
            &::after{
                position: absolute;
                content: '';
                bottom: 0;
                right: 0;
                width: 100%;
                height: 2px;
                background-color: #2b8ae4;
            }
            .tasktoolbar_text{
                color: #2b8ae4;
            }
            .tasktoolbar_icon{
                color: #2b8ae4;
            }
        }
        
    }
    &_text{
        font-size: 16px;
        font-weight: 500;
        color: #888888;
        font-weight: 600;
        &.active{
            color: #2b8ae4;
        }
    }
    &_icon{
        font-size: 22px;
        font-weight: 600;
    }
  }
`
