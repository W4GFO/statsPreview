# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Specifically:

```
> npx create-react-app stats-preview --template typescript
```

## Architecture

The project's structure is:
- Each tsx/react component file has a single corresponding scss which shares the same file name (except different extensions)
- There is a single style sheet where all the common styling variables are defined to be used by all component's style sheets
- The react components which make up the bulk of the UI are in the 'src/Components' directory
- The base react application structure files remain directly under the 'src' directory  


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

I'm not certain why the following resolved the text side of the content from overflowing when in desktop:

Line 47: ParentFrame.scss

```
padding-right: 500px;
```

BUT, the below will fail miserably...

```
margin-right: 500px;
```

---

Also, why the following works great (Line 8: GroupImageFrame.scss):

```
	height: 100%;
```

But the following (original code) does not:

```
	height: auto;
```


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
