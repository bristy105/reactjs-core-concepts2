import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  // const products=[{name:'laptop',price:75000},
  // {name:'tablet',price:5000},
  // {name:'watch',price:5300},
  // {name:'phone',price:50000}]

  //useEffect
  return (
    <div className="App">
   
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

function User(props){
  console.log(props)
  return(
    <div style={{border:'2px solid red', margin:'20px'}}>
      <h3>{props.name}
      </h3>
      <h4>{props.email}</h4>
    </div>
  )
}
function ExternalUsers(){
  const [users,setUsers]=useState([]);
  // useEffect(()={} ,[])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data))
  },[])
  return (
    <div>
      <h1>External users</h1>
      <p>{users.length}</p>
      {
        users.map(user=> <User name={user.name} email={user.email}></User>
          )
      }
    </div>
  )

}

function Counter(){
  const [count,setCount]=useState(5);
  const increaseCount=()=>{ setCount(count+1); }
  const decreaseCount=()=>{ setCount(count-1); }
  
  return(<div>

    <h1>Count:{count}</h1>
    <button onClick={increaseCount}>Add</button>
    <button onClick={decreaseCount}>Minus</button>
  </div>
    )
}

function Products(props){
  return(
  <div className='product'>
    <h3>Name: {props.name}</h3>
    <p>Price:{props.price}</p>

  </div>
  )
}
export default App;
