import React from 'react';

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-orange-500">
            Contact
          </p>
          <p className="py-6">Here is my contact information:</p>
        </div>

        <div className=" flex justify-center items-center border-l-2 border-orange-500">
          <ul className="p-3 li space-y-6">
            <li>Name: Luis Aleman</li>
            <li>
              Location: Miami Gardens, Fl (Willing to relocate anywhere in the
              country)
            </li>
            <li>Phone Number: 786-314-4665</li>
            <li>Email: lja11202526@gmail.com</li>
            <li>
              I also added clickable icons on the left side of the screen with
              my LinkedIn, GitHub, and Email
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
