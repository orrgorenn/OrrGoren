import React from 'react'
import Employee from './employee'

const About: React.FC = () => {
  return (
    <section className="flex flex-col bg-white py-20 text-3xl md:text-4xl">
      <div className="container mx-auto px-11">
        <p className="leading-tight max-w-5xl mx-auto text-4xl tracking-tight">
          <strong>We will help you ship better apps, faster.</strong>
          Our team of expert engineers has created the best user expiriences in
          some of the most popular apps worldwide.
        </p>
      </div>
      <div className="container mx-auto px-11 text-center mt-28">
        <h2>Our Team</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-6 lg:gap-20">
          <Employee
            id="orr"
            name="Orr Goren"
            socialID="@orrgorenn"
            link="https://github.com/orrgorenn"
          />
        </div>
      </div>
    </section>
  )
}

export default About
