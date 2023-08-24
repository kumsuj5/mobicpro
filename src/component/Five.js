import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const GridSearchScreen = () => {
    const [gridData, setGridData] = useState([
        { key: 'A1', value: 'Apple' },
        { key: 'A2', value: 'Banana' },
        { key: 'A3', value: 'Cherry' },
        // Add more grid data items here
    ]);

    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = () => {
        const results = gridData.filter(item =>
            item.value.toLowerCase().includes(searchText.toLowerCase())
        );
        setSearchResults(results);
    };

    const renderItem = ({ item }) => (
        <View style={{
            borderWidth: 1, marginVertical: 10, backgroundColor: "white",
            elevation: 4,
            shadowColor: "#000000",
            shadowOffset: { width: 0, height: 2, },
            shadowRadius: 8,
            opacity: 10,
            borderColor: 'gray',
            borderRadius: 8
        }}>
            <Text style={{ padding: 10, fontSize: 18 }}>{item.value}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchInput}
                placeholder="Search..."
                value={searchText}
                onChangeText={text => setSearchText(text)}
            />
            <TouchableOpacity style={{ backgroundColor: '#6600cc', paddingVertical: 10, borderRadius: 8 }} onPress={handleSearch}
            >
                <Text style={{ fontSize: 17, alignSelf: 'center', color: 'white' }}>Search</Text>
            </TouchableOpacity>
            <FlatList
                data={searchText ? searchResults : gridData}
                renderItem={renderItem}
                keyExtractor={item => item.key}
                contentContainerStyle={styles.gridContainer}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white'
    },
    searchInput: {
        height: 50,
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 10,
        borderRadius: 8,
        borderColor: 'gray'
    },
    gridContainer: {
        marginTop: 10,
    },

});

export default GridSearchScreen;
