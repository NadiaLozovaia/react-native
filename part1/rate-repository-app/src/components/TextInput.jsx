import { TextInput as NativeTextInput, StyleSheet, Platform } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
    input: {
        height: 60,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color:'gray',
        // borderBlockColor:'gray', 
        borderColor:'gray',
        fontSize: 16,
        fontFamily: Platform.select(theme.fonts),
        // fontFamily: 'Comic Sans MS'
      },


});

const TextInput = ({ style, error, ...props }) => {
  let textInputStyle = styles.input;
  if (error){
    textInputStyle={...styles.input, borderColor:'#d73a4a'}

}

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;