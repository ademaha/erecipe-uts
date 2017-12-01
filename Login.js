import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

import { StackNavigator } from "react-navigation";

export default class Login extends Component {
	static navigationOptions = {
    	header: null
  	};
	render() {
		const { navigate } =this.props.navigation;
		return (
			<View style={styles.container}>
				<View style={styles.logoContainer}>
					<Image
						style={styles.logo}
						source={require("./erecipe.jpg")}
					/>
					<Text style={styles.title}>Resep One for All</Text>
				</View>
				<View style={styles.formContainer}>
					<KeyboardAvoidingView behavior="padding" style={styles.container2}>
				<View style={styles.container2}>
					<TextInput 
						placeholder="Username"
						placeholderTextColor="#FFFFFF"
						onSubmitEditing={() => this.passwordInput.focus()}
						keyboardType="email-address"
						style={styles.input}
					/>
					<TextInput 
						placeholder="Password"
						placeholderTextColor="#FFFFFF"
						secureTextEntry
						style={styles.input}
						ref={(input) => this.passwordInput = input}
					/>
					<TouchableOpacity style={styles.buttonContainer} onPress={()=> navigate('Boiler')}>
						<Text style={styles.buttonText}>Log In</Text>
					</TouchableOpacity>					
					<TouchableOpacity style={styles.buttonContainer} onPress={()=> navigate('Register')}>
						<Text style={styles.buttonText}>Registrasi</Text>
					</TouchableOpacity>
				</View>
			</KeyboardAvoidingView>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#D0D3D4'
	},
	logoContainer: {
		alignItems: 'center',
		flexGrow: 1,
		justifyContent: 'center'
	},
	logo: {
		width: 350,
		height: 110
	},
	title: {
		color: '#d35400',
		fontWeight: 'bold',
		marginTop: 2,
		width: 200,
		textAlign: 'center',
		opacity: 0.5
	},
	container2: {
		padding: 20
	},
	input: {
		height: 40,
		backgroundColor: '#e67e22',
		marginBottom: 15,
		color: '#ecf0f1',
		paddingHorizontal: 10
	},
	buttonContainer: {
		backgroundColor: '#c0392b',
		marginBottom: 15,
		paddingVertical: 10
	},
	buttonText: {
		textAlign: 'center',
		fontWeight: 'bold',
		color: '#FFFFFF'
	}
});