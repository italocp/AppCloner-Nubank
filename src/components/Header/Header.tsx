import React from 'react';
import {TouchableOpacity} from 'react-native';

import {Ionicons, Feather} from '@expo/vector-icons';

import {
  Container,
  UpperView,
  UserIconView,
  OptionsIcon,
  TextWelcome,
} from './styles';

import {privacyGlobal} from '../../hooks/State/usePrivacy';

export function Header() {
  const [showBalence, setShowBalence] = privacyGlobal();
  return (
    <>
      <Container>
        <UpperView>
          <UserIconView>
            <Ionicons name="person-outline" size={20} color="#fff" />
          </UserIconView>

          <OptionsIcon>
            <TouchableOpacity onPress={() => setShowBalence(!showBalence)}>
              {showBalence ? (
                <Ionicons
                  name="eye-outline"
                  size={25}
                  color="#fff"
                  style={{marginRight: 16}}
                />
              ) : (
                <Ionicons
                  name="eye-off-outline"
                  size={25}
                  color="#fff"
                  style={{marginRight: 16}}
                />
              )}
            </TouchableOpacity>
            <Ionicons
              name="help-circle-outline"
              size={25}
              color="#fff"
              style={{marginRight: 16}}
            />
            <Feather
              name="user-plus"
              size={25}
              color="#fff"
              style={{marginRight: 16}}
            />
          </OptionsIcon>
        </UpperView>

        <TextWelcome>Olá, Pedro</TextWelcome>
      </Container>
    </>
  );
}
