Twelve
---
Really Simple SASS Mixins & Extends to Create a Grid Layout

## Extends Method
I have a for loop running to create `%partials` to generate classes like `%column-3-12` &amp; `%grid-container` to get a nice list of partials to extend into your project.

### How it Works
You may write some SASS like this:

```
.page-wrap {
    max-width: 70rem;
    margin: 0 auto;
    section {
        width: 74%;
        margin-right: 2%;
        float: left;
    }
    aside {
        width: 26%;
        float: right;
    }
    &::after {
        content: "";
        clear: both;
        display: block;
    }
}
```

Using Twelve you can write it a simpler:

```
.page-wrap {
    %grid-container;
    section {
        %column-8-12;
    }
    aside {
        %column-4-12;
    }
}
```


## Includes Method
Start by declaring `@include grid--container($container);` on your outer container/page-wrap/whatever you want to call it. You can pass it a `max-width` of whatever you'd like.

and for the columns of your grid

```
@include column-width($span-of-columns, $context, $margin);
```

`$span` is a number of columns across and '$context' is total columns in your grid.

## Block Grid

## Media Queries

## Contributing

## Licensing
MIT

### To Do
1. Work On Media Queries
2. Clean Up Old Functions and Mixins
3. Establish a Project Hierarchy
4. Grid Block from [CSS-Tricks](http://css-tricks.com/video-screencasts/132-quick-useful-case-sass-math-mixins) Concept
5. Readme
6. Work on Github Pages
7. Show Dave Rupert
