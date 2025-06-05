import { chats } from '@/app/chat-data';
import Comments from './Comments';
import Link from 'next/link';

export default function IndividualChatPage({ params }: { params: {id:string}}){
    const chat = chats.find(c => c.id === params.id);
    
    if (!chat){
        return(
            <>
                <div className="flex aboslute flex-col w-auto">
                    <h1 className="text-2xl font-bold">This page is not implemented yet. Coming soon!</h1>
                </div>
            </>
        );
    }

    return(
        <>
            <div className="flex flex-col justify-start items-start w-auto h-full aspect-square">
                <button>
                    <Link href={'/chats'}>
                        <div className='flex text-3xl font-extrabold m-5 pb-1 justify-center items-center bg-green-300 rounded-full h-15 w-15 transition duration-700 hover:bg-green-400 hover:scale-125'>
                            <p>←</p>
                        </div>
                    </Link>
                </button>
                
                <div className='border-b-1 border-b-gray-400 mx-20'>
                        <div className='transition duration-1000 p-2'>
                            <h1 className='text-xs'>{chat.tag}: {chat.topic}</h1>
                            <h2 className='text-4xl font-bold my-1'>{chat.title}</h2>
                            <h3 className='text-xs text-gray-500 mb-5'>Posted by: {chat.postedBy}</h3>
                            <p className='text-sm mb-2'>{chat.text}</p>
                        </div>
                </div>
                <div>
                    <Comments params={{ id: chat.id }}/>
                </div>
                
            </div>
        </>
    )
}