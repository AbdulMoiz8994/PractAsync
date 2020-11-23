import React from 'react';
import {Pie} from 'react-chartjs-2';

const data = {
	labels: [
		'Red',
		'Blue',
        'Yellow',
        'Green'
	],
	datasets: [{
		data: [200, 50, 100,10],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
        '#FFCE56',
        'green'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
        '#FFCE56',
		]
	}]
};

function PieChart(){
    return (
      <div className="pie">
        <h2>Pie Example</h2>
        <Pie data={data} height={50}/>
      </div>
    );
}

export default PieChart;