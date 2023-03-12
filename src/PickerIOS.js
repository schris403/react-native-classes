import { PickerIOS as RNPickerIOS } from 'react-native';
import React from 'react';
import ThemeContext from './ThemeContext';
import getStyles from './getStyles';

const PickerIOS = ({ children, className, style, ...props }) => (
	<ThemeContext.Consumer>
		{(styles) => (
			<RNPickerIOS style={getStyles(styles, className, style)} {...props}>
				{children}
			</RNPickerIOS>
		)}
	</ThemeContext.Consumer>
);

export default PickerIOS;
