import ChatList from '../ChatList';
import { chats } from '../chat-data';

export default function HomePage(){
    return(
        <div>
            <h1 className='text-3xl font-bold p-5'>Chattrs</h1>
            <ChatList chats={chats}/>
        </div>
    )
}