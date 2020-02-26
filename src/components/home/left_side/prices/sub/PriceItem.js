import React from 'react'

export const PriceItem = () => {
  const rowHeight = '1.599375rem'
  const columnFactor= '-2'
  const columnFactor1= '0'
  const columnFactor2= '-1'

  const tdStyle={
    display:'inline-block', 
    position:'relative', 
    zIndex:'800',
    fontWeight:'600',
    top: `calc(${columnFactor}* ${rowHeight})`
  }

  return (
    <tr
      style={{
        height: `calc(1* ${rowHeight})`,
        position: "relative",
        top: `calc(0* ${rowHeight})`
      }}
    >
      <span
        className='price-item-background1'
        style={{
          display: "block",
          position: "relative",
          top: `calc(${columnFactor1}* ${rowHeight})`,
          width: "40%",
          height: `calc(1* ${rowHeight})`,
          backgroundColor: "red",
          zIndex: "0",
          opacity: "50%"
        }}
      ></span>
      <span
        className='price-item-background2'
        style={{
          display: "block",
          position: "relative",
          top: `calc(${columnFactor2}* ${rowHeight})`,
          left: "40%",
          width: "30%",
          height: `calc(1* ${rowHeight})`,
          backgroundColor: "red",
          zIndex: "0",
          opacity: "20%",
          MozOpacity: "20%"
        }}
      ></span>
      {/* <span
        className="price-item-background1"
        style={{
          display:'block',
          position:'relative',
          top:'1.599375rem',
          left:'40%',
          width:'40%',
          height:'1.599375rem',
          backgroundColor:'red',
          // backgroundPosition:'0 30%',
          // zIndex:'150',
          opacity:'20%'
        }}
      ></span> */}
      <td className='text-sm-3 ' style={tdStyle}>
        0.0012
      </td>
      <td className='text-sm-3 ' style={tdStyle}>
        4000
      </td>
      <td className='text-sm-3 ' style={tdStyle}>
        40.111
      </td>
    </tr>
  );
}
