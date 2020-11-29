import React from 'react'
import { StyleSheet, View, FlatList, Text } from 'react-native'
import { AddTodo } from '../components/AddTodo'
import { Todo } from '../components/Todo'

export const MainScreen = ({ addTodo, todos, removeTodo, openTodo }) => {
  return (
    <View>
      <AddTodo onSubmit={addTodo} />

      {todos.length ? (
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={todos}
          renderItem={({ item }) => (
            <Todo todo={item} onRemove={removeTodo} onOpen={openTodo} />
          )}
        />
      ) : (
        <Text>No todos yet...</Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({})
