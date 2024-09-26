import { View, Text } from 'react-native';

const PlantasCard = ({ data }) => {
    return (
        <View>
            <Text>{data.name}</Text>
        </View>
    )
}

export default PlantasCard;