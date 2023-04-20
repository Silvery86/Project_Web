import React from 'react'
import { Form, redirect, useActionData } from 'react-router-dom'

export default function Contact() {
  const data = useActionData()

  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <Form method='post' action='/help/contact'> 
      {/* When click submit this will find action in this route and start that action */}
      <label>
          <span>Your email:</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Your message:</span>
          <textarea name="message" required></textarea>
          {data && data.error && <p>{data.error}</p>}
        </label>
        
        <button>Submit</button>
        
      </Form>
    </div>
  )
}
// Sent imformation of the Form when submited to request object
export const submitAction = async ({ request }) => {
  const data = await request.formData()
// Save the user input in form to new object
  const submission = {
    email : data.get('email'),
    message : data.get('message')
  }
// Check condition of submission data after submit 
// if not meet the conditon will display for user and not submit form yet
  console.log(submission)
  if(submission.message.length < 10){
    return {error : 'Message must be over 10 characters'}
  }
// Sent data to server



// Redirect page to Home or other Page after submited
  return redirect('/')
}