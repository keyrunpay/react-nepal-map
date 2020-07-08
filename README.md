# react-nepal-map

> React component for Nepal Map

[![NPM](https://img.shields.io/npm/v/react-nepal-map.svg)](https://www.npmjs.com/package/react-nepal-map) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-nepal-map
```

## Usage

```jsx
import React from 'react'
import { ProvinceMap, ZonalMap, DistrictMap } from 'react-nepal-map'

const App = () => {
  return (
    <div>
      <ProvinceMap
        hoverColor='red'
        stroke='#000'
        provinceColor=['red', 'green', 'blue']
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
```

## License

MIT © [keyrunpay](https://github.com/keyrunpay)
