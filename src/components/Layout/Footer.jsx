import React from 'react'

import './Footer.module.css'

const Footer = () => {
      return (
        <footer>
          <h1>La Perfume</h1>

          <div>
            <p>
              Made with ❤️ by{" "}
              <a href="https://github.com/DeveloperAspire">Franklin Okolie</a>
            </p>
          </div>

          <ul>
            <li>About</li>
            <li>
              <a href="https://twitter.com/DeveloperAspire">Twitter</a>
            </li>
            <li>NewsLetter</li>
          </ul>
        </footer>
      );
}

export default Footer
