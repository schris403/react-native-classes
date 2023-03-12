import { Text as RNText } from 'react-native';
import React from 'react';
import ThemeContext from './ThemeContext';
import getStyles from './getStyles';

const Text = ({ children, className, style, ...props }) => (
	<ThemeContext.Consumer>
		{(styles) => (
			<RNText style={getStyles(styles, className, style)} {...props}>
				{children}
			</RNText>
		)}
	</ThemeContext.Consumer>
);

export default Text;
