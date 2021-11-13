# SASS

Install sass globally on your machine by using npm install -g sass

You can then use sass **--watch path/file-to-compile.scss path/compiled.css** in the terminal to autocompile
the scss file every time you save it.

You can also use an VSCode extension called Live Sass Compiler.

If you do use it, go to settings in your visual studio code, look for live sass compiler and click on edit in settings.json

Here you should add these two properties.

```
  "liveSassCompile.settings.generateMap": false,
  "liveSassCompile.settings.formats": [
    {
      "format": "compressed",
      "extensionName": ".css",
      "savePath": "/css"
    }
  ],
```

## Variables

Think of variables as a way to store information that you want to reuse throughout your stylesheet. You can store things like
colors, font stacks, or any CSS value you think you'll want to reuse. Sass uses the $ symbol to make something a variable.
When the Sass is processed, it takes the variables we define for the $font-stack and $primary-color and outputs normal CSS with our variable values placed in the CSS. This can be extremely powerful when working with brand colors and keeping them consistent throughout the site.

## Nesting

When writing HTML you've probably noticed that it has a clear nested and visual hierarchy. CSS, on the other hand, doesn't.

Sass will let you nest your CSS selectors in a way that follows the same visual hierarchy of your HTML. Be aware that overly nested rules will result in over-qualified CSS that could prove hard to maintain and is generally considered bad practice.

## Modules

You don't have to write all your Sass in a single file. You can split it up however you want and import it with the @import rule. This rule loads another Sass file as a module, which means you can refer to its variables, mixins, and functions in your Sass file with a namespace based on the filename. Using a file will also include the CSS it generates in your compiled output!

## Mixins

Some things in CSS are a bit tedious to write, especially with CSS3 and the many vendor prefixes that exist. A mixin lets you make groups of CSS declarations that you want to reuse throughout your site. It helps keep your Sass very DRY. You can even pass in values to make your mixin more flexible.

## Inheritance

Using @extend lets you share a set of CSS properties from one selector to another. In our example we're going to create a simple series of messaging for errors, warnings and successes using another feature which goes hand in hand with extend, placeholder classes. A placeholder class is a special type of class that only prints when it is extended, and can help keep your compiled CSS neat and clean.

## Operators

Doing math in your CSS is very helpful. Sass has a handful of standard math operators like +, -, \*, math.div(), and %.

## Conditionals

You can use

```
@if (some_condition) {
    @return $something;
} @else {
    @return $other-thing;
}
```

to set up some conditional logic in your code. This is great in functions where you can use the @return to return something
just like in javascript.

## Each

You can use @each to iterate over some value, and do stuff for each value.
One example is to create multiple classes, like in our example.
