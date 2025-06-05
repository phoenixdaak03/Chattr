import { chats } from '@/app/chat-data';

export default function Comments({ params }: { params: {id:string}}){
    const chat = chats.find(c => c.id === params.id);
    
    if (!chat){
        return(
            <>
                <div className="flex aboslute flex-col w-auto">
                    <h1 className="text-2xl font-bold">There are no comments for this post!</h1>
                </div>
            </>
        );
    }

    return(
        <>
            <div className="flex absolute flex-col justify-start items-start w-auto h-full">
                <div className='mx-20'>
                        <div className='transition duration-1000 p-2'>
                            <h1 className='text-2xl font-bold my-5'>Comments</h1>
                            {chat.comments.map((comment, idx) => (
                                <div key={idx} className='border-b-1 border-b-gray-400 '>
                                    <h1 className='text-sm font-bold mt-3 mb-1'>{comment.commentedBy}</h1>
                                    <p className='text-sm mb-3'>{comment.text}</p>
                                </div>
                            ))}
                        </div>
                </div>
        </div>
        </>
    )
}