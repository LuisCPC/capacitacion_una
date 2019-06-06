import {
    Platform
} from 'react-native'
//let DeviceInfo = require('react-native-device-info') 
//let phone = DeviceInfo.getModel() === 'iPhone X'
let ios = Platform.OS === 'ios'
let COLORS = require('../../constant/colors')
module.exports = {
    /**
     * Picker
     */
    label: {
        color: 'gray',
        margin: 5
    },
    pickerContainer: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 20,
        marginHorizontal: 5,
        marginBottom: 5
    },
    pickerItem: {
        color: COLORS.primary_text
    },
    optionsContainer: {
        justifyContent: 'flex-end',
        //marginBottom: (phone) ? 30 : 10
        //marginBottom:  10
    },
    options: {
        backgroundColor: 'white',
        maxHeight: 400,
        borderRadius: 10,
        marginVertical: 5
    },
    companyBox: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    companyImage: {
        width: 30,
        height: 30,
        borderRadius: 150
    },
    companyName: {
        marginLeft: 10,
        color: 'gray'
    },
    /**
     * Inputs
     */

    //Search
    searchInput: {
        fontSize: 14,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingVertical: (ios) ? 5 : 0,
        backgroundColor: 'white', 
        margin: 5,
        color: COLORS.primary_text
    },
    //Sae
    sae: {
        marginHorizontal: 5,
        borderBottomWidth: 1,
    },
    //Hideo
    hideo: {
        margin: 5,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5
    },
    hideoInput: {
        color: 'black',
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
    },
    //Fumi
    fumi: {
        margin: 5,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        height: 60
    },
    fumiInputs: {
        color: 'black'
    },
    fumiTextArea: {
        margin: 5,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        height: 120 
    },
    fumiInputsTextArea: {
        color: 'black',
        height: 120,
    }
}