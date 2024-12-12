import {Stack} from "expo-router";

export default function RootLayout() {
    return (
        <Stack>
            {/* Define the homepage */}
            <Stack.Screen
                name="index"
                options={{
                    title: "Home",
                    headerShown: false, // Hides header for custom layout
                }}
            />

            {/* Define login page */}
            <Stack.Screen
                name="login"
                options={{
                    title: "Login",
                }}
            />
            {/* Define signup page */}
            <Stack.Screen
                name="register"
                options={{
                    title: "register",
                }}
            />
        </Stack>)
}
