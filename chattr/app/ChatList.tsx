import { Chat } from './chat-data';
import Link from 'next/link';

export default function ChatList({ chats }: { chats: Chat[]}){
    return(
        <>
        <div className="flex flex-col w-auto">
            { chats.map(chat => (
                <div key={chat.id} className='border-b-1 border-b-gray-400 mx-20'>
                    <Link href={'../chats/'+chat.id}>
                        <div className='transition duration-1000 hover:bg-gray-200 my-2 rounded-lg p-2'>
                            <h1 className='text-xs'>{chat.tag}: {chat.topic}</h1>
                            <h2 className='text-xl font-bold my-2'>{chat.title}</h2>
                            <p className='text-sm mb-2'>{chat.text}</p>
                            <h3 className='text-xs text-gray-500'>Posted By: {chat.postedBy}</h3>
                        </div>
                    </Link>
                </div>
                
                
            ))}
        </div>
            
        </>
    )
}