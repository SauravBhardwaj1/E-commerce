import React from 'react'
import styled from "styled-components"
import Footer from './components/Footer';

const Contact = () => {
  return (
    <Wrapper>
        <h2 className='common-heading'>Contact Page</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.9674898185276!2d77.02738331472062!3d28.60075209227023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1dd61eb460af%3A0xe89377d97456bc5e!2sVegas%20Mall!5e0!3m2!1sen!2sin!4v1669025574650!5m2!1sen!2sin" 
          width="100%" 
          height="350" 
          style={{border:0}} 
          allowFullscreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">   
        </iframe>

        <div className='container'>
          <div className="contact-form">
            <form action="https://formspree.io/f/myyvvdoo" method='POST' className='contact-inputs'>
              <input type="text" 
                placeholder='username' 
                name='username'
                required 
                autoComplete='off' 
                // value=""
              />

              <input type="text" 
                placeholder='email' 
                name='Email' 
                autoComplete='off' 
                required 
                // value=""
              />

              <textarea name="Message" 
              cols="30" 
              rows="10" 
              required 
              autoComplete='off' 
              placeholder='enter your message'></textarea>

              <input type="submit" value="SEND" />
            </form>
          </div>
        </div>
        
    </Wrapper>
    
  );
};

const Wrapper = styled.section`

  padding: 3rem 0 3rem 0;
  text-align: center;
  .container {
    margin-top: 3rem;
    .contact-form {
      max-width: 40rem;
      margin: auto;
      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;
          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;

export default Contact