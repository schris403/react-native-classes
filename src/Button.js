import { Button as RNButton } from 'react-native';
import React from 'react';
import ThemeContext from './ThemeContext';
import getStyles from './getStyles';

const Button = ({ children, className, style, ...props }) => (
	<ThemeContext.Consumer>
		{(styles) => (
			<RNButton style={getStyles(styles, className, style)} {...props}>
				{children}
			</RNButton>
		)}
	</ThemeContext.Consumer>
);

export default Button;
