# a11y-dropdown
An accessible dropdown navigation for websites.

## Accessibility support
This dropdown menu works for mouse and keyboard input devices. I'm working on a touch-friendly update.

## Todos
* Hide the menu items until they're explicityly opened to reduce auditory clutter.
* Make the menu itself identifiable in landmark dialogs

## WordPress
It was built around the output HTML that WordPress uses in its `wp_nav()` function, but can be modified easily to suit other dropdown navigation systems.

It currently only goes one level deep. I've intentionally excluded sub-sub menus from showing up as I think sites with deep navigation can be confusing. Keep it simple.

## Changelog
* v0.1 26 May 2016 First commit includes dropdown script and basic styles.

## Contributions
Feel free to contribute. Fork and PR.

## License
MIT license

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
