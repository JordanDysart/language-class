type SymbolTableProps = {
	symbols: {
		[key: string]: {
			symbol: string,
			title: string,
			description: string,
			language: string,
			unicodeValue: string,
			phonetic?: string,
			roman?: string,
			english?: string,
		}

	};
}

/**
 * A symbol table consists of vowels and consonants spanning across the columms and rows of a table respectively.
 * The symbols are represented by their unicode values.
 * The symbols are mapped to their respective descriptions.
 *
 *
 */
export const SymbolTable = ({symbols}:SymbolTableProps) => {
		
	return (
		<>
			<div className="flex flex-row gap-3 flex-wrap my-unit-5 py-2">
				
			{
				Object.values(symbols).map((symbol) => {
					
					return (
						<div className="flex flex-col gap-3" key={symbol.description}>
							<div className="flex gap-3">
								{`symbol: ${symbol.symbol} `}
							</div>
						</div>
					)
				})
			}
			</div>
		</>

	) 
}

