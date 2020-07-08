import React from 'react'
import zonalMapData from '../metadatas/zonalMapData'
import { defaultColor, getRandomColor } from '../helpers/color'
import { ZoneMapDataInteface } from '../metadatas/interfaces'

interface AcceptableProps{
  onMapClick? ( clickLocation : ZoneMapDataInteface ) : any;
  randomSectorColor: boolean;
  sectorClassName: string;
  containerClassName?: string;
  color: string | null | undefined;
  hoverColor: string;
  provinceColor: string;
  stroke: string;
  strokeWidth : string;
}

export default function ZonalMap({
  onMapClick,
  randomSectorColor,
  sectorClassName,
  containerClassName,
  color,
  hoverColor,
  stroke,
  strokeWidth
}:AcceptableProps) {
  
  return (
    <div style={{ maxWidth: '100%' }} className={containerClassName || ''}>
      <svg viewBox='0 0 799.861 460.414'>
        <g transform='translate(-0.251 6.456)'>
          {zonalMapData.map((item, index) => {
            let pathColor = defaultColor
            if (color) pathColor = color
            if (randomSectorColor) pathColor = getRandomColor()

            return (
              <path
                className={sectorClassName || ''}
                style={{
                  cursor: 'pointer',
                  fill: pathColor,
                  position: 'relative'
                }}
                transform={item.code === 'MA' ? 'translate(597 306.286)' : ''}
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
        </g>
      </svg>
    </div>
  )
}
