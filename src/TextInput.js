import { TextInput as RNTextInput } from 'react-native';
import React from 'react';
import ThemeContext from './ThemeContext';
import getStyles from './getStyles';

const TextInput = ({ children, className, style, ...props }) => (
	<ThemeContext.Consumer>
		{(styles) => (
			<RNTextInput style={getStyles(styles, className, style)} {...props}>
				{children}
			</RNTextInput>
		)}
	</ThemeContext.Consumer>
);

export default TextInput;
