import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { tasksReducer } from './tasks/tasks-slice'
import { filtersReducer } from './filters/filters-slice'

const rootReducer = combineReducers({
  'tasks': tasksReducer,
  'filters': filtersReducer,
})

export const store = configureStore({
  'reducer': rootReducer,
})
