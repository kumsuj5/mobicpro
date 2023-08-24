import React, { Component } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ marginHorizontal: 10 }}>
        <ScrollView>

          <View style={style.box}>
            <Text style={{ fontSize: 18, fontWeight: "500", marginHorizontal: 5, marginTop: 10 }}>enter numbers m & n which indirectly indicates m rows and n column of a 2D grid.</Text>
            <TouchableOpacity onPress={() => navigation.navigate('One')} style={{ backgroundColor: '#6600cc', paddingVertical: 10, borderRadius: 8, marginVertical: 10, marginHorizontal: 10 }}>
              <Text style={{ alignSelf: 'center', color: 'white', fontSize: 17 }}>ans one</Text>
            </TouchableOpacity>
          </View>
          <View style={style.box}>
            <Text style={{ fontSize: 18, fontWeight: "500", marginHorizontal: 5, marginTop: 10 }}>the user should enter alphabets such that one alphabet occupies one position in the grid. Here we will need m*n number of alphabets.</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Two')} style={{ backgroundColor: '#6600cc', paddingVertical: 10, borderRadius: 8, marginVertical: 10, marginHorizontal: 10 }}>
              <Text style={{ alignSelf: 'center', color: 'white', fontSize: 17 }}>ans two</Text>
            </TouchableOpacity>
          </View>
          <View style={style.box}>
            <Text style={{ fontSize: 18, fontWeight: "500", marginHorizontal: 5, marginTop: 10 }}>Display the grid. Now The user can provide a text which needs to be searched in the grid.</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Three')} style={{ backgroundColor: '#6600cc', paddingVertical: 10, borderRadius: 8, marginVertical: 10, marginHorizontal: 10 }}>
              <Text style={{ alignSelf: 'center', color: 'white', fontSize: 17 }}>ans three</Text>
            </TouchableOpacity>
          </View>
          <View style={style.box}>
            <Text style={{ fontSize: 18, fontWeight: "500", marginHorizontal: 5, marginTop: 10 }}> If the text is available in the grid, then those alphabets should be highlighted if the text in the grid is readable in left to right direction (east), or top to bottom direction (south) or diagonal (south-east).</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Four')} style={{ backgroundColor: '#6600cc', paddingVertical: 10, borderRadius: 8, marginVertical: 10, marginHorizontal: 10 }}>
              <Text style={{ alignSelf: 'center', color: 'white', fontSize: 17 }}>ans four</Text>
            </TouchableOpacity>
          </View>
          <View style={style.box}>

            <Text style={{ fontSize: 18, fontWeight: "500", marginHorizontal: 5, marginTop: 10 }}>User can change the text provided in step 5 and check for the occurance of the word in the grid.</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Five')} style={{ backgroundColor: '#6600cc', paddingVertical: 10, borderRadius: 8, marginVertical: 10, marginHorizontal: 10 }}>
              <Text style={{ alignSelf: 'center', color: 'white', fontSize: 17 }}>ans five</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  box: {
    borderRadius: 8,
    width: "100%",
    marginVertical: 10,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2, },
    shadowRadius: 8,
    opacity: 10,
  }
})
export default HomeScreen;
