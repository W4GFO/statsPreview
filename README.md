# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Specifically:

```
> npx create-react-app stats-preview --template typescript
```

## Architecture

The project's structure is:

	+ Each tsx/react component file has a single corresponding scss which shares the same file name (except different extensions)
	
	+ There is a single style sheet where all the common styling variables are defined to be used by all component's style sheets
	
	+ The react components which make up the bulk of the UI are in the 'src/Components' directory
	
	+ The base react application structure files remain directly under the 'src' directory  

	The components structure is outlined at follows:

	/src
		- index.tsx
		- App.tsx
	
	/src/Components
		- ContentGroupingFrame //Contains the textual contents of the display
		- GroupImageFrame      //Contains the primary image displayed in the project
		- ParentFrame          //Is the container which holds the ContentGroupingFrame and GroupImageFrame

### Additional npm installs

Included the SASS Node package

	```
	> npm install sass
	```

### Current Issues

I'm not certain if the issue is in the GroupImageFrame, ContentGroupingFrame, ParentFrame, or at the 'app.scss' styling.

In desktop, as the size expands betwee about 750px and 1200px the desktop resizing gets really messed up.  I have tried 
about everything I can think of but it starts to feel very wrong everytime I add in another margin, width, or padding parameter.
Essentially, at this point I'm just guessing.

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
