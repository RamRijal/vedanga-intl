import React from 'react'

const MapSection = () => {
  return (
      <section className="h-[400px] relative">
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.2714812211584!2d85.31089731506!3d27.702739982790633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19b19295555f%3A0xabfe5f4b310f37a9!2sRabi%20Bhawan%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1647856732345!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
      </section>  )
}

export default MapSection