import { Picker as RNPicker } from 'react-native';
import React from 'react';
import ThemeContext from './ThemeContext';
import getStyles from './getStyles';

const Picker = ({ children, className, style, ...props }) => (
	<ThemeContext.Consumer>
		{(styles) => (
			<RNPicker style={getStyles(styles, className, style)} {...props}>
				{children}
			</RNPicker>
		)}
	</ThemeContext.Consumer>
);

export default Picker;
