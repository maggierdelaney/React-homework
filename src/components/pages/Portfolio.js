import React from 'react';

export default function Portfolio() {
  return (
    <article id="work">
      <h3>Work Experience</h3>
      <div id="big-box">
        <img id="horiseon-image" src="/images/horiseon.png" alt="Picture of team working website screenshot"/>
        <h4>
          <a href="https://maggierdelaney.github.io/module-1-homework/">Code Refactoring Project</a>
        </h4>
        <p class="article-p">This project called for refactoring of the code without changing the appearance,
          as well as adding accessibility features.
        </p>
      </div>
      <div id="prework">
        <img id="prework-image" src="/images/prework.png" alt="Screenshot of website listed bullet points" />
        <h4>
          <a href="https://maggierdelaney.github.io/prework-study-guide/">Coding Bootcamp Prework</a></h4>
        <p class="article-p">This project was assigned to help familiarize students with the terminal, VS code, Github, and website deployment.</p>
      </div>
      <div id="other-work">
        <img id="github-image" src="/images/github.png" alt="Screenshot of github" />
        <h4><a href="https://github.com/maggierdelaney">Other works</a></h4>
        <p class="article-p">This project is still in development.</p>
      </div>
    </article>
  );
}
