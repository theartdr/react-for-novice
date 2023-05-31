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

  const Title = styled.h1`
    color: ${(props) => props.theme.textColor};`;

  const Wrapper = styled.div`
  backgroundColor: ${(props) => props.theme.backgroundColor}`;
    
  return (
    <div className="App">
      <Wrapper>
        <Title>To Do List</Title>
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
      </Wrapper>
    </div>
  );
};
