import React from 'react'
import { DataTableDemo } from '@/components/ActualDataTable'
import ActualDrawer from '@/components/ActualDrawer'

const PartnersPage = () => {
  return (
    <section className='flex flex-col m-10'>     {/* using a section element makes sidebar and navbar show up -- idk why */}
      <h1 className='bg-amber-400 text-3xl'>
        Partners
      </h1>

      <div className="bg-green-400 flex flex-col justify-center items-center">

        <DataTableDemo />

        <ActualDrawer />
      </div>
    </section>
  )
}

export default PartnersPage