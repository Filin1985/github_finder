import { createContext, useReducer } from 'react'
import gitHubReducer from './GitHubReducer'

const GitHubContext = createContext()

export const GitHubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  }

  const [state, dispatch] = useReducer(gitHubReducer, initialState)

  return (
    <GitHubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GitHubContext.Provider>
  )
}

export default GitHubContext
