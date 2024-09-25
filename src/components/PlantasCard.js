import { View, Text } from 'react-native';

const PlantasCard = ({ name }) => {
    return (
        <View>
            <Text style={{ color: "#000"}}>{name}</Text>
        </View>
    )
}

export default PlantasCard;