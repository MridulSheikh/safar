import ServiceBanner from '@/components/service/ServiceBanner'
import ServiceCountry from '@/components/service/ServiceCountry'
import ServiceNav from '@/components/service/ServiceNav'
import React from 'react'

const service = () => {
  return (
    <div>
        <ServiceNav />
        <div>
            <ServiceBanner />
            <ServiceCountry />
        </div>
    </div>
  )
}

export default service