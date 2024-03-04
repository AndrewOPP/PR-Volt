type Task = {
  id: string
  text: string
  completed: boolean
}

export const selectAllTasks = (state): Task[] => state.tasks
