import { StyleSheet } from "react-native"


export default styles = StyleSheet.create({

    container: {
        flex: 1,

    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 20,
        height: 65,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 0.3,
    },
    icon: {
        width: 26,
        height: 26,
        marginLeft: 10,
        marginRight: 10,
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 70,

    },
    sc_avatar: {
        paddingTop: 20,
        paddingLeft: 20,
        alignItems: 'center',

    },
    sc_avatar_text: {
        fontSize: 16,
        fontWeight: '600',
        color: 'black'
    },
    ContentContainer: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    ContentContainer_image: {
        flexDirection: 'row',
        width: '100%',
        paddingBottom: 10,
    },
    ContentContainer_text: {
        paddingLeft: 10,
    },
    ContentContainer_text_title: {
        fontWeights:'600',
        color: 'black',
        fontSize:16,
    },
    ContentContainer_text_area: {
        flexDirection: 'row',
        justifyContent: "space-between",
    },

    commentContainer: {
        flexDirection: 'row',
        paddingBottom: 10,
        
    },
    commentContainer_img: {
        width: 24,
        height: 24,
        marginRight:10,
        marginLeft:10,
    },
    subContainer:{
        fontSize: 16,
        fontWeight:'600',
        color: 'black',
        paddingBottom: 10,
    },

})