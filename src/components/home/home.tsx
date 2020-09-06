import React, { useCallback, useEffect, useState } from 'react';
import Member from '../member/member';
import {Container} from 'react-bootstrap';
import Header from '../header/header';
import { modalDataDetails } from '../../common/common.constant';
import Modal from '../modal/modal';
import {getMemberDetails} from '../../common/common.service';
import './home.scss'

const Home = () => {
    const [memberDetail, setMemberDetail ]  = useState<any>([]);
    const [modalData, setmodalData]  = useState<any>({...modalDataDetails});
  
    useEffect(() => {
        
      getMemberDetails().then(response => {
          if(response.status) {
            setMemberDetail(response.data || []);
          }
      }).catch(error => {
        setMemberDetail( []);
      })
     
      
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