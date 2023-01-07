// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const homeBgColor = isDarkTheme ? `dark-theme` : `light-theme`
      const homeImgUrl = isDarkTheme
        ? `https://assets.ccbp.in/frontend/react-js/home-dark-img.png`
        : `https://assets.ccbp.in/frontend/react-js/home-light-img.png`

      const headingText = isDarkTheme ? `home-dark-text` : `home-light-text`

      return (
        <div className="home-app-container">
          <Navbar />
          <div className={`home-container ${homeBgColor}`}>
            <img src={homeImgUrl} className="home-img" alt="home" />
            <h1 className={headingText}>Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
