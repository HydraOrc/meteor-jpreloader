# meteor-jpreloader
Preloading screen (aka. splash screen) for your website with velocty.js animations. Thanks to https://github.com/kennyooi/jpreloader and https://atmospherejs.com/percolate:velocityjs

## Usage (CoffeeScript)

```
Template.layout.onRendered ->
  $('body').jpreLoader()
```

## Usage (JavaScript)

```
Template.layout.onRendered(function() {
  return $('body').jpreLoader();
});
```
