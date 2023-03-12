import { SnapshotViewIOS as RNSnapshotViewIOS } from 'react-native';
import React from 'react';
import ThemeContext from './ThemeContext';
import getStyles from './getStyles';

const SnapshotViewIOS = ({ children, className, style, ...props }) => (
	<ThemeContext.Consumer>
		{(styles) => (
			<RNSnapshotViewIOS style={getStyles(styles, className, style)} {...props}>
				{children}
			</RNSnapshotViewIOS>
		)}
	</ThemeContext.Consumer>
);

export default SnapshotViewIOS;
