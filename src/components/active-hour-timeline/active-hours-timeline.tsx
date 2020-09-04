import React from 'react';
import {  ProgressBar } from 'react-bootstrap';
import moment from 'moment';
import './active-hours-timeline.scss';
const activeHourTimeline = (props: any) => {
    const calculateActiveHours = (type: string) => {
        const ms = moment(props.endDateTime,"MMM D YYYY h:mmA").diff(moment(props.startDateTime,"MMM D YYYY h:mm A"));
        const duration =  parseFloat(Math.floor(moment.duration(ms).asHours()) + moment.utc(ms).format(".mm"));
        return type === 'percentage' ? Math.ceil(((duration) * 100)/ 8): duration;
        
    }
    
    return (
       <div className="active-hours-percentage">
            <p>{calculateActiveHours('duration')} {calculateActiveHours('duration') < 1.00 ? '  (min)' : '  (hrs)'}</p>
                <ProgressBar animated now={calculateActiveHours('percentage')} />
       </div>
    )
}

export default activeHourTimeline;