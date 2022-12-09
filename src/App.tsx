import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Form from './components/Form/Form';
import GenerateAnswer from './components/GenerateAnswer/GenerateAnswer';
import ListOptions from './components/ListOptions/ListOptions';
import { useAppSelector } from './hooks/redux';
import { setupStore } from './store/store';

function App() {
  
  const {options} = useAppSelector(state => state.optionReducer)
  const {question} = useAppSelector(state => state.questionReducer)

  return (
    
      <div className="App">
        <div className="container">
          <Form />

          <div className='wrap'>
            {options.length > 0 && (
              <div>
                <h3>Варианты:</h3>
                <ListOptions options={options}/>
              </div>
            )}
            
            
            {question && <GenerateAnswer />}
          </div>
          
          
        </div>
      </div>
    
  );
}

export default App;
