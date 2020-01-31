import React from 'react';
import { useState, useEffect } from 'react';
import { Container } from 'reactstrap';
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
    <div>
        <Form addMember = {addMemeber}/>
        <MemberCard member = {teamMembers}/>
    </div>
  );
}

export default App;
