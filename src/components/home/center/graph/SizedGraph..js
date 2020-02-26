import React from 'react'
// import ReactDOM from 'react-dom'
import { AutoSizer } from 'react-virtualized';
import 'react-virtualized/styles.css'
import { Graph } from './Graph';
// import { TestComponent } from './TestComponent';



export function SizedGraph  ()  {
  
  return (
    <div
      id='sized-graph'
      style={{
        backgroundColor: '#222',
        display: "relative",
        margin: "0",
        padding: "0",
        width: "calc(100%)",
        // height: "100%",
        // minHeight: "350px",
        borderRadius:'1rem'
      }}
    >
      <AutoSizer 
        id='auto-sizer-id' 
        className='m-0 p-3'
        style={{
          padding:'12rem'
          // backgroundColor:'#222'
        }}
      >
        {({ height, width }) => <Graph width={width-32} height={height-32} />}
        {/* {({ height, width }) => <div style={{width, height, backgroundColor:'red'}}  />} */}
      </AutoSizer>
    </div>
  );
}
