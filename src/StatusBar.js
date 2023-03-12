import { StatusBar as RNStatusBar } from 'react-native';
import React from 'react';
import ThemeContext from './ThemeContext';
import getStyles from './getStyles';

const StatusBar = ({ children, className, style, ...props }) => (
	<ThemeContext.Consumer>
		{(styles) => (
			<RNStatusBar style={getStyles(styles, className, style)} {...props}>
				{children}
			</RNStatusBar>
		)}
	</ThemeContext.Consumer>
);

export default StatusBar;
