import React from 'react'
import provinceMapData from '../metadatas/provinceMapData'
import {
  getRandomColor,
  defaultColor,
  defaultProvinceColor
} from '../helpers/color'
import { ProvinceMapDataInterface } from '../metadatas/interfaces'

interface AcceptableProps{
  onMapClick? ( clickLocation : ProvinceMapDataInterface ) : any;
  randomSectorColor: boolean;
  sectorClassName: string;
  containerClassName?: string;
  color: string | null | undefined;
  hoverColor: string;
  provinceColor: string;
  stroke: string;
  strokeWidth : string;
}

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
}:AcceptableProps) {
 

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
                const x = event.target as HTMLElement 
                  x.style.fill = hoverColor || defaultColor
              }}
              onClick={() => onMapClick(item)}
              onMouseOut={(event) => {
                const x = event.target as HTMLElement 
                  x.style.fill = pathColor
              }}
            />
          )
        })}
      </svg>
    </div>
  )
}
