import React from 'react'
import districtMapData from '../metadatas/districtMapData'
import {
  defaultColor,
  getRandomColor,
  defaultProvinceColor
} from '../helpers/color'

export default function DistrictMap({
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
      onMapClick({ name: item.name, zip: item.zip, province: item.province })
    }
  }

  return (
    <div style={{ maxWidth: '100%' }} className={containerClassName || ''}>
      <svg viewBox='0 0 1026.077 519.136'>
        <g transform='translate(-52.379 -15.971)'>
          {districtMapData.map((item, index) => {
            const pathColorList = provinceColor || defaultProvinceColor
            let pathColor =
              pathColorList.length > item.province - 1
                ? pathColorList[item.province - 1]
                : defaultProvinceColor[item.province - 1]
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
        </g>
      </svg>
    </div>
  )
}
