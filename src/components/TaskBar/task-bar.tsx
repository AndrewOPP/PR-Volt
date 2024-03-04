import React from 'react'
import { TaskCounter } from '../TaskCounter/task-counter.tsx'
import { StyledSection, StyledTitle, StyledWrapper } from './task-bar.styled'
import { StatusFilter } from '../StatusFilter/status-filter.tsx'

export const TaskBar: React.FC = () => {
  return (
    <StyledWrapper>
      <StyledSection>
        <StyledTitle>Tasks</StyledTitle>
        <TaskCounter />
      </StyledSection>
      <StyledSection>
        <StyledTitle>Filter by status</StyledTitle>
        <StatusFilter />
      </StyledSection>
    </StyledWrapper>
  )
}
