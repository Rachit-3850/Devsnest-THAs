import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Black from "./components/black";
const data=  [
	{
		title: 'Pizza',
		calorie: '56',
	},
	{
		title: 'Burger',
		calorie: '60',
	},
	{
		title: 'Dal',
		calorie: '89',
	},
	{
		title: 'Egg',
		calorie: '120',
	},
	{
		title: 'Fried Rice',
		calorie: '40',
	},
	{
		title: 'Dosa',
		calorie: '100',
	},
	{
		title: 'Chowmein',
		calorie: '90',
	},
];
function App(props) {
  const [push,setPush] = useState(data);

  console.log(push);

  const Delete = index => {
    const newData = push.filter((val,idx) => idx !== index);
    setPush(newData);
  }
  return (
  <div className="App">
      <div className="components">
          {
            push.map(({ title, calorie}, idx) => (
              <Black key={idx}
                    title={title}
                    calorie={calorie}
                    index={idx}
                    Delete={Delete}
              />
            ))
          }
      </div>
      
  </div>
  );
}
export default App
