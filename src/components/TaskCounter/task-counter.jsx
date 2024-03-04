import { useSelector } from 'react-redux'
import { selectAllTasks } from '../../redux/tasks/tasks-selectors.js'
export const TaskCounter = () => {
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

  // const count = tasks.reduce(
  //   (acc, task) => {
  //     if (task.completed) {
  //       acc.completed += 1
  //     } else {
  //       acc.active += 1
  //     }
  //     return acc
  //   },
  //   { 'active': 0, 'completed': 0 },
  // )
  return (
    <div>
      <p className="text">Active: {count.active}</p>
      <p className="text">Completed: {count.completed}</p>
    </div>
  )
}
