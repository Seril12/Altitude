import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
function formatted(totalseconds){
    const hours = Math.floor(totalseconds / 3600);
    const minutes = Math.floor((totalseconds % 3600) / 60);
    const seconds = totalseconds % 60;
    return `${hours} : ${minutes} : ${seconds}`;
}
const data =[
    {time:0, altitude: 0},
    {time:1800, altitude: 30},
    {time:3600, altitude: 10}, 
    {time: 5400, altitude: 22},
    {time: 7200, altitude: 15},
];
const latestPoint = data.length > 0 ? data[data.length - 1] : null;
function Graph(){
    return(
               <div className = "altitude">
                
            <LineChart
            width ={500}
            height ={300}
            data = {data}
            margin = {{top: 5, right: 10, left: 0, bottom: 5}}
            style={{backgroundColor: "black" , borderRadius: "10px", padding: "20px"}}
            >
             <Line
             type="monotone"
             dataKey="altitude"
             stroke ="red"
             strokeWidth={3}            
             />   
             <CartesianGrid stroke ="#444444"/>
             <XAxis
                dataKey="time"
                tickFormatter={formatted}
                stroke="#CCCCCC"
                label = {{value: "Time (HH : MM : SS)",fill:'#0033A0',fontSize:'25px', position: "Bottom", offset: 20 ,dy:30}}
                style={{fill: "#FFFFFF" ,
                    fontSize: '14px',
                    fontWeight: 'bold',
                    fontFamily: 'Arial',
                    textAnchor: 'middle',
                }}
             />
             <YAxis
             stroke="#CCCCCC"
                label = {{value: "Altitude (meters)", fill :'#0033A0',fontSize:'25px', angle: -90, position: "insideLeft", offset: 15 , dy:40}}
                style ={{fill: "#FFFFFF",
                    fontSize: '14px',
                    fontWeight: 'bold',
                    fontFamily: 'Arial', 
                    textAnchor: 'middle',
                }}
             />
             <Tooltip className="Tooltip"
             labelFormatter={formatted}
             contentStyle={{backgroundColor: "white", border : "none" ,}}
             />
            </LineChart>
                  {latestPoint && (
        <div
          style={{
            color: "red",
            fontSize: "15spx",
            fontWeight: "bold",
            marginTop: "10px",
            textAlign: "center"
          }}
        >
           Altitude: {latestPoint.altitude.toFixed(2)}m
        </div>
      )}
        </div>
    );
}
export default Graph;