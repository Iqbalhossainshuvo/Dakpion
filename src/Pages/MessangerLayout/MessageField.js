import React, { useEffect, useState } from 'react';
import { IoIosSend } from 'react-icons/io'
import './MessageField.css'

const MessageField = () => {

    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);




    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Message submitted: ', message);

        const now = new Date();
        const data = {
            message: message,
            timestamp: now.toISOString()
        };
        console.log('Message submitted: ', data);
        // Save message to localStorage
        localStorage.setItem('messages', JSON.stringify([...messages, data]));
        setMessages([...messages, data]);

        setMessage('');
    };

    const handleChange = (event) => {
        setMessage(event.target.value);
    };

    useEffect(() => {
        // Retrieve messages from localStorage
        const storedMessages = localStorage.getItem('messages');
        if (storedMessages) {
            setMessages(JSON.parse(storedMessages));
        }
    }, []);

    const getFormattedTime = (timestamp) => {
        const options = { weekday: 'short', hour: 'numeric', minute: 'numeric', hour12: true };
        return new Date(timestamp).toLocaleString('en-US', options);
    };


    return (
        <>
            <div class="flex-none h-20 flex flex-row justify-between items-center p-5 border-b">
                <div class="flex flex-col space-y-1">
                    <strong>Iqbal Shuvo</strong>
                    {/* <input type="text" placeholder="Add coversation title" class="text-sm outline-none border-b border-dashed text-black placeholder-gray-600" /> */}
                </div>
                <div class="flex flex-row items-center">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
                </div>
            </div>

            <div
                class="flex-auto overflow-y-auto p-5 space-y-4"
                style={{ background: '' }}
            >
                <div class="flex flex-row space-x-2">
                    <svg class="flex-none w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>

                    <div class="flex flex-col">
                        <div class="bg-white shadow-md  p-2 m-1 rounded-lg p-2 m-1 max-w-fit">
                            Some message text
                        </div>
                        <div class="text-sm text-gray-600 ">4hr ago</div>
                    </div>
                </div>

                <div class="flex flex-row justify-center text-sm text-gray-600">
                    You assigned this conversation to yourself 5d ago
                </div>

                <div class="flex flex-row space-x-2 flex-row-reverse space-x-reverse">
                   

                    <div class="flex flex-col">
                           <div class="flex flex-col items-end p-1">

                            {messages.map((msg, index) => (
                                <div key={index} class="flex flex-col m-4">
                                         {/* user Img */}
                                  {/*    <div class="flex ">
                                        <img src={msg.profilePicture} class="w-6 h-6 rounded-full bg-black " />
                                    </div> */}
                                    <div class="bg-white shadow-md  p-2 m-1 rounded-lg p-2 m-1 max-w-fit">
                                        <p class="text-sm font-medium">{msg.message}</p>
                                    </div>
                                    <p class="text-xs text-gray-500 mt-1 text-end">{getFormattedTime(msg.timestamp)}</p>
                                </div>
                            ))}
                        </div> 
                     

                    </div>
                </div>
            </div>


            <form onSubmit={handleSubmit}>
                <div class="flex items-center p-1 m-4">
                    <textarea
                        value={message}
                        onChange={handleChange}
                        class="w-11/12 p-2 shadow-lg focus:outline-none rounded-md overflow-auto scrollbar-hide max-h-10 resize-none "
                        placeholder="Type your message here"
                    ></textarea>
                    <button type="submit" class=" m-auto text-blue-500 hover:text-blue-600">
                        <IoIosSend className=' w-8 h-8 shadow-md' />
                    </button>
                </div>
            </form>

        </>
    );
};

export default MessageField;