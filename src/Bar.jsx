import React from 'react';
import {Bar} from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','Augest'],
  datasets: [
    {
      label: 'My First dataset leader',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40,23]
    },
    {
        label: 'My second dataset leader',
        backgroundColor: 'rgba(200,199,130,0.5)',
        borderColor: 'rgba(200,199,130,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(200,199,130,0.4)',
        hoverBorderColor: 'rgba(200,199,130,1)',
        data: [45, 130, 30, 65, 19, 84, 93,-45]
      }
  ]
};
function BarChart(){    
    return (
      <div className="bar">
        <h2>Bar Example (custom size)</h2>
        <Bar
          data={data}
          width={200}
          height={50}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
}


export default BarChart;