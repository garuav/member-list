import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import './member.scss';
 const members = (props: any) => {
     console.log("props = ",props)
    return  (
        // <div className="member">
      
    <div className="member-wrapper" onClick={props.openModal}>
          <Card style={{ width: '100%' }}>
  <Card.Body>
    <Card.Title>{props.memberData.real_name}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">({props.memberData.tz})</Card.Subtitle>
    
  </Card.Body>
</Card></div>
//   </div>
    )

}

export default members;