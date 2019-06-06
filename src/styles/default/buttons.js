import { Dimensions } from 'react-native'
const {width, height} = Dimensions.get('window')
const colors = require('../../constant/colors')

module.exports = {
    /**
     * Principal
     */
    primary:{
        margin: 5,
        alignItems: 'center',        
        borderRadius: 30,
        paddingVertical: 5,
        backgroundColor: colors.primary,
        borderWidth: 1,
        borderColor: colors.primary,
        elevation: 4,
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowColor: 'black',
        shadowOpacity: 0.5
    },
    primaryText:{
        marginVertical: 5,
        color: 'white'
    },
    /**
     * Secundario
     */
    secondary: {
        margin: 5,
        alignItems: 'center',
        borderRadius: 30,
        paddingVertical: 5,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: colors.primary,
        elevation: 4,
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowColor: 'black',
        shadowOpacity: 0.5
    },
    secondaryText:{
        marginVertical: 5,
        color: colors.secondary_text
    },

    /**
     * Circular
     */
    swipeButtonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    circulaButtonPrimary: {
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderRadius: 25,
        backgroundColor: colors.primary,
        elevation: 4
    },
    circulaButtonSecondary: {        
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderRadius: 25,
        backgroundColor: colors.secondary,
        elevation: 4
    },
    circulaButtonInfo: {
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderRadius: 25,
        backgroundColor: colors.info_alt,
        elevation: 4
    },
    circulaButtonWarning: {
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderRadius: 25,
        backgroundColor: colors.warning_alt,
        elevation: 4
    },
    circulaButtonDanger: {
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderRadius: 25,
        backgroundColor: colors.danger_alt,
        elevation: 4
    },
    circulaButtonSuccess: {
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderRadius: 25,
        backgroundColor: colors.success_alt,
        elevation: 4
    },
    
    //Swipe
    swipeContainer: {
        alignItems: 'center', 
        justifyContent: 'center', 
        flex: 1, 
        // borderBottomWidth: 1, 
        // borderColor: 'lightgray'
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
      },
}