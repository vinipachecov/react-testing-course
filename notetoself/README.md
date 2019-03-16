#Note to self

A simple to do list to use as case for our tests.

## Why write tests?

* Tests boost your own and your team's confidence in quality code.
* Tests help us update previous work and locate new bugs.
* Top-notch companies open doors for engineers who test.

## Unit Tests

* Unit tests cover the smallest possible parts of an app.

## Test tools
* Jest (Facebook)
* Enzyme (Airbnb)

PS:
To test the latest versions of React (16 or higher), we need to install enzyme-adapters lib for full compatibillity.

So install the package with the command:
```
  yarn add -D enzyme-adapter-react-16 
```

Next, add a src/tempPolyfills.js file to create the global request animation frame function that React now depends on.

src/tempPolyfills.js should contain the following contents:
```
const requestAnimationFrame = global.requestAnimationFrame = callback => {
  setTimeout(callback, 0);
}
 
export default requestAnimationFrame;
```
Finally, add a src/setupTests.js file to configure the enzmye adapter for our tests. The disableLifecyleMethods portion is needed to allow us to modify props through different tests.

src/setupTests.js should contain the following contents:
```
import requestAnimationFrame from './tempPolyfills';
 
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
configure({ adapter: new Adapter(), disableLifecycleMethods: true });
```
