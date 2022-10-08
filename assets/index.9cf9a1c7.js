import{u as c,H as n}from"./index.5524c212.js";import{i}from"./install.9be71b46.js";import{_ as l,r as o,o as m,c as p,a as s}from"./index.1af21936.js";c(i);const h=`
<template>
  <HChart :options="options" :events="chartEvents"></HChart>
</template>

<script>
  import 'echarts/lib/chart/bar'
  import { HChart } from '@yyr1994/h-charts'
  const options = {
    tooltip: {
      trigger: 'axis',
      show: true,
    },
    legend: {
      show: true,
      icon: 'circle',
      top: 20,
      textStyle: {
        fontSize: 12,
        color: '#c8c8c8'
      },
    },
    grid: {},
    xAxis: {
      data: ['A', 'B', 'C', 'D', 'E', 'F', 'G']
    },
    yAxis: {
      axisLine: {
        show: true,
      },
    },
    series: [
      {
        name: 'A',
        type: 'bar',
        smooth: true,
        symbol: 'circle',
        symbolSize: 13,
        data: [5, 10, 41, 35, 51, 49, 62]
      },
      {
        name: 'B',
        type: 'bar',
        smooth: true,
        symbol: 'circle',
        symbolSize: 13,
        data: [50, 20, 35, 20, 75, 30, 60]
      },
      {
        name: 'C',
        type: 'bar',
        smooth: true,
        symbol: 'circle',
        symbolSize: 13,
        data: [15, 30, 15, -42, 55, 20, 40]
      },
      {
        name: 'D',
        type: 'bar',
        smooth: true,
        symbol: 'circle',
        symbolSize: 13,
        data: [5, 60, 20, 45, 15, 55, 25]
      },
    ]
  };

  export default {
    components: {
      HChart
    },
    data () {
      return {
        options,
        chartEvents: {
          click: (...args) => {
            console.log(args)
          },
          legendselectchanged: (...args) => { // [params, Echarts]
            console.log(args, 'legendselectchanged')
          },
        }
      }
    }
  }
<\/script>
`,d={tooltip:{trigger:"axis",show:!0},legend:{show:!0,icon:"circle",top:20,textStyle:{fontSize:12,color:"#c8c8c8"}},grid:{},xAxis:{data:["A","B","C","D","E","F","G"]},yAxis:{axisLine:{show:!0}},series:[{name:"A",type:"bar",smooth:!0,symbol:"circle",symbolSize:13,data:[5,10,41,35,51,49,62]},{name:"B",type:"bar",smooth:!0,symbol:"circle",symbolSize:13,data:[50,20,35,20,75,30,60]},{name:"C",type:"bar",smooth:!0,symbol:"circle",symbolSize:13,data:[15,30,15,-42,55,20,40]},{name:"D",type:"bar",smooth:!0,symbol:"circle",symbolSize:13,data:[5,60,20,45,15,55,25]}]},y={name:"Chart",components:{HChart:n},data(){return{optionsStr:h,options:d,chartEvents:{click:(...e)=>{console.log(e)},legendselectchanged:(...e)=>{console.log(e,"legendselectchanged")}}}}},b={class:"home"};function u(e,g,x,_,t,S){const r=o("HChart"),a=o("Prism");return m(),p("div",b,[s(r,{options:t.options,events:t.chartEvents},null,8,["options","events"]),s(a,{languages:"html",isLineNumber:"",code:t.optionsStr},null,8,["code"])])}const v=l(y,[["render",u]]);export{v as default};
