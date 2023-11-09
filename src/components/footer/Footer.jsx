import React, { useEffect, useState } from 'react'
import './footer.css'

export const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Update the current year
    setCurrentYear(new Date().getFullYear());
  }, []);
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: humber@eatwithus.com</p>
          <p>Phone: +238-974-0520</p>
          <p>Address: 123 Praia, Santiago, Cape Verde</p>
        <div className="footer-copyright">
          <p>&copy; {currentYear} Eat With Us. All rights reserved.</p>
        </div>
        </div>
        <div className="right-side">
        <div className="footer-back-to-top">
          <a href="#top">Back to Top</a>
        </div>
        <div className="footer-branding">
         EAT <span className='red-letter'>WITH</span> US
        </div>
        <div className="footer-feedback">
          <a href="/feedback">Give Feedback</a>
        </div>
        </div>
      </div>
    </footer>
  )
}
