import {SafeAreaView, StyleSheet, Text, View} from "react-native";

const Cards = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>Cards screen</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default Cards;

