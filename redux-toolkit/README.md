# Redux-ToolKit

## Redux
- Redux is a library 
- Redux helps to manage the state of apps in a predictable and centralized way.
- Redux need to write significant amount of reusable codes(boilerplate code) to set up actions, reducer and store configruation
- Store is immutable, hence need to create new state for every change
- redux middlewares must be managed and configured seperately(like Redux Thunk) (Redux Thunk middleware allows you to write action creators that return a function instead of an action. )

## Redux Toolkit
- Simplifies the redux -  Abstraction of Reedux
- Reduces boilerplate (createSlice function for generating action creator)
- immer helps in assisting immutable updates to state(ie, state can be updated directly with immer in background).
- Async Handling:helps inhandling asynchronous function (createAsyncThunk) 

### Refer Ex : https://www.linkedin.com/pulse/redux-vs-toolkit-choosing-right-state-management-solution-birta/

[Beginner Redux Tutorial](https://www.freecodecamp.org/news/redux-and-redux-toolkit-for-beginners/)

### Data FLow
- Store ==> States
- Action ==> ButtonClick
- Reducer ==> Update state
- Provider ==> Injuct to React

-- useSelector ==> Give access to the state variables inside reducer
-- useDispatch ==> Give access to the actions inside reducer