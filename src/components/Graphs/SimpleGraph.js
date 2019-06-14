import React, {Component} from 'react';
// import {HighchartsChart,Chart,Title,Tooltip,Subtitle,Legend,XAxis,YAxis,AreaSeries,Annotation,plotOptions}from 'highcharts';
// import Highcharts from 'highcharts/highstock';
import ReactHighcharts from'react-highcharts';

var config = {
    chart: {
      polar: true
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    series: [{
        type:"pie",
      data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
    }]
  };
class SimpleGraph extends Component{
  
    
    render(){
        
          
        return(
            <div>
                <ReactHighcharts config={config} ref="chart"></ReactHighcharts>;
            </div>
        )
    }
}

export default SimpleGraph;