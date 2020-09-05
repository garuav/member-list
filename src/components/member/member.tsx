import React from 'react';
import {  Card } from 'react-bootstrap';
import './member.scss';
 const members = (props: any) => {
    return  (
      
    <div className="member-wrapper ml-3 mr-3" onClick={props.openModal}>
          <Card style={{ width: '100%' }}>
  <Card.Body>
    <Card.Title>{props.memberData.real_name}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">({props.memberData.tz})</Card.Subtitle>
    
  </Card.Body>
</Card></div>
    )

}

export default members;