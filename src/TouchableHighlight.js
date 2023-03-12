import { TouchableHighlight as RNTouchableHighlight } from 'react-native';
import React from 'react';
import ThemeContext from './ThemeContext';
import getStyles from './getStyles';

const TouchableHighlight = ({ children, className, style, ...props }) => (
	<ThemeContext.Consumer>
		{(styles) => (
			<RNTouchableHighlight style={getStyles(styles, className, style)} {...props}>
				{children}
			</RNTouchableHighlight>
		)}
	</ThemeContext.Consumer>
);

export default TouchableHighlight;
