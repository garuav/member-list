import React from 'react';
import { Modal, Col, Row, Container } from 'react-bootstrap';
import ActiveHourTimline from '../active-hour-timeline/active-hours-timeline';
import moment from 'moment';
import './modal.scss';
const   {Calendar, momentLocalizer}  = require('react-big-calendar');

const localizer = momentLocalizer(moment);

const modal = (props: any) => {
    const myEventsList = props.modalData.activity_periods.map((item: any, index: number) => {
        const ms = moment(item.end_time,"MMM D YYYY h:mmA").diff(moment(item.start_time,"MMM D YYYY h:mm A"));
        const duration =  parseFloat(Math.floor(moment.duration(ms).asHours()) + moment.utc(ms).format(".mm"));
        return {
            id: index + 1,
            title: `${duration}   ${duration < 1.00 ? '  (min)' : '  (hrs)'} `,
            start:  moment(item.start_time,"MMM D YYYY h:mm A").format('YYYY-MM-DD'),
            end: moment(item.end_time,"MMM D YYYY h:mm A").format('YYYY-MM-DD'),
            allDay: true
            
        }
    });
    return (
    <>
   <Modal  backdrop="static" show={true} size="lg"  aria-labelledby="contained-modal-title-vcenter"
      centered onHide={props.handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>{props.modalData.real_name} Details</Modal.Title>
  </Modal.Header>

  <Modal.Body>
      {!props.calenderView ? <Container className='p-0 duration-hours-container'>
      <Row>
      <Col sm={12}>
          <p style={{fontSize: '.9rem'}}>Below percentage is calculated by assuming max 8 hrs</p>
      </Col>
    {
        props.modalData.activity_periods.map((item: any) => < ><Col xs= {4} sm={6} className='d-flex align-items-end'> <h6 style={{marginTop: '1rem', marginBottom: '1rem'}}>{moment(item.start_time, 'MMM D YYYY hh:mmA').format('MMM D YYYY')}</h6> </Col> <Col xs= {4} sm={6}> <ActiveHourTimline startDateTime={item.start_time} endDateTime={item.end_time}> </ActiveHourTimline></Col> </>)
       
    }
     </Row>
     <Row>
         <Col sm={12} className="d-flex justify-content-end">
             <p className="m-3 see-cal-view" onClick={props.calenderViewHandler}> Click to see calender View</p>
         </Col>
     </Row>
      </Container> : 
      <Container className='p-0 calender-view-container'>
          
          <Calendar
      localizer={localizer}
      events={myEventsList}
      views={['month']}
      style={{ height: 500 }}
    />
          </Container>}
      
      
  </Modal.Body>

</Modal>
</>
    )
}

export default modal;