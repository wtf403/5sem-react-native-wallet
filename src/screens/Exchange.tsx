import {SafeAreaView, StyleSheet, Text, View} from "react-native";

const Exchange = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>Exchange screen</Text>
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

export default Exchange;

