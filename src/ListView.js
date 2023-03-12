import { ListView as RNListView } from 'react-native';
import React from 'react';
import ThemeContext from './ThemeContext';
import getStyles from './getStyles';

const ListView = ({ className, style, ...props }) => (
	<ThemeContext.Consumer>
		{(styles) => <RNListView style={getStyles(styles, className, style)} {...props} />}
	</ThemeContext.Consumer>
);

export default ListView;
