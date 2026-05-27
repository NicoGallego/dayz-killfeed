
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Player
 * 
 */
export type Player = $Result.DefaultSelection<Prisma.$PlayerPayload>
/**
 * Model KillEvent
 * 
 */
export type KillEvent = $Result.DefaultSelection<Prisma.$KillEventPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model LeaderboardEntry
 * 
 */
export type LeaderboardEntry = $Result.DefaultSelection<Prisma.$LeaderboardEntryPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Players
 * const players = await prisma.player.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Players
   * const players = await prisma.player.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.player`: Exposes CRUD operations for the **Player** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Players
    * const players = await prisma.player.findMany()
    * ```
    */
  get player(): Prisma.PlayerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.killEvent`: Exposes CRUD operations for the **KillEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more KillEvents
    * const killEvents = await prisma.killEvent.findMany()
    * ```
    */
  get killEvent(): Prisma.KillEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leaderboardEntry`: Exposes CRUD operations for the **LeaderboardEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LeaderboardEntries
    * const leaderboardEntries = await prisma.leaderboardEntry.findMany()
    * ```
    */
  get leaderboardEntry(): Prisma.LeaderboardEntryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Player: 'Player',
    KillEvent: 'KillEvent',
    Session: 'Session',
    LeaderboardEntry: 'LeaderboardEntry'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "player" | "killEvent" | "session" | "leaderboardEntry"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Player: {
        payload: Prisma.$PlayerPayload<ExtArgs>
        fields: Prisma.PlayerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          findFirst: {
            args: Prisma.PlayerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          findMany: {
            args: Prisma.PlayerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[]
          }
          create: {
            args: Prisma.PlayerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          createMany: {
            args: Prisma.PlayerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlayerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[]
          }
          delete: {
            args: Prisma.PlayerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          update: {
            args: Prisma.PlayerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          deleteMany: {
            args: Prisma.PlayerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlayerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[]
          }
          upsert: {
            args: Prisma.PlayerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          aggregate: {
            args: Prisma.PlayerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayer>
          }
          groupBy: {
            args: Prisma.PlayerGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayerGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayerCountArgs<ExtArgs>
            result: $Utils.Optional<PlayerCountAggregateOutputType> | number
          }
        }
      }
      KillEvent: {
        payload: Prisma.$KillEventPayload<ExtArgs>
        fields: Prisma.KillEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KillEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KillEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KillEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KillEventPayload>
          }
          findFirst: {
            args: Prisma.KillEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KillEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KillEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KillEventPayload>
          }
          findMany: {
            args: Prisma.KillEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KillEventPayload>[]
          }
          create: {
            args: Prisma.KillEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KillEventPayload>
          }
          createMany: {
            args: Prisma.KillEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KillEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KillEventPayload>[]
          }
          delete: {
            args: Prisma.KillEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KillEventPayload>
          }
          update: {
            args: Prisma.KillEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KillEventPayload>
          }
          deleteMany: {
            args: Prisma.KillEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KillEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KillEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KillEventPayload>[]
          }
          upsert: {
            args: Prisma.KillEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KillEventPayload>
          }
          aggregate: {
            args: Prisma.KillEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKillEvent>
          }
          groupBy: {
            args: Prisma.KillEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<KillEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.KillEventCountArgs<ExtArgs>
            result: $Utils.Optional<KillEventCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      LeaderboardEntry: {
        payload: Prisma.$LeaderboardEntryPayload<ExtArgs>
        fields: Prisma.LeaderboardEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeaderboardEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeaderboardEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardEntryPayload>
          }
          findFirst: {
            args: Prisma.LeaderboardEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeaderboardEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardEntryPayload>
          }
          findMany: {
            args: Prisma.LeaderboardEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardEntryPayload>[]
          }
          create: {
            args: Prisma.LeaderboardEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardEntryPayload>
          }
          createMany: {
            args: Prisma.LeaderboardEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeaderboardEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardEntryPayload>[]
          }
          delete: {
            args: Prisma.LeaderboardEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardEntryPayload>
          }
          update: {
            args: Prisma.LeaderboardEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardEntryPayload>
          }
          deleteMany: {
            args: Prisma.LeaderboardEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeaderboardEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeaderboardEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardEntryPayload>[]
          }
          upsert: {
            args: Prisma.LeaderboardEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaderboardEntryPayload>
          }
          aggregate: {
            args: Prisma.LeaderboardEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeaderboardEntry>
          }
          groupBy: {
            args: Prisma.LeaderboardEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeaderboardEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeaderboardEntryCountArgs<ExtArgs>
            result: $Utils.Optional<LeaderboardEntryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    player?: PlayerOmit
    killEvent?: KillEventOmit
    session?: SessionOmit
    leaderboardEntry?: LeaderboardEntryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PlayerCountOutputType
   */

  export type PlayerCountOutputType = {
    killsAsKiller: number
    killsAsVictim: number
    sessions: number
    leaderboardEntries: number
  }

  export type PlayerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    killsAsKiller?: boolean | PlayerCountOutputTypeCountKillsAsKillerArgs
    killsAsVictim?: boolean | PlayerCountOutputTypeCountKillsAsVictimArgs
    sessions?: boolean | PlayerCountOutputTypeCountSessionsArgs
    leaderboardEntries?: boolean | PlayerCountOutputTypeCountLeaderboardEntriesArgs
  }

  // Custom InputTypes
  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerCountOutputType
     */
    select?: PlayerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeCountKillsAsKillerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KillEventWhereInput
  }

  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeCountKillsAsVictimArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KillEventWhereInput
  }

  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeCountLeaderboardEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaderboardEntryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Player
   */

  export type AggregatePlayer = {
    _count: PlayerCountAggregateOutputType | null
    _avg: PlayerAvgAggregateOutputType | null
    _sum: PlayerSumAggregateOutputType | null
    _min: PlayerMinAggregateOutputType | null
    _max: PlayerMaxAggregateOutputType | null
  }

  export type PlayerAvgAggregateOutputType = {
    killsPvp: number | null
    deathsPvp: number | null
    deathsPve: number | null
    deathsSuicide: number | null
    kdRatio: number | null
    currentKillstreak: number | null
    bestKillstreak: number | null
    longestKillDistance: number | null
    totalSecondsOnline: number | null
  }

  export type PlayerSumAggregateOutputType = {
    killsPvp: number | null
    deathsPvp: number | null
    deathsPve: number | null
    deathsSuicide: number | null
    kdRatio: number | null
    currentKillstreak: number | null
    bestKillstreak: number | null
    longestKillDistance: number | null
    totalSecondsOnline: number | null
  }

  export type PlayerMinAggregateOutputType = {
    id: string | null
    nitradoId: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    killsPvp: number | null
    deathsPvp: number | null
    deathsPve: number | null
    deathsSuicide: number | null
    kdRatio: number | null
    currentKillstreak: number | null
    bestKillstreak: number | null
    longestKillDistance: number | null
    totalSecondsOnline: number | null
  }

  export type PlayerMaxAggregateOutputType = {
    id: string | null
    nitradoId: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    killsPvp: number | null
    deathsPvp: number | null
    deathsPve: number | null
    deathsSuicide: number | null
    kdRatio: number | null
    currentKillstreak: number | null
    bestKillstreak: number | null
    longestKillDistance: number | null
    totalSecondsOnline: number | null
  }

  export type PlayerCountAggregateOutputType = {
    id: number
    nitradoId: number
    name: number
    createdAt: number
    updatedAt: number
    killsPvp: number
    deathsPvp: number
    deathsPve: number
    deathsSuicide: number
    kdRatio: number
    currentKillstreak: number
    bestKillstreak: number
    longestKillDistance: number
    totalSecondsOnline: number
    _all: number
  }


  export type PlayerAvgAggregateInputType = {
    killsPvp?: true
    deathsPvp?: true
    deathsPve?: true
    deathsSuicide?: true
    kdRatio?: true
    currentKillstreak?: true
    bestKillstreak?: true
    longestKillDistance?: true
    totalSecondsOnline?: true
  }

  export type PlayerSumAggregateInputType = {
    killsPvp?: true
    deathsPvp?: true
    deathsPve?: true
    deathsSuicide?: true
    kdRatio?: true
    currentKillstreak?: true
    bestKillstreak?: true
    longestKillDistance?: true
    totalSecondsOnline?: true
  }

  export type PlayerMinAggregateInputType = {
    id?: true
    nitradoId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    killsPvp?: true
    deathsPvp?: true
    deathsPve?: true
    deathsSuicide?: true
    kdRatio?: true
    currentKillstreak?: true
    bestKillstreak?: true
    longestKillDistance?: true
    totalSecondsOnline?: true
  }

  export type PlayerMaxAggregateInputType = {
    id?: true
    nitradoId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    killsPvp?: true
    deathsPvp?: true
    deathsPve?: true
    deathsSuicide?: true
    kdRatio?: true
    currentKillstreak?: true
    bestKillstreak?: true
    longestKillDistance?: true
    totalSecondsOnline?: true
  }

  export type PlayerCountAggregateInputType = {
    id?: true
    nitradoId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    killsPvp?: true
    deathsPvp?: true
    deathsPve?: true
    deathsSuicide?: true
    kdRatio?: true
    currentKillstreak?: true
    bestKillstreak?: true
    longestKillDistance?: true
    totalSecondsOnline?: true
    _all?: true
  }

  export type PlayerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Player to aggregate.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Players
    **/
    _count?: true | PlayerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlayerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlayerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerMaxAggregateInputType
  }

  export type GetPlayerAggregateType<T extends PlayerAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayer[P]>
      : GetScalarType<T[P], AggregatePlayer[P]>
  }




  export type PlayerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerWhereInput
    orderBy?: PlayerOrderByWithAggregationInput | PlayerOrderByWithAggregationInput[]
    by: PlayerScalarFieldEnum[] | PlayerScalarFieldEnum
    having?: PlayerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerCountAggregateInputType | true
    _avg?: PlayerAvgAggregateInputType
    _sum?: PlayerSumAggregateInputType
    _min?: PlayerMinAggregateInputType
    _max?: PlayerMaxAggregateInputType
  }

  export type PlayerGroupByOutputType = {
    id: string
    nitradoId: string
    name: string
    createdAt: Date
    updatedAt: Date
    killsPvp: number
    deathsPvp: number
    deathsPve: number
    deathsSuicide: number
    kdRatio: number
    currentKillstreak: number
    bestKillstreak: number
    longestKillDistance: number
    totalSecondsOnline: number
    _count: PlayerCountAggregateOutputType | null
    _avg: PlayerAvgAggregateOutputType | null
    _sum: PlayerSumAggregateOutputType | null
    _min: PlayerMinAggregateOutputType | null
    _max: PlayerMaxAggregateOutputType | null
  }

  type GetPlayerGroupByPayload<T extends PlayerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerGroupByOutputType[P]>
        }
      >
    >


  export type PlayerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nitradoId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    killsPvp?: boolean
    deathsPvp?: boolean
    deathsPve?: boolean
    deathsSuicide?: boolean
    kdRatio?: boolean
    currentKillstreak?: boolean
    bestKillstreak?: boolean
    longestKillDistance?: boolean
    totalSecondsOnline?: boolean
    killsAsKiller?: boolean | Player$killsAsKillerArgs<ExtArgs>
    killsAsVictim?: boolean | Player$killsAsVictimArgs<ExtArgs>
    sessions?: boolean | Player$sessionsArgs<ExtArgs>
    leaderboardEntries?: boolean | Player$leaderboardEntriesArgs<ExtArgs>
    _count?: boolean | PlayerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["player"]>

  export type PlayerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nitradoId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    killsPvp?: boolean
    deathsPvp?: boolean
    deathsPve?: boolean
    deathsSuicide?: boolean
    kdRatio?: boolean
    currentKillstreak?: boolean
    bestKillstreak?: boolean
    longestKillDistance?: boolean
    totalSecondsOnline?: boolean
  }, ExtArgs["result"]["player"]>

  export type PlayerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nitradoId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    killsPvp?: boolean
    deathsPvp?: boolean
    deathsPve?: boolean
    deathsSuicide?: boolean
    kdRatio?: boolean
    currentKillstreak?: boolean
    bestKillstreak?: boolean
    longestKillDistance?: boolean
    totalSecondsOnline?: boolean
  }, ExtArgs["result"]["player"]>

  export type PlayerSelectScalar = {
    id?: boolean
    nitradoId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    killsPvp?: boolean
    deathsPvp?: boolean
    deathsPve?: boolean
    deathsSuicide?: boolean
    kdRatio?: boolean
    currentKillstreak?: boolean
    bestKillstreak?: boolean
    longestKillDistance?: boolean
    totalSecondsOnline?: boolean
  }

  export type PlayerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nitradoId" | "name" | "createdAt" | "updatedAt" | "killsPvp" | "deathsPvp" | "deathsPve" | "deathsSuicide" | "kdRatio" | "currentKillstreak" | "bestKillstreak" | "longestKillDistance" | "totalSecondsOnline", ExtArgs["result"]["player"]>
  export type PlayerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    killsAsKiller?: boolean | Player$killsAsKillerArgs<ExtArgs>
    killsAsVictim?: boolean | Player$killsAsVictimArgs<ExtArgs>
    sessions?: boolean | Player$sessionsArgs<ExtArgs>
    leaderboardEntries?: boolean | Player$leaderboardEntriesArgs<ExtArgs>
    _count?: boolean | PlayerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlayerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PlayerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PlayerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Player"
    objects: {
      killsAsKiller: Prisma.$KillEventPayload<ExtArgs>[]
      killsAsVictim: Prisma.$KillEventPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      leaderboardEntries: Prisma.$LeaderboardEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nitradoId: string
      name: string
      createdAt: Date
      updatedAt: Date
      killsPvp: number
      deathsPvp: number
      deathsPve: number
      deathsSuicide: number
      kdRatio: number
      currentKillstreak: number
      bestKillstreak: number
      longestKillDistance: number
      totalSecondsOnline: number
    }, ExtArgs["result"]["player"]>
    composites: {}
  }

  type PlayerGetPayload<S extends boolean | null | undefined | PlayerDefaultArgs> = $Result.GetResult<Prisma.$PlayerPayload, S>

  type PlayerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlayerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayerCountAggregateInputType | true
    }

  export interface PlayerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Player'], meta: { name: 'Player' } }
    /**
     * Find zero or one Player that matches the filter.
     * @param {PlayerFindUniqueArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayerFindUniqueArgs>(args: SelectSubset<T, PlayerFindUniqueArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Player that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayerFindUniqueOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayerFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Player that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindFirstArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayerFindFirstArgs>(args?: SelectSubset<T, PlayerFindFirstArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Player that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindFirstOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayerFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayerFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Players
     * const players = await prisma.player.findMany()
     * 
     * // Get first 10 Players
     * const players = await prisma.player.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playerWithIdOnly = await prisma.player.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlayerFindManyArgs>(args?: SelectSubset<T, PlayerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Player.
     * @param {PlayerCreateArgs} args - Arguments to create a Player.
     * @example
     * // Create one Player
     * const Player = await prisma.player.create({
     *   data: {
     *     // ... data to create a Player
     *   }
     * })
     * 
     */
    create<T extends PlayerCreateArgs>(args: SelectSubset<T, PlayerCreateArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Players.
     * @param {PlayerCreateManyArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const player = await prisma.player.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayerCreateManyArgs>(args?: SelectSubset<T, PlayerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Players and returns the data saved in the database.
     * @param {PlayerCreateManyAndReturnArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const player = await prisma.player.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Players and only return the `id`
     * const playerWithIdOnly = await prisma.player.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlayerCreateManyAndReturnArgs>(args?: SelectSubset<T, PlayerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Player.
     * @param {PlayerDeleteArgs} args - Arguments to delete one Player.
     * @example
     * // Delete one Player
     * const Player = await prisma.player.delete({
     *   where: {
     *     // ... filter to delete one Player
     *   }
     * })
     * 
     */
    delete<T extends PlayerDeleteArgs>(args: SelectSubset<T, PlayerDeleteArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Player.
     * @param {PlayerUpdateArgs} args - Arguments to update one Player.
     * @example
     * // Update one Player
     * const player = await prisma.player.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayerUpdateArgs>(args: SelectSubset<T, PlayerUpdateArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Players.
     * @param {PlayerDeleteManyArgs} args - Arguments to filter Players to delete.
     * @example
     * // Delete a few Players
     * const { count } = await prisma.player.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayerDeleteManyArgs>(args?: SelectSubset<T, PlayerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Players
     * const player = await prisma.player.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayerUpdateManyArgs>(args: SelectSubset<T, PlayerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players and returns the data updated in the database.
     * @param {PlayerUpdateManyAndReturnArgs} args - Arguments to update many Players.
     * @example
     * // Update many Players
     * const player = await prisma.player.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Players and only return the `id`
     * const playerWithIdOnly = await prisma.player.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlayerUpdateManyAndReturnArgs>(args: SelectSubset<T, PlayerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Player.
     * @param {PlayerUpsertArgs} args - Arguments to update or create a Player.
     * @example
     * // Update or create a Player
     * const player = await prisma.player.upsert({
     *   create: {
     *     // ... data to create a Player
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Player we want to update
     *   }
     * })
     */
    upsert<T extends PlayerUpsertArgs>(args: SelectSubset<T, PlayerUpsertArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerCountArgs} args - Arguments to filter Players to count.
     * @example
     * // Count the number of Players
     * const count = await prisma.player.count({
     *   where: {
     *     // ... the filter for the Players we want to count
     *   }
     * })
    **/
    count<T extends PlayerCountArgs>(
      args?: Subset<T, PlayerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlayerAggregateArgs>(args: Subset<T, PlayerAggregateArgs>): Prisma.PrismaPromise<GetPlayerAggregateType<T>>

    /**
     * Group by Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlayerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerGroupByArgs['orderBy'] }
        : { orderBy?: PlayerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlayerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Player model
   */
  readonly fields: PlayerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Player.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    killsAsKiller<T extends Player$killsAsKillerArgs<ExtArgs> = {}>(args?: Subset<T, Player$killsAsKillerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KillEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    killsAsVictim<T extends Player$killsAsVictimArgs<ExtArgs> = {}>(args?: Subset<T, Player$killsAsVictimArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KillEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends Player$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, Player$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    leaderboardEntries<T extends Player$leaderboardEntriesArgs<ExtArgs> = {}>(args?: Subset<T, Player$leaderboardEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaderboardEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Player model
   */
  interface PlayerFieldRefs {
    readonly id: FieldRef<"Player", 'String'>
    readonly nitradoId: FieldRef<"Player", 'String'>
    readonly name: FieldRef<"Player", 'String'>
    readonly createdAt: FieldRef<"Player", 'DateTime'>
    readonly updatedAt: FieldRef<"Player", 'DateTime'>
    readonly killsPvp: FieldRef<"Player", 'Int'>
    readonly deathsPvp: FieldRef<"Player", 'Int'>
    readonly deathsPve: FieldRef<"Player", 'Int'>
    readonly deathsSuicide: FieldRef<"Player", 'Int'>
    readonly kdRatio: FieldRef<"Player", 'Float'>
    readonly currentKillstreak: FieldRef<"Player", 'Int'>
    readonly bestKillstreak: FieldRef<"Player", 'Int'>
    readonly longestKillDistance: FieldRef<"Player", 'Float'>
    readonly totalSecondsOnline: FieldRef<"Player", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Player findUnique
   */
  export type PlayerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player findUniqueOrThrow
   */
  export type PlayerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player findFirst
   */
  export type PlayerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player findFirstOrThrow
   */
  export type PlayerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player findMany
   */
  export type PlayerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Players to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player create
   */
  export type PlayerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The data needed to create a Player.
     */
    data: XOR<PlayerCreateInput, PlayerUncheckedCreateInput>
  }

  /**
   * Player createMany
   */
  export type PlayerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Players.
     */
    data: PlayerCreateManyInput | PlayerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Player createManyAndReturn
   */
  export type PlayerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * The data used to create many Players.
     */
    data: PlayerCreateManyInput | PlayerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Player update
   */
  export type PlayerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The data needed to update a Player.
     */
    data: XOR<PlayerUpdateInput, PlayerUncheckedUpdateInput>
    /**
     * Choose, which Player to update.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player updateMany
   */
  export type PlayerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Players.
     */
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyInput>
    /**
     * Filter which Players to update
     */
    where?: PlayerWhereInput
    /**
     * Limit how many Players to update.
     */
    limit?: number
  }

  /**
   * Player updateManyAndReturn
   */
  export type PlayerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * The data used to update Players.
     */
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyInput>
    /**
     * Filter which Players to update
     */
    where?: PlayerWhereInput
    /**
     * Limit how many Players to update.
     */
    limit?: number
  }

  /**
   * Player upsert
   */
  export type PlayerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The filter to search for the Player to update in case it exists.
     */
    where: PlayerWhereUniqueInput
    /**
     * In case the Player found by the `where` argument doesn't exist, create a new Player with this data.
     */
    create: XOR<PlayerCreateInput, PlayerUncheckedCreateInput>
    /**
     * In case the Player was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayerUpdateInput, PlayerUncheckedUpdateInput>
  }

  /**
   * Player delete
   */
  export type PlayerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter which Player to delete.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player deleteMany
   */
  export type PlayerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Players to delete
     */
    where?: PlayerWhereInput
    /**
     * Limit how many Players to delete.
     */
    limit?: number
  }

  /**
   * Player.killsAsKiller
   */
  export type Player$killsAsKillerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KillEvent
     */
    select?: KillEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KillEvent
     */
    omit?: KillEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KillEventInclude<ExtArgs> | null
    where?: KillEventWhereInput
    orderBy?: KillEventOrderByWithRelationInput | KillEventOrderByWithRelationInput[]
    cursor?: KillEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KillEventScalarFieldEnum | KillEventScalarFieldEnum[]
  }

  /**
   * Player.killsAsVictim
   */
  export type Player$killsAsVictimArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KillEvent
     */
    select?: KillEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KillEvent
     */
    omit?: KillEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KillEventInclude<ExtArgs> | null
    where?: KillEventWhereInput
    orderBy?: KillEventOrderByWithRelationInput | KillEventOrderByWithRelationInput[]
    cursor?: KillEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KillEventScalarFieldEnum | KillEventScalarFieldEnum[]
  }

  /**
   * Player.sessions
   */
  export type Player$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Player.leaderboardEntries
   */
  export type Player$leaderboardEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderboardEntry
     */
    select?: LeaderboardEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderboardEntry
     */
    omit?: LeaderboardEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardEntryInclude<ExtArgs> | null
    where?: LeaderboardEntryWhereInput
    orderBy?: LeaderboardEntryOrderByWithRelationInput | LeaderboardEntryOrderByWithRelationInput[]
    cursor?: LeaderboardEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaderboardEntryScalarFieldEnum | LeaderboardEntryScalarFieldEnum[]
  }

  /**
   * Player without action
   */
  export type PlayerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
  }


  /**
   * Model KillEvent
   */

  export type AggregateKillEvent = {
    _count: KillEventCountAggregateOutputType | null
    _avg: KillEventAvgAggregateOutputType | null
    _sum: KillEventSumAggregateOutputType | null
    _min: KillEventMinAggregateOutputType | null
    _max: KillEventMaxAggregateOutputType | null
  }

  export type KillEventAvgAggregateOutputType = {
    distance: number | null
    killedPosX: number | null
    killedPosY: number | null
    killedPosZ: number | null
    killerPosX: number | null
    killerPosY: number | null
    killerPosZ: number | null
    killerStreakAtKill: number | null
  }

  export type KillEventSumAggregateOutputType = {
    distance: number | null
    killedPosX: number | null
    killedPosY: number | null
    killedPosZ: number | null
    killerPosX: number | null
    killerPosY: number | null
    killerPosZ: number | null
    killerStreakAtKill: number | null
  }

  export type KillEventMinAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    killerId: string | null
    victimId: string | null
    weapon: string | null
    ammoType: string | null
    distance: number | null
    fatalHitZone: string | null
    killedPosX: number | null
    killedPosY: number | null
    killedPosZ: number | null
    killerPosX: number | null
    killerPosY: number | null
    killerPosZ: number | null
    locationName: string | null
    killerStreakAtKill: number | null
    createdAt: Date | null
  }

  export type KillEventMaxAggregateOutputType = {
    id: string | null
    timestamp: Date | null
    killerId: string | null
    victimId: string | null
    weapon: string | null
    ammoType: string | null
    distance: number | null
    fatalHitZone: string | null
    killedPosX: number | null
    killedPosY: number | null
    killedPosZ: number | null
    killerPosX: number | null
    killerPosY: number | null
    killerPosZ: number | null
    locationName: string | null
    killerStreakAtKill: number | null
    createdAt: Date | null
  }

  export type KillEventCountAggregateOutputType = {
    id: number
    timestamp: number
    killerId: number
    victimId: number
    weapon: number
    ammoType: number
    distance: number
    fatalHitZone: number
    killedPosX: number
    killedPosY: number
    killedPosZ: number
    killerPosX: number
    killerPosY: number
    killerPosZ: number
    locationName: number
    killerStreakAtKill: number
    createdAt: number
    _all: number
  }


  export type KillEventAvgAggregateInputType = {
    distance?: true
    killedPosX?: true
    killedPosY?: true
    killedPosZ?: true
    killerPosX?: true
    killerPosY?: true
    killerPosZ?: true
    killerStreakAtKill?: true
  }

  export type KillEventSumAggregateInputType = {
    distance?: true
    killedPosX?: true
    killedPosY?: true
    killedPosZ?: true
    killerPosX?: true
    killerPosY?: true
    killerPosZ?: true
    killerStreakAtKill?: true
  }

  export type KillEventMinAggregateInputType = {
    id?: true
    timestamp?: true
    killerId?: true
    victimId?: true
    weapon?: true
    ammoType?: true
    distance?: true
    fatalHitZone?: true
    killedPosX?: true
    killedPosY?: true
    killedPosZ?: true
    killerPosX?: true
    killerPosY?: true
    killerPosZ?: true
    locationName?: true
    killerStreakAtKill?: true
    createdAt?: true
  }

  export type KillEventMaxAggregateInputType = {
    id?: true
    timestamp?: true
    killerId?: true
    victimId?: true
    weapon?: true
    ammoType?: true
    distance?: true
    fatalHitZone?: true
    killedPosX?: true
    killedPosY?: true
    killedPosZ?: true
    killerPosX?: true
    killerPosY?: true
    killerPosZ?: true
    locationName?: true
    killerStreakAtKill?: true
    createdAt?: true
  }

  export type KillEventCountAggregateInputType = {
    id?: true
    timestamp?: true
    killerId?: true
    victimId?: true
    weapon?: true
    ammoType?: true
    distance?: true
    fatalHitZone?: true
    killedPosX?: true
    killedPosY?: true
    killedPosZ?: true
    killerPosX?: true
    killerPosY?: true
    killerPosZ?: true
    locationName?: true
    killerStreakAtKill?: true
    createdAt?: true
    _all?: true
  }

  export type KillEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KillEvent to aggregate.
     */
    where?: KillEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KillEvents to fetch.
     */
    orderBy?: KillEventOrderByWithRelationInput | KillEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KillEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KillEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KillEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned KillEvents
    **/
    _count?: true | KillEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KillEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KillEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KillEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KillEventMaxAggregateInputType
  }

  export type GetKillEventAggregateType<T extends KillEventAggregateArgs> = {
        [P in keyof T & keyof AggregateKillEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKillEvent[P]>
      : GetScalarType<T[P], AggregateKillEvent[P]>
  }




  export type KillEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KillEventWhereInput
    orderBy?: KillEventOrderByWithAggregationInput | KillEventOrderByWithAggregationInput[]
    by: KillEventScalarFieldEnum[] | KillEventScalarFieldEnum
    having?: KillEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KillEventCountAggregateInputType | true
    _avg?: KillEventAvgAggregateInputType
    _sum?: KillEventSumAggregateInputType
    _min?: KillEventMinAggregateInputType
    _max?: KillEventMaxAggregateInputType
  }

  export type KillEventGroupByOutputType = {
    id: string
    timestamp: Date
    killerId: string
    victimId: string
    weapon: string
    ammoType: string | null
    distance: number
    fatalHitZone: string | null
    killedPosX: number
    killedPosY: number
    killedPosZ: number
    killerPosX: number
    killerPosY: number
    killerPosZ: number
    locationName: string | null
    killerStreakAtKill: number
    createdAt: Date
    _count: KillEventCountAggregateOutputType | null
    _avg: KillEventAvgAggregateOutputType | null
    _sum: KillEventSumAggregateOutputType | null
    _min: KillEventMinAggregateOutputType | null
    _max: KillEventMaxAggregateOutputType | null
  }

  type GetKillEventGroupByPayload<T extends KillEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KillEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KillEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KillEventGroupByOutputType[P]>
            : GetScalarType<T[P], KillEventGroupByOutputType[P]>
        }
      >
    >


  export type KillEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    killerId?: boolean
    victimId?: boolean
    weapon?: boolean
    ammoType?: boolean
    distance?: boolean
    fatalHitZone?: boolean
    killedPosX?: boolean
    killedPosY?: boolean
    killedPosZ?: boolean
    killerPosX?: boolean
    killerPosY?: boolean
    killerPosZ?: boolean
    locationName?: boolean
    killerStreakAtKill?: boolean
    createdAt?: boolean
    killer?: boolean | PlayerDefaultArgs<ExtArgs>
    victim?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["killEvent"]>

  export type KillEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    killerId?: boolean
    victimId?: boolean
    weapon?: boolean
    ammoType?: boolean
    distance?: boolean
    fatalHitZone?: boolean
    killedPosX?: boolean
    killedPosY?: boolean
    killedPosZ?: boolean
    killerPosX?: boolean
    killerPosY?: boolean
    killerPosZ?: boolean
    locationName?: boolean
    killerStreakAtKill?: boolean
    createdAt?: boolean
    killer?: boolean | PlayerDefaultArgs<ExtArgs>
    victim?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["killEvent"]>

  export type KillEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timestamp?: boolean
    killerId?: boolean
    victimId?: boolean
    weapon?: boolean
    ammoType?: boolean
    distance?: boolean
    fatalHitZone?: boolean
    killedPosX?: boolean
    killedPosY?: boolean
    killedPosZ?: boolean
    killerPosX?: boolean
    killerPosY?: boolean
    killerPosZ?: boolean
    locationName?: boolean
    killerStreakAtKill?: boolean
    createdAt?: boolean
    killer?: boolean | PlayerDefaultArgs<ExtArgs>
    victim?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["killEvent"]>

  export type KillEventSelectScalar = {
    id?: boolean
    timestamp?: boolean
    killerId?: boolean
    victimId?: boolean
    weapon?: boolean
    ammoType?: boolean
    distance?: boolean
    fatalHitZone?: boolean
    killedPosX?: boolean
    killedPosY?: boolean
    killedPosZ?: boolean
    killerPosX?: boolean
    killerPosY?: boolean
    killerPosZ?: boolean
    locationName?: boolean
    killerStreakAtKill?: boolean
    createdAt?: boolean
  }

  export type KillEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "timestamp" | "killerId" | "victimId" | "weapon" | "ammoType" | "distance" | "fatalHitZone" | "killedPosX" | "killedPosY" | "killedPosZ" | "killerPosX" | "killerPosY" | "killerPosZ" | "locationName" | "killerStreakAtKill" | "createdAt", ExtArgs["result"]["killEvent"]>
  export type KillEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    killer?: boolean | PlayerDefaultArgs<ExtArgs>
    victim?: boolean | PlayerDefaultArgs<ExtArgs>
  }
  export type KillEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    killer?: boolean | PlayerDefaultArgs<ExtArgs>
    victim?: boolean | PlayerDefaultArgs<ExtArgs>
  }
  export type KillEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    killer?: boolean | PlayerDefaultArgs<ExtArgs>
    victim?: boolean | PlayerDefaultArgs<ExtArgs>
  }

  export type $KillEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "KillEvent"
    objects: {
      killer: Prisma.$PlayerPayload<ExtArgs>
      victim: Prisma.$PlayerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      timestamp: Date
      killerId: string
      victimId: string
      weapon: string
      ammoType: string | null
      distance: number
      fatalHitZone: string | null
      killedPosX: number
      killedPosY: number
      killedPosZ: number
      killerPosX: number
      killerPosY: number
      killerPosZ: number
      locationName: string | null
      killerStreakAtKill: number
      createdAt: Date
    }, ExtArgs["result"]["killEvent"]>
    composites: {}
  }

  type KillEventGetPayload<S extends boolean | null | undefined | KillEventDefaultArgs> = $Result.GetResult<Prisma.$KillEventPayload, S>

  type KillEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KillEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KillEventCountAggregateInputType | true
    }

  export interface KillEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['KillEvent'], meta: { name: 'KillEvent' } }
    /**
     * Find zero or one KillEvent that matches the filter.
     * @param {KillEventFindUniqueArgs} args - Arguments to find a KillEvent
     * @example
     * // Get one KillEvent
     * const killEvent = await prisma.killEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KillEventFindUniqueArgs>(args: SelectSubset<T, KillEventFindUniqueArgs<ExtArgs>>): Prisma__KillEventClient<$Result.GetResult<Prisma.$KillEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one KillEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KillEventFindUniqueOrThrowArgs} args - Arguments to find a KillEvent
     * @example
     * // Get one KillEvent
     * const killEvent = await prisma.killEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KillEventFindUniqueOrThrowArgs>(args: SelectSubset<T, KillEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KillEventClient<$Result.GetResult<Prisma.$KillEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KillEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KillEventFindFirstArgs} args - Arguments to find a KillEvent
     * @example
     * // Get one KillEvent
     * const killEvent = await prisma.killEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KillEventFindFirstArgs>(args?: SelectSubset<T, KillEventFindFirstArgs<ExtArgs>>): Prisma__KillEventClient<$Result.GetResult<Prisma.$KillEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KillEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KillEventFindFirstOrThrowArgs} args - Arguments to find a KillEvent
     * @example
     * // Get one KillEvent
     * const killEvent = await prisma.killEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KillEventFindFirstOrThrowArgs>(args?: SelectSubset<T, KillEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__KillEventClient<$Result.GetResult<Prisma.$KillEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more KillEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KillEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all KillEvents
     * const killEvents = await prisma.killEvent.findMany()
     * 
     * // Get first 10 KillEvents
     * const killEvents = await prisma.killEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const killEventWithIdOnly = await prisma.killEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KillEventFindManyArgs>(args?: SelectSubset<T, KillEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KillEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a KillEvent.
     * @param {KillEventCreateArgs} args - Arguments to create a KillEvent.
     * @example
     * // Create one KillEvent
     * const KillEvent = await prisma.killEvent.create({
     *   data: {
     *     // ... data to create a KillEvent
     *   }
     * })
     * 
     */
    create<T extends KillEventCreateArgs>(args: SelectSubset<T, KillEventCreateArgs<ExtArgs>>): Prisma__KillEventClient<$Result.GetResult<Prisma.$KillEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many KillEvents.
     * @param {KillEventCreateManyArgs} args - Arguments to create many KillEvents.
     * @example
     * // Create many KillEvents
     * const killEvent = await prisma.killEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KillEventCreateManyArgs>(args?: SelectSubset<T, KillEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many KillEvents and returns the data saved in the database.
     * @param {KillEventCreateManyAndReturnArgs} args - Arguments to create many KillEvents.
     * @example
     * // Create many KillEvents
     * const killEvent = await prisma.killEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many KillEvents and only return the `id`
     * const killEventWithIdOnly = await prisma.killEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KillEventCreateManyAndReturnArgs>(args?: SelectSubset<T, KillEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KillEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a KillEvent.
     * @param {KillEventDeleteArgs} args - Arguments to delete one KillEvent.
     * @example
     * // Delete one KillEvent
     * const KillEvent = await prisma.killEvent.delete({
     *   where: {
     *     // ... filter to delete one KillEvent
     *   }
     * })
     * 
     */
    delete<T extends KillEventDeleteArgs>(args: SelectSubset<T, KillEventDeleteArgs<ExtArgs>>): Prisma__KillEventClient<$Result.GetResult<Prisma.$KillEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one KillEvent.
     * @param {KillEventUpdateArgs} args - Arguments to update one KillEvent.
     * @example
     * // Update one KillEvent
     * const killEvent = await prisma.killEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KillEventUpdateArgs>(args: SelectSubset<T, KillEventUpdateArgs<ExtArgs>>): Prisma__KillEventClient<$Result.GetResult<Prisma.$KillEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more KillEvents.
     * @param {KillEventDeleteManyArgs} args - Arguments to filter KillEvents to delete.
     * @example
     * // Delete a few KillEvents
     * const { count } = await prisma.killEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KillEventDeleteManyArgs>(args?: SelectSubset<T, KillEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KillEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KillEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many KillEvents
     * const killEvent = await prisma.killEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KillEventUpdateManyArgs>(args: SelectSubset<T, KillEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KillEvents and returns the data updated in the database.
     * @param {KillEventUpdateManyAndReturnArgs} args - Arguments to update many KillEvents.
     * @example
     * // Update many KillEvents
     * const killEvent = await prisma.killEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more KillEvents and only return the `id`
     * const killEventWithIdOnly = await prisma.killEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends KillEventUpdateManyAndReturnArgs>(args: SelectSubset<T, KillEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KillEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one KillEvent.
     * @param {KillEventUpsertArgs} args - Arguments to update or create a KillEvent.
     * @example
     * // Update or create a KillEvent
     * const killEvent = await prisma.killEvent.upsert({
     *   create: {
     *     // ... data to create a KillEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the KillEvent we want to update
     *   }
     * })
     */
    upsert<T extends KillEventUpsertArgs>(args: SelectSubset<T, KillEventUpsertArgs<ExtArgs>>): Prisma__KillEventClient<$Result.GetResult<Prisma.$KillEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of KillEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KillEventCountArgs} args - Arguments to filter KillEvents to count.
     * @example
     * // Count the number of KillEvents
     * const count = await prisma.killEvent.count({
     *   where: {
     *     // ... the filter for the KillEvents we want to count
     *   }
     * })
    **/
    count<T extends KillEventCountArgs>(
      args?: Subset<T, KillEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KillEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a KillEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KillEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KillEventAggregateArgs>(args: Subset<T, KillEventAggregateArgs>): Prisma.PrismaPromise<GetKillEventAggregateType<T>>

    /**
     * Group by KillEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KillEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends KillEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KillEventGroupByArgs['orderBy'] }
        : { orderBy?: KillEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, KillEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKillEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the KillEvent model
   */
  readonly fields: KillEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for KillEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KillEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    killer<T extends PlayerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlayerDefaultArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    victim<T extends PlayerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlayerDefaultArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the KillEvent model
   */
  interface KillEventFieldRefs {
    readonly id: FieldRef<"KillEvent", 'String'>
    readonly timestamp: FieldRef<"KillEvent", 'DateTime'>
    readonly killerId: FieldRef<"KillEvent", 'String'>
    readonly victimId: FieldRef<"KillEvent", 'String'>
    readonly weapon: FieldRef<"KillEvent", 'String'>
    readonly ammoType: FieldRef<"KillEvent", 'String'>
    readonly distance: FieldRef<"KillEvent", 'Float'>
    readonly fatalHitZone: FieldRef<"KillEvent", 'String'>
    readonly killedPosX: FieldRef<"KillEvent", 'Float'>
    readonly killedPosY: FieldRef<"KillEvent", 'Float'>
    readonly killedPosZ: FieldRef<"KillEvent", 'Float'>
    readonly killerPosX: FieldRef<"KillEvent", 'Float'>
    readonly killerPosY: FieldRef<"KillEvent", 'Float'>
    readonly killerPosZ: FieldRef<"KillEvent", 'Float'>
    readonly locationName: FieldRef<"KillEvent", 'String'>
    readonly killerStreakAtKill: FieldRef<"KillEvent", 'Int'>
    readonly createdAt: FieldRef<"KillEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * KillEvent findUnique
   */
  export type KillEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KillEvent
     */
    select?: KillEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KillEvent
     */
    omit?: KillEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KillEventInclude<ExtArgs> | null
    /**
     * Filter, which KillEvent to fetch.
     */
    where: KillEventWhereUniqueInput
  }

  /**
   * KillEvent findUniqueOrThrow
   */
  export type KillEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KillEvent
     */
    select?: KillEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KillEvent
     */
    omit?: KillEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KillEventInclude<ExtArgs> | null
    /**
     * Filter, which KillEvent to fetch.
     */
    where: KillEventWhereUniqueInput
  }

  /**
   * KillEvent findFirst
   */
  export type KillEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KillEvent
     */
    select?: KillEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KillEvent
     */
    omit?: KillEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KillEventInclude<ExtArgs> | null
    /**
     * Filter, which KillEvent to fetch.
     */
    where?: KillEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KillEvents to fetch.
     */
    orderBy?: KillEventOrderByWithRelationInput | KillEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KillEvents.
     */
    cursor?: KillEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KillEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KillEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KillEvents.
     */
    distinct?: KillEventScalarFieldEnum | KillEventScalarFieldEnum[]
  }

  /**
   * KillEvent findFirstOrThrow
   */
  export type KillEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KillEvent
     */
    select?: KillEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KillEvent
     */
    omit?: KillEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KillEventInclude<ExtArgs> | null
    /**
     * Filter, which KillEvent to fetch.
     */
    where?: KillEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KillEvents to fetch.
     */
    orderBy?: KillEventOrderByWithRelationInput | KillEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KillEvents.
     */
    cursor?: KillEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KillEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KillEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KillEvents.
     */
    distinct?: KillEventScalarFieldEnum | KillEventScalarFieldEnum[]
  }

  /**
   * KillEvent findMany
   */
  export type KillEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KillEvent
     */
    select?: KillEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KillEvent
     */
    omit?: KillEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KillEventInclude<ExtArgs> | null
    /**
     * Filter, which KillEvents to fetch.
     */
    where?: KillEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KillEvents to fetch.
     */
    orderBy?: KillEventOrderByWithRelationInput | KillEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing KillEvents.
     */
    cursor?: KillEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KillEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KillEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KillEvents.
     */
    distinct?: KillEventScalarFieldEnum | KillEventScalarFieldEnum[]
  }

  /**
   * KillEvent create
   */
  export type KillEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KillEvent
     */
    select?: KillEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KillEvent
     */
    omit?: KillEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KillEventInclude<ExtArgs> | null
    /**
     * The data needed to create a KillEvent.
     */
    data: XOR<KillEventCreateInput, KillEventUncheckedCreateInput>
  }

  /**
   * KillEvent createMany
   */
  export type KillEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many KillEvents.
     */
    data: KillEventCreateManyInput | KillEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * KillEvent createManyAndReturn
   */
  export type KillEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KillEvent
     */
    select?: KillEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KillEvent
     */
    omit?: KillEventOmit<ExtArgs> | null
    /**
     * The data used to create many KillEvents.
     */
    data: KillEventCreateManyInput | KillEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KillEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * KillEvent update
   */
  export type KillEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KillEvent
     */
    select?: KillEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KillEvent
     */
    omit?: KillEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KillEventInclude<ExtArgs> | null
    /**
     * The data needed to update a KillEvent.
     */
    data: XOR<KillEventUpdateInput, KillEventUncheckedUpdateInput>
    /**
     * Choose, which KillEvent to update.
     */
    where: KillEventWhereUniqueInput
  }

  /**
   * KillEvent updateMany
   */
  export type KillEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update KillEvents.
     */
    data: XOR<KillEventUpdateManyMutationInput, KillEventUncheckedUpdateManyInput>
    /**
     * Filter which KillEvents to update
     */
    where?: KillEventWhereInput
    /**
     * Limit how many KillEvents to update.
     */
    limit?: number
  }

  /**
   * KillEvent updateManyAndReturn
   */
  export type KillEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KillEvent
     */
    select?: KillEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KillEvent
     */
    omit?: KillEventOmit<ExtArgs> | null
    /**
     * The data used to update KillEvents.
     */
    data: XOR<KillEventUpdateManyMutationInput, KillEventUncheckedUpdateManyInput>
    /**
     * Filter which KillEvents to update
     */
    where?: KillEventWhereInput
    /**
     * Limit how many KillEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KillEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * KillEvent upsert
   */
  export type KillEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KillEvent
     */
    select?: KillEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KillEvent
     */
    omit?: KillEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KillEventInclude<ExtArgs> | null
    /**
     * The filter to search for the KillEvent to update in case it exists.
     */
    where: KillEventWhereUniqueInput
    /**
     * In case the KillEvent found by the `where` argument doesn't exist, create a new KillEvent with this data.
     */
    create: XOR<KillEventCreateInput, KillEventUncheckedCreateInput>
    /**
     * In case the KillEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KillEventUpdateInput, KillEventUncheckedUpdateInput>
  }

  /**
   * KillEvent delete
   */
  export type KillEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KillEvent
     */
    select?: KillEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KillEvent
     */
    omit?: KillEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KillEventInclude<ExtArgs> | null
    /**
     * Filter which KillEvent to delete.
     */
    where: KillEventWhereUniqueInput
  }

  /**
   * KillEvent deleteMany
   */
  export type KillEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KillEvents to delete
     */
    where?: KillEventWhereInput
    /**
     * Limit how many KillEvents to delete.
     */
    limit?: number
  }

  /**
   * KillEvent without action
   */
  export type KillEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KillEvent
     */
    select?: KillEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KillEvent
     */
    omit?: KillEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KillEventInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionAvgAggregateOutputType = {
    durationSeconds: number | null
  }

  export type SessionSumAggregateOutputType = {
    durationSeconds: number | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    playerId: string | null
    connectedAt: Date | null
    disconnectedAt: Date | null
    durationSeconds: number | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    playerId: string | null
    connectedAt: Date | null
    disconnectedAt: Date | null
    durationSeconds: number | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    playerId: number
    connectedAt: number
    disconnectedAt: number
    durationSeconds: number
    _all: number
  }


  export type SessionAvgAggregateInputType = {
    durationSeconds?: true
  }

  export type SessionSumAggregateInputType = {
    durationSeconds?: true
  }

  export type SessionMinAggregateInputType = {
    id?: true
    playerId?: true
    connectedAt?: true
    disconnectedAt?: true
    durationSeconds?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    playerId?: true
    connectedAt?: true
    disconnectedAt?: true
    durationSeconds?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    playerId?: true
    connectedAt?: true
    disconnectedAt?: true
    durationSeconds?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _avg?: SessionAvgAggregateInputType
    _sum?: SessionSumAggregateInputType
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    playerId: string
    connectedAt: Date
    disconnectedAt: Date | null
    durationSeconds: number | null
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    connectedAt?: boolean
    disconnectedAt?: boolean
    durationSeconds?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    connectedAt?: boolean
    disconnectedAt?: boolean
    durationSeconds?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    connectedAt?: boolean
    disconnectedAt?: boolean
    durationSeconds?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    playerId?: boolean
    connectedAt?: boolean
    disconnectedAt?: boolean
    durationSeconds?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "playerId" | "connectedAt" | "disconnectedAt" | "durationSeconds", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      player: Prisma.$PlayerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      playerId: string
      connectedAt: Date
      disconnectedAt: Date | null
      durationSeconds: number | null
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    player<T extends PlayerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlayerDefaultArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly playerId: FieldRef<"Session", 'String'>
    readonly connectedAt: FieldRef<"Session", 'DateTime'>
    readonly disconnectedAt: FieldRef<"Session", 'DateTime'>
    readonly durationSeconds: FieldRef<"Session", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model LeaderboardEntry
   */

  export type AggregateLeaderboardEntry = {
    _count: LeaderboardEntryCountAggregateOutputType | null
    _avg: LeaderboardEntryAvgAggregateOutputType | null
    _sum: LeaderboardEntrySumAggregateOutputType | null
    _min: LeaderboardEntryMinAggregateOutputType | null
    _max: LeaderboardEntryMaxAggregateOutputType | null
  }

  export type LeaderboardEntryAvgAggregateOutputType = {
    kills: number | null
    deaths: number | null
    bestKillstreak: number | null
    longestKillDistance: number | null
    totalSecondsOnline: number | null
  }

  export type LeaderboardEntrySumAggregateOutputType = {
    kills: number | null
    deaths: number | null
    bestKillstreak: number | null
    longestKillDistance: number | null
    totalSecondsOnline: number | null
  }

  export type LeaderboardEntryMinAggregateOutputType = {
    id: string | null
    playerId: string | null
    periodStart: Date | null
    periodEnd: Date | null
    kills: number | null
    deaths: number | null
    bestKillstreak: number | null
    longestKillDistance: number | null
    totalSecondsOnline: number | null
    createdAt: Date | null
  }

  export type LeaderboardEntryMaxAggregateOutputType = {
    id: string | null
    playerId: string | null
    periodStart: Date | null
    periodEnd: Date | null
    kills: number | null
    deaths: number | null
    bestKillstreak: number | null
    longestKillDistance: number | null
    totalSecondsOnline: number | null
    createdAt: Date | null
  }

  export type LeaderboardEntryCountAggregateOutputType = {
    id: number
    playerId: number
    periodStart: number
    periodEnd: number
    kills: number
    deaths: number
    bestKillstreak: number
    longestKillDistance: number
    totalSecondsOnline: number
    createdAt: number
    _all: number
  }


  export type LeaderboardEntryAvgAggregateInputType = {
    kills?: true
    deaths?: true
    bestKillstreak?: true
    longestKillDistance?: true
    totalSecondsOnline?: true
  }

  export type LeaderboardEntrySumAggregateInputType = {
    kills?: true
    deaths?: true
    bestKillstreak?: true
    longestKillDistance?: true
    totalSecondsOnline?: true
  }

  export type LeaderboardEntryMinAggregateInputType = {
    id?: true
    playerId?: true
    periodStart?: true
    periodEnd?: true
    kills?: true
    deaths?: true
    bestKillstreak?: true
    longestKillDistance?: true
    totalSecondsOnline?: true
    createdAt?: true
  }

  export type LeaderboardEntryMaxAggregateInputType = {
    id?: true
    playerId?: true
    periodStart?: true
    periodEnd?: true
    kills?: true
    deaths?: true
    bestKillstreak?: true
    longestKillDistance?: true
    totalSecondsOnline?: true
    createdAt?: true
  }

  export type LeaderboardEntryCountAggregateInputType = {
    id?: true
    playerId?: true
    periodStart?: true
    periodEnd?: true
    kills?: true
    deaths?: true
    bestKillstreak?: true
    longestKillDistance?: true
    totalSecondsOnline?: true
    createdAt?: true
    _all?: true
  }

  export type LeaderboardEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeaderboardEntry to aggregate.
     */
    where?: LeaderboardEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaderboardEntries to fetch.
     */
    orderBy?: LeaderboardEntryOrderByWithRelationInput | LeaderboardEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeaderboardEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaderboardEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaderboardEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LeaderboardEntries
    **/
    _count?: true | LeaderboardEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LeaderboardEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LeaderboardEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeaderboardEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeaderboardEntryMaxAggregateInputType
  }

  export type GetLeaderboardEntryAggregateType<T extends LeaderboardEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateLeaderboardEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeaderboardEntry[P]>
      : GetScalarType<T[P], AggregateLeaderboardEntry[P]>
  }




  export type LeaderboardEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaderboardEntryWhereInput
    orderBy?: LeaderboardEntryOrderByWithAggregationInput | LeaderboardEntryOrderByWithAggregationInput[]
    by: LeaderboardEntryScalarFieldEnum[] | LeaderboardEntryScalarFieldEnum
    having?: LeaderboardEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeaderboardEntryCountAggregateInputType | true
    _avg?: LeaderboardEntryAvgAggregateInputType
    _sum?: LeaderboardEntrySumAggregateInputType
    _min?: LeaderboardEntryMinAggregateInputType
    _max?: LeaderboardEntryMaxAggregateInputType
  }

  export type LeaderboardEntryGroupByOutputType = {
    id: string
    playerId: string
    periodStart: Date
    periodEnd: Date | null
    kills: number
    deaths: number
    bestKillstreak: number
    longestKillDistance: number
    totalSecondsOnline: number
    createdAt: Date
    _count: LeaderboardEntryCountAggregateOutputType | null
    _avg: LeaderboardEntryAvgAggregateOutputType | null
    _sum: LeaderboardEntrySumAggregateOutputType | null
    _min: LeaderboardEntryMinAggregateOutputType | null
    _max: LeaderboardEntryMaxAggregateOutputType | null
  }

  type GetLeaderboardEntryGroupByPayload<T extends LeaderboardEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeaderboardEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeaderboardEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeaderboardEntryGroupByOutputType[P]>
            : GetScalarType<T[P], LeaderboardEntryGroupByOutputType[P]>
        }
      >
    >


  export type LeaderboardEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    kills?: boolean
    deaths?: boolean
    bestKillstreak?: boolean
    longestKillDistance?: boolean
    totalSecondsOnline?: boolean
    createdAt?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leaderboardEntry"]>

  export type LeaderboardEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    kills?: boolean
    deaths?: boolean
    bestKillstreak?: boolean
    longestKillDistance?: boolean
    totalSecondsOnline?: boolean
    createdAt?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leaderboardEntry"]>

  export type LeaderboardEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    kills?: boolean
    deaths?: boolean
    bestKillstreak?: boolean
    longestKillDistance?: boolean
    totalSecondsOnline?: boolean
    createdAt?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leaderboardEntry"]>

  export type LeaderboardEntrySelectScalar = {
    id?: boolean
    playerId?: boolean
    periodStart?: boolean
    periodEnd?: boolean
    kills?: boolean
    deaths?: boolean
    bestKillstreak?: boolean
    longestKillDistance?: boolean
    totalSecondsOnline?: boolean
    createdAt?: boolean
  }

  export type LeaderboardEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "playerId" | "periodStart" | "periodEnd" | "kills" | "deaths" | "bestKillstreak" | "longestKillDistance" | "totalSecondsOnline" | "createdAt", ExtArgs["result"]["leaderboardEntry"]>
  export type LeaderboardEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }
  export type LeaderboardEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }
  export type LeaderboardEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }

  export type $LeaderboardEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LeaderboardEntry"
    objects: {
      player: Prisma.$PlayerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      playerId: string
      periodStart: Date
      periodEnd: Date | null
      kills: number
      deaths: number
      bestKillstreak: number
      longestKillDistance: number
      totalSecondsOnline: number
      createdAt: Date
    }, ExtArgs["result"]["leaderboardEntry"]>
    composites: {}
  }

  type LeaderboardEntryGetPayload<S extends boolean | null | undefined | LeaderboardEntryDefaultArgs> = $Result.GetResult<Prisma.$LeaderboardEntryPayload, S>

  type LeaderboardEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeaderboardEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeaderboardEntryCountAggregateInputType | true
    }

  export interface LeaderboardEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LeaderboardEntry'], meta: { name: 'LeaderboardEntry' } }
    /**
     * Find zero or one LeaderboardEntry that matches the filter.
     * @param {LeaderboardEntryFindUniqueArgs} args - Arguments to find a LeaderboardEntry
     * @example
     * // Get one LeaderboardEntry
     * const leaderboardEntry = await prisma.leaderboardEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeaderboardEntryFindUniqueArgs>(args: SelectSubset<T, LeaderboardEntryFindUniqueArgs<ExtArgs>>): Prisma__LeaderboardEntryClient<$Result.GetResult<Prisma.$LeaderboardEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LeaderboardEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeaderboardEntryFindUniqueOrThrowArgs} args - Arguments to find a LeaderboardEntry
     * @example
     * // Get one LeaderboardEntry
     * const leaderboardEntry = await prisma.leaderboardEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeaderboardEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, LeaderboardEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeaderboardEntryClient<$Result.GetResult<Prisma.$LeaderboardEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeaderboardEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderboardEntryFindFirstArgs} args - Arguments to find a LeaderboardEntry
     * @example
     * // Get one LeaderboardEntry
     * const leaderboardEntry = await prisma.leaderboardEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeaderboardEntryFindFirstArgs>(args?: SelectSubset<T, LeaderboardEntryFindFirstArgs<ExtArgs>>): Prisma__LeaderboardEntryClient<$Result.GetResult<Prisma.$LeaderboardEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeaderboardEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderboardEntryFindFirstOrThrowArgs} args - Arguments to find a LeaderboardEntry
     * @example
     * // Get one LeaderboardEntry
     * const leaderboardEntry = await prisma.leaderboardEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeaderboardEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, LeaderboardEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeaderboardEntryClient<$Result.GetResult<Prisma.$LeaderboardEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LeaderboardEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderboardEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LeaderboardEntries
     * const leaderboardEntries = await prisma.leaderboardEntry.findMany()
     * 
     * // Get first 10 LeaderboardEntries
     * const leaderboardEntries = await prisma.leaderboardEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leaderboardEntryWithIdOnly = await prisma.leaderboardEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeaderboardEntryFindManyArgs>(args?: SelectSubset<T, LeaderboardEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaderboardEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LeaderboardEntry.
     * @param {LeaderboardEntryCreateArgs} args - Arguments to create a LeaderboardEntry.
     * @example
     * // Create one LeaderboardEntry
     * const LeaderboardEntry = await prisma.leaderboardEntry.create({
     *   data: {
     *     // ... data to create a LeaderboardEntry
     *   }
     * })
     * 
     */
    create<T extends LeaderboardEntryCreateArgs>(args: SelectSubset<T, LeaderboardEntryCreateArgs<ExtArgs>>): Prisma__LeaderboardEntryClient<$Result.GetResult<Prisma.$LeaderboardEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LeaderboardEntries.
     * @param {LeaderboardEntryCreateManyArgs} args - Arguments to create many LeaderboardEntries.
     * @example
     * // Create many LeaderboardEntries
     * const leaderboardEntry = await prisma.leaderboardEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeaderboardEntryCreateManyArgs>(args?: SelectSubset<T, LeaderboardEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LeaderboardEntries and returns the data saved in the database.
     * @param {LeaderboardEntryCreateManyAndReturnArgs} args - Arguments to create many LeaderboardEntries.
     * @example
     * // Create many LeaderboardEntries
     * const leaderboardEntry = await prisma.leaderboardEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LeaderboardEntries and only return the `id`
     * const leaderboardEntryWithIdOnly = await prisma.leaderboardEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeaderboardEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, LeaderboardEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaderboardEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LeaderboardEntry.
     * @param {LeaderboardEntryDeleteArgs} args - Arguments to delete one LeaderboardEntry.
     * @example
     * // Delete one LeaderboardEntry
     * const LeaderboardEntry = await prisma.leaderboardEntry.delete({
     *   where: {
     *     // ... filter to delete one LeaderboardEntry
     *   }
     * })
     * 
     */
    delete<T extends LeaderboardEntryDeleteArgs>(args: SelectSubset<T, LeaderboardEntryDeleteArgs<ExtArgs>>): Prisma__LeaderboardEntryClient<$Result.GetResult<Prisma.$LeaderboardEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LeaderboardEntry.
     * @param {LeaderboardEntryUpdateArgs} args - Arguments to update one LeaderboardEntry.
     * @example
     * // Update one LeaderboardEntry
     * const leaderboardEntry = await prisma.leaderboardEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeaderboardEntryUpdateArgs>(args: SelectSubset<T, LeaderboardEntryUpdateArgs<ExtArgs>>): Prisma__LeaderboardEntryClient<$Result.GetResult<Prisma.$LeaderboardEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LeaderboardEntries.
     * @param {LeaderboardEntryDeleteManyArgs} args - Arguments to filter LeaderboardEntries to delete.
     * @example
     * // Delete a few LeaderboardEntries
     * const { count } = await prisma.leaderboardEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeaderboardEntryDeleteManyArgs>(args?: SelectSubset<T, LeaderboardEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeaderboardEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderboardEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LeaderboardEntries
     * const leaderboardEntry = await prisma.leaderboardEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeaderboardEntryUpdateManyArgs>(args: SelectSubset<T, LeaderboardEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeaderboardEntries and returns the data updated in the database.
     * @param {LeaderboardEntryUpdateManyAndReturnArgs} args - Arguments to update many LeaderboardEntries.
     * @example
     * // Update many LeaderboardEntries
     * const leaderboardEntry = await prisma.leaderboardEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LeaderboardEntries and only return the `id`
     * const leaderboardEntryWithIdOnly = await prisma.leaderboardEntry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LeaderboardEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, LeaderboardEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaderboardEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LeaderboardEntry.
     * @param {LeaderboardEntryUpsertArgs} args - Arguments to update or create a LeaderboardEntry.
     * @example
     * // Update or create a LeaderboardEntry
     * const leaderboardEntry = await prisma.leaderboardEntry.upsert({
     *   create: {
     *     // ... data to create a LeaderboardEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LeaderboardEntry we want to update
     *   }
     * })
     */
    upsert<T extends LeaderboardEntryUpsertArgs>(args: SelectSubset<T, LeaderboardEntryUpsertArgs<ExtArgs>>): Prisma__LeaderboardEntryClient<$Result.GetResult<Prisma.$LeaderboardEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LeaderboardEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderboardEntryCountArgs} args - Arguments to filter LeaderboardEntries to count.
     * @example
     * // Count the number of LeaderboardEntries
     * const count = await prisma.leaderboardEntry.count({
     *   where: {
     *     // ... the filter for the LeaderboardEntries we want to count
     *   }
     * })
    **/
    count<T extends LeaderboardEntryCountArgs>(
      args?: Subset<T, LeaderboardEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeaderboardEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LeaderboardEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderboardEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LeaderboardEntryAggregateArgs>(args: Subset<T, LeaderboardEntryAggregateArgs>): Prisma.PrismaPromise<GetLeaderboardEntryAggregateType<T>>

    /**
     * Group by LeaderboardEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaderboardEntryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LeaderboardEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeaderboardEntryGroupByArgs['orderBy'] }
        : { orderBy?: LeaderboardEntryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LeaderboardEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeaderboardEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LeaderboardEntry model
   */
  readonly fields: LeaderboardEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LeaderboardEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeaderboardEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    player<T extends PlayerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlayerDefaultArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LeaderboardEntry model
   */
  interface LeaderboardEntryFieldRefs {
    readonly id: FieldRef<"LeaderboardEntry", 'String'>
    readonly playerId: FieldRef<"LeaderboardEntry", 'String'>
    readonly periodStart: FieldRef<"LeaderboardEntry", 'DateTime'>
    readonly periodEnd: FieldRef<"LeaderboardEntry", 'DateTime'>
    readonly kills: FieldRef<"LeaderboardEntry", 'Int'>
    readonly deaths: FieldRef<"LeaderboardEntry", 'Int'>
    readonly bestKillstreak: FieldRef<"LeaderboardEntry", 'Int'>
    readonly longestKillDistance: FieldRef<"LeaderboardEntry", 'Float'>
    readonly totalSecondsOnline: FieldRef<"LeaderboardEntry", 'Int'>
    readonly createdAt: FieldRef<"LeaderboardEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LeaderboardEntry findUnique
   */
  export type LeaderboardEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderboardEntry
     */
    select?: LeaderboardEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderboardEntry
     */
    omit?: LeaderboardEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardEntryInclude<ExtArgs> | null
    /**
     * Filter, which LeaderboardEntry to fetch.
     */
    where: LeaderboardEntryWhereUniqueInput
  }

  /**
   * LeaderboardEntry findUniqueOrThrow
   */
  export type LeaderboardEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderboardEntry
     */
    select?: LeaderboardEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderboardEntry
     */
    omit?: LeaderboardEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardEntryInclude<ExtArgs> | null
    /**
     * Filter, which LeaderboardEntry to fetch.
     */
    where: LeaderboardEntryWhereUniqueInput
  }

  /**
   * LeaderboardEntry findFirst
   */
  export type LeaderboardEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderboardEntry
     */
    select?: LeaderboardEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderboardEntry
     */
    omit?: LeaderboardEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardEntryInclude<ExtArgs> | null
    /**
     * Filter, which LeaderboardEntry to fetch.
     */
    where?: LeaderboardEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaderboardEntries to fetch.
     */
    orderBy?: LeaderboardEntryOrderByWithRelationInput | LeaderboardEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeaderboardEntries.
     */
    cursor?: LeaderboardEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaderboardEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaderboardEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeaderboardEntries.
     */
    distinct?: LeaderboardEntryScalarFieldEnum | LeaderboardEntryScalarFieldEnum[]
  }

  /**
   * LeaderboardEntry findFirstOrThrow
   */
  export type LeaderboardEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderboardEntry
     */
    select?: LeaderboardEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderboardEntry
     */
    omit?: LeaderboardEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardEntryInclude<ExtArgs> | null
    /**
     * Filter, which LeaderboardEntry to fetch.
     */
    where?: LeaderboardEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaderboardEntries to fetch.
     */
    orderBy?: LeaderboardEntryOrderByWithRelationInput | LeaderboardEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeaderboardEntries.
     */
    cursor?: LeaderboardEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaderboardEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaderboardEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeaderboardEntries.
     */
    distinct?: LeaderboardEntryScalarFieldEnum | LeaderboardEntryScalarFieldEnum[]
  }

  /**
   * LeaderboardEntry findMany
   */
  export type LeaderboardEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderboardEntry
     */
    select?: LeaderboardEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderboardEntry
     */
    omit?: LeaderboardEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardEntryInclude<ExtArgs> | null
    /**
     * Filter, which LeaderboardEntries to fetch.
     */
    where?: LeaderboardEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaderboardEntries to fetch.
     */
    orderBy?: LeaderboardEntryOrderByWithRelationInput | LeaderboardEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LeaderboardEntries.
     */
    cursor?: LeaderboardEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaderboardEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaderboardEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeaderboardEntries.
     */
    distinct?: LeaderboardEntryScalarFieldEnum | LeaderboardEntryScalarFieldEnum[]
  }

  /**
   * LeaderboardEntry create
   */
  export type LeaderboardEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderboardEntry
     */
    select?: LeaderboardEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderboardEntry
     */
    omit?: LeaderboardEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a LeaderboardEntry.
     */
    data: XOR<LeaderboardEntryCreateInput, LeaderboardEntryUncheckedCreateInput>
  }

  /**
   * LeaderboardEntry createMany
   */
  export type LeaderboardEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LeaderboardEntries.
     */
    data: LeaderboardEntryCreateManyInput | LeaderboardEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LeaderboardEntry createManyAndReturn
   */
  export type LeaderboardEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderboardEntry
     */
    select?: LeaderboardEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderboardEntry
     */
    omit?: LeaderboardEntryOmit<ExtArgs> | null
    /**
     * The data used to create many LeaderboardEntries.
     */
    data: LeaderboardEntryCreateManyInput | LeaderboardEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeaderboardEntry update
   */
  export type LeaderboardEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderboardEntry
     */
    select?: LeaderboardEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderboardEntry
     */
    omit?: LeaderboardEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a LeaderboardEntry.
     */
    data: XOR<LeaderboardEntryUpdateInput, LeaderboardEntryUncheckedUpdateInput>
    /**
     * Choose, which LeaderboardEntry to update.
     */
    where: LeaderboardEntryWhereUniqueInput
  }

  /**
   * LeaderboardEntry updateMany
   */
  export type LeaderboardEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LeaderboardEntries.
     */
    data: XOR<LeaderboardEntryUpdateManyMutationInput, LeaderboardEntryUncheckedUpdateManyInput>
    /**
     * Filter which LeaderboardEntries to update
     */
    where?: LeaderboardEntryWhereInput
    /**
     * Limit how many LeaderboardEntries to update.
     */
    limit?: number
  }

  /**
   * LeaderboardEntry updateManyAndReturn
   */
  export type LeaderboardEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderboardEntry
     */
    select?: LeaderboardEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderboardEntry
     */
    omit?: LeaderboardEntryOmit<ExtArgs> | null
    /**
     * The data used to update LeaderboardEntries.
     */
    data: XOR<LeaderboardEntryUpdateManyMutationInput, LeaderboardEntryUncheckedUpdateManyInput>
    /**
     * Filter which LeaderboardEntries to update
     */
    where?: LeaderboardEntryWhereInput
    /**
     * Limit how many LeaderboardEntries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardEntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeaderboardEntry upsert
   */
  export type LeaderboardEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderboardEntry
     */
    select?: LeaderboardEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderboardEntry
     */
    omit?: LeaderboardEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the LeaderboardEntry to update in case it exists.
     */
    where: LeaderboardEntryWhereUniqueInput
    /**
     * In case the LeaderboardEntry found by the `where` argument doesn't exist, create a new LeaderboardEntry with this data.
     */
    create: XOR<LeaderboardEntryCreateInput, LeaderboardEntryUncheckedCreateInput>
    /**
     * In case the LeaderboardEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeaderboardEntryUpdateInput, LeaderboardEntryUncheckedUpdateInput>
  }

  /**
   * LeaderboardEntry delete
   */
  export type LeaderboardEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderboardEntry
     */
    select?: LeaderboardEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderboardEntry
     */
    omit?: LeaderboardEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardEntryInclude<ExtArgs> | null
    /**
     * Filter which LeaderboardEntry to delete.
     */
    where: LeaderboardEntryWhereUniqueInput
  }

  /**
   * LeaderboardEntry deleteMany
   */
  export type LeaderboardEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeaderboardEntries to delete
     */
    where?: LeaderboardEntryWhereInput
    /**
     * Limit how many LeaderboardEntries to delete.
     */
    limit?: number
  }

  /**
   * LeaderboardEntry without action
   */
  export type LeaderboardEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaderboardEntry
     */
    select?: LeaderboardEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaderboardEntry
     */
    omit?: LeaderboardEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaderboardEntryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PlayerScalarFieldEnum: {
    id: 'id',
    nitradoId: 'nitradoId',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    killsPvp: 'killsPvp',
    deathsPvp: 'deathsPvp',
    deathsPve: 'deathsPve',
    deathsSuicide: 'deathsSuicide',
    kdRatio: 'kdRatio',
    currentKillstreak: 'currentKillstreak',
    bestKillstreak: 'bestKillstreak',
    longestKillDistance: 'longestKillDistance',
    totalSecondsOnline: 'totalSecondsOnline'
  };

  export type PlayerScalarFieldEnum = (typeof PlayerScalarFieldEnum)[keyof typeof PlayerScalarFieldEnum]


  export const KillEventScalarFieldEnum: {
    id: 'id',
    timestamp: 'timestamp',
    killerId: 'killerId',
    victimId: 'victimId',
    weapon: 'weapon',
    ammoType: 'ammoType',
    distance: 'distance',
    fatalHitZone: 'fatalHitZone',
    killedPosX: 'killedPosX',
    killedPosY: 'killedPosY',
    killedPosZ: 'killedPosZ',
    killerPosX: 'killerPosX',
    killerPosY: 'killerPosY',
    killerPosZ: 'killerPosZ',
    locationName: 'locationName',
    killerStreakAtKill: 'killerStreakAtKill',
    createdAt: 'createdAt'
  };

  export type KillEventScalarFieldEnum = (typeof KillEventScalarFieldEnum)[keyof typeof KillEventScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    playerId: 'playerId',
    connectedAt: 'connectedAt',
    disconnectedAt: 'disconnectedAt',
    durationSeconds: 'durationSeconds'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const LeaderboardEntryScalarFieldEnum: {
    id: 'id',
    playerId: 'playerId',
    periodStart: 'periodStart',
    periodEnd: 'periodEnd',
    kills: 'kills',
    deaths: 'deaths',
    bestKillstreak: 'bestKillstreak',
    longestKillDistance: 'longestKillDistance',
    totalSecondsOnline: 'totalSecondsOnline',
    createdAt: 'createdAt'
  };

  export type LeaderboardEntryScalarFieldEnum = (typeof LeaderboardEntryScalarFieldEnum)[keyof typeof LeaderboardEntryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type PlayerWhereInput = {
    AND?: PlayerWhereInput | PlayerWhereInput[]
    OR?: PlayerWhereInput[]
    NOT?: PlayerWhereInput | PlayerWhereInput[]
    id?: StringFilter<"Player"> | string
    nitradoId?: StringFilter<"Player"> | string
    name?: StringFilter<"Player"> | string
    createdAt?: DateTimeFilter<"Player"> | Date | string
    updatedAt?: DateTimeFilter<"Player"> | Date | string
    killsPvp?: IntFilter<"Player"> | number
    deathsPvp?: IntFilter<"Player"> | number
    deathsPve?: IntFilter<"Player"> | number
    deathsSuicide?: IntFilter<"Player"> | number
    kdRatio?: FloatFilter<"Player"> | number
    currentKillstreak?: IntFilter<"Player"> | number
    bestKillstreak?: IntFilter<"Player"> | number
    longestKillDistance?: FloatFilter<"Player"> | number
    totalSecondsOnline?: IntFilter<"Player"> | number
    killsAsKiller?: KillEventListRelationFilter
    killsAsVictim?: KillEventListRelationFilter
    sessions?: SessionListRelationFilter
    leaderboardEntries?: LeaderboardEntryListRelationFilter
  }

  export type PlayerOrderByWithRelationInput = {
    id?: SortOrder
    nitradoId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    killsPvp?: SortOrder
    deathsPvp?: SortOrder
    deathsPve?: SortOrder
    deathsSuicide?: SortOrder
    kdRatio?: SortOrder
    currentKillstreak?: SortOrder
    bestKillstreak?: SortOrder
    longestKillDistance?: SortOrder
    totalSecondsOnline?: SortOrder
    killsAsKiller?: KillEventOrderByRelationAggregateInput
    killsAsVictim?: KillEventOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    leaderboardEntries?: LeaderboardEntryOrderByRelationAggregateInput
  }

  export type PlayerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nitradoId?: string
    AND?: PlayerWhereInput | PlayerWhereInput[]
    OR?: PlayerWhereInput[]
    NOT?: PlayerWhereInput | PlayerWhereInput[]
    name?: StringFilter<"Player"> | string
    createdAt?: DateTimeFilter<"Player"> | Date | string
    updatedAt?: DateTimeFilter<"Player"> | Date | string
    killsPvp?: IntFilter<"Player"> | number
    deathsPvp?: IntFilter<"Player"> | number
    deathsPve?: IntFilter<"Player"> | number
    deathsSuicide?: IntFilter<"Player"> | number
    kdRatio?: FloatFilter<"Player"> | number
    currentKillstreak?: IntFilter<"Player"> | number
    bestKillstreak?: IntFilter<"Player"> | number
    longestKillDistance?: FloatFilter<"Player"> | number
    totalSecondsOnline?: IntFilter<"Player"> | number
    killsAsKiller?: KillEventListRelationFilter
    killsAsVictim?: KillEventListRelationFilter
    sessions?: SessionListRelationFilter
    leaderboardEntries?: LeaderboardEntryListRelationFilter
  }, "id" | "nitradoId">

  export type PlayerOrderByWithAggregationInput = {
    id?: SortOrder
    nitradoId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    killsPvp?: SortOrder
    deathsPvp?: SortOrder
    deathsPve?: SortOrder
    deathsSuicide?: SortOrder
    kdRatio?: SortOrder
    currentKillstreak?: SortOrder
    bestKillstreak?: SortOrder
    longestKillDistance?: SortOrder
    totalSecondsOnline?: SortOrder
    _count?: PlayerCountOrderByAggregateInput
    _avg?: PlayerAvgOrderByAggregateInput
    _max?: PlayerMaxOrderByAggregateInput
    _min?: PlayerMinOrderByAggregateInput
    _sum?: PlayerSumOrderByAggregateInput
  }

  export type PlayerScalarWhereWithAggregatesInput = {
    AND?: PlayerScalarWhereWithAggregatesInput | PlayerScalarWhereWithAggregatesInput[]
    OR?: PlayerScalarWhereWithAggregatesInput[]
    NOT?: PlayerScalarWhereWithAggregatesInput | PlayerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Player"> | string
    nitradoId?: StringWithAggregatesFilter<"Player"> | string
    name?: StringWithAggregatesFilter<"Player"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Player"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Player"> | Date | string
    killsPvp?: IntWithAggregatesFilter<"Player"> | number
    deathsPvp?: IntWithAggregatesFilter<"Player"> | number
    deathsPve?: IntWithAggregatesFilter<"Player"> | number
    deathsSuicide?: IntWithAggregatesFilter<"Player"> | number
    kdRatio?: FloatWithAggregatesFilter<"Player"> | number
    currentKillstreak?: IntWithAggregatesFilter<"Player"> | number
    bestKillstreak?: IntWithAggregatesFilter<"Player"> | number
    longestKillDistance?: FloatWithAggregatesFilter<"Player"> | number
    totalSecondsOnline?: IntWithAggregatesFilter<"Player"> | number
  }

  export type KillEventWhereInput = {
    AND?: KillEventWhereInput | KillEventWhereInput[]
    OR?: KillEventWhereInput[]
    NOT?: KillEventWhereInput | KillEventWhereInput[]
    id?: StringFilter<"KillEvent"> | string
    timestamp?: DateTimeFilter<"KillEvent"> | Date | string
    killerId?: StringFilter<"KillEvent"> | string
    victimId?: StringFilter<"KillEvent"> | string
    weapon?: StringFilter<"KillEvent"> | string
    ammoType?: StringNullableFilter<"KillEvent"> | string | null
    distance?: FloatFilter<"KillEvent"> | number
    fatalHitZone?: StringNullableFilter<"KillEvent"> | string | null
    killedPosX?: FloatFilter<"KillEvent"> | number
    killedPosY?: FloatFilter<"KillEvent"> | number
    killedPosZ?: FloatFilter<"KillEvent"> | number
    killerPosX?: FloatFilter<"KillEvent"> | number
    killerPosY?: FloatFilter<"KillEvent"> | number
    killerPosZ?: FloatFilter<"KillEvent"> | number
    locationName?: StringNullableFilter<"KillEvent"> | string | null
    killerStreakAtKill?: IntFilter<"KillEvent"> | number
    createdAt?: DateTimeFilter<"KillEvent"> | Date | string
    killer?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
    victim?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
  }

  export type KillEventOrderByWithRelationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    killerId?: SortOrder
    victimId?: SortOrder
    weapon?: SortOrder
    ammoType?: SortOrderInput | SortOrder
    distance?: SortOrder
    fatalHitZone?: SortOrderInput | SortOrder
    killedPosX?: SortOrder
    killedPosY?: SortOrder
    killedPosZ?: SortOrder
    killerPosX?: SortOrder
    killerPosY?: SortOrder
    killerPosZ?: SortOrder
    locationName?: SortOrderInput | SortOrder
    killerStreakAtKill?: SortOrder
    createdAt?: SortOrder
    killer?: PlayerOrderByWithRelationInput
    victim?: PlayerOrderByWithRelationInput
  }

  export type KillEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: KillEventWhereInput | KillEventWhereInput[]
    OR?: KillEventWhereInput[]
    NOT?: KillEventWhereInput | KillEventWhereInput[]
    timestamp?: DateTimeFilter<"KillEvent"> | Date | string
    killerId?: StringFilter<"KillEvent"> | string
    victimId?: StringFilter<"KillEvent"> | string
    weapon?: StringFilter<"KillEvent"> | string
    ammoType?: StringNullableFilter<"KillEvent"> | string | null
    distance?: FloatFilter<"KillEvent"> | number
    fatalHitZone?: StringNullableFilter<"KillEvent"> | string | null
    killedPosX?: FloatFilter<"KillEvent"> | number
    killedPosY?: FloatFilter<"KillEvent"> | number
    killedPosZ?: FloatFilter<"KillEvent"> | number
    killerPosX?: FloatFilter<"KillEvent"> | number
    killerPosY?: FloatFilter<"KillEvent"> | number
    killerPosZ?: FloatFilter<"KillEvent"> | number
    locationName?: StringNullableFilter<"KillEvent"> | string | null
    killerStreakAtKill?: IntFilter<"KillEvent"> | number
    createdAt?: DateTimeFilter<"KillEvent"> | Date | string
    killer?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
    victim?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
  }, "id">

  export type KillEventOrderByWithAggregationInput = {
    id?: SortOrder
    timestamp?: SortOrder
    killerId?: SortOrder
    victimId?: SortOrder
    weapon?: SortOrder
    ammoType?: SortOrderInput | SortOrder
    distance?: SortOrder
    fatalHitZone?: SortOrderInput | SortOrder
    killedPosX?: SortOrder
    killedPosY?: SortOrder
    killedPosZ?: SortOrder
    killerPosX?: SortOrder
    killerPosY?: SortOrder
    killerPosZ?: SortOrder
    locationName?: SortOrderInput | SortOrder
    killerStreakAtKill?: SortOrder
    createdAt?: SortOrder
    _count?: KillEventCountOrderByAggregateInput
    _avg?: KillEventAvgOrderByAggregateInput
    _max?: KillEventMaxOrderByAggregateInput
    _min?: KillEventMinOrderByAggregateInput
    _sum?: KillEventSumOrderByAggregateInput
  }

  export type KillEventScalarWhereWithAggregatesInput = {
    AND?: KillEventScalarWhereWithAggregatesInput | KillEventScalarWhereWithAggregatesInput[]
    OR?: KillEventScalarWhereWithAggregatesInput[]
    NOT?: KillEventScalarWhereWithAggregatesInput | KillEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"KillEvent"> | string
    timestamp?: DateTimeWithAggregatesFilter<"KillEvent"> | Date | string
    killerId?: StringWithAggregatesFilter<"KillEvent"> | string
    victimId?: StringWithAggregatesFilter<"KillEvent"> | string
    weapon?: StringWithAggregatesFilter<"KillEvent"> | string
    ammoType?: StringNullableWithAggregatesFilter<"KillEvent"> | string | null
    distance?: FloatWithAggregatesFilter<"KillEvent"> | number
    fatalHitZone?: StringNullableWithAggregatesFilter<"KillEvent"> | string | null
    killedPosX?: FloatWithAggregatesFilter<"KillEvent"> | number
    killedPosY?: FloatWithAggregatesFilter<"KillEvent"> | number
    killedPosZ?: FloatWithAggregatesFilter<"KillEvent"> | number
    killerPosX?: FloatWithAggregatesFilter<"KillEvent"> | number
    killerPosY?: FloatWithAggregatesFilter<"KillEvent"> | number
    killerPosZ?: FloatWithAggregatesFilter<"KillEvent"> | number
    locationName?: StringNullableWithAggregatesFilter<"KillEvent"> | string | null
    killerStreakAtKill?: IntWithAggregatesFilter<"KillEvent"> | number
    createdAt?: DateTimeWithAggregatesFilter<"KillEvent"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    playerId?: StringFilter<"Session"> | string
    connectedAt?: DateTimeFilter<"Session"> | Date | string
    disconnectedAt?: DateTimeNullableFilter<"Session"> | Date | string | null
    durationSeconds?: IntNullableFilter<"Session"> | number | null
    player?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    playerId?: SortOrder
    connectedAt?: SortOrder
    disconnectedAt?: SortOrderInput | SortOrder
    durationSeconds?: SortOrderInput | SortOrder
    player?: PlayerOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    playerId?: StringFilter<"Session"> | string
    connectedAt?: DateTimeFilter<"Session"> | Date | string
    disconnectedAt?: DateTimeNullableFilter<"Session"> | Date | string | null
    durationSeconds?: IntNullableFilter<"Session"> | number | null
    player?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
  }, "id">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    playerId?: SortOrder
    connectedAt?: SortOrder
    disconnectedAt?: SortOrderInput | SortOrder
    durationSeconds?: SortOrderInput | SortOrder
    _count?: SessionCountOrderByAggregateInput
    _avg?: SessionAvgOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
    _sum?: SessionSumOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    playerId?: StringWithAggregatesFilter<"Session"> | string
    connectedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    disconnectedAt?: DateTimeNullableWithAggregatesFilter<"Session"> | Date | string | null
    durationSeconds?: IntNullableWithAggregatesFilter<"Session"> | number | null
  }

  export type LeaderboardEntryWhereInput = {
    AND?: LeaderboardEntryWhereInput | LeaderboardEntryWhereInput[]
    OR?: LeaderboardEntryWhereInput[]
    NOT?: LeaderboardEntryWhereInput | LeaderboardEntryWhereInput[]
    id?: StringFilter<"LeaderboardEntry"> | string
    playerId?: StringFilter<"LeaderboardEntry"> | string
    periodStart?: DateTimeFilter<"LeaderboardEntry"> | Date | string
    periodEnd?: DateTimeNullableFilter<"LeaderboardEntry"> | Date | string | null
    kills?: IntFilter<"LeaderboardEntry"> | number
    deaths?: IntFilter<"LeaderboardEntry"> | number
    bestKillstreak?: IntFilter<"LeaderboardEntry"> | number
    longestKillDistance?: FloatFilter<"LeaderboardEntry"> | number
    totalSecondsOnline?: IntFilter<"LeaderboardEntry"> | number
    createdAt?: DateTimeFilter<"LeaderboardEntry"> | Date | string
    player?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
  }

  export type LeaderboardEntryOrderByWithRelationInput = {
    id?: SortOrder
    playerId?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrderInput | SortOrder
    kills?: SortOrder
    deaths?: SortOrder
    bestKillstreak?: SortOrder
    longestKillDistance?: SortOrder
    totalSecondsOnline?: SortOrder
    createdAt?: SortOrder
    player?: PlayerOrderByWithRelationInput
  }

  export type LeaderboardEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LeaderboardEntryWhereInput | LeaderboardEntryWhereInput[]
    OR?: LeaderboardEntryWhereInput[]
    NOT?: LeaderboardEntryWhereInput | LeaderboardEntryWhereInput[]
    playerId?: StringFilter<"LeaderboardEntry"> | string
    periodStart?: DateTimeFilter<"LeaderboardEntry"> | Date | string
    periodEnd?: DateTimeNullableFilter<"LeaderboardEntry"> | Date | string | null
    kills?: IntFilter<"LeaderboardEntry"> | number
    deaths?: IntFilter<"LeaderboardEntry"> | number
    bestKillstreak?: IntFilter<"LeaderboardEntry"> | number
    longestKillDistance?: FloatFilter<"LeaderboardEntry"> | number
    totalSecondsOnline?: IntFilter<"LeaderboardEntry"> | number
    createdAt?: DateTimeFilter<"LeaderboardEntry"> | Date | string
    player?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
  }, "id">

  export type LeaderboardEntryOrderByWithAggregationInput = {
    id?: SortOrder
    playerId?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrderInput | SortOrder
    kills?: SortOrder
    deaths?: SortOrder
    bestKillstreak?: SortOrder
    longestKillDistance?: SortOrder
    totalSecondsOnline?: SortOrder
    createdAt?: SortOrder
    _count?: LeaderboardEntryCountOrderByAggregateInput
    _avg?: LeaderboardEntryAvgOrderByAggregateInput
    _max?: LeaderboardEntryMaxOrderByAggregateInput
    _min?: LeaderboardEntryMinOrderByAggregateInput
    _sum?: LeaderboardEntrySumOrderByAggregateInput
  }

  export type LeaderboardEntryScalarWhereWithAggregatesInput = {
    AND?: LeaderboardEntryScalarWhereWithAggregatesInput | LeaderboardEntryScalarWhereWithAggregatesInput[]
    OR?: LeaderboardEntryScalarWhereWithAggregatesInput[]
    NOT?: LeaderboardEntryScalarWhereWithAggregatesInput | LeaderboardEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LeaderboardEntry"> | string
    playerId?: StringWithAggregatesFilter<"LeaderboardEntry"> | string
    periodStart?: DateTimeWithAggregatesFilter<"LeaderboardEntry"> | Date | string
    periodEnd?: DateTimeNullableWithAggregatesFilter<"LeaderboardEntry"> | Date | string | null
    kills?: IntWithAggregatesFilter<"LeaderboardEntry"> | number
    deaths?: IntWithAggregatesFilter<"LeaderboardEntry"> | number
    bestKillstreak?: IntWithAggregatesFilter<"LeaderboardEntry"> | number
    longestKillDistance?: FloatWithAggregatesFilter<"LeaderboardEntry"> | number
    totalSecondsOnline?: IntWithAggregatesFilter<"LeaderboardEntry"> | number
    createdAt?: DateTimeWithAggregatesFilter<"LeaderboardEntry"> | Date | string
  }

  export type PlayerCreateInput = {
    id?: string
    nitradoId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    killsPvp?: number
    deathsPvp?: number
    deathsPve?: number
    deathsSuicide?: number
    kdRatio?: number
    currentKillstreak?: number
    bestKillstreak?: number
    longestKillDistance?: number
    totalSecondsOnline?: number
    killsAsKiller?: KillEventCreateNestedManyWithoutKillerInput
    killsAsVictim?: KillEventCreateNestedManyWithoutVictimInput
    sessions?: SessionCreateNestedManyWithoutPlayerInput
    leaderboardEntries?: LeaderboardEntryCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUncheckedCreateInput = {
    id?: string
    nitradoId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    killsPvp?: number
    deathsPvp?: number
    deathsPve?: number
    deathsSuicide?: number
    kdRatio?: number
    currentKillstreak?: number
    bestKillstreak?: number
    longestKillDistance?: number
    totalSecondsOnline?: number
    killsAsKiller?: KillEventUncheckedCreateNestedManyWithoutKillerInput
    killsAsVictim?: KillEventUncheckedCreateNestedManyWithoutVictimInput
    sessions?: SessionUncheckedCreateNestedManyWithoutPlayerInput
    leaderboardEntries?: LeaderboardEntryUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nitradoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    killsPvp?: IntFieldUpdateOperationsInput | number
    deathsPvp?: IntFieldUpdateOperationsInput | number
    deathsPve?: IntFieldUpdateOperationsInput | number
    deathsSuicide?: IntFieldUpdateOperationsInput | number
    kdRatio?: FloatFieldUpdateOperationsInput | number
    currentKillstreak?: IntFieldUpdateOperationsInput | number
    bestKillstreak?: IntFieldUpdateOperationsInput | number
    longestKillDistance?: FloatFieldUpdateOperationsInput | number
    totalSecondsOnline?: IntFieldUpdateOperationsInput | number
    killsAsKiller?: KillEventUpdateManyWithoutKillerNestedInput
    killsAsVictim?: KillEventUpdateManyWithoutVictimNestedInput
    sessions?: SessionUpdateManyWithoutPlayerNestedInput
    leaderboardEntries?: LeaderboardEntryUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nitradoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    killsPvp?: IntFieldUpdateOperationsInput | number
    deathsPvp?: IntFieldUpdateOperationsInput | number
    deathsPve?: IntFieldUpdateOperationsInput | number
    deathsSuicide?: IntFieldUpdateOperationsInput | number
    kdRatio?: FloatFieldUpdateOperationsInput | number
    currentKillstreak?: IntFieldUpdateOperationsInput | number
    bestKillstreak?: IntFieldUpdateOperationsInput | number
    longestKillDistance?: FloatFieldUpdateOperationsInput | number
    totalSecondsOnline?: IntFieldUpdateOperationsInput | number
    killsAsKiller?: KillEventUncheckedUpdateManyWithoutKillerNestedInput
    killsAsVictim?: KillEventUncheckedUpdateManyWithoutVictimNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutPlayerNestedInput
    leaderboardEntries?: LeaderboardEntryUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerCreateManyInput = {
    id?: string
    nitradoId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    killsPvp?: number
    deathsPvp?: number
    deathsPve?: number
    deathsSuicide?: number
    kdRatio?: number
    currentKillstreak?: number
    bestKillstreak?: number
    longestKillDistance?: number
    totalSecondsOnline?: number
  }

  export type PlayerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nitradoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    killsPvp?: IntFieldUpdateOperationsInput | number
    deathsPvp?: IntFieldUpdateOperationsInput | number
    deathsPve?: IntFieldUpdateOperationsInput | number
    deathsSuicide?: IntFieldUpdateOperationsInput | number
    kdRatio?: FloatFieldUpdateOperationsInput | number
    currentKillstreak?: IntFieldUpdateOperationsInput | number
    bestKillstreak?: IntFieldUpdateOperationsInput | number
    longestKillDistance?: FloatFieldUpdateOperationsInput | number
    totalSecondsOnline?: IntFieldUpdateOperationsInput | number
  }

  export type PlayerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nitradoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    killsPvp?: IntFieldUpdateOperationsInput | number
    deathsPvp?: IntFieldUpdateOperationsInput | number
    deathsPve?: IntFieldUpdateOperationsInput | number
    deathsSuicide?: IntFieldUpdateOperationsInput | number
    kdRatio?: FloatFieldUpdateOperationsInput | number
    currentKillstreak?: IntFieldUpdateOperationsInput | number
    bestKillstreak?: IntFieldUpdateOperationsInput | number
    longestKillDistance?: FloatFieldUpdateOperationsInput | number
    totalSecondsOnline?: IntFieldUpdateOperationsInput | number
  }

  export type KillEventCreateInput = {
    id?: string
    timestamp: Date | string
    weapon: string
    ammoType?: string | null
    distance: number
    fatalHitZone?: string | null
    killedPosX: number
    killedPosY: number
    killedPosZ: number
    killerPosX: number
    killerPosY: number
    killerPosZ: number
    locationName?: string | null
    killerStreakAtKill?: number
    createdAt?: Date | string
    killer: PlayerCreateNestedOneWithoutKillsAsKillerInput
    victim: PlayerCreateNestedOneWithoutKillsAsVictimInput
  }

  export type KillEventUncheckedCreateInput = {
    id?: string
    timestamp: Date | string
    killerId: string
    victimId: string
    weapon: string
    ammoType?: string | null
    distance: number
    fatalHitZone?: string | null
    killedPosX: number
    killedPosY: number
    killedPosZ: number
    killerPosX: number
    killerPosY: number
    killerPosZ: number
    locationName?: string | null
    killerStreakAtKill?: number
    createdAt?: Date | string
  }

  export type KillEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    weapon?: StringFieldUpdateOperationsInput | string
    ammoType?: NullableStringFieldUpdateOperationsInput | string | null
    distance?: FloatFieldUpdateOperationsInput | number
    fatalHitZone?: NullableStringFieldUpdateOperationsInput | string | null
    killedPosX?: FloatFieldUpdateOperationsInput | number
    killedPosY?: FloatFieldUpdateOperationsInput | number
    killedPosZ?: FloatFieldUpdateOperationsInput | number
    killerPosX?: FloatFieldUpdateOperationsInput | number
    killerPosY?: FloatFieldUpdateOperationsInput | number
    killerPosZ?: FloatFieldUpdateOperationsInput | number
    locationName?: NullableStringFieldUpdateOperationsInput | string | null
    killerStreakAtKill?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    killer?: PlayerUpdateOneRequiredWithoutKillsAsKillerNestedInput
    victim?: PlayerUpdateOneRequiredWithoutKillsAsVictimNestedInput
  }

  export type KillEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    killerId?: StringFieldUpdateOperationsInput | string
    victimId?: StringFieldUpdateOperationsInput | string
    weapon?: StringFieldUpdateOperationsInput | string
    ammoType?: NullableStringFieldUpdateOperationsInput | string | null
    distance?: FloatFieldUpdateOperationsInput | number
    fatalHitZone?: NullableStringFieldUpdateOperationsInput | string | null
    killedPosX?: FloatFieldUpdateOperationsInput | number
    killedPosY?: FloatFieldUpdateOperationsInput | number
    killedPosZ?: FloatFieldUpdateOperationsInput | number
    killerPosX?: FloatFieldUpdateOperationsInput | number
    killerPosY?: FloatFieldUpdateOperationsInput | number
    killerPosZ?: FloatFieldUpdateOperationsInput | number
    locationName?: NullableStringFieldUpdateOperationsInput | string | null
    killerStreakAtKill?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KillEventCreateManyInput = {
    id?: string
    timestamp: Date | string
    killerId: string
    victimId: string
    weapon: string
    ammoType?: string | null
    distance: number
    fatalHitZone?: string | null
    killedPosX: number
    killedPosY: number
    killedPosZ: number
    killerPosX: number
    killerPosY: number
    killerPosZ: number
    locationName?: string | null
    killerStreakAtKill?: number
    createdAt?: Date | string
  }

  export type KillEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    weapon?: StringFieldUpdateOperationsInput | string
    ammoType?: NullableStringFieldUpdateOperationsInput | string | null
    distance?: FloatFieldUpdateOperationsInput | number
    fatalHitZone?: NullableStringFieldUpdateOperationsInput | string | null
    killedPosX?: FloatFieldUpdateOperationsInput | number
    killedPosY?: FloatFieldUpdateOperationsInput | number
    killedPosZ?: FloatFieldUpdateOperationsInput | number
    killerPosX?: FloatFieldUpdateOperationsInput | number
    killerPosY?: FloatFieldUpdateOperationsInput | number
    killerPosZ?: FloatFieldUpdateOperationsInput | number
    locationName?: NullableStringFieldUpdateOperationsInput | string | null
    killerStreakAtKill?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KillEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    killerId?: StringFieldUpdateOperationsInput | string
    victimId?: StringFieldUpdateOperationsInput | string
    weapon?: StringFieldUpdateOperationsInput | string
    ammoType?: NullableStringFieldUpdateOperationsInput | string | null
    distance?: FloatFieldUpdateOperationsInput | number
    fatalHitZone?: NullableStringFieldUpdateOperationsInput | string | null
    killedPosX?: FloatFieldUpdateOperationsInput | number
    killedPosY?: FloatFieldUpdateOperationsInput | number
    killedPosZ?: FloatFieldUpdateOperationsInput | number
    killerPosX?: FloatFieldUpdateOperationsInput | number
    killerPosY?: FloatFieldUpdateOperationsInput | number
    killerPosZ?: FloatFieldUpdateOperationsInput | number
    locationName?: NullableStringFieldUpdateOperationsInput | string | null
    killerStreakAtKill?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    connectedAt: Date | string
    disconnectedAt?: Date | string | null
    durationSeconds?: number | null
    player: PlayerCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    playerId: string
    connectedAt: Date | string
    disconnectedAt?: Date | string | null
    durationSeconds?: number | null
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    connectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    disconnectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    player?: PlayerUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    connectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    disconnectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationSeconds?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SessionCreateManyInput = {
    id?: string
    playerId: string
    connectedAt: Date | string
    disconnectedAt?: Date | string | null
    durationSeconds?: number | null
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    connectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    disconnectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationSeconds?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    connectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    disconnectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationSeconds?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LeaderboardEntryCreateInput = {
    id?: string
    periodStart: Date | string
    periodEnd?: Date | string | null
    kills?: number
    deaths?: number
    bestKillstreak?: number
    longestKillDistance?: number
    totalSecondsOnline?: number
    createdAt?: Date | string
    player: PlayerCreateNestedOneWithoutLeaderboardEntriesInput
  }

  export type LeaderboardEntryUncheckedCreateInput = {
    id?: string
    playerId: string
    periodStart: Date | string
    periodEnd?: Date | string | null
    kills?: number
    deaths?: number
    bestKillstreak?: number
    longestKillDistance?: number
    totalSecondsOnline?: number
    createdAt?: Date | string
  }

  export type LeaderboardEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    bestKillstreak?: IntFieldUpdateOperationsInput | number
    longestKillDistance?: FloatFieldUpdateOperationsInput | number
    totalSecondsOnline?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player?: PlayerUpdateOneRequiredWithoutLeaderboardEntriesNestedInput
  }

  export type LeaderboardEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    bestKillstreak?: IntFieldUpdateOperationsInput | number
    longestKillDistance?: FloatFieldUpdateOperationsInput | number
    totalSecondsOnline?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaderboardEntryCreateManyInput = {
    id?: string
    playerId: string
    periodStart: Date | string
    periodEnd?: Date | string | null
    kills?: number
    deaths?: number
    bestKillstreak?: number
    longestKillDistance?: number
    totalSecondsOnline?: number
    createdAt?: Date | string
  }

  export type LeaderboardEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    bestKillstreak?: IntFieldUpdateOperationsInput | number
    longestKillDistance?: FloatFieldUpdateOperationsInput | number
    totalSecondsOnline?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaderboardEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    bestKillstreak?: IntFieldUpdateOperationsInput | number
    longestKillDistance?: FloatFieldUpdateOperationsInput | number
    totalSecondsOnline?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type KillEventListRelationFilter = {
    every?: KillEventWhereInput
    some?: KillEventWhereInput
    none?: KillEventWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type LeaderboardEntryListRelationFilter = {
    every?: LeaderboardEntryWhereInput
    some?: LeaderboardEntryWhereInput
    none?: LeaderboardEntryWhereInput
  }

  export type KillEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LeaderboardEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlayerCountOrderByAggregateInput = {
    id?: SortOrder
    nitradoId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    killsPvp?: SortOrder
    deathsPvp?: SortOrder
    deathsPve?: SortOrder
    deathsSuicide?: SortOrder
    kdRatio?: SortOrder
    currentKillstreak?: SortOrder
    bestKillstreak?: SortOrder
    longestKillDistance?: SortOrder
    totalSecondsOnline?: SortOrder
  }

  export type PlayerAvgOrderByAggregateInput = {
    killsPvp?: SortOrder
    deathsPvp?: SortOrder
    deathsPve?: SortOrder
    deathsSuicide?: SortOrder
    kdRatio?: SortOrder
    currentKillstreak?: SortOrder
    bestKillstreak?: SortOrder
    longestKillDistance?: SortOrder
    totalSecondsOnline?: SortOrder
  }

  export type PlayerMaxOrderByAggregateInput = {
    id?: SortOrder
    nitradoId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    killsPvp?: SortOrder
    deathsPvp?: SortOrder
    deathsPve?: SortOrder
    deathsSuicide?: SortOrder
    kdRatio?: SortOrder
    currentKillstreak?: SortOrder
    bestKillstreak?: SortOrder
    longestKillDistance?: SortOrder
    totalSecondsOnline?: SortOrder
  }

  export type PlayerMinOrderByAggregateInput = {
    id?: SortOrder
    nitradoId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    killsPvp?: SortOrder
    deathsPvp?: SortOrder
    deathsPve?: SortOrder
    deathsSuicide?: SortOrder
    kdRatio?: SortOrder
    currentKillstreak?: SortOrder
    bestKillstreak?: SortOrder
    longestKillDistance?: SortOrder
    totalSecondsOnline?: SortOrder
  }

  export type PlayerSumOrderByAggregateInput = {
    killsPvp?: SortOrder
    deathsPvp?: SortOrder
    deathsPve?: SortOrder
    deathsSuicide?: SortOrder
    kdRatio?: SortOrder
    currentKillstreak?: SortOrder
    bestKillstreak?: SortOrder
    longestKillDistance?: SortOrder
    totalSecondsOnline?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type PlayerScalarRelationFilter = {
    is?: PlayerWhereInput
    isNot?: PlayerWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type KillEventCountOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    killerId?: SortOrder
    victimId?: SortOrder
    weapon?: SortOrder
    ammoType?: SortOrder
    distance?: SortOrder
    fatalHitZone?: SortOrder
    killedPosX?: SortOrder
    killedPosY?: SortOrder
    killedPosZ?: SortOrder
    killerPosX?: SortOrder
    killerPosY?: SortOrder
    killerPosZ?: SortOrder
    locationName?: SortOrder
    killerStreakAtKill?: SortOrder
    createdAt?: SortOrder
  }

  export type KillEventAvgOrderByAggregateInput = {
    distance?: SortOrder
    killedPosX?: SortOrder
    killedPosY?: SortOrder
    killedPosZ?: SortOrder
    killerPosX?: SortOrder
    killerPosY?: SortOrder
    killerPosZ?: SortOrder
    killerStreakAtKill?: SortOrder
  }

  export type KillEventMaxOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    killerId?: SortOrder
    victimId?: SortOrder
    weapon?: SortOrder
    ammoType?: SortOrder
    distance?: SortOrder
    fatalHitZone?: SortOrder
    killedPosX?: SortOrder
    killedPosY?: SortOrder
    killedPosZ?: SortOrder
    killerPosX?: SortOrder
    killerPosY?: SortOrder
    killerPosZ?: SortOrder
    locationName?: SortOrder
    killerStreakAtKill?: SortOrder
    createdAt?: SortOrder
  }

  export type KillEventMinOrderByAggregateInput = {
    id?: SortOrder
    timestamp?: SortOrder
    killerId?: SortOrder
    victimId?: SortOrder
    weapon?: SortOrder
    ammoType?: SortOrder
    distance?: SortOrder
    fatalHitZone?: SortOrder
    killedPosX?: SortOrder
    killedPosY?: SortOrder
    killedPosZ?: SortOrder
    killerPosX?: SortOrder
    killerPosY?: SortOrder
    killerPosZ?: SortOrder
    locationName?: SortOrder
    killerStreakAtKill?: SortOrder
    createdAt?: SortOrder
  }

  export type KillEventSumOrderByAggregateInput = {
    distance?: SortOrder
    killedPosX?: SortOrder
    killedPosY?: SortOrder
    killedPosZ?: SortOrder
    killerPosX?: SortOrder
    killerPosY?: SortOrder
    killerPosZ?: SortOrder
    killerStreakAtKill?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    connectedAt?: SortOrder
    disconnectedAt?: SortOrder
    durationSeconds?: SortOrder
  }

  export type SessionAvgOrderByAggregateInput = {
    durationSeconds?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    connectedAt?: SortOrder
    disconnectedAt?: SortOrder
    durationSeconds?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    connectedAt?: SortOrder
    disconnectedAt?: SortOrder
    durationSeconds?: SortOrder
  }

  export type SessionSumOrderByAggregateInput = {
    durationSeconds?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type LeaderboardEntryCountOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    kills?: SortOrder
    deaths?: SortOrder
    bestKillstreak?: SortOrder
    longestKillDistance?: SortOrder
    totalSecondsOnline?: SortOrder
    createdAt?: SortOrder
  }

  export type LeaderboardEntryAvgOrderByAggregateInput = {
    kills?: SortOrder
    deaths?: SortOrder
    bestKillstreak?: SortOrder
    longestKillDistance?: SortOrder
    totalSecondsOnline?: SortOrder
  }

  export type LeaderboardEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    kills?: SortOrder
    deaths?: SortOrder
    bestKillstreak?: SortOrder
    longestKillDistance?: SortOrder
    totalSecondsOnline?: SortOrder
    createdAt?: SortOrder
  }

  export type LeaderboardEntryMinOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    periodStart?: SortOrder
    periodEnd?: SortOrder
    kills?: SortOrder
    deaths?: SortOrder
    bestKillstreak?: SortOrder
    longestKillDistance?: SortOrder
    totalSecondsOnline?: SortOrder
    createdAt?: SortOrder
  }

  export type LeaderboardEntrySumOrderByAggregateInput = {
    kills?: SortOrder
    deaths?: SortOrder
    bestKillstreak?: SortOrder
    longestKillDistance?: SortOrder
    totalSecondsOnline?: SortOrder
  }

  export type KillEventCreateNestedManyWithoutKillerInput = {
    create?: XOR<KillEventCreateWithoutKillerInput, KillEventUncheckedCreateWithoutKillerInput> | KillEventCreateWithoutKillerInput[] | KillEventUncheckedCreateWithoutKillerInput[]
    connectOrCreate?: KillEventCreateOrConnectWithoutKillerInput | KillEventCreateOrConnectWithoutKillerInput[]
    createMany?: KillEventCreateManyKillerInputEnvelope
    connect?: KillEventWhereUniqueInput | KillEventWhereUniqueInput[]
  }

  export type KillEventCreateNestedManyWithoutVictimInput = {
    create?: XOR<KillEventCreateWithoutVictimInput, KillEventUncheckedCreateWithoutVictimInput> | KillEventCreateWithoutVictimInput[] | KillEventUncheckedCreateWithoutVictimInput[]
    connectOrCreate?: KillEventCreateOrConnectWithoutVictimInput | KillEventCreateOrConnectWithoutVictimInput[]
    createMany?: KillEventCreateManyVictimInputEnvelope
    connect?: KillEventWhereUniqueInput | KillEventWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutPlayerInput = {
    create?: XOR<SessionCreateWithoutPlayerInput, SessionUncheckedCreateWithoutPlayerInput> | SessionCreateWithoutPlayerInput[] | SessionUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutPlayerInput | SessionCreateOrConnectWithoutPlayerInput[]
    createMany?: SessionCreateManyPlayerInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type LeaderboardEntryCreateNestedManyWithoutPlayerInput = {
    create?: XOR<LeaderboardEntryCreateWithoutPlayerInput, LeaderboardEntryUncheckedCreateWithoutPlayerInput> | LeaderboardEntryCreateWithoutPlayerInput[] | LeaderboardEntryUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: LeaderboardEntryCreateOrConnectWithoutPlayerInput | LeaderboardEntryCreateOrConnectWithoutPlayerInput[]
    createMany?: LeaderboardEntryCreateManyPlayerInputEnvelope
    connect?: LeaderboardEntryWhereUniqueInput | LeaderboardEntryWhereUniqueInput[]
  }

  export type KillEventUncheckedCreateNestedManyWithoutKillerInput = {
    create?: XOR<KillEventCreateWithoutKillerInput, KillEventUncheckedCreateWithoutKillerInput> | KillEventCreateWithoutKillerInput[] | KillEventUncheckedCreateWithoutKillerInput[]
    connectOrCreate?: KillEventCreateOrConnectWithoutKillerInput | KillEventCreateOrConnectWithoutKillerInput[]
    createMany?: KillEventCreateManyKillerInputEnvelope
    connect?: KillEventWhereUniqueInput | KillEventWhereUniqueInput[]
  }

  export type KillEventUncheckedCreateNestedManyWithoutVictimInput = {
    create?: XOR<KillEventCreateWithoutVictimInput, KillEventUncheckedCreateWithoutVictimInput> | KillEventCreateWithoutVictimInput[] | KillEventUncheckedCreateWithoutVictimInput[]
    connectOrCreate?: KillEventCreateOrConnectWithoutVictimInput | KillEventCreateOrConnectWithoutVictimInput[]
    createMany?: KillEventCreateManyVictimInputEnvelope
    connect?: KillEventWhereUniqueInput | KillEventWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: XOR<SessionCreateWithoutPlayerInput, SessionUncheckedCreateWithoutPlayerInput> | SessionCreateWithoutPlayerInput[] | SessionUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutPlayerInput | SessionCreateOrConnectWithoutPlayerInput[]
    createMany?: SessionCreateManyPlayerInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type LeaderboardEntryUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: XOR<LeaderboardEntryCreateWithoutPlayerInput, LeaderboardEntryUncheckedCreateWithoutPlayerInput> | LeaderboardEntryCreateWithoutPlayerInput[] | LeaderboardEntryUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: LeaderboardEntryCreateOrConnectWithoutPlayerInput | LeaderboardEntryCreateOrConnectWithoutPlayerInput[]
    createMany?: LeaderboardEntryCreateManyPlayerInputEnvelope
    connect?: LeaderboardEntryWhereUniqueInput | LeaderboardEntryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type KillEventUpdateManyWithoutKillerNestedInput = {
    create?: XOR<KillEventCreateWithoutKillerInput, KillEventUncheckedCreateWithoutKillerInput> | KillEventCreateWithoutKillerInput[] | KillEventUncheckedCreateWithoutKillerInput[]
    connectOrCreate?: KillEventCreateOrConnectWithoutKillerInput | KillEventCreateOrConnectWithoutKillerInput[]
    upsert?: KillEventUpsertWithWhereUniqueWithoutKillerInput | KillEventUpsertWithWhereUniqueWithoutKillerInput[]
    createMany?: KillEventCreateManyKillerInputEnvelope
    set?: KillEventWhereUniqueInput | KillEventWhereUniqueInput[]
    disconnect?: KillEventWhereUniqueInput | KillEventWhereUniqueInput[]
    delete?: KillEventWhereUniqueInput | KillEventWhereUniqueInput[]
    connect?: KillEventWhereUniqueInput | KillEventWhereUniqueInput[]
    update?: KillEventUpdateWithWhereUniqueWithoutKillerInput | KillEventUpdateWithWhereUniqueWithoutKillerInput[]
    updateMany?: KillEventUpdateManyWithWhereWithoutKillerInput | KillEventUpdateManyWithWhereWithoutKillerInput[]
    deleteMany?: KillEventScalarWhereInput | KillEventScalarWhereInput[]
  }

  export type KillEventUpdateManyWithoutVictimNestedInput = {
    create?: XOR<KillEventCreateWithoutVictimInput, KillEventUncheckedCreateWithoutVictimInput> | KillEventCreateWithoutVictimInput[] | KillEventUncheckedCreateWithoutVictimInput[]
    connectOrCreate?: KillEventCreateOrConnectWithoutVictimInput | KillEventCreateOrConnectWithoutVictimInput[]
    upsert?: KillEventUpsertWithWhereUniqueWithoutVictimInput | KillEventUpsertWithWhereUniqueWithoutVictimInput[]
    createMany?: KillEventCreateManyVictimInputEnvelope
    set?: KillEventWhereUniqueInput | KillEventWhereUniqueInput[]
    disconnect?: KillEventWhereUniqueInput | KillEventWhereUniqueInput[]
    delete?: KillEventWhereUniqueInput | KillEventWhereUniqueInput[]
    connect?: KillEventWhereUniqueInput | KillEventWhereUniqueInput[]
    update?: KillEventUpdateWithWhereUniqueWithoutVictimInput | KillEventUpdateWithWhereUniqueWithoutVictimInput[]
    updateMany?: KillEventUpdateManyWithWhereWithoutVictimInput | KillEventUpdateManyWithWhereWithoutVictimInput[]
    deleteMany?: KillEventScalarWhereInput | KillEventScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<SessionCreateWithoutPlayerInput, SessionUncheckedCreateWithoutPlayerInput> | SessionCreateWithoutPlayerInput[] | SessionUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutPlayerInput | SessionCreateOrConnectWithoutPlayerInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutPlayerInput | SessionUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: SessionCreateManyPlayerInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutPlayerInput | SessionUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutPlayerInput | SessionUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type LeaderboardEntryUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<LeaderboardEntryCreateWithoutPlayerInput, LeaderboardEntryUncheckedCreateWithoutPlayerInput> | LeaderboardEntryCreateWithoutPlayerInput[] | LeaderboardEntryUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: LeaderboardEntryCreateOrConnectWithoutPlayerInput | LeaderboardEntryCreateOrConnectWithoutPlayerInput[]
    upsert?: LeaderboardEntryUpsertWithWhereUniqueWithoutPlayerInput | LeaderboardEntryUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: LeaderboardEntryCreateManyPlayerInputEnvelope
    set?: LeaderboardEntryWhereUniqueInput | LeaderboardEntryWhereUniqueInput[]
    disconnect?: LeaderboardEntryWhereUniqueInput | LeaderboardEntryWhereUniqueInput[]
    delete?: LeaderboardEntryWhereUniqueInput | LeaderboardEntryWhereUniqueInput[]
    connect?: LeaderboardEntryWhereUniqueInput | LeaderboardEntryWhereUniqueInput[]
    update?: LeaderboardEntryUpdateWithWhereUniqueWithoutPlayerInput | LeaderboardEntryUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: LeaderboardEntryUpdateManyWithWhereWithoutPlayerInput | LeaderboardEntryUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: LeaderboardEntryScalarWhereInput | LeaderboardEntryScalarWhereInput[]
  }

  export type KillEventUncheckedUpdateManyWithoutKillerNestedInput = {
    create?: XOR<KillEventCreateWithoutKillerInput, KillEventUncheckedCreateWithoutKillerInput> | KillEventCreateWithoutKillerInput[] | KillEventUncheckedCreateWithoutKillerInput[]
    connectOrCreate?: KillEventCreateOrConnectWithoutKillerInput | KillEventCreateOrConnectWithoutKillerInput[]
    upsert?: KillEventUpsertWithWhereUniqueWithoutKillerInput | KillEventUpsertWithWhereUniqueWithoutKillerInput[]
    createMany?: KillEventCreateManyKillerInputEnvelope
    set?: KillEventWhereUniqueInput | KillEventWhereUniqueInput[]
    disconnect?: KillEventWhereUniqueInput | KillEventWhereUniqueInput[]
    delete?: KillEventWhereUniqueInput | KillEventWhereUniqueInput[]
    connect?: KillEventWhereUniqueInput | KillEventWhereUniqueInput[]
    update?: KillEventUpdateWithWhereUniqueWithoutKillerInput | KillEventUpdateWithWhereUniqueWithoutKillerInput[]
    updateMany?: KillEventUpdateManyWithWhereWithoutKillerInput | KillEventUpdateManyWithWhereWithoutKillerInput[]
    deleteMany?: KillEventScalarWhereInput | KillEventScalarWhereInput[]
  }

  export type KillEventUncheckedUpdateManyWithoutVictimNestedInput = {
    create?: XOR<KillEventCreateWithoutVictimInput, KillEventUncheckedCreateWithoutVictimInput> | KillEventCreateWithoutVictimInput[] | KillEventUncheckedCreateWithoutVictimInput[]
    connectOrCreate?: KillEventCreateOrConnectWithoutVictimInput | KillEventCreateOrConnectWithoutVictimInput[]
    upsert?: KillEventUpsertWithWhereUniqueWithoutVictimInput | KillEventUpsertWithWhereUniqueWithoutVictimInput[]
    createMany?: KillEventCreateManyVictimInputEnvelope
    set?: KillEventWhereUniqueInput | KillEventWhereUniqueInput[]
    disconnect?: KillEventWhereUniqueInput | KillEventWhereUniqueInput[]
    delete?: KillEventWhereUniqueInput | KillEventWhereUniqueInput[]
    connect?: KillEventWhereUniqueInput | KillEventWhereUniqueInput[]
    update?: KillEventUpdateWithWhereUniqueWithoutVictimInput | KillEventUpdateWithWhereUniqueWithoutVictimInput[]
    updateMany?: KillEventUpdateManyWithWhereWithoutVictimInput | KillEventUpdateManyWithWhereWithoutVictimInput[]
    deleteMany?: KillEventScalarWhereInput | KillEventScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<SessionCreateWithoutPlayerInput, SessionUncheckedCreateWithoutPlayerInput> | SessionCreateWithoutPlayerInput[] | SessionUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutPlayerInput | SessionCreateOrConnectWithoutPlayerInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutPlayerInput | SessionUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: SessionCreateManyPlayerInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutPlayerInput | SessionUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutPlayerInput | SessionUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type LeaderboardEntryUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<LeaderboardEntryCreateWithoutPlayerInput, LeaderboardEntryUncheckedCreateWithoutPlayerInput> | LeaderboardEntryCreateWithoutPlayerInput[] | LeaderboardEntryUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: LeaderboardEntryCreateOrConnectWithoutPlayerInput | LeaderboardEntryCreateOrConnectWithoutPlayerInput[]
    upsert?: LeaderboardEntryUpsertWithWhereUniqueWithoutPlayerInput | LeaderboardEntryUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: LeaderboardEntryCreateManyPlayerInputEnvelope
    set?: LeaderboardEntryWhereUniqueInput | LeaderboardEntryWhereUniqueInput[]
    disconnect?: LeaderboardEntryWhereUniqueInput | LeaderboardEntryWhereUniqueInput[]
    delete?: LeaderboardEntryWhereUniqueInput | LeaderboardEntryWhereUniqueInput[]
    connect?: LeaderboardEntryWhereUniqueInput | LeaderboardEntryWhereUniqueInput[]
    update?: LeaderboardEntryUpdateWithWhereUniqueWithoutPlayerInput | LeaderboardEntryUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: LeaderboardEntryUpdateManyWithWhereWithoutPlayerInput | LeaderboardEntryUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: LeaderboardEntryScalarWhereInput | LeaderboardEntryScalarWhereInput[]
  }

  export type PlayerCreateNestedOneWithoutKillsAsKillerInput = {
    create?: XOR<PlayerCreateWithoutKillsAsKillerInput, PlayerUncheckedCreateWithoutKillsAsKillerInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutKillsAsKillerInput
    connect?: PlayerWhereUniqueInput
  }

  export type PlayerCreateNestedOneWithoutKillsAsVictimInput = {
    create?: XOR<PlayerCreateWithoutKillsAsVictimInput, PlayerUncheckedCreateWithoutKillsAsVictimInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutKillsAsVictimInput
    connect?: PlayerWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PlayerUpdateOneRequiredWithoutKillsAsKillerNestedInput = {
    create?: XOR<PlayerCreateWithoutKillsAsKillerInput, PlayerUncheckedCreateWithoutKillsAsKillerInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutKillsAsKillerInput
    upsert?: PlayerUpsertWithoutKillsAsKillerInput
    connect?: PlayerWhereUniqueInput
    update?: XOR<XOR<PlayerUpdateToOneWithWhereWithoutKillsAsKillerInput, PlayerUpdateWithoutKillsAsKillerInput>, PlayerUncheckedUpdateWithoutKillsAsKillerInput>
  }

  export type PlayerUpdateOneRequiredWithoutKillsAsVictimNestedInput = {
    create?: XOR<PlayerCreateWithoutKillsAsVictimInput, PlayerUncheckedCreateWithoutKillsAsVictimInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutKillsAsVictimInput
    upsert?: PlayerUpsertWithoutKillsAsVictimInput
    connect?: PlayerWhereUniqueInput
    update?: XOR<XOR<PlayerUpdateToOneWithWhereWithoutKillsAsVictimInput, PlayerUpdateWithoutKillsAsVictimInput>, PlayerUncheckedUpdateWithoutKillsAsVictimInput>
  }

  export type PlayerCreateNestedOneWithoutSessionsInput = {
    create?: XOR<PlayerCreateWithoutSessionsInput, PlayerUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutSessionsInput
    connect?: PlayerWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PlayerUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<PlayerCreateWithoutSessionsInput, PlayerUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutSessionsInput
    upsert?: PlayerUpsertWithoutSessionsInput
    connect?: PlayerWhereUniqueInput
    update?: XOR<XOR<PlayerUpdateToOneWithWhereWithoutSessionsInput, PlayerUpdateWithoutSessionsInput>, PlayerUncheckedUpdateWithoutSessionsInput>
  }

  export type PlayerCreateNestedOneWithoutLeaderboardEntriesInput = {
    create?: XOR<PlayerCreateWithoutLeaderboardEntriesInput, PlayerUncheckedCreateWithoutLeaderboardEntriesInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutLeaderboardEntriesInput
    connect?: PlayerWhereUniqueInput
  }

  export type PlayerUpdateOneRequiredWithoutLeaderboardEntriesNestedInput = {
    create?: XOR<PlayerCreateWithoutLeaderboardEntriesInput, PlayerUncheckedCreateWithoutLeaderboardEntriesInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutLeaderboardEntriesInput
    upsert?: PlayerUpsertWithoutLeaderboardEntriesInput
    connect?: PlayerWhereUniqueInput
    update?: XOR<XOR<PlayerUpdateToOneWithWhereWithoutLeaderboardEntriesInput, PlayerUpdateWithoutLeaderboardEntriesInput>, PlayerUncheckedUpdateWithoutLeaderboardEntriesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type KillEventCreateWithoutKillerInput = {
    id?: string
    timestamp: Date | string
    weapon: string
    ammoType?: string | null
    distance: number
    fatalHitZone?: string | null
    killedPosX: number
    killedPosY: number
    killedPosZ: number
    killerPosX: number
    killerPosY: number
    killerPosZ: number
    locationName?: string | null
    killerStreakAtKill?: number
    createdAt?: Date | string
    victim: PlayerCreateNestedOneWithoutKillsAsVictimInput
  }

  export type KillEventUncheckedCreateWithoutKillerInput = {
    id?: string
    timestamp: Date | string
    victimId: string
    weapon: string
    ammoType?: string | null
    distance: number
    fatalHitZone?: string | null
    killedPosX: number
    killedPosY: number
    killedPosZ: number
    killerPosX: number
    killerPosY: number
    killerPosZ: number
    locationName?: string | null
    killerStreakAtKill?: number
    createdAt?: Date | string
  }

  export type KillEventCreateOrConnectWithoutKillerInput = {
    where: KillEventWhereUniqueInput
    create: XOR<KillEventCreateWithoutKillerInput, KillEventUncheckedCreateWithoutKillerInput>
  }

  export type KillEventCreateManyKillerInputEnvelope = {
    data: KillEventCreateManyKillerInput | KillEventCreateManyKillerInput[]
    skipDuplicates?: boolean
  }

  export type KillEventCreateWithoutVictimInput = {
    id?: string
    timestamp: Date | string
    weapon: string
    ammoType?: string | null
    distance: number
    fatalHitZone?: string | null
    killedPosX: number
    killedPosY: number
    killedPosZ: number
    killerPosX: number
    killerPosY: number
    killerPosZ: number
    locationName?: string | null
    killerStreakAtKill?: number
    createdAt?: Date | string
    killer: PlayerCreateNestedOneWithoutKillsAsKillerInput
  }

  export type KillEventUncheckedCreateWithoutVictimInput = {
    id?: string
    timestamp: Date | string
    killerId: string
    weapon: string
    ammoType?: string | null
    distance: number
    fatalHitZone?: string | null
    killedPosX: number
    killedPosY: number
    killedPosZ: number
    killerPosX: number
    killerPosY: number
    killerPosZ: number
    locationName?: string | null
    killerStreakAtKill?: number
    createdAt?: Date | string
  }

  export type KillEventCreateOrConnectWithoutVictimInput = {
    where: KillEventWhereUniqueInput
    create: XOR<KillEventCreateWithoutVictimInput, KillEventUncheckedCreateWithoutVictimInput>
  }

  export type KillEventCreateManyVictimInputEnvelope = {
    data: KillEventCreateManyVictimInput | KillEventCreateManyVictimInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutPlayerInput = {
    id?: string
    connectedAt: Date | string
    disconnectedAt?: Date | string | null
    durationSeconds?: number | null
  }

  export type SessionUncheckedCreateWithoutPlayerInput = {
    id?: string
    connectedAt: Date | string
    disconnectedAt?: Date | string | null
    durationSeconds?: number | null
  }

  export type SessionCreateOrConnectWithoutPlayerInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutPlayerInput, SessionUncheckedCreateWithoutPlayerInput>
  }

  export type SessionCreateManyPlayerInputEnvelope = {
    data: SessionCreateManyPlayerInput | SessionCreateManyPlayerInput[]
    skipDuplicates?: boolean
  }

  export type LeaderboardEntryCreateWithoutPlayerInput = {
    id?: string
    periodStart: Date | string
    periodEnd?: Date | string | null
    kills?: number
    deaths?: number
    bestKillstreak?: number
    longestKillDistance?: number
    totalSecondsOnline?: number
    createdAt?: Date | string
  }

  export type LeaderboardEntryUncheckedCreateWithoutPlayerInput = {
    id?: string
    periodStart: Date | string
    periodEnd?: Date | string | null
    kills?: number
    deaths?: number
    bestKillstreak?: number
    longestKillDistance?: number
    totalSecondsOnline?: number
    createdAt?: Date | string
  }

  export type LeaderboardEntryCreateOrConnectWithoutPlayerInput = {
    where: LeaderboardEntryWhereUniqueInput
    create: XOR<LeaderboardEntryCreateWithoutPlayerInput, LeaderboardEntryUncheckedCreateWithoutPlayerInput>
  }

  export type LeaderboardEntryCreateManyPlayerInputEnvelope = {
    data: LeaderboardEntryCreateManyPlayerInput | LeaderboardEntryCreateManyPlayerInput[]
    skipDuplicates?: boolean
  }

  export type KillEventUpsertWithWhereUniqueWithoutKillerInput = {
    where: KillEventWhereUniqueInput
    update: XOR<KillEventUpdateWithoutKillerInput, KillEventUncheckedUpdateWithoutKillerInput>
    create: XOR<KillEventCreateWithoutKillerInput, KillEventUncheckedCreateWithoutKillerInput>
  }

  export type KillEventUpdateWithWhereUniqueWithoutKillerInput = {
    where: KillEventWhereUniqueInput
    data: XOR<KillEventUpdateWithoutKillerInput, KillEventUncheckedUpdateWithoutKillerInput>
  }

  export type KillEventUpdateManyWithWhereWithoutKillerInput = {
    where: KillEventScalarWhereInput
    data: XOR<KillEventUpdateManyMutationInput, KillEventUncheckedUpdateManyWithoutKillerInput>
  }

  export type KillEventScalarWhereInput = {
    AND?: KillEventScalarWhereInput | KillEventScalarWhereInput[]
    OR?: KillEventScalarWhereInput[]
    NOT?: KillEventScalarWhereInput | KillEventScalarWhereInput[]
    id?: StringFilter<"KillEvent"> | string
    timestamp?: DateTimeFilter<"KillEvent"> | Date | string
    killerId?: StringFilter<"KillEvent"> | string
    victimId?: StringFilter<"KillEvent"> | string
    weapon?: StringFilter<"KillEvent"> | string
    ammoType?: StringNullableFilter<"KillEvent"> | string | null
    distance?: FloatFilter<"KillEvent"> | number
    fatalHitZone?: StringNullableFilter<"KillEvent"> | string | null
    killedPosX?: FloatFilter<"KillEvent"> | number
    killedPosY?: FloatFilter<"KillEvent"> | number
    killedPosZ?: FloatFilter<"KillEvent"> | number
    killerPosX?: FloatFilter<"KillEvent"> | number
    killerPosY?: FloatFilter<"KillEvent"> | number
    killerPosZ?: FloatFilter<"KillEvent"> | number
    locationName?: StringNullableFilter<"KillEvent"> | string | null
    killerStreakAtKill?: IntFilter<"KillEvent"> | number
    createdAt?: DateTimeFilter<"KillEvent"> | Date | string
  }

  export type KillEventUpsertWithWhereUniqueWithoutVictimInput = {
    where: KillEventWhereUniqueInput
    update: XOR<KillEventUpdateWithoutVictimInput, KillEventUncheckedUpdateWithoutVictimInput>
    create: XOR<KillEventCreateWithoutVictimInput, KillEventUncheckedCreateWithoutVictimInput>
  }

  export type KillEventUpdateWithWhereUniqueWithoutVictimInput = {
    where: KillEventWhereUniqueInput
    data: XOR<KillEventUpdateWithoutVictimInput, KillEventUncheckedUpdateWithoutVictimInput>
  }

  export type KillEventUpdateManyWithWhereWithoutVictimInput = {
    where: KillEventScalarWhereInput
    data: XOR<KillEventUpdateManyMutationInput, KillEventUncheckedUpdateManyWithoutVictimInput>
  }

  export type SessionUpsertWithWhereUniqueWithoutPlayerInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutPlayerInput, SessionUncheckedUpdateWithoutPlayerInput>
    create: XOR<SessionCreateWithoutPlayerInput, SessionUncheckedCreateWithoutPlayerInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutPlayerInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutPlayerInput, SessionUncheckedUpdateWithoutPlayerInput>
  }

  export type SessionUpdateManyWithWhereWithoutPlayerInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutPlayerInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    playerId?: StringFilter<"Session"> | string
    connectedAt?: DateTimeFilter<"Session"> | Date | string
    disconnectedAt?: DateTimeNullableFilter<"Session"> | Date | string | null
    durationSeconds?: IntNullableFilter<"Session"> | number | null
  }

  export type LeaderboardEntryUpsertWithWhereUniqueWithoutPlayerInput = {
    where: LeaderboardEntryWhereUniqueInput
    update: XOR<LeaderboardEntryUpdateWithoutPlayerInput, LeaderboardEntryUncheckedUpdateWithoutPlayerInput>
    create: XOR<LeaderboardEntryCreateWithoutPlayerInput, LeaderboardEntryUncheckedCreateWithoutPlayerInput>
  }

  export type LeaderboardEntryUpdateWithWhereUniqueWithoutPlayerInput = {
    where: LeaderboardEntryWhereUniqueInput
    data: XOR<LeaderboardEntryUpdateWithoutPlayerInput, LeaderboardEntryUncheckedUpdateWithoutPlayerInput>
  }

  export type LeaderboardEntryUpdateManyWithWhereWithoutPlayerInput = {
    where: LeaderboardEntryScalarWhereInput
    data: XOR<LeaderboardEntryUpdateManyMutationInput, LeaderboardEntryUncheckedUpdateManyWithoutPlayerInput>
  }

  export type LeaderboardEntryScalarWhereInput = {
    AND?: LeaderboardEntryScalarWhereInput | LeaderboardEntryScalarWhereInput[]
    OR?: LeaderboardEntryScalarWhereInput[]
    NOT?: LeaderboardEntryScalarWhereInput | LeaderboardEntryScalarWhereInput[]
    id?: StringFilter<"LeaderboardEntry"> | string
    playerId?: StringFilter<"LeaderboardEntry"> | string
    periodStart?: DateTimeFilter<"LeaderboardEntry"> | Date | string
    periodEnd?: DateTimeNullableFilter<"LeaderboardEntry"> | Date | string | null
    kills?: IntFilter<"LeaderboardEntry"> | number
    deaths?: IntFilter<"LeaderboardEntry"> | number
    bestKillstreak?: IntFilter<"LeaderboardEntry"> | number
    longestKillDistance?: FloatFilter<"LeaderboardEntry"> | number
    totalSecondsOnline?: IntFilter<"LeaderboardEntry"> | number
    createdAt?: DateTimeFilter<"LeaderboardEntry"> | Date | string
  }

  export type PlayerCreateWithoutKillsAsKillerInput = {
    id?: string
    nitradoId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    killsPvp?: number
    deathsPvp?: number
    deathsPve?: number
    deathsSuicide?: number
    kdRatio?: number
    currentKillstreak?: number
    bestKillstreak?: number
    longestKillDistance?: number
    totalSecondsOnline?: number
    killsAsVictim?: KillEventCreateNestedManyWithoutVictimInput
    sessions?: SessionCreateNestedManyWithoutPlayerInput
    leaderboardEntries?: LeaderboardEntryCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUncheckedCreateWithoutKillsAsKillerInput = {
    id?: string
    nitradoId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    killsPvp?: number
    deathsPvp?: number
    deathsPve?: number
    deathsSuicide?: number
    kdRatio?: number
    currentKillstreak?: number
    bestKillstreak?: number
    longestKillDistance?: number
    totalSecondsOnline?: number
    killsAsVictim?: KillEventUncheckedCreateNestedManyWithoutVictimInput
    sessions?: SessionUncheckedCreateNestedManyWithoutPlayerInput
    leaderboardEntries?: LeaderboardEntryUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type PlayerCreateOrConnectWithoutKillsAsKillerInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutKillsAsKillerInput, PlayerUncheckedCreateWithoutKillsAsKillerInput>
  }

  export type PlayerCreateWithoutKillsAsVictimInput = {
    id?: string
    nitradoId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    killsPvp?: number
    deathsPvp?: number
    deathsPve?: number
    deathsSuicide?: number
    kdRatio?: number
    currentKillstreak?: number
    bestKillstreak?: number
    longestKillDistance?: number
    totalSecondsOnline?: number
    killsAsKiller?: KillEventCreateNestedManyWithoutKillerInput
    sessions?: SessionCreateNestedManyWithoutPlayerInput
    leaderboardEntries?: LeaderboardEntryCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUncheckedCreateWithoutKillsAsVictimInput = {
    id?: string
    nitradoId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    killsPvp?: number
    deathsPvp?: number
    deathsPve?: number
    deathsSuicide?: number
    kdRatio?: number
    currentKillstreak?: number
    bestKillstreak?: number
    longestKillDistance?: number
    totalSecondsOnline?: number
    killsAsKiller?: KillEventUncheckedCreateNestedManyWithoutKillerInput
    sessions?: SessionUncheckedCreateNestedManyWithoutPlayerInput
    leaderboardEntries?: LeaderboardEntryUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type PlayerCreateOrConnectWithoutKillsAsVictimInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutKillsAsVictimInput, PlayerUncheckedCreateWithoutKillsAsVictimInput>
  }

  export type PlayerUpsertWithoutKillsAsKillerInput = {
    update: XOR<PlayerUpdateWithoutKillsAsKillerInput, PlayerUncheckedUpdateWithoutKillsAsKillerInput>
    create: XOR<PlayerCreateWithoutKillsAsKillerInput, PlayerUncheckedCreateWithoutKillsAsKillerInput>
    where?: PlayerWhereInput
  }

  export type PlayerUpdateToOneWithWhereWithoutKillsAsKillerInput = {
    where?: PlayerWhereInput
    data: XOR<PlayerUpdateWithoutKillsAsKillerInput, PlayerUncheckedUpdateWithoutKillsAsKillerInput>
  }

  export type PlayerUpdateWithoutKillsAsKillerInput = {
    id?: StringFieldUpdateOperationsInput | string
    nitradoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    killsPvp?: IntFieldUpdateOperationsInput | number
    deathsPvp?: IntFieldUpdateOperationsInput | number
    deathsPve?: IntFieldUpdateOperationsInput | number
    deathsSuicide?: IntFieldUpdateOperationsInput | number
    kdRatio?: FloatFieldUpdateOperationsInput | number
    currentKillstreak?: IntFieldUpdateOperationsInput | number
    bestKillstreak?: IntFieldUpdateOperationsInput | number
    longestKillDistance?: FloatFieldUpdateOperationsInput | number
    totalSecondsOnline?: IntFieldUpdateOperationsInput | number
    killsAsVictim?: KillEventUpdateManyWithoutVictimNestedInput
    sessions?: SessionUpdateManyWithoutPlayerNestedInput
    leaderboardEntries?: LeaderboardEntryUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateWithoutKillsAsKillerInput = {
    id?: StringFieldUpdateOperationsInput | string
    nitradoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    killsPvp?: IntFieldUpdateOperationsInput | number
    deathsPvp?: IntFieldUpdateOperationsInput | number
    deathsPve?: IntFieldUpdateOperationsInput | number
    deathsSuicide?: IntFieldUpdateOperationsInput | number
    kdRatio?: FloatFieldUpdateOperationsInput | number
    currentKillstreak?: IntFieldUpdateOperationsInput | number
    bestKillstreak?: IntFieldUpdateOperationsInput | number
    longestKillDistance?: FloatFieldUpdateOperationsInput | number
    totalSecondsOnline?: IntFieldUpdateOperationsInput | number
    killsAsVictim?: KillEventUncheckedUpdateManyWithoutVictimNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutPlayerNestedInput
    leaderboardEntries?: LeaderboardEntryUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerUpsertWithoutKillsAsVictimInput = {
    update: XOR<PlayerUpdateWithoutKillsAsVictimInput, PlayerUncheckedUpdateWithoutKillsAsVictimInput>
    create: XOR<PlayerCreateWithoutKillsAsVictimInput, PlayerUncheckedCreateWithoutKillsAsVictimInput>
    where?: PlayerWhereInput
  }

  export type PlayerUpdateToOneWithWhereWithoutKillsAsVictimInput = {
    where?: PlayerWhereInput
    data: XOR<PlayerUpdateWithoutKillsAsVictimInput, PlayerUncheckedUpdateWithoutKillsAsVictimInput>
  }

  export type PlayerUpdateWithoutKillsAsVictimInput = {
    id?: StringFieldUpdateOperationsInput | string
    nitradoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    killsPvp?: IntFieldUpdateOperationsInput | number
    deathsPvp?: IntFieldUpdateOperationsInput | number
    deathsPve?: IntFieldUpdateOperationsInput | number
    deathsSuicide?: IntFieldUpdateOperationsInput | number
    kdRatio?: FloatFieldUpdateOperationsInput | number
    currentKillstreak?: IntFieldUpdateOperationsInput | number
    bestKillstreak?: IntFieldUpdateOperationsInput | number
    longestKillDistance?: FloatFieldUpdateOperationsInput | number
    totalSecondsOnline?: IntFieldUpdateOperationsInput | number
    killsAsKiller?: KillEventUpdateManyWithoutKillerNestedInput
    sessions?: SessionUpdateManyWithoutPlayerNestedInput
    leaderboardEntries?: LeaderboardEntryUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateWithoutKillsAsVictimInput = {
    id?: StringFieldUpdateOperationsInput | string
    nitradoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    killsPvp?: IntFieldUpdateOperationsInput | number
    deathsPvp?: IntFieldUpdateOperationsInput | number
    deathsPve?: IntFieldUpdateOperationsInput | number
    deathsSuicide?: IntFieldUpdateOperationsInput | number
    kdRatio?: FloatFieldUpdateOperationsInput | number
    currentKillstreak?: IntFieldUpdateOperationsInput | number
    bestKillstreak?: IntFieldUpdateOperationsInput | number
    longestKillDistance?: FloatFieldUpdateOperationsInput | number
    totalSecondsOnline?: IntFieldUpdateOperationsInput | number
    killsAsKiller?: KillEventUncheckedUpdateManyWithoutKillerNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutPlayerNestedInput
    leaderboardEntries?: LeaderboardEntryUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerCreateWithoutSessionsInput = {
    id?: string
    nitradoId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    killsPvp?: number
    deathsPvp?: number
    deathsPve?: number
    deathsSuicide?: number
    kdRatio?: number
    currentKillstreak?: number
    bestKillstreak?: number
    longestKillDistance?: number
    totalSecondsOnline?: number
    killsAsKiller?: KillEventCreateNestedManyWithoutKillerInput
    killsAsVictim?: KillEventCreateNestedManyWithoutVictimInput
    leaderboardEntries?: LeaderboardEntryCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUncheckedCreateWithoutSessionsInput = {
    id?: string
    nitradoId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    killsPvp?: number
    deathsPvp?: number
    deathsPve?: number
    deathsSuicide?: number
    kdRatio?: number
    currentKillstreak?: number
    bestKillstreak?: number
    longestKillDistance?: number
    totalSecondsOnline?: number
    killsAsKiller?: KillEventUncheckedCreateNestedManyWithoutKillerInput
    killsAsVictim?: KillEventUncheckedCreateNestedManyWithoutVictimInput
    leaderboardEntries?: LeaderboardEntryUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type PlayerCreateOrConnectWithoutSessionsInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutSessionsInput, PlayerUncheckedCreateWithoutSessionsInput>
  }

  export type PlayerUpsertWithoutSessionsInput = {
    update: XOR<PlayerUpdateWithoutSessionsInput, PlayerUncheckedUpdateWithoutSessionsInput>
    create: XOR<PlayerCreateWithoutSessionsInput, PlayerUncheckedCreateWithoutSessionsInput>
    where?: PlayerWhereInput
  }

  export type PlayerUpdateToOneWithWhereWithoutSessionsInput = {
    where?: PlayerWhereInput
    data: XOR<PlayerUpdateWithoutSessionsInput, PlayerUncheckedUpdateWithoutSessionsInput>
  }

  export type PlayerUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nitradoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    killsPvp?: IntFieldUpdateOperationsInput | number
    deathsPvp?: IntFieldUpdateOperationsInput | number
    deathsPve?: IntFieldUpdateOperationsInput | number
    deathsSuicide?: IntFieldUpdateOperationsInput | number
    kdRatio?: FloatFieldUpdateOperationsInput | number
    currentKillstreak?: IntFieldUpdateOperationsInput | number
    bestKillstreak?: IntFieldUpdateOperationsInput | number
    longestKillDistance?: FloatFieldUpdateOperationsInput | number
    totalSecondsOnline?: IntFieldUpdateOperationsInput | number
    killsAsKiller?: KillEventUpdateManyWithoutKillerNestedInput
    killsAsVictim?: KillEventUpdateManyWithoutVictimNestedInput
    leaderboardEntries?: LeaderboardEntryUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nitradoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    killsPvp?: IntFieldUpdateOperationsInput | number
    deathsPvp?: IntFieldUpdateOperationsInput | number
    deathsPve?: IntFieldUpdateOperationsInput | number
    deathsSuicide?: IntFieldUpdateOperationsInput | number
    kdRatio?: FloatFieldUpdateOperationsInput | number
    currentKillstreak?: IntFieldUpdateOperationsInput | number
    bestKillstreak?: IntFieldUpdateOperationsInput | number
    longestKillDistance?: FloatFieldUpdateOperationsInput | number
    totalSecondsOnline?: IntFieldUpdateOperationsInput | number
    killsAsKiller?: KillEventUncheckedUpdateManyWithoutKillerNestedInput
    killsAsVictim?: KillEventUncheckedUpdateManyWithoutVictimNestedInput
    leaderboardEntries?: LeaderboardEntryUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerCreateWithoutLeaderboardEntriesInput = {
    id?: string
    nitradoId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    killsPvp?: number
    deathsPvp?: number
    deathsPve?: number
    deathsSuicide?: number
    kdRatio?: number
    currentKillstreak?: number
    bestKillstreak?: number
    longestKillDistance?: number
    totalSecondsOnline?: number
    killsAsKiller?: KillEventCreateNestedManyWithoutKillerInput
    killsAsVictim?: KillEventCreateNestedManyWithoutVictimInput
    sessions?: SessionCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUncheckedCreateWithoutLeaderboardEntriesInput = {
    id?: string
    nitradoId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    killsPvp?: number
    deathsPvp?: number
    deathsPve?: number
    deathsSuicide?: number
    kdRatio?: number
    currentKillstreak?: number
    bestKillstreak?: number
    longestKillDistance?: number
    totalSecondsOnline?: number
    killsAsKiller?: KillEventUncheckedCreateNestedManyWithoutKillerInput
    killsAsVictim?: KillEventUncheckedCreateNestedManyWithoutVictimInput
    sessions?: SessionUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type PlayerCreateOrConnectWithoutLeaderboardEntriesInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutLeaderboardEntriesInput, PlayerUncheckedCreateWithoutLeaderboardEntriesInput>
  }

  export type PlayerUpsertWithoutLeaderboardEntriesInput = {
    update: XOR<PlayerUpdateWithoutLeaderboardEntriesInput, PlayerUncheckedUpdateWithoutLeaderboardEntriesInput>
    create: XOR<PlayerCreateWithoutLeaderboardEntriesInput, PlayerUncheckedCreateWithoutLeaderboardEntriesInput>
    where?: PlayerWhereInput
  }

  export type PlayerUpdateToOneWithWhereWithoutLeaderboardEntriesInput = {
    where?: PlayerWhereInput
    data: XOR<PlayerUpdateWithoutLeaderboardEntriesInput, PlayerUncheckedUpdateWithoutLeaderboardEntriesInput>
  }

  export type PlayerUpdateWithoutLeaderboardEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nitradoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    killsPvp?: IntFieldUpdateOperationsInput | number
    deathsPvp?: IntFieldUpdateOperationsInput | number
    deathsPve?: IntFieldUpdateOperationsInput | number
    deathsSuicide?: IntFieldUpdateOperationsInput | number
    kdRatio?: FloatFieldUpdateOperationsInput | number
    currentKillstreak?: IntFieldUpdateOperationsInput | number
    bestKillstreak?: IntFieldUpdateOperationsInput | number
    longestKillDistance?: FloatFieldUpdateOperationsInput | number
    totalSecondsOnline?: IntFieldUpdateOperationsInput | number
    killsAsKiller?: KillEventUpdateManyWithoutKillerNestedInput
    killsAsVictim?: KillEventUpdateManyWithoutVictimNestedInput
    sessions?: SessionUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateWithoutLeaderboardEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nitradoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    killsPvp?: IntFieldUpdateOperationsInput | number
    deathsPvp?: IntFieldUpdateOperationsInput | number
    deathsPve?: IntFieldUpdateOperationsInput | number
    deathsSuicide?: IntFieldUpdateOperationsInput | number
    kdRatio?: FloatFieldUpdateOperationsInput | number
    currentKillstreak?: IntFieldUpdateOperationsInput | number
    bestKillstreak?: IntFieldUpdateOperationsInput | number
    longestKillDistance?: FloatFieldUpdateOperationsInput | number
    totalSecondsOnline?: IntFieldUpdateOperationsInput | number
    killsAsKiller?: KillEventUncheckedUpdateManyWithoutKillerNestedInput
    killsAsVictim?: KillEventUncheckedUpdateManyWithoutVictimNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type KillEventCreateManyKillerInput = {
    id?: string
    timestamp: Date | string
    victimId: string
    weapon: string
    ammoType?: string | null
    distance: number
    fatalHitZone?: string | null
    killedPosX: number
    killedPosY: number
    killedPosZ: number
    killerPosX: number
    killerPosY: number
    killerPosZ: number
    locationName?: string | null
    killerStreakAtKill?: number
    createdAt?: Date | string
  }

  export type KillEventCreateManyVictimInput = {
    id?: string
    timestamp: Date | string
    killerId: string
    weapon: string
    ammoType?: string | null
    distance: number
    fatalHitZone?: string | null
    killedPosX: number
    killedPosY: number
    killedPosZ: number
    killerPosX: number
    killerPosY: number
    killerPosZ: number
    locationName?: string | null
    killerStreakAtKill?: number
    createdAt?: Date | string
  }

  export type SessionCreateManyPlayerInput = {
    id?: string
    connectedAt: Date | string
    disconnectedAt?: Date | string | null
    durationSeconds?: number | null
  }

  export type LeaderboardEntryCreateManyPlayerInput = {
    id?: string
    periodStart: Date | string
    periodEnd?: Date | string | null
    kills?: number
    deaths?: number
    bestKillstreak?: number
    longestKillDistance?: number
    totalSecondsOnline?: number
    createdAt?: Date | string
  }

  export type KillEventUpdateWithoutKillerInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    weapon?: StringFieldUpdateOperationsInput | string
    ammoType?: NullableStringFieldUpdateOperationsInput | string | null
    distance?: FloatFieldUpdateOperationsInput | number
    fatalHitZone?: NullableStringFieldUpdateOperationsInput | string | null
    killedPosX?: FloatFieldUpdateOperationsInput | number
    killedPosY?: FloatFieldUpdateOperationsInput | number
    killedPosZ?: FloatFieldUpdateOperationsInput | number
    killerPosX?: FloatFieldUpdateOperationsInput | number
    killerPosY?: FloatFieldUpdateOperationsInput | number
    killerPosZ?: FloatFieldUpdateOperationsInput | number
    locationName?: NullableStringFieldUpdateOperationsInput | string | null
    killerStreakAtKill?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    victim?: PlayerUpdateOneRequiredWithoutKillsAsVictimNestedInput
  }

  export type KillEventUncheckedUpdateWithoutKillerInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    victimId?: StringFieldUpdateOperationsInput | string
    weapon?: StringFieldUpdateOperationsInput | string
    ammoType?: NullableStringFieldUpdateOperationsInput | string | null
    distance?: FloatFieldUpdateOperationsInput | number
    fatalHitZone?: NullableStringFieldUpdateOperationsInput | string | null
    killedPosX?: FloatFieldUpdateOperationsInput | number
    killedPosY?: FloatFieldUpdateOperationsInput | number
    killedPosZ?: FloatFieldUpdateOperationsInput | number
    killerPosX?: FloatFieldUpdateOperationsInput | number
    killerPosY?: FloatFieldUpdateOperationsInput | number
    killerPosZ?: FloatFieldUpdateOperationsInput | number
    locationName?: NullableStringFieldUpdateOperationsInput | string | null
    killerStreakAtKill?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KillEventUncheckedUpdateManyWithoutKillerInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    victimId?: StringFieldUpdateOperationsInput | string
    weapon?: StringFieldUpdateOperationsInput | string
    ammoType?: NullableStringFieldUpdateOperationsInput | string | null
    distance?: FloatFieldUpdateOperationsInput | number
    fatalHitZone?: NullableStringFieldUpdateOperationsInput | string | null
    killedPosX?: FloatFieldUpdateOperationsInput | number
    killedPosY?: FloatFieldUpdateOperationsInput | number
    killedPosZ?: FloatFieldUpdateOperationsInput | number
    killerPosX?: FloatFieldUpdateOperationsInput | number
    killerPosY?: FloatFieldUpdateOperationsInput | number
    killerPosZ?: FloatFieldUpdateOperationsInput | number
    locationName?: NullableStringFieldUpdateOperationsInput | string | null
    killerStreakAtKill?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KillEventUpdateWithoutVictimInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    weapon?: StringFieldUpdateOperationsInput | string
    ammoType?: NullableStringFieldUpdateOperationsInput | string | null
    distance?: FloatFieldUpdateOperationsInput | number
    fatalHitZone?: NullableStringFieldUpdateOperationsInput | string | null
    killedPosX?: FloatFieldUpdateOperationsInput | number
    killedPosY?: FloatFieldUpdateOperationsInput | number
    killedPosZ?: FloatFieldUpdateOperationsInput | number
    killerPosX?: FloatFieldUpdateOperationsInput | number
    killerPosY?: FloatFieldUpdateOperationsInput | number
    killerPosZ?: FloatFieldUpdateOperationsInput | number
    locationName?: NullableStringFieldUpdateOperationsInput | string | null
    killerStreakAtKill?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    killer?: PlayerUpdateOneRequiredWithoutKillsAsKillerNestedInput
  }

  export type KillEventUncheckedUpdateWithoutVictimInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    killerId?: StringFieldUpdateOperationsInput | string
    weapon?: StringFieldUpdateOperationsInput | string
    ammoType?: NullableStringFieldUpdateOperationsInput | string | null
    distance?: FloatFieldUpdateOperationsInput | number
    fatalHitZone?: NullableStringFieldUpdateOperationsInput | string | null
    killedPosX?: FloatFieldUpdateOperationsInput | number
    killedPosY?: FloatFieldUpdateOperationsInput | number
    killedPosZ?: FloatFieldUpdateOperationsInput | number
    killerPosX?: FloatFieldUpdateOperationsInput | number
    killerPosY?: FloatFieldUpdateOperationsInput | number
    killerPosZ?: FloatFieldUpdateOperationsInput | number
    locationName?: NullableStringFieldUpdateOperationsInput | string | null
    killerStreakAtKill?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type KillEventUncheckedUpdateManyWithoutVictimInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    killerId?: StringFieldUpdateOperationsInput | string
    weapon?: StringFieldUpdateOperationsInput | string
    ammoType?: NullableStringFieldUpdateOperationsInput | string | null
    distance?: FloatFieldUpdateOperationsInput | number
    fatalHitZone?: NullableStringFieldUpdateOperationsInput | string | null
    killedPosX?: FloatFieldUpdateOperationsInput | number
    killedPosY?: FloatFieldUpdateOperationsInput | number
    killedPosZ?: FloatFieldUpdateOperationsInput | number
    killerPosX?: FloatFieldUpdateOperationsInput | number
    killerPosY?: FloatFieldUpdateOperationsInput | number
    killerPosZ?: FloatFieldUpdateOperationsInput | number
    locationName?: NullableStringFieldUpdateOperationsInput | string | null
    killerStreakAtKill?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    connectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    disconnectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationSeconds?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SessionUncheckedUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    connectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    disconnectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationSeconds?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SessionUncheckedUpdateManyWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    connectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    disconnectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationSeconds?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LeaderboardEntryUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    bestKillstreak?: IntFieldUpdateOperationsInput | number
    longestKillDistance?: FloatFieldUpdateOperationsInput | number
    totalSecondsOnline?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaderboardEntryUncheckedUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    bestKillstreak?: IntFieldUpdateOperationsInput | number
    longestKillDistance?: FloatFieldUpdateOperationsInput | number
    totalSecondsOnline?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaderboardEntryUncheckedUpdateManyWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodStart?: DateTimeFieldUpdateOperationsInput | Date | string
    periodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    bestKillstreak?: IntFieldUpdateOperationsInput | number
    longestKillDistance?: FloatFieldUpdateOperationsInput | number
    totalSecondsOnline?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}