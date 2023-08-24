
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, TouchableOpacity } from 'react-native';

const GridComponent = () => {
    const [m, setM] = useState(0); // Number of rows
    const [n, setN] = useState(0); // Number of columns
    const [alphabetSequence, setAlphabetSequence] = useState(''); // User input
    const [searchText, setSearchText] = useState(''); // Text to search
    const [grid, setGrid] = useState([]); // Generated grid
    const [highlightedCells, setHighlightedCells] = useState([]); // Highlighted cells for the found text

    // Function to create the 2D grid based on m and n
    const createGrid = () => {
        const newGrid = [];
        let currentIndex = 0;

        for (let i = 0; i < m; i++) {
            const row = [];
            for (let j = 0; j < n; j++) {
                const alphabet = alphabetSequence[currentIndex % alphabetSequence.length];
                row.push(alphabet);
                currentIndex++;
            }
            newGrid.push(row);
        }

        setGrid(newGrid);
        setHighlightedCells([]);
    };

    // Function to handle search button press
    const handleSearch = () => {
        if (!searchText || !grid.length) {
            Alert.alert('Warning', 'Enter search text and generate grid first.');
            return;
        }

        let found = false;
        const newHighlightedCells = [];

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                if (grid[i][j] === searchText[0]) {
                    // Check east direction
                    let matchEast = true;
                    for (let k = 1; k < searchText.length; k++) {
                        if (j + k >= n || grid[i][j + k] !== searchText[k]) {
                            matchEast = false;
                            break;
                        }
                    }

                    // Check south direction
                    let matchSouth = true;
                    for (let k = 1; k < searchText.length; k++) {
                        if (i + k >= m || grid[i + k][j] !== searchText[k]) {
                            matchSouth = false;
                            break;
                        }
                    }

                    // Check southeast direction
                    let matchSoutheast = true;
                    for (let k = 1; k < searchText.length; k++) {
                        if (i + k >= m || j + k >= n || grid[i + k][j + k] !== searchText[k]) {
                            matchSoutheast = false;
                            break;
                        }
                    }

                    if (matchEast || matchSouth || matchSoutheast) {
                        found = true;
                        newHighlightedCells.push({ row: i, col: j, direction: matchEast ? 'east' : (matchSouth ? 'south' : 'southeast') });
                    }
                }
            }
        }

        setHighlightedCells(newHighlightedCells);

        if (!found) {
            Alert.alert('Search Result', 'Text not found in the grid.');
        }
    };

    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <View style={{ marginHorizontal: 10 }}>


                <Text style={{ fontSize: 17, marginTop: 5 }}>Enter number of rows (m):</Text>
                <TextInput
                    style={{
                        height: 50,
                        borderWidth: 1,
                        paddingHorizontal: 10,
                        marginBottom: 10,
                        borderRadius: 8,
                        borderColor: 'gray',
                        fontSize: 17,
                    }}
                    keyboardType="numeric"
                    value={m.toString()}
                    onChangeText={value => setM(parseInt(value) || 0)}
                />

                <Text style={{ fontSize: 17, marginTop: 5 }}>Enter number of columns (n):</Text>
                <TextInput
                    style={{
                        height: 50,
                        borderWidth: 1,
                        paddingHorizontal: 10,
                        marginBottom: 10,
                        borderRadius: 8,
                        borderColor: 'gray',
                        fontSize: 17,
                    }}
                    keyboardType="numeric"
                    value={n.toString()}
                    onChangeText={value => setN(parseInt(value) || 0)}
                />

                <Text style={{ fontSize: 17, marginTop: 5 }}>Enter alphabet sequence:</Text>
                <TextInput
                    style={{
                        height: 50,
                        borderWidth: 1,
                        paddingHorizontal: 10,
                        marginBottom: 10,
                        borderRadius: 8,
                        borderColor: 'gray',
                        fontSize: 17,
                    }}
                    value={alphabetSequence}
                    onChangeText={setAlphabetSequence}
                />

                <TouchableOpacity style={{ backgroundColor: '#6600cc', paddingVertical: 10, borderRadius: 8 }} onPress={createGrid}>
                    <Text style={{ fontSize: 17, color: "white", alignSelf: 'center' }}>Create Grid</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 17, margin: 10 }}>Enter text to search:</Text>
                <TextInput
                    style={{
                        height: 50,
                        borderWidth: 1,
                        paddingHorizontal: 10,
                        marginBottom: 10,
                        borderRadius: 8,
                        borderColor: 'gray',
                        fontSize: 17,
                    }}
                    value={searchText}
                    onChangeText={setSearchText}
                />

                <TouchableOpacity style={{ backgroundColor: '#6600cc', paddingVertical: 10, borderRadius: 8 }} onPress={handleSearch} >
                    <Text style={{ color: "white", alignSelf: 'center', fontSize: 17 }}>Search</Text>
                </TouchableOpacity>

                {/* Display the grid */}
                {grid.map((row, rowIndex) => (
                    <View key={rowIndex} style={{ flexDirection: 'row' }}>
                        {row.map((cell, columnIndex) => {
                            const isHighlighted = highlightedCells.some(
                                ({ row: hRow, col: hCol }) =>
                                    hRow === rowIndex && hCol === columnIndex
                            );

                            return (
                                <View
                                    key={columnIndex}
                                    style={{
                                        borderWidth: 1,
                                        padding: 8,
                                        backgroundColor: isHighlighted ? 'yellow' : 'white',
                                    }}>
                                    <Text>{cell}</Text>
                                </View>
                            );
                        })}
                    </View>
                ))}
            </View>
        </View>
    );
};

export default GridComponent;