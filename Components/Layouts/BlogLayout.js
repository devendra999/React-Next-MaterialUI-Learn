import Link from 'next/link';

const BlogLayout = ({ children }) => {
  return (
    <div className="blog-layout">
        <div className="left">
            { children }
        </div>
        <div className="right">
            <ul className='blog-menu'>
                <li>
                    <Link href="/Blog/BlogOne">
                        <a>Blog 1</a>
                    </Link>
                </li>
                <li>
                    <Link href="/Blog/BlogTwo">
                        <a>Blog 2</a>
                    </Link>
                </li>
                <li>
                    <Link href="/Blog/BlogThree">
                        <a>Blog 3</a>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default BlogLayout;