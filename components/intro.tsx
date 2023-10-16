"use client";

import { SymbolTable } from "./symbol-table";

import { unifiedCanadianAboriginalSyllabicsObject as symbols, languages} from "../_data/unicode";
import { useEffect, useState } from "react";

export const Intro = () => {

	const [language, setLanguage] = useState("CANADIAN SYLLABICS");
	const [symbolsSet, setSymbolsSet] = useState( symbols[language]);
	const intro = "Check it out, these groupos of syllabics are referenced in the unicode standard. The generic group of CANADIAN SYLLABICS seem to be used throughout canada while some dialects and langauges have specific symbols that they rely on. Neat!";

	const handleChange = (e) => {
		setLanguage(event.target.value)
	}

	useEffect( () => {
		setSymbolsSet(symbols[language])
		},[language, setSymbolsSet])

	return (
		<>
			<div className="flex flex-row gap-3 my-unit-5 py-2">	
				<div className="flex flex-col gap-3 w-unit-9xl">
					<div className="flex gap-3">
						{`${intro} `}
					</div>
				</div>
			</div>
			<select value={language} onChange={handleChange}>
				{
					languages.map( (item: string) => <option key={item} value={item} >{item}</option>)
				}
			</select>
				

			<SymbolTable symbols={symbolsSet} />
		</>
	)
}


