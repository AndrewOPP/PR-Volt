import { TaskCounter } from 'components/TaskCounter/task-counter'
import { StyledSection, StyledTitle, StyledWrapper } from './task-bar.styled'
import { StatusFilter } from 'components/StatusFilter/status-filter'

export const TaskBar = () => {
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
