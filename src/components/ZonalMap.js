import React from 'react'
import zonalMapData from '../metadatas/zonalMapData'
import { defaultColor, getRandomColor } from '../helpers/color'

export default function ZonalMap({
  onMapClick,
  randomSectorColor,
  sectorClassName,
  containerClassName,
  color,
  hoverColor,
  stroke,
  strokeWidth
}) {
  const handleMapClick = (item) => {
    if (onMapClick) {
      onMapClick({ name: item.name, code: item.code })
    }
  }
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
