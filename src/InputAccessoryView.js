import { InputAccessoryView as RNInputAccessoryView } from 'react-native';
import React from 'react';
import ThemeContext from './ThemeContext';
import getStyles from './getStyles';

const InputAccessoryView = ({ children, className, style, ...props }) => (
	<ThemeContext.Consumer>
		{(styles) => (
			<RNInputAccessoryView style={getStyles(styles, className, style)} {...props}>
				{children}
			</RNInputAccessoryView>
		)}
	</ThemeContext.Consumer>
);

export default InputAccessoryView;
