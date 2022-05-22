class Component {
	/**
	 * The constructor.
	 * @param {string} selector The selector
	 */
	constructor(selector) {
		this.$el = document.querySelector(selector);
	}
	/**
	 * Hides the associated item.
	 */
	hide() {
		this.$el.style.display = 'none';
	}
	/**
	 * _(opposite of {@link hide()})_
	 * Shows the associated item.
	 */
	show() {
		this.$el.style.display = 'block';
	}
}

class Box extends Component {
	/**
	 *
	 * @param {object} options The box's options.
	 * @param {string} options.selector The box's selector.
	 */
	constructor(options) {
		super(options.selector);
		this.$el.style.width = this.$el.style.height = options.size + 'px';
		this.$el.style.background = options.color;
	}
}

class Circle extends Box {
	constructor(options) {
		super(options);
		this.$el.style.borderRadius = '50%';
	}
}
