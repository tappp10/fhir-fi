import * as React from 'react'

import { Link } from 'gatsby'
import '../styles/index.css';

const Article = ({ children }) => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <address>
          <a href="mailto:mikael@sensotrend.com">mikael@sensotrend.com</a>
        </address>
      </footer>
    </>
  )
}

export default Article