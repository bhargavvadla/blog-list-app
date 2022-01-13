import './index.css'

const UserInfo = () => (
  <div className="user-info-container">
    <div className="user-info-card">
      <div className="user-info-responsive">
        <img
          src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
          alt="profile"
          className="user-image"
        />
        <h1 className="user-name">Wade Warren</h1>
        <p className="user-role">Software Ui & UX design</p>
      </div>
    </div>
  </div>
)

export default UserInfo
