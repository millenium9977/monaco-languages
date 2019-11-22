'use strict';

import IRichLanguageConfiguration = monaco.languages.LanguageConfiguration;
import ILanguage = monaco.languages.IMonarchLanguage;


export const conf: IRichLanguageConfiguration = {
	comments: {
		lineComment: '//',
		blockComment: ['/*', '*/'],
	},
	brackets: [
		['{', '}'],
		['[', ']'],
		['(', ')']
	],
	autoClosingPairs: [
		{open: '{', close: '}'},
		{open: '[', close: ']'},
		{open: '(', close: ')'},
		{open: '"', close: '"'}
	],
	surroundingPairs: [
		{open: '{', close: '}'},
		{open: '[', close: ']'},
		{open: '(', close: ')'},
		{open: '"', close: '"'},
	],

	folding: {
		markers: {
			start: new RegExp("^\\s*#region\\b"),
			end: new RegExp("^\\s*#endregion\\b")
		}
	}
};

export const language = <ILanguage>{
	defaultToken: '',
	tokenPostfix: '.dimo',
	ignoreCase: false,


	keywords: [
		'SATISFIABLE', 'WITH', 'MODELS', 'EQUIVALENT',
		'VALID', 'PROPOSITIONS', 'PARAMETERS',
		'FORMULAS', 'TO',
	],

	constants: [
		'NAT',
	],

	booleans: [
		'true', 'false'
	],

	symbols: /[=><+\-*\^&|]+/,

	operators: ['LOG', '+', '-', '*', '^', 'MOD',
		'MIN', 'MAX', '=', '<=', '>=', '<', '>',
		'<>', '-'],

	digits: /[]/,

	junctions: ['&', '|', '->', '<->', 'FORALL',
		'FORSOME'],


	tokenizer: {
		root: [
			//keywords
			[/\b[A-Z][A-Z]+\b/, {
				cases: {
					'@keywords': 'keyword',
					'@junctions' : 'junction',
					'@constants' : 'constant'
				}
			}],
			// whitespace
			{ include: '@whitespace'},

			//Identifier
			[/\b[A-Z][a-zA-Z0-9]*\b/, 'identifier'],

			//Variables
			[/\b[a-z][a-zA-Z0-9]*\b/, {cases: {
					'@booleans' : 'boolean',
					'@default' : 'variable'}}],


			//brackets
			[/[{}()\[\]]/, '@brackets'],

			//Operators
			[/@symbols/, {
				cases: {
					'@junctions' : 'junction',
					'@operators' : 'operator',
					'@default' : ''
				}
			}],

			[/,/, 'delimiter'],

			//Numbers
			[/[\d_]+/, 'number'],
		],

		comment: [
			[/[^\/*]+/, 'comment' ],
			[/\/\*/,    'comment', '@push' ],    // nested comment
			["\\*/",    'comment', '@pop'  ],
			[/[\/*]/,   'comment' ]
		],

		whitespace: [
			[/[ \t\r\n]+/, 'white'],
			[/\/\*/,       'comment', '@comment' ],
			[/\/\/.*$/,    'comment'],
		],
	}
};
