import { WebView as RNWebView } from 'react-native';
import React from 'react';
import ThemeContext from './ThemeContext';
import getStyles from './getStyles';

const WebView = ({ children, className, style, ...props }) => (
	<ThemeContext.Consumer>
		{(styles) => (
			<RNWebView style={getStyles(styles, className, style)} {...props}>
				{children}
			</RNWebView>
		)}
	</ThemeContext.Consumer>
);

export default WebView;
