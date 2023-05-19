import { useState } from 'react';
import './App.css';
import styled from 'styled-components'
const Input = styled.input.attrs({ required: true })`
background-color: tomato;
`;
export default function App() {
  const [todo, setTodo] = useState('');
  const [lists, setLists] = useState([]);
  let nextId = 0;

  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do List</h1>
        <Input 
          value={todo}
          onChange={e=>setTodo(e.target.value)}
          placeholder='Things to do'
        />
        <button onClick={() => {
          setLists([
            { id: nextId++, todo: todo },
            ...lists,
          ]);
        }}>Add</button>
        <ul>
          {lists.map(list => (
            <li key={list.id}>{list.todo}{''}
            <button onClick={() => {
              setLists(
                lists.filter(a =>
                  a.id !== list.id
                )
              )
            }}>
              Delete
            </button>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
};
