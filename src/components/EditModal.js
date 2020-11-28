import React from 'react'
import { View, StyleSheet, TextInput, Button, Modal } from 'react-native'
import { THEME } from '../theme'

export const EditModal = ({ visible, onCancel }) => {
  return (
    <Modal visible={visible} animationType='slide' transparent={false}>
      <View style={styles.wrap}>
        <TextInput
          style={styles.input}
          placeholder='edit title'
          autoCapitalize='none'
          autoCorrect={false}
          maxLength={100}
        ></TextInput>
        <View style={styles.buttons}>
          <Button
            title='cancel'
            onPress={onCancel}
            color={THEME.DANGER_COLOR}
          ></Button>
          <Button title='save'></Button>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    padding: 10,
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 2,
    width: '80%',
  },
  buttons: {
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
})
