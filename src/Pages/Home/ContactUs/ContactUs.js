import React from 'react';
import bg from '../../../assets/images/appointment.png'

const ContactUs = () => {
    return (
        <section class="py-10 mb-20  body-font relative" >
            <div class="py-5 mx-auto" style={{
                backgroundImage: `url(${bg})`
            }}>
                <div class="flex flex-col text-center w-full mb-12">
                    <h1 class="text-emerald-400 font-medium title-font mb-4">Contact Us</h1>
                    <h1 class="lg:w-2/3 text-3xl mx-auto text-white leading-relaxed">Stay connected with us.</h1>
                </div>
                <div class="lg:w-1/2 md:w-2/3 mx-auto">
                    <div class="flex flex-wrap -m-2">
                        <div class="p-2 w-1/2">
                            <div class="relative">
                                <label for="name" class="leading-7 text-sm text-white">Email</label>
                                <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Email' />
                            </div>
                        </div>
                        <div class="p-2 w-1/2">
                            <div class="relative">
                                <label for="email" class="leading-7 text-sm text-white">Subject</label>
                                <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Subject' />
                            </div>
                        </div>
                        <div class="p-2 w-full">
                            <div class="relative">
                                <label for="message" class="leading-7 text-sm text-white">Message</label>
                                <textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" placeholder='Your message'></textarea>
                            </div>
                        </div>
                        <div class="p-2 w-full">
                            <button class="flex mx-auto text-white bg-gradient-to-r from-accent to-info hover:scale-110 border-0 py-2 px-8 focus:outline-none rounded-md text-lg">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;