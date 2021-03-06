import React from 'react'

// My context
const MyContext = React.createContext()

// Context reducer
function contextReducer(state, action) {
  switch (action.type) {
    case 'merge': {
      return {
        ...state,
        ...action.payload,
      }
    }
    case 'reset': {
      return {}
    }
    case 'set': {
      return action.payload
    }
    default: {
      return state
    }
  }
}

// Use context hook
export const useMyContext = () => {
  const context = React.useContext(MyContext)
  if (context === undefined) {
    throw new Error('UseContext must be used within the Provider')
  }
  return context
}

// Provider
const MyContextProvider = ({ children, defaultState }) => {
  const [state, dispatch] = React.useReducer(contextReducer, defaultState)

  const setContext = (payload) => {
    dispatch({ type: 'merge', payload })
  }

  const resetContext = () => {
    dispatch({ type: 'reset', payload: {} })
  }

  const overWriteContext = (payload) => {
    dispatch({ type: 'set', payload })
  }

  return (
    <MyContext.Provider
      value={{ ...state, setContext, resetContext, overWriteContext }}
    >
      {children}
    </MyContext.Provider>
  )
}

export default MyContextProvider
