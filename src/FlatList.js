import { FlatList as RNFlatList } from 'react-native';
import React from 'react';
import ThemeContext from './ThemeContext';
import getStyles from './getStyles';

const FlatList = ({ className, style, ...props }) => (
	<ThemeContext.Consumer>
		{(styles) => <RNFlatList style={getStyles(styles, className, style)} {...props} />}
	</ThemeContext.Consumer>
);

export default FlatList;
