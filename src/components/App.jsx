import { Layout } from './Layout/layout'
import { TaskBar } from './TaskBar/task-bar'
import { TaskForm } from './TaskForm/task-form'
import { TaskList } from './TaskList/task-list'

export const App = () => {
  return (
    <Layout>
      <TaskBar />
      <TaskForm />
      <TaskList />
    </Layout>
  )
}
