import Link from 'next/link';
import React from 'react';

const Header = () => {
    const links = <>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/posts">Posts</Link></li>
        <li><Link href="/products">Products</Link></li>

    </>;    
    return (
        <div>
            <nav className='flex flex-row justify-between items-center p-4 bg-gray-200 text-gray-800'>
                <h1>Logo</h1>
                <ul className='flex flex-row gap-10'>
                    {links}
                </ul>
                <div className="btn">Button 1</div>
            </nav>
        </div>
    );
};

export default Header; 