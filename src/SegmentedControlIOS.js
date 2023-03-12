import { SegmentedControlIOS as RNSegmentedControlIOS } from 'react-native';
import React from 'react';
import ThemeContext from './ThemeContext';
import getStyles from './getStyles';

const SegmentedControlIOS = ({ children, className, style, ...props }) => (
	<ThemeContext.Consumer>
		{(styles) => (
			<RNSegmentedControlIOS style={getStyles(styles, className, style)} {...props}>
				{children}
			</RNSegmentedControlIOS>
		)}
	</ThemeContext.Consumer>
);

export default SegmentedControlIOS;
