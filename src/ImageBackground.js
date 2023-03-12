import { ImageBackground as RNImageBackground } from 'react-native';
import React from 'react';
import ThemeContext from './ThemeContext';
import getStyles from './getStyles';

const ImageBackground = ({ children, className, style, ...props }) => (
	<ThemeContext.Consumer>
		{(styles) => (
			<RNImageBackground style={getStyles(styles, className, style)} {...props}>
				{children}
			</RNImageBackground>
		)}
	</ThemeContext.Consumer>
);

export default ImageBackground;
