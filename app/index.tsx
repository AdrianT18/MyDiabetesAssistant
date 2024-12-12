import React from "react";
import { View, TouchableOpacity, StyleSheet, Text, Image, Dimensions } from "react-native";
import { useRouter } from "expo-router";

const { width, height } = Dimensions.get("window");

export default function HomePage() {
    const router = useRouter();

    return (
        <View style={styles.mainContainer}>
            <View style={styles.backgroundCircle} />
            <View style={styles.backgroundSquare} />
            <View style={styles.backgroundSquare2} />
            <View style={styles.titleContainer}>
                <Image
                    source={require('../images/diabets_vector_.png')}
                    style={styles.image}
                />
                <View style={styles.subContainer}>
                    <Text style={styles.titleText}>Start Managing your diabetes better today</Text>
                    <Text style={styles.subtitle}>My Diabetes Assistant (MDA) helps you track how foods affect your
                        glucose and suggests tailored insulin ratios. Accept a ratio, and MDA adjusts it over time for
                        future meals!</Text>
                </View>
                <Text style={styles.more}> Find out more here!</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => router.push("/login")}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => router.push("/register")}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        justifyContent: "space-evenly",
    },
    subContainer: {
        alignItems: "center",
        marginBottom: height * 0.02,
        marginHorizontal: "8%",
    },
    titleText: {
        fontSize: width * 0.08,
        fontWeight: "600",
        color: "#4f40b9",
        textAlign: "left",
        justifyContent: "center",
        marginBottom: height * 0.02,
    },
    subtitle: {
        fontSize: width * 0.045,
        justifyContent: "center",
        color: "#4f40b9",
    },
    image: {
        width: "80%",
        height: undefined,
        aspectRatio: 1,
        resizeMode: "contain",
    },
    more: {
        fontSize: width * 0.04,
        textAlign: "right",
        marginHorizontal: "8%",
        color: "#4f40b9",
    },
    buttonContainer: {
        width: "80%",
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: height * 0.02,
    },
    button: {
        backgroundColor: "#4f40b9",
        paddingVertical: height * 0.02,
        paddingHorizontal: width * 0.07,
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
    },
    buttonText: {
        color: "#ffffff",
        fontSize: width * 0.045,
        fontWeight: "500",
        textAlign: "center",
    },
    backgroundCircle: {
        position: "absolute",
        width: width * 0.75,
        height: width * 0.75,
        backgroundColor: "#e3dffc",
        borderRadius: width * 0.375,
        top: -width * 0.375,
        left: -width * 0.125,
    },
    backgroundSquare: {
        position: "absolute",
        width: width * 0.5,
        height: width * 0.5,
        backgroundColor: "#c8bef9",
        transform: [{ rotate: "45deg" }],
        bottom: -width * 0.25,
        right: -width * 0.25,
    },
    backgroundSquare2: {
        position: "absolute",
        width: width * 0.5,
        height: width * 0.5,
        backgroundColor: "#c8bef9",
        transform: [{ rotate: "45deg" }],
        bottom: width * 0.7,
        right: width * 1.4,
    },
});
