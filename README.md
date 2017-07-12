[![Build Status](https://travis-ci.org/mikrostew/htmlbars-comment-redactor.svg?branch=master)](https://travis-ci.org/mikrostew/htmlbars-comment-redactor)

# htmlbars-comment-redactor

This addon redacts the contents of any HTML comments in you handlebars templates.

So a template like this:

```html
<div id="{{someVar}}">
  <!-- Here is a witty comment -->
</div>
```

renders as:

```html
<div id="whatever">
  <!--[REDACTED]-->
</div>
```
