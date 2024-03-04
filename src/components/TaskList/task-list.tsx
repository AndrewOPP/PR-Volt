import React from 'react'
import { Task } from '../Task/task.tsx'
import { StyledList, StyledListItem } from './task-list.styled'
import { selectAllTasks } from '../../redux/tasks/tasks-selectors'
import { useSelector } from 'react-redux'
import { selectFilters } from '../../redux/filters/filters-selectors'
import { statusFilters } from '../all-constants.jsx'

type Task = {
  id: string
  text: string
  completed: boolean
}

const getVisibleTasks = (tasks, statusFilter): Task[] => {
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

export const TaskList: React.FC = () => {
  const filter = useSelector(selectFilters)
  const tasks = useSelector(selectAllTasks)
  const visibleTasks = getVisibleTasks(tasks, filter)
  return (
    <StyledList>
      {visibleTasks.map((task) => {
        return <StyledListItem key={task.id}>
          <Task task={task} />
        </StyledListItem>
      })},
    </StyledList>
  )
}
