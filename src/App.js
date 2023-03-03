import {Switch, Route} from 'react-router-dom'
import {Component} from 'react'
import Login from './components/Login'
import Home from './components/Home'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import Trending from './components/Trending'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'
import ThemeContext from './context/ThemeContext'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    activeTheme: 'light',
  }

  changeTheme = () => {
    this.setState({
      activeTheme: 'dark',
    })
  }

  render() {
    const {activeTheme} = this.state
    console.log(5)

    return (
      <ThemeContext.Provider
        value={{activeTheme, changeTheme: this.changeTheme}}
      >
        <Switch>
          <Route path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/gaming" component={Gaming} />
          <Route exact path="/trending" component={Trending} />
          <Route exact path="/videos/:id" component={VideoItemDetails} />
          <Route exact path="/saved-videos" component={SavedVideos} />
          <Route component={NotFound} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
