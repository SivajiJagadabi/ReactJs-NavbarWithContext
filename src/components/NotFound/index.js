// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const notFoundBgColor = isDarkTheme
        ? `not-found-dark-bg`
        : `not-found-light-bg`
      const notFoundHeading = isDarkTheme
        ? `not-found-dark-head`
        : `not-found-light-head`

      const notFoundParagraphColor = isDarkTheme
        ? `not-found-dark-paragraph`
        : `not-found-light-paragraph`

      return (
        <div className="home-app-container">
          <Navbar />
          <div className={`not-found-container ${notFoundBgColor}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="not-found-img"
            />
            <h1 className={notFoundHeading}>Lost Your Way?</h1>
            <p className={notFoundParagraphColor}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
