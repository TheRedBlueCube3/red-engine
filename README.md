# red-engine

HTML engine for making circles and boxes.

For example, this code would work.

```js
const box = new Box({
	selector: '#box',
	size: 100,
	color: 'red'
});
```

You can also add event listeners with the $el property.
Here's how to use it:

```js
const box = new Box({
	selector: '#box',
	size: 100,
	color: 'red'
});
box.$el.addEventListener('click', function () {
	console.log('You touched me!');
});
```

You can also do pretty much everything with the $el property which is included in HTML.

_Note: You have to do type=module when importing your JavaScript file in your HTML file._
