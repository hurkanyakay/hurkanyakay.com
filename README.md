
![](/.github/screen.gif)

[![Build Status](https://travis-ci.org/hurkanyakay/hurkanyakay.com.svg?branch=master)](https://travis-ci.org/hurkanyakay/hurkanyakay.com) [![Greenkeeper badge](https://badges.greenkeeper.io/hurkanyakay/hurkanyakay.com.svg)](https://greenkeeper.io/)

# Portfolio

Portfolio was built using [Gatsby](https://www.gatsbyjs.org/). 

[Website](https://hurkanyakay.com/)

## Features

- Gatsby v2.0.0
- [React Spring](https://github.com/drcmda/react-spring) (Used for Parallax effect)
- [TailwindCSS](https://tailwindcss.com/) & [Emotion](https://emotion.sh/) for styling
    - Use the full power of TailwindCSS while generating small styles (as unused data gets deleted)
- SEO
    - Schema.org JSONLD
    - OpenGraph Tags
    - Twitter Tags
- [Typefaces](https://github.com/KyleAMathews/typefaces) for quicker font loading
- Offline Support
- WebApp Manifest Support
- Responsive images
    - The right image size for every screen size
    - Traced SVG Loading (Lazy-Loading)
    - WebP Support

**Please note:** The parallax effect can be quite heavy for some older CPUs and the site uses some newer CSS features which will result in incompatibility with older browsers.

## Developing

```
yarn dev
```

### Building

```
yarn build
```

## Static Serving
```
yarn serve
```

## Deploy to surge
```
yarn deploy
```

