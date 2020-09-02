import React, { useState, useEffect } from 'react';
import './App.scss';
import Member from '../src/components/member/member';
import {Container, Row} from 'react-bootstrap';
import Header from '../src/components/header/header';
import memberData from '../src/common/members.json';
const App = () => {
  const [memberDetail, setMemberDetail ]  = useState<any>([]);
  useEffect(() => {
    setTimeout(() => {
      console.log('memberData = ',memberData);
      if(memberData.ok) {
        setMemberDetail(memberData.members);
      }
      
    }, 2000);
    
  },[])
  const openModal = (openModal: any) => {
    console.log('openModal = ',openModal);
  }
  return (
    <>
     <Header></Header>
      <Container >
        <div className="member">
        {
         memberDetail.map((member:any) => <Member key={member.id} memberData = {member} openModal= {() => openModal(member)}></Member>)
       }
        </div>
       
      
      </Container>
      </>
  );
}

export default App;
