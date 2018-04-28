import React from 'react';

class AboutUs extends React.Component {
  render() {
    return (
      <div className="profiles-container">
        <div className="profile">
          <div className="profile-visuals">
            <img alt= 'profile-pic'  className="profile-pic" src="../images/dave.jpeg" />
            <p>Dave Y. Chang</p>
            <div className="nav-logos">
              <a href="https://github.com/juzen2003">
                <img alt= 'git-logo' className="git-logo" src="../images/github.png" />
              </a>
              <a href="https://www.linkedin.com/in/dave-yu-jen-chang/">
                <img alt= 'linkedin-logo' className="linkedin-logo" src="../images/linkedin.png" />
              </a>
            </div>
          </div>
          <p className="profile-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br/>
            <br/>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
          </p>
        </div>
        <div className="profile">
          <div className="profile-visuals">
            <img alt= 'profile-pic'className="profile-pic" src="../images/walter.jpeg" />
            <p>Walter H. Wan</p>
            <div className="nav-logos">
              <a href="https://github.com/walterhwan">
                <img alt= 'git-logo'className="git-logo" src="../images/github.png" />
              </a>
              <a href="https://www.linkedin.com/in/hsuan-chen-walter-wan-b9854970/">
                <img alt= 'linkedin-logo'className="linkedin-logo" src="../images/linkedin.png" />
              </a>
            </div>
          </div>
          <p className="profile-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br/>
            <br/>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
          </p>
        </div>
      </div>
    );
  }
}

export default AboutUs;
