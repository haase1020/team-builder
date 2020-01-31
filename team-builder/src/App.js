import React from 'react';
import { useState } from 'react';
// import { Container } from 'reactstrap';
import './App.css';

function App() {
  const [teamMembers, setTeamMembers] = useState([
    {
    id: 1,
    name: 'Mandi Haase',
    email: 'mandihaase@gmail.com',
    role:'seeker'
    }
  ])
  const addMember = person => {
    const newMember = {
      id: Date.now(),
      name: person.name,
      email: person.email,
      role: person.role
    };
    setTeamMembers([...teamMembers, newMember])
  };

  return (
    <div className="App">
        <h1>List of Team Members</h1>
        <Form addMember = {addMember}/>
        <MemberCard member = {teamMembers}/>
    </div>
  );
}

export default App;
