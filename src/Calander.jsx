import React, { useState } from 'react'
import Calender from 'react-calendar'

function Calander() {

    const [date, setDate] = useState(new Date());
    const onChange = () => {
        setDate(date);
    }
    return (
        <div className=''>
            <Calender onChange={onChange} value={date} />

        </div>
    )
}

export default Calander