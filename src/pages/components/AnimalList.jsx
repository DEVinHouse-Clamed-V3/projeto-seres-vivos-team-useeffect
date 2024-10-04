import {text, View} from "react-native";

export default  function AnimalList ({item}) {
    return (
        <View>
            <Text>
                {item.nome}
            </Text>
        </View>
    )
}
const styles = stylesheet.create ({
    container=> {
        padding:16,
    }
})
