import React from 'react'
import ReactDOM from 'react-dom'
import { AutoSizer } from 'react-virtualized';
import 'react-virtualized/styles.css'
import { Graph } from './Graph';
import { TestComponent } from './TestComponent';



export function SizedGraph  ()  {
  const text = 'HELLOOO223'
  
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
        // flex: '1 1 auto'
      }}
    >
      <AutoSizer>
        {({ height, width }) => (
          <Graph width={width} height={height} text={text} />
          // <TestComponent width={width} height={height} />
          //   <div
          //   style={{
          //     margin: "0",
          //     padding: "0",
          //     width: "100%",
          //     height: "100%"
          //   }}
          //   >
          //   <Graph width={width} height={height}  />
          //     {/* {`width: ${width}`}
          //     {`height: ${height}`} */}
          //   </div>
          //
        )}
      </AutoSizer>
    </div>
  );
}
