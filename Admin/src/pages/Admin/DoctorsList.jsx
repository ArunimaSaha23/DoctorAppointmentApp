import React, { useEffect, useContext } from 'react'
import { AdminContext } from '../../context/AdminContext'

const DoctorsList = () => {
  const { doctors, aToken, getAllDoctors, changeAvailability } = useContext(AdminContext)
  console.log('aToken:', aToken);
  console.log(doctors)


  useEffect(() => {
    if (aToken) {
      getAllDoctors()
    }
  }, [aToken])

  return (
    <div className='m-5 max-h-[90vh] overflow-y-scroll'>
      <h1 className='text-lg font-medium'>All Doctors</h1>
      <div className='w-full flex flex-wrap gap-4 pt-5 gap-y-6'>
        {
          Array.isArray(doctors) && doctors.length > 0 ? (
            doctors.map((item, index) => (
              <div className='border border-[#c7d2fe] rounded-xl max-w-56 overflow-hidden cursor-pointer group' key={index}>
                <img className='bg-[#eef2ff] group-hover:bg-primary transition-all duration-500' src={item.image} alt={`Doctor ${index}`} />
                <div className='p-4'>
                  <p className='text-[#262626] text-lg font-medium'>{item.name}</p>
                  <p className='text-[#52525B] text-sm'>{item.speciality}</p>
                  <div className='mt-2 flex items-center gap-1 text-sm'>
                    <input onChange={()=>changeAvailability(item._id)} type="checkbox" checked={item.available} />
                    <p>Available</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No doctors found.</p>
          )
        }
      </div>
    </div>
  )
}

export default DoctorsList
