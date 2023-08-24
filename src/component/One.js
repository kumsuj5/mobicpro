
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const One = () => {
    const [m, setM] = useState(0); // Number of rows
    const [n, setN] = useState(0); // Number of columns

    // Function to create the 2D grid based on m and n
    const createGrid = () => {
        const grid = [];
        for (let i = 0; i < m; i++) {
            const row = [];
            for (let j = 0; j < n; j++) {
                row.push(`[${i},${j}]`);
            }
            grid.push(row);
        }
        return grid;
    };

    const grid = createGrid();

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
                <Text style={{ fontSize: 15 }}>Enter number of rows (m):</Text>
                <TextInput
                    keyboardType="numeric"
                    value={m.toString()}
                    onChangeText={value => setM(parseInt(value) || 0)}
                    style={{ borderWidth: 1, borderRadius: 8 }}
                />

                <Text style={{ fontSize: 15 }}>Enter number of columns (n):</Text>
                <TextInput
                    keyboardType="numeric"
                    value={n.toString()}
                    onChangeText={value => setN(parseInt(value) || 0)}
                    style={{ borderWidth: 1, borderRadius: 8 }}
                />

                {/* <TouchableOpacity style={{ backgroundColor: '#6600cc', paddingVertical: 14, borderRadius: 10, marginVertical: 10 }} onPress={createGrid} >
                    <Text style={{ color: 'white', fontSize: 17 }}>Create Grid</Text>
                </TouchableOpacity> */}

                {/* Display the grid */}
                <View style={{ marginTop: 20 }}>
                    {grid.map((row, rowIndex) => (
                        <View key={rowIndex} style={{ flexDirection: 'row', }}>
                            {row.map((cell, columnIndex) => (
                                <View key={columnIndex} style={{ borderWidth: 1, padding: 8 }}>
                                    <Text>{cell}</Text>
                                </View>
                            ))}
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
};

export default One;