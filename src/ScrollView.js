import { ScrollView as RNScrollView } from 'react-native';
import React from 'react';
import ThemeContext from './ThemeContext';
import getStyles from './getStyles';

const ScrollView = ({ children, className, style, ...props }) => (
	<ThemeContext.Consumer>
		{(styles) => (
			<RNScrollView style={getStyles(styles, className, style)} {...props}>
				{children}
			</RNScrollView>
		)}
	</ThemeContext.Consumer>
);

export default ScrollView;
