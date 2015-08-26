# CM_JavaScript-Exercise_7
CM Coding Exercise Submission folder - JavaScript Requirements[7]
<snippet>
  <content>
# Project Name: Open window jQury plugin

Write a jQuery plugin which, given a jQuery object containing anchor elements (e.g $('a')), makes clicking on those elements open the link target in a new window.

The plugin should:

●  Ensure that links with the same data­window­group open in the same window

●  Take an option object used to set the features on the new window (size, position, scrollbars, etc.), sensible defaults should be supplied by the plugin. 

## Environment
1. Mac OX S 10.10.5
2. WebStorm 9.0.3

## Dependencies (for testing)
- "jasmine-core": "^2.3.4",
- "jquery"
- "jasmine-jquery"

## File Structure
### tree view 

![alt tag](https://cloud.githubusercontent.com/assets/3906272/9498402/fa06485e-4c5c-11e5-9538-3a62bd88d06a.png)

## Usage
1. Dowload this 'ZIP' source code, extract the ZIP file to your local trusted path
2. Open your WebStorm
3. Open project: 'FILE -> OPEN -> *path to project* '
4. **Start to run** -> Open `index.html` or `options_test.html` with FireFox/Chrome/Safari/Opera to see results 

## Test (skip)
1. Before test, it needs to download and use `jasmine 2.3.4` framework, actually jasmine's T/BDD (test/behaviour-driven development) behaviour requires you to create tests before the implementation code. I'm still studying on BDD advanced techniques currently, like spies, and it seems I need to study AngularJS as well, such as `inject` function when I try to test `window.open` click event. So right now I only write a jQuery plugin (I just learned how to write $, so many things to fill in) 
2. Write your test under folder `spec`, with a `_spec` suffix, such as `jquery.openWindow_spec.js`, then wirte your implementation code under `src`, then add their reference to `SpecRunner.html` open `Runner` with preferred browsers, if all-pass, the page will be green, otherwise, it will list the error items in red.

## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

</content>
  <tabTrigger>readme</tabTrigger>
</snippet>
