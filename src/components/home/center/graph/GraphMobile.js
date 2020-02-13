import React, { useEffect } from "react";
import { createChart } from "lightweight-charts";
import PropTypes from "prop-types";


export const GraphMobile = ({ width, height }) => {

  const containerId = "lightweight_chart_container"
  let chart = null;

  useEffect(() => {
    // Delete the existing graph if already exists
    let element = document.querySelector('.tv-lightweight-charts')
    if (element) {
      element.parentNode.removeChild(element)
    }

    chart = createChart(
      containerId,
      {
        width: width,
        height: height,
      },
      [width, height]
    );

    const lineSeries = chart.addLineSeries();

    const barSeries = chart.addBarSeries({
      thinBars: false
    });

    lineSeries.setData([
      { time: "2019-04-10", value: 60.01 },
      { time: "2019-04-11", value: 80.01 }
    ]);

    // set the data
    barSeries.setData([
      {
        time: "2019-04-10",
        open: 141.77,
        high: 170.39,
        low: 120.25,
        close: 145.72
      },
      {
        time: "2019-04-11",
        open: 145.72,
        high: 147.99,
        low: 100.11,
        close: 108.19
      },
      {
        time: "2019-04-12",
        open: 161.19,
        high: 192.99,
        low: 100.11,
        close: 173.19
      }
    ]);
  }, [width, height]);

  return <div id={containerId} className={"Light-weight-Chart"} />;
  return <div>Hello</div>;
}


GraphMobile.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};




// import React, {useEffect} from "react";
// import { createChart } from "lightweight-charts";


// export const Graph = ({width, height, text}) => {



//   const  containerId = "lightweight_chart_container"


//   let chart = null;

//   useEffect( () => {
//     console.log(width, height)
//     console.log(text)
//     chart = createChart(containerId, {
//       width: width+200,
//       height: height+200,
//     }, [width, height]);


//     const lineSeries = chart.addLineSeries();

//     lineSeries.setData([
//       { time: "2019-04-10", value: 60.01 },
//       { time: "2019-04-11", value: 80.01 }
//     ]);

//     const barSeries = chart.addBarSeries({
//       thinBars: false
//     });

//     // set the data
//     barSeries.setData([
//       {
//         time: "2019-04-10",
//         open: 141.77,
//         high: 170.39,
//         low: 120.25,
//         close: 145.72
//       },
//       {
//         time: "2019-04-11",
//         open: 145.72,
//         high: 147.99,
//         low: 100.11,
//         close: 108.19
//       }
//     ]);

//     chart.applyOptions({
//       autoScale: true
//     })

//     chart.resize(width, height)
//   }, [] )

//     return <div id={containerId} className={"LightweightChart"} />;

// }

















// import * as React from "react";
// import { createChart } from "lightweight-charts";

// export class Graph extends React.PureComponent {
//   static defaultProps = {
//     containerId: "lightweight_chart_container"
//   };

//   chart = null;

//   componentDidMount() {
//     const chart = createChart(this.props.containerId, {
//       width: 1000,
//       height: 600
//     });
//     this.chart = chart;

//     const lineSeries = chart.addLineSeries();

//     lineSeries.setData([
//       { time: "2019-04-10", value: 60.01 },
//       { time: "2019-04-11", value: 80.01 }
//     ]);

//     const barSeries = chart.addBarSeries({
//       thinBars: false
//     });

//     // set the data
//     barSeries.setData([
//       {
//         time: "2019-04-10",
//         open: 141.77,
//         high: 170.39,
//         low: 120.25,
//         close: 145.72
//       },
//       {
//         time: "2019-04-11",
//         open: 145.72,
//         high: 147.99,
//         low: 100.11,
//         close: 108.19
//       }
//     ]);
//   }

//   componentWillUnmount() {
//     if (this.chart !== null) {
//       this.chart.remove();
//       this.chart = null;
//     }
//   }

//   render() {
//     return <div id={this.props.containerId} className={"LightweightChart"} />;
//   }
// }






// import React from 'react'
// import { createChart} from 'lightweight-charts'

// export const Graph = () => {
//   const chart = createChart('candleGraph', {width: '100%', height: '100%'})
//   const lineSeries = chart.addLineSeries();
//   lineSeries.setData([
//     { time: "2019-04-11", value: 80.01 },
//     { time: "2019-04-12", value: 96.63 },
//     { time: "2019-04-13", value: 76.64 },
//     { time: "2019-04-14", value: 81.89 },
//     { time: "2019-04-15", value: 74.43 },
//     { time: "2019-04-16", value: 80.01 },
//     { time: "2019-04-17", value: 96.63 },
//     { time: "2019-04-18", value: 76.64 },
//     { time: "2019-04-19", value: 81.89 },
//     { time: "2019-04-20", value: 74.43 }
//   ]);

//   return <div id='candleGraph' className={"LightweightChart"}></div>;
// }

    // <div
    //   style={{
    //     minHeight:'12rem',
    //     backgroundColor:'#777'
    //   }}
    //   className='mb-1'
    // >
    //   <h4 className='text-warning text-center'>
    //     This is Graph
    //   </h4>
    //   {document.render(chart)}
    // </div>