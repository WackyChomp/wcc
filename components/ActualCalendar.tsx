'use client'
import React from 'react'

import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"


const ActualCalendar = () => {
  const [dropdown, setDropdown] =
  React.useState<React.ComponentProps<typeof Calendar>["captionLayout"]>(
    "dropdown"
  )

  const [date, setDate] = React.useState<Date | undefined>(
    new Date(2025, 5, 12)
  )

  return (
    <div className="flex flex-col gap-4 m-5">
      <Calendar
        mode="single"
        defaultMonth={date}
        selected={date}
        onSelect={setDate}
        captionLayout={dropdown}
        className="rounded-lg border shadow-sm"
      />
      <div className="flex flex-col gap-3">
        <Label htmlFor="dropdown" className="px-1">
          Dropdown
        </Label>
      </div>
    </div>
  )
}

export default ActualCalendar

