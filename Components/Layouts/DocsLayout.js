import Link from 'next/link';

const DocsLayout = ({ children }) => {
  return (
    <>
        <div className="docs-layout">
            <div className="left">
                <ul className='doc-menu'>
                    <li>
                        <Link href="/Docs/PageOne">
                            <a>Page 1</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/Docs/PageTwo">
                            <a>Page 2</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/Docs/PageThree">
                            <a>Page 3</a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="right">
                { children }
            </div>
        </div>
    </>
  )
}

export default DocsLayout;