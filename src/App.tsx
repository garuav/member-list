import React, { useState, useEffect, useCallback } from 'react';
import './App.scss';
import Member from '../src/components/member/member';
import {Container} from 'react-bootstrap';
import Header from '../src/components/header/header';
import memberData from '../src/common/members.json';
import Modal from '../src/components/modal/modal';
import {modalDataDetails} from '../src/common/common.constant'
const App = () => {
  const [memberDetail, setMemberDetail ]  = useState<any>([]);
  const [modalData, setmodalData]  = useState<any>({...modalDataDetails});

  useEffect(() => {
    // fetch('https://drive.google.com/open?id=1xZa3UoXZ3uj2j0Q7653iBp1NrT0gKj0Y').then(reponse => console.log(reponse.json()));
    setTimeout(() => {
      console.log('memberData = ',memberData);
      if(memberData.ok) {
        setMemberDetail(memberData.members);
      }
      
    }, 2000);
    
  },[])
  const openModal = useCallback((openModal: any) => {
    console.log('openModal = ',openModal);
    const props = {
      show: true , modalData: {...openModal}, calenderView: false
    }
    setmodalData({...props});
  }, [])

  const closeModal =useCallback( () => {
    const props = {
      show: false,
      modalData: {},
      calenderView: false
    }
    setmodalData({...props})
  }, [])
  const calenderViewHandler = () => {
    const props = {...modalData};
    props.calenderView = !props.calenderView;
    setmodalData({...props})
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
       {
        modalData.show ? 
         <Modal  {...modalData} handleClose = {() => closeModal()} calenderViewHandler = {() => calenderViewHandler()}></Modal>
          : null
       }
      
      </Container>
      </>
  );
}

export default App;
