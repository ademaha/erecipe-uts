import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

import { StackNavigator } from "react-navigation";


export default class Register extends React.Component {
	static navigationOptions = {
    	header: null
  	};
	render() {
		const { navigate } =this.props.navigation;
		return (
			<View style={styles.container}>
				<Text style={styles.header}>Buat Akun Erecipe</Text>
          		
				<TextInput 
					style={styles.textinput}
					placeholder="Username"
					placeholderTextColor="#FFFFFF"
					onSubmitEditing={() => this.nameInput.focus()}
					underlineColorAndroid={'transparent'} />

				<TextInput
					style={styles.textinput}
					placeholder="Email"
					placeholderTextColor="#FFFFFF"
					onSubmitEditing={() => this.emailInput.focus()}
					ref={(input) => this.nameInput = input}
					underlineColorAndroid={'transparent'} />

				<TextInput 
					style={styles.textinput} 
					placeholder="Password"
					placeholderTextColor="#FFFFFF"
					onSubmitEditing={() => this.passwordInput.focus()}
					ref={(input) => this.emailInput = input}
					underlineColorAndroid={'transparent'} />

				<TextInput 
					style={styles.textinput}
					placeholder="Ulangi Password"
					placeholderTextColor="#FFFFFF"
					secureTextEntry
					ref={(input) => this.passwordInput = input}
					underlineColorAndroid={'transparent'} />

				<TouchableOpacity style={styles.button} onPress={()=> navigate('Boiler')}>
					<Text style={styles.btntext}>Registrasi</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#d0d3d4',
		paddingLeft: 60,
		paddingRight: 60,
		alignSelf: 'stretch'
	},
	header: {
		fontSize: 25,
		fontWeight: 'bold',
		textAlign: 'center',
		color: '#FFFFFF',
		paddingBottom: 10,
		marginBottom: 40
	},
	textinput: {
		alignSelf: 'stretch',
		backgroundColor: '#F39C12',
		height: 40,
		marginBottom: 20,
		color: '#FFFFFF',
		paddingHorizontal: 10
	},
	button: {
		alignSelf: 'stretch',
		alignItems: 'center',
		padding: 15,
		backgroundColor: '#C0392B',
		marginTop: 30,
	},
	btntext: {
		color: '#FFFFFF',
		fontSize: 17,
		fontWeight: 'bold'
	}
});