# Twelve

<a href="https://github.com/charlespeters/VVWIP" align="right">
  <img src="https://unpkg.com/vvwip/IGVP.svg" align="right" alt="IGVP" />
</a>

Really Simple Sass Mixins & Extends to Create a Grid Layout

## Extends Method
I have a for loop running to create `%partials` to generate classes like `%column-3-12` &amp; `%grid-container` to get a nice list of partials to extend into your project.

### How it Works
You may write some Sass like this:

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
  @extend %grid-container;
  section { @extend %column-8-12; }
  aside { @extend %column-4-12; }
}
```


## Includes Method
Start by declaring `@include grid--container($container);` on your outer container/page-wrap/whatever you want to call it. You can pass it a `max-width` of whatever you'd like.

and for the columns of your grid

```
@include column-width($span-of-columns, $context, $margin);
```

`$span` is a number of columns across and `$context` is total columns in your grid.

### Media Queries

### Contributing
Uhhh Please do?

### Licensing
MIT or GPL or WTFLP or Something

### To Do
0. Finish README.md
1. Work On Media Queries
