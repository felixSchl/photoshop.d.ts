declare module "bennu" {

    export module parse {

        export interface Parser<T> {
            chain<U>(bind: (T) => Parser<U>): Parser<U>
            map<U>(func: (T) => U): Parser<U>
        }

        export function fail<T>(message?: string): Parser<T>

        export function rec<T>(self: (parser: Parser<T>) => Parser<T>): Parser<T>

        export function bind<T, U>(parser: Parser<T>, f: (v: T) => Parser<U>): Parser<U>

        export function binds<T, U>(parser: Parser<T>, f: (v: T) => Parser<U>): Parser<U>

        export function eager<T>(parser: Parser<T>): Parser<T>

        export function many<T>(parser: Parser<T>): Parser<T>

        export function many1<T>(parser: Parser<T>): Parser<T>

        export function not<T>(parser: Parser<T>): Parser<T>

        export function optional<T>(parser: Parser<T>): Parser<T>

        export function optional<T>(def: T, parser: Parser<T>): Parser<T>

        export function optional<T>(def: Parser<T>, parser: Parser<T>): Parser<T>

        export function of<T>(value: T): Parser<T>

        export function attempt<T>(parser: Parser<T>): Parser<T>

        export function lookahead<T>(value: T): Parser<T>

        export function look<T>(value: T): Parser<T>

        export function sequence<T>(p0: Parser<T>): Parser<T>
        export function sequence<T, U>(p0: Parser<T>, p1: Parser<U>): Parser<U>
        export function sequence<T, U, V>(p0: Parser<T>, p1: Parser<U>, p2: Parser<V>): Parser<V>
        export function sequence<T, U, V, W>(p0: Parser<T>, p1: Parser<U>, p2: Parser<V>, p3: Parser<W>): Parser<W>
        export function sequence<T, U, V, W, X>(p0: Parser<T>, p1: Parser<U>, p2: Parser<V>, p3: Parser<W>, p4: Parser<X>): Parser<X>
        export function sequence<T, U, V, W, X, Y>(p0: Parser<T>, p1: Parser<U>, p2: Parser<V>, p3: Parser<W>, p4: Parser<X>, p5: Parser<Y>): Parser<Y>
        export function sequence<T, U, V, W, X, Y, Z>(p0: Parser<T>, p1: Parser<U>, p2: Parser<V>, p3: Parser<W>, p4: Parser<X>, p5: Parser<Y>, p6: Parser<Z>): Parser<Z>

        export function cons<T>(p0: Parser<T>): Parser<T>
        export function cons<T, U>(p0: Parser<T>, p1: Parser<U>): Parser<U>
        export function cons<T, U, V>(p0: Parser<T>, p1: Parser<U>, p2: Parser<V>): Parser<V>
        export function cons<T, U, V, W>(p0: Parser<T>, p1: Parser<U>, p2: Parser<V>, p3: Parser<W>): Parser<W>
        export function cons<T, U, V, W, X>(p0: Parser<T>, p1: Parser<U>, p2: Parser<V>, p3: Parser<W>, p4: Parser<X>): Parser<X>
        export function cons<T, U, V, W, X, Y>(p0: Parser<T>, p1: Parser<U>, p2: Parser<V>, p3: Parser<W>, p4: Parser<X>, p5: Parser<Y>): Parser<Y>
        export function cons<T, U, V, W, X, Y, Z>(p0: Parser<T>, p1: Parser<U>, p2: Parser<V>, p3: Parser<W>, p4: Parser<X>, p5: Parser<Y>, p6: Parser<Z>): Parser<Z>

        export function enumeration<T>(p0: Parser<T>): Parser<T>
        export function enumeration<T, U>(p0: Parser<T>, p1: Parser<U>): Parser<U>
        export function enumeration<T, U, V>(p0: Parser<T>, p1: Parser<U>, p2: Parser<V>): Parser<V>
        export function enumeration<T, U, V, W>(p0: Parser<T>, p1: Parser<U>, p2: Parser<V>, p3: Parser<W>): Parser<W>
        export function enumeration<T, U, V, W, X>(p0: Parser<T>, p1: Parser<U>, p2: Parser<V>, p3: Parser<W>, p4: Parser<X>): Parser<X>
        export function enumeration<T, U, V, W, X, Y>(p0: Parser<T>, p1: Parser<U>, p2: Parser<V>, p3: Parser<W>, p4: Parser<X>, p5: Parser<Y>): Parser<Y>
        export function enumeration<T, U, V, W, X, Y, Z>(p0: Parser<T>, p1: Parser<U>, p2: Parser<V>, p3: Parser<W>, p4: Parser<X>, p5: Parser<Y>, p6: Parser<Z>): Parser<Z>

        export function enumerations<T>(stream: T): Parser<T>

        export function choice<T>(...parsers: Parser<T>[]): Parser<T>

        export function either<T>(first: Parser<T>, second: Parser<T>): Parser<T>

        export function expected<T>(expected: string, parser: Parser<T>): Parser<T>

        export function always<T>(value: T): Parser<T>

        export function label<T>(label: string, parser: Parser<T>): Parser<T>

        export function run<T>(parser: Parser<T>, input: string): T

        export function token(predicate: (char: string) => boolean): Parser<string>

        export function next<T, U>(parser: Parser<T>, next: Parser<U>): Parser<U>

        export var eof: Parser<string>

        export var anyToken: Parser<string>

        export var getState: Parser<any>

        export var getParserState: Parser<any>

        export var getPosition: Parser<any>
    }

    export module lang {

        import Parser = parse.Parser

        export function between<T>(left: Parser<string>, right: Parser<string>, between: Parser<T>): Parser<T>

        export function then<T, U>(parser: Parser<T>, then: Parser<U>): Parser<T>

        export function sepEndBy<T>(sep: Parser<string>, parser: Parser<T>): Parser<T>

        export function endBy<T>(sep: Parser<string>, parser: Parser<T>): Parser<T>

        export function sepBy<T>(sep: Parser<string>, parser: Parser<T>): Parser<T>

        export function times<T>(n: number, parser: Parser<T>): Parser<T>
    }

    export module text {

        import Parser = parse.Parser

        export var letter: Parser<string>

        export var space: Parser<string>

        export var anyChar: Parser<string>

        export function match(regex: RegExp): Parser<string>

        export function string(string: string): Parser<string>

        export function noneOf(string: string): Parser<string>

        export function character(char: string): Parser<string>

        export function oneOf(string: string): Parser<string>
    }
}
// declare module "bennu" {
// 
//     export module parse {
// 
//         export interface Parser {
//             chain(bind: (any) => Parser): Parser
//             map(func: (any) => any): Parser
//         }
// 
//         export function fail(message?: string): Parser
// 
//         export function rec(gen: (parser: Parser) => Parser): Parser
// 
//         export function bind(parser: Parser, gen: (v: any) => Parser): Parser
// 
//         export function binds(parser: Parser, gen: (v: any) => Parser): Parser
// 
//         export function eager(parser: Parser): Parser
// 
//         export function many(parser: Parser): Parser
// 
//         export function not(parser: Parser): Parser
// 
//         export function optional(...params: any[]): Parser
// 
//         export function of(value: any): Parser
// 
//         export function attempt(value: any): Parser
// 
//         export function lookahead(value: any): Parser
// 
//         export function look(value: any): Parser
// 
//         export function sequence(parser: Parser, ...parsers: Parser[]): Parser
// 
//         export function cons(parser: Parser, ...parsers: Parser[]): Parser
// 
//         export function enumeration(parser: Parser, ...parsers: Parser[]): Parser
// 
//         export function enumerations(stream: any): Parser
// 
//         export function either(first: Parser, second: Parser): Parser
// 
//         export function expected(expected: string, parser: Parser): Parser
// 
//         export function choice(parser: Parser, ...parsers: Parser[]): Parser
// 
//         export function always(value: any): Parser
// 
//         export function label(label: string, Parser): Parser
// 
//         export function run(parser: Parser, input: string): any
// 
//         export function token(pred: (char: string) => boolean): Parser
// 
//         export function next(parser: Parser, next: Parser): Parser
// 
//         export var eof: Parser
// 
//         export var anyToken: Parser
// 
//         export var getState: Parser
// 
//         export var getParserState: Parser
//     }
// 
//     export module lang {
// 
//         import Parser = parse.Parser
// 
//         export function between(left: Parser, right: Parser, between: Parser): Parser
// 
//         export function then(parser: Parser, then: Parser): Parser
// 
//         export function sepEndBy(sep: Parser, parser: Parser): Parser
// 
//         export function endBy(sep: Parser, parser: Parser): Parser
// 
//         export function sepBy(sep: Parser, parser: Parser): Parser
// 
//         export function times(n: number, parser: Parser): Parser
//     }
// 
//     export module text {
// 
//         import Parser = parse.Parser
// 
//         export var letter: Parser
// 
//         export var space: Parser
// 
//         export var anyChar: Parser
// 
//         export function match(regex: RegExp): Parser
// 
//         export function string(string: string): Parser
// 
//         export function noneOf(string: string): Parser
// 
//         export function character(char: string): Parser
// 
//         export function oneOf(string: string): Parser
//     }
// }
