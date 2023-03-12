import { ActivityIndicator as RNActivityIndicator } from 'react-native';
import React from 'react';
import ThemeContext from './ThemeContext';
import getStyles from './getStyles';

const ActivityIndicator = ({ children, className, style, ...props }) => (
	<ThemeContext.Consumer>
		{(styles) => (
			<RNActivityIndicator style={getStyles(styles, className, style)} {...props}>
				{children}
			</RNActivityIndicator>
		)}
	</ThemeContext.Consumer>
);

export default ActivityIndicator;
