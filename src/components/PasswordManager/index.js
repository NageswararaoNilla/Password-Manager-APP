import './index.css'

import {Component} from 'react'

class PasswordManager extends Component {
  renderAddNewPassword = () => {
    const screenWidth = window.innerWidth
    console.log(screenWidth)
    const passwordManagerImgUrl =
      screenWidth > 768
        ? 'https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png'
    return (
      <div className="form-container">
        <form className="form">
          <h1 className="heading">Add New Password</h1>
          <div className="input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
              alt="website"
              className="input-img"
            />
            <input type="text" className="input" placeholder="Enter Website" />
          </div>
          <div className="input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
              alt="username"
              className="input-img"
            />
            <input type="text" className="input" placeholder="Enter Username" />
          </div>
          <div className="input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
              alt="password"
              className="input-img"
            />
            <input type="text" className="input" placeholder="Enter Password" />
          </div>
          <button type="submit" className="add-btn">
            Add
          </button>
        </form>
        <img
          src={passwordManagerImgUrl}
          alt="password manager"
          className="password-manager-img"
        />
      </div>
    )
  }

  render() {
    return (
      <div className="app-container">
        <div className="password-manager-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="logo-img"
          />
          {this.renderAddNewPassword()}
        </div>
      </div>
    )
  }
}

export default PasswordManager
