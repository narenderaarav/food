'use strict';
var React = require('react-native');
var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({

  inputStyle:{
        borderColor: '#e0e0e0',
        padding: 10,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 50,
        textAlign: 'left',
        height: 50,
        width: 300,
        borderWidth: 1,
        shadowOffset: { width: 20, height: 20 },
        shadowColor: 'black',
        shadowOpacity: 8,
        elevation: 20,
        backgroundColor: "#0000",// invisible color
        borderRadius: 20,
        backgroundColor: "#FFFFFF",
        marginTop: -15,
        fontStyle: 'italic',    

  },


  navHome:{
    position: 'absolute',
    bottom: -5, // space from bottombar
    height: 68,
    width: 68,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white',
    shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: -3,
      },
      shadowOpacity: 0.8,
      shadowRadius: 1,
      elevation: 0,
  }


})