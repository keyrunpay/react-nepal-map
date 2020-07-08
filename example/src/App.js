import React from 'react'
import { ProvinceMap, ZonalMap, DistrictMap } from 'react-nepal-map'

const App = () => {
  return (
    <div>
      <ProvinceMap
        hoverColor='red'
        stroke='#000'
        strokeWidth={1}
        onMapClick={(val) => console.log(val)}
      />
      <ZonalMap
        hoverColor='red'
        onMapClick={(val) => console.log(val)}
        stroke='#000'
        strokeWidth={1}
      />
      <DistrictMap
        hoverColor='red'
        stroke='#000'
        strokeWidth={1}
        onMapClick={(val) => console.log(val)}
      />
    </div>
  )
}

export default App
