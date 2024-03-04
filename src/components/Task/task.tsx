import React from 'react'
import { MdClose } from 'react-icons/md'
import {
  StyledButton,
  StyledCheckbox,
  StyledText,
  StyledWrapper,
} from './task.styled'
import { useDispatch } from 'react-redux'
import { deleteTask, changeStatusTask } from '../../redux/tasks/tasks-slice.js'

type TaskProps = {
  task: {
    id: string
    text: string
    completed: boolean
  }
}

export const Task: React.FC<TaskProps> = ({ task }) => {
  const dispatch = useDispatch()

  const handleDelete = (): void => dispatch(deleteTask(task.id))

  const handleToggle = (): void => dispatch(changeStatusTask(task))

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
