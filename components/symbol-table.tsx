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
			<div className="grid grid-cols-5 gap-3 my-unit-5 py-2">
				
			{
				Object.values(symbols).map((symbol) => {
					
					return (
						<div className="flex flex-row w-full gap-2 p-2 border-current border-1" key={symbol.description}>
							<div className="flex gap-3 w-full justify-around">
									<span>
									{`${symbol.description}:  `}
									</span>
									<span>
									{`${symbol.symbol} `}
									</span>
							</div>
						</div>
					)
				})
			}
			</div>
		</>

	) 
}

