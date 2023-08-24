import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const GridApp = () => {
    const [rows, setRows] = useState(0);
    const [columns, setColumns] = useState(0);
    const [grid, setGrid] = useState([]);
    const [currentAlphabetIndex, setCurrentAlphabetIndex] = useState(0);

    const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // List of available alphabets

    const handleGenerateGrid = () => {
        const newGrid = [];
        for (let i = 0; i < rows; i++) {
            const row = [];
            for (let j = 0; j < columns; j++) {
                row.push(alphabets[currentAlphabetIndex]);
                setCurrentAlphabetIndex((currentAlphabetIndex + 1) % alphabets.length);
            }
            newGrid.push(row);
        }
        setGrid(newGrid);
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Enter rows"
                keyboardType="numeric"
                value={rows.toString()}
                onChangeText={text => setRows(parseInt(text))}
                style={styles.input}
            />
            <TextInput
                placeholder="Enter columns"
                keyboardType="numeric"
                value={columns.toString()}
                onChangeText={text => setColumns(parseInt(text))}
                style={styles.input}
            />
            <TouchableOpacity onPress={handleGenerateGrid} style={styles.button}>
                <Text style={{ color: "white", alignSelf: 'center', fontSize: 20 }}>Generate Grid</Text>
            </TouchableOpacity>
            <View style={styles.grid}>
                {grid.map((row, rowIndex) => (
                    <View key={rowIndex} style={styles.row}>
                        {row.map((cell, columnIndex) => (
                            <View key={columnIndex} style={styles.cell}>
                                <Text>{cell}</Text>
                            </View>
                        ))}
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: 'white'
    },
    input: {
        height: 50,
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 10,
        borderRadius: 8,
        borderColor: 'gray'
    },
    button: {
        backgroundColor: '#6600cc', paddingVertical: 10, borderRadius: 8
    },
    grid: {
        flexDirection: 'column',
        marginVertical: 10,
        alignItems: 'center'
    },
    row: {
        flexDirection: 'row',
    },
    cell: {
        borderWidth: 1,
        borderColor: 'gray',
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default GridApp;
