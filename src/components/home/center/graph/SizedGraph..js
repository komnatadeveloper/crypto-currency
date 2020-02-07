import React from 'react'
// import ReactDOM from 'react-dom'
import { AutoSizer } from 'react-virtualized';
import 'react-virtualized/styles.css'
import { Graph } from './Graph';
// import { TestComponent } from './TestComponent';



export function SizedGraph  ()  {
  
  return (
    <div
      id='TESTTT'
      style={{
        display: "relative",
        margin: "0",
        padding: "0",
        width: "100%",
        height: "100%",
        minHeight: "350px"
      }}
    >
      <AutoSizer>
        {({ height, width }) => (
          <Graph width={width} height={height} />
        )}
      </AutoSizer>
    </div>
  );
}
