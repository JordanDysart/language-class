"use client";

import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";

import { useTypingController2 } from "../hooks";

/**
 * This file is a work in progress. It is intended to be a typing tutor for the
 * Canadian Syllabics script. I'm trying to build a few different prototypes to
 * see what works best.
 */
const symbolMapping = {
	consonantMaps: {
		w: { a: '\u1417', e: '\u140C', i: '\u1403', o: '\u1412' },
		p: { a: '\u1438', e: '\u142F', i: '\u1431', o: '\u1433' },
		t: { a: '\u1455', e: '\u144C', i: '\u144E', o: '\u1450' },
		m: { a: '\u14AA', e: '\u14A3', i: '\u14A5', o: '\u14A7' },
		c: { a: '\u1490', e: '\u1489', i: '\u148B', o: '\u148D' },
		k: { a: '\u1472', e: '\u146B', i: '\u146D', o: '\u146F' },
		y: { a: '\u152d', e: '\u1526', i: '\u1528', o: '\u152a' },
		s: { a: '\u14F4', e: '\u14ED', i: '\u14EF', o: '\u14F1' },
		n: { a: '\u14C7', e: '\u14C0', i: '\u14C2', o: '\u14C4' },
		h: { a: '\u1515', e: '\u1510', i: '\u1511', o: '\u1513' },
		l: { a: '\u14da', e: '\u14d3', i: '\u14d5', o: '\u14d7' },
		r: { a: '\u1546', e: '\u1542', i: '\u1543', o: '\u1544' },
	},
	consonants: {
		w: '\u1424',
		p: '\u1449',
		t: '\u1466',
		m: '\u14bb',
		c: '\u14a1',
		k: '\u1483',
		y: '\u153E',
		s: '\u1505',
		n: '\u14d0',
		h: '\u1525',
		l: '\u14ea',
		r: '\u1550',
	},
	vowels: {
		e: '\u1401',
		i: '\u1403',
		o: '\u1405',
		a: '\u140C',
	}
};



export const Typing = () => {

	const [value, symbol, handleKeyPress] = useTypingController2(symbolMapping);

	return (
		<div className="flex flex-row gap-3 my-unit-5 py-2">
			<div className="flex flex-col gap-3 w-unit-9xl">
				<div className="flex gap-3">
					{`${symbol?symbol:'\u1400'} `}
				</div>
				<Textarea
					value={value as string}
					onKeyDown={handleKeyPress as any}
					label="Description"
					labelPlacement="outside"
					placeholder="Enter your description"
					className="max-w-xl w-full h-fit"
				/>
				<Textarea
					isReadOnly
					label="Description"
					variant="bordered"
					labelPlacement="outside"
					placeholder="Enter your description"
					defaultValue="Here is an attempt to make a typing tutor for the Canadian Syllabics script. This works on a two touch system. The first touch is the consonant, the second touch is the vowel. The consonants are mapped to the home row, the vowels are mapped to the top row. They intersect within the matrix and can be output. hit enter to reset."
					className="max-w-xl w-full"
				/>
			</div>
			<Table
				color={"secondary"}
				selectionMode="single"
				aria-label="Example static collection table"
				className="w-full"
			>
				<TableHeader>
					<TableColumn>{" "}</TableColumn>
					<TableColumn>e</TableColumn>
					<TableColumn>i</TableColumn>
					<TableColumn>o</TableColumn>
					<TableColumn>a</TableColumn>
					<TableColumn>{" "}</TableColumn>
				</TableHeader>
				<TableBody>
					<TableRow key="1">
						<TableCell>{' '}</TableCell>
						<TableCell>{symbolMapping.vowels['e']}</TableCell>
						<TableCell>{symbolMapping.vowels['i']}</TableCell>
						<TableCell>{symbolMapping.vowels['o']}</TableCell>
						<TableCell>{symbolMapping.vowels['a']}</TableCell>
						<TableCell>{'\u1427'}</TableCell>
					</TableRow>
					<TableRow key="w">
						<TableCell>W</TableCell>
						<TableCell>{symbolMapping.consonantMaps.w['e']}</TableCell>
						<TableCell>{symbolMapping.consonantMaps.w['i']}</TableCell>
						<TableCell>{symbolMapping.consonantMaps.w['o']}</TableCell>
						<TableCell>{symbolMapping.consonantMaps.w['a']}</TableCell>
						<TableCell>{symbolMapping.consonants['w']}</TableCell>
					</TableRow>
					<TableRow key="p">
						<TableCell>P</TableCell>
						<TableCell>{symbolMapping.consonantMaps.p['e']}</TableCell>
						<TableCell>{symbolMapping.consonantMaps.p['i']}</TableCell>
						<TableCell>{symbolMapping.consonantMaps.p['o']}</TableCell>
						<TableCell>{symbolMapping.consonantMaps.p['a']}</TableCell>
						<TableCell>{symbolMapping.consonants['p']}</TableCell>
					</TableRow>
					<TableRow key="4">
						<TableCell>T</TableCell>
						<TableCell>{symbolMapping.consonantMaps.t['e']}</TableCell>
						<TableCell>{symbolMapping.consonantMaps.t['i']}</TableCell>
						<TableCell>{symbolMapping.consonantMaps.t['o']}</TableCell>
						<TableCell>{symbolMapping.consonantMaps.t['a']}</TableCell>
						<TableCell>{symbolMapping.consonants['t']}</TableCell>
					</TableRow>
					<TableRow key="5">
						<TableCell>M</TableCell>
						<TableCell>{symbolMapping.consonantMaps.m['e']}</TableCell>
						<TableCell>{symbolMapping.consonantMaps.m['i']}</TableCell>
						<TableCell>{symbolMapping.consonantMaps.m['o']}</TableCell>
						<TableCell>{symbolMapping.consonantMaps.m['a']}</TableCell>
						<TableCell>{symbolMapping.consonants['m']}</TableCell>
					</TableRow>
					<TableRow key="6">
						<TableCell>CH</TableCell>
						<TableCell>{symbolMapping.consonantMaps.c['e']}</TableCell>
						<TableCell>{symbolMapping.consonantMaps.c['i']}</TableCell>
						<TableCell>{symbolMapping.consonantMaps.c['o']}</TableCell>
						<TableCell>{symbolMapping.consonantMaps.c['a']}</TableCell>
						<TableCell>{symbolMapping.consonants['c']}</TableCell>
					</TableRow>
					<TableRow key="7">
						<TableCell>K</TableCell>
						<TableCell>{symbolMapping.consonantMaps.k['e']}</TableCell>
						<TableCell>{symbolMapping.consonantMaps.k['i']}</TableCell>
						<TableCell>{symbolMapping.consonantMaps.k['o']}</TableCell>
						<TableCell>{symbolMapping.consonantMaps.k['a']}</TableCell>
						<TableCell>{symbolMapping.consonants['k']}</TableCell>
					</TableRow>
					<TableRow key="8">
						<TableCell>Y</TableCell>
						<TableCell>{symbolMapping.consonantMaps.y['e']}</TableCell>
						<TableCell>{symbolMapping.consonantMaps.y['i']}</TableCell>
						<TableCell>{symbolMapping.consonantMaps.y['o']}</TableCell>
						<TableCell>{symbolMapping.consonantMaps.y['a']}</TableCell>
						<TableCell>{symbolMapping.consonants['y']}</TableCell>
					</TableRow>
					<TableRow key="9">
						<TableCell>S</TableCell>
						<TableCell>{symbolMapping.consonantMaps.s['e']}</TableCell>
						<TableCell>{symbolMapping.consonantMaps.s['i']}</TableCell>
						<TableCell>{symbolMapping.consonantMaps.s['o']}</TableCell>
						<TableCell>{symbolMapping.consonantMaps.s['a']}</TableCell>
						<TableCell>{symbolMapping.consonants['s']}</TableCell>
					</TableRow>
					<TableRow key="10">
						<TableCell>N</TableCell>
						<TableCell>{symbolMapping.consonantMaps.n['e']}</TableCell>
						<TableCell>{symbolMapping.consonantMaps.n['i']}</TableCell>
						<TableCell>{symbolMapping.consonantMaps.n['o']}</TableCell>
						<TableCell>{symbolMapping.consonantMaps.n['a']}</TableCell>
						<TableCell>{symbolMapping.consonants['n']}</TableCell>
					</TableRow>
					<TableRow key="11">
						<TableCell>sh</TableCell>
						<TableCell>{symbolMapping.consonantMaps.h['e']}</TableCell>
						<TableCell>{symbolMapping.consonantMaps.h['i']}</TableCell>
						<TableCell>{symbolMapping.consonantMaps.h['o']}</TableCell>
						<TableCell>{symbolMapping.consonantMaps.h['a']}</TableCell>
						<TableCell>{symbolMapping.consonants['h']}</TableCell>
					</TableRow>
					<TableRow key="12">
						<TableCell>L</TableCell>
						<TableCell>{symbolMapping.consonantMaps.l['e']}</TableCell>
						<TableCell>{symbolMapping.consonantMaps.l['i']}</TableCell>
						<TableCell>{symbolMapping.consonantMaps.l['o']}</TableCell>
						<TableCell>{symbolMapping.consonantMaps.l['a']}</TableCell>
						<TableCell>{symbolMapping.consonants['l']}</TableCell>
					</TableRow>
					<TableRow key="13">
						<TableCell>R</TableCell>
						<TableCell>{symbolMapping.consonantMaps.r['e']}</TableCell>
						<TableCell>{symbolMapping.consonantMaps.r['i']}</TableCell>
						<TableCell>{symbolMapping.consonantMaps.r['o']}</TableCell>
						<TableCell>{symbolMapping.consonantMaps.r['a']}</TableCell>
						<TableCell>{symbolMapping.consonants['r']}</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</div>
	);
}

