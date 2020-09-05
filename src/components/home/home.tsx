import React, { useCallback, useEffect, useState } from 'react';
import Member from '../member/member';
import {Container} from 'react-bootstrap';
import Header from '../header/header';
import { modalDataDetails } from '../../common/common.constant';
import memberData from '../../common/members.json';
import Modal from '../modal/modal'
import './home.scss'

const Home = () => {
    const [memberDetail, setMemberDetail ]  = useState<any>([]);
    const [modalData, setmodalData]  = useState<any>({...modalDataDetails});
  
    useEffect(() => {
      // fetch('https://drive.google.com/open?id=1xZa3UoXZ3uj2j0Q7653iBp1NrT0gKj0Y').then(reponse => console.log(reponse.json()));
      setTimeout(() => {
        if(memberData.ok) {
          setMemberDetail(memberData.members);
        }
        
      }, 2000);
      
    },[])
    const openModal = useCallback((openModal: any) => {
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

export default Home;