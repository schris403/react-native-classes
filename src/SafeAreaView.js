import { SafeAreaView as RNSafeAreaView } from 'react-native';
import React from 'react';
import ThemeContext from './ThemeContext';
import getStyles from './getStyles';

const SafeAreaView = ({ children, className, style, ...props }) => (
	<ThemeContext.Consumer>
		{(styles) => (
			<RNSafeAreaView style={getStyles(styles, className, style)} {...props}>
				{children}
			</RNSafeAreaView>
		)}
	</ThemeContext.Consumer>
);

export default SafeAreaView;
