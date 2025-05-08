import { closestCenter, DndContext } from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import styled from 'styled-components'

export const TableTask = () => {
  return (
    <Table>
        <thead>
            <tr>
              <th className='takstheadtitle taskheaddescripcion'>Task</th>
              <th className='takstheadtitle'>Created at</th>
              <th className='takstheadtitle'>Due Date</th>
              <th className='takstheadtitle'>Priority</th>
            </tr>
        </thead>
        <tbody className='tbodytask'>
              <tr className='taskrow'>
                <td className='taskrow_description'><Icon icon="icon-park-outline:drag"/><span>Update Iconography for Enhanced </span></td>
                <td>17/08/2025</td>
                <td>24/12/2024</td>
                <td><Icon icon="solar:flag-linear"/><span>Hight</span></td>
              </tr>
              <tr className='taskrow'>
                <td className='taskrow_description'><Icon icon="icon-park-outline:drag"/><span>Update Iconography for Enhanced </span></td>
                <td>17/08/2025</td>
                <td>24/12/2024</td>
                <td><Icon icon="solar:flag-linear"/><span>Hight</span></td>
              </tr>
        </tbody>
    </Table>
  )
}

const Table = styled.table`
    display: table;
    width: 100%;
    .taskrow,.taskheaddescripcion{
      width: 50%;
    }

    .takstheadtitle{
      color: #c5c3c3;
      font-weight: 600;
    }
    .taskrow{
      &_description{
        display: flex;
        gap: 15px;
        width: 100%;
      }
    }
    .tbodytask{
    }
`