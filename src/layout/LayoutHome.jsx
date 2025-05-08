import React from 'react'
import styled from 'styled-components'

export const LayoutHome = ({children}) => {
  return (
    <Container>
      <div className='sidebar'>
        Sidebar
      </div>
      <div className='main'>
          <section className='sectionLayout'>
            {children}
          </section>
      </div>
    </Container>
  )
}

export const Container = styled.div`
  display: flex;
  height: 100vh;
  .sidebar{
    width: 10%;
    background-color: #f6f8fa;
  }
  
  .main{
    display: flex;
    justify-content: center;  
    align-items: center;
    width: 90%;
    background-color: #f6f8fa;
    .sectionLayout{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 95%;
      height: 95%;
      background-color: white;
      border-radius: 20px;
    }
  }
`