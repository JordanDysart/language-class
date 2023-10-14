import { useState } from 'react';

const useTypingController = (symbolMapping: any) => {

	const [symbol, setSymbol] = useState<string>('');
	const [value, setValue] = useState<string>("");

	const [vowelMapping, setVowelMapping] = useState(symbolMapping.vowels);

	const handleKeyPress = (event: KeyboardEvent) => {
		const key = event.key.toLowerCase();

		// Check if the key is a consonant
		if (symbolMapping.consonants[key as keyof typeof symbolMapping.consonants]) {
			// if it is, check to see if a symbol is set
			// if it is, add the symbol to the value and set the symbol to this consonant
			// if it isn't, set the symbol
			if (symbol) {
				setValue((value) => value + symbol);
			}
			const newSymbol = symbolMapping.consonants[key as keyof typeof symbolMapping.consonants];
			setSymbol(newSymbol);
			setVowelMapping(symbolMapping.consonantMaps[key as keyof typeof symbolMapping.consonantMaps]);
			console.log(vowelMapping);
		}

		// Check if the key is a vowel
		if (symbolMapping.vowels[key as keyof typeof symbolMapping.vowels]) {
			const vowelSymbol = vowelMapping[key as keyof typeof vowelMapping];
			console.log(vowelSymbol);
			setSymbol(vowelSymbol);

		}
	}

	return [value, symbol, handleKeyPress];
}

export default useTypingController;
