import { SectionList as RNSectionList } from 'react-native';
import React from 'react';
import ThemeContext from './ThemeContext';
import getStyles from './getStyles';

const SectionList = ({ className, style, ...props }) => (
	<ThemeContext.Consumer>
		{(styles) => <RNSectionList style={getStyles(styles, className, style)} {...props} />}
	</ThemeContext.Consumer>
);

export default SectionList;
