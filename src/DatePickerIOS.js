import { DatePickerIOS as RNDatePickerIOS } from 'react-native';
import React from 'react';
import ThemeContext from './ThemeContext';
import getStyles from './getStyles';

const DatePickerIOS = ({ children, className, style, ...props }) => (
	<ThemeContext.Consumer>
		{(styles) => (
			<RNDatePickerIOS style={getStyles(styles, className, style)} {...props}>
				{children}
			</RNDatePickerIOS>
		)}
	</ThemeContext.Consumer>
);

export default DatePickerIOS;
