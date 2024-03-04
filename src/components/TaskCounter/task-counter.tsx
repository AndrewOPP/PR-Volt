import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllTasks } from '../../redux/tasks/tasks-selectors'

export const TaskCounter: React.FC = () => {
  const tasks = useSelector(selectAllTasks)

  const count = {
    'active': 0,
    'completed': 0,
  }

  tasks.map((task) => {
    if (task.completed) {
      count.completed += 1
    } else {
      count.active += 1
    }
    return task
  })

  return (
    <div>
      <p className="text">Active: {count.active}</p>
      <p className="text">Completed: {count.completed}</p>
    </div>
  )
}
