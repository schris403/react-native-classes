import { RefreshControl as RNRefreshControl } from 'react-native';
import React from 'react';
import ThemeContext from './ThemeContext';
import getStyles from './getStyles';

const RefreshControl = ({ children, className, style, ...props }) => (
	<ThemeContext.Consumer>
		{(styles) => (
			<RNRefreshControl style={getStyles(styles, className, style)} {...props}>
				{children}
			</RNRefreshControl>
		)}
	</ThemeContext.Consumer>
);

export default RefreshControl;
