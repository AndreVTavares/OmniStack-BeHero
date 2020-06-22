import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Image, TouchableOpacity, Text, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import api from 'axios';

import styles from './styles';

import logoImg from '../../assets/logo.png';


export default function Detail() {

    const navigation = useNavigation();
    const route = useRoute();

    const incident = route.params.incident
    const message = "Olá Vovó Joana, estou entrando em contado para ajudar no caso Max ta cego! com o valor de 1500,00 reais"

    function navigateToHome() {
        navigation.goBack();
    }

    function sendMail() {

        MailComposer.composeAsync({
            subject: 'Herói do caso: Max ta cego!',
            recipients ['andretavares3@gmail.com'],
            body: message,
        })

    }

    function sendWhatsapp() {

        Linking.openURL(`whatsapp://send?phone=85999541137&text=${message}`)

    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                
                <TouchableOpacity onPress={navigateToHome}>
                    <Feather name="arrow-left" size={24} color="#E02041" />
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG:</Text>
                <Text style={styles.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>{incident.title}</Text>

                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', {  
                                style: 'currency', 
                                currency: 'BRL' 
                            }.format(incident.value))}</Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o Dia!</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>

                <Text style={styles.heroDescription}>Entre em contato:</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

