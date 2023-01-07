// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onClickToggleTheme = () => {
        toggleTheme()
      }

      const themeImageUrl = isDarkTheme
        ? `https://assets.ccbp.in/frontend/react-js/light-theme-img.png`
        : `https://assets.ccbp.in/frontend/react-js/dark-theme-img.png`

      const navBarBgColor = isDarkTheme ? `navbar-bg-dark` : `navbar-bg-light`

      const webSiteLogoUrl = isDarkTheme
        ? `https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png`
        : `https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png`

      const navItemClassName = isDarkTheme
        ? 'list-text-light'
        : 'list-text-dark'

      return (
        <nav className={`nav-container ${navBarBgColor}`}>
          <div className="nav-content">
            <img
              src={webSiteLogoUrl}
              alt="website logo"
              className="website-logo"
            />
            <ul className="nav-items">
              <Link to="/" className="nav-link">
                <li className={navItemClassName}>Home</li>
              </Link>
              <Link to="/about" className="nav-link">
                <li className={navItemClassName}>About</li>
              </Link>
            </ul>
            <button
              type="button"
              className="button"
              onClick={onClickToggleTheme}
              data-testid="theme"
            >
              <img src={themeImageUrl} alt="theme" className="theme-img" />
            </button>
          </div>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
