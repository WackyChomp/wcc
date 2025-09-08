import React from 'react'
import { DataTableDemo } from '@/components/ActualDataTable'

const PartnersPage = () => {
  return (
    <section>     {/* using a section element makes sidebar and navbar show up -- idk why */}
      <h1 className='text-3xl'>
        Partners
      </h1>

      <DataTableDemo />
    </section>
  )
}

export default PartnersPage