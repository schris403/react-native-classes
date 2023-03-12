import { KeyboardAvoidingView as RNKeyboardAvoidingView } from 'react-native';
import React from 'react';
import ThemeContext from './ThemeContext';
import getStyles from './getStyles';

const KeyboardAvoidingView = ({ children, className, style, ...props }) => (
	<ThemeContext.Consumer>
		{(styles) => (
			<RNKeyboardAvoidingView style={getStyles(styles, className, style)} {...props}>
				{children}
			</RNKeyboardAvoidingView>
		)}
	</ThemeContext.Consumer>
);

export default KeyboardAvoidingView;
