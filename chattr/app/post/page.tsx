export default function PostPage(){
    return(
        <>
        <div className="flex flex-col w-full h-screen items-center justify-center pb-25">
            <h1 className="text-5xl font-bold ">Create Chattr</h1>
            <div className="flex aboslute flex-col w-auto h-auto mt-10 w-full items-center">
                <input type="text" placeholder="Title" className="px-1 text-lg border border-1 border-gray-300 rounded-sm w-100"/>
                <textarea placeholder="What's on your mind?" className="px-1 text-lg mt-3 border border-1 border-gray-300 rounded-sm w-100 h-50"/>
                <button className='mt-5 bg-green-300 h-10 rounded-3xl w-auto px-5 transition duration-700 hover:bg-green-400 cursor-pointer'>✓ Create post</button>
            </div>
        </div>
            
        </>
    );
}