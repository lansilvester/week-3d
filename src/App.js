import { useState } from 'react';
import './App.css';
import useInput from './hooks/useInput';

function App() {
  
  // This is duplicate ⛔
  // const [title, setTitle] = useState('');
  // const handleTitleChange = event => {
  //   setTitle(event.target.value);
  // }
  
  // const [description, setDescription] = useState('')
  // const handleDescriptionChange = event =>{
    //   setDescription(event.target.value);
    // }
       
  const [title, handleTitleChange] = useInput();
  const [description, handleDescriptionChange] = useInput();
  
  return (
    <div>
      <h1>Version 2 of My App</h1>
      
      <input
      placeholder='title here'
        value={title}
        onChange={handleTitleChange} />
      <input
      placeholder='description here'
        value={description}
        onChange={handleDescriptionChange}/>
      <button onClick={() =>{
        console.log('title:', title)
        console.log('description:', description)
      }}>Show me the data</button>
    </div>
  );
}

export default App;
