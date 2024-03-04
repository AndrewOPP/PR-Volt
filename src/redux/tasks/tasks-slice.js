import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

const tasksInitialState = [
  { 'text': 'Task1', 'completed': true, 'id': 1 },
  { 'text': 'Task2', 'completed': false, 'id': 2 },
  { 'text': 'Task3', 'completed': false, 'id': 3 },
  { 'text': 'Task4', 'completed': true, 'id': 4 },
]

const tasksSlice = createSlice({
  'name': 'tasks',
  'initialState': tasksInitialState,
  'reducers': {
    'addTask': {
      reducer(state, action) {
        state.push({
          'text': action.payload, 'completed': false, 'id': nanoid(),
        })
      },
    },
    'deleteTask': {
      reducer(state, action) {
        return state.filter((elem) => elem.id !== action.payload)
      },
    },
    'changeStatusTask': {
      reducer(state, action) {
        state = state.map((elem) => {
          if (elem.id === action.payload.id) {
            elem.completed = !elem.completed
            return elem.completed
          }
          return elem
        })
      },
    },
  },
})

export const { addTask, deleteTask, changeStatusTask } = tasksSlice.actions
export const tasksReducer = tasksSlice.reducer
