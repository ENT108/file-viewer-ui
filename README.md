# File Viewer UI

![Screenshot 2021-04-08 at 09 57 40](https://user-images.githubusercontent.com/25681316/113989580-e0b9a300-9850-11eb-88f5-d90c8f62ba57.png)

### What's the app does?
It's a simple app to preview sourced text files.

### Architecture
This project was bootstrapped with `create-react-app`. It's a plain ReactJS application that uses React hooks for state management. I used `react-bootstrap` to build the UI. I tried to keep it as simple as possible to deliver the requested features.

### High volume of files
To handle high volume of files:
- the app's UI would need to be checked for very log file list
- `parseFiles` and `getFiles` would need to work on chunked data
- file list pagination/lazy loading could leverage the chunks
- in extremly nested diretory structures: a Map key (where I store file paths) is limited to string max length in JS, that is 2^30

### Sources
I did not use external souces intensively as I picked known tools to build the application. Nerevtheless I visited a few times these pages:
- [reactjs.org](https://reactjs.org/ "reactjs.org")
- [react-bootstrap.github.io](https://react-bootstrap.github.io/ "react-bootstrap.github.io")
- plus some [stackoverflow.com](https://stackoverflow.com/ "stackoverflow.com") obviously

### 3rd party libs
- [reactjs.org](https://reactjs.org/ "reactjs.org")
- [Bootstrap](https://getbootstrap.com/ "Bootstrap")
- [react-bootstrap.github.io](https://react-bootstrap.github.io/ "react-bootstrap.github.io")
- [testing-library.com](https://testing-library.com/ "testing-library")
- [Jest](https://jestjs.io/ "Jest")

### Time spent
Ca. 6h. (including this doc and basic tests).

### Usage
Replace `src/data/dataSource.json` file with your own data file and run the requested shell scripts for your environment (`run.sh`, `build.sh`).

`build.sh` will build a production ready package into `./build` that you can deploy.

On top of that you can use the standard `yarn` commands:
- `yarn` to pull dependencies
- `yarn start` to run development server
- `yarn test` to run basic tests
