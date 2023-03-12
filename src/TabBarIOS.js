import { TabBarIOS as RNTabBarIOS } from 'react-native';
import React from 'react';
import ThemeContext from './ThemeContext';
import getStyles from './getStyles';

const TabBarIOS = ({ children, className, style, ...props }) => (
	<ThemeContext.Consumer>
		{(styles) => (
			<RNTabBarIOS style={getStyles(styles, className, style)} {...props}>
				{children}
			</RNTabBarIOS>
		)}
	</ThemeContext.Consumer>
);

export default TabBarIOS;
