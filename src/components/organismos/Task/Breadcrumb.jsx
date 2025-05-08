import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import styled from 'styled-components'

export const Breadcrumb = () => {
  return (
    <Container>
        <section className='sectionbreadcrumb'>
            <Icon icon="hugeicons:task-01" className='generaltext'/>
            <span className='generaltext'>Projects</span>
            <span className='generaltext'>/</span>
            <span className='activeText'>Lists Tasks</span>
        </section>
    </Container>
  )
}

const Container = styled.section`
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    .sectionbreadcrumb{
        display: flex;
        align-items: center;
        gap: 7px;
    }
    .generaltext{
        font-size: 16px;
        font-weight: 500;
        color: #888888;
    }
    .activeText{
        font-size: 16px;
        font-weight: 600;
        color: #707070;
    }
`