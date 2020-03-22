declare module 'webpack.client' {
	 function _exports(options?: {}, webpack?: any, onlyMerge?: boolean): any;
	export = _exports;

}
declare module 'webpack.face' {
	 function _exports(options?: {}): {
	    mode: string;
	    performance: {
	        hints: boolean;
	    };
	    watch: boolean;
	    devtool: string | boolean;
	    entry: {};
	    output: {
	        path: any;
	        filename: string;
	        publicPath: string;
	    };
	    optimization: {
	        minimizer: any[];
	    };
	    module: {
	        rules: ({
	            test: RegExp;
	            loader: string;
	            include: any[];
	            query: {
	                presets: string[];
	                plugins: string[];
	            };
	            use?: undefined;
	            options?: undefined;
	        } | {
	            test: RegExp;
	            use: string;
	            loader?: undefined;
	            include?: undefined;
	            query?: undefined;
	            options?: undefined;
	        } | {
	            test: RegExp;
	            use: any[];
	            loader?: undefined;
	            include?: undefined;
	            query?: undefined;
	            options?: undefined;
	        } | {
	            test: RegExp;
	            loader: string;
	            options: {
	                name: string;
	            };
	            include?: undefined;
	            query?: undefined;
	            use?: undefined;
	        })[];
	    };
	    plugins: any;
	};
	export = _exports;

}
declare module 'src/utils' {
	export = utils; const utils: any;

}
declare module 'bin/utils' {
	export = utils; const utils: any;

}
declare module 'bin/actions' {
	export function cleanUpMusic(node: any): Promise<void>;
	export function exportSongs(node: any): Promise<void>;
	export function addSong(node: any): Promise<void>;
	export function getSongAudioLink(node: any): Promise<void>;
	export function getSongCoverLink(node: any): Promise<void>;
	export function getSongAudioToPath(node: any): Promise<void>;
	export function getSongCoverToPath(node: any): Promise<void>;
	export function removeSong(node: any): Promise<void>;

}
declare module 'bin/runner' {
	 const _exports: any;
	export = _exports;

}
declare module 'src/db/transports/database/index' {
	 function _exports(Parent: any): {
	    new (): {
	        [x: string]: any;
	        /**
	         * @async
	         * @param {string} title
	         * @returns {object}
	         */
	        getMusicByPk(): any;
	        /**
	         * @async
	         * @param {string} hash
	         * @returns {object}
	         */
	        getMusicByFileHash(): any;
	        /**
	         * @async
	         * @param {string} hash
	         */
	        removeMusicByFileHash(): Promise<void>;
	    };
	    [x: string]: any;
	};
	export = _exports;

}
declare module 'src/db/transports/loki/index' {
	 function _exports(Parent: any): {
	    new (): {
	        [x: string]: any;
	        /**
	         * @see DatabaseMuseria.prototype.getMusicByPk
	         */
	        getMusicByPk(title: any, options?: {}): Promise<any>;
	        /**
	         * @see DatabaseMuseria.prototype.getMusicByFileHash
	         */
	        getMusicByFileHash(hash: any): Promise<any>;
	        /**
	         * @see DatabaseMuseria.prototype.removeMusicByFileHash
	         */
	        removeMusicByFileHash(hash: any): Promise<void>;
	    };
	    [x: string]: any;
	};
	export = _exports;

}
declare module 'src/errors' {
	 const _exports: any;
	export = _exports;

}
declare module 'src/server/transports/express/midds' {
	export = midds; const midds: any;

}
declare module 'src/server/transports/express/controllers' {
	export function indexPage(): (req: any, res: any) => any;
	export function favicon(): any;

}
declare module 'src/server/transports/express/routes' {
	 const _exports: {
	    [n: number]: {
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    };
	    length: number;
	    toString(): string;
	    toLocaleString(): string;
	    pop(): {
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    };
	    push(...items: ({
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    })[]): number;
	    concat(...items: ConcatArray<{
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    }>[]): ({
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    })[];
	    concat(...items: ({
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    } | ConcatArray<{
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    }>)[]): ({
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    })[];
	    join(separator?: string): string;
	    reverse(): ({
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    })[];
	    shift(): {
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    };
	    slice(start?: number, end?: number): ({
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    })[];
	    sort(compareFn?: (a: {
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    }, b: {
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    }) => number): ({
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    })[];
	    splice(start: number, deleteCount?: number): ({
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    })[];
	    splice(start: number, deleteCount: number, ...items: ({
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    })[]): ({
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    })[];
	    unshift(...items: ({
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    })[]): number;
	    indexOf(searchElement: {
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    }, fromIndex?: number): number;
	    lastIndexOf(searchElement: {
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    }, fromIndex?: number): number;
	    every(callbackfn: (value: {
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    }, index: number, array: ({
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    })[]) => unknown, thisArg?: any): boolean;
	    some(callbackfn: (value: {
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    }, index: number, array: ({
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    })[]) => unknown, thisArg?: any): boolean;
	    forEach(callbackfn: (value: {
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    }, index: number, array: ({
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    })[]) => void, thisArg?: any): void;
	    map<U>(callbackfn: (value: {
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    }, index: number, array: ({
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    })[]) => U, thisArg?: any): U[];
	    filter<S extends {
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    }>(callbackfn: (value: {
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    }, index: number, array: ({
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    })[]) => value is S, thisArg?: any): S[];
	    filter(callbackfn: (value: {
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    }, index: number, array: ({
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    })[]) => unknown, thisArg?: any): ({
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    })[];
	    reduce(callbackfn: (previousValue: {
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    }, currentValue: {
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    }, currentIndex: number, array: ({
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    })[]) => {
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    }): {
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    };
	    reduce(callbackfn: (previousValue: {
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    }, currentValue: {
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    }, currentIndex: number, array: ({
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    })[]) => {
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    }, initialValue: {
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    }): {
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    };
	    reduce<U_1>(callbackfn: (previousValue: U_1, currentValue: {
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    }, currentIndex: number, array: ({
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    })[]) => U_1, initialValue: U_1): U_1;
	    reduceRight(callbackfn: (previousValue: {
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    }, currentValue: {
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    }, currentIndex: number, array: ({
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    })[]) => {
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    }): {
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    };
	    reduceRight(callbackfn: (previousValue: {
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    }, currentValue: {
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    }, currentIndex: number, array: ({
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    })[]) => {
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    }, initialValue: {
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    }): {
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    };
	    reduceRight<U_2>(callbackfn: (previousValue: U_2, currentValue: {
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    }, currentIndex: number, array: ({
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    })[]) => U_2, initialValue: U_2): U_2;
	    find<S_1 extends {
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    }>(predicate: (this: void, value: {
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    }, index: number, obj: ({
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    })[]) => value is S_1, thisArg?: any): S_1;
	    find(predicate: (value: {
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    }, index: number, obj: ({
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    })[]) => unknown, thisArg?: any): {
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    };
	    findIndex(predicate: (value: {
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    }, index: number, obj: ({
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    })[]) => unknown, thisArg?: any): number;
	    fill(value: {
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    }, start?: number, end?: number): ({
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    })[];
	    copyWithin(target: number, start: number, end?: number): ({
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    })[];
	    [Symbol.iterator](): IterableIterator<{
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    }>;
	    entries(): IterableIterator<[number, {
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    }]>;
	    keys(): IterableIterator<number>;
	    values(): IterableIterator<{
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    }>;
	    [Symbol.unscopables](): {
	        copyWithin: boolean;
	        entries: boolean;
	        fill: boolean;
	        find: boolean;
	        findIndex: boolean;
	        keys: boolean;
	        values: boolean;
	    };
	    includes(searchElement: {
	        name: string;
	        fn: () => any;
	    } | {
	        name: string;
	        url: string;
	        fn: () => any;
	    } | {
	        name: string;
	        mehtod: string;
	        url: string;
	        fn: any[];
	    }, fromIndex?: number): boolean;
	};
	export = _exports;

}
declare module 'src/server/transports/express/client/controllers' {
	export function requestSong(node: any): (req: any, res: any, next: any) => Promise<void>;
	export function getSongInfo(node: any): (req: any, res: any, next: any) => Promise<void>;
	export function getSongLink(node: any): (req: any, res: any, next: any) => Promise<void>;
	export function addSong(node: any): (req: any, res: any, next: any) => Promise<void>;
	export function removeSong(node: any): (req: any, res: any, next: any) => Promise<void>;

}
declare module 'src/server/transports/express/client/routes' {
	 const _exports: {
	    [n: number]: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    };
	    length: number;
	    toString(): string;
	    toLocaleString(): string;
	    pop(): {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    };
	    push(...items: ({
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    })[]): number;
	    concat(...items: ConcatArray<{
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    }>[]): ({
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    })[];
	    concat(...items: ({
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    } | ConcatArray<{
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    }>)[]): ({
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    })[];
	    join(separator?: string): string;
	    reverse(): ({
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    })[];
	    shift(): {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    };
	    slice(start?: number, end?: number): ({
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    })[];
	    sort(compareFn?: (a: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    }, b: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    }) => number): ({
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    })[];
	    splice(start: number, deleteCount?: number): ({
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    })[];
	    splice(start: number, deleteCount: number, ...items: ({
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    })[]): ({
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    })[];
	    unshift(...items: ({
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    })[]): number;
	    indexOf(searchElement: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    }, fromIndex?: number): number;
	    lastIndexOf(searchElement: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    }, fromIndex?: number): number;
	    every(callbackfn: (value: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    }, index: number, array: ({
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    })[]) => unknown, thisArg?: any): boolean;
	    some(callbackfn: (value: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    }, index: number, array: ({
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    })[]) => unknown, thisArg?: any): boolean;
	    forEach(callbackfn: (value: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    }, index: number, array: ({
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    })[]) => void, thisArg?: any): void;
	    map<U>(callbackfn: (value: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    }, index: number, array: ({
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    })[]) => U, thisArg?: any): U[];
	    filter<S extends {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    }>(callbackfn: (value: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    }, index: number, array: ({
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    })[]) => value is S, thisArg?: any): S[];
	    filter(callbackfn: (value: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    }, index: number, array: ({
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    })[]) => unknown, thisArg?: any): ({
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    })[];
	    reduce(callbackfn: (previousValue: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    }, currentValue: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    }, currentIndex: number, array: ({
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    })[]) => {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    }): {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    };
	    reduce(callbackfn: (previousValue: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    }, currentValue: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    }, currentIndex: number, array: ({
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    })[]) => {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    }, initialValue: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    }): {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    };
	    reduce<U_1>(callbackfn: (previousValue: U_1, currentValue: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    }, currentIndex: number, array: ({
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    })[]) => U_1, initialValue: U_1): U_1;
	    reduceRight(callbackfn: (previousValue: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    }, currentValue: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    }, currentIndex: number, array: ({
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    })[]) => {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    }): {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    };
	    reduceRight(callbackfn: (previousValue: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    }, currentValue: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    }, currentIndex: number, array: ({
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    })[]) => {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    }, initialValue: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    }): {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    };
	    reduceRight<U_2>(callbackfn: (previousValue: U_2, currentValue: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    }, currentIndex: number, array: ({
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    })[]) => U_2, initialValue: U_2): U_2;
	    find<S_1 extends {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    }>(predicate: (this: void, value: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    }, index: number, obj: ({
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    })[]) => value is S_1, thisArg?: any): S_1;
	    find(predicate: (value: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    }, index: number, obj: ({
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    })[]) => unknown, thisArg?: any): {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    };
	    findIndex(predicate: (value: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    }, index: number, obj: ({
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    })[]) => unknown, thisArg?: any): number;
	    fill(value: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    }, start?: number, end?: number): ({
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    })[];
	    copyWithin(target: number, start: number, end?: number): ({
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    })[];
	    [Symbol.iterator](): IterableIterator<{
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    }>;
	    entries(): IterableIterator<[number, {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    }]>;
	    keys(): IterableIterator<number>;
	    values(): IterableIterator<{
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    }>;
	    [Symbol.unscopables](): {
	        copyWithin: boolean;
	        entries: boolean;
	        fill: boolean;
	        find: boolean;
	        findIndex: boolean;
	        keys: boolean;
	        values: boolean;
	    };
	    includes(searchElement: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => any[];
	    }, fromIndex?: number): boolean;
	};
	export = _exports;

}
declare module 'src/server/transports/express/api/routes' {
	 const _exports: {
	    [n: number]: undefined;
	    length: number;
	    toString(): string;
	    toLocaleString(): string;
	    pop(): undefined;
	    push(...items: undefined[]): number;
	    concat(...items: ConcatArray<undefined>[]): undefined[];
	    concat(...items: ConcatArray<undefined>[]): undefined[];
	    join(separator?: string): string;
	    reverse(): undefined[];
	    shift(): undefined;
	    slice(start?: number, end?: number): undefined[];
	    sort(compareFn?: (a: undefined, b: undefined) => number): undefined[];
	    splice(start: number, deleteCount?: number): undefined[];
	    splice(start: number, deleteCount: number, ...items: undefined[]): undefined[];
	    unshift(...items: undefined[]): number;
	    indexOf(searchElement: undefined, fromIndex?: number): number;
	    lastIndexOf(searchElement: undefined, fromIndex?: number): number;
	    every(callbackfn: (value: undefined, index: number, array: undefined[]) => unknown, thisArg?: any): boolean;
	    some(callbackfn: (value: undefined, index: number, array: undefined[]) => unknown, thisArg?: any): boolean;
	    forEach(callbackfn: (value: undefined, index: number, array: undefined[]) => void, thisArg?: any): void;
	    map<U>(callbackfn: (value: undefined, index: number, array: undefined[]) => U, thisArg?: any): U[];
	    filter<S extends undefined>(callbackfn: (value: undefined, index: number, array: undefined[]) => value is S, thisArg?: any): S[];
	    filter(callbackfn: (value: undefined, index: number, array: undefined[]) => unknown, thisArg?: any): undefined[];
	    reduce(callbackfn: (previousValue: undefined, currentValue: undefined, currentIndex: number, array: undefined[]) => undefined): undefined;
	    reduce(callbackfn: (previousValue: undefined, currentValue: undefined, currentIndex: number, array: undefined[]) => undefined, initialValue: undefined): undefined;
	    reduce<U_1>(callbackfn: (previousValue: U_1, currentValue: undefined, currentIndex: number, array: undefined[]) => U_1, initialValue: U_1): U_1;
	    reduceRight(callbackfn: (previousValue: undefined, currentValue: undefined, currentIndex: number, array: undefined[]) => undefined): undefined;
	    reduceRight(callbackfn: (previousValue: undefined, currentValue: undefined, currentIndex: number, array: undefined[]) => undefined, initialValue: undefined): undefined;
	    reduceRight<U_2>(callbackfn: (previousValue: U_2, currentValue: undefined, currentIndex: number, array: undefined[]) => U_2, initialValue: U_2): U_2;
	    find<S_1 extends undefined>(predicate: (this: void, value: undefined, index: number, obj: undefined[]) => value is S_1, thisArg?: any): S_1;
	    find(predicate: (value: undefined, index: number, obj: undefined[]) => unknown, thisArg?: any): undefined;
	    findIndex(predicate: (value: undefined, index: number, obj: undefined[]) => unknown, thisArg?: any): number;
	    fill(value: undefined, start?: number, end?: number): undefined[];
	    copyWithin(target: number, start: number, end?: number): undefined[];
	    [Symbol.iterator](): IterableIterator<undefined>;
	    entries(): IterableIterator<[number, undefined]>;
	    keys(): IterableIterator<number>;
	    values(): IterableIterator<undefined>;
	    [Symbol.unscopables](): {
	        copyWithin: boolean;
	        entries: boolean;
	        fill: boolean;
	        find: boolean;
	        findIndex: boolean;
	        keys: boolean;
	        values: boolean;
	    };
	    includes(searchElement: undefined, fromIndex?: number): boolean;
	};
	export = _exports;

}
declare module 'src/schema' {
	export = schema; const schema: any;

}
declare module 'src/server/transports/express/api/master/controllers' {
	export function getSongInfo(node: any): (req: any, res: any, next: any) => Promise<any>;
	export function removeSong(node: any): (req: any, res: any, next: any) => Promise<any>;

}
declare module 'src/server/transports/express/api/master/routes' {
	 const _exports: {
	    [n: number]: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    };
	    length: number;
	    toString(): string;
	    toLocaleString(): string;
	    pop(): {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    };
	    push(...items: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }[]): number;
	    concat(...items: ConcatArray<{
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }>[]): {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }[];
	    concat(...items: ({
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | ConcatArray<{
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }>)[]): {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }[];
	    join(separator?: string): string;
	    reverse(): {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }[];
	    shift(): {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    };
	    slice(start?: number, end?: number): {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }[];
	    sort(compareFn?: (a: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }, b: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }) => number): {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }[];
	    splice(start: number, deleteCount?: number): {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }[];
	    splice(start: number, deleteCount: number, ...items: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }[]): {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }[];
	    unshift(...items: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }[]): number;
	    indexOf(searchElement: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }, fromIndex?: number): number;
	    lastIndexOf(searchElement: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }, fromIndex?: number): number;
	    every(callbackfn: (value: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }, index: number, array: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }[]) => unknown, thisArg?: any): boolean;
	    some(callbackfn: (value: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }, index: number, array: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }[]) => unknown, thisArg?: any): boolean;
	    forEach(callbackfn: (value: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }, index: number, array: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }[]) => void, thisArg?: any): void;
	    map<U>(callbackfn: (value: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }, index: number, array: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }[]) => U, thisArg?: any): U[];
	    filter<S extends {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }>(callbackfn: (value: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }, index: number, array: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }[]) => value is S, thisArg?: any): S[];
	    filter(callbackfn: (value: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }, index: number, array: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }[]) => unknown, thisArg?: any): {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }[];
	    reduce(callbackfn: (previousValue: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }, currentValue: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }, currentIndex: number, array: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }[]) => {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }): {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    };
	    reduce(callbackfn: (previousValue: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }, currentValue: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }, currentIndex: number, array: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }[]) => {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }, initialValue: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }): {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    };
	    reduce<U_1>(callbackfn: (previousValue: U_1, currentValue: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }, currentIndex: number, array: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }[]) => U_1, initialValue: U_1): U_1;
	    reduceRight(callbackfn: (previousValue: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }, currentValue: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }, currentIndex: number, array: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }[]) => {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }): {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    };
	    reduceRight(callbackfn: (previousValue: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }, currentValue: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }, currentIndex: number, array: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }[]) => {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }, initialValue: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }): {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    };
	    reduceRight<U_2>(callbackfn: (previousValue: U_2, currentValue: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }, currentIndex: number, array: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }[]) => U_2, initialValue: U_2): U_2;
	    find<S_1 extends {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }>(predicate: (this: void, value: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }, index: number, obj: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }[]) => value is S_1, thisArg?: any): S_1;
	    find(predicate: (value: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }, index: number, obj: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }[]) => unknown, thisArg?: any): {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    };
	    findIndex(predicate: (value: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }, index: number, obj: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }[]) => unknown, thisArg?: any): number;
	    fill(value: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }, start?: number, end?: number): {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }[];
	    copyWithin(target: number, start: number, end?: number): {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }[];
	    [Symbol.iterator](): IterableIterator<{
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }>;
	    entries(): IterableIterator<[number, {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }]>;
	    keys(): IterableIterator<number>;
	    values(): IterableIterator<{
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }>;
	    [Symbol.unscopables](): {
	        copyWithin: boolean;
	        entries: boolean;
	        fill: boolean;
	        find: boolean;
	        findIndex: boolean;
	        keys: boolean;
	        values: boolean;
	    };
	    includes(searchElement: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }, fromIndex?: number): boolean;
	};
	export = _exports;

}
declare module 'src/server/transports/express/api/butler/controllers' {
	export function getSongInfo(node: any): (req: any, res: any, next: any) => Promise<any>;
	export function removeSong(node: any): (req: any, res: any, next: any) => Promise<any>;

}
declare module 'src/server/transports/express/api/butler/routes' {
	 const _exports: {
	    [n: number]: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    };
	    length: number;
	    toString(): string;
	    toLocaleString(): string;
	    pop(): {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    };
	    push(...items: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }[]): number;
	    concat(...items: ConcatArray<{
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }>[]): {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }[];
	    concat(...items: ({
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | ConcatArray<{
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }>)[]): {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }[];
	    join(separator?: string): string;
	    reverse(): {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }[];
	    shift(): {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    };
	    slice(start?: number, end?: number): {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }[];
	    sort(compareFn?: (a: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }, b: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }) => number): {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }[];
	    splice(start: number, deleteCount?: number): {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }[];
	    splice(start: number, deleteCount: number, ...items: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }[]): {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }[];
	    unshift(...items: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }[]): number;
	    indexOf(searchElement: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }, fromIndex?: number): number;
	    lastIndexOf(searchElement: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }, fromIndex?: number): number;
	    every(callbackfn: (value: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }, index: number, array: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }[]) => unknown, thisArg?: any): boolean;
	    some(callbackfn: (value: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }, index: number, array: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }[]) => unknown, thisArg?: any): boolean;
	    forEach(callbackfn: (value: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }, index: number, array: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }[]) => void, thisArg?: any): void;
	    map<U>(callbackfn: (value: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }, index: number, array: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }[]) => U, thisArg?: any): U[];
	    filter<S extends {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }>(callbackfn: (value: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }, index: number, array: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }[]) => value is S, thisArg?: any): S[];
	    filter(callbackfn: (value: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }, index: number, array: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }[]) => unknown, thisArg?: any): {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }[];
	    reduce(callbackfn: (previousValue: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }, currentValue: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }, currentIndex: number, array: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }[]) => {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }): {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    };
	    reduce(callbackfn: (previousValue: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }, currentValue: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }, currentIndex: number, array: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }[]) => {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }, initialValue: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }): {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    };
	    reduce<U_1>(callbackfn: (previousValue: U_1, currentValue: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }, currentIndex: number, array: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }[]) => U_1, initialValue: U_1): U_1;
	    reduceRight(callbackfn: (previousValue: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }, currentValue: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }, currentIndex: number, array: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }[]) => {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }): {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    };
	    reduceRight(callbackfn: (previousValue: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }, currentValue: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }, currentIndex: number, array: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }[]) => {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }, initialValue: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }): {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    };
	    reduceRight<U_2>(callbackfn: (previousValue: U_2, currentValue: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }, currentIndex: number, array: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }[]) => U_2, initialValue: U_2): U_2;
	    find<S_1 extends {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }>(predicate: (this: void, value: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }, index: number, obj: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }[]) => value is S_1, thisArg?: any): S_1;
	    find(predicate: (value: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }, index: number, obj: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }[]) => unknown, thisArg?: any): {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    };
	    findIndex(predicate: (value: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }, index: number, obj: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }[]) => unknown, thisArg?: any): number;
	    fill(value: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }, start?: number, end?: number): {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }[];
	    copyWithin(target: number, start: number, end?: number): {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }[];
	    [Symbol.iterator](): IterableIterator<{
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }>;
	    entries(): IterableIterator<[number, {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }]>;
	    keys(): IterableIterator<number>;
	    values(): IterableIterator<{
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }>;
	    [Symbol.unscopables](): {
	        copyWithin: boolean;
	        entries: boolean;
	        fill: boolean;
	        find: boolean;
	        findIndex: boolean;
	        keys: boolean;
	        values: boolean;
	    };
	    includes(searchElement: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    }, fromIndex?: number): boolean;
	};
	export = _exports;

}
declare module 'src/server/transports/express/api/slave/controllers' {
	export function getSongInfo(node: any): (req: any, res: any, next: any) => Promise<any>;
	export function removeSong(node: any): (req: any, res: any, next: any) => Promise<void>;

}
declare module 'src/server/transports/express/api/slave/routes' {
	 const _exports: {
	    [n: number]: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    };
	    length: number;
	    toString(): string;
	    toLocaleString(): string;
	    pop(): {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    };
	    push(...items: ({
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    })[]): number;
	    concat(...items: ConcatArray<{
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }>[]): ({
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    })[];
	    concat(...items: ({
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | ConcatArray<{
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }>)[]): ({
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    })[];
	    join(separator?: string): string;
	    reverse(): ({
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    })[];
	    shift(): {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    };
	    slice(start?: number, end?: number): ({
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    })[];
	    sort(compareFn?: (a: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }, b: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }) => number): ({
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    })[];
	    splice(start: number, deleteCount?: number): ({
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    })[];
	    splice(start: number, deleteCount: number, ...items: ({
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    })[]): ({
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    })[];
	    unshift(...items: ({
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    })[]): number;
	    indexOf(searchElement: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }, fromIndex?: number): number;
	    lastIndexOf(searchElement: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }, fromIndex?: number): number;
	    every(callbackfn: (value: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }, index: number, array: ({
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    })[]) => unknown, thisArg?: any): boolean;
	    some(callbackfn: (value: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }, index: number, array: ({
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    })[]) => unknown, thisArg?: any): boolean;
	    forEach(callbackfn: (value: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }, index: number, array: ({
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    })[]) => void, thisArg?: any): void;
	    map<U>(callbackfn: (value: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }, index: number, array: ({
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    })[]) => U, thisArg?: any): U[];
	    filter<S extends {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }>(callbackfn: (value: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }, index: number, array: ({
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    })[]) => value is S, thisArg?: any): S[];
	    filter(callbackfn: (value: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }, index: number, array: ({
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    })[]) => unknown, thisArg?: any): ({
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    })[];
	    reduce(callbackfn: (previousValue: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }, currentValue: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }, currentIndex: number, array: ({
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    })[]) => {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }): {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    };
	    reduce(callbackfn: (previousValue: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }, currentValue: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }, currentIndex: number, array: ({
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    })[]) => {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }, initialValue: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }): {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    };
	    reduce<U_1>(callbackfn: (previousValue: U_1, currentValue: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }, currentIndex: number, array: ({
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    })[]) => U_1, initialValue: U_1): U_1;
	    reduceRight(callbackfn: (previousValue: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }, currentValue: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }, currentIndex: number, array: ({
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    })[]) => {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }): {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    };
	    reduceRight(callbackfn: (previousValue: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }, currentValue: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }, currentIndex: number, array: ({
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    })[]) => {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }, initialValue: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }): {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    };
	    reduceRight<U_2>(callbackfn: (previousValue: U_2, currentValue: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }, currentIndex: number, array: ({
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    })[]) => U_2, initialValue: U_2): U_2;
	    find<S_1 extends {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }>(predicate: (this: void, value: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }, index: number, obj: ({
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    })[]) => value is S_1, thisArg?: any): S_1;
	    find(predicate: (value: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }, index: number, obj: ({
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    })[]) => unknown, thisArg?: any): {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    };
	    findIndex(predicate: (value: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }, index: number, obj: ({
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    })[]) => unknown, thisArg?: any): number;
	    fill(value: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }, start?: number, end?: number): ({
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    })[];
	    copyWithin(target: number, start: number, end?: number): ({
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    })[];
	    [Symbol.iterator](): IterableIterator<{
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }>;
	    entries(): IterableIterator<[number, {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }]>;
	    keys(): IterableIterator<number>;
	    values(): IterableIterator<{
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }>;
	    [Symbol.unscopables](): {
	        copyWithin: boolean;
	        entries: boolean;
	        fill: boolean;
	        find: boolean;
	        findIndex: boolean;
	        keys: boolean;
	        values: boolean;
	    };
	    includes(searchElement: {
	        name: string;
	        method: string;
	        url: string;
	        fn: (node: any) => (req: any, res: any, next: any) => Promise<any>;
	    } | {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }, fromIndex?: number): boolean;
	};
	export = _exports;

}
declare module 'src/server/transports/express/api/node/controllers' {
	export function addSong(node: any): (req: any, res: any, next: any) => Promise<void>;

}
declare module 'src/server/transports/express/api/node/routes' {
	 const _exports: {
	    [n: number]: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    };
	    length: number;
	    toString(): string;
	    toLocaleString(): string;
	    pop(): {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    };
	    push(...items: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }[]): number;
	    concat(...items: ConcatArray<{
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }>[]): {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }[];
	    concat(...items: ({
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    } | ConcatArray<{
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }>)[]): {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }[];
	    join(separator?: string): string;
	    reverse(): {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }[];
	    shift(): {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    };
	    slice(start?: number, end?: number): {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }[];
	    sort(compareFn?: (a: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }, b: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }) => number): {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }[];
	    splice(start: number, deleteCount?: number): {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }[];
	    splice(start: number, deleteCount: number, ...items: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }[]): {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }[];
	    unshift(...items: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }[]): number;
	    indexOf(searchElement: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }, fromIndex?: number): number;
	    lastIndexOf(searchElement: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }, fromIndex?: number): number;
	    every(callbackfn: (value: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }, index: number, array: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }[]) => unknown, thisArg?: any): boolean;
	    some(callbackfn: (value: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }, index: number, array: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }[]) => unknown, thisArg?: any): boolean;
	    forEach(callbackfn: (value: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }, index: number, array: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }[]) => void, thisArg?: any): void;
	    map<U>(callbackfn: (value: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }, index: number, array: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }[]) => U, thisArg?: any): U[];
	    filter<S extends {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }>(callbackfn: (value: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }, index: number, array: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }[]) => value is S, thisArg?: any): S[];
	    filter(callbackfn: (value: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }, index: number, array: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }[]) => unknown, thisArg?: any): {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }[];
	    reduce(callbackfn: (previousValue: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }, currentValue: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }, currentIndex: number, array: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }[]) => {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }): {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    };
	    reduce(callbackfn: (previousValue: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }, currentValue: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }, currentIndex: number, array: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }[]) => {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }, initialValue: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }): {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    };
	    reduce<U_1>(callbackfn: (previousValue: U_1, currentValue: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }, currentIndex: number, array: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }[]) => U_1, initialValue: U_1): U_1;
	    reduceRight(callbackfn: (previousValue: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }, currentValue: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }, currentIndex: number, array: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }[]) => {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }): {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    };
	    reduceRight(callbackfn: (previousValue: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }, currentValue: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }, currentIndex: number, array: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }[]) => {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }, initialValue: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }): {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    };
	    reduceRight<U_2>(callbackfn: (previousValue: U_2, currentValue: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }, currentIndex: number, array: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }[]) => U_2, initialValue: U_2): U_2;
	    find<S_1 extends {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }>(predicate: (this: void, value: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }, index: number, obj: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }[]) => value is S_1, thisArg?: any): S_1;
	    find(predicate: (value: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }, index: number, obj: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }[]) => unknown, thisArg?: any): {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    };
	    findIndex(predicate: (value: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }, index: number, obj: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }[]) => unknown, thisArg?: any): number;
	    fill(value: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }, start?: number, end?: number): {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }[];
	    copyWithin(target: number, start: number, end?: number): {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }[];
	    [Symbol.iterator](): IterableIterator<{
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }>;
	    entries(): IterableIterator<[number, {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }]>;
	    keys(): IterableIterator<number>;
	    values(): IterableIterator<{
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }>;
	    [Symbol.unscopables](): {
	        copyWithin: boolean;
	        entries: boolean;
	        fill: boolean;
	        find: boolean;
	        findIndex: boolean;
	        keys: boolean;
	        values: boolean;
	    };
	    includes(searchElement: {
	        name: string;
	        method: string;
	        url: string;
	        fn: any[];
	    }, fromIndex?: number): boolean;
	};
	export = _exports;

}
declare module 'src/server/transports/express/index' {
	 function _exports(Parent: any): {
	    new (): {
	        [x: string]: any;
	        /**
	          * @see ServerExpressMetastocle.prototype.getMainRoutes
	          */
	        getMainRoutes(): any;
	        /**
	         * @see ServerExpressMetastocle.prototype.getClientRoutes
	         */
	        getClientRoutes(): any;
	        /**
	         * @see ServerExpressMetastocle.prototype.getApiRoutes
	         */
	        getApiRoutes(): any;
	        /**
	         * @see ServerExpressMetastocle.prototype.getApiMasterRoutes
	         */
	        getApiMasterRoutes(): any;
	        /**
	         * @see ServerExpressMetastocle.prototype.getApiButlerRoutes
	         */
	        getApiButlerRoutes(): any;
	        /**
	         * @see ServerExpressMetastocle.prototype.getApiSlaveRoutes
	         */
	        getApiSlaveRoutes(): any;
	        /**
	         * @see ServerExpressMetastocle.prototype.getApiNodeRoutes
	         */
	        getApiNodeRoutes(): any;
	    };
	    [x: string]: any;
	};
	export = _exports;

}
declare module 'src/node' {
	 function _exports(Parent: any): {
	    new (options?: {}): {
	        [x: string]: any;
	        __songSyncDelay: number;
	        /**
	         * @see NodeStoracle.prototype.init
	         */
	        init(...args: any[]): Promise<void>;
	        /**
	         * @see NodeStoracle.prototype.prepareServices
	         */
	        prepareServices(...args: any[]): Promise<void>;
	        /**
	         * Clean up the music
	         *
	         * @async
	         */
	        cleanUpMusic(): Promise<void>;
	        /**
	        * @see NodeStoracle.prototype.calculateStorageInfo
	        */
	        calculateStorageInfo(...args: any[]): Promise<void>;
	        /**
	         * @see NodeStoracle.prototype.getStatusInfo
	         */
	        getStatusInfo(pretty?: boolean): Promise<any>;
	        /**
	         * @see NodeStoracle.prototype.getStorageCleaningUpTree
	         */
	        getStorageCleaningUpTree(): Promise<any>;
	        /**
	         * Add the song
	         *
	         * @async
	         * @param {string|Buffer|fs.ReadStream} file
	         * @param {object} [options]
	         * @returns {string}
	         */
	        addSong(file: any, options?: any): string;
	        /**
	         * Prepare the song file before the addition
	         *
	         * @async
	         * @param {string|Buffer|fs.ReadStream} file
	         * @returns {string|Buffer|fs.ReadStream}
	         */
	        prepareSongFileBeforeAddition(file: any): any;
	        /**
	         * Prepare the song cover
	         *
	         * @async
	         * @param {Buffer} buffer
	         * @returns {Buffer}
	         */
	        prepareSongCover(buffer: any): any;
	        /**
	         * Prepare the song title
	         *
	         * @async
	         * @param {string} title
	         * @returns {string}
	         */
	        prepareSongTitle(title: string): string;
	        /**
	         * Get the song info
	         *
	         * @async
	         * @param {string} title
	         * @param {object} [options]
	         * @returns {string[]}
	         */
	        getSongInfo(title: string, options?: any): string[];
	        /**
	         * Get the song link
	         *
	         * @async
	         * @param {string} title
	         * @param {string} type
	         * @param {object} [options]
	         * @returns {string}
	         */
	        getSongLink(title: string, type: string, options?: any): string;
	        /**
	         * Get the song audio link
	         *
	         * @see NodeMuseria.prototype.getSongAudioLink
	         */
	        getSongAudioLink(title: any, options?: {}): Promise<string>;
	        /**
	         * Get the song cover link
	         *
	         * @see NodeMuseria.prototype.getSongCoverLink
	         */
	        getSongCoverLink(title: any, options?: {}): Promise<string>;
	        /**
	         * Get the song info filter options
	         *
	         * @async
	         * @returns {object}
	         */
	        getSongInfoFilterOptions(): any;
	        /**
	         * Remove the song
	         *
	         * @async
	         * @param {string} title
	         * @param {object} [options]
	         * @returns {string}
	         */
	        removeSong(title: string, options?: any): string;
	        /**
	         * Update the song cache
	         *
	         * @async
	         * @param {string} title
	         * @param {object} value
	         * @param {string} value.audioLink
	         * @param {string} [value.coverLink]
	         */
	        updateSongCache(title: string, value: {
	            audioLink: string;
	            coverLink?: string;
	        }): Promise<void>;
	        /**
	         * @see NodeStoracle.prototype.duplicateFile
	         */
	        duplicateSong(servers: any, file: any, info: any, options?: {}): Promise<any>;
	        /**
	         * Export songs to another server
	         *
	         * @see NodeStoracle.prototype.exportFiles
	         */
	        exportSongs(address: any, options?: {}): Promise<void>;
	        /**
	         * @see NodeMetastocle.prototype.getDocumentAdditionInfoFilterOptions
	         */
	        getDocumentAdditionInfoFilterOptions(...args: any[]): Promise<any>;
	        /**
	         * @see NodeMetastocle.prototype.getDocumentExistenceInfo
	         */
	        getDocumentExistenceInfo(info: any, ...args: any[]): Promise<any>;
	        /**
	         * @see NodeMetastocle.prototype.documentAvailabilityTest
	         */
	        documentAvailabilityTest(info?: {}, ...args: any[]): Promise<any>;
	        /**
	         * Create a document addition comparison function
	         *
	         * @async
	         * @returns {function}
	         */
	        createSongAdditionComparisonFunction(): Function;
	        /**
	         * Create the song audio link
	         *
	         * @async
	         * @param {object} document
	         * @param {object} document.fileHash
	         * @returns {string}
	         */
	        createSongAudioLink(document: {
	            fileHash: any;
	        }): string;
	        /**
	         * Create the song cover link
	         *
	         * @async
	         * @param {object} document
	         * @param {object} document.fileHash
	         * @returns {string}
	         */
	        createSongCoverLink(document: {
	            fileHash: any;
	        }): string;
	        /**
	         * @see NodeStoracle.prototype.removeFileFromStorage
	         *
	         * @param [options]
	         */
	        removeFileFromStorage(hash: any, options?: {}, ...args: any[]): Promise<void>;
	        /**
	         * Check the song relevance
	         *
	         * @async
	         * @param {string} filePathSource
	         * @param {string} filePathTarget
	         * @returns {boolean}
	         */
	        checkSongRelevance(filePathSource: string, filePathTarget: string): boolean;
	        /**
	         * Test the song title
	         *
	         * @param {string} title
	         */
	        songTitleTest(title: string): void;
	        /**
	         * Test the song title
	         *
	         * @param {object} info
	         * @param {number} info.priority
	         * @param {boolean} info.controlled
	         * @param {boolean} [info.exported]
	         */
	        songPriorityTest({ priority, controlled, exported }: {
	            priority: number;
	            controlled: boolean;
	            exported?: boolean;
	        }): void;
	        /**
	         * @see NodeStoracle.prototype.calculateTempFileMinSize
	         */
	        calculateTempFileMinSize(size: any): any;
	        /**
	         * Prepare the options
	         */
	        prepareOptions(): void;
	    };
	    [x: string]: any;
	    readonly version: any;
	    readonly codename: string;
	    readonly DatabaseTransport: {
	        new (): {
	            [x: string]: any;
	            getMusicByPk(title: any, options?: {}): Promise<any>;
	            getMusicByFileHash(hash: any): Promise<any>;
	            removeMusicByFileHash(hash: any): Promise<void>;
	        };
	        [x: string]: any;
	    };
	    readonly ServerTransport: {
	        new (): {
	            [x: string]: any;
	            getMainRoutes(): any;
	            getClientRoutes(): any;
	            getApiRoutes(): any;
	            getApiMasterRoutes(): any;
	            getApiButlerRoutes(): any;
	            getApiSlaveRoutes(): any;
	            getApiNodeRoutes(): any;
	        };
	        [x: string]: any;
	    };
	};
	export = _exports;

}
declare module 'src/client' {
	 function _exports(Parent: any): {
	    new (options?: {}): {
	        [x: string]: any;
	        /**
	         * Get the song complete info
	         *
	         * @async
	         * @param {string} title
	         * @param {object} [options]
	         * @returns {string}
	         */
	        getSongInfo(title: string, options?: any): string;
	        /**
	         * Get the song main info
	         *
	         * @async
	         * @param {string} title
	         * @param {object} [options]
	         * @returns {string}
	         */
	        getSong(title: string, options?: any): string;
	        /**
	         * Get the song audio link
	         *
	         * @async
	         * @param {string} title
	         * @param {object} [options]
	         * @returns {object[]}
	         */
	        getSongAudioLink(title: string, options?: any): any[];
	        /**
	         * Get the song cover link
	         *
	         * @async
	         * @param {string} title
	         * @param {object} [options]
	         * @returns {string}
	         */
	        getSongCoverLink(title: string, options?: any): string;
	        /**
	         * Get the song to a buffer
	         *
	         * @param {string} title
	         * @param {string} type
	         * @param {object} [options]
	         * @returns {Buffer}
	         */
	        getSongToBuffer(title: string, type: string, options?: any): any;
	        /**
	         * Get the song audio to a buffer
	         *
	         * @see ClientMuseria.prototype.getSongToBuffer
	         */
	        getSongAudioToBuffer(title: any, options?: {}): Promise<any>;
	        /**
	         * Get the song cover to a buffer
	         *
	         * @see ClientMuseria.prototype.getSongToBuffer
	         */
	        getSongCoverToBuffer(title: any, options?: {}): Promise<any>;
	        /**
	         * Get the song to the path
	         *
	         * @param {string} title
	         * @param {string} filePath
	         * @param {string} type
	         * @param {object} [options]
	         * @returns {Buffer}
	         */
	        getSongToPath(title: string, filePath: string, type: string, options?: any): any;
	        /**
	         * Get the song audio to the path
	         *
	         * @see ClientMuseria.prototype.getSongToPath
	         */
	        getSongAudioToPath(title: any, filePath: any, options?: {}): Promise<any>;
	        /**
	         * Get the song cover to the path
	         *
	         * @see ClientMuseria.prototype.getSongToPath
	         */
	        getSongCoverToPath(title: any, filePath: any, options?: {}): Promise<any>;
	        /**
	         * Get the song to a blob
	         *
	         * @param {string} title
	         * @param {string} type
	         * @param {object} [options]
	         * @returns {Buffer}
	         */
	        getSongToBlob(title: string, type: string, options?: any): any;
	        /**
	         * Get the song audio to a blob
	         *
	         * @see ClientMuseria.prototype.getSongToBlob
	         */
	        getSongAudioToBlob(title: any, options?: {}): Promise<any>;
	        /**
	         * Get the song cover to a blob
	         *
	         * @see ClientMuseria.prototype.getSongToBlob
	         */
	        getSongCoverToBlob(title: any, options?: {}): Promise<any>;
	        /**
	         * Store the file to the storage
	         *
	         * @async
	         * @param {string|Buffer|fs.ReadStream|Blob|File} file
	         * @param {object} [options]
	         * @param {boolean} [options.controlled]
	         * @param {number} [options.priority]
	         */
	        addSong(file: any, options?: {
	            controlled?: boolean;
	            priority?: number;
	        }): Promise<any>;
	        /**
	         * Remove the song
	         *
	         * @async
	         * @param {string} title
	         * @param {object} [options]
	         * @returns {object}
	         */
	        removeSong(title: string, options?: any): any;
	        /**
	         * Create a deferred song link
	         *
	         * @param {string} title
	         * @param {string} type
	         * @param {object} options
	         * @returns {string}
	         */
	        createRequestedSongLink(title: string, type: string, options?: any): string;
	        /**
	         * Create a deferred song audio link
	         *
	         * @see ClientMuseria.prototype.createRequestedSongLink
	         */
	        createRequestedSongAudioLink(title: any, options?: {}): string;
	        /**
	         * Create a deferred song cover link
	         *
	         * @see ClientMuseria.prototype.createRequestedSongLink
	         */
	        createRequestedSongCoverLink(title: any, options?: {}): string;
	    };
	    [x: string]: any;
	    readonly utils: any;
	    readonly errors: any;
	};
	export = _exports;

}
declare module 'src/index' {
	export const Client: {
	    new (options?: {}): {
	        [x: string]: any;
	        getSongInfo(title: string, options?: any): string;
	        getSong(title: string, options?: any): string;
	        getSongAudioLink(title: string, options?: any): any[];
	        getSongCoverLink(title: string, options?: any): string;
	        getSongToBuffer(title: string, type: string, options?: any): any;
	        getSongAudioToBuffer(title: any, options?: {}): Promise<any>;
	        getSongCoverToBuffer(title: any, options?: {}): Promise<any>;
	        getSongToPath(title: string, filePath: string, type: string, options?: any): any;
	        getSongAudioToPath(title: any, filePath: any, options?: {}): Promise<any>;
	        getSongCoverToPath(title: any, filePath: any, options?: {}): Promise<any>;
	        getSongToBlob(title: string, type: string, options?: any): any;
	        getSongAudioToBlob(title: any, options?: {}): Promise<any>;
	        getSongCoverToBlob(title: any, options?: {}): Promise<any>;
	        addSong(file: any, options?: {
	            controlled?: boolean;
	            priority?: number;
	        }): Promise<any>;
	        removeSong(title: string, options?: any): any;
	        createRequestedSongLink(title: string, type: string, options?: any): string;
	        createRequestedSongAudioLink(title: any, options?: {}): string;
	        createRequestedSongCoverLink(title: any, options?: {}): string;
	    };
	    [x: string]: any;
	    readonly utils: any;
	    readonly errors: any;
	};
	export const Node: {
	    new (options?: {}): {
	        [x: string]: any;
	        __songSyncDelay: number;
	        init(...args: any[]): Promise<void>;
	        prepareServices(...args: any[]): Promise<void>;
	        cleanUpMusic(): Promise<void>;
	        calculateStorageInfo(...args: any[]): Promise<void>;
	        getStatusInfo(pretty?: boolean): Promise<any>;
	        getStorageCleaningUpTree(): Promise<any>;
	        addSong(file: any, options?: any): string;
	        prepareSongFileBeforeAddition(file: any): any;
	        prepareSongCover(buffer: any): any;
	        prepareSongTitle(title: string): string;
	        getSongInfo(title: string, options?: any): string[];
	        getSongLink(title: string, type: string, options?: any): string;
	        getSongAudioLink(title: any, options?: {}): Promise<string>;
	        getSongCoverLink(title: any, options?: {}): Promise<string>;
	        getSongInfoFilterOptions(): any;
	        removeSong(title: string, options?: any): string;
	        updateSongCache(title: string, value: {
	            audioLink: string;
	            coverLink?: string;
	        }): Promise<void>;
	        duplicateSong(servers: any, file: any, info: any, options?: {}): Promise<any>;
	        exportSongs(address: any, options?: {}): Promise<void>;
	        getDocumentAdditionInfoFilterOptions(...args: any[]): Promise<any>;
	        getDocumentExistenceInfo(info: any, ...args: any[]): Promise<any>;
	        documentAvailabilityTest(info?: {}, ...args: any[]): Promise<any>;
	        createSongAdditionComparisonFunction(): Function;
	        createSongAudioLink(document: {
	            fileHash: any;
	        }): string;
	        createSongCoverLink(document: {
	            fileHash: any;
	        }): string;
	        removeFileFromStorage(hash: any, options?: {}, ...args: any[]): Promise<void>;
	        checkSongRelevance(filePathSource: string, filePathTarget: string): boolean;
	        songTitleTest(title: string): void;
	        songPriorityTest({ priority, controlled, exported }: {
	            priority: number;
	            controlled: boolean;
	            exported?: boolean;
	        }): void;
	        calculateTempFileMinSize(size: any): any;
	        prepareOptions(): void;
	    };
	    [x: string]: any;
	    readonly version: any;
	    readonly codename: string;
	    readonly DatabaseTransport: {
	        new (): {
	            [x: string]: any;
	            getMusicByPk(title: any, options?: {}): Promise<any>;
	            getMusicByFileHash(hash: any): Promise<any>;
	            removeMusicByFileHash(hash: any): Promise<void>;
	        };
	        [x: string]: any;
	    };
	    readonly ServerTransport: {
	        new (): {
	            [x: string]: any;
	            getMainRoutes(): any;
	            getClientRoutes(): any;
	            getApiRoutes(): any;
	            getApiMasterRoutes(): any;
	            getApiButlerRoutes(): any;
	            getApiSlaveRoutes(): any;
	            getApiNodeRoutes(): any;
	        };
	        [x: string]: any;
	    };
	};

}
declare module 'bin/index' {
	// #!/usr/bin/env node
	export {};

}
declare module 'dist/museria.client' {
	const _exports: any;
	// export = _exports;
	export var ClientMuseria: any;

}
declare module 'src/browser/client/index' {
	 const _exports: {
	    new (options?: {}): {
	        [x: string]: any;
	        getSongInfo(title: string, options?: any): string;
	        getSong(title: string, options?: any): string;
	        getSongAudioLink(title: string, options?: any): any[];
	        getSongCoverLink(title: string, options?: any): string;
	        getSongToBuffer(title: string, type: string, options?: any): any;
	        getSongAudioToBuffer(title: any, options?: {}): Promise<any>;
	        getSongCoverToBuffer(title: any, options?: {}): Promise<any>;
	        getSongToPath(title: string, filePath: string, type: string, options?: any): any;
	        getSongAudioToPath(title: any, filePath: any, options?: {}): Promise<any>;
	        getSongCoverToPath(title: any, filePath: any, options?: {}): Promise<any>;
	        getSongToBlob(title: string, type: string, options?: any): any;
	        getSongAudioToBlob(title: any, options?: {}): Promise<any>;
	        getSongCoverToBlob(title: any, options?: {}): Promise<any>;
	        addSong(file: any, options?: {
	            controlled?: boolean;
	            priority?: number;
	        }): Promise<any>;
	        removeSong(title: string, options?: any): any;
	        createRequestedSongLink(title: string, type: string, options?: any): string;
	        createRequestedSongAudioLink(title: any, options?: {}): string;
	        createRequestedSongCoverLink(title: any, options?: {}): string;
	    };
	    [x: string]: any;
	    readonly utils: any;
	    readonly errors: any;
	};
	export = _exports;

}
declare module 'src/browser/face/client' {
	export default client; const client: any;

}
declare module 'src/browser/face/controllers/app/app' {
	export default class App {
	    static template: any;
	    static define(): void;
	    created(): void;
	    captchaWidth: number;
	    resetSearchEvent(): void;
	    resetUploadEvent(): void;
	    resetSongUploadInfo(): void;
	    chooseSong(): void;
	    checkUploadSongTitle(): void;
	    findSong(title: any): Promise<void>;
	    prepareAudio(file: any): Promise<void>;
	    prepareCover(file: any): Promise<void>;
	    removeCover(): Promise<void>;
	    getCoverLink(file: any): Promise<any>;
	    uploadSong(): Promise<void>;
	    createApprovalInfo(): Promise<void>;
	    uploadSongAction(): Promise<void>;
	    onUploadSuccess(): void;
	    onUploadError(err: any): void;
	}

}
declare module 'src/browser/face/index' {
	export {};

}
declare module 'test/tools' {
	export = tools; const tools: any;

}
declare module 'test/client' {
	export {};

}
declare module 'test/group' {
	export {};

}
declare module 'test/node' {
	export var __songSyncDelay: number;

}
declare module 'test/db/database' {
	export {};

}
declare module 'test/db/loki' {
	export {};

}
declare module 'test/server/express' {
	export {};

}
declare module 'test/services' {
	export {};

}
declare module 'test/routes' {
	export {};

}
declare module 'test/utils' {
	export {};

}
declare module 'test/index' {
	export {};

}
