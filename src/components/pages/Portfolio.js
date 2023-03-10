import React from 'react';
import './style.css';

export default function Portfolio() {
  return (
    <article id="work">
      <h2>Projects</h2>
      <div id="big-box">
        <img id="spoonfed-reviews" src="React-homework/images/spoonfed-reviews.png" alt="spoonfed website"/>
        <h4>
          <a href="https://spoon-fed-reviews.herokuapp.com/">Spoon-Fed Reviews</a>
        </h4>
        <p class="article-p">A website dedicated to sharing and reviewing recipes created by users. As a user, you are able to create a login and profile, where you can then write and upload recipes. Your recipes are stored in your profile and can be viewed by other users. Other users may comment on to "review" your recipe. The user has access to a compiled list of their recipes.
        </p>
        <p>
          Github repository: <a href="https://github.com/FarmFreshYeets/spoon-fed-reviews">Spoon-Fed Reviews</a>
        </p>
      </div>
      <div id="inmyfeels">
        <img id="inmyfeels-image" src="React-homework/images/inmyfeels.png" alt="Screenshot of website" />
        <h4>
          <a href="https://iseanc.github.io/in-my-feels/">"In My Feels" Random Playlist Generator</a></h4>
        <p class="article-p">This website is interactive in that it asks the user to select a "mood" from the dropdown menu, after which it will produce random song playlists related to that mood. The content is produced by utilizing a keyword search to request the content in both the Youtube and Mixcloud APIs.</p>
        <p>
          Github repository: <a href="https://github.com/iseanc/in-my-feels">"In My Feels"</a>
        </p>
      </div>
      <div id="tech-blog">
        <img id="tech-blog-image" src="React-homework/images/tech-blog.png" alt="Screenshot of tech blog website" />
        <h4><a href="https://mvc-homework.herokuapp.com/">Tech Blog</a></h4>
        <p class="article-p">This project called for use of model-view-controller to create a "Tech Blog" where users must create a login, and use CRUD operations to create blogs, update blogs, delete their blogs and also leave comments on another blog.</p>
        <p>
          Github repository: <a href="https://github.com/maggierdelaney/MVC-homework">Tech Blog</a>
        </p>
      </div>
      <div id="note-taker">
        <img id="note-taker-image" src="React-homework/images/note-taker.png" alt="Screenshot of note taker website" />
        <h4><a href="https://note-taker-express-maggie.herokuapp.com/">Note Taker Application</a></h4>
        <p class="article-p">This project called for use of express.js to create routes for performing CRUD operations for the user to create, update and delete notes.</p>
        <p>
          Github repository: <a href="https://github.com/maggierdelaney/express-homework">Note Taker Application</a>
        </p>
      </div>
      <div id="weather">
        <img id="weather-image" src="React-homework/images/weather.png" alt="Screenshot of weather forecast website" />
        <h4><a href="https://maggierdelaney.github.io/module-6-weather/">Weather Forecast</a></h4>
        <p class="article-p">This project called for use of a weather API to create real-time weather report as well as a 5-day forecast.</p>
        <p>
          Github repository: <a href="https://github.com/maggierdelaney/module-6-weather">Weather Forecast Application</a>
        </p>
      </div>
      <div id="password-generator">
        <img id="password-image" src="React-homework/images/password.png" alt="Screenshot of password generator website" />
        <h4><a href="https://maggierdelaney.github.io/module-3-hw/">Random Password Generator</a></h4>
        <p class="article-p">This project called for use of javascript to help users generate a random password based on pre-selected criteria.</p>
        <p>
          Github repository: <a href="https://github.com/maggierdelaney/module-3-hw">Random Password Generator</a>
        </p>
      </div>
    </article>
  );
}
