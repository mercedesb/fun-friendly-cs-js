# Fun, Friendly Computer Science

Code samples to support my "Fun, Friendly Computer Science" talk.

## Talk Abstract
Computer science concepts like Big O Notation, set theory, data structures, and principles of object-oriented programming sound intimidating, but they don’t have to be! This talk will dive into some fundamental computer science topics and debunk the myth that only ‘real’ programmers know CS.

Whether you are a bootcamp grad, self-taught career switcher, or someone who, like me, didn't pay attention in night class, join me as we explore some computer science theory behind the code we write every day through fun illustrations and real-world examples.

## Why is the code in Javascript?

All of the code samples are written in vanilla javascript ([ECMAScript 6](http://es6-features.org) so we can take advantage of classes and other new features). I chose JS because it's not known for being particularly object oriented. I wanted to show that object oriented programming is more a way of thinking and less about the specific language or framework. 

JS also felt like the most accessible language choice since most people have probably dabbled at some point in their career or know a JS framework (React/Vue/Angular), and if neither of those things are true, the new class syntax is ES6 is pretty similar to a lot of other languages that people probably have experience with making it easy to read and follow along.

## Dependencies

I tried to reduce dependencies as much as possible. This project uses [Yarn](https://yarnpkg.com) as the package manager. If you don't already have Yarn and are on Mac or Linux, you can use [Homebrew](https://brew.sh/) to install it

```
brew install yarn
```

## Project set up
```
git clone https://github.com/mercedesb/fun-friendly-cs.git
cd fun-friendly-cs
yarn install
yarn start
```

## Running the tests
This project uses [Jest](https://jestjs.io/docs/en/getting-started) as the javascript unit testing framework.
```
yarn test
```