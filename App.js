import React from 'react';
import { ImageBackground, KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native';

import SearchInput from './components/SearchInput';

import getImageForWeather from './utils/getImageForWeather';

 
export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            location: 'St Tropez',
        };
    }

    handleUpdateLocation = city => {
        this.setState({
            location: city,
        
        });
    };
    
    render(){
        const {location} = this.state;

        return(
            <KeyboardAvoidingView style={style.container} behavior="height">
                
                <ImageBackground source={getImageForWeather('Heavy Rain')} style={style.imageContainer} imageStyle={style.image}>
                <View style={style.detailsContainer}>
                <Text style={[style.largeText, style.textStyle]}>{location}</Text>
                <Text style={[style.smallText, style.textStyle]}>Heavy Rain</Text>
                <Text style={[style.largeText, style.textStyle]}>24</Text>
                <SearchInput onSubmit={this.handleUpdateLocation} placeholder="Search any city" />
                </View>
                </ImageBackground>

            </KeyboardAvoidingView>
        );
    }

}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34495E',
    },
    textStyle: {
        textAlign: 'center',
        fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
        color: 'white',
    },
    largeText: {
        fontSize: 45
    },
    smallText: {
       fontSize: 18
    },
    imageContainer: {
        flex: 1
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
    },
    detailsContainer:{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)',
        paddingHorizontal: 20,
    },

});





