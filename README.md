Twelve
---

## Really Simple SASS Mixins to Create a Grid Layout

Start by declaring `@include grid--container($container);` on your outer container/page-wrap/whatever you want to call it. You can pass it a `max-width` of whatever you'd like.

and for the columns of your grid

```
@include column-width($span-of-columns, $context, $margin);
```

`$span` is a number of columns across and '$context' is total columns in your grid.

*More to Come*


### To Do
1. Work On Media Queries
2. Clean Up Old Functions and Mixins
3. Establish a Project Hierarchy
4. Grid Block from [CSS-Tricks](http://css-tricks.com/video-screencasts/132-quick-useful-case-sass-math-mixins) Concept
5. Readme
6. Work on Github Pages
7. Show Dave Rupert
