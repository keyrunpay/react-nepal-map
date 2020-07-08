import React from 'react'
import { ProvinceMap, ZonalMap, DistrictMap } from 'react-nepal-map'

const App = () => {
  return (
    <div>
      <ProvinceMap
        hoverColor='red'
        stroke='#000'
        strokeWidth={1}
        onMapClick={(val) => alert(JSON.stringify(val))}
      />
      <ZonalMap
        hoverColor='red'
        onMapClick={(val) => alert(JSON.stringify(val))}
        stroke='#000'
        strokeWidth={1}
      />
      <DistrictMap
        hoverColor='red'
        stroke='#000'
        strokeWidth={1}
        onMapClick={(val) => alert(JSON.stringify(val))}
      />
    </div>
  )
}

export default App
