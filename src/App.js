import React, { useEffect, useState } from 'react'
import Listener from './Listener'
import Emitter from './Emitter'
import { useEvent } from './useEvent'

const App = () => {
  
  const [data, setData] = useState(true);

  useEvent("event_new", (payload) => {
    setData(payload)
  })

  return (
    <div>
      <Emitter/>
      <button onClick={()=> setData((_data) => !_data)}>Unmount</button>
      App - {JSON.stringify(data)}
      {
        data ?
          <Listener/>
        :
          null
      }
    </div>
  )
}

export default App