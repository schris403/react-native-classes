import { DrawerLayoutAndroid as RNDrawerLayoutAndroid } from 'react-native';
import React from 'react';
import ThemeContext from './ThemeContext';
import getStyles from './getStyles';

const DrawerLayoutAndroid = ({ children, className, style, ...props }) => (
	<ThemeContext.Consumer>
		{(styles) => (
			<RNDrawerLayoutAndroid style={getStyles(styles, className, style)} {...props}>
				{children}
			</RNDrawerLayoutAndroid>
		)}
	</ThemeContext.Consumer>
);

export default DrawerLayoutAndroid;
