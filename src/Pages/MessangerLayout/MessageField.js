import React, { useEffect, useState } from 'react';
import { IoIosSend } from 'react-icons/io'
import { BsCamera } from 'react-icons/bs'
import { BsMic } from 'react-icons/bs'
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
                <div className='flex '>
                <img src='http://topson.left4code.com/dist/images/profile-9.jpg' className='rounded-full w-10 h-10' alt='' />
                <div class="flex flex-col ml-4 ">
                    <strong>Iqbal Shuvo</strong>
                   <p class="text-sm text-start" >last Message </p>
                </div>
                </div>
                <div class="flex flex-row items-center">
                   <BsCamera className='w-6 h-6 shadow-sm m-1 cursor-pointer'/>
                   <BsMic className='w-6 h-6 shadow-sm m-1 cursor-pointer'/>
                </div>
            </div>

            <div
                class="flex-auto overflow-y-auto p-5 space-y-4"
                style={{ background: '' }}
            >
                <div class="flex flex-row space-x-2">
                <img src='http://topson.left4code.com/dist/images/profile-9.jpg' className='rounded-full w-10 h-10' alt='' />

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