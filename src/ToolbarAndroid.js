import { ToolbarAndroid as RNToolbarAndroid } from 'react-native';
import React from 'react';
import ThemeContext from './ThemeContext';
import getStyles from './getStyles';

const ToolbarAndroid = ({ children, className, style, ...props }) => (
	<ThemeContext.Consumer>
		{(styles) => (
			<RNToolbarAndroid style={getStyles(styles, className, style)} {...props}>
				{children}
			</RNToolbarAndroid>
		)}
	</ThemeContext.Consumer>
);

export default ToolbarAndroid;
