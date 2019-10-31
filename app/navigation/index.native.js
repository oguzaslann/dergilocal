import React from "react";
import {StyleSheet, View} from "react-native";
import {NativeRouter, Route, Link} from "react-router-native";
import { Provider } from 'react-redux';
import store from '../state/store';

export function Routing() {
    return (
    <Provider store={ store }>
        <NativeRouter>
            <View>
            </View>
        </NativeRouter>
    </ Provider>
    )
}