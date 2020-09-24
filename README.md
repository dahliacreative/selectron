# !!! NOT ACTIVELY MAINTAINED !!!
I am no longer maintaining this proejct, if you want to take over, feel free to drop me a msg.

# Selectron

_An accessible jQuery custom select, styled with sass for easy customization_  
[http://dahliacreative.github.io/selectron/](http://dahliacreative.github.io/selectron/)


## Installation

### Bower

```sh
bower install --save jquery-selectron
```

## Usage

### HTML

```html
<select class="selectron">
  <option value="">Please select something</option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</select>
```

### JS

```js
$('.selectron').selectron();
```

### Search

You can enable search by passing the option when you initialize the plugin.

```js
$('.selectron').selectron({
  search: true
});
```

Alternativley you can enable/disable search on inidividual instances using a data attribute:

```html
<select class="selectron" data-selectron-search="true">
  <option value="">Please select something</option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</select>
```

## Themes

There are three default themes, light, dark and block. The light theme is applied by default, to apply the dark theme simply add the `selectron--dark` class to your select, and to apply the block theme simply add `selectron--block`.

```html
<select class="selectron selectron--dark">
  <option value="">Please select something</option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</select>
```

```html
<select class="selectron selectron--block">
  <option value="">Please select something</option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</select>
```

## Icons

You can add an icon to your options by simply adding a `data-icon` attribute to the option.

```html
<select class="selectron selectron--dark">
  <option value="">Please select something</option>
  <option value="1" data-icon="http://placehold.it/30x20">Option 1</option>
  <option value="2" data-icon="http://placehold.it/30x20">Option 2</option>
</select>
```

## Classes

Any classes you add to your select or option will get copied across to selectron, this is useful for custom themes or for adding icons to options.

```html
<select class="selectron my-class">
  <option value="">Please select something</option>
  <option value="1" class="my-class">Option 1</option>
  <option value="2" class="my-class">Option 2</option>
</select>
```

## Customization

Selectron has been written to be easily customized using Sass variables. To overwrite the defaults simply define your variables before the inclusion of `selectron.sass`.

### Available variables

```sass
$selectron-border-radius:           4px !default
$selectron-border-width:            1px !default
$selectron-color-background-dark:   #363636 !default
$selectron-color-background-light:  #ffffff !default
$selectron-color-brand:             #f70c36 !default

$selectron-color-font-dark:         #666666 !default
$selectron-color-font-light:        #999999 !default
$selectron-font-family:             sans-serif !default
$selectron-font-size:               13px !default
$selectron-line-height:             1.2 !default
$selectron-text-align:              left !default

$selectron-max-width:               400px !default
$selectron-min-width:               200px !default
$selectron-height:                  50px !default
$selectron-options-max-height:      200px !default

$selectron-padding:                 17px 50px 18px 18px !default
$selectron-option-padding:          13px 18px 14px !default
$selectron-optgroup-padding:        13px 18px 14px 28px !default

$selectron-arrow-border-width:      2px !default
$selectron-arrow-border-radius:     0px !default
$selectron-arrow-size:              10px !default
$selectron-block-width:             50px !default

$selectron-max-icon-size:           50px !default
$selectron-icon-margin:             0 10px 0px 0 !default
```

## Events

Selectron triggers a `change` event on the `select`;

## Methods

Selectron provides an `selectron.update` method which when triggered on the `select` will re-populate the options. It also provides a `selectron.change` method which when triggered on the `select` will update the sellectron trigger to match the value of the `select`

## License

Copyright (c) 2016 Simon Sturgess

Licensed under the MIT license.
