import React from 'react'
import ActualCalendar from '@/components/ActualCalendar'

const CalendarPage = () => {
  return (
    <section>
      <div className="flex m-5">
        <h1 className='text-3xl font-bold'>Calendar Page</h1>
      </div>
      
      <ActualCalendar />
    </section>
  )
}

export default CalendarPage