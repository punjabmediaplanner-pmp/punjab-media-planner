# Punjab Media Planner — Professional Portfolio

A responsive, accessible personal portfolio site in a modern corporate blue-and-white style. It uses plain HTML, CSS, and JavaScript: no framework, build step, or package installation is required.

## Project files

- `index.html` — page content, navigation, profile photo slot, and contact placeholders
- `styles.css` — colors, typography, layout, and responsive styles
- `script.js` — mobile navigation, optional photo display, and current footer year
- `assets/profile.jpg` — add your own profile photo here (the folder is ready)

## Edit your details

1. Open `index.html` in a text editor.
2. The contact email is currently set to `punjabmediaplanner@gmail.com`; change both the visible email and its `mailto:` link if needed.
3. Replace the LinkedIn placeholder link (`href="#contact"`) with the profile URL, and update the visible LinkedIn text when ready.
4. Replace `Add your city / region` if you want to show a location.
5. Add a square or portrait photo at `assets/profile.jpg`. JPG is the expected format; if you use a different filename or format, update the `profilePhoto.src` line in `script.js`.
6. Add employer names, role titles, dates, and project details only when you are ready to confirm them. The current copy intentionally avoids unprovided employment history, dates, and results.

You can also change the page text directly in `index.html`, and adjust the palette near the top of `styles.css` under `:root`.

## Run locally

For a quick preview, open `index.html` in a current browser. For a local web server, open a terminal in this project folder and run:

```sh
python -m http.server 8000
```

Then visit `http://localhost:8000`. Stop the server with `Ctrl+C`.

## Publish online

This is a static site, so any static hosting provider will work. One straightforward option is GitHub Pages:

1. Create a GitHub repository and add the contents of this project folder to its root.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**, choose the default branch and `/ (root)`, then save.
4. After the deployment finishes, GitHub Pages will show the public site address in that settings page.

Netlify, Cloudflare Pages, and similar static hosts can also publish the project by importing the repository or uploading the project folder. No build command is needed; the publish directory is the project root.

## Accessibility and responsive behavior

The site uses semantic sections and headings, a skip link, descriptive navigation, keyboard-visible focus styles, reduced-motion support, and a mobile menu with expanded-state accessibility information. Layouts adapt for tablet and phone widths.
