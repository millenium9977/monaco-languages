'use strict';

import {testTokenization} from '../test/testRunner';

testTokenization('dimo', [
	[
		{
			line: 'SATISFIABLE NQueens(n)',
			tokens: [
				{startIndex: 0, type: 'keyword.dimo'},
				{startIndex: 11, type: 'white.dimo'},
				{startIndex: 12, type: 'identifier.dimo'},
				{startIndex: 19, type: 'delimiter.parenthesis.dimo'},
				{startIndex: 20, type: 'variable.dimo'},
				{startIndex: 21, type: 'delimiter.parenthesis.dimo'},
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
				{startIndex: 15, type: 'delimiter.dimo'},
				{startIndex: 16, type: 'white.dimo'},
				{startIndex: 17, type: 'delimiter.curly.dimo'},
				{startIndex: 18, type: 'number.dimo'},
				{startIndex: 19, type: 'delimiter.dimo'},
				{startIndex: 20, type: 'enumeration.dimo'},
				{startIndex: 22, type: 'delimiter.curly.dimo'},
				{startIndex: 23, type: 'delimiter.dimo'},
				{startIndex: 24, type: 'white.dimo'},
				{startIndex: 25, type: 'variable.dimo'},
				{startIndex: 26, type: 'white.dimo'},
				{startIndex: 27, type: 'delimiter.dimo'},
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
		},
		{
			line: 'ExactlyMofN(n,m) = AtLeastMChosen(n,m) & AtMostMChosen(n,m)',
			tokens: [
				{startIndex: 0, type: 'identifier.dimo'},
				{startIndex: 11, type: 'delimiter.parenthesis.dimo'},
				{startIndex: 12, type: 'variable.dimo'},
				{startIndex: 13, type: 'delimiter.dimo'},
				{startIndex: 14, type: 'variable.dimo'},
				{startIndex: 15, type: 'delimiter.parenthesis.dimo'},
				{startIndex: 16, type: 'white.dimo'},
				{startIndex: 17, type: 'operator.dimo'},
				{startIndex: 18, type: 'white.dimo'},
				{startIndex: 19, type: 'identifier.dimo'},
				{startIndex: 33, type: 'delimiter.parenthesis.dimo'},
				{startIndex: 34, type: 'variable.dimo'},
				{startIndex: 35, type: 'delimiter.dimo'},
				{startIndex: 36, type: 'variable.dimo'},
				{startIndex: 37, type: 'delimiter.parenthesis.dimo'},
				{startIndex: 38, type: 'white.dimo'},
				{startIndex: 39, type: 'junction.dimo'},
				{startIndex: 40, type: 'white.dimo'},
				{startIndex: 41, type: 'identifier.dimo'},
				{startIndex: 54, type: 'delimiter.parenthesis.dimo'},
				{startIndex: 55, type: 'variable.dimo'},
				{startIndex: 56, type: 'delimiter.dimo'},
				{startIndex: 57, type: 'variable.dimo'},
				{startIndex: 58, type: 'delimiter.parenthesis.dimo'},
			]
		},
		{
			line: 'FORALL i: {0,..,n-1} . X(i) <-> X(i+1)',
			tokens: [
				{startIndex: 0, type: 'junction.dimo'},
				{startIndex: 6, type: 'white.dimo'},
				{startIndex: 7, type: 'variable.dimo'},
				{startIndex: 8, type: 'delimiter.dimo'},
				{startIndex: 9, type: 'white.dimo'},
				{startIndex: 10, type: 'delimiter.curly.dimo'},
				{startIndex: 11, type: 'number.dimo'},
				{startIndex: 12, type: 'delimiter.dimo'},
				{startIndex: 13, type: 'enumeration.dimo'},
				{startIndex: 15, type: 'delimiter.dimo'},
				{startIndex: 16, type: 'variable.dimo'},
				{startIndex: 17, type: 'operator.dimo'},
				{startIndex: 18, type: 'number.dimo'},
				{startIndex: 19, type: 'delimiter.curly.dimo'},
				{startIndex: 20, type: 'white.dimo'},
				{startIndex: 21, type: 'delimiter.dimo'},
				{startIndex: 22, type: 'white.dimo'},
				{startIndex: 23, type: 'identifier.dimo'},
				{startIndex: 24, type: 'delimiter.parenthesis.dimo'},
				{startIndex: 25, type: 'variable.dimo'},
				{startIndex: 26, type: 'delimiter.parenthesis.dimo'},
				{startIndex: 27, type: 'white.dimo'},
				{startIndex: 28, type: 'junction.dimo'},
				{startIndex: 31, type: 'white.dimo'},
				{startIndex: 32, type: 'identifier.dimo'},
				{startIndex: 33, type: 'delimiter.parenthesis.dimo'},
				{startIndex: 34, type: 'variable.dimo'},
				{startIndex: 35, type: 'operator.dimo'},
				{startIndex: 36, type: 'number.dimo'},
				{startIndex: 37, type: 'delimiter.parenthesis.dimo'},
			]
		},
		{
			line: '-ExactlyOne(n,m)',
			tokens: [
				{startIndex: 0, type: 'negation.dimo'},
				{startIndex: 1, type: 'identifier.dimo'},
				{startIndex: 11, type: 'delimiter.parenthesis.dimo'},
				{startIndex: 12, type: 'variable.dimo'},
				{startIndex: 13, type: 'delimiter.dimo'},
				{startIndex: 14, type: 'variable.dimo'},
				{startIndex: 15, type: 'delimiter.parenthesis.dimo'},
			]
		},
		{
			line: '{1} | {2}',
			tokens: [
				{startIndex: 0, type: 'delimiter.curly.dimo'},
				{startIndex: 1, type: 'number.dimo'},
				{startIndex: 2, type: 'delimiter.curly.dimo'},
				{startIndex: 3, type: 'white.dimo'},
				{startIndex: 4, type: 'set.operator.dimo'},
				{startIndex: 5, type: 'white.dimo'},
				{startIndex: 6, type: 'delimiter.curly.dimo'},
				{startIndex: 7, type: 'number.dimo'},
				{startIndex: 8, type: 'delimiter.curly.dimo'},
			]
		},
		{
			line: 'MAX {1,2}',
			tokens: [
				{startIndex: 0, type: 'accumulation.dimo'},
				{startIndex: 3, type: 'white.dimo'},
				{startIndex: 4, type: 'delimiter.curly.dimo'},
				{startIndex: 5, type: 'number.dimo'},
				{startIndex: 6, type: 'delimiter.dimo'},
				{startIndex: 7, type: 'number.dimo'},
				{startIndex: 8, type: 'delimiter.curly.dimo'},
			]
		},
		{
			line: 'AtMostOneInEachDiagDown(n) =',
			tokens: [
				{startIndex: 0, type: 'identifier.dimo'},
				{startIndex: 23, type: 'delimiter.parenthesis.dimo'},
				{startIndex: 24, type: 'variable.dimo'},
				{startIndex: 25, type: 'delimiter.parenthesis.dimo'},
				{startIndex: 26, type: 'white.dimo'},
				{startIndex: 27, type: 'operator.dimo'}
			]
		},
		{
			line: 'FORALL i: {1,..,n-1}. FORALL j: {2,..,n}.',
			tokens: [
				{startIndex: 0, type: 'junction.dimo'},
				{startIndex: 6, type: 'white.dimo'},
				{startIndex: 7, type: 'variable.dimo'},
				{startIndex: 8, type: 'delimiter.dimo'},
				{startIndex: 9, type: 'white.dimo'},
				{startIndex: 10, type: 'delimiter.curly.dimo'},
				{startIndex: 11, type: 'number.dimo'},
				{startIndex: 12, type: 'delimiter.dimo'},
				{startIndex: 13, type: 'enumeration.dimo'},
				{startIndex: 15, type: 'delimiter.dimo'},
				{startIndex: 16, type: 'variable.dimo'},
				{startIndex: 17, type: 'operator.dimo'},
				{startIndex: 18, type: 'number.dimo'},
				{startIndex: 19, type: 'delimiter.curly.dimo'},
				{startIndex: 20, type: 'delimiter.dimo'},
				{startIndex: 21, type: 'white.dimo'},
				{startIndex: 22, type: 'junction.dimo'},
				{startIndex: 28, type: 'white.dimo'},
				{startIndex: 29, type: 'variable.dimo'},
				{startIndex: 30, type: 'delimiter.dimo'},
				{startIndex: 31, type: 'white.dimo'},
				{startIndex: 32, type: 'delimiter.curly.dimo'},
				{startIndex: 33, type: 'number.dimo'},
				{startIndex: 34, type: 'delimiter.dimo'},
				{startIndex: 35, type: 'enumeration.dimo'},
				{startIndex: 37, type: 'delimiter.dimo'},
				{startIndex: 38, type: 'variable.dimo'},
				{startIndex: 39, type: 'delimiter.curly.dimo'},
				{startIndex: 40, type: 'delimiter.dimo'},
			]
		},
		{
			line: 'D(i,j) -> FORALL k: {1,..,MIN {n-i,j-1}}. -D(i+k,j-k)',
			tokens: [
				{startIndex: 0, type: 'identifier.dimo'},
				{startIndex: 1, type: 'delimiter.parenthesis.dimo'},
				{startIndex: 2, type: 'variable.dimo'},
				{startIndex: 3, type: 'delimiter.dimo'},
				{startIndex: 4, type: 'variable.dimo'},
				{startIndex: 5, type: 'delimiter.parenthesis.dimo'},
				{startIndex: 6, type: 'white.dimo'},
				{startIndex: 7, type: 'junction.dimo'},
				{startIndex: 9, type: 'white.dimo'},
				{startIndex: 10, type: 'junction.dimo'},
				{startIndex: 16, type: 'white.dimo'},
				{startIndex: 17, type: 'variable.dimo'},
				{startIndex: 18, type: 'delimiter.dimo'},
				{startIndex: 19, type: 'white.dimo'},
				{startIndex: 20, type: 'delimiter.curly.dimo'},
				{startIndex: 21, type: 'number.dimo'},
				{startIndex: 22, type: 'delimiter.dimo'},
				{startIndex: 23, type: 'enumeration.dimo'},
				{startIndex: 25, type: 'delimiter.dimo'},
				{startIndex: 26, type: 'accumulation.dimo'},
				{startIndex: 29, type: 'white.dimo'},
				{startIndex: 30, type: 'delimiter.curly.dimo'},
				{startIndex: 31, type: 'variable.dimo'},
				{startIndex: 32, type: 'operator.dimo'},
				{startIndex: 33, type: 'variable.dimo'},
				{startIndex: 34, type: 'delimiter.dimo'},
				{startIndex: 35, type: 'variable.dimo'},
				{startIndex: 36, type: 'operator.dimo'},
				{startIndex: 37, type: 'number.dimo'},
				{startIndex: 38, type: 'delimiter.curly.dimo'},
				{startIndex: 40, type: 'delimiter.dimo'},
				{startIndex: 41, type: 'white.dimo'},
				{startIndex: 42, type: 'negation.dimo'},
				{startIndex: 43, type: 'identifier.dimo'},
				{startIndex: 44, type: 'delimiter.parenthesis.dimo'},
				{startIndex: 45, type: 'variable.dimo'},
				{startIndex: 46, type: 'operator.dimo'},
				{startIndex: 47, type: 'variable.dimo'},
				{startIndex: 48, type: 'delimiter.dimo'},
				{startIndex: 49, type: 'variable.dimo'},
				{startIndex: 50, type: 'operator.dimo'},
				{startIndex: 51, type: 'variable.dimo'},
				{startIndex: 52, type: 'delimiter.parenthesis.dimo'}
			]
		}
	]
])
;
