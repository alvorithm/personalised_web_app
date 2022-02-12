# title(){return this.options.title||this.options.name}

Quick start:

```
$ yarn # npm install
$ yarn build # npm run build
````

## Development

Run Webpack in watch-mode to continually compile the JavaScript as you work:

```
$ yarn watch # npm run watch
```

## Struggling to start react project? Try this:

Change the version values of react-dom and react within the package.json config file. For this instance the version used is 16.13.1 respectively.

Thereafter, delete node_modules and package-lock.json (not package.json) then run npm install

## React Website

	This is a web app adpated using the react library.

	The react app uses a query hook to make an API call to the unsplash website to render javascript related images in the web page.

	The number of images requested are 20 plus images.

	When you hit the refresh button new images are rendered. 

## Learnings

Learnt how to adapt a react app to make use of API infrastructure to pull images from another web application using a query hook.

Learnt correct way to structure files across react directorires. It is good practice to keep the style and basic css files within the same directory as the index.html file. This simplifies the refrencing and linking of css files within index.html

I learnt the difference bewteen a website and web app.

The version of the react build should correspond to the versions specified in the package.json config file for react and reatc dom. Even though react generally is backward compatible - however, some web applications are finicky when it comes to dependencies.

Learnt how to display name of web app in home page.

Uploaded image to a CDN (Sirv) to host images and then use the link as a css variable to reference that variable as a way to change images of backgrounds and even borders.

The same background image was use for the border image. I choose this to have a consistent them with the web app. Using images for borders is similar to applying materials to game assets or graphical objects.







