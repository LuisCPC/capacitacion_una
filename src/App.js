import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    BackHandler
} from 'react-native';
import { Root, Content } from "native-base";
import { Scene, Router, Actions, Route } from 'react-native-router-flux' 
import Home from './views/Home'  
import Contacts from './views/Contacts'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backHome: true,
            backHomeScene: false,
            //other: true
        }
    };


    backAndroidHandler(){
        if (Actions.currentScene == "home") {
            if (!this.state.backHomeScene) {
                if (this.state.backHome){
                    // Decomentar 
                    //console.warn("Click back again to exit.");
                    //this.setState({ backHomeScene: true })
                    
                    // Comentar
                    this.setState({ backHomeScene: false })
                    BackHandler.exitApp();
                } else {
                    this.setState({ backHome: true })
                }
            } else {
                this.setState({ backHomeScene: false })
                BackHandler.exitApp();
            }
        }else{
            this.setState({ backHome: false })
            this.setState({ backHomeScene: false })

            switch (Actions.currentScene) { 
                default: 
                    Actions.pop() 
                    break
            }
        }
        return true
    }

    
    render() {
        let colors = require('./constant/colors')

        return (
            <Root>   
           
                <Router backAndroidHandler={() => this.backAndroidHandler()} >
                    <Scene key="root">
                     
                        <Scene key="home" initial={true} component={Home} type="reset" hideNavBar/>
                        <Scene key="contacts" component={Contacts} hideNavBar/>
                        
                    </Scene>
                </Router> 
            </Root>
        );
    }
}

 
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black'
    }
})
export default App 