import { VirtualizedList as RNVirtualizedList } from 'react-native';
import React from 'react';
import ThemeContext from './ThemeContext';
import getStyles from './getStyles';

const VirtualizedList = ({ children, className, style, ...props }) => (
	<ThemeContext.Consumer>
		{(styles) => (
			<RNVirtualizedList style={getStyles(styles, className, style)} {...props}>
				{children}
			</RNVirtualizedList>
		)}
	</ThemeContext.Consumer>
);

export default VirtualizedList;
