import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const GridSearchScreen = () => {
    const [gridData, setGridData] = useState([
        { key: 'B1', value: 'Blueberry' },
        { key: 'O1', value: 'Orange' },
        { key: 'W1', value: 'Watermelon' },
        { key: 'P1', value: 'Pineapple' },
        { key: 'M1', value: 'Mango' },
        { key: 'G1', value: 'Grapes' },
        { key: 'S1', value: 'Strawberry' },
        { key: 'L1', value: 'Lemon' },
        { key: 'P2', value: 'Peach' },
        { key: 'R1', value: 'Raspberry' }
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
        <View style={styles.gridItem}>
            <Text>{item.value}</Text>
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
            <TouchableOpacity onPress={handleSearch} style={{ backgroundColor: '#6600cc', paddingVertical: 10, borderRadius: 5 }}>
                <Text style={{ fontSize: 17, color: "white", alignSelf: 'center' }}>Search</Text>
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
        backgroundColor: "white"
    },
    searchInput: {
        height: 50,
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 10,
        borderRadius: 8,
    },
    gridContainer: {
        marginTop: 10,

    },
    gridItem: {
        padding: 10,
        borderWidth: 1,
        marginBottom: 5,
        borderRadius: 8,


    },
});

export default GridSearchScreen;
