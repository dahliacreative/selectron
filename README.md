#Selectron

_An accessible jQuery custom select, styled with sass for easy customization_  
[http://dahliacreative.github.io/selectron/](http://dahliacreative.github.io/selectron/)


##Installation

###Bower
```
bower install --save jquery-selectron
```

##Usage

###HTML
```
<select class="selectron">
  <option value="">Please select something</option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</select>
```

###JS
```
$('.selectron').selectron();
```

##Themes
There are two default themes, light and dark. The light theme is applied by default, to apply the dark theme simply add the `selectron--dark` class to your select, or any other class you want to be added to selectron.
```
<select class="selectron selectron--dark">
  <option value="">Please select something</option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</select>
```

##Customization
Selectron has been written to be easily customized using Sass variables. To overwrite the defaults simply define your variables before the inclusion of `selectron.sass`.

###Available variables
```
$selectron-border-radius:           4px !default
$selectron-border-width:            1px !default
$selectron-color-background-dark:   #363636 !default
$selectron-color-background-light:  #ffffff !default
$selectron-color-brand:             #f70c36 !default

$selectron-color-font-dark:         #666666 !default
$selectron-color-font-light:        #999999 !default
$selectron-font-family:             sans-serif !default
$selectron-font-size:               13px !default

$selectron-max-width:               400px !default
$selectron-min-width:               200px !default
$selectron-height:                  50px !default

$selectron-padding:                 17px 50px 18px 18px !default
$selectron-option-padding:          13px 18px 14px !default
$selectron-optgroup-padding:        13px 18px 14px 28px !default

$selectron-arrow-border-width:      2px !default
$selectron-arrow-border-radius:     0px !default
$selectron-arrow-size:              10px !default
```

##Events
Selectron triggers a `selectron.change` event on the original `select` for you to listen to. This allows you to change the value of the `select` dynamically and trigger a `change` event, which in turn will update selectron.

##Methods
Selectron provides an `selectron.update` method which when triggered on the original `select` will re-populate the options.

##License
Copyright (c) 2016 Simon Sturgess

Licensed under the MIT license.
