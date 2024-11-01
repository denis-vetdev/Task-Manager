import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState ([]);
  const [filter, setFilter] = useState ('todas');
  const [newTask, setNewTask] = useState ('');
  
  const addTask = () => {
    if(newTask) {
      setTasks([...tasks, {name: newTask, completed: false}]);
      setNewTask('');
    }
  }

  const toggleCompleted = index => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  }

  const filteredTasks = tasks.filter (task => {
    if(filter === 'concluídas') return task.completed;
    if(filter === 'pendentes') return !task.completed;
    return true;
  });

  return (
    <div>
      <h1> Gerenciador de Tarefas </h1>
      <input value={newTask} onChange={e => setNewTask (e.target.value)}/>
      <button onClick={addTask}> Adicionar tarefa </button>
      <div>
        <h2> Filtros:</h2>
        <button onClick={() => setFilter('todas')}> Todas </button>
        <button onClick={() => setFilter('concluídas')}> Concluídas </button>
        <button onClick={() => setFilter('pendentes')}> Pendentes </button> 
      </div>
      <ul>
        {filteredTasks.map((task, index) => (
          <li key={index}>
            <input type="checkbox" class="checkbox" checked={task.completed} onChange={() => toggleCompleted(index)}/>
            {task.name}
          </li>
        ))}
      </ul> 
    </div>  
  );
};

export default App;
