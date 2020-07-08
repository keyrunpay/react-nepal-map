import React from 'react'
import districtMapData from '../metadatas/districtMapData'
import {
  defaultColor,
  getRandomColor,
  defaultProvinceColor
} from '../helpers/color'
import { DistrictMapDataInteface } from '../metadatas/interfaces'

interface AcceptableProps{
  onMapClick? ( clickLocation : DistrictMapDataInteface ) : any;
  randomSectorColor: boolean;
  sectorClassName: string;
  containerClassName?: string;
  color: string | null | undefined;
  hoverColor: string;
  provinceColor: string;
  stroke: string;
  strokeWidth : string;
}

export default function DistrictMap({
  onMapClick,
  randomSectorColor,
  sectorClassName="",
  containerClassName = "",
  color,
  hoverColor,
  provinceColor,
  stroke = "#000",
  strokeWidth = "1px"
} : AcceptableProps) {
  

  return (
    <div style={{ maxWidth: '100%' }} className={containerClassName}>
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
                className={sectorClassName}
                style={{ cursor: 'pointer', fill: pathColor }}
                key={index}
                stroke={stroke}
                strokeWidth={strokeWidth}
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
        </g>
      </svg>
    </div>
  )
}
