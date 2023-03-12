import { Image as RNImage } from 'react-native';
import React from 'react';
import ThemeContext from './ThemeContext';
import getStyles from './getStyles';

const Image = ({ children, className, style, ...props }) => (
	<ThemeContext.Consumer>
		{(styles) => (
			<RNImage style={getStyles(styles, className, style)} {...props}>
				{children}
			</RNImage>
		)}
	</ThemeContext.Consumer>
);

export default Image;
