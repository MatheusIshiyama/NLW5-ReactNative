import React, { useEffect } from "react";
import AppLoading from "expo-app-loading";
import * as Notifications from "expo-notifications";

import Routes from "./src/routes";
import { PlantProps } from "./src/libs/Storage";

import { useFonts, Jost_400Regular, Jost_600SemiBold } from "@expo-google-fonts/jost";

export default function App() {
    const [fontsLoaded] = useFonts({
        Jost_400Regular,
        Jost_600SemiBold,
    });

    useEffect(() => {
        //* acompanhar notificações
        // const subscription = Notifications.addNotificationReceivedListener(async (notification) => {
        //     const data = notification.request.content.data.plant as PlantProps;
        // });
        // return () => subscription.remove();
        //* deletar notificações
        // async function notifications() {
        //     await Notifications.cancelAllScheduledNotificationsAsync();
        //     const data = await Notifications.getAllScheduledNotificationsAsync();
        //     console.log(data);
        // }
        // notifications();
    }, []);

    if (!fontsLoaded) return <AppLoading />;

    return <Routes />;
}
