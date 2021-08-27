import React from 'react'
import emailjs from 'emailjs-com'
import { init } from 'emailjs-com'
init('user_KFrHAxVbb5IDWw71H1ew5')

const ContactUs = () => {
  function sendEmail(e) {
    e.preventDefault()

    emailjs.sendForm('gmail', 'template_t96c4b5', e.target, 'user_KFrHAxVbb5IDWw71H1ew5').then(
      (result) => {
        console.log(result.text)
      },
      (error) => {
        console.log(error.text)
      },
    )
    e.target.reset()
  }

  return (
    <>
      <div className="text-head">
        <h1>Send message</h1>
      </div>

      <form action="" className="postcard" onSubmit={sendEmail}>
        <div className="form-row">
          <label for="name">Your name</label>
          <input type="text" id="name" required />
        </div>
        <div className="form-row">
          <label for="email">Your Email</label>
          <input type="email" id="email" required />
        </div>
        <div className="form-row">
          <label for="message">Your message</label>
          <textarea rows="5" id="message" name='message' required></textarea>
        </div>
        <div className="form-row">
          <input type="submit" value="send message" />
        </div>
      </form>
    </>
  )
}

export default ContactUs
