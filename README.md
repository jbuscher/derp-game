# derp-game

## Developer Setup
1. Clone this repo to your desktop.
2. Run `yarn install` to install all dependencies.
3. Run `yarn dev` from the root directory to start both the server and and webpack, you can view the running app at localhost:5000. Between changes, webpack and the server will auto update, but you will have to refresh the page to see changes.
4. Production version of the app is published at (https://derp-game.herokuapp.com/)
---

## Directories
<pre class="highlight"><code>
└── root 
    ├── server.js  -  main for running the game server
    ├── webpack.config.js  -  webpack configurations for bundling all client-side js code (outputs to dist/ directory)
    ├── .eslintrc  -  root level eslint configurations
    └── src
        ├── clientApi  -  socketio emitters and receivers for the client
        ├── components  -  React components
        ├── gameResources  -  (may be deleted/renamed) media and images for graphics of the game
        ├── models  -  data models to represent game state 
    ├── public  -  public staic files     
    └── dist  -  (not it git) where webpack builds bundled js to.
</code></pre>

---
