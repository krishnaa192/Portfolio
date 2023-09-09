import React, { useRef } from "react";
import './style/Contact.css';
import EmailIcon from '@mui/icons-material/Email';
import emailjs from '@emailjs/browser';


const Contact = () => {
  // const [name,showName]=useState('');
  // const [email,showEmail]=useState('');
  // const [message,showMessage]=useState('');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
 
  emailjs.sendForm('service_aifedz4', 'template_kus720d', form.current, 'imgHOxdQ-lpGahjZ7')
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
};


return (
  <div className="contact" id="contact">
   <form ref={form} onSubmit={sendEmail}>
    <div className="card">
      <h2> <EmailIcon className='email-icon' />Contact me</h2>
      <input type="text" placeholder=" Name" name="user_name"/>
      <br />
      <input type="text" placeholder="Email" name="user_email" />
      <br />
      <textarea placeholder="Message"></textarea>
      <div className="btn">
      {/* <button type="submit" value="Send">Submit</button> */}
      <input type="submit" value="Send" />

      </div>

    </div>
    </form>
  </div>

)
}
export default Contact;