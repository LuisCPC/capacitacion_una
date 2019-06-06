import { Platform } from 'react-native'
let COLORS = require('../../constant/colors')
//let DEVICE_INFO = require('react-native-device-info')
let ios = Platform.OS === 'ios'
module.exports = {

    containerHeader: {
        flex: 2,
        backgroundColor: 'white',
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.nadvar,
        paddingHorizontal: 10,
        paddingBottom: 10,
        paddingTop: (ios) ? 25 : 10,
    },

    headerText: {
        marginVertical: 5,
        marginHorizontal: 10,
        color: 'white',
    },
    title: {
        color: COLORS.primary,
        textAlign: 'center',
        marginVertical: 5
    },
    square: {
        margin: 5,
        padding: 5,
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: 'white'
    },
    listImageContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'lightgray'
    },
    listImage: {
        width: 46,
        height: 46,
        borderRadius: 23,
    },
    listBox: {
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    listInfo: {
        flex: 1,
        justifyContent: 'center',
        padding: 5,
    },
    alertBox: {
        backgroundColor: COLORS.alert_warning, 
        alignItems: 'center', 
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        padding: 5
    },
    required: {
        fontWeight: 'bold',
        color: COLORS.danger
    },
    imagePickerContent: {
        padding: 5,
        margin: 5,
        borderWidth: 1,
        borderStyle: 'dashed',
        width: 150,
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 75
    },
    imagePicker: {
        width: 140,
        height: 140,
        borderRadius: 70
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
}