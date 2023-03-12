import { ProgressViewIOS as RNProgressViewIOS } from 'react-native';
import React from 'react';
import ThemeContext from './ThemeContext';
import getStyles from './getStyles';

const ProgressViewIOS = ({ children, className, style, ...props }) => (
	<ThemeContext.Consumer>
		{(styles) => (
			<RNProgressViewIOS style={getStyles(styles, className, style)} {...props}>
				{children}
			</RNProgressViewIOS>
		)}
	</ThemeContext.Consumer>
);

export default ProgressViewIOS;
