import React from 'react'
import { Button } from '../Button/button.tsx'
import { StyledWrapper } from './status-filter.styled'
import { statusFilters } from '../all-constants.jsx'
import { changeFilter } from '../../redux/filters/filters-slice.js'
import { useDispatch, useSelector } from 'react-redux'
import { selectFilters } from '../../redux/filters/filters-selectors.ts'

export const StatusFilter: React.FC = () => {
  const dispatch = useDispatch()
  const filter = useSelector(selectFilters)

  const handleFilterChange =
   (currentFilter): void => dispatch(changeFilter(currentFilter))

  return (
    <StyledWrapper>
      <Button
        selected={filter === statusFilters.all}
        onClick={(): void => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={(): void => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={(): void => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </StyledWrapper>
  )
}
