import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface EmployeeProps {
  id: string
  name: string
  socialID: string
  link: string
}

const Employee: React.FC<EmployeeProps> = ({ id, name, socialID, link }) => {
  return (
    <div>
      <Image
        src={`/assets/team/faces_${id}.jpeg`}
        alt={name}
        width={300}
        height={300}
      />
      <div className="text-2xl xl:text-3xl">{name}</div>
      <div className="">
        <Link href={link}>
          <a target="_blank">{socialID}</a>
        </Link>
      </div>
    </div>
  )
}

export default Employee
