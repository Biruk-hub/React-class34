import React from 'react'
import FavoriteProvider from './Favorite'

const AppProvider = ({children}) => {
  return (
    <FavoriteProvider>
        {children}
    </FavoriteProvider>
  )
}

export default AppProvider