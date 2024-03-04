import { MdClose } from 'react-icons/md'
import {
  StyledButton,
  StyledCheckbox,
  StyledText,
  StyledWrapper,
} from './task.styled'
import { useDispatch } from 'react-redux'
import { deleteTask, changeStatusTask } from '../../redux/tasks/tasks-slice.js'

export const Task = ({ task }) => {
  const dispatch = useDispatch()

  const handleDelete = () => dispatch(deleteTask(task.id))

  const handleToggle = () => dispatch(changeStatusTask(task))

  return (
    <StyledWrapper>
      <StyledCheckbox
        type="checkbox"
        checked={task.completed}
        onChange={handleToggle}
      />
      <StyledText onClick={handleToggle}>{task.text}</StyledText>
      <StyledButton onClick={handleDelete}>
        <MdClose size={24} />
      </StyledButton>
    </StyledWrapper>
  )
}
