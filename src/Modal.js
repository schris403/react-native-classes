import { Modal as RNModal } from 'react-native';
import React from 'react';
import ThemeContext from './ThemeContext';
import getStyles from './getStyles';

const Modal = ({ children, className, style, ...props }) => (
	<ThemeContext.Consumer>
		{(styles) => (
			<RNModal style={getStyles(styles, className, style)} {...props}>
				{children}
			</RNModal>
		)}
	</ThemeContext.Consumer>
);

export default Modal;
