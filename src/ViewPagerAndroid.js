import { ViewPagerAndroid as RNViewPagerAndroid } from 'react-native';
import React from 'react';
import ThemeContext from './ThemeContext';
import getStyles from './getStyles';

const ViewPagerAndroid = ({ children, className, style, ...props }) => (
	<ThemeContext.Consumer>
		{(styles) => (
			<RNViewPagerAndroid style={getStyles(styles, className, style)} {...props}>
				{children}
			</RNViewPagerAndroid>
		)}
	</ThemeContext.Consumer>
);

export default ViewPagerAndroid;
