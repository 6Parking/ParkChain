
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ParkingSpot
 * 
 */
export type ParkingSpot = $Result.DefaultSelection<Prisma.$ParkingSpotPayload>
/**
 * Model Availability
 * 
 */
export type Availability = $Result.DefaultSelection<Prisma.$AvailabilityPayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
/**
 * Model SurgePricingLog
 * 
 */
export type SurgePricingLog = $Result.DefaultSelection<Prisma.$SurgePricingLogPayload>
/**
 * Model BlockchainEvent
 * 
 */
export type BlockchainEvent = $Result.DefaultSelection<Prisma.$BlockchainEventPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.parkingSpot`: Exposes CRUD operations for the **ParkingSpot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ParkingSpots
    * const parkingSpots = await prisma.parkingSpot.findMany()
    * ```
    */
  get parkingSpot(): Prisma.ParkingSpotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.availability`: Exposes CRUD operations for the **Availability** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Availabilities
    * const availabilities = await prisma.availability.findMany()
    * ```
    */
  get availability(): Prisma.AvailabilityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.surgePricingLog`: Exposes CRUD operations for the **SurgePricingLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SurgePricingLogs
    * const surgePricingLogs = await prisma.surgePricingLog.findMany()
    * ```
    */
  get surgePricingLog(): Prisma.SurgePricingLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blockchainEvent`: Exposes CRUD operations for the **BlockchainEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlockchainEvents
    * const blockchainEvents = await prisma.blockchainEvent.findMany()
    * ```
    */
  get blockchainEvent(): Prisma.BlockchainEventDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.7.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
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
    User: 'User',
    ParkingSpot: 'ParkingSpot',
    Availability: 'Availability',
    Booking: 'Booking',
    SurgePricingLog: 'SurgePricingLog',
    BlockchainEvent: 'BlockchainEvent'
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
      modelProps: "user" | "parkingSpot" | "availability" | "booking" | "surgePricingLog" | "blockchainEvent"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      ParkingSpot: {
        payload: Prisma.$ParkingSpotPayload<ExtArgs>
        fields: Prisma.ParkingSpotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParkingSpotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSpotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParkingSpotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSpotPayload>
          }
          findFirst: {
            args: Prisma.ParkingSpotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSpotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParkingSpotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSpotPayload>
          }
          findMany: {
            args: Prisma.ParkingSpotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSpotPayload>[]
          }
          create: {
            args: Prisma.ParkingSpotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSpotPayload>
          }
          createMany: {
            args: Prisma.ParkingSpotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParkingSpotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSpotPayload>[]
          }
          delete: {
            args: Prisma.ParkingSpotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSpotPayload>
          }
          update: {
            args: Prisma.ParkingSpotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSpotPayload>
          }
          deleteMany: {
            args: Prisma.ParkingSpotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParkingSpotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParkingSpotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSpotPayload>[]
          }
          upsert: {
            args: Prisma.ParkingSpotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParkingSpotPayload>
          }
          aggregate: {
            args: Prisma.ParkingSpotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParkingSpot>
          }
          groupBy: {
            args: Prisma.ParkingSpotGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParkingSpotGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParkingSpotCountArgs<ExtArgs>
            result: $Utils.Optional<ParkingSpotCountAggregateOutputType> | number
          }
        }
      }
      Availability: {
        payload: Prisma.$AvailabilityPayload<ExtArgs>
        fields: Prisma.AvailabilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvailabilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvailabilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          findFirst: {
            args: Prisma.AvailabilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvailabilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          findMany: {
            args: Prisma.AvailabilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>[]
          }
          create: {
            args: Prisma.AvailabilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          createMany: {
            args: Prisma.AvailabilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvailabilityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>[]
          }
          delete: {
            args: Prisma.AvailabilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          update: {
            args: Prisma.AvailabilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          deleteMany: {
            args: Prisma.AvailabilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvailabilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AvailabilityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>[]
          }
          upsert: {
            args: Prisma.AvailabilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          aggregate: {
            args: Prisma.AvailabilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvailability>
          }
          groupBy: {
            args: Prisma.AvailabilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvailabilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvailabilityCountArgs<ExtArgs>
            result: $Utils.Optional<AvailabilityCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      SurgePricingLog: {
        payload: Prisma.$SurgePricingLogPayload<ExtArgs>
        fields: Prisma.SurgePricingLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SurgePricingLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurgePricingLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SurgePricingLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurgePricingLogPayload>
          }
          findFirst: {
            args: Prisma.SurgePricingLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurgePricingLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SurgePricingLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurgePricingLogPayload>
          }
          findMany: {
            args: Prisma.SurgePricingLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurgePricingLogPayload>[]
          }
          create: {
            args: Prisma.SurgePricingLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurgePricingLogPayload>
          }
          createMany: {
            args: Prisma.SurgePricingLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SurgePricingLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurgePricingLogPayload>[]
          }
          delete: {
            args: Prisma.SurgePricingLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurgePricingLogPayload>
          }
          update: {
            args: Prisma.SurgePricingLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurgePricingLogPayload>
          }
          deleteMany: {
            args: Prisma.SurgePricingLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SurgePricingLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SurgePricingLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurgePricingLogPayload>[]
          }
          upsert: {
            args: Prisma.SurgePricingLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SurgePricingLogPayload>
          }
          aggregate: {
            args: Prisma.SurgePricingLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSurgePricingLog>
          }
          groupBy: {
            args: Prisma.SurgePricingLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<SurgePricingLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.SurgePricingLogCountArgs<ExtArgs>
            result: $Utils.Optional<SurgePricingLogCountAggregateOutputType> | number
          }
        }
      }
      BlockchainEvent: {
        payload: Prisma.$BlockchainEventPayload<ExtArgs>
        fields: Prisma.BlockchainEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlockchainEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockchainEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlockchainEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockchainEventPayload>
          }
          findFirst: {
            args: Prisma.BlockchainEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockchainEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlockchainEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockchainEventPayload>
          }
          findMany: {
            args: Prisma.BlockchainEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockchainEventPayload>[]
          }
          create: {
            args: Prisma.BlockchainEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockchainEventPayload>
          }
          createMany: {
            args: Prisma.BlockchainEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlockchainEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockchainEventPayload>[]
          }
          delete: {
            args: Prisma.BlockchainEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockchainEventPayload>
          }
          update: {
            args: Prisma.BlockchainEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockchainEventPayload>
          }
          deleteMany: {
            args: Prisma.BlockchainEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlockchainEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlockchainEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockchainEventPayload>[]
          }
          upsert: {
            args: Prisma.BlockchainEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockchainEventPayload>
          }
          aggregate: {
            args: Prisma.BlockchainEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlockchainEvent>
          }
          groupBy: {
            args: Prisma.BlockchainEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlockchainEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlockchainEventCountArgs<ExtArgs>
            result: $Utils.Optional<BlockchainEventCountAggregateOutputType> | number
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
    user?: UserOmit
    parkingSpot?: ParkingSpotOmit
    availability?: AvailabilityOmit
    booking?: BookingOmit
    surgePricingLog?: SurgePricingLogOmit
    blockchainEvent?: BlockchainEventOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    spots: number
    bookings: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spots?: boolean | UserCountOutputTypeCountSpotsArgs
    bookings?: boolean | UserCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSpotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingSpotWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Count Type ParkingSpotCountOutputType
   */

  export type ParkingSpotCountOutputType = {
    availabilities: number
    bookings: number
    surgeLogs: number
  }

  export type ParkingSpotCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    availabilities?: boolean | ParkingSpotCountOutputTypeCountAvailabilitiesArgs
    bookings?: boolean | ParkingSpotCountOutputTypeCountBookingsArgs
    surgeLogs?: boolean | ParkingSpotCountOutputTypeCountSurgeLogsArgs
  }

  // Custom InputTypes
  /**
   * ParkingSpotCountOutputType without action
   */
  export type ParkingSpotCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpotCountOutputType
     */
    select?: ParkingSpotCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ParkingSpotCountOutputType without action
   */
  export type ParkingSpotCountOutputTypeCountAvailabilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailabilityWhereInput
  }

  /**
   * ParkingSpotCountOutputType without action
   */
  export type ParkingSpotCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * ParkingSpotCountOutputType without action
   */
  export type ParkingSpotCountOutputTypeCountSurgeLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SurgePricingLogWhereInput
  }


  /**
   * Count Type BookingCountOutputType
   */

  export type BookingCountOutputType = {
    blockchainEvents: number
  }

  export type BookingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blockchainEvents?: boolean | BookingCountOutputTypeCountBlockchainEventsArgs
  }

  // Custom InputTypes
  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingCountOutputType
     */
    select?: BookingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeCountBlockchainEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlockchainEventWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    username: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    username: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    username: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    username?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    username?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    username?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    username: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    username?: boolean
    createdAt?: boolean
    spots?: boolean | User$spotsArgs<ExtArgs>
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    username?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    username?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    username?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "username" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spots?: boolean | User$spotsArgs<ExtArgs>
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      spots: Prisma.$ParkingSpotPayload<ExtArgs>[]
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      username: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    spots<T extends User$spotsArgs<ExtArgs> = {}>(args?: Subset<T, User$spotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingSpotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookings<T extends User$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, User$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.spots
   */
  export type User$spotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpot
     */
    select?: ParkingSpotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSpot
     */
    omit?: ParkingSpotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSpotInclude<ExtArgs> | null
    where?: ParkingSpotWhereInput
    orderBy?: ParkingSpotOrderByWithRelationInput | ParkingSpotOrderByWithRelationInput[]
    cursor?: ParkingSpotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParkingSpotScalarFieldEnum | ParkingSpotScalarFieldEnum[]
  }

  /**
   * User.bookings
   */
  export type User$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model ParkingSpot
   */

  export type AggregateParkingSpot = {
    _count: ParkingSpotCountAggregateOutputType | null
    _avg: ParkingSpotAvgAggregateOutputType | null
    _sum: ParkingSpotSumAggregateOutputType | null
    _min: ParkingSpotMinAggregateOutputType | null
    _max: ParkingSpotMaxAggregateOutputType | null
  }

  export type ParkingSpotAvgAggregateOutputType = {
    id: number | null
    ownerId: number | null
    latitude: number | null
    longitude: number | null
    hourlyRate: number | null
  }

  export type ParkingSpotSumAggregateOutputType = {
    id: number | null
    ownerId: number | null
    latitude: number | null
    longitude: number | null
    hourlyRate: number | null
  }

  export type ParkingSpotMinAggregateOutputType = {
    id: number | null
    ownerId: number | null
    latitude: number | null
    longitude: number | null
    city: string | null
    street: string | null
    houseNumber: string | null
    address: string | null
    hourlyRate: number | null
    description: string | null
    hasCharger: boolean | null
    isActive: boolean | null
    size: string | null
    imageUrl: string | null
    availabilityMode: string | null
  }

  export type ParkingSpotMaxAggregateOutputType = {
    id: number | null
    ownerId: number | null
    latitude: number | null
    longitude: number | null
    city: string | null
    street: string | null
    houseNumber: string | null
    address: string | null
    hourlyRate: number | null
    description: string | null
    hasCharger: boolean | null
    isActive: boolean | null
    size: string | null
    imageUrl: string | null
    availabilityMode: string | null
  }

  export type ParkingSpotCountAggregateOutputType = {
    id: number
    ownerId: number
    latitude: number
    longitude: number
    city: number
    street: number
    houseNumber: number
    address: number
    hourlyRate: number
    description: number
    hasCharger: number
    isActive: number
    size: number
    imageUrl: number
    availabilityMode: number
    _all: number
  }


  export type ParkingSpotAvgAggregateInputType = {
    id?: true
    ownerId?: true
    latitude?: true
    longitude?: true
    hourlyRate?: true
  }

  export type ParkingSpotSumAggregateInputType = {
    id?: true
    ownerId?: true
    latitude?: true
    longitude?: true
    hourlyRate?: true
  }

  export type ParkingSpotMinAggregateInputType = {
    id?: true
    ownerId?: true
    latitude?: true
    longitude?: true
    city?: true
    street?: true
    houseNumber?: true
    address?: true
    hourlyRate?: true
    description?: true
    hasCharger?: true
    isActive?: true
    size?: true
    imageUrl?: true
    availabilityMode?: true
  }

  export type ParkingSpotMaxAggregateInputType = {
    id?: true
    ownerId?: true
    latitude?: true
    longitude?: true
    city?: true
    street?: true
    houseNumber?: true
    address?: true
    hourlyRate?: true
    description?: true
    hasCharger?: true
    isActive?: true
    size?: true
    imageUrl?: true
    availabilityMode?: true
  }

  export type ParkingSpotCountAggregateInputType = {
    id?: true
    ownerId?: true
    latitude?: true
    longitude?: true
    city?: true
    street?: true
    houseNumber?: true
    address?: true
    hourlyRate?: true
    description?: true
    hasCharger?: true
    isActive?: true
    size?: true
    imageUrl?: true
    availabilityMode?: true
    _all?: true
  }

  export type ParkingSpotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParkingSpot to aggregate.
     */
    where?: ParkingSpotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingSpots to fetch.
     */
    orderBy?: ParkingSpotOrderByWithRelationInput | ParkingSpotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParkingSpotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingSpots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingSpots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ParkingSpots
    **/
    _count?: true | ParkingSpotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParkingSpotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParkingSpotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParkingSpotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParkingSpotMaxAggregateInputType
  }

  export type GetParkingSpotAggregateType<T extends ParkingSpotAggregateArgs> = {
        [P in keyof T & keyof AggregateParkingSpot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParkingSpot[P]>
      : GetScalarType<T[P], AggregateParkingSpot[P]>
  }




  export type ParkingSpotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParkingSpotWhereInput
    orderBy?: ParkingSpotOrderByWithAggregationInput | ParkingSpotOrderByWithAggregationInput[]
    by: ParkingSpotScalarFieldEnum[] | ParkingSpotScalarFieldEnum
    having?: ParkingSpotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParkingSpotCountAggregateInputType | true
    _avg?: ParkingSpotAvgAggregateInputType
    _sum?: ParkingSpotSumAggregateInputType
    _min?: ParkingSpotMinAggregateInputType
    _max?: ParkingSpotMaxAggregateInputType
  }

  export type ParkingSpotGroupByOutputType = {
    id: number
    ownerId: number
    latitude: number
    longitude: number
    city: string
    street: string
    houseNumber: string
    address: string
    hourlyRate: number
    description: string | null
    hasCharger: boolean
    isActive: boolean
    size: string
    imageUrl: string | null
    availabilityMode: string
    _count: ParkingSpotCountAggregateOutputType | null
    _avg: ParkingSpotAvgAggregateOutputType | null
    _sum: ParkingSpotSumAggregateOutputType | null
    _min: ParkingSpotMinAggregateOutputType | null
    _max: ParkingSpotMaxAggregateOutputType | null
  }

  type GetParkingSpotGroupByPayload<T extends ParkingSpotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParkingSpotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParkingSpotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParkingSpotGroupByOutputType[P]>
            : GetScalarType<T[P], ParkingSpotGroupByOutputType[P]>
        }
      >
    >


  export type ParkingSpotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    latitude?: boolean
    longitude?: boolean
    city?: boolean
    street?: boolean
    houseNumber?: boolean
    address?: boolean
    hourlyRate?: boolean
    description?: boolean
    hasCharger?: boolean
    isActive?: boolean
    size?: boolean
    imageUrl?: boolean
    availabilityMode?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    availabilities?: boolean | ParkingSpot$availabilitiesArgs<ExtArgs>
    bookings?: boolean | ParkingSpot$bookingsArgs<ExtArgs>
    surgeLogs?: boolean | ParkingSpot$surgeLogsArgs<ExtArgs>
    _count?: boolean | ParkingSpotCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parkingSpot"]>

  export type ParkingSpotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    latitude?: boolean
    longitude?: boolean
    city?: boolean
    street?: boolean
    houseNumber?: boolean
    address?: boolean
    hourlyRate?: boolean
    description?: boolean
    hasCharger?: boolean
    isActive?: boolean
    size?: boolean
    imageUrl?: boolean
    availabilityMode?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parkingSpot"]>

  export type ParkingSpotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    latitude?: boolean
    longitude?: boolean
    city?: boolean
    street?: boolean
    houseNumber?: boolean
    address?: boolean
    hourlyRate?: boolean
    description?: boolean
    hasCharger?: boolean
    isActive?: boolean
    size?: boolean
    imageUrl?: boolean
    availabilityMode?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["parkingSpot"]>

  export type ParkingSpotSelectScalar = {
    id?: boolean
    ownerId?: boolean
    latitude?: boolean
    longitude?: boolean
    city?: boolean
    street?: boolean
    houseNumber?: boolean
    address?: boolean
    hourlyRate?: boolean
    description?: boolean
    hasCharger?: boolean
    isActive?: boolean
    size?: boolean
    imageUrl?: boolean
    availabilityMode?: boolean
  }

  export type ParkingSpotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ownerId" | "latitude" | "longitude" | "city" | "street" | "houseNumber" | "address" | "hourlyRate" | "description" | "hasCharger" | "isActive" | "size" | "imageUrl" | "availabilityMode", ExtArgs["result"]["parkingSpot"]>
  export type ParkingSpotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    availabilities?: boolean | ParkingSpot$availabilitiesArgs<ExtArgs>
    bookings?: boolean | ParkingSpot$bookingsArgs<ExtArgs>
    surgeLogs?: boolean | ParkingSpot$surgeLogsArgs<ExtArgs>
    _count?: boolean | ParkingSpotCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ParkingSpotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ParkingSpotIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ParkingSpotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ParkingSpot"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      availabilities: Prisma.$AvailabilityPayload<ExtArgs>[]
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      surgeLogs: Prisma.$SurgePricingLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ownerId: number
      latitude: number
      longitude: number
      city: string
      street: string
      houseNumber: string
      address: string
      hourlyRate: number
      description: string | null
      hasCharger: boolean
      isActive: boolean
      size: string
      imageUrl: string | null
      availabilityMode: string
    }, ExtArgs["result"]["parkingSpot"]>
    composites: {}
  }

  type ParkingSpotGetPayload<S extends boolean | null | undefined | ParkingSpotDefaultArgs> = $Result.GetResult<Prisma.$ParkingSpotPayload, S>

  type ParkingSpotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParkingSpotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParkingSpotCountAggregateInputType | true
    }

  export interface ParkingSpotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ParkingSpot'], meta: { name: 'ParkingSpot' } }
    /**
     * Find zero or one ParkingSpot that matches the filter.
     * @param {ParkingSpotFindUniqueArgs} args - Arguments to find a ParkingSpot
     * @example
     * // Get one ParkingSpot
     * const parkingSpot = await prisma.parkingSpot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParkingSpotFindUniqueArgs>(args: SelectSubset<T, ParkingSpotFindUniqueArgs<ExtArgs>>): Prisma__ParkingSpotClient<$Result.GetResult<Prisma.$ParkingSpotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ParkingSpot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParkingSpotFindUniqueOrThrowArgs} args - Arguments to find a ParkingSpot
     * @example
     * // Get one ParkingSpot
     * const parkingSpot = await prisma.parkingSpot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParkingSpotFindUniqueOrThrowArgs>(args: SelectSubset<T, ParkingSpotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParkingSpotClient<$Result.GetResult<Prisma.$ParkingSpotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParkingSpot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSpotFindFirstArgs} args - Arguments to find a ParkingSpot
     * @example
     * // Get one ParkingSpot
     * const parkingSpot = await prisma.parkingSpot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParkingSpotFindFirstArgs>(args?: SelectSubset<T, ParkingSpotFindFirstArgs<ExtArgs>>): Prisma__ParkingSpotClient<$Result.GetResult<Prisma.$ParkingSpotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParkingSpot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSpotFindFirstOrThrowArgs} args - Arguments to find a ParkingSpot
     * @example
     * // Get one ParkingSpot
     * const parkingSpot = await prisma.parkingSpot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParkingSpotFindFirstOrThrowArgs>(args?: SelectSubset<T, ParkingSpotFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParkingSpotClient<$Result.GetResult<Prisma.$ParkingSpotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ParkingSpots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSpotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ParkingSpots
     * const parkingSpots = await prisma.parkingSpot.findMany()
     * 
     * // Get first 10 ParkingSpots
     * const parkingSpots = await prisma.parkingSpot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const parkingSpotWithIdOnly = await prisma.parkingSpot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParkingSpotFindManyArgs>(args?: SelectSubset<T, ParkingSpotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingSpotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ParkingSpot.
     * @param {ParkingSpotCreateArgs} args - Arguments to create a ParkingSpot.
     * @example
     * // Create one ParkingSpot
     * const ParkingSpot = await prisma.parkingSpot.create({
     *   data: {
     *     // ... data to create a ParkingSpot
     *   }
     * })
     * 
     */
    create<T extends ParkingSpotCreateArgs>(args: SelectSubset<T, ParkingSpotCreateArgs<ExtArgs>>): Prisma__ParkingSpotClient<$Result.GetResult<Prisma.$ParkingSpotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ParkingSpots.
     * @param {ParkingSpotCreateManyArgs} args - Arguments to create many ParkingSpots.
     * @example
     * // Create many ParkingSpots
     * const parkingSpot = await prisma.parkingSpot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParkingSpotCreateManyArgs>(args?: SelectSubset<T, ParkingSpotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ParkingSpots and returns the data saved in the database.
     * @param {ParkingSpotCreateManyAndReturnArgs} args - Arguments to create many ParkingSpots.
     * @example
     * // Create many ParkingSpots
     * const parkingSpot = await prisma.parkingSpot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ParkingSpots and only return the `id`
     * const parkingSpotWithIdOnly = await prisma.parkingSpot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParkingSpotCreateManyAndReturnArgs>(args?: SelectSubset<T, ParkingSpotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingSpotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ParkingSpot.
     * @param {ParkingSpotDeleteArgs} args - Arguments to delete one ParkingSpot.
     * @example
     * // Delete one ParkingSpot
     * const ParkingSpot = await prisma.parkingSpot.delete({
     *   where: {
     *     // ... filter to delete one ParkingSpot
     *   }
     * })
     * 
     */
    delete<T extends ParkingSpotDeleteArgs>(args: SelectSubset<T, ParkingSpotDeleteArgs<ExtArgs>>): Prisma__ParkingSpotClient<$Result.GetResult<Prisma.$ParkingSpotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ParkingSpot.
     * @param {ParkingSpotUpdateArgs} args - Arguments to update one ParkingSpot.
     * @example
     * // Update one ParkingSpot
     * const parkingSpot = await prisma.parkingSpot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParkingSpotUpdateArgs>(args: SelectSubset<T, ParkingSpotUpdateArgs<ExtArgs>>): Prisma__ParkingSpotClient<$Result.GetResult<Prisma.$ParkingSpotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ParkingSpots.
     * @param {ParkingSpotDeleteManyArgs} args - Arguments to filter ParkingSpots to delete.
     * @example
     * // Delete a few ParkingSpots
     * const { count } = await prisma.parkingSpot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParkingSpotDeleteManyArgs>(args?: SelectSubset<T, ParkingSpotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParkingSpots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSpotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ParkingSpots
     * const parkingSpot = await prisma.parkingSpot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParkingSpotUpdateManyArgs>(args: SelectSubset<T, ParkingSpotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParkingSpots and returns the data updated in the database.
     * @param {ParkingSpotUpdateManyAndReturnArgs} args - Arguments to update many ParkingSpots.
     * @example
     * // Update many ParkingSpots
     * const parkingSpot = await prisma.parkingSpot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ParkingSpots and only return the `id`
     * const parkingSpotWithIdOnly = await prisma.parkingSpot.updateManyAndReturn({
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
    updateManyAndReturn<T extends ParkingSpotUpdateManyAndReturnArgs>(args: SelectSubset<T, ParkingSpotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParkingSpotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ParkingSpot.
     * @param {ParkingSpotUpsertArgs} args - Arguments to update or create a ParkingSpot.
     * @example
     * // Update or create a ParkingSpot
     * const parkingSpot = await prisma.parkingSpot.upsert({
     *   create: {
     *     // ... data to create a ParkingSpot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ParkingSpot we want to update
     *   }
     * })
     */
    upsert<T extends ParkingSpotUpsertArgs>(args: SelectSubset<T, ParkingSpotUpsertArgs<ExtArgs>>): Prisma__ParkingSpotClient<$Result.GetResult<Prisma.$ParkingSpotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ParkingSpots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSpotCountArgs} args - Arguments to filter ParkingSpots to count.
     * @example
     * // Count the number of ParkingSpots
     * const count = await prisma.parkingSpot.count({
     *   where: {
     *     // ... the filter for the ParkingSpots we want to count
     *   }
     * })
    **/
    count<T extends ParkingSpotCountArgs>(
      args?: Subset<T, ParkingSpotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParkingSpotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ParkingSpot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSpotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParkingSpotAggregateArgs>(args: Subset<T, ParkingSpotAggregateArgs>): Prisma.PrismaPromise<GetParkingSpotAggregateType<T>>

    /**
     * Group by ParkingSpot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParkingSpotGroupByArgs} args - Group by arguments.
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
      T extends ParkingSpotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParkingSpotGroupByArgs['orderBy'] }
        : { orderBy?: ParkingSpotGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ParkingSpotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParkingSpotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ParkingSpot model
   */
  readonly fields: ParkingSpotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ParkingSpot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParkingSpotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    availabilities<T extends ParkingSpot$availabilitiesArgs<ExtArgs> = {}>(args?: Subset<T, ParkingSpot$availabilitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookings<T extends ParkingSpot$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, ParkingSpot$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    surgeLogs<T extends ParkingSpot$surgeLogsArgs<ExtArgs> = {}>(args?: Subset<T, ParkingSpot$surgeLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SurgePricingLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ParkingSpot model
   */
  interface ParkingSpotFieldRefs {
    readonly id: FieldRef<"ParkingSpot", 'Int'>
    readonly ownerId: FieldRef<"ParkingSpot", 'Int'>
    readonly latitude: FieldRef<"ParkingSpot", 'Float'>
    readonly longitude: FieldRef<"ParkingSpot", 'Float'>
    readonly city: FieldRef<"ParkingSpot", 'String'>
    readonly street: FieldRef<"ParkingSpot", 'String'>
    readonly houseNumber: FieldRef<"ParkingSpot", 'String'>
    readonly address: FieldRef<"ParkingSpot", 'String'>
    readonly hourlyRate: FieldRef<"ParkingSpot", 'Float'>
    readonly description: FieldRef<"ParkingSpot", 'String'>
    readonly hasCharger: FieldRef<"ParkingSpot", 'Boolean'>
    readonly isActive: FieldRef<"ParkingSpot", 'Boolean'>
    readonly size: FieldRef<"ParkingSpot", 'String'>
    readonly imageUrl: FieldRef<"ParkingSpot", 'String'>
    readonly availabilityMode: FieldRef<"ParkingSpot", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ParkingSpot findUnique
   */
  export type ParkingSpotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpot
     */
    select?: ParkingSpotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSpot
     */
    omit?: ParkingSpotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSpotInclude<ExtArgs> | null
    /**
     * Filter, which ParkingSpot to fetch.
     */
    where: ParkingSpotWhereUniqueInput
  }

  /**
   * ParkingSpot findUniqueOrThrow
   */
  export type ParkingSpotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpot
     */
    select?: ParkingSpotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSpot
     */
    omit?: ParkingSpotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSpotInclude<ExtArgs> | null
    /**
     * Filter, which ParkingSpot to fetch.
     */
    where: ParkingSpotWhereUniqueInput
  }

  /**
   * ParkingSpot findFirst
   */
  export type ParkingSpotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpot
     */
    select?: ParkingSpotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSpot
     */
    omit?: ParkingSpotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSpotInclude<ExtArgs> | null
    /**
     * Filter, which ParkingSpot to fetch.
     */
    where?: ParkingSpotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingSpots to fetch.
     */
    orderBy?: ParkingSpotOrderByWithRelationInput | ParkingSpotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParkingSpots.
     */
    cursor?: ParkingSpotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingSpots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingSpots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParkingSpots.
     */
    distinct?: ParkingSpotScalarFieldEnum | ParkingSpotScalarFieldEnum[]
  }

  /**
   * ParkingSpot findFirstOrThrow
   */
  export type ParkingSpotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpot
     */
    select?: ParkingSpotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSpot
     */
    omit?: ParkingSpotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSpotInclude<ExtArgs> | null
    /**
     * Filter, which ParkingSpot to fetch.
     */
    where?: ParkingSpotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingSpots to fetch.
     */
    orderBy?: ParkingSpotOrderByWithRelationInput | ParkingSpotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParkingSpots.
     */
    cursor?: ParkingSpotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingSpots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingSpots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParkingSpots.
     */
    distinct?: ParkingSpotScalarFieldEnum | ParkingSpotScalarFieldEnum[]
  }

  /**
   * ParkingSpot findMany
   */
  export type ParkingSpotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpot
     */
    select?: ParkingSpotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSpot
     */
    omit?: ParkingSpotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSpotInclude<ExtArgs> | null
    /**
     * Filter, which ParkingSpots to fetch.
     */
    where?: ParkingSpotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParkingSpots to fetch.
     */
    orderBy?: ParkingSpotOrderByWithRelationInput | ParkingSpotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ParkingSpots.
     */
    cursor?: ParkingSpotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParkingSpots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParkingSpots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParkingSpots.
     */
    distinct?: ParkingSpotScalarFieldEnum | ParkingSpotScalarFieldEnum[]
  }

  /**
   * ParkingSpot create
   */
  export type ParkingSpotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpot
     */
    select?: ParkingSpotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSpot
     */
    omit?: ParkingSpotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSpotInclude<ExtArgs> | null
    /**
     * The data needed to create a ParkingSpot.
     */
    data: XOR<ParkingSpotCreateInput, ParkingSpotUncheckedCreateInput>
  }

  /**
   * ParkingSpot createMany
   */
  export type ParkingSpotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ParkingSpots.
     */
    data: ParkingSpotCreateManyInput | ParkingSpotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ParkingSpot createManyAndReturn
   */
  export type ParkingSpotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpot
     */
    select?: ParkingSpotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSpot
     */
    omit?: ParkingSpotOmit<ExtArgs> | null
    /**
     * The data used to create many ParkingSpots.
     */
    data: ParkingSpotCreateManyInput | ParkingSpotCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSpotIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParkingSpot update
   */
  export type ParkingSpotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpot
     */
    select?: ParkingSpotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSpot
     */
    omit?: ParkingSpotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSpotInclude<ExtArgs> | null
    /**
     * The data needed to update a ParkingSpot.
     */
    data: XOR<ParkingSpotUpdateInput, ParkingSpotUncheckedUpdateInput>
    /**
     * Choose, which ParkingSpot to update.
     */
    where: ParkingSpotWhereUniqueInput
  }

  /**
   * ParkingSpot updateMany
   */
  export type ParkingSpotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ParkingSpots.
     */
    data: XOR<ParkingSpotUpdateManyMutationInput, ParkingSpotUncheckedUpdateManyInput>
    /**
     * Filter which ParkingSpots to update
     */
    where?: ParkingSpotWhereInput
    /**
     * Limit how many ParkingSpots to update.
     */
    limit?: number
  }

  /**
   * ParkingSpot updateManyAndReturn
   */
  export type ParkingSpotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpot
     */
    select?: ParkingSpotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSpot
     */
    omit?: ParkingSpotOmit<ExtArgs> | null
    /**
     * The data used to update ParkingSpots.
     */
    data: XOR<ParkingSpotUpdateManyMutationInput, ParkingSpotUncheckedUpdateManyInput>
    /**
     * Filter which ParkingSpots to update
     */
    where?: ParkingSpotWhereInput
    /**
     * Limit how many ParkingSpots to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSpotIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParkingSpot upsert
   */
  export type ParkingSpotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpot
     */
    select?: ParkingSpotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSpot
     */
    omit?: ParkingSpotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSpotInclude<ExtArgs> | null
    /**
     * The filter to search for the ParkingSpot to update in case it exists.
     */
    where: ParkingSpotWhereUniqueInput
    /**
     * In case the ParkingSpot found by the `where` argument doesn't exist, create a new ParkingSpot with this data.
     */
    create: XOR<ParkingSpotCreateInput, ParkingSpotUncheckedCreateInput>
    /**
     * In case the ParkingSpot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParkingSpotUpdateInput, ParkingSpotUncheckedUpdateInput>
  }

  /**
   * ParkingSpot delete
   */
  export type ParkingSpotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpot
     */
    select?: ParkingSpotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSpot
     */
    omit?: ParkingSpotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSpotInclude<ExtArgs> | null
    /**
     * Filter which ParkingSpot to delete.
     */
    where: ParkingSpotWhereUniqueInput
  }

  /**
   * ParkingSpot deleteMany
   */
  export type ParkingSpotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParkingSpots to delete
     */
    where?: ParkingSpotWhereInput
    /**
     * Limit how many ParkingSpots to delete.
     */
    limit?: number
  }

  /**
   * ParkingSpot.availabilities
   */
  export type ParkingSpot$availabilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    where?: AvailabilityWhereInput
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    cursor?: AvailabilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvailabilityScalarFieldEnum | AvailabilityScalarFieldEnum[]
  }

  /**
   * ParkingSpot.bookings
   */
  export type ParkingSpot$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * ParkingSpot.surgeLogs
   */
  export type ParkingSpot$surgeLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurgePricingLog
     */
    select?: SurgePricingLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurgePricingLog
     */
    omit?: SurgePricingLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurgePricingLogInclude<ExtArgs> | null
    where?: SurgePricingLogWhereInput
    orderBy?: SurgePricingLogOrderByWithRelationInput | SurgePricingLogOrderByWithRelationInput[]
    cursor?: SurgePricingLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SurgePricingLogScalarFieldEnum | SurgePricingLogScalarFieldEnum[]
  }

  /**
   * ParkingSpot without action
   */
  export type ParkingSpotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParkingSpot
     */
    select?: ParkingSpotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParkingSpot
     */
    omit?: ParkingSpotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParkingSpotInclude<ExtArgs> | null
  }


  /**
   * Model Availability
   */

  export type AggregateAvailability = {
    _count: AvailabilityCountAggregateOutputType | null
    _avg: AvailabilityAvgAggregateOutputType | null
    _sum: AvailabilitySumAggregateOutputType | null
    _min: AvailabilityMinAggregateOutputType | null
    _max: AvailabilityMaxAggregateOutputType | null
  }

  export type AvailabilityAvgAggregateOutputType = {
    id: number | null
    spotId: number | null
    dayOfWeek: number | null
  }

  export type AvailabilitySumAggregateOutputType = {
    id: number | null
    spotId: number | null
    dayOfWeek: number | null
  }

  export type AvailabilityMinAggregateOutputType = {
    id: number | null
    spotId: number | null
    dayOfWeek: number | null
    startDateTime: Date | null
    endDateTime: Date | null
    startTime: string | null
    endTime: string | null
  }

  export type AvailabilityMaxAggregateOutputType = {
    id: number | null
    spotId: number | null
    dayOfWeek: number | null
    startDateTime: Date | null
    endDateTime: Date | null
    startTime: string | null
    endTime: string | null
  }

  export type AvailabilityCountAggregateOutputType = {
    id: number
    spotId: number
    dayOfWeek: number
    startDateTime: number
    endDateTime: number
    startTime: number
    endTime: number
    _all: number
  }


  export type AvailabilityAvgAggregateInputType = {
    id?: true
    spotId?: true
    dayOfWeek?: true
  }

  export type AvailabilitySumAggregateInputType = {
    id?: true
    spotId?: true
    dayOfWeek?: true
  }

  export type AvailabilityMinAggregateInputType = {
    id?: true
    spotId?: true
    dayOfWeek?: true
    startDateTime?: true
    endDateTime?: true
    startTime?: true
    endTime?: true
  }

  export type AvailabilityMaxAggregateInputType = {
    id?: true
    spotId?: true
    dayOfWeek?: true
    startDateTime?: true
    endDateTime?: true
    startTime?: true
    endTime?: true
  }

  export type AvailabilityCountAggregateInputType = {
    id?: true
    spotId?: true
    dayOfWeek?: true
    startDateTime?: true
    endDateTime?: true
    startTime?: true
    endTime?: true
    _all?: true
  }

  export type AvailabilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Availability to aggregate.
     */
    where?: AvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Availabilities to fetch.
     */
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Availabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Availabilities
    **/
    _count?: true | AvailabilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AvailabilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AvailabilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvailabilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvailabilityMaxAggregateInputType
  }

  export type GetAvailabilityAggregateType<T extends AvailabilityAggregateArgs> = {
        [P in keyof T & keyof AggregateAvailability]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvailability[P]>
      : GetScalarType<T[P], AggregateAvailability[P]>
  }




  export type AvailabilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailabilityWhereInput
    orderBy?: AvailabilityOrderByWithAggregationInput | AvailabilityOrderByWithAggregationInput[]
    by: AvailabilityScalarFieldEnum[] | AvailabilityScalarFieldEnum
    having?: AvailabilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvailabilityCountAggregateInputType | true
    _avg?: AvailabilityAvgAggregateInputType
    _sum?: AvailabilitySumAggregateInputType
    _min?: AvailabilityMinAggregateInputType
    _max?: AvailabilityMaxAggregateInputType
  }

  export type AvailabilityGroupByOutputType = {
    id: number
    spotId: number
    dayOfWeek: number | null
    startDateTime: Date | null
    endDateTime: Date | null
    startTime: string | null
    endTime: string | null
    _count: AvailabilityCountAggregateOutputType | null
    _avg: AvailabilityAvgAggregateOutputType | null
    _sum: AvailabilitySumAggregateOutputType | null
    _min: AvailabilityMinAggregateOutputType | null
    _max: AvailabilityMaxAggregateOutputType | null
  }

  type GetAvailabilityGroupByPayload<T extends AvailabilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvailabilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvailabilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvailabilityGroupByOutputType[P]>
            : GetScalarType<T[P], AvailabilityGroupByOutputType[P]>
        }
      >
    >


  export type AvailabilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    spotId?: boolean
    dayOfWeek?: boolean
    startDateTime?: boolean
    endDateTime?: boolean
    startTime?: boolean
    endTime?: boolean
    spot?: boolean | ParkingSpotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availability"]>

  export type AvailabilitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    spotId?: boolean
    dayOfWeek?: boolean
    startDateTime?: boolean
    endDateTime?: boolean
    startTime?: boolean
    endTime?: boolean
    spot?: boolean | ParkingSpotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availability"]>

  export type AvailabilitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    spotId?: boolean
    dayOfWeek?: boolean
    startDateTime?: boolean
    endDateTime?: boolean
    startTime?: boolean
    endTime?: boolean
    spot?: boolean | ParkingSpotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availability"]>

  export type AvailabilitySelectScalar = {
    id?: boolean
    spotId?: boolean
    dayOfWeek?: boolean
    startDateTime?: boolean
    endDateTime?: boolean
    startTime?: boolean
    endTime?: boolean
  }

  export type AvailabilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "spotId" | "dayOfWeek" | "startDateTime" | "endDateTime" | "startTime" | "endTime", ExtArgs["result"]["availability"]>
  export type AvailabilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spot?: boolean | ParkingSpotDefaultArgs<ExtArgs>
  }
  export type AvailabilityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spot?: boolean | ParkingSpotDefaultArgs<ExtArgs>
  }
  export type AvailabilityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spot?: boolean | ParkingSpotDefaultArgs<ExtArgs>
  }

  export type $AvailabilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Availability"
    objects: {
      spot: Prisma.$ParkingSpotPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      spotId: number
      dayOfWeek: number | null
      startDateTime: Date | null
      endDateTime: Date | null
      startTime: string | null
      endTime: string | null
    }, ExtArgs["result"]["availability"]>
    composites: {}
  }

  type AvailabilityGetPayload<S extends boolean | null | undefined | AvailabilityDefaultArgs> = $Result.GetResult<Prisma.$AvailabilityPayload, S>

  type AvailabilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvailabilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvailabilityCountAggregateInputType | true
    }

  export interface AvailabilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Availability'], meta: { name: 'Availability' } }
    /**
     * Find zero or one Availability that matches the filter.
     * @param {AvailabilityFindUniqueArgs} args - Arguments to find a Availability
     * @example
     * // Get one Availability
     * const availability = await prisma.availability.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvailabilityFindUniqueArgs>(args: SelectSubset<T, AvailabilityFindUniqueArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Availability that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvailabilityFindUniqueOrThrowArgs} args - Arguments to find a Availability
     * @example
     * // Get one Availability
     * const availability = await prisma.availability.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvailabilityFindUniqueOrThrowArgs>(args: SelectSubset<T, AvailabilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Availability that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityFindFirstArgs} args - Arguments to find a Availability
     * @example
     * // Get one Availability
     * const availability = await prisma.availability.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvailabilityFindFirstArgs>(args?: SelectSubset<T, AvailabilityFindFirstArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Availability that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityFindFirstOrThrowArgs} args - Arguments to find a Availability
     * @example
     * // Get one Availability
     * const availability = await prisma.availability.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvailabilityFindFirstOrThrowArgs>(args?: SelectSubset<T, AvailabilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Availabilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Availabilities
     * const availabilities = await prisma.availability.findMany()
     * 
     * // Get first 10 Availabilities
     * const availabilities = await prisma.availability.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const availabilityWithIdOnly = await prisma.availability.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvailabilityFindManyArgs>(args?: SelectSubset<T, AvailabilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Availability.
     * @param {AvailabilityCreateArgs} args - Arguments to create a Availability.
     * @example
     * // Create one Availability
     * const Availability = await prisma.availability.create({
     *   data: {
     *     // ... data to create a Availability
     *   }
     * })
     * 
     */
    create<T extends AvailabilityCreateArgs>(args: SelectSubset<T, AvailabilityCreateArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Availabilities.
     * @param {AvailabilityCreateManyArgs} args - Arguments to create many Availabilities.
     * @example
     * // Create many Availabilities
     * const availability = await prisma.availability.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvailabilityCreateManyArgs>(args?: SelectSubset<T, AvailabilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Availabilities and returns the data saved in the database.
     * @param {AvailabilityCreateManyAndReturnArgs} args - Arguments to create many Availabilities.
     * @example
     * // Create many Availabilities
     * const availability = await prisma.availability.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Availabilities and only return the `id`
     * const availabilityWithIdOnly = await prisma.availability.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvailabilityCreateManyAndReturnArgs>(args?: SelectSubset<T, AvailabilityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Availability.
     * @param {AvailabilityDeleteArgs} args - Arguments to delete one Availability.
     * @example
     * // Delete one Availability
     * const Availability = await prisma.availability.delete({
     *   where: {
     *     // ... filter to delete one Availability
     *   }
     * })
     * 
     */
    delete<T extends AvailabilityDeleteArgs>(args: SelectSubset<T, AvailabilityDeleteArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Availability.
     * @param {AvailabilityUpdateArgs} args - Arguments to update one Availability.
     * @example
     * // Update one Availability
     * const availability = await prisma.availability.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvailabilityUpdateArgs>(args: SelectSubset<T, AvailabilityUpdateArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Availabilities.
     * @param {AvailabilityDeleteManyArgs} args - Arguments to filter Availabilities to delete.
     * @example
     * // Delete a few Availabilities
     * const { count } = await prisma.availability.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvailabilityDeleteManyArgs>(args?: SelectSubset<T, AvailabilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Availabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Availabilities
     * const availability = await prisma.availability.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvailabilityUpdateManyArgs>(args: SelectSubset<T, AvailabilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Availabilities and returns the data updated in the database.
     * @param {AvailabilityUpdateManyAndReturnArgs} args - Arguments to update many Availabilities.
     * @example
     * // Update many Availabilities
     * const availability = await prisma.availability.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Availabilities and only return the `id`
     * const availabilityWithIdOnly = await prisma.availability.updateManyAndReturn({
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
    updateManyAndReturn<T extends AvailabilityUpdateManyAndReturnArgs>(args: SelectSubset<T, AvailabilityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Availability.
     * @param {AvailabilityUpsertArgs} args - Arguments to update or create a Availability.
     * @example
     * // Update or create a Availability
     * const availability = await prisma.availability.upsert({
     *   create: {
     *     // ... data to create a Availability
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Availability we want to update
     *   }
     * })
     */
    upsert<T extends AvailabilityUpsertArgs>(args: SelectSubset<T, AvailabilityUpsertArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Availabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityCountArgs} args - Arguments to filter Availabilities to count.
     * @example
     * // Count the number of Availabilities
     * const count = await prisma.availability.count({
     *   where: {
     *     // ... the filter for the Availabilities we want to count
     *   }
     * })
    **/
    count<T extends AvailabilityCountArgs>(
      args?: Subset<T, AvailabilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvailabilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Availability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AvailabilityAggregateArgs>(args: Subset<T, AvailabilityAggregateArgs>): Prisma.PrismaPromise<GetAvailabilityAggregateType<T>>

    /**
     * Group by Availability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityGroupByArgs} args - Group by arguments.
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
      T extends AvailabilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvailabilityGroupByArgs['orderBy'] }
        : { orderBy?: AvailabilityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AvailabilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvailabilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Availability model
   */
  readonly fields: AvailabilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Availability.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvailabilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    spot<T extends ParkingSpotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParkingSpotDefaultArgs<ExtArgs>>): Prisma__ParkingSpotClient<$Result.GetResult<Prisma.$ParkingSpotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Availability model
   */
  interface AvailabilityFieldRefs {
    readonly id: FieldRef<"Availability", 'Int'>
    readonly spotId: FieldRef<"Availability", 'Int'>
    readonly dayOfWeek: FieldRef<"Availability", 'Int'>
    readonly startDateTime: FieldRef<"Availability", 'DateTime'>
    readonly endDateTime: FieldRef<"Availability", 'DateTime'>
    readonly startTime: FieldRef<"Availability", 'String'>
    readonly endTime: FieldRef<"Availability", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Availability findUnique
   */
  export type AvailabilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availability to fetch.
     */
    where: AvailabilityWhereUniqueInput
  }

  /**
   * Availability findUniqueOrThrow
   */
  export type AvailabilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availability to fetch.
     */
    where: AvailabilityWhereUniqueInput
  }

  /**
   * Availability findFirst
   */
  export type AvailabilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availability to fetch.
     */
    where?: AvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Availabilities to fetch.
     */
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Availabilities.
     */
    cursor?: AvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Availabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Availabilities.
     */
    distinct?: AvailabilityScalarFieldEnum | AvailabilityScalarFieldEnum[]
  }

  /**
   * Availability findFirstOrThrow
   */
  export type AvailabilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availability to fetch.
     */
    where?: AvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Availabilities to fetch.
     */
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Availabilities.
     */
    cursor?: AvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Availabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Availabilities.
     */
    distinct?: AvailabilityScalarFieldEnum | AvailabilityScalarFieldEnum[]
  }

  /**
   * Availability findMany
   */
  export type AvailabilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availabilities to fetch.
     */
    where?: AvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Availabilities to fetch.
     */
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Availabilities.
     */
    cursor?: AvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Availabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Availabilities.
     */
    distinct?: AvailabilityScalarFieldEnum | AvailabilityScalarFieldEnum[]
  }

  /**
   * Availability create
   */
  export type AvailabilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to create a Availability.
     */
    data: XOR<AvailabilityCreateInput, AvailabilityUncheckedCreateInput>
  }

  /**
   * Availability createMany
   */
  export type AvailabilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Availabilities.
     */
    data: AvailabilityCreateManyInput | AvailabilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Availability createManyAndReturn
   */
  export type AvailabilityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * The data used to create many Availabilities.
     */
    data: AvailabilityCreateManyInput | AvailabilityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Availability update
   */
  export type AvailabilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to update a Availability.
     */
    data: XOR<AvailabilityUpdateInput, AvailabilityUncheckedUpdateInput>
    /**
     * Choose, which Availability to update.
     */
    where: AvailabilityWhereUniqueInput
  }

  /**
   * Availability updateMany
   */
  export type AvailabilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Availabilities.
     */
    data: XOR<AvailabilityUpdateManyMutationInput, AvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which Availabilities to update
     */
    where?: AvailabilityWhereInput
    /**
     * Limit how many Availabilities to update.
     */
    limit?: number
  }

  /**
   * Availability updateManyAndReturn
   */
  export type AvailabilityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * The data used to update Availabilities.
     */
    data: XOR<AvailabilityUpdateManyMutationInput, AvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which Availabilities to update
     */
    where?: AvailabilityWhereInput
    /**
     * Limit how many Availabilities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Availability upsert
   */
  export type AvailabilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * The filter to search for the Availability to update in case it exists.
     */
    where: AvailabilityWhereUniqueInput
    /**
     * In case the Availability found by the `where` argument doesn't exist, create a new Availability with this data.
     */
    create: XOR<AvailabilityCreateInput, AvailabilityUncheckedCreateInput>
    /**
     * In case the Availability was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvailabilityUpdateInput, AvailabilityUncheckedUpdateInput>
  }

  /**
   * Availability delete
   */
  export type AvailabilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter which Availability to delete.
     */
    where: AvailabilityWhereUniqueInput
  }

  /**
   * Availability deleteMany
   */
  export type AvailabilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Availabilities to delete
     */
    where?: AvailabilityWhereInput
    /**
     * Limit how many Availabilities to delete.
     */
    limit?: number
  }

  /**
   * Availability without action
   */
  export type AvailabilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    id: number | null
    spotId: number | null
    renterId: number | null
    totalPrice: number | null
  }

  export type BookingSumAggregateOutputType = {
    id: number | null
    spotId: number | null
    renterId: number | null
    totalPrice: number | null
  }

  export type BookingMinAggregateOutputType = {
    id: number | null
    spotId: number | null
    renterId: number | null
    startTime: Date | null
    endTime: Date | null
    totalPrice: number | null
    status: string | null
    contractTxHash: string | null
    depositStatus: string | null
  }

  export type BookingMaxAggregateOutputType = {
    id: number | null
    spotId: number | null
    renterId: number | null
    startTime: Date | null
    endTime: Date | null
    totalPrice: number | null
    status: string | null
    contractTxHash: string | null
    depositStatus: string | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    spotId: number
    renterId: number
    startTime: number
    endTime: number
    totalPrice: number
    status: number
    contractTxHash: number
    depositStatus: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    id?: true
    spotId?: true
    renterId?: true
    totalPrice?: true
  }

  export type BookingSumAggregateInputType = {
    id?: true
    spotId?: true
    renterId?: true
    totalPrice?: true
  }

  export type BookingMinAggregateInputType = {
    id?: true
    spotId?: true
    renterId?: true
    startTime?: true
    endTime?: true
    totalPrice?: true
    status?: true
    contractTxHash?: true
    depositStatus?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    spotId?: true
    renterId?: true
    startTime?: true
    endTime?: true
    totalPrice?: true
    status?: true
    contractTxHash?: true
    depositStatus?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    spotId?: true
    renterId?: true
    startTime?: true
    endTime?: true
    totalPrice?: true
    status?: true
    contractTxHash?: true
    depositStatus?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: number
    spotId: number
    renterId: number
    startTime: Date
    endTime: Date
    totalPrice: number
    status: string
    contractTxHash: string | null
    depositStatus: string | null
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    spotId?: boolean
    renterId?: boolean
    startTime?: boolean
    endTime?: boolean
    totalPrice?: boolean
    status?: boolean
    contractTxHash?: boolean
    depositStatus?: boolean
    spot?: boolean | ParkingSpotDefaultArgs<ExtArgs>
    renter?: boolean | UserDefaultArgs<ExtArgs>
    blockchainEvents?: boolean | Booking$blockchainEventsArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    spotId?: boolean
    renterId?: boolean
    startTime?: boolean
    endTime?: boolean
    totalPrice?: boolean
    status?: boolean
    contractTxHash?: boolean
    depositStatus?: boolean
    spot?: boolean | ParkingSpotDefaultArgs<ExtArgs>
    renter?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    spotId?: boolean
    renterId?: boolean
    startTime?: boolean
    endTime?: boolean
    totalPrice?: boolean
    status?: boolean
    contractTxHash?: boolean
    depositStatus?: boolean
    spot?: boolean | ParkingSpotDefaultArgs<ExtArgs>
    renter?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectScalar = {
    id?: boolean
    spotId?: boolean
    renterId?: boolean
    startTime?: boolean
    endTime?: boolean
    totalPrice?: boolean
    status?: boolean
    contractTxHash?: boolean
    depositStatus?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "spotId" | "renterId" | "startTime" | "endTime" | "totalPrice" | "status" | "contractTxHash" | "depositStatus", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spot?: boolean | ParkingSpotDefaultArgs<ExtArgs>
    renter?: boolean | UserDefaultArgs<ExtArgs>
    blockchainEvents?: boolean | Booking$blockchainEventsArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spot?: boolean | ParkingSpotDefaultArgs<ExtArgs>
    renter?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spot?: boolean | ParkingSpotDefaultArgs<ExtArgs>
    renter?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      spot: Prisma.$ParkingSpotPayload<ExtArgs>
      renter: Prisma.$UserPayload<ExtArgs>
      blockchainEvents: Prisma.$BlockchainEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      spotId: number
      renterId: number
      startTime: Date
      endTime: Date
      totalPrice: number
      status: string
      contractTxHash: string | null
      depositStatus: string | null
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {BookingCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {BookingUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.updateManyAndReturn({
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
    updateManyAndReturn<T extends BookingUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
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
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    spot<T extends ParkingSpotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParkingSpotDefaultArgs<ExtArgs>>): Prisma__ParkingSpotClient<$Result.GetResult<Prisma.$ParkingSpotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    renter<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    blockchainEvents<T extends Booking$blockchainEventsArgs<ExtArgs> = {}>(args?: Subset<T, Booking$blockchainEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockchainEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'Int'>
    readonly spotId: FieldRef<"Booking", 'Int'>
    readonly renterId: FieldRef<"Booking", 'Int'>
    readonly startTime: FieldRef<"Booking", 'DateTime'>
    readonly endTime: FieldRef<"Booking", 'DateTime'>
    readonly totalPrice: FieldRef<"Booking", 'Float'>
    readonly status: FieldRef<"Booking", 'String'>
    readonly contractTxHash: FieldRef<"Booking", 'String'>
    readonly depositStatus: FieldRef<"Booking", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booking createManyAndReturn
   */
  export type BookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking updateManyAndReturn
   */
  export type BookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Booking.blockchainEvents
   */
  export type Booking$blockchainEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockchainEvent
     */
    select?: BlockchainEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockchainEvent
     */
    omit?: BlockchainEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockchainEventInclude<ExtArgs> | null
    where?: BlockchainEventWhereInput
    orderBy?: BlockchainEventOrderByWithRelationInput | BlockchainEventOrderByWithRelationInput[]
    cursor?: BlockchainEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlockchainEventScalarFieldEnum | BlockchainEventScalarFieldEnum[]
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
  }


  /**
   * Model SurgePricingLog
   */

  export type AggregateSurgePricingLog = {
    _count: SurgePricingLogCountAggregateOutputType | null
    _avg: SurgePricingLogAvgAggregateOutputType | null
    _sum: SurgePricingLogSumAggregateOutputType | null
    _min: SurgePricingLogMinAggregateOutputType | null
    _max: SurgePricingLogMaxAggregateOutputType | null
  }

  export type SurgePricingLogAvgAggregateOutputType = {
    id: number | null
    spotId: number | null
    multiplier: number | null
  }

  export type SurgePricingLogSumAggregateOutputType = {
    id: number | null
    spotId: number | null
    multiplier: number | null
  }

  export type SurgePricingLogMinAggregateOutputType = {
    id: number | null
    spotId: number | null
    multiplier: number | null
    reason: string | null
    createdAt: Date | null
  }

  export type SurgePricingLogMaxAggregateOutputType = {
    id: number | null
    spotId: number | null
    multiplier: number | null
    reason: string | null
    createdAt: Date | null
  }

  export type SurgePricingLogCountAggregateOutputType = {
    id: number
    spotId: number
    multiplier: number
    reason: number
    createdAt: number
    _all: number
  }


  export type SurgePricingLogAvgAggregateInputType = {
    id?: true
    spotId?: true
    multiplier?: true
  }

  export type SurgePricingLogSumAggregateInputType = {
    id?: true
    spotId?: true
    multiplier?: true
  }

  export type SurgePricingLogMinAggregateInputType = {
    id?: true
    spotId?: true
    multiplier?: true
    reason?: true
    createdAt?: true
  }

  export type SurgePricingLogMaxAggregateInputType = {
    id?: true
    spotId?: true
    multiplier?: true
    reason?: true
    createdAt?: true
  }

  export type SurgePricingLogCountAggregateInputType = {
    id?: true
    spotId?: true
    multiplier?: true
    reason?: true
    createdAt?: true
    _all?: true
  }

  export type SurgePricingLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SurgePricingLog to aggregate.
     */
    where?: SurgePricingLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SurgePricingLogs to fetch.
     */
    orderBy?: SurgePricingLogOrderByWithRelationInput | SurgePricingLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SurgePricingLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SurgePricingLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SurgePricingLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SurgePricingLogs
    **/
    _count?: true | SurgePricingLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SurgePricingLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SurgePricingLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SurgePricingLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SurgePricingLogMaxAggregateInputType
  }

  export type GetSurgePricingLogAggregateType<T extends SurgePricingLogAggregateArgs> = {
        [P in keyof T & keyof AggregateSurgePricingLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSurgePricingLog[P]>
      : GetScalarType<T[P], AggregateSurgePricingLog[P]>
  }




  export type SurgePricingLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SurgePricingLogWhereInput
    orderBy?: SurgePricingLogOrderByWithAggregationInput | SurgePricingLogOrderByWithAggregationInput[]
    by: SurgePricingLogScalarFieldEnum[] | SurgePricingLogScalarFieldEnum
    having?: SurgePricingLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SurgePricingLogCountAggregateInputType | true
    _avg?: SurgePricingLogAvgAggregateInputType
    _sum?: SurgePricingLogSumAggregateInputType
    _min?: SurgePricingLogMinAggregateInputType
    _max?: SurgePricingLogMaxAggregateInputType
  }

  export type SurgePricingLogGroupByOutputType = {
    id: number
    spotId: number
    multiplier: number
    reason: string | null
    createdAt: Date
    _count: SurgePricingLogCountAggregateOutputType | null
    _avg: SurgePricingLogAvgAggregateOutputType | null
    _sum: SurgePricingLogSumAggregateOutputType | null
    _min: SurgePricingLogMinAggregateOutputType | null
    _max: SurgePricingLogMaxAggregateOutputType | null
  }

  type GetSurgePricingLogGroupByPayload<T extends SurgePricingLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SurgePricingLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SurgePricingLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SurgePricingLogGroupByOutputType[P]>
            : GetScalarType<T[P], SurgePricingLogGroupByOutputType[P]>
        }
      >
    >


  export type SurgePricingLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    spotId?: boolean
    multiplier?: boolean
    reason?: boolean
    createdAt?: boolean
    spot?: boolean | ParkingSpotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["surgePricingLog"]>

  export type SurgePricingLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    spotId?: boolean
    multiplier?: boolean
    reason?: boolean
    createdAt?: boolean
    spot?: boolean | ParkingSpotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["surgePricingLog"]>

  export type SurgePricingLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    spotId?: boolean
    multiplier?: boolean
    reason?: boolean
    createdAt?: boolean
    spot?: boolean | ParkingSpotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["surgePricingLog"]>

  export type SurgePricingLogSelectScalar = {
    id?: boolean
    spotId?: boolean
    multiplier?: boolean
    reason?: boolean
    createdAt?: boolean
  }

  export type SurgePricingLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "spotId" | "multiplier" | "reason" | "createdAt", ExtArgs["result"]["surgePricingLog"]>
  export type SurgePricingLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spot?: boolean | ParkingSpotDefaultArgs<ExtArgs>
  }
  export type SurgePricingLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spot?: boolean | ParkingSpotDefaultArgs<ExtArgs>
  }
  export type SurgePricingLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spot?: boolean | ParkingSpotDefaultArgs<ExtArgs>
  }

  export type $SurgePricingLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SurgePricingLog"
    objects: {
      spot: Prisma.$ParkingSpotPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      spotId: number
      multiplier: number
      reason: string | null
      createdAt: Date
    }, ExtArgs["result"]["surgePricingLog"]>
    composites: {}
  }

  type SurgePricingLogGetPayload<S extends boolean | null | undefined | SurgePricingLogDefaultArgs> = $Result.GetResult<Prisma.$SurgePricingLogPayload, S>

  type SurgePricingLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SurgePricingLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SurgePricingLogCountAggregateInputType | true
    }

  export interface SurgePricingLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SurgePricingLog'], meta: { name: 'SurgePricingLog' } }
    /**
     * Find zero or one SurgePricingLog that matches the filter.
     * @param {SurgePricingLogFindUniqueArgs} args - Arguments to find a SurgePricingLog
     * @example
     * // Get one SurgePricingLog
     * const surgePricingLog = await prisma.surgePricingLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SurgePricingLogFindUniqueArgs>(args: SelectSubset<T, SurgePricingLogFindUniqueArgs<ExtArgs>>): Prisma__SurgePricingLogClient<$Result.GetResult<Prisma.$SurgePricingLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SurgePricingLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SurgePricingLogFindUniqueOrThrowArgs} args - Arguments to find a SurgePricingLog
     * @example
     * // Get one SurgePricingLog
     * const surgePricingLog = await prisma.surgePricingLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SurgePricingLogFindUniqueOrThrowArgs>(args: SelectSubset<T, SurgePricingLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SurgePricingLogClient<$Result.GetResult<Prisma.$SurgePricingLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SurgePricingLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurgePricingLogFindFirstArgs} args - Arguments to find a SurgePricingLog
     * @example
     * // Get one SurgePricingLog
     * const surgePricingLog = await prisma.surgePricingLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SurgePricingLogFindFirstArgs>(args?: SelectSubset<T, SurgePricingLogFindFirstArgs<ExtArgs>>): Prisma__SurgePricingLogClient<$Result.GetResult<Prisma.$SurgePricingLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SurgePricingLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurgePricingLogFindFirstOrThrowArgs} args - Arguments to find a SurgePricingLog
     * @example
     * // Get one SurgePricingLog
     * const surgePricingLog = await prisma.surgePricingLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SurgePricingLogFindFirstOrThrowArgs>(args?: SelectSubset<T, SurgePricingLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__SurgePricingLogClient<$Result.GetResult<Prisma.$SurgePricingLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SurgePricingLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurgePricingLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SurgePricingLogs
     * const surgePricingLogs = await prisma.surgePricingLog.findMany()
     * 
     * // Get first 10 SurgePricingLogs
     * const surgePricingLogs = await prisma.surgePricingLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const surgePricingLogWithIdOnly = await prisma.surgePricingLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SurgePricingLogFindManyArgs>(args?: SelectSubset<T, SurgePricingLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SurgePricingLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SurgePricingLog.
     * @param {SurgePricingLogCreateArgs} args - Arguments to create a SurgePricingLog.
     * @example
     * // Create one SurgePricingLog
     * const SurgePricingLog = await prisma.surgePricingLog.create({
     *   data: {
     *     // ... data to create a SurgePricingLog
     *   }
     * })
     * 
     */
    create<T extends SurgePricingLogCreateArgs>(args: SelectSubset<T, SurgePricingLogCreateArgs<ExtArgs>>): Prisma__SurgePricingLogClient<$Result.GetResult<Prisma.$SurgePricingLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SurgePricingLogs.
     * @param {SurgePricingLogCreateManyArgs} args - Arguments to create many SurgePricingLogs.
     * @example
     * // Create many SurgePricingLogs
     * const surgePricingLog = await prisma.surgePricingLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SurgePricingLogCreateManyArgs>(args?: SelectSubset<T, SurgePricingLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SurgePricingLogs and returns the data saved in the database.
     * @param {SurgePricingLogCreateManyAndReturnArgs} args - Arguments to create many SurgePricingLogs.
     * @example
     * // Create many SurgePricingLogs
     * const surgePricingLog = await prisma.surgePricingLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SurgePricingLogs and only return the `id`
     * const surgePricingLogWithIdOnly = await prisma.surgePricingLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SurgePricingLogCreateManyAndReturnArgs>(args?: SelectSubset<T, SurgePricingLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SurgePricingLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SurgePricingLog.
     * @param {SurgePricingLogDeleteArgs} args - Arguments to delete one SurgePricingLog.
     * @example
     * // Delete one SurgePricingLog
     * const SurgePricingLog = await prisma.surgePricingLog.delete({
     *   where: {
     *     // ... filter to delete one SurgePricingLog
     *   }
     * })
     * 
     */
    delete<T extends SurgePricingLogDeleteArgs>(args: SelectSubset<T, SurgePricingLogDeleteArgs<ExtArgs>>): Prisma__SurgePricingLogClient<$Result.GetResult<Prisma.$SurgePricingLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SurgePricingLog.
     * @param {SurgePricingLogUpdateArgs} args - Arguments to update one SurgePricingLog.
     * @example
     * // Update one SurgePricingLog
     * const surgePricingLog = await prisma.surgePricingLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SurgePricingLogUpdateArgs>(args: SelectSubset<T, SurgePricingLogUpdateArgs<ExtArgs>>): Prisma__SurgePricingLogClient<$Result.GetResult<Prisma.$SurgePricingLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SurgePricingLogs.
     * @param {SurgePricingLogDeleteManyArgs} args - Arguments to filter SurgePricingLogs to delete.
     * @example
     * // Delete a few SurgePricingLogs
     * const { count } = await prisma.surgePricingLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SurgePricingLogDeleteManyArgs>(args?: SelectSubset<T, SurgePricingLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SurgePricingLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurgePricingLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SurgePricingLogs
     * const surgePricingLog = await prisma.surgePricingLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SurgePricingLogUpdateManyArgs>(args: SelectSubset<T, SurgePricingLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SurgePricingLogs and returns the data updated in the database.
     * @param {SurgePricingLogUpdateManyAndReturnArgs} args - Arguments to update many SurgePricingLogs.
     * @example
     * // Update many SurgePricingLogs
     * const surgePricingLog = await prisma.surgePricingLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SurgePricingLogs and only return the `id`
     * const surgePricingLogWithIdOnly = await prisma.surgePricingLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends SurgePricingLogUpdateManyAndReturnArgs>(args: SelectSubset<T, SurgePricingLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SurgePricingLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SurgePricingLog.
     * @param {SurgePricingLogUpsertArgs} args - Arguments to update or create a SurgePricingLog.
     * @example
     * // Update or create a SurgePricingLog
     * const surgePricingLog = await prisma.surgePricingLog.upsert({
     *   create: {
     *     // ... data to create a SurgePricingLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SurgePricingLog we want to update
     *   }
     * })
     */
    upsert<T extends SurgePricingLogUpsertArgs>(args: SelectSubset<T, SurgePricingLogUpsertArgs<ExtArgs>>): Prisma__SurgePricingLogClient<$Result.GetResult<Prisma.$SurgePricingLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SurgePricingLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurgePricingLogCountArgs} args - Arguments to filter SurgePricingLogs to count.
     * @example
     * // Count the number of SurgePricingLogs
     * const count = await prisma.surgePricingLog.count({
     *   where: {
     *     // ... the filter for the SurgePricingLogs we want to count
     *   }
     * })
    **/
    count<T extends SurgePricingLogCountArgs>(
      args?: Subset<T, SurgePricingLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SurgePricingLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SurgePricingLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurgePricingLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SurgePricingLogAggregateArgs>(args: Subset<T, SurgePricingLogAggregateArgs>): Prisma.PrismaPromise<GetSurgePricingLogAggregateType<T>>

    /**
     * Group by SurgePricingLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurgePricingLogGroupByArgs} args - Group by arguments.
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
      T extends SurgePricingLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SurgePricingLogGroupByArgs['orderBy'] }
        : { orderBy?: SurgePricingLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SurgePricingLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSurgePricingLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SurgePricingLog model
   */
  readonly fields: SurgePricingLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SurgePricingLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SurgePricingLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    spot<T extends ParkingSpotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParkingSpotDefaultArgs<ExtArgs>>): Prisma__ParkingSpotClient<$Result.GetResult<Prisma.$ParkingSpotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SurgePricingLog model
   */
  interface SurgePricingLogFieldRefs {
    readonly id: FieldRef<"SurgePricingLog", 'Int'>
    readonly spotId: FieldRef<"SurgePricingLog", 'Int'>
    readonly multiplier: FieldRef<"SurgePricingLog", 'Float'>
    readonly reason: FieldRef<"SurgePricingLog", 'String'>
    readonly createdAt: FieldRef<"SurgePricingLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SurgePricingLog findUnique
   */
  export type SurgePricingLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurgePricingLog
     */
    select?: SurgePricingLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurgePricingLog
     */
    omit?: SurgePricingLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurgePricingLogInclude<ExtArgs> | null
    /**
     * Filter, which SurgePricingLog to fetch.
     */
    where: SurgePricingLogWhereUniqueInput
  }

  /**
   * SurgePricingLog findUniqueOrThrow
   */
  export type SurgePricingLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurgePricingLog
     */
    select?: SurgePricingLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurgePricingLog
     */
    omit?: SurgePricingLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurgePricingLogInclude<ExtArgs> | null
    /**
     * Filter, which SurgePricingLog to fetch.
     */
    where: SurgePricingLogWhereUniqueInput
  }

  /**
   * SurgePricingLog findFirst
   */
  export type SurgePricingLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurgePricingLog
     */
    select?: SurgePricingLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurgePricingLog
     */
    omit?: SurgePricingLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurgePricingLogInclude<ExtArgs> | null
    /**
     * Filter, which SurgePricingLog to fetch.
     */
    where?: SurgePricingLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SurgePricingLogs to fetch.
     */
    orderBy?: SurgePricingLogOrderByWithRelationInput | SurgePricingLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SurgePricingLogs.
     */
    cursor?: SurgePricingLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SurgePricingLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SurgePricingLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SurgePricingLogs.
     */
    distinct?: SurgePricingLogScalarFieldEnum | SurgePricingLogScalarFieldEnum[]
  }

  /**
   * SurgePricingLog findFirstOrThrow
   */
  export type SurgePricingLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurgePricingLog
     */
    select?: SurgePricingLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurgePricingLog
     */
    omit?: SurgePricingLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurgePricingLogInclude<ExtArgs> | null
    /**
     * Filter, which SurgePricingLog to fetch.
     */
    where?: SurgePricingLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SurgePricingLogs to fetch.
     */
    orderBy?: SurgePricingLogOrderByWithRelationInput | SurgePricingLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SurgePricingLogs.
     */
    cursor?: SurgePricingLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SurgePricingLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SurgePricingLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SurgePricingLogs.
     */
    distinct?: SurgePricingLogScalarFieldEnum | SurgePricingLogScalarFieldEnum[]
  }

  /**
   * SurgePricingLog findMany
   */
  export type SurgePricingLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurgePricingLog
     */
    select?: SurgePricingLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurgePricingLog
     */
    omit?: SurgePricingLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurgePricingLogInclude<ExtArgs> | null
    /**
     * Filter, which SurgePricingLogs to fetch.
     */
    where?: SurgePricingLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SurgePricingLogs to fetch.
     */
    orderBy?: SurgePricingLogOrderByWithRelationInput | SurgePricingLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SurgePricingLogs.
     */
    cursor?: SurgePricingLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SurgePricingLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SurgePricingLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SurgePricingLogs.
     */
    distinct?: SurgePricingLogScalarFieldEnum | SurgePricingLogScalarFieldEnum[]
  }

  /**
   * SurgePricingLog create
   */
  export type SurgePricingLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurgePricingLog
     */
    select?: SurgePricingLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurgePricingLog
     */
    omit?: SurgePricingLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurgePricingLogInclude<ExtArgs> | null
    /**
     * The data needed to create a SurgePricingLog.
     */
    data: XOR<SurgePricingLogCreateInput, SurgePricingLogUncheckedCreateInput>
  }

  /**
   * SurgePricingLog createMany
   */
  export type SurgePricingLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SurgePricingLogs.
     */
    data: SurgePricingLogCreateManyInput | SurgePricingLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SurgePricingLog createManyAndReturn
   */
  export type SurgePricingLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurgePricingLog
     */
    select?: SurgePricingLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SurgePricingLog
     */
    omit?: SurgePricingLogOmit<ExtArgs> | null
    /**
     * The data used to create many SurgePricingLogs.
     */
    data: SurgePricingLogCreateManyInput | SurgePricingLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurgePricingLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SurgePricingLog update
   */
  export type SurgePricingLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurgePricingLog
     */
    select?: SurgePricingLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurgePricingLog
     */
    omit?: SurgePricingLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurgePricingLogInclude<ExtArgs> | null
    /**
     * The data needed to update a SurgePricingLog.
     */
    data: XOR<SurgePricingLogUpdateInput, SurgePricingLogUncheckedUpdateInput>
    /**
     * Choose, which SurgePricingLog to update.
     */
    where: SurgePricingLogWhereUniqueInput
  }

  /**
   * SurgePricingLog updateMany
   */
  export type SurgePricingLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SurgePricingLogs.
     */
    data: XOR<SurgePricingLogUpdateManyMutationInput, SurgePricingLogUncheckedUpdateManyInput>
    /**
     * Filter which SurgePricingLogs to update
     */
    where?: SurgePricingLogWhereInput
    /**
     * Limit how many SurgePricingLogs to update.
     */
    limit?: number
  }

  /**
   * SurgePricingLog updateManyAndReturn
   */
  export type SurgePricingLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurgePricingLog
     */
    select?: SurgePricingLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SurgePricingLog
     */
    omit?: SurgePricingLogOmit<ExtArgs> | null
    /**
     * The data used to update SurgePricingLogs.
     */
    data: XOR<SurgePricingLogUpdateManyMutationInput, SurgePricingLogUncheckedUpdateManyInput>
    /**
     * Filter which SurgePricingLogs to update
     */
    where?: SurgePricingLogWhereInput
    /**
     * Limit how many SurgePricingLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurgePricingLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SurgePricingLog upsert
   */
  export type SurgePricingLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurgePricingLog
     */
    select?: SurgePricingLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurgePricingLog
     */
    omit?: SurgePricingLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurgePricingLogInclude<ExtArgs> | null
    /**
     * The filter to search for the SurgePricingLog to update in case it exists.
     */
    where: SurgePricingLogWhereUniqueInput
    /**
     * In case the SurgePricingLog found by the `where` argument doesn't exist, create a new SurgePricingLog with this data.
     */
    create: XOR<SurgePricingLogCreateInput, SurgePricingLogUncheckedCreateInput>
    /**
     * In case the SurgePricingLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SurgePricingLogUpdateInput, SurgePricingLogUncheckedUpdateInput>
  }

  /**
   * SurgePricingLog delete
   */
  export type SurgePricingLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurgePricingLog
     */
    select?: SurgePricingLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurgePricingLog
     */
    omit?: SurgePricingLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurgePricingLogInclude<ExtArgs> | null
    /**
     * Filter which SurgePricingLog to delete.
     */
    where: SurgePricingLogWhereUniqueInput
  }

  /**
   * SurgePricingLog deleteMany
   */
  export type SurgePricingLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SurgePricingLogs to delete
     */
    where?: SurgePricingLogWhereInput
    /**
     * Limit how many SurgePricingLogs to delete.
     */
    limit?: number
  }

  /**
   * SurgePricingLog without action
   */
  export type SurgePricingLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SurgePricingLog
     */
    select?: SurgePricingLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SurgePricingLog
     */
    omit?: SurgePricingLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SurgePricingLogInclude<ExtArgs> | null
  }


  /**
   * Model BlockchainEvent
   */

  export type AggregateBlockchainEvent = {
    _count: BlockchainEventCountAggregateOutputType | null
    _avg: BlockchainEventAvgAggregateOutputType | null
    _sum: BlockchainEventSumAggregateOutputType | null
    _min: BlockchainEventMinAggregateOutputType | null
    _max: BlockchainEventMaxAggregateOutputType | null
  }

  export type BlockchainEventAvgAggregateOutputType = {
    id: number | null
    bookingId: number | null
  }

  export type BlockchainEventSumAggregateOutputType = {
    id: number | null
    bookingId: number | null
  }

  export type BlockchainEventMinAggregateOutputType = {
    id: number | null
    bookingId: number | null
    eventType: string | null
    txHash: string | null
    createdAt: Date | null
  }

  export type BlockchainEventMaxAggregateOutputType = {
    id: number | null
    bookingId: number | null
    eventType: string | null
    txHash: string | null
    createdAt: Date | null
  }

  export type BlockchainEventCountAggregateOutputType = {
    id: number
    bookingId: number
    eventType: number
    txHash: number
    createdAt: number
    _all: number
  }


  export type BlockchainEventAvgAggregateInputType = {
    id?: true
    bookingId?: true
  }

  export type BlockchainEventSumAggregateInputType = {
    id?: true
    bookingId?: true
  }

  export type BlockchainEventMinAggregateInputType = {
    id?: true
    bookingId?: true
    eventType?: true
    txHash?: true
    createdAt?: true
  }

  export type BlockchainEventMaxAggregateInputType = {
    id?: true
    bookingId?: true
    eventType?: true
    txHash?: true
    createdAt?: true
  }

  export type BlockchainEventCountAggregateInputType = {
    id?: true
    bookingId?: true
    eventType?: true
    txHash?: true
    createdAt?: true
    _all?: true
  }

  export type BlockchainEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlockchainEvent to aggregate.
     */
    where?: BlockchainEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockchainEvents to fetch.
     */
    orderBy?: BlockchainEventOrderByWithRelationInput | BlockchainEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlockchainEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockchainEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockchainEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlockchainEvents
    **/
    _count?: true | BlockchainEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlockchainEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlockchainEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlockchainEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlockchainEventMaxAggregateInputType
  }

  export type GetBlockchainEventAggregateType<T extends BlockchainEventAggregateArgs> = {
        [P in keyof T & keyof AggregateBlockchainEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlockchainEvent[P]>
      : GetScalarType<T[P], AggregateBlockchainEvent[P]>
  }




  export type BlockchainEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlockchainEventWhereInput
    orderBy?: BlockchainEventOrderByWithAggregationInput | BlockchainEventOrderByWithAggregationInput[]
    by: BlockchainEventScalarFieldEnum[] | BlockchainEventScalarFieldEnum
    having?: BlockchainEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlockchainEventCountAggregateInputType | true
    _avg?: BlockchainEventAvgAggregateInputType
    _sum?: BlockchainEventSumAggregateInputType
    _min?: BlockchainEventMinAggregateInputType
    _max?: BlockchainEventMaxAggregateInputType
  }

  export type BlockchainEventGroupByOutputType = {
    id: number
    bookingId: number
    eventType: string
    txHash: string
    createdAt: Date
    _count: BlockchainEventCountAggregateOutputType | null
    _avg: BlockchainEventAvgAggregateOutputType | null
    _sum: BlockchainEventSumAggregateOutputType | null
    _min: BlockchainEventMinAggregateOutputType | null
    _max: BlockchainEventMaxAggregateOutputType | null
  }

  type GetBlockchainEventGroupByPayload<T extends BlockchainEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlockchainEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlockchainEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlockchainEventGroupByOutputType[P]>
            : GetScalarType<T[P], BlockchainEventGroupByOutputType[P]>
        }
      >
    >


  export type BlockchainEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    eventType?: boolean
    txHash?: boolean
    createdAt?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blockchainEvent"]>

  export type BlockchainEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    eventType?: boolean
    txHash?: boolean
    createdAt?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blockchainEvent"]>

  export type BlockchainEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    eventType?: boolean
    txHash?: boolean
    createdAt?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blockchainEvent"]>

  export type BlockchainEventSelectScalar = {
    id?: boolean
    bookingId?: boolean
    eventType?: boolean
    txHash?: boolean
    createdAt?: boolean
  }

  export type BlockchainEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookingId" | "eventType" | "txHash" | "createdAt", ExtArgs["result"]["blockchainEvent"]>
  export type BlockchainEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }
  export type BlockchainEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }
  export type BlockchainEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }

  export type $BlockchainEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlockchainEvent"
    objects: {
      booking: Prisma.$BookingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      bookingId: number
      eventType: string
      txHash: string
      createdAt: Date
    }, ExtArgs["result"]["blockchainEvent"]>
    composites: {}
  }

  type BlockchainEventGetPayload<S extends boolean | null | undefined | BlockchainEventDefaultArgs> = $Result.GetResult<Prisma.$BlockchainEventPayload, S>

  type BlockchainEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlockchainEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlockchainEventCountAggregateInputType | true
    }

  export interface BlockchainEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlockchainEvent'], meta: { name: 'BlockchainEvent' } }
    /**
     * Find zero or one BlockchainEvent that matches the filter.
     * @param {BlockchainEventFindUniqueArgs} args - Arguments to find a BlockchainEvent
     * @example
     * // Get one BlockchainEvent
     * const blockchainEvent = await prisma.blockchainEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlockchainEventFindUniqueArgs>(args: SelectSubset<T, BlockchainEventFindUniqueArgs<ExtArgs>>): Prisma__BlockchainEventClient<$Result.GetResult<Prisma.$BlockchainEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlockchainEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlockchainEventFindUniqueOrThrowArgs} args - Arguments to find a BlockchainEvent
     * @example
     * // Get one BlockchainEvent
     * const blockchainEvent = await prisma.blockchainEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlockchainEventFindUniqueOrThrowArgs>(args: SelectSubset<T, BlockchainEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlockchainEventClient<$Result.GetResult<Prisma.$BlockchainEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlockchainEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockchainEventFindFirstArgs} args - Arguments to find a BlockchainEvent
     * @example
     * // Get one BlockchainEvent
     * const blockchainEvent = await prisma.blockchainEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlockchainEventFindFirstArgs>(args?: SelectSubset<T, BlockchainEventFindFirstArgs<ExtArgs>>): Prisma__BlockchainEventClient<$Result.GetResult<Prisma.$BlockchainEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlockchainEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockchainEventFindFirstOrThrowArgs} args - Arguments to find a BlockchainEvent
     * @example
     * // Get one BlockchainEvent
     * const blockchainEvent = await prisma.blockchainEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlockchainEventFindFirstOrThrowArgs>(args?: SelectSubset<T, BlockchainEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlockchainEventClient<$Result.GetResult<Prisma.$BlockchainEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlockchainEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockchainEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlockchainEvents
     * const blockchainEvents = await prisma.blockchainEvent.findMany()
     * 
     * // Get first 10 BlockchainEvents
     * const blockchainEvents = await prisma.blockchainEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blockchainEventWithIdOnly = await prisma.blockchainEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlockchainEventFindManyArgs>(args?: SelectSubset<T, BlockchainEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockchainEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlockchainEvent.
     * @param {BlockchainEventCreateArgs} args - Arguments to create a BlockchainEvent.
     * @example
     * // Create one BlockchainEvent
     * const BlockchainEvent = await prisma.blockchainEvent.create({
     *   data: {
     *     // ... data to create a BlockchainEvent
     *   }
     * })
     * 
     */
    create<T extends BlockchainEventCreateArgs>(args: SelectSubset<T, BlockchainEventCreateArgs<ExtArgs>>): Prisma__BlockchainEventClient<$Result.GetResult<Prisma.$BlockchainEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlockchainEvents.
     * @param {BlockchainEventCreateManyArgs} args - Arguments to create many BlockchainEvents.
     * @example
     * // Create many BlockchainEvents
     * const blockchainEvent = await prisma.blockchainEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlockchainEventCreateManyArgs>(args?: SelectSubset<T, BlockchainEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlockchainEvents and returns the data saved in the database.
     * @param {BlockchainEventCreateManyAndReturnArgs} args - Arguments to create many BlockchainEvents.
     * @example
     * // Create many BlockchainEvents
     * const blockchainEvent = await prisma.blockchainEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlockchainEvents and only return the `id`
     * const blockchainEventWithIdOnly = await prisma.blockchainEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlockchainEventCreateManyAndReturnArgs>(args?: SelectSubset<T, BlockchainEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockchainEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlockchainEvent.
     * @param {BlockchainEventDeleteArgs} args - Arguments to delete one BlockchainEvent.
     * @example
     * // Delete one BlockchainEvent
     * const BlockchainEvent = await prisma.blockchainEvent.delete({
     *   where: {
     *     // ... filter to delete one BlockchainEvent
     *   }
     * })
     * 
     */
    delete<T extends BlockchainEventDeleteArgs>(args: SelectSubset<T, BlockchainEventDeleteArgs<ExtArgs>>): Prisma__BlockchainEventClient<$Result.GetResult<Prisma.$BlockchainEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlockchainEvent.
     * @param {BlockchainEventUpdateArgs} args - Arguments to update one BlockchainEvent.
     * @example
     * // Update one BlockchainEvent
     * const blockchainEvent = await prisma.blockchainEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlockchainEventUpdateArgs>(args: SelectSubset<T, BlockchainEventUpdateArgs<ExtArgs>>): Prisma__BlockchainEventClient<$Result.GetResult<Prisma.$BlockchainEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlockchainEvents.
     * @param {BlockchainEventDeleteManyArgs} args - Arguments to filter BlockchainEvents to delete.
     * @example
     * // Delete a few BlockchainEvents
     * const { count } = await prisma.blockchainEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlockchainEventDeleteManyArgs>(args?: SelectSubset<T, BlockchainEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlockchainEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockchainEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlockchainEvents
     * const blockchainEvent = await prisma.blockchainEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlockchainEventUpdateManyArgs>(args: SelectSubset<T, BlockchainEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlockchainEvents and returns the data updated in the database.
     * @param {BlockchainEventUpdateManyAndReturnArgs} args - Arguments to update many BlockchainEvents.
     * @example
     * // Update many BlockchainEvents
     * const blockchainEvent = await prisma.blockchainEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlockchainEvents and only return the `id`
     * const blockchainEventWithIdOnly = await prisma.blockchainEvent.updateManyAndReturn({
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
    updateManyAndReturn<T extends BlockchainEventUpdateManyAndReturnArgs>(args: SelectSubset<T, BlockchainEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockchainEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlockchainEvent.
     * @param {BlockchainEventUpsertArgs} args - Arguments to update or create a BlockchainEvent.
     * @example
     * // Update or create a BlockchainEvent
     * const blockchainEvent = await prisma.blockchainEvent.upsert({
     *   create: {
     *     // ... data to create a BlockchainEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlockchainEvent we want to update
     *   }
     * })
     */
    upsert<T extends BlockchainEventUpsertArgs>(args: SelectSubset<T, BlockchainEventUpsertArgs<ExtArgs>>): Prisma__BlockchainEventClient<$Result.GetResult<Prisma.$BlockchainEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlockchainEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockchainEventCountArgs} args - Arguments to filter BlockchainEvents to count.
     * @example
     * // Count the number of BlockchainEvents
     * const count = await prisma.blockchainEvent.count({
     *   where: {
     *     // ... the filter for the BlockchainEvents we want to count
     *   }
     * })
    **/
    count<T extends BlockchainEventCountArgs>(
      args?: Subset<T, BlockchainEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlockchainEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlockchainEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockchainEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BlockchainEventAggregateArgs>(args: Subset<T, BlockchainEventAggregateArgs>): Prisma.PrismaPromise<GetBlockchainEventAggregateType<T>>

    /**
     * Group by BlockchainEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockchainEventGroupByArgs} args - Group by arguments.
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
      T extends BlockchainEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlockchainEventGroupByArgs['orderBy'] }
        : { orderBy?: BlockchainEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BlockchainEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlockchainEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlockchainEvent model
   */
  readonly fields: BlockchainEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlockchainEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlockchainEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends BookingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingDefaultArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BlockchainEvent model
   */
  interface BlockchainEventFieldRefs {
    readonly id: FieldRef<"BlockchainEvent", 'Int'>
    readonly bookingId: FieldRef<"BlockchainEvent", 'Int'>
    readonly eventType: FieldRef<"BlockchainEvent", 'String'>
    readonly txHash: FieldRef<"BlockchainEvent", 'String'>
    readonly createdAt: FieldRef<"BlockchainEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BlockchainEvent findUnique
   */
  export type BlockchainEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockchainEvent
     */
    select?: BlockchainEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockchainEvent
     */
    omit?: BlockchainEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockchainEventInclude<ExtArgs> | null
    /**
     * Filter, which BlockchainEvent to fetch.
     */
    where: BlockchainEventWhereUniqueInput
  }

  /**
   * BlockchainEvent findUniqueOrThrow
   */
  export type BlockchainEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockchainEvent
     */
    select?: BlockchainEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockchainEvent
     */
    omit?: BlockchainEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockchainEventInclude<ExtArgs> | null
    /**
     * Filter, which BlockchainEvent to fetch.
     */
    where: BlockchainEventWhereUniqueInput
  }

  /**
   * BlockchainEvent findFirst
   */
  export type BlockchainEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockchainEvent
     */
    select?: BlockchainEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockchainEvent
     */
    omit?: BlockchainEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockchainEventInclude<ExtArgs> | null
    /**
     * Filter, which BlockchainEvent to fetch.
     */
    where?: BlockchainEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockchainEvents to fetch.
     */
    orderBy?: BlockchainEventOrderByWithRelationInput | BlockchainEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlockchainEvents.
     */
    cursor?: BlockchainEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockchainEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockchainEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlockchainEvents.
     */
    distinct?: BlockchainEventScalarFieldEnum | BlockchainEventScalarFieldEnum[]
  }

  /**
   * BlockchainEvent findFirstOrThrow
   */
  export type BlockchainEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockchainEvent
     */
    select?: BlockchainEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockchainEvent
     */
    omit?: BlockchainEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockchainEventInclude<ExtArgs> | null
    /**
     * Filter, which BlockchainEvent to fetch.
     */
    where?: BlockchainEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockchainEvents to fetch.
     */
    orderBy?: BlockchainEventOrderByWithRelationInput | BlockchainEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlockchainEvents.
     */
    cursor?: BlockchainEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockchainEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockchainEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlockchainEvents.
     */
    distinct?: BlockchainEventScalarFieldEnum | BlockchainEventScalarFieldEnum[]
  }

  /**
   * BlockchainEvent findMany
   */
  export type BlockchainEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockchainEvent
     */
    select?: BlockchainEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockchainEvent
     */
    omit?: BlockchainEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockchainEventInclude<ExtArgs> | null
    /**
     * Filter, which BlockchainEvents to fetch.
     */
    where?: BlockchainEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockchainEvents to fetch.
     */
    orderBy?: BlockchainEventOrderByWithRelationInput | BlockchainEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlockchainEvents.
     */
    cursor?: BlockchainEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockchainEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockchainEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlockchainEvents.
     */
    distinct?: BlockchainEventScalarFieldEnum | BlockchainEventScalarFieldEnum[]
  }

  /**
   * BlockchainEvent create
   */
  export type BlockchainEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockchainEvent
     */
    select?: BlockchainEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockchainEvent
     */
    omit?: BlockchainEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockchainEventInclude<ExtArgs> | null
    /**
     * The data needed to create a BlockchainEvent.
     */
    data: XOR<BlockchainEventCreateInput, BlockchainEventUncheckedCreateInput>
  }

  /**
   * BlockchainEvent createMany
   */
  export type BlockchainEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlockchainEvents.
     */
    data: BlockchainEventCreateManyInput | BlockchainEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlockchainEvent createManyAndReturn
   */
  export type BlockchainEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockchainEvent
     */
    select?: BlockchainEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlockchainEvent
     */
    omit?: BlockchainEventOmit<ExtArgs> | null
    /**
     * The data used to create many BlockchainEvents.
     */
    data: BlockchainEventCreateManyInput | BlockchainEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockchainEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlockchainEvent update
   */
  export type BlockchainEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockchainEvent
     */
    select?: BlockchainEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockchainEvent
     */
    omit?: BlockchainEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockchainEventInclude<ExtArgs> | null
    /**
     * The data needed to update a BlockchainEvent.
     */
    data: XOR<BlockchainEventUpdateInput, BlockchainEventUncheckedUpdateInput>
    /**
     * Choose, which BlockchainEvent to update.
     */
    where: BlockchainEventWhereUniqueInput
  }

  /**
   * BlockchainEvent updateMany
   */
  export type BlockchainEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlockchainEvents.
     */
    data: XOR<BlockchainEventUpdateManyMutationInput, BlockchainEventUncheckedUpdateManyInput>
    /**
     * Filter which BlockchainEvents to update
     */
    where?: BlockchainEventWhereInput
    /**
     * Limit how many BlockchainEvents to update.
     */
    limit?: number
  }

  /**
   * BlockchainEvent updateManyAndReturn
   */
  export type BlockchainEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockchainEvent
     */
    select?: BlockchainEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlockchainEvent
     */
    omit?: BlockchainEventOmit<ExtArgs> | null
    /**
     * The data used to update BlockchainEvents.
     */
    data: XOR<BlockchainEventUpdateManyMutationInput, BlockchainEventUncheckedUpdateManyInput>
    /**
     * Filter which BlockchainEvents to update
     */
    where?: BlockchainEventWhereInput
    /**
     * Limit how many BlockchainEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockchainEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlockchainEvent upsert
   */
  export type BlockchainEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockchainEvent
     */
    select?: BlockchainEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockchainEvent
     */
    omit?: BlockchainEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockchainEventInclude<ExtArgs> | null
    /**
     * The filter to search for the BlockchainEvent to update in case it exists.
     */
    where: BlockchainEventWhereUniqueInput
    /**
     * In case the BlockchainEvent found by the `where` argument doesn't exist, create a new BlockchainEvent with this data.
     */
    create: XOR<BlockchainEventCreateInput, BlockchainEventUncheckedCreateInput>
    /**
     * In case the BlockchainEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlockchainEventUpdateInput, BlockchainEventUncheckedUpdateInput>
  }

  /**
   * BlockchainEvent delete
   */
  export type BlockchainEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockchainEvent
     */
    select?: BlockchainEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockchainEvent
     */
    omit?: BlockchainEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockchainEventInclude<ExtArgs> | null
    /**
     * Filter which BlockchainEvent to delete.
     */
    where: BlockchainEventWhereUniqueInput
  }

  /**
   * BlockchainEvent deleteMany
   */
  export type BlockchainEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlockchainEvents to delete
     */
    where?: BlockchainEventWhereInput
    /**
     * Limit how many BlockchainEvents to delete.
     */
    limit?: number
  }

  /**
   * BlockchainEvent without action
   */
  export type BlockchainEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockchainEvent
     */
    select?: BlockchainEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlockchainEvent
     */
    omit?: BlockchainEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockchainEventInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    username: 'username',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ParkingSpotScalarFieldEnum: {
    id: 'id',
    ownerId: 'ownerId',
    latitude: 'latitude',
    longitude: 'longitude',
    city: 'city',
    street: 'street',
    houseNumber: 'houseNumber',
    address: 'address',
    hourlyRate: 'hourlyRate',
    description: 'description',
    hasCharger: 'hasCharger',
    isActive: 'isActive',
    size: 'size',
    imageUrl: 'imageUrl',
    availabilityMode: 'availabilityMode'
  };

  export type ParkingSpotScalarFieldEnum = (typeof ParkingSpotScalarFieldEnum)[keyof typeof ParkingSpotScalarFieldEnum]


  export const AvailabilityScalarFieldEnum: {
    id: 'id',
    spotId: 'spotId',
    dayOfWeek: 'dayOfWeek',
    startDateTime: 'startDateTime',
    endDateTime: 'endDateTime',
    startTime: 'startTime',
    endTime: 'endTime'
  };

  export type AvailabilityScalarFieldEnum = (typeof AvailabilityScalarFieldEnum)[keyof typeof AvailabilityScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    spotId: 'spotId',
    renterId: 'renterId',
    startTime: 'startTime',
    endTime: 'endTime',
    totalPrice: 'totalPrice',
    status: 'status',
    contractTxHash: 'contractTxHash',
    depositStatus: 'depositStatus'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const SurgePricingLogScalarFieldEnum: {
    id: 'id',
    spotId: 'spotId',
    multiplier: 'multiplier',
    reason: 'reason',
    createdAt: 'createdAt'
  };

  export type SurgePricingLogScalarFieldEnum = (typeof SurgePricingLogScalarFieldEnum)[keyof typeof SurgePricingLogScalarFieldEnum]


  export const BlockchainEventScalarFieldEnum: {
    id: 'id',
    bookingId: 'bookingId',
    eventType: 'eventType',
    txHash: 'txHash',
    createdAt: 'createdAt'
  };

  export type BlockchainEventScalarFieldEnum = (typeof BlockchainEventScalarFieldEnum)[keyof typeof BlockchainEventScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    spots?: ParkingSpotListRelationFilter
    bookings?: BookingListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    createdAt?: SortOrder
    spots?: ParkingSpotOrderByRelationAggregateInput
    bookings?: BookingOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    spots?: ParkingSpotListRelationFilter
    bookings?: BookingListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ParkingSpotWhereInput = {
    AND?: ParkingSpotWhereInput | ParkingSpotWhereInput[]
    OR?: ParkingSpotWhereInput[]
    NOT?: ParkingSpotWhereInput | ParkingSpotWhereInput[]
    id?: IntFilter<"ParkingSpot"> | number
    ownerId?: IntFilter<"ParkingSpot"> | number
    latitude?: FloatFilter<"ParkingSpot"> | number
    longitude?: FloatFilter<"ParkingSpot"> | number
    city?: StringFilter<"ParkingSpot"> | string
    street?: StringFilter<"ParkingSpot"> | string
    houseNumber?: StringFilter<"ParkingSpot"> | string
    address?: StringFilter<"ParkingSpot"> | string
    hourlyRate?: FloatFilter<"ParkingSpot"> | number
    description?: StringNullableFilter<"ParkingSpot"> | string | null
    hasCharger?: BoolFilter<"ParkingSpot"> | boolean
    isActive?: BoolFilter<"ParkingSpot"> | boolean
    size?: StringFilter<"ParkingSpot"> | string
    imageUrl?: StringNullableFilter<"ParkingSpot"> | string | null
    availabilityMode?: StringFilter<"ParkingSpot"> | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    availabilities?: AvailabilityListRelationFilter
    bookings?: BookingListRelationFilter
    surgeLogs?: SurgePricingLogListRelationFilter
  }

  export type ParkingSpotOrderByWithRelationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    city?: SortOrder
    street?: SortOrder
    houseNumber?: SortOrder
    address?: SortOrder
    hourlyRate?: SortOrder
    description?: SortOrderInput | SortOrder
    hasCharger?: SortOrder
    isActive?: SortOrder
    size?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    availabilityMode?: SortOrder
    owner?: UserOrderByWithRelationInput
    availabilities?: AvailabilityOrderByRelationAggregateInput
    bookings?: BookingOrderByRelationAggregateInput
    surgeLogs?: SurgePricingLogOrderByRelationAggregateInput
  }

  export type ParkingSpotWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ParkingSpotWhereInput | ParkingSpotWhereInput[]
    OR?: ParkingSpotWhereInput[]
    NOT?: ParkingSpotWhereInput | ParkingSpotWhereInput[]
    ownerId?: IntFilter<"ParkingSpot"> | number
    latitude?: FloatFilter<"ParkingSpot"> | number
    longitude?: FloatFilter<"ParkingSpot"> | number
    city?: StringFilter<"ParkingSpot"> | string
    street?: StringFilter<"ParkingSpot"> | string
    houseNumber?: StringFilter<"ParkingSpot"> | string
    address?: StringFilter<"ParkingSpot"> | string
    hourlyRate?: FloatFilter<"ParkingSpot"> | number
    description?: StringNullableFilter<"ParkingSpot"> | string | null
    hasCharger?: BoolFilter<"ParkingSpot"> | boolean
    isActive?: BoolFilter<"ParkingSpot"> | boolean
    size?: StringFilter<"ParkingSpot"> | string
    imageUrl?: StringNullableFilter<"ParkingSpot"> | string | null
    availabilityMode?: StringFilter<"ParkingSpot"> | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    availabilities?: AvailabilityListRelationFilter
    bookings?: BookingListRelationFilter
    surgeLogs?: SurgePricingLogListRelationFilter
  }, "id">

  export type ParkingSpotOrderByWithAggregationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    city?: SortOrder
    street?: SortOrder
    houseNumber?: SortOrder
    address?: SortOrder
    hourlyRate?: SortOrder
    description?: SortOrderInput | SortOrder
    hasCharger?: SortOrder
    isActive?: SortOrder
    size?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    availabilityMode?: SortOrder
    _count?: ParkingSpotCountOrderByAggregateInput
    _avg?: ParkingSpotAvgOrderByAggregateInput
    _max?: ParkingSpotMaxOrderByAggregateInput
    _min?: ParkingSpotMinOrderByAggregateInput
    _sum?: ParkingSpotSumOrderByAggregateInput
  }

  export type ParkingSpotScalarWhereWithAggregatesInput = {
    AND?: ParkingSpotScalarWhereWithAggregatesInput | ParkingSpotScalarWhereWithAggregatesInput[]
    OR?: ParkingSpotScalarWhereWithAggregatesInput[]
    NOT?: ParkingSpotScalarWhereWithAggregatesInput | ParkingSpotScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ParkingSpot"> | number
    ownerId?: IntWithAggregatesFilter<"ParkingSpot"> | number
    latitude?: FloatWithAggregatesFilter<"ParkingSpot"> | number
    longitude?: FloatWithAggregatesFilter<"ParkingSpot"> | number
    city?: StringWithAggregatesFilter<"ParkingSpot"> | string
    street?: StringWithAggregatesFilter<"ParkingSpot"> | string
    houseNumber?: StringWithAggregatesFilter<"ParkingSpot"> | string
    address?: StringWithAggregatesFilter<"ParkingSpot"> | string
    hourlyRate?: FloatWithAggregatesFilter<"ParkingSpot"> | number
    description?: StringNullableWithAggregatesFilter<"ParkingSpot"> | string | null
    hasCharger?: BoolWithAggregatesFilter<"ParkingSpot"> | boolean
    isActive?: BoolWithAggregatesFilter<"ParkingSpot"> | boolean
    size?: StringWithAggregatesFilter<"ParkingSpot"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"ParkingSpot"> | string | null
    availabilityMode?: StringWithAggregatesFilter<"ParkingSpot"> | string
  }

  export type AvailabilityWhereInput = {
    AND?: AvailabilityWhereInput | AvailabilityWhereInput[]
    OR?: AvailabilityWhereInput[]
    NOT?: AvailabilityWhereInput | AvailabilityWhereInput[]
    id?: IntFilter<"Availability"> | number
    spotId?: IntFilter<"Availability"> | number
    dayOfWeek?: IntNullableFilter<"Availability"> | number | null
    startDateTime?: DateTimeNullableFilter<"Availability"> | Date | string | null
    endDateTime?: DateTimeNullableFilter<"Availability"> | Date | string | null
    startTime?: StringNullableFilter<"Availability"> | string | null
    endTime?: StringNullableFilter<"Availability"> | string | null
    spot?: XOR<ParkingSpotScalarRelationFilter, ParkingSpotWhereInput>
  }

  export type AvailabilityOrderByWithRelationInput = {
    id?: SortOrder
    spotId?: SortOrder
    dayOfWeek?: SortOrderInput | SortOrder
    startDateTime?: SortOrderInput | SortOrder
    endDateTime?: SortOrderInput | SortOrder
    startTime?: SortOrderInput | SortOrder
    endTime?: SortOrderInput | SortOrder
    spot?: ParkingSpotOrderByWithRelationInput
  }

  export type AvailabilityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AvailabilityWhereInput | AvailabilityWhereInput[]
    OR?: AvailabilityWhereInput[]
    NOT?: AvailabilityWhereInput | AvailabilityWhereInput[]
    spotId?: IntFilter<"Availability"> | number
    dayOfWeek?: IntNullableFilter<"Availability"> | number | null
    startDateTime?: DateTimeNullableFilter<"Availability"> | Date | string | null
    endDateTime?: DateTimeNullableFilter<"Availability"> | Date | string | null
    startTime?: StringNullableFilter<"Availability"> | string | null
    endTime?: StringNullableFilter<"Availability"> | string | null
    spot?: XOR<ParkingSpotScalarRelationFilter, ParkingSpotWhereInput>
  }, "id">

  export type AvailabilityOrderByWithAggregationInput = {
    id?: SortOrder
    spotId?: SortOrder
    dayOfWeek?: SortOrderInput | SortOrder
    startDateTime?: SortOrderInput | SortOrder
    endDateTime?: SortOrderInput | SortOrder
    startTime?: SortOrderInput | SortOrder
    endTime?: SortOrderInput | SortOrder
    _count?: AvailabilityCountOrderByAggregateInput
    _avg?: AvailabilityAvgOrderByAggregateInput
    _max?: AvailabilityMaxOrderByAggregateInput
    _min?: AvailabilityMinOrderByAggregateInput
    _sum?: AvailabilitySumOrderByAggregateInput
  }

  export type AvailabilityScalarWhereWithAggregatesInput = {
    AND?: AvailabilityScalarWhereWithAggregatesInput | AvailabilityScalarWhereWithAggregatesInput[]
    OR?: AvailabilityScalarWhereWithAggregatesInput[]
    NOT?: AvailabilityScalarWhereWithAggregatesInput | AvailabilityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Availability"> | number
    spotId?: IntWithAggregatesFilter<"Availability"> | number
    dayOfWeek?: IntNullableWithAggregatesFilter<"Availability"> | number | null
    startDateTime?: DateTimeNullableWithAggregatesFilter<"Availability"> | Date | string | null
    endDateTime?: DateTimeNullableWithAggregatesFilter<"Availability"> | Date | string | null
    startTime?: StringNullableWithAggregatesFilter<"Availability"> | string | null
    endTime?: StringNullableWithAggregatesFilter<"Availability"> | string | null
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: IntFilter<"Booking"> | number
    spotId?: IntFilter<"Booking"> | number
    renterId?: IntFilter<"Booking"> | number
    startTime?: DateTimeFilter<"Booking"> | Date | string
    endTime?: DateTimeFilter<"Booking"> | Date | string
    totalPrice?: FloatFilter<"Booking"> | number
    status?: StringFilter<"Booking"> | string
    contractTxHash?: StringNullableFilter<"Booking"> | string | null
    depositStatus?: StringNullableFilter<"Booking"> | string | null
    spot?: XOR<ParkingSpotScalarRelationFilter, ParkingSpotWhereInput>
    renter?: XOR<UserScalarRelationFilter, UserWhereInput>
    blockchainEvents?: BlockchainEventListRelationFilter
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    spotId?: SortOrder
    renterId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    contractTxHash?: SortOrderInput | SortOrder
    depositStatus?: SortOrderInput | SortOrder
    spot?: ParkingSpotOrderByWithRelationInput
    renter?: UserOrderByWithRelationInput
    blockchainEvents?: BlockchainEventOrderByRelationAggregateInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    contractTxHash?: string
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    spotId?: IntFilter<"Booking"> | number
    renterId?: IntFilter<"Booking"> | number
    startTime?: DateTimeFilter<"Booking"> | Date | string
    endTime?: DateTimeFilter<"Booking"> | Date | string
    totalPrice?: FloatFilter<"Booking"> | number
    status?: StringFilter<"Booking"> | string
    depositStatus?: StringNullableFilter<"Booking"> | string | null
    spot?: XOR<ParkingSpotScalarRelationFilter, ParkingSpotWhereInput>
    renter?: XOR<UserScalarRelationFilter, UserWhereInput>
    blockchainEvents?: BlockchainEventListRelationFilter
  }, "id" | "contractTxHash">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    spotId?: SortOrder
    renterId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    contractTxHash?: SortOrderInput | SortOrder
    depositStatus?: SortOrderInput | SortOrder
    _count?: BookingCountOrderByAggregateInput
    _avg?: BookingAvgOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
    _sum?: BookingSumOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Booking"> | number
    spotId?: IntWithAggregatesFilter<"Booking"> | number
    renterId?: IntWithAggregatesFilter<"Booking"> | number
    startTime?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    totalPrice?: FloatWithAggregatesFilter<"Booking"> | number
    status?: StringWithAggregatesFilter<"Booking"> | string
    contractTxHash?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    depositStatus?: StringNullableWithAggregatesFilter<"Booking"> | string | null
  }

  export type SurgePricingLogWhereInput = {
    AND?: SurgePricingLogWhereInput | SurgePricingLogWhereInput[]
    OR?: SurgePricingLogWhereInput[]
    NOT?: SurgePricingLogWhereInput | SurgePricingLogWhereInput[]
    id?: IntFilter<"SurgePricingLog"> | number
    spotId?: IntFilter<"SurgePricingLog"> | number
    multiplier?: FloatFilter<"SurgePricingLog"> | number
    reason?: StringNullableFilter<"SurgePricingLog"> | string | null
    createdAt?: DateTimeFilter<"SurgePricingLog"> | Date | string
    spot?: XOR<ParkingSpotScalarRelationFilter, ParkingSpotWhereInput>
  }

  export type SurgePricingLogOrderByWithRelationInput = {
    id?: SortOrder
    spotId?: SortOrder
    multiplier?: SortOrder
    reason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    spot?: ParkingSpotOrderByWithRelationInput
  }

  export type SurgePricingLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SurgePricingLogWhereInput | SurgePricingLogWhereInput[]
    OR?: SurgePricingLogWhereInput[]
    NOT?: SurgePricingLogWhereInput | SurgePricingLogWhereInput[]
    spotId?: IntFilter<"SurgePricingLog"> | number
    multiplier?: FloatFilter<"SurgePricingLog"> | number
    reason?: StringNullableFilter<"SurgePricingLog"> | string | null
    createdAt?: DateTimeFilter<"SurgePricingLog"> | Date | string
    spot?: XOR<ParkingSpotScalarRelationFilter, ParkingSpotWhereInput>
  }, "id">

  export type SurgePricingLogOrderByWithAggregationInput = {
    id?: SortOrder
    spotId?: SortOrder
    multiplier?: SortOrder
    reason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SurgePricingLogCountOrderByAggregateInput
    _avg?: SurgePricingLogAvgOrderByAggregateInput
    _max?: SurgePricingLogMaxOrderByAggregateInput
    _min?: SurgePricingLogMinOrderByAggregateInput
    _sum?: SurgePricingLogSumOrderByAggregateInput
  }

  export type SurgePricingLogScalarWhereWithAggregatesInput = {
    AND?: SurgePricingLogScalarWhereWithAggregatesInput | SurgePricingLogScalarWhereWithAggregatesInput[]
    OR?: SurgePricingLogScalarWhereWithAggregatesInput[]
    NOT?: SurgePricingLogScalarWhereWithAggregatesInput | SurgePricingLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SurgePricingLog"> | number
    spotId?: IntWithAggregatesFilter<"SurgePricingLog"> | number
    multiplier?: FloatWithAggregatesFilter<"SurgePricingLog"> | number
    reason?: StringNullableWithAggregatesFilter<"SurgePricingLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SurgePricingLog"> | Date | string
  }

  export type BlockchainEventWhereInput = {
    AND?: BlockchainEventWhereInput | BlockchainEventWhereInput[]
    OR?: BlockchainEventWhereInput[]
    NOT?: BlockchainEventWhereInput | BlockchainEventWhereInput[]
    id?: IntFilter<"BlockchainEvent"> | number
    bookingId?: IntFilter<"BlockchainEvent"> | number
    eventType?: StringFilter<"BlockchainEvent"> | string
    txHash?: StringFilter<"BlockchainEvent"> | string
    createdAt?: DateTimeFilter<"BlockchainEvent"> | Date | string
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }

  export type BlockchainEventOrderByWithRelationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    eventType?: SortOrder
    txHash?: SortOrder
    createdAt?: SortOrder
    booking?: BookingOrderByWithRelationInput
  }

  export type BlockchainEventWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    txHash?: string
    AND?: BlockchainEventWhereInput | BlockchainEventWhereInput[]
    OR?: BlockchainEventWhereInput[]
    NOT?: BlockchainEventWhereInput | BlockchainEventWhereInput[]
    bookingId?: IntFilter<"BlockchainEvent"> | number
    eventType?: StringFilter<"BlockchainEvent"> | string
    createdAt?: DateTimeFilter<"BlockchainEvent"> | Date | string
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }, "id" | "txHash">

  export type BlockchainEventOrderByWithAggregationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    eventType?: SortOrder
    txHash?: SortOrder
    createdAt?: SortOrder
    _count?: BlockchainEventCountOrderByAggregateInput
    _avg?: BlockchainEventAvgOrderByAggregateInput
    _max?: BlockchainEventMaxOrderByAggregateInput
    _min?: BlockchainEventMinOrderByAggregateInput
    _sum?: BlockchainEventSumOrderByAggregateInput
  }

  export type BlockchainEventScalarWhereWithAggregatesInput = {
    AND?: BlockchainEventScalarWhereWithAggregatesInput | BlockchainEventScalarWhereWithAggregatesInput[]
    OR?: BlockchainEventScalarWhereWithAggregatesInput[]
    NOT?: BlockchainEventScalarWhereWithAggregatesInput | BlockchainEventScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BlockchainEvent"> | number
    bookingId?: IntWithAggregatesFilter<"BlockchainEvent"> | number
    eventType?: StringWithAggregatesFilter<"BlockchainEvent"> | string
    txHash?: StringWithAggregatesFilter<"BlockchainEvent"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BlockchainEvent"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    password: string
    username: string
    createdAt?: Date | string
    spots?: ParkingSpotCreateNestedManyWithoutOwnerInput
    bookings?: BookingCreateNestedManyWithoutRenterInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    username: string
    createdAt?: Date | string
    spots?: ParkingSpotUncheckedCreateNestedManyWithoutOwnerInput
    bookings?: BookingUncheckedCreateNestedManyWithoutRenterInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spots?: ParkingSpotUpdateManyWithoutOwnerNestedInput
    bookings?: BookingUpdateManyWithoutRenterNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spots?: ParkingSpotUncheckedUpdateManyWithoutOwnerNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutRenterNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    username: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParkingSpotCreateInput = {
    latitude: number
    longitude: number
    city: string
    street?: string
    houseNumber?: string
    address: string
    hourlyRate: number
    description?: string | null
    hasCharger?: boolean
    isActive?: boolean
    size?: string
    imageUrl?: string | null
    availabilityMode?: string
    owner: UserCreateNestedOneWithoutSpotsInput
    availabilities?: AvailabilityCreateNestedManyWithoutSpotInput
    bookings?: BookingCreateNestedManyWithoutSpotInput
    surgeLogs?: SurgePricingLogCreateNestedManyWithoutSpotInput
  }

  export type ParkingSpotUncheckedCreateInput = {
    id?: number
    ownerId: number
    latitude: number
    longitude: number
    city: string
    street?: string
    houseNumber?: string
    address: string
    hourlyRate: number
    description?: string | null
    hasCharger?: boolean
    isActive?: boolean
    size?: string
    imageUrl?: string | null
    availabilityMode?: string
    availabilities?: AvailabilityUncheckedCreateNestedManyWithoutSpotInput
    bookings?: BookingUncheckedCreateNestedManyWithoutSpotInput
    surgeLogs?: SurgePricingLogUncheckedCreateNestedManyWithoutSpotInput
  }

  export type ParkingSpotUpdateInput = {
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    houseNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hasCharger?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    size?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityMode?: StringFieldUpdateOperationsInput | string
    owner?: UserUpdateOneRequiredWithoutSpotsNestedInput
    availabilities?: AvailabilityUpdateManyWithoutSpotNestedInput
    bookings?: BookingUpdateManyWithoutSpotNestedInput
    surgeLogs?: SurgePricingLogUpdateManyWithoutSpotNestedInput
  }

  export type ParkingSpotUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    houseNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hasCharger?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    size?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityMode?: StringFieldUpdateOperationsInput | string
    availabilities?: AvailabilityUncheckedUpdateManyWithoutSpotNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutSpotNestedInput
    surgeLogs?: SurgePricingLogUncheckedUpdateManyWithoutSpotNestedInput
  }

  export type ParkingSpotCreateManyInput = {
    id?: number
    ownerId: number
    latitude: number
    longitude: number
    city: string
    street?: string
    houseNumber?: string
    address: string
    hourlyRate: number
    description?: string | null
    hasCharger?: boolean
    isActive?: boolean
    size?: string
    imageUrl?: string | null
    availabilityMode?: string
  }

  export type ParkingSpotUpdateManyMutationInput = {
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    houseNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hasCharger?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    size?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityMode?: StringFieldUpdateOperationsInput | string
  }

  export type ParkingSpotUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    houseNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hasCharger?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    size?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityMode?: StringFieldUpdateOperationsInput | string
  }

  export type AvailabilityCreateInput = {
    dayOfWeek?: number | null
    startDateTime?: Date | string | null
    endDateTime?: Date | string | null
    startTime?: string | null
    endTime?: string | null
    spot: ParkingSpotCreateNestedOneWithoutAvailabilitiesInput
  }

  export type AvailabilityUncheckedCreateInput = {
    id?: number
    spotId: number
    dayOfWeek?: number | null
    startDateTime?: Date | string | null
    endDateTime?: Date | string | null
    startTime?: string | null
    endTime?: string | null
  }

  export type AvailabilityUpdateInput = {
    dayOfWeek?: NullableIntFieldUpdateOperationsInput | number | null
    startDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    spot?: ParkingSpotUpdateOneRequiredWithoutAvailabilitiesNestedInput
  }

  export type AvailabilityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    spotId?: IntFieldUpdateOperationsInput | number
    dayOfWeek?: NullableIntFieldUpdateOperationsInput | number | null
    startDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AvailabilityCreateManyInput = {
    id?: number
    spotId: number
    dayOfWeek?: number | null
    startDateTime?: Date | string | null
    endDateTime?: Date | string | null
    startTime?: string | null
    endTime?: string | null
  }

  export type AvailabilityUpdateManyMutationInput = {
    dayOfWeek?: NullableIntFieldUpdateOperationsInput | number | null
    startDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AvailabilityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    spotId?: IntFieldUpdateOperationsInput | number
    dayOfWeek?: NullableIntFieldUpdateOperationsInput | number | null
    startDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BookingCreateInput = {
    startTime: Date | string
    endTime: Date | string
    totalPrice: number
    status?: string
    contractTxHash?: string | null
    depositStatus?: string | null
    spot: ParkingSpotCreateNestedOneWithoutBookingsInput
    renter: UserCreateNestedOneWithoutBookingsInput
    blockchainEvents?: BlockchainEventCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateInput = {
    id?: number
    spotId: number
    renterId: number
    startTime: Date | string
    endTime: Date | string
    totalPrice: number
    status?: string
    contractTxHash?: string | null
    depositStatus?: string | null
    blockchainEvents?: BlockchainEventUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingUpdateInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    contractTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    depositStatus?: NullableStringFieldUpdateOperationsInput | string | null
    spot?: ParkingSpotUpdateOneRequiredWithoutBookingsNestedInput
    renter?: UserUpdateOneRequiredWithoutBookingsNestedInput
    blockchainEvents?: BlockchainEventUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    spotId?: IntFieldUpdateOperationsInput | number
    renterId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    contractTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    depositStatus?: NullableStringFieldUpdateOperationsInput | string | null
    blockchainEvents?: BlockchainEventUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingCreateManyInput = {
    id?: number
    spotId: number
    renterId: number
    startTime: Date | string
    endTime: Date | string
    totalPrice: number
    status?: string
    contractTxHash?: string | null
    depositStatus?: string | null
  }

  export type BookingUpdateManyMutationInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    contractTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    depositStatus?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    spotId?: IntFieldUpdateOperationsInput | number
    renterId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    contractTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    depositStatus?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SurgePricingLogCreateInput = {
    multiplier: number
    reason?: string | null
    createdAt?: Date | string
    spot: ParkingSpotCreateNestedOneWithoutSurgeLogsInput
  }

  export type SurgePricingLogUncheckedCreateInput = {
    id?: number
    spotId: number
    multiplier: number
    reason?: string | null
    createdAt?: Date | string
  }

  export type SurgePricingLogUpdateInput = {
    multiplier?: FloatFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spot?: ParkingSpotUpdateOneRequiredWithoutSurgeLogsNestedInput
  }

  export type SurgePricingLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    spotId?: IntFieldUpdateOperationsInput | number
    multiplier?: FloatFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SurgePricingLogCreateManyInput = {
    id?: number
    spotId: number
    multiplier: number
    reason?: string | null
    createdAt?: Date | string
  }

  export type SurgePricingLogUpdateManyMutationInput = {
    multiplier?: FloatFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SurgePricingLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    spotId?: IntFieldUpdateOperationsInput | number
    multiplier?: FloatFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockchainEventCreateInput = {
    eventType: string
    txHash: string
    createdAt?: Date | string
    booking: BookingCreateNestedOneWithoutBlockchainEventsInput
  }

  export type BlockchainEventUncheckedCreateInput = {
    id?: number
    bookingId: number
    eventType: string
    txHash: string
    createdAt?: Date | string
  }

  export type BlockchainEventUpdateInput = {
    eventType?: StringFieldUpdateOperationsInput | string
    txHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateOneRequiredWithoutBlockchainEventsNestedInput
  }

  export type BlockchainEventUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookingId?: IntFieldUpdateOperationsInput | number
    eventType?: StringFieldUpdateOperationsInput | string
    txHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockchainEventCreateManyInput = {
    id?: number
    bookingId: number
    eventType: string
    txHash: string
    createdAt?: Date | string
  }

  export type BlockchainEventUpdateManyMutationInput = {
    eventType?: StringFieldUpdateOperationsInput | string
    txHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockchainEventUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookingId?: IntFieldUpdateOperationsInput | number
    eventType?: StringFieldUpdateOperationsInput | string
    txHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type ParkingSpotListRelationFilter = {
    every?: ParkingSpotWhereInput
    some?: ParkingSpotWhereInput
    none?: ParkingSpotWhereInput
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type ParkingSpotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AvailabilityListRelationFilter = {
    every?: AvailabilityWhereInput
    some?: AvailabilityWhereInput
    none?: AvailabilityWhereInput
  }

  export type SurgePricingLogListRelationFilter = {
    every?: SurgePricingLogWhereInput
    some?: SurgePricingLogWhereInput
    none?: SurgePricingLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AvailabilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SurgePricingLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ParkingSpotCountOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    city?: SortOrder
    street?: SortOrder
    houseNumber?: SortOrder
    address?: SortOrder
    hourlyRate?: SortOrder
    description?: SortOrder
    hasCharger?: SortOrder
    isActive?: SortOrder
    size?: SortOrder
    imageUrl?: SortOrder
    availabilityMode?: SortOrder
  }

  export type ParkingSpotAvgOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    hourlyRate?: SortOrder
  }

  export type ParkingSpotMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    city?: SortOrder
    street?: SortOrder
    houseNumber?: SortOrder
    address?: SortOrder
    hourlyRate?: SortOrder
    description?: SortOrder
    hasCharger?: SortOrder
    isActive?: SortOrder
    size?: SortOrder
    imageUrl?: SortOrder
    availabilityMode?: SortOrder
  }

  export type ParkingSpotMinOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    city?: SortOrder
    street?: SortOrder
    houseNumber?: SortOrder
    address?: SortOrder
    hourlyRate?: SortOrder
    description?: SortOrder
    hasCharger?: SortOrder
    isActive?: SortOrder
    size?: SortOrder
    imageUrl?: SortOrder
    availabilityMode?: SortOrder
  }

  export type ParkingSpotSumOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    hourlyRate?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type ParkingSpotScalarRelationFilter = {
    is?: ParkingSpotWhereInput
    isNot?: ParkingSpotWhereInput
  }

  export type AvailabilityCountOrderByAggregateInput = {
    id?: SortOrder
    spotId?: SortOrder
    dayOfWeek?: SortOrder
    startDateTime?: SortOrder
    endDateTime?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
  }

  export type AvailabilityAvgOrderByAggregateInput = {
    id?: SortOrder
    spotId?: SortOrder
    dayOfWeek?: SortOrder
  }

  export type AvailabilityMaxOrderByAggregateInput = {
    id?: SortOrder
    spotId?: SortOrder
    dayOfWeek?: SortOrder
    startDateTime?: SortOrder
    endDateTime?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
  }

  export type AvailabilityMinOrderByAggregateInput = {
    id?: SortOrder
    spotId?: SortOrder
    dayOfWeek?: SortOrder
    startDateTime?: SortOrder
    endDateTime?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
  }

  export type AvailabilitySumOrderByAggregateInput = {
    id?: SortOrder
    spotId?: SortOrder
    dayOfWeek?: SortOrder
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

  export type BlockchainEventListRelationFilter = {
    every?: BlockchainEventWhereInput
    some?: BlockchainEventWhereInput
    none?: BlockchainEventWhereInput
  }

  export type BlockchainEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    spotId?: SortOrder
    renterId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    contractTxHash?: SortOrder
    depositStatus?: SortOrder
  }

  export type BookingAvgOrderByAggregateInput = {
    id?: SortOrder
    spotId?: SortOrder
    renterId?: SortOrder
    totalPrice?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    spotId?: SortOrder
    renterId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    contractTxHash?: SortOrder
    depositStatus?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    spotId?: SortOrder
    renterId?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    contractTxHash?: SortOrder
    depositStatus?: SortOrder
  }

  export type BookingSumOrderByAggregateInput = {
    id?: SortOrder
    spotId?: SortOrder
    renterId?: SortOrder
    totalPrice?: SortOrder
  }

  export type SurgePricingLogCountOrderByAggregateInput = {
    id?: SortOrder
    spotId?: SortOrder
    multiplier?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type SurgePricingLogAvgOrderByAggregateInput = {
    id?: SortOrder
    spotId?: SortOrder
    multiplier?: SortOrder
  }

  export type SurgePricingLogMaxOrderByAggregateInput = {
    id?: SortOrder
    spotId?: SortOrder
    multiplier?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type SurgePricingLogMinOrderByAggregateInput = {
    id?: SortOrder
    spotId?: SortOrder
    multiplier?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type SurgePricingLogSumOrderByAggregateInput = {
    id?: SortOrder
    spotId?: SortOrder
    multiplier?: SortOrder
  }

  export type BookingScalarRelationFilter = {
    is?: BookingWhereInput
    isNot?: BookingWhereInput
  }

  export type BlockchainEventCountOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    eventType?: SortOrder
    txHash?: SortOrder
    createdAt?: SortOrder
  }

  export type BlockchainEventAvgOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
  }

  export type BlockchainEventMaxOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    eventType?: SortOrder
    txHash?: SortOrder
    createdAt?: SortOrder
  }

  export type BlockchainEventMinOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    eventType?: SortOrder
    txHash?: SortOrder
    createdAt?: SortOrder
  }

  export type BlockchainEventSumOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
  }

  export type ParkingSpotCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ParkingSpotCreateWithoutOwnerInput, ParkingSpotUncheckedCreateWithoutOwnerInput> | ParkingSpotCreateWithoutOwnerInput[] | ParkingSpotUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ParkingSpotCreateOrConnectWithoutOwnerInput | ParkingSpotCreateOrConnectWithoutOwnerInput[]
    createMany?: ParkingSpotCreateManyOwnerInputEnvelope
    connect?: ParkingSpotWhereUniqueInput | ParkingSpotWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutRenterInput = {
    create?: XOR<BookingCreateWithoutRenterInput, BookingUncheckedCreateWithoutRenterInput> | BookingCreateWithoutRenterInput[] | BookingUncheckedCreateWithoutRenterInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutRenterInput | BookingCreateOrConnectWithoutRenterInput[]
    createMany?: BookingCreateManyRenterInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type ParkingSpotUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ParkingSpotCreateWithoutOwnerInput, ParkingSpotUncheckedCreateWithoutOwnerInput> | ParkingSpotCreateWithoutOwnerInput[] | ParkingSpotUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ParkingSpotCreateOrConnectWithoutOwnerInput | ParkingSpotCreateOrConnectWithoutOwnerInput[]
    createMany?: ParkingSpotCreateManyOwnerInputEnvelope
    connect?: ParkingSpotWhereUniqueInput | ParkingSpotWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutRenterInput = {
    create?: XOR<BookingCreateWithoutRenterInput, BookingUncheckedCreateWithoutRenterInput> | BookingCreateWithoutRenterInput[] | BookingUncheckedCreateWithoutRenterInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutRenterInput | BookingCreateOrConnectWithoutRenterInput[]
    createMany?: BookingCreateManyRenterInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ParkingSpotUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ParkingSpotCreateWithoutOwnerInput, ParkingSpotUncheckedCreateWithoutOwnerInput> | ParkingSpotCreateWithoutOwnerInput[] | ParkingSpotUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ParkingSpotCreateOrConnectWithoutOwnerInput | ParkingSpotCreateOrConnectWithoutOwnerInput[]
    upsert?: ParkingSpotUpsertWithWhereUniqueWithoutOwnerInput | ParkingSpotUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ParkingSpotCreateManyOwnerInputEnvelope
    set?: ParkingSpotWhereUniqueInput | ParkingSpotWhereUniqueInput[]
    disconnect?: ParkingSpotWhereUniqueInput | ParkingSpotWhereUniqueInput[]
    delete?: ParkingSpotWhereUniqueInput | ParkingSpotWhereUniqueInput[]
    connect?: ParkingSpotWhereUniqueInput | ParkingSpotWhereUniqueInput[]
    update?: ParkingSpotUpdateWithWhereUniqueWithoutOwnerInput | ParkingSpotUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ParkingSpotUpdateManyWithWhereWithoutOwnerInput | ParkingSpotUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ParkingSpotScalarWhereInput | ParkingSpotScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutRenterNestedInput = {
    create?: XOR<BookingCreateWithoutRenterInput, BookingUncheckedCreateWithoutRenterInput> | BookingCreateWithoutRenterInput[] | BookingUncheckedCreateWithoutRenterInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutRenterInput | BookingCreateOrConnectWithoutRenterInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutRenterInput | BookingUpsertWithWhereUniqueWithoutRenterInput[]
    createMany?: BookingCreateManyRenterInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutRenterInput | BookingUpdateWithWhereUniqueWithoutRenterInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutRenterInput | BookingUpdateManyWithWhereWithoutRenterInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ParkingSpotUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ParkingSpotCreateWithoutOwnerInput, ParkingSpotUncheckedCreateWithoutOwnerInput> | ParkingSpotCreateWithoutOwnerInput[] | ParkingSpotUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ParkingSpotCreateOrConnectWithoutOwnerInput | ParkingSpotCreateOrConnectWithoutOwnerInput[]
    upsert?: ParkingSpotUpsertWithWhereUniqueWithoutOwnerInput | ParkingSpotUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ParkingSpotCreateManyOwnerInputEnvelope
    set?: ParkingSpotWhereUniqueInput | ParkingSpotWhereUniqueInput[]
    disconnect?: ParkingSpotWhereUniqueInput | ParkingSpotWhereUniqueInput[]
    delete?: ParkingSpotWhereUniqueInput | ParkingSpotWhereUniqueInput[]
    connect?: ParkingSpotWhereUniqueInput | ParkingSpotWhereUniqueInput[]
    update?: ParkingSpotUpdateWithWhereUniqueWithoutOwnerInput | ParkingSpotUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ParkingSpotUpdateManyWithWhereWithoutOwnerInput | ParkingSpotUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ParkingSpotScalarWhereInput | ParkingSpotScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutRenterNestedInput = {
    create?: XOR<BookingCreateWithoutRenterInput, BookingUncheckedCreateWithoutRenterInput> | BookingCreateWithoutRenterInput[] | BookingUncheckedCreateWithoutRenterInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutRenterInput | BookingCreateOrConnectWithoutRenterInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutRenterInput | BookingUpsertWithWhereUniqueWithoutRenterInput[]
    createMany?: BookingCreateManyRenterInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutRenterInput | BookingUpdateWithWhereUniqueWithoutRenterInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutRenterInput | BookingUpdateManyWithWhereWithoutRenterInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSpotsInput = {
    create?: XOR<UserCreateWithoutSpotsInput, UserUncheckedCreateWithoutSpotsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSpotsInput
    connect?: UserWhereUniqueInput
  }

  export type AvailabilityCreateNestedManyWithoutSpotInput = {
    create?: XOR<AvailabilityCreateWithoutSpotInput, AvailabilityUncheckedCreateWithoutSpotInput> | AvailabilityCreateWithoutSpotInput[] | AvailabilityUncheckedCreateWithoutSpotInput[]
    connectOrCreate?: AvailabilityCreateOrConnectWithoutSpotInput | AvailabilityCreateOrConnectWithoutSpotInput[]
    createMany?: AvailabilityCreateManySpotInputEnvelope
    connect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutSpotInput = {
    create?: XOR<BookingCreateWithoutSpotInput, BookingUncheckedCreateWithoutSpotInput> | BookingCreateWithoutSpotInput[] | BookingUncheckedCreateWithoutSpotInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutSpotInput | BookingCreateOrConnectWithoutSpotInput[]
    createMany?: BookingCreateManySpotInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type SurgePricingLogCreateNestedManyWithoutSpotInput = {
    create?: XOR<SurgePricingLogCreateWithoutSpotInput, SurgePricingLogUncheckedCreateWithoutSpotInput> | SurgePricingLogCreateWithoutSpotInput[] | SurgePricingLogUncheckedCreateWithoutSpotInput[]
    connectOrCreate?: SurgePricingLogCreateOrConnectWithoutSpotInput | SurgePricingLogCreateOrConnectWithoutSpotInput[]
    createMany?: SurgePricingLogCreateManySpotInputEnvelope
    connect?: SurgePricingLogWhereUniqueInput | SurgePricingLogWhereUniqueInput[]
  }

  export type AvailabilityUncheckedCreateNestedManyWithoutSpotInput = {
    create?: XOR<AvailabilityCreateWithoutSpotInput, AvailabilityUncheckedCreateWithoutSpotInput> | AvailabilityCreateWithoutSpotInput[] | AvailabilityUncheckedCreateWithoutSpotInput[]
    connectOrCreate?: AvailabilityCreateOrConnectWithoutSpotInput | AvailabilityCreateOrConnectWithoutSpotInput[]
    createMany?: AvailabilityCreateManySpotInputEnvelope
    connect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutSpotInput = {
    create?: XOR<BookingCreateWithoutSpotInput, BookingUncheckedCreateWithoutSpotInput> | BookingCreateWithoutSpotInput[] | BookingUncheckedCreateWithoutSpotInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutSpotInput | BookingCreateOrConnectWithoutSpotInput[]
    createMany?: BookingCreateManySpotInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type SurgePricingLogUncheckedCreateNestedManyWithoutSpotInput = {
    create?: XOR<SurgePricingLogCreateWithoutSpotInput, SurgePricingLogUncheckedCreateWithoutSpotInput> | SurgePricingLogCreateWithoutSpotInput[] | SurgePricingLogUncheckedCreateWithoutSpotInput[]
    connectOrCreate?: SurgePricingLogCreateOrConnectWithoutSpotInput | SurgePricingLogCreateOrConnectWithoutSpotInput[]
    createMany?: SurgePricingLogCreateManySpotInputEnvelope
    connect?: SurgePricingLogWhereUniqueInput | SurgePricingLogWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutSpotsNestedInput = {
    create?: XOR<UserCreateWithoutSpotsInput, UserUncheckedCreateWithoutSpotsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSpotsInput
    upsert?: UserUpsertWithoutSpotsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSpotsInput, UserUpdateWithoutSpotsInput>, UserUncheckedUpdateWithoutSpotsInput>
  }

  export type AvailabilityUpdateManyWithoutSpotNestedInput = {
    create?: XOR<AvailabilityCreateWithoutSpotInput, AvailabilityUncheckedCreateWithoutSpotInput> | AvailabilityCreateWithoutSpotInput[] | AvailabilityUncheckedCreateWithoutSpotInput[]
    connectOrCreate?: AvailabilityCreateOrConnectWithoutSpotInput | AvailabilityCreateOrConnectWithoutSpotInput[]
    upsert?: AvailabilityUpsertWithWhereUniqueWithoutSpotInput | AvailabilityUpsertWithWhereUniqueWithoutSpotInput[]
    createMany?: AvailabilityCreateManySpotInputEnvelope
    set?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    disconnect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    delete?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    connect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    update?: AvailabilityUpdateWithWhereUniqueWithoutSpotInput | AvailabilityUpdateWithWhereUniqueWithoutSpotInput[]
    updateMany?: AvailabilityUpdateManyWithWhereWithoutSpotInput | AvailabilityUpdateManyWithWhereWithoutSpotInput[]
    deleteMany?: AvailabilityScalarWhereInput | AvailabilityScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutSpotNestedInput = {
    create?: XOR<BookingCreateWithoutSpotInput, BookingUncheckedCreateWithoutSpotInput> | BookingCreateWithoutSpotInput[] | BookingUncheckedCreateWithoutSpotInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutSpotInput | BookingCreateOrConnectWithoutSpotInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutSpotInput | BookingUpsertWithWhereUniqueWithoutSpotInput[]
    createMany?: BookingCreateManySpotInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutSpotInput | BookingUpdateWithWhereUniqueWithoutSpotInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutSpotInput | BookingUpdateManyWithWhereWithoutSpotInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type SurgePricingLogUpdateManyWithoutSpotNestedInput = {
    create?: XOR<SurgePricingLogCreateWithoutSpotInput, SurgePricingLogUncheckedCreateWithoutSpotInput> | SurgePricingLogCreateWithoutSpotInput[] | SurgePricingLogUncheckedCreateWithoutSpotInput[]
    connectOrCreate?: SurgePricingLogCreateOrConnectWithoutSpotInput | SurgePricingLogCreateOrConnectWithoutSpotInput[]
    upsert?: SurgePricingLogUpsertWithWhereUniqueWithoutSpotInput | SurgePricingLogUpsertWithWhereUniqueWithoutSpotInput[]
    createMany?: SurgePricingLogCreateManySpotInputEnvelope
    set?: SurgePricingLogWhereUniqueInput | SurgePricingLogWhereUniqueInput[]
    disconnect?: SurgePricingLogWhereUniqueInput | SurgePricingLogWhereUniqueInput[]
    delete?: SurgePricingLogWhereUniqueInput | SurgePricingLogWhereUniqueInput[]
    connect?: SurgePricingLogWhereUniqueInput | SurgePricingLogWhereUniqueInput[]
    update?: SurgePricingLogUpdateWithWhereUniqueWithoutSpotInput | SurgePricingLogUpdateWithWhereUniqueWithoutSpotInput[]
    updateMany?: SurgePricingLogUpdateManyWithWhereWithoutSpotInput | SurgePricingLogUpdateManyWithWhereWithoutSpotInput[]
    deleteMany?: SurgePricingLogScalarWhereInput | SurgePricingLogScalarWhereInput[]
  }

  export type AvailabilityUncheckedUpdateManyWithoutSpotNestedInput = {
    create?: XOR<AvailabilityCreateWithoutSpotInput, AvailabilityUncheckedCreateWithoutSpotInput> | AvailabilityCreateWithoutSpotInput[] | AvailabilityUncheckedCreateWithoutSpotInput[]
    connectOrCreate?: AvailabilityCreateOrConnectWithoutSpotInput | AvailabilityCreateOrConnectWithoutSpotInput[]
    upsert?: AvailabilityUpsertWithWhereUniqueWithoutSpotInput | AvailabilityUpsertWithWhereUniqueWithoutSpotInput[]
    createMany?: AvailabilityCreateManySpotInputEnvelope
    set?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    disconnect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    delete?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    connect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    update?: AvailabilityUpdateWithWhereUniqueWithoutSpotInput | AvailabilityUpdateWithWhereUniqueWithoutSpotInput[]
    updateMany?: AvailabilityUpdateManyWithWhereWithoutSpotInput | AvailabilityUpdateManyWithWhereWithoutSpotInput[]
    deleteMany?: AvailabilityScalarWhereInput | AvailabilityScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutSpotNestedInput = {
    create?: XOR<BookingCreateWithoutSpotInput, BookingUncheckedCreateWithoutSpotInput> | BookingCreateWithoutSpotInput[] | BookingUncheckedCreateWithoutSpotInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutSpotInput | BookingCreateOrConnectWithoutSpotInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutSpotInput | BookingUpsertWithWhereUniqueWithoutSpotInput[]
    createMany?: BookingCreateManySpotInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutSpotInput | BookingUpdateWithWhereUniqueWithoutSpotInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutSpotInput | BookingUpdateManyWithWhereWithoutSpotInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type SurgePricingLogUncheckedUpdateManyWithoutSpotNestedInput = {
    create?: XOR<SurgePricingLogCreateWithoutSpotInput, SurgePricingLogUncheckedCreateWithoutSpotInput> | SurgePricingLogCreateWithoutSpotInput[] | SurgePricingLogUncheckedCreateWithoutSpotInput[]
    connectOrCreate?: SurgePricingLogCreateOrConnectWithoutSpotInput | SurgePricingLogCreateOrConnectWithoutSpotInput[]
    upsert?: SurgePricingLogUpsertWithWhereUniqueWithoutSpotInput | SurgePricingLogUpsertWithWhereUniqueWithoutSpotInput[]
    createMany?: SurgePricingLogCreateManySpotInputEnvelope
    set?: SurgePricingLogWhereUniqueInput | SurgePricingLogWhereUniqueInput[]
    disconnect?: SurgePricingLogWhereUniqueInput | SurgePricingLogWhereUniqueInput[]
    delete?: SurgePricingLogWhereUniqueInput | SurgePricingLogWhereUniqueInput[]
    connect?: SurgePricingLogWhereUniqueInput | SurgePricingLogWhereUniqueInput[]
    update?: SurgePricingLogUpdateWithWhereUniqueWithoutSpotInput | SurgePricingLogUpdateWithWhereUniqueWithoutSpotInput[]
    updateMany?: SurgePricingLogUpdateManyWithWhereWithoutSpotInput | SurgePricingLogUpdateManyWithWhereWithoutSpotInput[]
    deleteMany?: SurgePricingLogScalarWhereInput | SurgePricingLogScalarWhereInput[]
  }

  export type ParkingSpotCreateNestedOneWithoutAvailabilitiesInput = {
    create?: XOR<ParkingSpotCreateWithoutAvailabilitiesInput, ParkingSpotUncheckedCreateWithoutAvailabilitiesInput>
    connectOrCreate?: ParkingSpotCreateOrConnectWithoutAvailabilitiesInput
    connect?: ParkingSpotWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ParkingSpotUpdateOneRequiredWithoutAvailabilitiesNestedInput = {
    create?: XOR<ParkingSpotCreateWithoutAvailabilitiesInput, ParkingSpotUncheckedCreateWithoutAvailabilitiesInput>
    connectOrCreate?: ParkingSpotCreateOrConnectWithoutAvailabilitiesInput
    upsert?: ParkingSpotUpsertWithoutAvailabilitiesInput
    connect?: ParkingSpotWhereUniqueInput
    update?: XOR<XOR<ParkingSpotUpdateToOneWithWhereWithoutAvailabilitiesInput, ParkingSpotUpdateWithoutAvailabilitiesInput>, ParkingSpotUncheckedUpdateWithoutAvailabilitiesInput>
  }

  export type ParkingSpotCreateNestedOneWithoutBookingsInput = {
    create?: XOR<ParkingSpotCreateWithoutBookingsInput, ParkingSpotUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ParkingSpotCreateOrConnectWithoutBookingsInput
    connect?: ParkingSpotWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBookingsInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    connect?: UserWhereUniqueInput
  }

  export type BlockchainEventCreateNestedManyWithoutBookingInput = {
    create?: XOR<BlockchainEventCreateWithoutBookingInput, BlockchainEventUncheckedCreateWithoutBookingInput> | BlockchainEventCreateWithoutBookingInput[] | BlockchainEventUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BlockchainEventCreateOrConnectWithoutBookingInput | BlockchainEventCreateOrConnectWithoutBookingInput[]
    createMany?: BlockchainEventCreateManyBookingInputEnvelope
    connect?: BlockchainEventWhereUniqueInput | BlockchainEventWhereUniqueInput[]
  }

  export type BlockchainEventUncheckedCreateNestedManyWithoutBookingInput = {
    create?: XOR<BlockchainEventCreateWithoutBookingInput, BlockchainEventUncheckedCreateWithoutBookingInput> | BlockchainEventCreateWithoutBookingInput[] | BlockchainEventUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BlockchainEventCreateOrConnectWithoutBookingInput | BlockchainEventCreateOrConnectWithoutBookingInput[]
    createMany?: BlockchainEventCreateManyBookingInputEnvelope
    connect?: BlockchainEventWhereUniqueInput | BlockchainEventWhereUniqueInput[]
  }

  export type ParkingSpotUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<ParkingSpotCreateWithoutBookingsInput, ParkingSpotUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ParkingSpotCreateOrConnectWithoutBookingsInput
    upsert?: ParkingSpotUpsertWithoutBookingsInput
    connect?: ParkingSpotWhereUniqueInput
    update?: XOR<XOR<ParkingSpotUpdateToOneWithWhereWithoutBookingsInput, ParkingSpotUpdateWithoutBookingsInput>, ParkingSpotUncheckedUpdateWithoutBookingsInput>
  }

  export type UserUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    upsert?: UserUpsertWithoutBookingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookingsInput, UserUpdateWithoutBookingsInput>, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type BlockchainEventUpdateManyWithoutBookingNestedInput = {
    create?: XOR<BlockchainEventCreateWithoutBookingInput, BlockchainEventUncheckedCreateWithoutBookingInput> | BlockchainEventCreateWithoutBookingInput[] | BlockchainEventUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BlockchainEventCreateOrConnectWithoutBookingInput | BlockchainEventCreateOrConnectWithoutBookingInput[]
    upsert?: BlockchainEventUpsertWithWhereUniqueWithoutBookingInput | BlockchainEventUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: BlockchainEventCreateManyBookingInputEnvelope
    set?: BlockchainEventWhereUniqueInput | BlockchainEventWhereUniqueInput[]
    disconnect?: BlockchainEventWhereUniqueInput | BlockchainEventWhereUniqueInput[]
    delete?: BlockchainEventWhereUniqueInput | BlockchainEventWhereUniqueInput[]
    connect?: BlockchainEventWhereUniqueInput | BlockchainEventWhereUniqueInput[]
    update?: BlockchainEventUpdateWithWhereUniqueWithoutBookingInput | BlockchainEventUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: BlockchainEventUpdateManyWithWhereWithoutBookingInput | BlockchainEventUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: BlockchainEventScalarWhereInput | BlockchainEventScalarWhereInput[]
  }

  export type BlockchainEventUncheckedUpdateManyWithoutBookingNestedInput = {
    create?: XOR<BlockchainEventCreateWithoutBookingInput, BlockchainEventUncheckedCreateWithoutBookingInput> | BlockchainEventCreateWithoutBookingInput[] | BlockchainEventUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BlockchainEventCreateOrConnectWithoutBookingInput | BlockchainEventCreateOrConnectWithoutBookingInput[]
    upsert?: BlockchainEventUpsertWithWhereUniqueWithoutBookingInput | BlockchainEventUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: BlockchainEventCreateManyBookingInputEnvelope
    set?: BlockchainEventWhereUniqueInput | BlockchainEventWhereUniqueInput[]
    disconnect?: BlockchainEventWhereUniqueInput | BlockchainEventWhereUniqueInput[]
    delete?: BlockchainEventWhereUniqueInput | BlockchainEventWhereUniqueInput[]
    connect?: BlockchainEventWhereUniqueInput | BlockchainEventWhereUniqueInput[]
    update?: BlockchainEventUpdateWithWhereUniqueWithoutBookingInput | BlockchainEventUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: BlockchainEventUpdateManyWithWhereWithoutBookingInput | BlockchainEventUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: BlockchainEventScalarWhereInput | BlockchainEventScalarWhereInput[]
  }

  export type ParkingSpotCreateNestedOneWithoutSurgeLogsInput = {
    create?: XOR<ParkingSpotCreateWithoutSurgeLogsInput, ParkingSpotUncheckedCreateWithoutSurgeLogsInput>
    connectOrCreate?: ParkingSpotCreateOrConnectWithoutSurgeLogsInput
    connect?: ParkingSpotWhereUniqueInput
  }

  export type ParkingSpotUpdateOneRequiredWithoutSurgeLogsNestedInput = {
    create?: XOR<ParkingSpotCreateWithoutSurgeLogsInput, ParkingSpotUncheckedCreateWithoutSurgeLogsInput>
    connectOrCreate?: ParkingSpotCreateOrConnectWithoutSurgeLogsInput
    upsert?: ParkingSpotUpsertWithoutSurgeLogsInput
    connect?: ParkingSpotWhereUniqueInput
    update?: XOR<XOR<ParkingSpotUpdateToOneWithWhereWithoutSurgeLogsInput, ParkingSpotUpdateWithoutSurgeLogsInput>, ParkingSpotUncheckedUpdateWithoutSurgeLogsInput>
  }

  export type BookingCreateNestedOneWithoutBlockchainEventsInput = {
    create?: XOR<BookingCreateWithoutBlockchainEventsInput, BookingUncheckedCreateWithoutBlockchainEventsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutBlockchainEventsInput
    connect?: BookingWhereUniqueInput
  }

  export type BookingUpdateOneRequiredWithoutBlockchainEventsNestedInput = {
    create?: XOR<BookingCreateWithoutBlockchainEventsInput, BookingUncheckedCreateWithoutBlockchainEventsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutBlockchainEventsInput
    upsert?: BookingUpsertWithoutBlockchainEventsInput
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutBlockchainEventsInput, BookingUpdateWithoutBlockchainEventsInput>, BookingUncheckedUpdateWithoutBlockchainEventsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type ParkingSpotCreateWithoutOwnerInput = {
    latitude: number
    longitude: number
    city: string
    street?: string
    houseNumber?: string
    address: string
    hourlyRate: number
    description?: string | null
    hasCharger?: boolean
    isActive?: boolean
    size?: string
    imageUrl?: string | null
    availabilityMode?: string
    availabilities?: AvailabilityCreateNestedManyWithoutSpotInput
    bookings?: BookingCreateNestedManyWithoutSpotInput
    surgeLogs?: SurgePricingLogCreateNestedManyWithoutSpotInput
  }

  export type ParkingSpotUncheckedCreateWithoutOwnerInput = {
    id?: number
    latitude: number
    longitude: number
    city: string
    street?: string
    houseNumber?: string
    address: string
    hourlyRate: number
    description?: string | null
    hasCharger?: boolean
    isActive?: boolean
    size?: string
    imageUrl?: string | null
    availabilityMode?: string
    availabilities?: AvailabilityUncheckedCreateNestedManyWithoutSpotInput
    bookings?: BookingUncheckedCreateNestedManyWithoutSpotInput
    surgeLogs?: SurgePricingLogUncheckedCreateNestedManyWithoutSpotInput
  }

  export type ParkingSpotCreateOrConnectWithoutOwnerInput = {
    where: ParkingSpotWhereUniqueInput
    create: XOR<ParkingSpotCreateWithoutOwnerInput, ParkingSpotUncheckedCreateWithoutOwnerInput>
  }

  export type ParkingSpotCreateManyOwnerInputEnvelope = {
    data: ParkingSpotCreateManyOwnerInput | ParkingSpotCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type BookingCreateWithoutRenterInput = {
    startTime: Date | string
    endTime: Date | string
    totalPrice: number
    status?: string
    contractTxHash?: string | null
    depositStatus?: string | null
    spot: ParkingSpotCreateNestedOneWithoutBookingsInput
    blockchainEvents?: BlockchainEventCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutRenterInput = {
    id?: number
    spotId: number
    startTime: Date | string
    endTime: Date | string
    totalPrice: number
    status?: string
    contractTxHash?: string | null
    depositStatus?: string | null
    blockchainEvents?: BlockchainEventUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutRenterInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutRenterInput, BookingUncheckedCreateWithoutRenterInput>
  }

  export type BookingCreateManyRenterInputEnvelope = {
    data: BookingCreateManyRenterInput | BookingCreateManyRenterInput[]
    skipDuplicates?: boolean
  }

  export type ParkingSpotUpsertWithWhereUniqueWithoutOwnerInput = {
    where: ParkingSpotWhereUniqueInput
    update: XOR<ParkingSpotUpdateWithoutOwnerInput, ParkingSpotUncheckedUpdateWithoutOwnerInput>
    create: XOR<ParkingSpotCreateWithoutOwnerInput, ParkingSpotUncheckedCreateWithoutOwnerInput>
  }

  export type ParkingSpotUpdateWithWhereUniqueWithoutOwnerInput = {
    where: ParkingSpotWhereUniqueInput
    data: XOR<ParkingSpotUpdateWithoutOwnerInput, ParkingSpotUncheckedUpdateWithoutOwnerInput>
  }

  export type ParkingSpotUpdateManyWithWhereWithoutOwnerInput = {
    where: ParkingSpotScalarWhereInput
    data: XOR<ParkingSpotUpdateManyMutationInput, ParkingSpotUncheckedUpdateManyWithoutOwnerInput>
  }

  export type ParkingSpotScalarWhereInput = {
    AND?: ParkingSpotScalarWhereInput | ParkingSpotScalarWhereInput[]
    OR?: ParkingSpotScalarWhereInput[]
    NOT?: ParkingSpotScalarWhereInput | ParkingSpotScalarWhereInput[]
    id?: IntFilter<"ParkingSpot"> | number
    ownerId?: IntFilter<"ParkingSpot"> | number
    latitude?: FloatFilter<"ParkingSpot"> | number
    longitude?: FloatFilter<"ParkingSpot"> | number
    city?: StringFilter<"ParkingSpot"> | string
    street?: StringFilter<"ParkingSpot"> | string
    houseNumber?: StringFilter<"ParkingSpot"> | string
    address?: StringFilter<"ParkingSpot"> | string
    hourlyRate?: FloatFilter<"ParkingSpot"> | number
    description?: StringNullableFilter<"ParkingSpot"> | string | null
    hasCharger?: BoolFilter<"ParkingSpot"> | boolean
    isActive?: BoolFilter<"ParkingSpot"> | boolean
    size?: StringFilter<"ParkingSpot"> | string
    imageUrl?: StringNullableFilter<"ParkingSpot"> | string | null
    availabilityMode?: StringFilter<"ParkingSpot"> | string
  }

  export type BookingUpsertWithWhereUniqueWithoutRenterInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutRenterInput, BookingUncheckedUpdateWithoutRenterInput>
    create: XOR<BookingCreateWithoutRenterInput, BookingUncheckedCreateWithoutRenterInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutRenterInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutRenterInput, BookingUncheckedUpdateWithoutRenterInput>
  }

  export type BookingUpdateManyWithWhereWithoutRenterInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutRenterInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: IntFilter<"Booking"> | number
    spotId?: IntFilter<"Booking"> | number
    renterId?: IntFilter<"Booking"> | number
    startTime?: DateTimeFilter<"Booking"> | Date | string
    endTime?: DateTimeFilter<"Booking"> | Date | string
    totalPrice?: FloatFilter<"Booking"> | number
    status?: StringFilter<"Booking"> | string
    contractTxHash?: StringNullableFilter<"Booking"> | string | null
    depositStatus?: StringNullableFilter<"Booking"> | string | null
  }

  export type UserCreateWithoutSpotsInput = {
    email: string
    password: string
    username: string
    createdAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutRenterInput
  }

  export type UserUncheckedCreateWithoutSpotsInput = {
    id?: number
    email: string
    password: string
    username: string
    createdAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutRenterInput
  }

  export type UserCreateOrConnectWithoutSpotsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSpotsInput, UserUncheckedCreateWithoutSpotsInput>
  }

  export type AvailabilityCreateWithoutSpotInput = {
    dayOfWeek?: number | null
    startDateTime?: Date | string | null
    endDateTime?: Date | string | null
    startTime?: string | null
    endTime?: string | null
  }

  export type AvailabilityUncheckedCreateWithoutSpotInput = {
    id?: number
    dayOfWeek?: number | null
    startDateTime?: Date | string | null
    endDateTime?: Date | string | null
    startTime?: string | null
    endTime?: string | null
  }

  export type AvailabilityCreateOrConnectWithoutSpotInput = {
    where: AvailabilityWhereUniqueInput
    create: XOR<AvailabilityCreateWithoutSpotInput, AvailabilityUncheckedCreateWithoutSpotInput>
  }

  export type AvailabilityCreateManySpotInputEnvelope = {
    data: AvailabilityCreateManySpotInput | AvailabilityCreateManySpotInput[]
    skipDuplicates?: boolean
  }

  export type BookingCreateWithoutSpotInput = {
    startTime: Date | string
    endTime: Date | string
    totalPrice: number
    status?: string
    contractTxHash?: string | null
    depositStatus?: string | null
    renter: UserCreateNestedOneWithoutBookingsInput
    blockchainEvents?: BlockchainEventCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutSpotInput = {
    id?: number
    renterId: number
    startTime: Date | string
    endTime: Date | string
    totalPrice: number
    status?: string
    contractTxHash?: string | null
    depositStatus?: string | null
    blockchainEvents?: BlockchainEventUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutSpotInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutSpotInput, BookingUncheckedCreateWithoutSpotInput>
  }

  export type BookingCreateManySpotInputEnvelope = {
    data: BookingCreateManySpotInput | BookingCreateManySpotInput[]
    skipDuplicates?: boolean
  }

  export type SurgePricingLogCreateWithoutSpotInput = {
    multiplier: number
    reason?: string | null
    createdAt?: Date | string
  }

  export type SurgePricingLogUncheckedCreateWithoutSpotInput = {
    id?: number
    multiplier: number
    reason?: string | null
    createdAt?: Date | string
  }

  export type SurgePricingLogCreateOrConnectWithoutSpotInput = {
    where: SurgePricingLogWhereUniqueInput
    create: XOR<SurgePricingLogCreateWithoutSpotInput, SurgePricingLogUncheckedCreateWithoutSpotInput>
  }

  export type SurgePricingLogCreateManySpotInputEnvelope = {
    data: SurgePricingLogCreateManySpotInput | SurgePricingLogCreateManySpotInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSpotsInput = {
    update: XOR<UserUpdateWithoutSpotsInput, UserUncheckedUpdateWithoutSpotsInput>
    create: XOR<UserCreateWithoutSpotsInput, UserUncheckedCreateWithoutSpotsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSpotsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSpotsInput, UserUncheckedUpdateWithoutSpotsInput>
  }

  export type UserUpdateWithoutSpotsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutRenterNestedInput
  }

  export type UserUncheckedUpdateWithoutSpotsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutRenterNestedInput
  }

  export type AvailabilityUpsertWithWhereUniqueWithoutSpotInput = {
    where: AvailabilityWhereUniqueInput
    update: XOR<AvailabilityUpdateWithoutSpotInput, AvailabilityUncheckedUpdateWithoutSpotInput>
    create: XOR<AvailabilityCreateWithoutSpotInput, AvailabilityUncheckedCreateWithoutSpotInput>
  }

  export type AvailabilityUpdateWithWhereUniqueWithoutSpotInput = {
    where: AvailabilityWhereUniqueInput
    data: XOR<AvailabilityUpdateWithoutSpotInput, AvailabilityUncheckedUpdateWithoutSpotInput>
  }

  export type AvailabilityUpdateManyWithWhereWithoutSpotInput = {
    where: AvailabilityScalarWhereInput
    data: XOR<AvailabilityUpdateManyMutationInput, AvailabilityUncheckedUpdateManyWithoutSpotInput>
  }

  export type AvailabilityScalarWhereInput = {
    AND?: AvailabilityScalarWhereInput | AvailabilityScalarWhereInput[]
    OR?: AvailabilityScalarWhereInput[]
    NOT?: AvailabilityScalarWhereInput | AvailabilityScalarWhereInput[]
    id?: IntFilter<"Availability"> | number
    spotId?: IntFilter<"Availability"> | number
    dayOfWeek?: IntNullableFilter<"Availability"> | number | null
    startDateTime?: DateTimeNullableFilter<"Availability"> | Date | string | null
    endDateTime?: DateTimeNullableFilter<"Availability"> | Date | string | null
    startTime?: StringNullableFilter<"Availability"> | string | null
    endTime?: StringNullableFilter<"Availability"> | string | null
  }

  export type BookingUpsertWithWhereUniqueWithoutSpotInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutSpotInput, BookingUncheckedUpdateWithoutSpotInput>
    create: XOR<BookingCreateWithoutSpotInput, BookingUncheckedCreateWithoutSpotInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutSpotInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutSpotInput, BookingUncheckedUpdateWithoutSpotInput>
  }

  export type BookingUpdateManyWithWhereWithoutSpotInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutSpotInput>
  }

  export type SurgePricingLogUpsertWithWhereUniqueWithoutSpotInput = {
    where: SurgePricingLogWhereUniqueInput
    update: XOR<SurgePricingLogUpdateWithoutSpotInput, SurgePricingLogUncheckedUpdateWithoutSpotInput>
    create: XOR<SurgePricingLogCreateWithoutSpotInput, SurgePricingLogUncheckedCreateWithoutSpotInput>
  }

  export type SurgePricingLogUpdateWithWhereUniqueWithoutSpotInput = {
    where: SurgePricingLogWhereUniqueInput
    data: XOR<SurgePricingLogUpdateWithoutSpotInput, SurgePricingLogUncheckedUpdateWithoutSpotInput>
  }

  export type SurgePricingLogUpdateManyWithWhereWithoutSpotInput = {
    where: SurgePricingLogScalarWhereInput
    data: XOR<SurgePricingLogUpdateManyMutationInput, SurgePricingLogUncheckedUpdateManyWithoutSpotInput>
  }

  export type SurgePricingLogScalarWhereInput = {
    AND?: SurgePricingLogScalarWhereInput | SurgePricingLogScalarWhereInput[]
    OR?: SurgePricingLogScalarWhereInput[]
    NOT?: SurgePricingLogScalarWhereInput | SurgePricingLogScalarWhereInput[]
    id?: IntFilter<"SurgePricingLog"> | number
    spotId?: IntFilter<"SurgePricingLog"> | number
    multiplier?: FloatFilter<"SurgePricingLog"> | number
    reason?: StringNullableFilter<"SurgePricingLog"> | string | null
    createdAt?: DateTimeFilter<"SurgePricingLog"> | Date | string
  }

  export type ParkingSpotCreateWithoutAvailabilitiesInput = {
    latitude: number
    longitude: number
    city: string
    street?: string
    houseNumber?: string
    address: string
    hourlyRate: number
    description?: string | null
    hasCharger?: boolean
    isActive?: boolean
    size?: string
    imageUrl?: string | null
    availabilityMode?: string
    owner: UserCreateNestedOneWithoutSpotsInput
    bookings?: BookingCreateNestedManyWithoutSpotInput
    surgeLogs?: SurgePricingLogCreateNestedManyWithoutSpotInput
  }

  export type ParkingSpotUncheckedCreateWithoutAvailabilitiesInput = {
    id?: number
    ownerId: number
    latitude: number
    longitude: number
    city: string
    street?: string
    houseNumber?: string
    address: string
    hourlyRate: number
    description?: string | null
    hasCharger?: boolean
    isActive?: boolean
    size?: string
    imageUrl?: string | null
    availabilityMode?: string
    bookings?: BookingUncheckedCreateNestedManyWithoutSpotInput
    surgeLogs?: SurgePricingLogUncheckedCreateNestedManyWithoutSpotInput
  }

  export type ParkingSpotCreateOrConnectWithoutAvailabilitiesInput = {
    where: ParkingSpotWhereUniqueInput
    create: XOR<ParkingSpotCreateWithoutAvailabilitiesInput, ParkingSpotUncheckedCreateWithoutAvailabilitiesInput>
  }

  export type ParkingSpotUpsertWithoutAvailabilitiesInput = {
    update: XOR<ParkingSpotUpdateWithoutAvailabilitiesInput, ParkingSpotUncheckedUpdateWithoutAvailabilitiesInput>
    create: XOR<ParkingSpotCreateWithoutAvailabilitiesInput, ParkingSpotUncheckedCreateWithoutAvailabilitiesInput>
    where?: ParkingSpotWhereInput
  }

  export type ParkingSpotUpdateToOneWithWhereWithoutAvailabilitiesInput = {
    where?: ParkingSpotWhereInput
    data: XOR<ParkingSpotUpdateWithoutAvailabilitiesInput, ParkingSpotUncheckedUpdateWithoutAvailabilitiesInput>
  }

  export type ParkingSpotUpdateWithoutAvailabilitiesInput = {
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    houseNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hasCharger?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    size?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityMode?: StringFieldUpdateOperationsInput | string
    owner?: UserUpdateOneRequiredWithoutSpotsNestedInput
    bookings?: BookingUpdateManyWithoutSpotNestedInput
    surgeLogs?: SurgePricingLogUpdateManyWithoutSpotNestedInput
  }

  export type ParkingSpotUncheckedUpdateWithoutAvailabilitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    houseNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hasCharger?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    size?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityMode?: StringFieldUpdateOperationsInput | string
    bookings?: BookingUncheckedUpdateManyWithoutSpotNestedInput
    surgeLogs?: SurgePricingLogUncheckedUpdateManyWithoutSpotNestedInput
  }

  export type ParkingSpotCreateWithoutBookingsInput = {
    latitude: number
    longitude: number
    city: string
    street?: string
    houseNumber?: string
    address: string
    hourlyRate: number
    description?: string | null
    hasCharger?: boolean
    isActive?: boolean
    size?: string
    imageUrl?: string | null
    availabilityMode?: string
    owner: UserCreateNestedOneWithoutSpotsInput
    availabilities?: AvailabilityCreateNestedManyWithoutSpotInput
    surgeLogs?: SurgePricingLogCreateNestedManyWithoutSpotInput
  }

  export type ParkingSpotUncheckedCreateWithoutBookingsInput = {
    id?: number
    ownerId: number
    latitude: number
    longitude: number
    city: string
    street?: string
    houseNumber?: string
    address: string
    hourlyRate: number
    description?: string | null
    hasCharger?: boolean
    isActive?: boolean
    size?: string
    imageUrl?: string | null
    availabilityMode?: string
    availabilities?: AvailabilityUncheckedCreateNestedManyWithoutSpotInput
    surgeLogs?: SurgePricingLogUncheckedCreateNestedManyWithoutSpotInput
  }

  export type ParkingSpotCreateOrConnectWithoutBookingsInput = {
    where: ParkingSpotWhereUniqueInput
    create: XOR<ParkingSpotCreateWithoutBookingsInput, ParkingSpotUncheckedCreateWithoutBookingsInput>
  }

  export type UserCreateWithoutBookingsInput = {
    email: string
    password: string
    username: string
    createdAt?: Date | string
    spots?: ParkingSpotCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutBookingsInput = {
    id?: number
    email: string
    password: string
    username: string
    createdAt?: Date | string
    spots?: ParkingSpotUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutBookingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
  }

  export type BlockchainEventCreateWithoutBookingInput = {
    eventType: string
    txHash: string
    createdAt?: Date | string
  }

  export type BlockchainEventUncheckedCreateWithoutBookingInput = {
    id?: number
    eventType: string
    txHash: string
    createdAt?: Date | string
  }

  export type BlockchainEventCreateOrConnectWithoutBookingInput = {
    where: BlockchainEventWhereUniqueInput
    create: XOR<BlockchainEventCreateWithoutBookingInput, BlockchainEventUncheckedCreateWithoutBookingInput>
  }

  export type BlockchainEventCreateManyBookingInputEnvelope = {
    data: BlockchainEventCreateManyBookingInput | BlockchainEventCreateManyBookingInput[]
    skipDuplicates?: boolean
  }

  export type ParkingSpotUpsertWithoutBookingsInput = {
    update: XOR<ParkingSpotUpdateWithoutBookingsInput, ParkingSpotUncheckedUpdateWithoutBookingsInput>
    create: XOR<ParkingSpotCreateWithoutBookingsInput, ParkingSpotUncheckedCreateWithoutBookingsInput>
    where?: ParkingSpotWhereInput
  }

  export type ParkingSpotUpdateToOneWithWhereWithoutBookingsInput = {
    where?: ParkingSpotWhereInput
    data: XOR<ParkingSpotUpdateWithoutBookingsInput, ParkingSpotUncheckedUpdateWithoutBookingsInput>
  }

  export type ParkingSpotUpdateWithoutBookingsInput = {
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    houseNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hasCharger?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    size?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityMode?: StringFieldUpdateOperationsInput | string
    owner?: UserUpdateOneRequiredWithoutSpotsNestedInput
    availabilities?: AvailabilityUpdateManyWithoutSpotNestedInput
    surgeLogs?: SurgePricingLogUpdateManyWithoutSpotNestedInput
  }

  export type ParkingSpotUncheckedUpdateWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    houseNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hasCharger?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    size?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityMode?: StringFieldUpdateOperationsInput | string
    availabilities?: AvailabilityUncheckedUpdateManyWithoutSpotNestedInput
    surgeLogs?: SurgePricingLogUncheckedUpdateManyWithoutSpotNestedInput
  }

  export type UserUpsertWithoutBookingsInput = {
    update: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type UserUpdateWithoutBookingsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spots?: ParkingSpotUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    spots?: ParkingSpotUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type BlockchainEventUpsertWithWhereUniqueWithoutBookingInput = {
    where: BlockchainEventWhereUniqueInput
    update: XOR<BlockchainEventUpdateWithoutBookingInput, BlockchainEventUncheckedUpdateWithoutBookingInput>
    create: XOR<BlockchainEventCreateWithoutBookingInput, BlockchainEventUncheckedCreateWithoutBookingInput>
  }

  export type BlockchainEventUpdateWithWhereUniqueWithoutBookingInput = {
    where: BlockchainEventWhereUniqueInput
    data: XOR<BlockchainEventUpdateWithoutBookingInput, BlockchainEventUncheckedUpdateWithoutBookingInput>
  }

  export type BlockchainEventUpdateManyWithWhereWithoutBookingInput = {
    where: BlockchainEventScalarWhereInput
    data: XOR<BlockchainEventUpdateManyMutationInput, BlockchainEventUncheckedUpdateManyWithoutBookingInput>
  }

  export type BlockchainEventScalarWhereInput = {
    AND?: BlockchainEventScalarWhereInput | BlockchainEventScalarWhereInput[]
    OR?: BlockchainEventScalarWhereInput[]
    NOT?: BlockchainEventScalarWhereInput | BlockchainEventScalarWhereInput[]
    id?: IntFilter<"BlockchainEvent"> | number
    bookingId?: IntFilter<"BlockchainEvent"> | number
    eventType?: StringFilter<"BlockchainEvent"> | string
    txHash?: StringFilter<"BlockchainEvent"> | string
    createdAt?: DateTimeFilter<"BlockchainEvent"> | Date | string
  }

  export type ParkingSpotCreateWithoutSurgeLogsInput = {
    latitude: number
    longitude: number
    city: string
    street?: string
    houseNumber?: string
    address: string
    hourlyRate: number
    description?: string | null
    hasCharger?: boolean
    isActive?: boolean
    size?: string
    imageUrl?: string | null
    availabilityMode?: string
    owner: UserCreateNestedOneWithoutSpotsInput
    availabilities?: AvailabilityCreateNestedManyWithoutSpotInput
    bookings?: BookingCreateNestedManyWithoutSpotInput
  }

  export type ParkingSpotUncheckedCreateWithoutSurgeLogsInput = {
    id?: number
    ownerId: number
    latitude: number
    longitude: number
    city: string
    street?: string
    houseNumber?: string
    address: string
    hourlyRate: number
    description?: string | null
    hasCharger?: boolean
    isActive?: boolean
    size?: string
    imageUrl?: string | null
    availabilityMode?: string
    availabilities?: AvailabilityUncheckedCreateNestedManyWithoutSpotInput
    bookings?: BookingUncheckedCreateNestedManyWithoutSpotInput
  }

  export type ParkingSpotCreateOrConnectWithoutSurgeLogsInput = {
    where: ParkingSpotWhereUniqueInput
    create: XOR<ParkingSpotCreateWithoutSurgeLogsInput, ParkingSpotUncheckedCreateWithoutSurgeLogsInput>
  }

  export type ParkingSpotUpsertWithoutSurgeLogsInput = {
    update: XOR<ParkingSpotUpdateWithoutSurgeLogsInput, ParkingSpotUncheckedUpdateWithoutSurgeLogsInput>
    create: XOR<ParkingSpotCreateWithoutSurgeLogsInput, ParkingSpotUncheckedCreateWithoutSurgeLogsInput>
    where?: ParkingSpotWhereInput
  }

  export type ParkingSpotUpdateToOneWithWhereWithoutSurgeLogsInput = {
    where?: ParkingSpotWhereInput
    data: XOR<ParkingSpotUpdateWithoutSurgeLogsInput, ParkingSpotUncheckedUpdateWithoutSurgeLogsInput>
  }

  export type ParkingSpotUpdateWithoutSurgeLogsInput = {
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    houseNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hasCharger?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    size?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityMode?: StringFieldUpdateOperationsInput | string
    owner?: UserUpdateOneRequiredWithoutSpotsNestedInput
    availabilities?: AvailabilityUpdateManyWithoutSpotNestedInput
    bookings?: BookingUpdateManyWithoutSpotNestedInput
  }

  export type ParkingSpotUncheckedUpdateWithoutSurgeLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    houseNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hasCharger?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    size?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityMode?: StringFieldUpdateOperationsInput | string
    availabilities?: AvailabilityUncheckedUpdateManyWithoutSpotNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutSpotNestedInput
  }

  export type BookingCreateWithoutBlockchainEventsInput = {
    startTime: Date | string
    endTime: Date | string
    totalPrice: number
    status?: string
    contractTxHash?: string | null
    depositStatus?: string | null
    spot: ParkingSpotCreateNestedOneWithoutBookingsInput
    renter: UserCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutBlockchainEventsInput = {
    id?: number
    spotId: number
    renterId: number
    startTime: Date | string
    endTime: Date | string
    totalPrice: number
    status?: string
    contractTxHash?: string | null
    depositStatus?: string | null
  }

  export type BookingCreateOrConnectWithoutBlockchainEventsInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutBlockchainEventsInput, BookingUncheckedCreateWithoutBlockchainEventsInput>
  }

  export type BookingUpsertWithoutBlockchainEventsInput = {
    update: XOR<BookingUpdateWithoutBlockchainEventsInput, BookingUncheckedUpdateWithoutBlockchainEventsInput>
    create: XOR<BookingCreateWithoutBlockchainEventsInput, BookingUncheckedCreateWithoutBlockchainEventsInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutBlockchainEventsInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutBlockchainEventsInput, BookingUncheckedUpdateWithoutBlockchainEventsInput>
  }

  export type BookingUpdateWithoutBlockchainEventsInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    contractTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    depositStatus?: NullableStringFieldUpdateOperationsInput | string | null
    spot?: ParkingSpotUpdateOneRequiredWithoutBookingsNestedInput
    renter?: UserUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutBlockchainEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    spotId?: IntFieldUpdateOperationsInput | number
    renterId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    contractTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    depositStatus?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ParkingSpotCreateManyOwnerInput = {
    id?: number
    latitude: number
    longitude: number
    city: string
    street?: string
    houseNumber?: string
    address: string
    hourlyRate: number
    description?: string | null
    hasCharger?: boolean
    isActive?: boolean
    size?: string
    imageUrl?: string | null
    availabilityMode?: string
  }

  export type BookingCreateManyRenterInput = {
    id?: number
    spotId: number
    startTime: Date | string
    endTime: Date | string
    totalPrice: number
    status?: string
    contractTxHash?: string | null
    depositStatus?: string | null
  }

  export type ParkingSpotUpdateWithoutOwnerInput = {
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    houseNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hasCharger?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    size?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityMode?: StringFieldUpdateOperationsInput | string
    availabilities?: AvailabilityUpdateManyWithoutSpotNestedInput
    bookings?: BookingUpdateManyWithoutSpotNestedInput
    surgeLogs?: SurgePricingLogUpdateManyWithoutSpotNestedInput
  }

  export type ParkingSpotUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    houseNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hasCharger?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    size?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityMode?: StringFieldUpdateOperationsInput | string
    availabilities?: AvailabilityUncheckedUpdateManyWithoutSpotNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutSpotNestedInput
    surgeLogs?: SurgePricingLogUncheckedUpdateManyWithoutSpotNestedInput
  }

  export type ParkingSpotUncheckedUpdateManyWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    street?: StringFieldUpdateOperationsInput | string
    houseNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    hourlyRate?: FloatFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    hasCharger?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    size?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    availabilityMode?: StringFieldUpdateOperationsInput | string
  }

  export type BookingUpdateWithoutRenterInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    contractTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    depositStatus?: NullableStringFieldUpdateOperationsInput | string | null
    spot?: ParkingSpotUpdateOneRequiredWithoutBookingsNestedInput
    blockchainEvents?: BlockchainEventUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutRenterInput = {
    id?: IntFieldUpdateOperationsInput | number
    spotId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    contractTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    depositStatus?: NullableStringFieldUpdateOperationsInput | string | null
    blockchainEvents?: BlockchainEventUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutRenterInput = {
    id?: IntFieldUpdateOperationsInput | number
    spotId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    contractTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    depositStatus?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AvailabilityCreateManySpotInput = {
    id?: number
    dayOfWeek?: number | null
    startDateTime?: Date | string | null
    endDateTime?: Date | string | null
    startTime?: string | null
    endTime?: string | null
  }

  export type BookingCreateManySpotInput = {
    id?: number
    renterId: number
    startTime: Date | string
    endTime: Date | string
    totalPrice: number
    status?: string
    contractTxHash?: string | null
    depositStatus?: string | null
  }

  export type SurgePricingLogCreateManySpotInput = {
    id?: number
    multiplier: number
    reason?: string | null
    createdAt?: Date | string
  }

  export type AvailabilityUpdateWithoutSpotInput = {
    dayOfWeek?: NullableIntFieldUpdateOperationsInput | number | null
    startDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AvailabilityUncheckedUpdateWithoutSpotInput = {
    id?: IntFieldUpdateOperationsInput | number
    dayOfWeek?: NullableIntFieldUpdateOperationsInput | number | null
    startDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AvailabilityUncheckedUpdateManyWithoutSpotInput = {
    id?: IntFieldUpdateOperationsInput | number
    dayOfWeek?: NullableIntFieldUpdateOperationsInput | number | null
    startDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BookingUpdateWithoutSpotInput = {
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    contractTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    depositStatus?: NullableStringFieldUpdateOperationsInput | string | null
    renter?: UserUpdateOneRequiredWithoutBookingsNestedInput
    blockchainEvents?: BlockchainEventUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutSpotInput = {
    id?: IntFieldUpdateOperationsInput | number
    renterId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    contractTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    depositStatus?: NullableStringFieldUpdateOperationsInput | string | null
    blockchainEvents?: BlockchainEventUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutSpotInput = {
    id?: IntFieldUpdateOperationsInput | number
    renterId?: IntFieldUpdateOperationsInput | number
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    contractTxHash?: NullableStringFieldUpdateOperationsInput | string | null
    depositStatus?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SurgePricingLogUpdateWithoutSpotInput = {
    multiplier?: FloatFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SurgePricingLogUncheckedUpdateWithoutSpotInput = {
    id?: IntFieldUpdateOperationsInput | number
    multiplier?: FloatFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SurgePricingLogUncheckedUpdateManyWithoutSpotInput = {
    id?: IntFieldUpdateOperationsInput | number
    multiplier?: FloatFieldUpdateOperationsInput | number
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockchainEventCreateManyBookingInput = {
    id?: number
    eventType: string
    txHash: string
    createdAt?: Date | string
  }

  export type BlockchainEventUpdateWithoutBookingInput = {
    eventType?: StringFieldUpdateOperationsInput | string
    txHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockchainEventUncheckedUpdateWithoutBookingInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventType?: StringFieldUpdateOperationsInput | string
    txHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockchainEventUncheckedUpdateManyWithoutBookingInput = {
    id?: IntFieldUpdateOperationsInput | number
    eventType?: StringFieldUpdateOperationsInput | string
    txHash?: StringFieldUpdateOperationsInput | string
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