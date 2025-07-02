import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoItem from './components/TodoItem';
import './styles.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    axios.get('/api/todos').then(res => setTodos(res.data));
  }, []);

  const addTodo = async () => {
    const res = await axios.post('/api/todos', { text });
    setTodos([...todos, res.data]);
    setText('');
  };

  const deleteTodo = async (id) => {
    await axios.delete(\`/api/todos/\${id}\`);
    setTodos(todos.filter(todo => todo._id !== id));
  };

  const toggleTodo = async (id) => {
    const res = await axios.put(\`/api/todos/\${id}/toggle\`);
    setTodos(todos.map(todo => todo._id === id ? res.data : todo));
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <input value={text} onChange={e => setText(e.target.value)} placeholder="New Task..." />
      <button onClick={addTodo}>Add</button>
      <div>
        {todos.map(todo => (
          <TodoItem key={todo._id} todo={todo} onDelete={deleteTodo} onToggle={toggleTodo} />
        ))}
      </div>
    </div>
  );
}

export default App;
