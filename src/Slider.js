import { Slider as RNSlider } from 'react-native';
import React from 'react';
import ThemeContext from './ThemeContext';
import getStyles from './getStyles';

const Slider = ({ children, className, style, ...props }) => (
	<ThemeContext.Consumer>
		{(styles) => (
			<RNSlider style={getStyles(styles, className, style)} {...props}>
				{children}
			</RNSlider>
		)}
	</ThemeContext.Consumer>
);

export default Slider;
