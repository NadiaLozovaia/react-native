import { Text as NativeText, StyleSheet, Platform } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: Platform.select(theme.fonts),
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorTextPrimary: {
    color: theme.colors.textPrimary,
  },
  colorTextDiscription: {
    color: theme.colors.textDiscriprion,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
  fontFamily:{
    fontFamily: Platform.select(theme.fonts),
  }


});

const Text = ({ color, fontSize, fontWeight, style, fontFamily, ...props }) => {
  const textStyle = [
    styles.text,

    color === 'textSecondary' && styles.colorTextSecondary,

    color === 'textPrimary' && styles.colorTextPrimary,
    color === 'textDiscription' && styles.colorTextDiscription,

    fontSize === 'subheading' && styles.fontSizeSubheading,

    fontWeight === 'bold' && styles.fontWeightBold,
    fontFamily === 'font' && styles.fontFamily,
  
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;