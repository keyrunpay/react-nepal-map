import React from 'react'
import provinceMapData from '../metadatas/provinceMapData'
import {
  getRandomColor,
  defaultColor,
  defaultProvinceColor
} from '../helpers/color'

export default function ProvinceMap({
  onMapClick,
  randomSectorColor,
  sectorClassName,
  containerClassName,
  color,
  hoverColor,
  provinceColor,
  stroke,
  strokeWidth
}) {
  const handleMapClick = (item) => {
    if (onMapClick) {
      onMapClick({ name: item.name, zip: item.zip })
    }
  }

  return (
    <div style={{ maxWidth: '100%' }} className={containerClassName || ''}>
      <svg viewBox='0 0 1029.19 522.34'>
        {provinceMapData.map((item, index) => {
          const pathColorList = provinceColor || defaultProvinceColor
          let pathColor =
            pathColorList.length > index
              ? pathColorList[index]
              : defaultProvinceColor[index]
          if (color) pathColor = color
          if (randomSectorColor) pathColor = getRandomColor()

          return (
            <path
              className={sectorClassName || ''}
              style={{ cursor: 'pointer', fill: pathColor }}
              key={index}
              stroke={stroke || '#000'}
              strokeWidth={strokeWidth || '1px'}
              d={item.shape}
              onMouseOver={(event) => {
                event.target.style.fill = hoverColor || defaultColor
              }}
              onClick={() => handleMapClick(item)}
              onMouseOut={(event) => {
                event.target.style.fill = pathColor
              }}
            ></path>
          )
        })}
      </svg>
    </div>
  )
}
