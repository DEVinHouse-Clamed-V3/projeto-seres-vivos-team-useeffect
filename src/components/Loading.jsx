import { View, Text, ActiveIndicator } from 'react-native';
import { loadingStyles } from '../styles/loadingStyles';

function Loading() {
    return (
        <View sytle={ loadingStyles.container }>
            <ActiveIndicator size={40} color="#000"/>
            <Text>Carregando...</Text>
        </View>
    )
}

export default Loading;

 