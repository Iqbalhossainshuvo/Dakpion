import React from 'react';

const ChatUser = () => {
    return (
        <>
            <div class="flex flex-row justify-between items-center mb-6">
                <h1 class="font-semibold text-2xl">Chats</h1>
                <input type="text" placeholder="Searching" className=" ml-4 focus:outline-none p-2 w-full shadow-md rounded-md " />
            </div>

            <div class="shadow-md rounded-xl">
                {/* Chat 1  */}
                <div className='bg-white p-4 rounded-xl  hover:scale-105  duration-300 cursor-pointer'>
                    <div className='flex'>
                        <img src='https://i.ibb.co/VSHWpW4/mamun.png' className='rounded-full w-10 h-10' alt='' />
                        <div className='ml-4'>
                            <div className='flex justify-between'>
                                <h4 className='font-bold '>Md Mamunur Rashid</h4>
                                <p className='ml-8 text-end'>03:20 PM</p>
                            </div>
                            <p className='text-start'>Last message</p>
                        </div>
                    </div>
                </div>


            </div>
            {/* Chat 1  end  */}

            <div class="shadow-md rounded-xl">
                {/* Chat 2  */}
                <div className='bg-white p-4 rounded-xl  hover:scale-105  duration-300 cursor-pointer'>
                    <div className='flex'>
                        <img src='http://topson.left4code.com/dist/images/profile-9.jpg' className='rounded-full w-10 h-10' alt='' />
                        <div className='ml-4'>
                            <div className='flex justify-between'>
                                <h4 className='font-bold '>John Travolta</h4>
                                <p className='ml-8 text-end'>03:20 PM</p>
                            </div>
                            <p className='text-start'>Last message</p>
                        </div>
                    </div>
                </div>


            </div>
            {/* Chat 2 end  */}

            <div class="shadow-md rounded-xl">
                {/* Chat 3 */}
                <div className='bg-white p-4 rounded-xl  hover:scale-105  duration-300 cursor-pointer'>
                    <div className='flex'>
                        <img src='http://topson.left4code.com/dist/images/profile-9.jpg' className='rounded-full w-10 h-10' alt='' />
                        <div className='ml-4'>
                            <div className='flex justify-between'>
                                <h4 className='font-bold '>John Travolta</h4>
                                <p className='ml-8 text-end'>03:20 PM</p>
                            </div>
                            <p className='text-start'>Last message</p>
                        </div>
                    </div>
                </div>


            </div>
            {/* Chat 3  end  */}

            <div class="shadow-md rounded-xl">
                {/* Chat 4  */}
                <div className='bg-white p-4 rounded-xl  hover:scale-105  duration-300 cursor-pointer'>
                    <div className='flex'>
                        <img src='http://topson.left4code.com/dist/images/profile-9.jpg' className='rounded-full w-10 h-10' alt='' />
                        <div className='ml-4'>
                            <div className='flex justify-between'>
                                <h4 className='font-bold '>John Travolta</h4>
                                <p className='ml-8 text-end'>03:20 PM</p>
                            </div>
                            <p className='text-start'>Last message</p>
                        </div>
                    </div>
                </div>


            </div>
            {/* Chat 4  end  */}

            <div class="shadow-md rounded-xl">
                {/* Chat 5  */}
                <div className='bg-white p-4 rounded-xl  hover:scale-105  duration-300 cursor-pointer'>
                    <div className='flex'>
                        <img src='http://topson.left4code.com/dist/images/profile-9.jpg' className='rounded-full w-10 h-10' alt='' />
                        <div className='ml-4'>
                            <div className='flex justify-between'>
                                <h4 className='font-bold '>John Travolta</h4>
                                <p className='ml-8 text-end'>03:20 PM</p>
                            </div>
                            <p className='text-start'>Last message</p>
                        </div>
                    </div>
                </div>


            </div>
            {/* Chat 5  end  */}

            <div class="shadow-md rounded-xl">
                {/* Chat 6 */}
                <div className='bg-white p-4 rounded-xl  hover:scale-105  duration-300 cursor-pointer'>
                    <div className='flex'>
                        <img src='http://topson.left4code.com/dist/images/profile-9.jpg' className='rounded-full w-10 h-10' alt='' />
                        <div className='ml-4'>
                            <div className='flex justify-between'>
                                <h4 className='font-bold '>John Travolta</h4>
                                <p className='ml-8 text-end'>03:20 PM</p>
                            </div>
                            <p className='text-start'>Last message</p>
                        </div>
                    </div>
                </div>


            </div>
            {/* Chat 6  end  */}

        </>
    );
};

export default ChatUser;