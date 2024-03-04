import { Task } from 'components/Task/task'
import { StyledList, StyledListItem } from './task-list.styled'
import { selectAllTasks } from '../../redux/tasks/tasks-selectors.js'
import { useSelector } from 'react-redux'
import { selectFilters } from '../../redux/filters/filters-selectors.js'
import { statusFilters } from '../all-constants'

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active: {
      return tasks.filter((task) => !task.completed)
    }
    case statusFilters.completed: {
      return tasks.filter((task) => task.completed)
    }
    default: {
      return tasks
    }
  }
}

export const TaskList = () => {
  const filter = useSelector(selectFilters)
  const tasks = useSelector(selectAllTasks)
  const visibleTasks = getVisibleTasks(tasks, filter)
  return (
    <StyledList>
      {visibleTasks.map((task) => (
        <StyledListItem key={task.id}>
          <Task task={task} />
        </StyledListItem>
      ))}
    </StyledList>
  )
}
