# jxl-paper-date-picker

Calendar and date picker for Polymer 1.x based on [Material Design guidelines](https://www.google.com/design/spec/components/pickers.html#pickers-date-pickers).

![logo](jxl-paper-date-picker.png)

# Instructions

1. run `bower install jxl-paper-date-picker --save`
2. import via `<link rel="import" href="jxl-paper-date-picker.html">`
3. use via `<jxl-paper-date-picker></jxl-paper-date-picker>`

To see demo, run `node server.js`

# Changelog

v0.0.1 (9.16.2015)

- initial `<jxl-paper-calendar>`
- initial `<jxl-paper-date-picker>`
- both basically work
- basic local server to see demo with optional BrowserSync support via `browser-sync start --proxy "localhost:9038" --files "*.html"`
- basic Grunt functionality, which for now, is just `grunt jshint`