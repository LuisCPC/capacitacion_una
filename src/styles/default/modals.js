import { Dimensions } from 'react-native'
//const DeviceInfo = require('react-native-device-info')
const colors = require('../../constant/colors')
module.exports = {
    /**
     * Modals with header
     */
    modal: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.primary,
        padding: 5
    },
    title: {
        marginHorizontal: 10,
        fontWeight: 'bold',
        color: 'white',
    },
    icon: {
        paddingHorizontal: 10,
    },
    container: {
        padding: 5,
        backgroundColor:'white'
    },
    /**
     * Modals without header
     */
    alert:{
        width: 300, 
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingHorizontal: 5,
        paddingVertical: 20,
    },
    alertIcon: {
        marginBottom: 5,
        fontSize: 40,
        textAlign: 'center'
    },
    alertText: {
        marginTop: 10,
        textAlign: 'center',
        color: colors.primary_text
    },
    buttonContainer:{
        flexDirection: 'row',
        backgroundColor: 'lightgray',
        paddingTop: 1,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    cancelButton:{
        width: 150, 
        backgroundColor: 'white',
        justifyContent: 'center', 
        alignItems: 'center',
        borderBottomLeftRadius: 10
    },
    cancelButtonOnly:{
        width: 300, 
        backgroundColor: 'white',
        justifyContent: 'center', 
        alignItems: 'center',
        borderBottomLeftRadius: 10
    },
    cancelButtonText: {
        color: colors.secondary_text, 
        marginVertical: 20
    },
    confirmButton: {
        width: 150, 
        backgroundColor: 'white',
        justifyContent: 'center', 
        alignItems: 'center',
        borderBottomRightRadius: 10
    },
    confirmOneButton: {
        width: 300, 
        backgroundColor: 'white',
        justifyContent: 'center', 
        alignItems: 'center',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10
    },
    confirmButtonText: {
        color: colors.success, 
        marginVertical: 20
    },
    bottomModal: {
        alignItems: 'center',
        justifyContent: "flex-end",
        margin: 10,
    },
    footerModal: {
        paddingHorizontal: 20,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 40
    },
    optionModalButton: {
        paddingLeft: 20,
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 10
    }
}