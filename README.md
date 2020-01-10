# Game Project Scope:



## Gameboard JS + HTML representation:

An array called board of the gameboard coordinates (0 through 8,) will be the basis. An on click command, only allowed once per square to change the square to the given player symbol (at start just a 'X' or 'O', eventually plan to modify to unique symbols).


## Approach Plan:

I plan to tackle small problems while still having a larger goal in mind. Once I have a bit of framework set, goals for each day will be set. I like to think about projects like a building. Starting with framework and scaffolding(Pseudo code, basic starter design), then adding walls (JS), then finishing the inside (cleaning up JS), and finally designing the outside (CSS)


### User Stories:

- As a user I want to sign up with an email address so I can have a login.
- As a user I want to be able to sign-out so I know my account won't be accessed by someone else.
- As a user I want to be able to change my password, so I can ensure my account is secure.
- As a user I want to see my progress, so I can keep track of my games played.
- As a user I want to select a password on signup so my account can be secure.
- As a user I want to click the game board, so I can place my game piece.
- As a user I want to see a clean, clear game board, so I can focus on the game.
- As a user I want to see what symbol is current in play so the right player can make a move.


### Plan to keep code modular:

Keeping multiple files and linking them to each other to keep a clean code.

### Wireframe:
![wireframe](https://imgur.com/bZste4M)

#### Creative Spin?:

- Using different symbols for 'X' and 'O'
- Sign in/Sign up in a Navbar
- Fade gameboard for sign in
- Symbol selection (multiple pairs of symbols to use)
- Win/Loss counter
- Show an image of what symbol is up

<!-- ## Structure

### Scripts

Developers should store JavaScript files in [`assets/scripts`](assets/scripts).
The "manifest" or entry-point is
[`assets/scripts/app.js`](assets/scripts/app.js). In general, only
application initialization goes in this file. It's normal for developers to
start putting all code in this file, but encourage them to break out different
responsibilities and use the `require` syntax put references where they're
needed.

### Config

Developers should set `apiUrls.production` and `apiUrls.development` in
[`assets/scripts/config.js`](assets/scripts/config.js).  With
`apiUrls` set, developers may rely on `apiUrl` as the base for API
URLs.

### Styles

Developers should store styles in [`assets/styles`](assets/styles) and load them
from [`assets/styles/index.scss`](assets/styles/index.scss). Bootstrap version 3 is
included in this template.

### Forms and Using `getFormFields`

Developers should use [getFormFields](get-form-fields.md) to retrieve form data
to send to an API.

### Deployment

To deploy a browser-template based SPA, run `grunt deploy`.

## Adding Images

To add images to your project, you must store them in the `public` directory.
To use the image in HTML or CSS, write the path to the image like this:

```html
<img src="public/cat.jpg">
```
or
```css
#my-cool-div {
  background-image: url('public/cat.jpg')
}
```

Note that there's no `./` or `/` in front of `public/filename.jpg`.

## Adding Fonts

To add custom fonts to your app, you can either use a CDN like Google Fonts, or
you can download the fonts and save them in the `public` directory. If you use
the former method, follow the directions on the website providing the fonts.

For local fonts, put the files in `public`, and then import and use them in a
`.scss` file like this:

```scss
@font-face {
  font-family: 'Nature Beauty';
  src: url('public/Nature-Beauty.ttf') format('truetype');
}

.element-with-custom-font {
  font-family: 'Nature Beauty';
}
```

## Tasks

Developers should run these often!

- `grunt nag` or just `grunt`: runs code quality analysis tools on your code
    and complains
- `grunt make-standard`: reformats all your code in the JavaScript Standard Style
- `grunt <server|serve|s>`: generates bundles, watches, and livereloads
- `grunt build`: place bundled styles and scripts where `index.html` can find
    them
- `grunt deploy`: builds and deploys master branch


## Additional Resources

- [Modern Javascript Explained for Dinosaurs](https://medium.com/@peterxjang/modern-javascript-explained-for-dinosaurs-f695e9747b70)
- [Making Sense of Front End Build Tools](https://medium.freecodecamp.org/making-sense-of-front-end-build-tools-3a1b3a87043b)
