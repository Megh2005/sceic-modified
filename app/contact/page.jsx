"use client";

import { useForm, ValidationError } from "@formspree/react";
import { useRef } from "react";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";

const Contact = () => {
    const [state, handleSubmit] = useForm("mjkvodvv");
    const formRef = useRef(null);

    if (state.succeeded) {
        toast.success("Your Query Has Reached Our Mail Box!");
        formRef.current.reset();
    }

    return (
        <div className="bg-black text-white sm:min-h-[90vh] min-h-screen">
            <motion.div
                className="sm:min-h-[90vh] min-h-screen bg-black flex items-center justify-center px-6 py-6"
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: "100% 50%" }}
                transition={{ duration: 10, ease: "linear", loop: Infinity }}
                style={{
                    backgroundImage: "linear-gradient(to right, #1c1c1c, #2f2f2f)",
                }}
            >
                <div className="max-w-4xl w-full bg-black border-blue-400 border-2 rounded-lg shadow-lg p-8 -mt-10">
                    <form
                        onSubmit={handleSubmit}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                        ref={formRef}
                        action="https://formspree.io/f/mjkvodvv"
                        method="POST"
                    >
                        <div className="mb-4">
                            <label
                                className="block text-white text-sm font-bold mb-2"
                                htmlFor="name"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                required
                                name="name"
                                className="w-full text-white bg-transparent px-4 py-3 border border-yellow-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-500"
                                placeholder="Your Name"
                            />
                            <ValidationError
                                prefix="Name"
                                field="name"
                                errors={state.errors}
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-white text-sm font-bold mb-2"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                className="w-full bg-transparent text-white px-4 py-3 border border-yellow-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-500"
                                placeholder="Your Email"
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                        </div>

                        <div className="md:col-span-2 mb-4">
                            <label
                                className="block text-white text-sm font-bold mb-2"
                                htmlFor="subject"
                            >
                                Subject
                            </label>
                            <input
                                type="text"
                                required
                                id="subject"
                                className="w-full px-4 bg-transparent text-white py-3 border border-yellow-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-500"
                                placeholder="Subject"
                                name="subject"
                            />
                        </div>
                        <div className="md:col-span-2 mb-4">
                            <label
                                className="block text-white text-sm font-bold mb-2"
                                htmlFor="message"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                required
                                className="w-full resize-none px-4 py-3 border bg-transparent text-white border-yellow-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-500"
                                placeholder="Your Message"
                                name="message"
                                rows="6"
                            />
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />
                        </div>
                        <div className="md:col-span-2">
                            <button
                                type="submit"
                                disabled={state.submitting}
                                className="w-full bg-blue-300 text-black font-bold py-3 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500 hover:bg-gray-300"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;
