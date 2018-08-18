# solovina-ui
solovina-ui is part of the Ctrl platform. 

## Getting started
To run this project locally, please clone or download the project files. 

### Prerequisites
Make sure you have Node installed on your system by running:

```bash
node -v // => v8.9.3
```

### Installing
After cloning or downloading the files, browse to the project folder and run:


```bash
npm install
```


##Commit convention
Please note to use this template for commit messages:
```
<type>(<scope>): <subject>

<body?>

<footer?>
```
- **\<type\>** - the type of change that you're committing
   - Must be one of the following:
     - **chore**: Changes to the build process or auxiliary tools and libraries such as documentation generation
     - **feat**: A new feature
     - **docs**: Documentation only changes
     - **fix**: A bug fix
     - **refactor**: A code change that neither fixes a bug nor adds a feature
     - **test**: Adding missing tests or correcting existing tests
     - **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
     - **ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
     - **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
     - **perf**: A code change that improves performance

- **\<scope\>** - the scope of this change
- **\<subject\>** - short, imperative tense description of the change

####Referencing issues

Closed bugs should be listed on a separate line in the footer/body prefixed with "Closes" keyword like this:

```
Closes DF-234
```

or in case of multiple issues:
```
Closes DF-123, DF-245
```

##Branch naming convention
Please note to use this template for branch names:
```
<type>/<JIRA-ref>-<description> 
```
e.g. fix/DF-1234-fix-the-thing

- **\<type\>** - the type of change that you're committing
   - Available types:
     - **bug**    - Code changes linked to a known issue.
     - **feat**   - New feature.
     - **hotfix** - Quick fixes to the codebase.
     - **junk**   - Experiments (will never be merged).
- **\<JIRA-ref\>** - the JIRA issue ref
- **\<description\>** - short description in hyphen case. Always use dashes to seperate words, and keep it short.


or if you use yarn simply run `yarn`.

Make sure to copy the content of `.env.sample` to a new `.env` file.
After you will be able to start up a web server by running


```bash
npm run start:dev
```

or `yarn dev`

## Running tests
To run the unit tests for the components, please run:


```bash
npm run test
```

## Deployment
To build a production ready app, please run:

```bash
npm run build
```

## Debug mode
To run project in debug mode, please run:
```bash
npm run start:debug:dev
```
In the debug mode Webpack Bundle Analyzer will be enabled.

## Important Notes
- Webpack is excluding unnecessary locales from 'moment.js' library. Locales included by default are: en, nl, fr, ca.<br>
If you want to add new locale, find **./config/webpack/plugins.js**<br>
```
new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en|nl|fr|ca/)
```
and add new locale.


## Built with
- [React](https://github.com/facebook/react)
- [Redux](https://github.com/reactjs/redux)
- [Redux Saga](https://github.com/redux-saga/redux-saga)
