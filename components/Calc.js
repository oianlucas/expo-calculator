import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function Calc() {
  const [result, setResult] = useState('');
  const [history, setHistory] = useState([]);

  const handlePress = (value) => {
    if (value === '.') {
      const lastNumber = result.split(/[\+\-\*\/\(\)]/).pop();
      if (!lastNumber.includes('.')) {
        setResult((prevResult) => prevResult + value);
      }
    } else {
      setResult((prevResult) => prevResult + value);
    }
  };

  const calculate = () => {
    try {
      const finalResult = eval(result);
      setHistory((prevHistory) => [
        ...prevHistory,
        `${result} = ${finalResult}`,
      ]);
      if (finalResult === Infinity) {
        setResult('Erro');
        return;
      }
      if (finalResult === undefined) {
        setResult('');
        return;
      }
      if (finalResult === null) {
        setResult('');
        return;
      }
      setResult(finalResult.toString());
    } catch (error) {
      setResult('Erro');
    }
  };

  const clearResult = () => {
    setResult('');
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <View style={styles.container}>
      {history !== '' && (
        <ScrollView style={styles.historyContainer}>
          {history.map((item, index) => (
            <Text key={index} style={styles.historyText}>
              {item}
            </Text>
          ))}
        </ScrollView>
      )}
      <View style={styles.topRowContainer}>
        <TouchableOpacity
          style={styles.backspaceButton}
          onPress={() => setResult(result.slice(0, -1))}
        >
          <FontAwesomeIcon
            style={styles.backspaceIcon}
            size={40}
            icon={faDeleteLeft}
          />
        </TouchableOpacity>
        <View style={styles.resultContainer}>
          <Text style={styles.result}>{result}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              clearResult(), clearHistory();
            }}
          >
            <Text style={styles.buttonText}>CE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('(')}
          >
            <Text style={styles.buttonText}>(</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress(')')}
          >
            <Text style={styles.buttonText}>)</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('/')}
          >
            <Text style={styles.buttonText}>%</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('7')}
          >
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('8')}
          >
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('9')}
          >
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('*')}
          >
            <Text style={styles.buttonText}>*</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('4')}
          >
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('5')}
          >
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('6')}
          >
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('-')}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('1')}
          >
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('2')}
          >
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('3')}
          >
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('+')}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('.')}
          >
            <Text style={styles.buttonText}>,</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePress('0')}
          >
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonEqual}
            onPress={() => calculate()}
          >
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 50,
    alignItems: 'center',
  },
  topRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  historyContainer: {
    minWidth: '90%',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: 'column-reverse',
  },
  historyText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'right',
  },
  resultContainer: {
    width: '78%',
    height: 60,
    padding: 10,
    marginBottom: 10,
    marginRight: 10,
    backgroundColor: '#e5e5e5',
    borderRadius: 10,
  },
  result: {
    fontSize: 30,
    textAlign: 'right',
  },
  buttonContainer: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    width: '23%',
    paddingVertical: 15,
    backgroundColor: '#DDDDDD',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 20,
  },
  backspaceButton: {
    width: '15%',
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    marginLeft: 10,
    alignItems: 'center',
  },
  backspaceIcon: {
    color: '#DDD',
    transform: [{ rotate: '180deg' }],
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonEqual: {
    width: '48%',
    paddingVertical: 15,
    backgroundColor: '#4c956c',
    alignItems: 'center',
    borderRadius: 5,
  },
});
