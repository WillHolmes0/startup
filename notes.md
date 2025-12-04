# CS 260 Notes

##test heder
this is a text bit of text

[My startup - Simon](https://simon.cs260.click)


## What I learned from the first assignmentS

I learned that you can use commands to push and pull in git bash. for example: `git pull origin main`
You can edit code and commmit it in the web editor by pressing "." when in the home page of a repository. 

Also, there is syntax in markdown that you can use to add fucntionality and style to your markdown file such as **Bold**.

I also learned how personal tokens work. They take the place of passwords and can be given select permissions for a file like read, write, etc. 
I also learned how to create a token. I also learned a bit of the differences between classic tokens and fine grained tokens.

You can also create a link useing brackets and parenthesis the this \[tile\]\(the url goes here\) [here is a link](google.com)

You can make a list with \* and \- and \+. sublists need to have their special character directly underneath the first character of the parent list.
* here is a list
  - this is a sublist.



## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org) 

## AWS

My IP address is: 54.81.96.130

To Deploy to simon:
./deployFiles.sh -k <yourpemkey> -h <yourdomain> -s simon

## Caddy


## HTML



## CSS


## React Part 1: Routing
```
<BrowserRouter>
  <Navlink to='home'>Home</Navlink>

  <Routes>
    <Route path='/home' element={<Home />} />
  </Routes>
</BrowserRoutes>
```
in the home.jsx file have a function called 'Home' that can be called. 

## React Part 2: Reactivity

```jsx
<div className="input-group sound-button-container">
  {calmSoundTypes.map((sound, index) => (
    <div key={index} className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        value={sound}
        id={sound}
        onChange={() => togglePlay(sound)}
        checked={selectedSounds.includes(sound)}
      ></input>
      <label className="form-check-label" htmlFor={sound}>
        {sound}
      </label>
    </div>
  ))}
</div>
```
## Websocket

 - both a websocket and a websocket server are used. 
 - when setting up the server, the handler for the socket.on(message) should me inside of the function for the websocketserver.on('connection', () => {}) function
 - you need an on connect method for each. Each uses an object class, so they are kind of simple. 

