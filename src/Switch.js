import { Switch as RNSwitch } from 'react-native';
import React from 'react';
import ThemeContext from './ThemeContext';
import getStyles from './getStyles';

const Switch = ({ children, className, style, ...props }) => (
	<ThemeContext.Consumer>
		{(styles) => (
			<RNSwitch style={getStyles(styles, className, style)} {...props}>
				{children}
			</RNSwitch>
		)}
	</ThemeContext.Consumer>
);

export default Switch;
