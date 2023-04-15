# ⛔️ [DEPRECATED] htmlbars-comment-redactor

This repository is deprecated, and no longer maintained.

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
