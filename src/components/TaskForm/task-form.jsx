import { Button } from 'components/Button/button'
import { StyledForm, StyledInput } from './task-form.styled'
import { addTask } from '../../redux/tasks/tasks-slice.js'
import { useDispatch } from 'react-redux'
import toast, { Toaster } from 'react-hot-toast'

export const TaskForm = () => {
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.target
    const taskTitle = form.elements.text.value
    if (taskTitle.length > 10 || taskTitle.length === 0) {
      toast.error('Title must be equal 10 or less than 10 characters')
      return
    }
    dispatch(addTask(taskTitle))
    form.reset()
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput type="text" name="text" placeholder="Enter task text..." />
      <Button type="submit">Add task</Button>
      <Toaster />
    </StyledForm>
  )
}
