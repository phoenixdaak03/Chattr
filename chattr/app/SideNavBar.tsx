import Link from 'next/link';

export default function SideNavBar() {
    return (
        <nav className="flex border-r-1 border-r-gray-400 w-1/4 justify-left h-auto">
            <ul className='text-sm font-semibold flex flex-col items-center w-full'>
                <li>
                    <button>
                        <Link href={'/chats'}>
                            <div className='w-60 h-10 flex items-center mt-3 rounded-xl pl-5 transition duration-700 hover:bg-gray-300'>
                                <p>🏠 Home</p>
                            </div>
                        </Link>
                    </button>
                </li>
                <li>
                    <button>
                        <Link href={'/popular'}>
                            <div className='w-60 h-10 flex items-center rounded-xl px-5 transition duration-700 hover:bg-gray-300'>
                                <p>🌟 Popular</p>
                            </div>
                        </Link>
                    </button>
                </li>
                <li>
                    <button>
                        <Link href={'/chattr-bot'}>
                            <div className='w-60 h-10 flex items-center rounded-xl px-5 transition duration-700 hover:bg-gray-300'>
                                <p>🤖 Chattr Bot</p>
                            </div>
                        </Link>
                    </button>

                </li>
            </ul>
        </nav>
    )
}