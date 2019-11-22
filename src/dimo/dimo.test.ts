'use strict';

import {testTokenization} from '../test/testRunner';

testTokenization('dimo', [
	[
		{
		line: 'SATISFIABLE',
		tokens: [
			{startIndex: 0, type: 'keyword.dimo'}
		]
		},

		{
			line: 'MODELS ExactlyMofN(n,m)',
			tokens: [
				{startIndex: 0, type: 'keyword.dimo'},
				{startIndex: 6, type: 'white.dimo'},
				{startIndex: 7, type: 'identifier.dimo'},
				{startIndex: 18, type: 'delimiter.parenthesis.dimo'},
				{startIndex: 19, type: 'variable.dimo'},
				{startIndex: 20, type: 'delimiter.dimo'},
				{startIndex: 21, type: 'variable.dimo'},
				{startIndex: 22, type: 'delimiter.parenthesis.dimo'}
			]
		},
		{
			line: 'PROPOSITIONS A',
			tokens: [
				{startIndex: 0, type: 'keyword.dimo'},
				{startIndex: 12, type: 'white.dimo'},
				{startIndex: 13, type: 'identifier.dimo'},
			]
		},
		{
			line: 'PARAMETERS   n : {1,..}, m : NAT WITH m <= n',
			tokens: [
				{startIndex: 0, type: 'keyword.dimo'},
				{startIndex: 10, type: 'white.dimo'},
				{startIndex: 13, type: 'variable.dimo'},
				{startIndex: 14, type: 'white.dimo'},
				{startIndex: 15, type: ''},
				{startIndex: 16, type: 'white.dimo'},
				{startIndex: 17, type: 'delimiter.curly.dimo'},
				{startIndex: 18, type: 'number.dimo'},
				{startIndex: 19, type: 'delimiter.dimo'},
				{startIndex: 20, type: ''},
				{startIndex: 22, type: 'delimiter.curly.dimo'},
				{startIndex: 23, type: 'delimiter.dimo'},
				{startIndex: 24, type: 'white.dimo'},
				{startIndex: 25, type: 'variable.dimo'},
				{startIndex: 26, type: 'white.dimo'},
				{startIndex: 27, type: ''},
				{startIndex: 28, type: 'white.dimo'},
				{startIndex: 29, type: 'constant.dimo'},
				{startIndex: 32, type: 'white.dimo'},
				{startIndex: 33, type: 'keyword.dimo'},
				{startIndex: 37, type: 'white.dimo'},
				{startIndex: 38, type: 'variable.dimo'},
				{startIndex: 39, type: 'white.dimo'},
				{startIndex: 40, type: 'operator.dimo'},
				{startIndex: 42, type: 'white.dimo'},
				{startIndex: 43, type: 'variable.dimo'},
			]
		},
		{
			line: 'FORMULAS',
			tokens: [
				{startIndex: 0, type: 'keyword.dimo'}
			]
		}
	]
]);
