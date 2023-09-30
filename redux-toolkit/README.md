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

### What is Redux?
Redux is a pattern and library used for managing and updating application states, using events called 'actions'. It has a centralized store which helps us in storing application state and make sure that the states are updated in a predictable fashion.

#### Redux is more useful when:

-- Solve prop Drilling
-- You have large amounts of application state that are needed in many places in the app
-- The app state is updated frequently over time
-- The logic to update that state may be complex
-- The app has a medium or large-sized codebase, and might be worked on by many people

### React-Redux
Redux can integrate with any UI framework, and is most frequently used with React. 

### Redux Toolkit
Redux Toolkit is recommended approach for writing Redux logic. It contains packages and functions that are essential for building a Redux app. Redux Toolkit builds in suggested best practices, simplifies most Redux tasks, prevents common mistakes, and makes it easier to write Redux applications.

### Redux Terms and Concepts
This is the basic idea behind Redux: a single centralized place to contain the global state in your application, and specific patterns to follow when updating that state to make the code predictable.
```Redux expects that all state updates are done immutably.```

#### actions
An action is a plain JavaScript object that has a type field. You can think of an action as an event that describes something that happened in the application.
The type field should be a string that gives this action a descriptive name, like "todos/todoAdded". We usually write that type string like "domain/eventName", where the first part is the feature or category that this action belongs to, and the second part is the specific thing that happened.

An action object can have other fields with additional information about what happened. By convention, we put that information in a field called payload.

eg: const addTodoAction = {
  type: 'todos/todoAdded',
  payload: 'Buy milk'
}

#### Reducers
A reducer is a function that receives the current state and an action object, decides how to update the state if necessary, and returns the new state: (state, action) => newState. You can think of a reducer as an event listener which handles events based on the received action (event) type.

Reducers must always follow some specific rules:

-- Only calculate the new state value based on the state and action arguments
-- Not allowed to modify the existing state. Instead, they must make immutable updates, by copying the existing state and making changes to the copied values.
-- Not do any asynchronous logic, calculate random values, or cause other "side effects"

#### Store
The current Redux application state lives in an object called the store .

The store is created by passing in a reducer, and has a method called 'getState' that returns the current state value

#### Dispatch
The Redux store has a method called dispatch. The only way to update the state is to call store.dispatch() and pass in an action object. The store will run its reducer function and save the new state value inside, and we can call getState() to retrieve the updated value

You can think of dispatching actions as "triggering an event" in the application. Something happened, and we want the store to know about it. Reducers act like event listeners, and when they hear an action they are interested in, they update the state in response.

#### Selectors
Selectors are functions that know how to extract specific pieces of information from a store state value. As an application grows bigger, this can help avoid repeating logic as different parts of the app need to read the same data:

#### [Redux application data flow](https://redux.js.org/tutorials/essentials/part-1-overview-concepts#redux-application-data-flow)

#### Thunks and Async Logic
##### Using Middleware to Enable Async Logic
By itself, a Redux store doesn't know anything about async logic. It only knows how to synchronously dispatch actions, update the state by calling the root reducer function, and notify the UI that something has changed. Any asynchronicity has to happen outside the store.