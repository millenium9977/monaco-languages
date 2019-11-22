'use strict';

import { registerLanguage } from '../_.contribution';

registerLanguage({
					 id: 'dimo',
					 extensions: ['.dimo'],
					 aliases: ['dimo'],
					 loader: () => import('./dimo')
				 });
