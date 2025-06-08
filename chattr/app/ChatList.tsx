import { Chat } from './chat-data';
import Link from 'next/link';

export default function ChatList({ chats }: { chats: Chat[]}){
    return(
        <>
        <div className="flex flex-col w-auto">
            { chats.map(chat => (
                <div key={chat.id} className='border-b-1 border-b-gray-400 mx-20'>
                        <div className='transition duration-500 hover:bg-gray-200 my-2 rounded-lg p-2'>
                            <h1 className='text-xs'>{chat.tag}: {chat.topic}</h1>
                            <div className='flex items-center space-x-1 my-2'>
                                <Link href={'../chats/'+chat.id}>
                                    <h2 className='text-xl font-bold'>{chat.title}</h2>
                                </Link>
                                <div className='ml-2 text-sm font-bold flex items-center space-x-1'>
                                    <p className='mr-2'>{chat.upvotes}</p>
                                    <button className='cursor-pointer rounded-xl bg-gray-300 w-7 active:bg-gray-400 active:scale-70 transition duration-200'>↑</button>
                                    <button className='cursor-pointer rounded-xl bg-gray-300 w-7 active:bg-gray-400 active:scale-70 transition duration-200'>↓</button>
                                </div>
                                
                            </div>
                            <Link href={'../chats/'+chat.id}>
                                <p className='text-sm mb-2'>{chat.text}</p>
                            </Link>
                            
                            <h3 className='text-xs text-gray-500'>Posted By: {chat.postedBy}</h3>
                        </div>
                </div>
                
                
            ))}
        </div>
            
        </>
    )
}