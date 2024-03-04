import { Button } from 'components/Button/button'
import { StyledWrapper } from './status-filter.styled'
import { statusFilters } from '../all-constants'
import { changeFilter } from '../../redux/filters/filters-slice.js'
import { useDispatch, useSelector } from 'react-redux'
import { selectFilters } from '../../redux/filters/filters-selectors.js'

export const StatusFilter = () => {
  const dispatch = useDispatch()
  const filter = useSelector(selectFilters)

  const handleFilterChange =
   (currentFilter) => dispatch(changeFilter(currentFilter))

  return (
    <StyledWrapper>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </StyledWrapper>
  )
}
