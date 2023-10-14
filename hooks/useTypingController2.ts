import {useState} from "react";

const useTypingController2 = (symbolMapping:any) => {

	const [value, setValue] = useState("");
	const [symbol, setSymbol] = useState("");

	const [firstKey, setFirstKey] = useState("");

	const handleKeyPress = (event: KeyboardEvent) => {
		const { key } = event;
		if (key === "Backspace") {
			setValue(value.slice(0, -1));
		} else if (key === "Enter") {
			setValue("");
		} else if (key === " ") {
			setValue(value + " ");
		} else if (key === "Tab") {
			setValue(value + "\t");
		} else if (key.length === 1 && firstKey === "") {
			setFirstKey(key);
			setSymbol(getSymbol(key, key));
			return null;
		} else if (key.length === 1 && firstKey !== "") {
			const nextChar = getSymbol(firstKey, key)
			setValue(value.slice(0, -1));
			setValue(value + nextChar);
		}
			setFirstKey("");
	};
	const getSymbol = (firstKey: string, secondKey: string) => {
		const firstIsConsonant = Object.keys(symbolMapping.consonants).includes(firstKey);
		const firstIsVowel = Object.keys(symbolMapping.vowels).includes(firstKey);
		const secondIsVowel = Object.keys(symbolMapping.vowels).includes(secondKey);

		if (firstKey === secondKey) {
			if (firstIsConsonant) {
				return symbolMapping.consonants[firstKey];
			} else if (firstIsVowel) {
				return symbolMapping.vowels[firstKey];
			}
		} else if (firstIsConsonant && secondIsVowel) {
			return symbolMapping.consonantMaps[firstKey][secondKey];
		}
		return "";
	};


	return [value, symbol, handleKeyPress];
}

export default useTypingController2;
