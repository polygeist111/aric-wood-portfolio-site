"use client"
// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import { useForm } from '@formspree/react';

export default function Contact_Form() {
  const [state, handleSubmit] = useForm("mnjajzad");
  if (state.succeeded) {
      return <p>Inquiry submitted! If you wish to submit another, simply reload the page.</p>;
  }
  return (
    <form className="grid gap-3 sm:grid-cols-2 mt-4" action={handleSubmit}>
        <input name="name" placeholder="Name" className="border border-gray-300 rounded-xl p-2" required />
        <input name="email" type="email" placeholder="Email" className="border border-gray-300 rounded-xl p-2" required />
        <textarea name="message" placeholder="Message" rows={4} className="border border-gray-300 rounded-xl p-2 sm:col-span-2" required />
        <button type="submit" className="btn btn-solid sm:col-span-2 w-40">Send →</button>
    </form>
  );
}