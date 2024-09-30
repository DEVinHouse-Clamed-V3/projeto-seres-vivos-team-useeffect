import { StyleSheet } from "react-native";

export const plantStyles = StyleSheet.create({
    input: {
        height: 48,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
        borderColor: "gray",
        fontSize: 16,
    },
    container: {
        padding: 16,
        backgroundColor: '#f9f9f9',
        marginBottom: 16,
        marginHorizontal: 26,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#e0e0e0',
    },
    areaImage: {
        alignItems: 'center',
        marginBottom: 8,
        paddingVertical: 8,
    },
    image: {
        width: "100%",
        height: 100,
        borderRadius: 10,
    },
    titleView: {
        marginBottom: 18,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    textDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 8,
    },
    textBold: {
        fontWeight: 'bold',
        marginRight: 24,
    },
});