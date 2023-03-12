import { NavigatorIOS as RNNavigatorIOS } from 'react-native';
import React from 'react';
import ThemeContext from './ThemeContext';
import getStyles from './getStyles';

const NavigatorIOS = ({ children, className, style, ...props }) => (
	<ThemeContext.Consumer>
		{(styles) => (
			<RNNavigatorIOS style={getStyles(styles, className, style)} {...props}>
				{children}
			</RNNavigatorIOS>
		)}
	</ThemeContext.Consumer>
);

export default NavigatorIOS;
