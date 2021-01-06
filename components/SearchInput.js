import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default class SearchInput extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };
    }

    handleChangeText = text => {
           this.setState({ text });
    };

    handleSubmitEditing = () => {
        const { onSubmit } = this.props;
        const { text } = this.state;

        if (!text) return;

        onSubmit(text);
            this.setState({ text:'' });
};

    render() {
        const { placeholder } = this.props;
        const { text } = this.state;

        return(
            <View style={style.container}>
            <TextInput 
            autoCorrect={false}
            value={text}
            placeholder={placeholder} 
            placeholderTextColor="white" 
            underlineColorAndroid="transparent"
            style={style.textInput}
            onChangeText={this.handleChangeText} 
            onSubmitEditing={this.handleSubmitEditing}
            clearButtonMode="always" />
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        backgroundColor:'black',
        color: 'white',
        height: 40,
        marginTop: 20,
        borderRadius: 5,
        paddingHorizontal: 20,
    },
    textInput: {
        flex: 1,
        color: 'white', 

    },
})