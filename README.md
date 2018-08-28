# derp-game

## Developer Setup
1. Clone this repo to your desktop.
2. run `npm install` to install all the server dependencies.
3. `cd` into the client directory and run `npm install` again to install all the client dependencies.
4. Call `npm run dev` to start both the server and create-react-app, you can view the running app at localhost:3000
5. **WARNING** all changes pushed to master are currently being auto-deployed on the heroku instance (https://derp-game.herokuapp.com/)
6. peak inside the root level 
---

## Directories
- **client** React and static front-end files
  - **public** static files
  - **src** React source files
    - **components** React Components
    - **resources** media resources (sprites, gifs, images, etc)
    - **socket** Socket io helper functions/classes
- **server_modules** All the above plus send global alerts and promote/demote users

---
