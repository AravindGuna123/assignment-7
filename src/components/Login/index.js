import {Component} from 'react'
import ThemeContext from '../../context/ThemeContext'
import {
  HeadingMainContainer,
  LoginForm,
  Logo,
  InputContainer,
  LabelElement,
  InputElement,
  ShowPasswordContainer,
  CheckBoxInput,
  LoginButton,
} from './loginStyledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showErrorMsg: false,
    passwordShow: false,
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  clickCheckbox = () => {
    this.setState(prevState => ({
      passwordShow: !prevState.passwordShow,
    }))
  }

  render() {
    const {username, password, showErrorMsg, passwordShow} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {activeTheme} = value

          return (
            <HeadingMainContainer>
              <LoginForm onSubmit={this.clickLogin}>
                {activeTheme === 'light' ? (
                  <Logo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="logo"
                  />
                ) : (
                  <Logo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                    alt="logo"
                  />
                )}
                <InputContainer>
                  <LabelElement htmlFor="usernameId">Username</LabelElement>
                  <InputElement
                    type="text"
                    onChange={this.onChangeUsername}
                    value={username}
                    id="usernameId"
                  />
                </InputContainer>
                <InputContainer>
                  <LabelElement htmlFor="passwordId">Password</LabelElement>
                  {passwordShow ? (
                    <InputElement
                      type="text"
                      onChange={this.onChangePassword}
                      value={password}
                      id="passwordId"
                    />
                  ) : (
                    <InputElement
                      type="password"
                      onChange={this.onChangePassword}
                      value={password}
                      id="passwordId"
                    />
                  )}
                </InputContainer>
                <ShowPasswordContainer>
                  <CheckBoxInput
                    type="checkbox"
                    onChange={this.clickCheckbox}
                    id="checkboxId"
                  />
                  <LabelElement htmlFor="checkboxId">
                    Show Password
                  </LabelElement>
                </ShowPasswordContainer>
                <LoginButton type="submit">Login</LoginButton>
              </LoginForm>
            </HeadingMainContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
