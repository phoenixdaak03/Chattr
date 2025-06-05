import Link from 'next/link';

export default function SideNavBar(){
    return(
        <nav className="flex flex-cols border-r-1 border-r-gray-400 w-1/6 justify-right mx-10 h-screen">
            <ul>
                <li>
                    <div className='bg-gray-300 w-50 h-10 flex items-center my-5 rounded-xl pl-5'>
                        <Link href={'/landing-page'}>
                            <button>🏠 Home</button>
                        </Link>
                    </div>
                    
                </li>
                <li>
                    <Link href={'/popular'}>
                        <button>🌟 Popular</button>
                    </Link>
                </li>
                <li>
                    <Link href={'/chattr-bot'}>
                        <button>🤖 Chattr Bot</button>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}