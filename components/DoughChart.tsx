"use client"
import React from 'react'
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend, Title)
const DoughChart = ({accounts}:DoughnutChartProps) => {
    const data = {
        datasets:[
            {
                label:'Banks',
                data:[12500,2500,3750],
                backgroundColor:['#0747b6','#2265d8','#2f91fa']
            }
        ],
        labels:['Bank 1','Bank 2','Bank 3']
    }
  return  <Doughnut data={data}
  options={{
    cutout: '60%',
    plugins:{
        legend:{
            display:false
        }
    }
  }} />
}

export default DoughChart