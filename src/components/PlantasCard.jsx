import { View, Text } from 'react-native';

const PlantasCard = ({ plant}) => {
    return (
        <View>
            <Text>{plant.name}</Text>
        </View>
    )
}

export default PlantasCard;