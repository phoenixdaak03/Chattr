import ChatList from '../ChatList';
import { chats } from '../chat-data';

export default function ChatsPage(){
    return(
        <div className='h-screen'>
            <h1 className='text-3xl font-bold p-5'>Chattrs</h1>
            <ChatList chats={chats}/>
        </div>
    )
}