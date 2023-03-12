const getStyles = (styles, className, style) =>
	className ? [...className.split(' ').map((name) => styles[name] || {}), style] : [style];

export default getStyles;
