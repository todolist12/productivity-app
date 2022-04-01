import React from 'react'

const NotFound = () => {
  return (
    <div className = "flex h-screen bg-red-500 items-center justify-center">
        <div className = " flex bg-white h-80 w-96 rounded items-center justify-center flex-col">
            <div className = "text-5xl font-bold">
                Error 404
            </div>
            <div>
                Page not found
            </div>
        </div>
    </div>
  )
}

export default NotFound