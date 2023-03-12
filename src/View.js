import { View as RNView } from 'react-native';
import React from 'react';
import ThemeContext from './ThemeContext';
import getStyles from './getStyles';

const View = ({ children, className, style, ...props }) => (
	<ThemeContext.Consumer>
		{(styles) => (
			<RNView style={getStyles(styles, className, style)} {...props}>
				{children}
			</RNView>
		)}
	</ThemeContext.Consumer>
);

export default View;
