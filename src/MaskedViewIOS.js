import { MaskedViewIOS as RNMaskedViewIOS } from 'react-native';
import React from 'react';
import ThemeContext from './ThemeContext';
import getStyles from './getStyles';

const MaskedViewIOS = ({ children, className, style, ...props }) => (
	<ThemeContext.Consumer>
		{(styles) => (
			<RNMaskedViewIOS style={getStyles(styles, className, style)} {...props}>
				{children}
			</RNMaskedViewIOS>
		)}
	</ThemeContext.Consumer>
);

export default MaskedViewIOS;
