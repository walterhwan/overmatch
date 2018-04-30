import React from 'react';

class AboutUs extends React.Component {
  render() {
    return (
      <div className="profiles-container">
        <div className="profile">
          <div className="profile-visuals">
            <img alt='' className="profile-pic" src="../images/Danny_Peng.jpg" />
            <p>Danny Peng</p>
            <div className="nav-logos">
              <a href="https://github.com/Eractus">
                <img alt='' className="git-logo" src="../images/github.png" />
              </a>
              <a href="https://www.linkedin.com/in/danny-peng-29515651/">
                <img alt='' className="linkedin-logo" src="../images/linkedin.png" />
              </a>
            </div>
          </div>
          <div className="profile-description">
            <p>
              When it comes to development, I'm one of those that is really indifferent to the part of the stack that needs work. Whether you want to debug a Rails server error on the backend or refactor a component or form on the React frontend, I will be up to the task. I am proficient in Ruby and Javascript, and especially savor the opportunities to flex my HTML and CSS chops.
              <br/>
              <br/>
              In my free time, I enjoy non-competitive gaming and the unique challenges of replicating my childhood games on the web. When I'm not coding, you can find me playing tennis, hiking, or just doing some sort of outdoor activity to get some much needed sun and fresh air, both of which I tend to be lacking since my newfound passion in software development.
            </p>
          </div>
        </div>
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
            A software developer who can learn and code quickly.
            <br/>
            <br/>
            I am a curious puzzle solver who loves to think and solve problems. I have experience building dynamic web applications in Ruby on Rails, JavaScript, React/Redux, and HTML/CSS within a short amount of time. And I like debugging!
            <br/>
            <br/>
          </p>
        </div>
        <div className="profile">
          <div className="profile-visuals">
            <img alt='' className="profile-pic" src="../images/walter.jpeg" />
            <p>Walter H. Wan</p>
            <div className="nav-logos">
              <a href="https://github.com/walterhwan">
                <img alt='' className="git-logo" src="../images/github.png" />
              </a>
              <a href="https://www.linkedin.com/in/hsuan-chen-walter-wan-b9854970/">
                <img alt='' className="linkedin-logo" src="../images/linkedin.png" />
              </a>
            </div>
          </div>
          <div className="profile-description">
            <p>
            A rocket science engineer turned software developer
            <br/>
            <br/>
            I am a hard working software developer with a habit of writing DRY and easily understandable code. I have experience building dynamic web app in React with Redux, JavaScript, Ruby on Rails, And HTML/CSS.
              <br/>
              <br/>
            I love learning new technologies especially when they can help us writing cleaner codes. So we can spend time problem-solving, inventing new features and improve user-experience.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
