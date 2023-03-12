import { TabBarIOS as RNTabBarIOS } from 'react-native';
import React from 'react';
import ThemeContext from './ThemeContext';
import getStyles from './getStyles';

const TabBarIOSItem = ({ children, className, style, ...props }) => (
	<ThemeContext.Consumer>
		{(styles) => (
			<RNTabBarIOS.Item style={getStyles(styles, className, style)} {...props}>
				{children}
			</RNTabBarIOS.Item>
		)}
	</ThemeContext.Consumer>
);

export default TabBarIOSItem;
