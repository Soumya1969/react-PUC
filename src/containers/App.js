import React,{useState, useEffect} from 'react';
import CardList from '../component/CardList';
import SearchBox from '../component/SearchBox';
import Scroll from '../component/Scroll';

import './App.css'


function App() {
   
    const [robots , setRobots] = useState([])
    const [searchField , setSerachField] = useState('')
    const [count, setCount] = useState(0)

    

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => response.json())
        .then(users => {setRobots(users )});
        console.log(count)
    },[count]); //only run if count changes

    const onSearchChange = (event)=> {
        setSerachField(event.target.value)    
    }
    {
        
        const filterRobots =robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return !robots.length ?
            <h2>Loading</h2> :
            (
                <div className='tc'>
                    <h2 className='f1'> RoboFriends</h2>
                    <button onClick={() =>setCount(count+1)}>click me!</button>
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                    <CardList robots={filterRobots} />
                    
                    </Scroll>
                    
                </div>
            );
     }
}

export default App;