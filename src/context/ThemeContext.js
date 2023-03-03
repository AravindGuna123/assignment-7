import React from 'react'

const ThemeContext = React.createContext({
  activeTheme: 'light',
  changeTheme: () => {},
  changeUsername: () => {},
  changePassword: () => {},
})

export default ThemeContext
