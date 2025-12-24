
/**
 * Client
**/

import * as runtime from './runtime/library.js';
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
 * Model enquiry
 * 
 */
export type enquiry = $Result.DefaultSelection<Prisma.$enquiryPayload>
/**
 * Model Franchise
 * 
 */
export type Franchise = $Result.DefaultSelection<Prisma.$FranchisePayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model Factory
 * 
 */
export type Factory = $Result.DefaultSelection<Prisma.$FactoryPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  SUPER_ADMIN: 'SUPER_ADMIN',
  ADMIN: 'ADMIN',
  FACTORY: 'FACTORY',
  EMPLOYEE: 'EMPLOYEE',
  FRANCHISE: 'FRANCHISE',
  CUSTOMER: 'CUSTOMER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Climate: {
  HUMID: 'HUMID',
  COLD: 'COLD'
};

export type Climate = (typeof Climate)[keyof typeof Climate]


export const Terrain: {
  FLAT: 'FLAT',
  HILL_STATION: 'HILL_STATION'
};

export type Terrain = (typeof Terrain)[keyof typeof Terrain]


export const PaymentMethod: {
  CASH: 'CASH',
  CARD: 'CARD',
  UPI: 'UPI',
  BANK_TRANSFER: 'BANK_TRANSFER'
};

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Climate = $Enums.Climate

export const Climate: typeof $Enums.Climate

export type Terrain = $Enums.Terrain

export const Terrain: typeof $Enums.Terrain

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
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
   * `prisma.enquiry`: Exposes CRUD operations for the **enquiry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enquiries
    * const enquiries = await prisma.enquiry.findMany()
    * ```
    */
  get enquiry(): Prisma.enquiryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.franchise`: Exposes CRUD operations for the **Franchise** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Franchises
    * const franchises = await prisma.franchise.findMany()
    * ```
    */
  get franchise(): Prisma.FranchiseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.factory`: Exposes CRUD operations for the **Factory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Factories
    * const factories = await prisma.factory.findMany()
    * ```
    */
  get factory(): Prisma.FactoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
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
    enquiry: 'enquiry',
    Franchise: 'Franchise',
    Customer: 'Customer',
    Product: 'Product',
    Order: 'Order',
    Factory: 'Factory',
    Payment: 'Payment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "enquiry" | "franchise" | "customer" | "product" | "order" | "factory" | "payment"
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
      enquiry: {
        payload: Prisma.$enquiryPayload<ExtArgs>
        fields: Prisma.enquiryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.enquiryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enquiryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.enquiryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enquiryPayload>
          }
          findFirst: {
            args: Prisma.enquiryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enquiryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.enquiryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enquiryPayload>
          }
          findMany: {
            args: Prisma.enquiryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enquiryPayload>[]
          }
          create: {
            args: Prisma.enquiryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enquiryPayload>
          }
          createMany: {
            args: Prisma.enquiryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.enquiryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enquiryPayload>[]
          }
          delete: {
            args: Prisma.enquiryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enquiryPayload>
          }
          update: {
            args: Prisma.enquiryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enquiryPayload>
          }
          deleteMany: {
            args: Prisma.enquiryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.enquiryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.enquiryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enquiryPayload>[]
          }
          upsert: {
            args: Prisma.enquiryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$enquiryPayload>
          }
          aggregate: {
            args: Prisma.EnquiryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnquiry>
          }
          groupBy: {
            args: Prisma.enquiryGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnquiryGroupByOutputType>[]
          }
          count: {
            args: Prisma.enquiryCountArgs<ExtArgs>
            result: $Utils.Optional<EnquiryCountAggregateOutputType> | number
          }
        }
      }
      Franchise: {
        payload: Prisma.$FranchisePayload<ExtArgs>
        fields: Prisma.FranchiseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FranchiseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FranchisePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FranchiseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FranchisePayload>
          }
          findFirst: {
            args: Prisma.FranchiseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FranchisePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FranchiseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FranchisePayload>
          }
          findMany: {
            args: Prisma.FranchiseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FranchisePayload>[]
          }
          create: {
            args: Prisma.FranchiseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FranchisePayload>
          }
          createMany: {
            args: Prisma.FranchiseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FranchiseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FranchisePayload>[]
          }
          delete: {
            args: Prisma.FranchiseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FranchisePayload>
          }
          update: {
            args: Prisma.FranchiseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FranchisePayload>
          }
          deleteMany: {
            args: Prisma.FranchiseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FranchiseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FranchiseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FranchisePayload>[]
          }
          upsert: {
            args: Prisma.FranchiseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FranchisePayload>
          }
          aggregate: {
            args: Prisma.FranchiseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFranchise>
          }
          groupBy: {
            args: Prisma.FranchiseGroupByArgs<ExtArgs>
            result: $Utils.Optional<FranchiseGroupByOutputType>[]
          }
          count: {
            args: Prisma.FranchiseCountArgs<ExtArgs>
            result: $Utils.Optional<FranchiseCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      Factory: {
        payload: Prisma.$FactoryPayload<ExtArgs>
        fields: Prisma.FactoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FactoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FactoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactoryPayload>
          }
          findFirst: {
            args: Prisma.FactoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FactoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactoryPayload>
          }
          findMany: {
            args: Prisma.FactoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactoryPayload>[]
          }
          create: {
            args: Prisma.FactoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactoryPayload>
          }
          createMany: {
            args: Prisma.FactoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FactoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactoryPayload>[]
          }
          delete: {
            args: Prisma.FactoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactoryPayload>
          }
          update: {
            args: Prisma.FactoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactoryPayload>
          }
          deleteMany: {
            args: Prisma.FactoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FactoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FactoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactoryPayload>[]
          }
          upsert: {
            args: Prisma.FactoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FactoryPayload>
          }
          aggregate: {
            args: Prisma.FactoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFactory>
          }
          groupBy: {
            args: Prisma.FactoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<FactoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.FactoryCountArgs<ExtArgs>
            result: $Utils.Optional<FactoryCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
    adapter?: runtime.SqlDriverAdapterFactory | null
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    enquiry?: enquiryOmit
    franchise?: FranchiseOmit
    customer?: CustomerOmit
    product?: ProductOmit
    order?: OrderOmit
    factory?: FactoryOmit
    payment?: PaymentOmit
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
    customers: number
    franchises: number
    ordersPlaced: number
    products: number
    ordersCreated: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customers?: boolean | UserCountOutputTypeCountCustomersArgs
    franchises?: boolean | UserCountOutputTypeCountFranchisesArgs
    ordersPlaced?: boolean | UserCountOutputTypeCountOrdersPlacedArgs
    products?: boolean | UserCountOutputTypeCountProductsArgs
    ordersCreated?: boolean | UserCountOutputTypeCountOrdersCreatedArgs
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
  export type UserCountOutputTypeCountCustomersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFranchisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FranchiseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersPlacedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type FranchiseCountOutputType
   */

  export type FranchiseCountOutputType = {
    customers: number
    orders: number
  }

  export type FranchiseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customers?: boolean | FranchiseCountOutputTypeCountCustomersArgs
    orders?: boolean | FranchiseCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * FranchiseCountOutputType without action
   */
  export type FranchiseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FranchiseCountOutputType
     */
    select?: FranchiseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FranchiseCountOutputType without action
   */
  export type FranchiseCountOutputTypeCountCustomersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
  }

  /**
   * FranchiseCountOutputType without action
   */
  export type FranchiseCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    orders: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | CustomerCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    orders: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | ProductCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    payments: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | OrderCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
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
    email: string | null
    password: string | null
    fullName: string | null
    phone: string | null
    role: $Enums.Role | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    loginUserId: string | null
    id: number | null
  }

  export type UserMaxAggregateOutputType = {
    email: string | null
    password: string | null
    fullName: string | null
    phone: string | null
    role: $Enums.Role | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    loginUserId: string | null
    id: number | null
  }

  export type UserCountAggregateOutputType = {
    email: number
    password: number
    fullName: number
    phone: number
    role: number
    isActive: number
    createdAt: number
    updatedAt: number
    loginUserId: number
    id: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    email?: true
    password?: true
    fullName?: true
    phone?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    loginUserId?: true
    id?: true
  }

  export type UserMaxAggregateInputType = {
    email?: true
    password?: true
    fullName?: true
    phone?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    loginUserId?: true
    id?: true
  }

  export type UserCountAggregateInputType = {
    email?: true
    password?: true
    fullName?: true
    phone?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    loginUserId?: true
    id?: true
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
    email: string | null
    password: string | null
    fullName: string | null
    phone: string
    role: $Enums.Role
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    loginUserId: string | null
    id: number
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
    email?: boolean
    password?: boolean
    fullName?: boolean
    phone?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    loginUserId?: boolean
    id?: boolean
    customers?: boolean | User$customersArgs<ExtArgs>
    franchises?: boolean | User$franchisesArgs<ExtArgs>
    ordersPlaced?: boolean | User$ordersPlacedArgs<ExtArgs>
    products?: boolean | User$productsArgs<ExtArgs>
    ordersCreated?: boolean | User$ordersCreatedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    email?: boolean
    password?: boolean
    fullName?: boolean
    phone?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    loginUserId?: boolean
    id?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    email?: boolean
    password?: boolean
    fullName?: boolean
    phone?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    loginUserId?: boolean
    id?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    email?: boolean
    password?: boolean
    fullName?: boolean
    phone?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    loginUserId?: boolean
    id?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"email" | "password" | "fullName" | "phone" | "role" | "isActive" | "createdAt" | "updatedAt" | "loginUserId" | "id", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customers?: boolean | User$customersArgs<ExtArgs>
    franchises?: boolean | User$franchisesArgs<ExtArgs>
    ordersPlaced?: boolean | User$ordersPlacedArgs<ExtArgs>
    products?: boolean | User$productsArgs<ExtArgs>
    ordersCreated?: boolean | User$ordersCreatedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      customers: Prisma.$CustomerPayload<ExtArgs>[]
      franchises: Prisma.$FranchisePayload<ExtArgs>[]
      ordersPlaced: Prisma.$OrderPayload<ExtArgs>[]
      products: Prisma.$ProductPayload<ExtArgs>[]
      ordersCreated: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      email: string | null
      password: string | null
      fullName: string | null
      phone: string
      role: $Enums.Role
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      loginUserId: string | null
      id: number
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
     * // Only select the `email`
     * const userWithEmailOnly = await prisma.user.findMany({ select: { email: true } })
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
     * // Create many Users and only return the `email`
     * const userWithEmailOnly = await prisma.user.createManyAndReturn({
     *   select: { email: true },
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
     * // Update zero or more Users and only return the `email`
     * const userWithEmailOnly = await prisma.user.updateManyAndReturn({
     *   select: { email: true },
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
    customers<T extends User$customersArgs<ExtArgs> = {}>(args?: Subset<T, User$customersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    franchises<T extends User$franchisesArgs<ExtArgs> = {}>(args?: Subset<T, User$franchisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FranchisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ordersPlaced<T extends User$ordersPlacedArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersPlacedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    products<T extends User$productsArgs<ExtArgs> = {}>(args?: Subset<T, User$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ordersCreated<T extends User$ordersCreatedArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersCreatedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly loginUserId: FieldRef<"User", 'String'>
    readonly id: FieldRef<"User", 'Int'>
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
   * User.customers
   */
  export type User$customersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    cursor?: CustomerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * User.franchises
   */
  export type User$franchisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Franchise
     */
    select?: FranchiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Franchise
     */
    omit?: FranchiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FranchiseInclude<ExtArgs> | null
    where?: FranchiseWhereInput
    orderBy?: FranchiseOrderByWithRelationInput | FranchiseOrderByWithRelationInput[]
    cursor?: FranchiseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FranchiseScalarFieldEnum | FranchiseScalarFieldEnum[]
  }

  /**
   * User.ordersPlaced
   */
  export type User$ordersPlacedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * User.products
   */
  export type User$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * User.ordersCreated
   */
  export type User$ordersCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
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
   * Model enquiry
   */

  export type AggregateEnquiry = {
    _count: EnquiryCountAggregateOutputType | null
    _avg: EnquiryAvgAggregateOutputType | null
    _sum: EnquirySumAggregateOutputType | null
    _min: EnquiryMinAggregateOutputType | null
    _max: EnquiryMaxAggregateOutputType | null
  }

  export type EnquiryAvgAggregateOutputType = {
    enquiryID: number | null
    status: number | null
    createdBy: number | null
  }

  export type EnquirySumAggregateOutputType = {
    enquiryID: number | null
    status: number | null
    createdBy: number | null
  }

  export type EnquiryMinAggregateOutputType = {
    enquiryID: number | null
    name: string | null
    ownerEmail: string | null
    ownerName: string | null
    ownerPhone: string | null
    address: string | null
    status: number | null
    createdAt: Date | null
    updatedAt: Date | null
    createdBy: number | null
  }

  export type EnquiryMaxAggregateOutputType = {
    enquiryID: number | null
    name: string | null
    ownerEmail: string | null
    ownerName: string | null
    ownerPhone: string | null
    address: string | null
    status: number | null
    createdAt: Date | null
    updatedAt: Date | null
    createdBy: number | null
  }

  export type EnquiryCountAggregateOutputType = {
    enquiryID: number
    name: number
    ownerEmail: number
    ownerName: number
    ownerPhone: number
    address: number
    status: number
    createdAt: number
    updatedAt: number
    createdBy: number
    _all: number
  }


  export type EnquiryAvgAggregateInputType = {
    enquiryID?: true
    status?: true
    createdBy?: true
  }

  export type EnquirySumAggregateInputType = {
    enquiryID?: true
    status?: true
    createdBy?: true
  }

  export type EnquiryMinAggregateInputType = {
    enquiryID?: true
    name?: true
    ownerEmail?: true
    ownerName?: true
    ownerPhone?: true
    address?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
  }

  export type EnquiryMaxAggregateInputType = {
    enquiryID?: true
    name?: true
    ownerEmail?: true
    ownerName?: true
    ownerPhone?: true
    address?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
  }

  export type EnquiryCountAggregateInputType = {
    enquiryID?: true
    name?: true
    ownerEmail?: true
    ownerName?: true
    ownerPhone?: true
    address?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
    _all?: true
  }

  export type EnquiryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which enquiry to aggregate.
     */
    where?: enquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enquiries to fetch.
     */
    orderBy?: enquiryOrderByWithRelationInput | enquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: enquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned enquiries
    **/
    _count?: true | EnquiryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnquiryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnquirySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnquiryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnquiryMaxAggregateInputType
  }

  export type GetEnquiryAggregateType<T extends EnquiryAggregateArgs> = {
        [P in keyof T & keyof AggregateEnquiry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnquiry[P]>
      : GetScalarType<T[P], AggregateEnquiry[P]>
  }




  export type enquiryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: enquiryWhereInput
    orderBy?: enquiryOrderByWithAggregationInput | enquiryOrderByWithAggregationInput[]
    by: EnquiryScalarFieldEnum[] | EnquiryScalarFieldEnum
    having?: enquiryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnquiryCountAggregateInputType | true
    _avg?: EnquiryAvgAggregateInputType
    _sum?: EnquirySumAggregateInputType
    _min?: EnquiryMinAggregateInputType
    _max?: EnquiryMaxAggregateInputType
  }

  export type EnquiryGroupByOutputType = {
    enquiryID: number
    name: string
    ownerEmail: string
    ownerName: string | null
    ownerPhone: string
    address: string | null
    status: number
    createdAt: Date
    updatedAt: Date
    createdBy: number | null
    _count: EnquiryCountAggregateOutputType | null
    _avg: EnquiryAvgAggregateOutputType | null
    _sum: EnquirySumAggregateOutputType | null
    _min: EnquiryMinAggregateOutputType | null
    _max: EnquiryMaxAggregateOutputType | null
  }

  type GetEnquiryGroupByPayload<T extends enquiryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnquiryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnquiryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnquiryGroupByOutputType[P]>
            : GetScalarType<T[P], EnquiryGroupByOutputType[P]>
        }
      >
    >


  export type enquirySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    enquiryID?: boolean
    name?: boolean
    ownerEmail?: boolean
    ownerName?: boolean
    ownerPhone?: boolean
    address?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
  }, ExtArgs["result"]["enquiry"]>

  export type enquirySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    enquiryID?: boolean
    name?: boolean
    ownerEmail?: boolean
    ownerName?: boolean
    ownerPhone?: boolean
    address?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
  }, ExtArgs["result"]["enquiry"]>

  export type enquirySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    enquiryID?: boolean
    name?: boolean
    ownerEmail?: boolean
    ownerName?: boolean
    ownerPhone?: boolean
    address?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
  }, ExtArgs["result"]["enquiry"]>

  export type enquirySelectScalar = {
    enquiryID?: boolean
    name?: boolean
    ownerEmail?: boolean
    ownerName?: boolean
    ownerPhone?: boolean
    address?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
  }

  export type enquiryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"enquiryID" | "name" | "ownerEmail" | "ownerName" | "ownerPhone" | "address" | "status" | "createdAt" | "updatedAt" | "createdBy", ExtArgs["result"]["enquiry"]>

  export type $enquiryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "enquiry"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      enquiryID: number
      name: string
      ownerEmail: string
      ownerName: string | null
      ownerPhone: string
      address: string | null
      status: number
      createdAt: Date
      updatedAt: Date
      createdBy: number | null
    }, ExtArgs["result"]["enquiry"]>
    composites: {}
  }

  type enquiryGetPayload<S extends boolean | null | undefined | enquiryDefaultArgs> = $Result.GetResult<Prisma.$enquiryPayload, S>

  type enquiryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<enquiryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnquiryCountAggregateInputType | true
    }

  export interface enquiryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['enquiry'], meta: { name: 'enquiry' } }
    /**
     * Find zero or one Enquiry that matches the filter.
     * @param {enquiryFindUniqueArgs} args - Arguments to find a Enquiry
     * @example
     * // Get one Enquiry
     * const enquiry = await prisma.enquiry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends enquiryFindUniqueArgs>(args: SelectSubset<T, enquiryFindUniqueArgs<ExtArgs>>): Prisma__enquiryClient<$Result.GetResult<Prisma.$enquiryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Enquiry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {enquiryFindUniqueOrThrowArgs} args - Arguments to find a Enquiry
     * @example
     * // Get one Enquiry
     * const enquiry = await prisma.enquiry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends enquiryFindUniqueOrThrowArgs>(args: SelectSubset<T, enquiryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__enquiryClient<$Result.GetResult<Prisma.$enquiryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enquiry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enquiryFindFirstArgs} args - Arguments to find a Enquiry
     * @example
     * // Get one Enquiry
     * const enquiry = await prisma.enquiry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends enquiryFindFirstArgs>(args?: SelectSubset<T, enquiryFindFirstArgs<ExtArgs>>): Prisma__enquiryClient<$Result.GetResult<Prisma.$enquiryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enquiry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enquiryFindFirstOrThrowArgs} args - Arguments to find a Enquiry
     * @example
     * // Get one Enquiry
     * const enquiry = await prisma.enquiry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends enquiryFindFirstOrThrowArgs>(args?: SelectSubset<T, enquiryFindFirstOrThrowArgs<ExtArgs>>): Prisma__enquiryClient<$Result.GetResult<Prisma.$enquiryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Enquiries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enquiryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enquiries
     * const enquiries = await prisma.enquiry.findMany()
     * 
     * // Get first 10 Enquiries
     * const enquiries = await prisma.enquiry.findMany({ take: 10 })
     * 
     * // Only select the `enquiryID`
     * const enquiryWithEnquiryIDOnly = await prisma.enquiry.findMany({ select: { enquiryID: true } })
     * 
     */
    findMany<T extends enquiryFindManyArgs>(args?: SelectSubset<T, enquiryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enquiryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Enquiry.
     * @param {enquiryCreateArgs} args - Arguments to create a Enquiry.
     * @example
     * // Create one Enquiry
     * const Enquiry = await prisma.enquiry.create({
     *   data: {
     *     // ... data to create a Enquiry
     *   }
     * })
     * 
     */
    create<T extends enquiryCreateArgs>(args: SelectSubset<T, enquiryCreateArgs<ExtArgs>>): Prisma__enquiryClient<$Result.GetResult<Prisma.$enquiryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Enquiries.
     * @param {enquiryCreateManyArgs} args - Arguments to create many Enquiries.
     * @example
     * // Create many Enquiries
     * const enquiry = await prisma.enquiry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends enquiryCreateManyArgs>(args?: SelectSubset<T, enquiryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Enquiries and returns the data saved in the database.
     * @param {enquiryCreateManyAndReturnArgs} args - Arguments to create many Enquiries.
     * @example
     * // Create many Enquiries
     * const enquiry = await prisma.enquiry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Enquiries and only return the `enquiryID`
     * const enquiryWithEnquiryIDOnly = await prisma.enquiry.createManyAndReturn({
     *   select: { enquiryID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends enquiryCreateManyAndReturnArgs>(args?: SelectSubset<T, enquiryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enquiryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Enquiry.
     * @param {enquiryDeleteArgs} args - Arguments to delete one Enquiry.
     * @example
     * // Delete one Enquiry
     * const Enquiry = await prisma.enquiry.delete({
     *   where: {
     *     // ... filter to delete one Enquiry
     *   }
     * })
     * 
     */
    delete<T extends enquiryDeleteArgs>(args: SelectSubset<T, enquiryDeleteArgs<ExtArgs>>): Prisma__enquiryClient<$Result.GetResult<Prisma.$enquiryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Enquiry.
     * @param {enquiryUpdateArgs} args - Arguments to update one Enquiry.
     * @example
     * // Update one Enquiry
     * const enquiry = await prisma.enquiry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends enquiryUpdateArgs>(args: SelectSubset<T, enquiryUpdateArgs<ExtArgs>>): Prisma__enquiryClient<$Result.GetResult<Prisma.$enquiryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Enquiries.
     * @param {enquiryDeleteManyArgs} args - Arguments to filter Enquiries to delete.
     * @example
     * // Delete a few Enquiries
     * const { count } = await prisma.enquiry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends enquiryDeleteManyArgs>(args?: SelectSubset<T, enquiryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enquiryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enquiries
     * const enquiry = await prisma.enquiry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends enquiryUpdateManyArgs>(args: SelectSubset<T, enquiryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enquiries and returns the data updated in the database.
     * @param {enquiryUpdateManyAndReturnArgs} args - Arguments to update many Enquiries.
     * @example
     * // Update many Enquiries
     * const enquiry = await prisma.enquiry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Enquiries and only return the `enquiryID`
     * const enquiryWithEnquiryIDOnly = await prisma.enquiry.updateManyAndReturn({
     *   select: { enquiryID: true },
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
    updateManyAndReturn<T extends enquiryUpdateManyAndReturnArgs>(args: SelectSubset<T, enquiryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$enquiryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Enquiry.
     * @param {enquiryUpsertArgs} args - Arguments to update or create a Enquiry.
     * @example
     * // Update or create a Enquiry
     * const enquiry = await prisma.enquiry.upsert({
     *   create: {
     *     // ... data to create a Enquiry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Enquiry we want to update
     *   }
     * })
     */
    upsert<T extends enquiryUpsertArgs>(args: SelectSubset<T, enquiryUpsertArgs<ExtArgs>>): Prisma__enquiryClient<$Result.GetResult<Prisma.$enquiryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Enquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enquiryCountArgs} args - Arguments to filter Enquiries to count.
     * @example
     * // Count the number of Enquiries
     * const count = await prisma.enquiry.count({
     *   where: {
     *     // ... the filter for the Enquiries we want to count
     *   }
     * })
    **/
    count<T extends enquiryCountArgs>(
      args?: Subset<T, enquiryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnquiryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Enquiry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnquiryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EnquiryAggregateArgs>(args: Subset<T, EnquiryAggregateArgs>): Prisma.PrismaPromise<GetEnquiryAggregateType<T>>

    /**
     * Group by Enquiry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {enquiryGroupByArgs} args - Group by arguments.
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
      T extends enquiryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: enquiryGroupByArgs['orderBy'] }
        : { orderBy?: enquiryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, enquiryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnquiryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the enquiry model
   */
  readonly fields: enquiryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for enquiry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__enquiryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the enquiry model
   */
  interface enquiryFieldRefs {
    readonly enquiryID: FieldRef<"enquiry", 'Int'>
    readonly name: FieldRef<"enquiry", 'String'>
    readonly ownerEmail: FieldRef<"enquiry", 'String'>
    readonly ownerName: FieldRef<"enquiry", 'String'>
    readonly ownerPhone: FieldRef<"enquiry", 'String'>
    readonly address: FieldRef<"enquiry", 'String'>
    readonly status: FieldRef<"enquiry", 'Int'>
    readonly createdAt: FieldRef<"enquiry", 'DateTime'>
    readonly updatedAt: FieldRef<"enquiry", 'DateTime'>
    readonly createdBy: FieldRef<"enquiry", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * enquiry findUnique
   */
  export type enquiryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enquiry
     */
    select?: enquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the enquiry
     */
    omit?: enquiryOmit<ExtArgs> | null
    /**
     * Filter, which enquiry to fetch.
     */
    where: enquiryWhereUniqueInput
  }

  /**
   * enquiry findUniqueOrThrow
   */
  export type enquiryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enquiry
     */
    select?: enquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the enquiry
     */
    omit?: enquiryOmit<ExtArgs> | null
    /**
     * Filter, which enquiry to fetch.
     */
    where: enquiryWhereUniqueInput
  }

  /**
   * enquiry findFirst
   */
  export type enquiryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enquiry
     */
    select?: enquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the enquiry
     */
    omit?: enquiryOmit<ExtArgs> | null
    /**
     * Filter, which enquiry to fetch.
     */
    where?: enquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enquiries to fetch.
     */
    orderBy?: enquiryOrderByWithRelationInput | enquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for enquiries.
     */
    cursor?: enquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of enquiries.
     */
    distinct?: EnquiryScalarFieldEnum | EnquiryScalarFieldEnum[]
  }

  /**
   * enquiry findFirstOrThrow
   */
  export type enquiryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enquiry
     */
    select?: enquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the enquiry
     */
    omit?: enquiryOmit<ExtArgs> | null
    /**
     * Filter, which enquiry to fetch.
     */
    where?: enquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enquiries to fetch.
     */
    orderBy?: enquiryOrderByWithRelationInput | enquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for enquiries.
     */
    cursor?: enquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of enquiries.
     */
    distinct?: EnquiryScalarFieldEnum | EnquiryScalarFieldEnum[]
  }

  /**
   * enquiry findMany
   */
  export type enquiryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enquiry
     */
    select?: enquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the enquiry
     */
    omit?: enquiryOmit<ExtArgs> | null
    /**
     * Filter, which enquiries to fetch.
     */
    where?: enquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of enquiries to fetch.
     */
    orderBy?: enquiryOrderByWithRelationInput | enquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing enquiries.
     */
    cursor?: enquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` enquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` enquiries.
     */
    skip?: number
    distinct?: EnquiryScalarFieldEnum | EnquiryScalarFieldEnum[]
  }

  /**
   * enquiry create
   */
  export type enquiryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enquiry
     */
    select?: enquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the enquiry
     */
    omit?: enquiryOmit<ExtArgs> | null
    /**
     * The data needed to create a enquiry.
     */
    data: XOR<enquiryCreateInput, enquiryUncheckedCreateInput>
  }

  /**
   * enquiry createMany
   */
  export type enquiryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many enquiries.
     */
    data: enquiryCreateManyInput | enquiryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * enquiry createManyAndReturn
   */
  export type enquiryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enquiry
     */
    select?: enquirySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the enquiry
     */
    omit?: enquiryOmit<ExtArgs> | null
    /**
     * The data used to create many enquiries.
     */
    data: enquiryCreateManyInput | enquiryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * enquiry update
   */
  export type enquiryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enquiry
     */
    select?: enquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the enquiry
     */
    omit?: enquiryOmit<ExtArgs> | null
    /**
     * The data needed to update a enquiry.
     */
    data: XOR<enquiryUpdateInput, enquiryUncheckedUpdateInput>
    /**
     * Choose, which enquiry to update.
     */
    where: enquiryWhereUniqueInput
  }

  /**
   * enquiry updateMany
   */
  export type enquiryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update enquiries.
     */
    data: XOR<enquiryUpdateManyMutationInput, enquiryUncheckedUpdateManyInput>
    /**
     * Filter which enquiries to update
     */
    where?: enquiryWhereInput
    /**
     * Limit how many enquiries to update.
     */
    limit?: number
  }

  /**
   * enquiry updateManyAndReturn
   */
  export type enquiryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enquiry
     */
    select?: enquirySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the enquiry
     */
    omit?: enquiryOmit<ExtArgs> | null
    /**
     * The data used to update enquiries.
     */
    data: XOR<enquiryUpdateManyMutationInput, enquiryUncheckedUpdateManyInput>
    /**
     * Filter which enquiries to update
     */
    where?: enquiryWhereInput
    /**
     * Limit how many enquiries to update.
     */
    limit?: number
  }

  /**
   * enquiry upsert
   */
  export type enquiryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enquiry
     */
    select?: enquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the enquiry
     */
    omit?: enquiryOmit<ExtArgs> | null
    /**
     * The filter to search for the enquiry to update in case it exists.
     */
    where: enquiryWhereUniqueInput
    /**
     * In case the enquiry found by the `where` argument doesn't exist, create a new enquiry with this data.
     */
    create: XOR<enquiryCreateInput, enquiryUncheckedCreateInput>
    /**
     * In case the enquiry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<enquiryUpdateInput, enquiryUncheckedUpdateInput>
  }

  /**
   * enquiry delete
   */
  export type enquiryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enquiry
     */
    select?: enquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the enquiry
     */
    omit?: enquiryOmit<ExtArgs> | null
    /**
     * Filter which enquiry to delete.
     */
    where: enquiryWhereUniqueInput
  }

  /**
   * enquiry deleteMany
   */
  export type enquiryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which enquiries to delete
     */
    where?: enquiryWhereInput
    /**
     * Limit how many enquiries to delete.
     */
    limit?: number
  }

  /**
   * enquiry without action
   */
  export type enquiryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the enquiry
     */
    select?: enquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the enquiry
     */
    omit?: enquiryOmit<ExtArgs> | null
  }


  /**
   * Model Franchise
   */

  export type AggregateFranchise = {
    _count: FranchiseCountAggregateOutputType | null
    _avg: FranchiseAvgAggregateOutputType | null
    _sum: FranchiseSumAggregateOutputType | null
    _min: FranchiseMinAggregateOutputType | null
    _max: FranchiseMaxAggregateOutputType | null
  }

  export type FranchiseAvgAggregateOutputType = {
    id: number | null
    createdBy: number | null
  }

  export type FranchiseSumAggregateOutputType = {
    id: number | null
    createdBy: number | null
  }

  export type FranchiseMinAggregateOutputType = {
    name: string | null
    code: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isActive: boolean | null
    ownerEmail: string | null
    ownerName: string | null
    ownerPhone: string | null
    companyProfile: string | null
    companyKyc: string | null
    bankDetails: string | null
    itrDocs: string | null
    id: number | null
    createdBy: number | null
  }

  export type FranchiseMaxAggregateOutputType = {
    name: string | null
    code: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isActive: boolean | null
    ownerEmail: string | null
    ownerName: string | null
    ownerPhone: string | null
    companyProfile: string | null
    companyKyc: string | null
    bankDetails: string | null
    itrDocs: string | null
    id: number | null
    createdBy: number | null
  }

  export type FranchiseCountAggregateOutputType = {
    name: number
    code: number
    address: number
    createdAt: number
    updatedAt: number
    isActive: number
    ownerEmail: number
    ownerName: number
    ownerPhone: number
    companyProfile: number
    companyKyc: number
    bankDetails: number
    itrDocs: number
    id: number
    createdBy: number
    _all: number
  }


  export type FranchiseAvgAggregateInputType = {
    id?: true
    createdBy?: true
  }

  export type FranchiseSumAggregateInputType = {
    id?: true
    createdBy?: true
  }

  export type FranchiseMinAggregateInputType = {
    name?: true
    code?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    isActive?: true
    ownerEmail?: true
    ownerName?: true
    ownerPhone?: true
    companyProfile?: true
    companyKyc?: true
    bankDetails?: true
    itrDocs?: true
    id?: true
    createdBy?: true
  }

  export type FranchiseMaxAggregateInputType = {
    name?: true
    code?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    isActive?: true
    ownerEmail?: true
    ownerName?: true
    ownerPhone?: true
    companyProfile?: true
    companyKyc?: true
    bankDetails?: true
    itrDocs?: true
    id?: true
    createdBy?: true
  }

  export type FranchiseCountAggregateInputType = {
    name?: true
    code?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    isActive?: true
    ownerEmail?: true
    ownerName?: true
    ownerPhone?: true
    companyProfile?: true
    companyKyc?: true
    bankDetails?: true
    itrDocs?: true
    id?: true
    createdBy?: true
    _all?: true
  }

  export type FranchiseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Franchise to aggregate.
     */
    where?: FranchiseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Franchises to fetch.
     */
    orderBy?: FranchiseOrderByWithRelationInput | FranchiseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FranchiseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Franchises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Franchises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Franchises
    **/
    _count?: true | FranchiseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FranchiseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FranchiseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FranchiseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FranchiseMaxAggregateInputType
  }

  export type GetFranchiseAggregateType<T extends FranchiseAggregateArgs> = {
        [P in keyof T & keyof AggregateFranchise]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFranchise[P]>
      : GetScalarType<T[P], AggregateFranchise[P]>
  }




  export type FranchiseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FranchiseWhereInput
    orderBy?: FranchiseOrderByWithAggregationInput | FranchiseOrderByWithAggregationInput[]
    by: FranchiseScalarFieldEnum[] | FranchiseScalarFieldEnum
    having?: FranchiseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FranchiseCountAggregateInputType | true
    _avg?: FranchiseAvgAggregateInputType
    _sum?: FranchiseSumAggregateInputType
    _min?: FranchiseMinAggregateInputType
    _max?: FranchiseMaxAggregateInputType
  }

  export type FranchiseGroupByOutputType = {
    name: string
    code: string
    address: string | null
    createdAt: Date
    updatedAt: Date
    isActive: boolean
    ownerEmail: string
    ownerName: string | null
    ownerPhone: string
    companyProfile: string | null
    companyKyc: string | null
    bankDetails: string | null
    itrDocs: string | null
    id: number
    createdBy: number | null
    _count: FranchiseCountAggregateOutputType | null
    _avg: FranchiseAvgAggregateOutputType | null
    _sum: FranchiseSumAggregateOutputType | null
    _min: FranchiseMinAggregateOutputType | null
    _max: FranchiseMaxAggregateOutputType | null
  }

  type GetFranchiseGroupByPayload<T extends FranchiseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FranchiseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FranchiseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FranchiseGroupByOutputType[P]>
            : GetScalarType<T[P], FranchiseGroupByOutputType[P]>
        }
      >
    >


  export type FranchiseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    code?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isActive?: boolean
    ownerEmail?: boolean
    ownerName?: boolean
    ownerPhone?: boolean
    companyProfile?: boolean
    companyKyc?: boolean
    bankDetails?: boolean
    itrDocs?: boolean
    id?: boolean
    createdBy?: boolean
    customers?: boolean | Franchise$customersArgs<ExtArgs>
    creator?: boolean | Franchise$creatorArgs<ExtArgs>
    orders?: boolean | Franchise$ordersArgs<ExtArgs>
    _count?: boolean | FranchiseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["franchise"]>

  export type FranchiseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    code?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isActive?: boolean
    ownerEmail?: boolean
    ownerName?: boolean
    ownerPhone?: boolean
    companyProfile?: boolean
    companyKyc?: boolean
    bankDetails?: boolean
    itrDocs?: boolean
    id?: boolean
    createdBy?: boolean
    creator?: boolean | Franchise$creatorArgs<ExtArgs>
  }, ExtArgs["result"]["franchise"]>

  export type FranchiseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    code?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isActive?: boolean
    ownerEmail?: boolean
    ownerName?: boolean
    ownerPhone?: boolean
    companyProfile?: boolean
    companyKyc?: boolean
    bankDetails?: boolean
    itrDocs?: boolean
    id?: boolean
    createdBy?: boolean
    creator?: boolean | Franchise$creatorArgs<ExtArgs>
  }, ExtArgs["result"]["franchise"]>

  export type FranchiseSelectScalar = {
    name?: boolean
    code?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isActive?: boolean
    ownerEmail?: boolean
    ownerName?: boolean
    ownerPhone?: boolean
    companyProfile?: boolean
    companyKyc?: boolean
    bankDetails?: boolean
    itrDocs?: boolean
    id?: boolean
    createdBy?: boolean
  }

  export type FranchiseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"name" | "code" | "address" | "createdAt" | "updatedAt" | "isActive" | "ownerEmail" | "ownerName" | "ownerPhone" | "companyProfile" | "companyKyc" | "bankDetails" | "itrDocs" | "id" | "createdBy", ExtArgs["result"]["franchise"]>
  export type FranchiseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customers?: boolean | Franchise$customersArgs<ExtArgs>
    creator?: boolean | Franchise$creatorArgs<ExtArgs>
    orders?: boolean | Franchise$ordersArgs<ExtArgs>
    _count?: boolean | FranchiseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FranchiseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | Franchise$creatorArgs<ExtArgs>
  }
  export type FranchiseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | Franchise$creatorArgs<ExtArgs>
  }

  export type $FranchisePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Franchise"
    objects: {
      customers: Prisma.$CustomerPayload<ExtArgs>[]
      creator: Prisma.$UserPayload<ExtArgs> | null
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      name: string
      code: string
      address: string | null
      createdAt: Date
      updatedAt: Date
      isActive: boolean
      ownerEmail: string
      ownerName: string | null
      ownerPhone: string
      companyProfile: string | null
      companyKyc: string | null
      bankDetails: string | null
      itrDocs: string | null
      id: number
      createdBy: number | null
    }, ExtArgs["result"]["franchise"]>
    composites: {}
  }

  type FranchiseGetPayload<S extends boolean | null | undefined | FranchiseDefaultArgs> = $Result.GetResult<Prisma.$FranchisePayload, S>

  type FranchiseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FranchiseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FranchiseCountAggregateInputType | true
    }

  export interface FranchiseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Franchise'], meta: { name: 'Franchise' } }
    /**
     * Find zero or one Franchise that matches the filter.
     * @param {FranchiseFindUniqueArgs} args - Arguments to find a Franchise
     * @example
     * // Get one Franchise
     * const franchise = await prisma.franchise.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FranchiseFindUniqueArgs>(args: SelectSubset<T, FranchiseFindUniqueArgs<ExtArgs>>): Prisma__FranchiseClient<$Result.GetResult<Prisma.$FranchisePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Franchise that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FranchiseFindUniqueOrThrowArgs} args - Arguments to find a Franchise
     * @example
     * // Get one Franchise
     * const franchise = await prisma.franchise.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FranchiseFindUniqueOrThrowArgs>(args: SelectSubset<T, FranchiseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FranchiseClient<$Result.GetResult<Prisma.$FranchisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Franchise that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FranchiseFindFirstArgs} args - Arguments to find a Franchise
     * @example
     * // Get one Franchise
     * const franchise = await prisma.franchise.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FranchiseFindFirstArgs>(args?: SelectSubset<T, FranchiseFindFirstArgs<ExtArgs>>): Prisma__FranchiseClient<$Result.GetResult<Prisma.$FranchisePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Franchise that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FranchiseFindFirstOrThrowArgs} args - Arguments to find a Franchise
     * @example
     * // Get one Franchise
     * const franchise = await prisma.franchise.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FranchiseFindFirstOrThrowArgs>(args?: SelectSubset<T, FranchiseFindFirstOrThrowArgs<ExtArgs>>): Prisma__FranchiseClient<$Result.GetResult<Prisma.$FranchisePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Franchises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FranchiseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Franchises
     * const franchises = await prisma.franchise.findMany()
     * 
     * // Get first 10 Franchises
     * const franchises = await prisma.franchise.findMany({ take: 10 })
     * 
     * // Only select the `name`
     * const franchiseWithNameOnly = await prisma.franchise.findMany({ select: { name: true } })
     * 
     */
    findMany<T extends FranchiseFindManyArgs>(args?: SelectSubset<T, FranchiseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FranchisePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Franchise.
     * @param {FranchiseCreateArgs} args - Arguments to create a Franchise.
     * @example
     * // Create one Franchise
     * const Franchise = await prisma.franchise.create({
     *   data: {
     *     // ... data to create a Franchise
     *   }
     * })
     * 
     */
    create<T extends FranchiseCreateArgs>(args: SelectSubset<T, FranchiseCreateArgs<ExtArgs>>): Prisma__FranchiseClient<$Result.GetResult<Prisma.$FranchisePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Franchises.
     * @param {FranchiseCreateManyArgs} args - Arguments to create many Franchises.
     * @example
     * // Create many Franchises
     * const franchise = await prisma.franchise.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FranchiseCreateManyArgs>(args?: SelectSubset<T, FranchiseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Franchises and returns the data saved in the database.
     * @param {FranchiseCreateManyAndReturnArgs} args - Arguments to create many Franchises.
     * @example
     * // Create many Franchises
     * const franchise = await prisma.franchise.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Franchises and only return the `name`
     * const franchiseWithNameOnly = await prisma.franchise.createManyAndReturn({
     *   select: { name: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FranchiseCreateManyAndReturnArgs>(args?: SelectSubset<T, FranchiseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FranchisePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Franchise.
     * @param {FranchiseDeleteArgs} args - Arguments to delete one Franchise.
     * @example
     * // Delete one Franchise
     * const Franchise = await prisma.franchise.delete({
     *   where: {
     *     // ... filter to delete one Franchise
     *   }
     * })
     * 
     */
    delete<T extends FranchiseDeleteArgs>(args: SelectSubset<T, FranchiseDeleteArgs<ExtArgs>>): Prisma__FranchiseClient<$Result.GetResult<Prisma.$FranchisePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Franchise.
     * @param {FranchiseUpdateArgs} args - Arguments to update one Franchise.
     * @example
     * // Update one Franchise
     * const franchise = await prisma.franchise.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FranchiseUpdateArgs>(args: SelectSubset<T, FranchiseUpdateArgs<ExtArgs>>): Prisma__FranchiseClient<$Result.GetResult<Prisma.$FranchisePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Franchises.
     * @param {FranchiseDeleteManyArgs} args - Arguments to filter Franchises to delete.
     * @example
     * // Delete a few Franchises
     * const { count } = await prisma.franchise.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FranchiseDeleteManyArgs>(args?: SelectSubset<T, FranchiseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Franchises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FranchiseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Franchises
     * const franchise = await prisma.franchise.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FranchiseUpdateManyArgs>(args: SelectSubset<T, FranchiseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Franchises and returns the data updated in the database.
     * @param {FranchiseUpdateManyAndReturnArgs} args - Arguments to update many Franchises.
     * @example
     * // Update many Franchises
     * const franchise = await prisma.franchise.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Franchises and only return the `name`
     * const franchiseWithNameOnly = await prisma.franchise.updateManyAndReturn({
     *   select: { name: true },
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
    updateManyAndReturn<T extends FranchiseUpdateManyAndReturnArgs>(args: SelectSubset<T, FranchiseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FranchisePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Franchise.
     * @param {FranchiseUpsertArgs} args - Arguments to update or create a Franchise.
     * @example
     * // Update or create a Franchise
     * const franchise = await prisma.franchise.upsert({
     *   create: {
     *     // ... data to create a Franchise
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Franchise we want to update
     *   }
     * })
     */
    upsert<T extends FranchiseUpsertArgs>(args: SelectSubset<T, FranchiseUpsertArgs<ExtArgs>>): Prisma__FranchiseClient<$Result.GetResult<Prisma.$FranchisePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Franchises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FranchiseCountArgs} args - Arguments to filter Franchises to count.
     * @example
     * // Count the number of Franchises
     * const count = await prisma.franchise.count({
     *   where: {
     *     // ... the filter for the Franchises we want to count
     *   }
     * })
    **/
    count<T extends FranchiseCountArgs>(
      args?: Subset<T, FranchiseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FranchiseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Franchise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FranchiseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FranchiseAggregateArgs>(args: Subset<T, FranchiseAggregateArgs>): Prisma.PrismaPromise<GetFranchiseAggregateType<T>>

    /**
     * Group by Franchise.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FranchiseGroupByArgs} args - Group by arguments.
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
      T extends FranchiseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FranchiseGroupByArgs['orderBy'] }
        : { orderBy?: FranchiseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FranchiseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFranchiseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Franchise model
   */
  readonly fields: FranchiseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Franchise.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FranchiseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customers<T extends Franchise$customersArgs<ExtArgs> = {}>(args?: Subset<T, Franchise$customersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    creator<T extends Franchise$creatorArgs<ExtArgs> = {}>(args?: Subset<T, Franchise$creatorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    orders<T extends Franchise$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Franchise$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Franchise model
   */
  interface FranchiseFieldRefs {
    readonly name: FieldRef<"Franchise", 'String'>
    readonly code: FieldRef<"Franchise", 'String'>
    readonly address: FieldRef<"Franchise", 'String'>
    readonly createdAt: FieldRef<"Franchise", 'DateTime'>
    readonly updatedAt: FieldRef<"Franchise", 'DateTime'>
    readonly isActive: FieldRef<"Franchise", 'Boolean'>
    readonly ownerEmail: FieldRef<"Franchise", 'String'>
    readonly ownerName: FieldRef<"Franchise", 'String'>
    readonly ownerPhone: FieldRef<"Franchise", 'String'>
    readonly companyProfile: FieldRef<"Franchise", 'String'>
    readonly companyKyc: FieldRef<"Franchise", 'String'>
    readonly bankDetails: FieldRef<"Franchise", 'String'>
    readonly itrDocs: FieldRef<"Franchise", 'String'>
    readonly id: FieldRef<"Franchise", 'Int'>
    readonly createdBy: FieldRef<"Franchise", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Franchise findUnique
   */
  export type FranchiseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Franchise
     */
    select?: FranchiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Franchise
     */
    omit?: FranchiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FranchiseInclude<ExtArgs> | null
    /**
     * Filter, which Franchise to fetch.
     */
    where: FranchiseWhereUniqueInput
  }

  /**
   * Franchise findUniqueOrThrow
   */
  export type FranchiseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Franchise
     */
    select?: FranchiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Franchise
     */
    omit?: FranchiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FranchiseInclude<ExtArgs> | null
    /**
     * Filter, which Franchise to fetch.
     */
    where: FranchiseWhereUniqueInput
  }

  /**
   * Franchise findFirst
   */
  export type FranchiseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Franchise
     */
    select?: FranchiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Franchise
     */
    omit?: FranchiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FranchiseInclude<ExtArgs> | null
    /**
     * Filter, which Franchise to fetch.
     */
    where?: FranchiseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Franchises to fetch.
     */
    orderBy?: FranchiseOrderByWithRelationInput | FranchiseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Franchises.
     */
    cursor?: FranchiseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Franchises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Franchises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Franchises.
     */
    distinct?: FranchiseScalarFieldEnum | FranchiseScalarFieldEnum[]
  }

  /**
   * Franchise findFirstOrThrow
   */
  export type FranchiseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Franchise
     */
    select?: FranchiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Franchise
     */
    omit?: FranchiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FranchiseInclude<ExtArgs> | null
    /**
     * Filter, which Franchise to fetch.
     */
    where?: FranchiseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Franchises to fetch.
     */
    orderBy?: FranchiseOrderByWithRelationInput | FranchiseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Franchises.
     */
    cursor?: FranchiseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Franchises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Franchises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Franchises.
     */
    distinct?: FranchiseScalarFieldEnum | FranchiseScalarFieldEnum[]
  }

  /**
   * Franchise findMany
   */
  export type FranchiseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Franchise
     */
    select?: FranchiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Franchise
     */
    omit?: FranchiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FranchiseInclude<ExtArgs> | null
    /**
     * Filter, which Franchises to fetch.
     */
    where?: FranchiseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Franchises to fetch.
     */
    orderBy?: FranchiseOrderByWithRelationInput | FranchiseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Franchises.
     */
    cursor?: FranchiseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Franchises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Franchises.
     */
    skip?: number
    distinct?: FranchiseScalarFieldEnum | FranchiseScalarFieldEnum[]
  }

  /**
   * Franchise create
   */
  export type FranchiseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Franchise
     */
    select?: FranchiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Franchise
     */
    omit?: FranchiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FranchiseInclude<ExtArgs> | null
    /**
     * The data needed to create a Franchise.
     */
    data: XOR<FranchiseCreateInput, FranchiseUncheckedCreateInput>
  }

  /**
   * Franchise createMany
   */
  export type FranchiseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Franchises.
     */
    data: FranchiseCreateManyInput | FranchiseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Franchise createManyAndReturn
   */
  export type FranchiseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Franchise
     */
    select?: FranchiseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Franchise
     */
    omit?: FranchiseOmit<ExtArgs> | null
    /**
     * The data used to create many Franchises.
     */
    data: FranchiseCreateManyInput | FranchiseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FranchiseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Franchise update
   */
  export type FranchiseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Franchise
     */
    select?: FranchiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Franchise
     */
    omit?: FranchiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FranchiseInclude<ExtArgs> | null
    /**
     * The data needed to update a Franchise.
     */
    data: XOR<FranchiseUpdateInput, FranchiseUncheckedUpdateInput>
    /**
     * Choose, which Franchise to update.
     */
    where: FranchiseWhereUniqueInput
  }

  /**
   * Franchise updateMany
   */
  export type FranchiseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Franchises.
     */
    data: XOR<FranchiseUpdateManyMutationInput, FranchiseUncheckedUpdateManyInput>
    /**
     * Filter which Franchises to update
     */
    where?: FranchiseWhereInput
    /**
     * Limit how many Franchises to update.
     */
    limit?: number
  }

  /**
   * Franchise updateManyAndReturn
   */
  export type FranchiseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Franchise
     */
    select?: FranchiseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Franchise
     */
    omit?: FranchiseOmit<ExtArgs> | null
    /**
     * The data used to update Franchises.
     */
    data: XOR<FranchiseUpdateManyMutationInput, FranchiseUncheckedUpdateManyInput>
    /**
     * Filter which Franchises to update
     */
    where?: FranchiseWhereInput
    /**
     * Limit how many Franchises to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FranchiseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Franchise upsert
   */
  export type FranchiseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Franchise
     */
    select?: FranchiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Franchise
     */
    omit?: FranchiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FranchiseInclude<ExtArgs> | null
    /**
     * The filter to search for the Franchise to update in case it exists.
     */
    where: FranchiseWhereUniqueInput
    /**
     * In case the Franchise found by the `where` argument doesn't exist, create a new Franchise with this data.
     */
    create: XOR<FranchiseCreateInput, FranchiseUncheckedCreateInput>
    /**
     * In case the Franchise was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FranchiseUpdateInput, FranchiseUncheckedUpdateInput>
  }

  /**
   * Franchise delete
   */
  export type FranchiseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Franchise
     */
    select?: FranchiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Franchise
     */
    omit?: FranchiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FranchiseInclude<ExtArgs> | null
    /**
     * Filter which Franchise to delete.
     */
    where: FranchiseWhereUniqueInput
  }

  /**
   * Franchise deleteMany
   */
  export type FranchiseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Franchises to delete
     */
    where?: FranchiseWhereInput
    /**
     * Limit how many Franchises to delete.
     */
    limit?: number
  }

  /**
   * Franchise.customers
   */
  export type Franchise$customersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    cursor?: CustomerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Franchise.creator
   */
  export type Franchise$creatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Franchise.orders
   */
  export type Franchise$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Franchise without action
   */
  export type FranchiseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Franchise
     */
    select?: FranchiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Franchise
     */
    omit?: FranchiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FranchiseInclude<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    id: number | null
    franchiseId: number | null
    createdBy: number | null
    employeeId: number | null
  }

  export type CustomerSumAggregateOutputType = {
    id: number | null
    franchiseId: number | null
    createdBy: number | null
    employeeId: number | null
  }

  export type CustomerMinAggregateOutputType = {
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
    customerType: string | null
    id: number | null
    cusotmerCode: string | null
    franchiseId: number | null
    createdBy: number | null
    employeeId: number | null
  }

  export type CustomerMaxAggregateOutputType = {
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
    customerType: string | null
    id: number | null
    cusotmerCode: string | null
    franchiseId: number | null
    createdBy: number | null
    employeeId: number | null
  }

  export type CustomerCountAggregateOutputType = {
    name: number
    email: number
    phone: number
    address: number
    createdAt: number
    updatedAt: number
    customerType: number
    id: number
    cusotmerCode: number
    franchiseId: number
    createdBy: number
    employeeId: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    id?: true
    franchiseId?: true
    createdBy?: true
    employeeId?: true
  }

  export type CustomerSumAggregateInputType = {
    id?: true
    franchiseId?: true
    createdBy?: true
    employeeId?: true
  }

  export type CustomerMinAggregateInputType = {
    name?: true
    email?: true
    phone?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    customerType?: true
    id?: true
    cusotmerCode?: true
    franchiseId?: true
    createdBy?: true
    employeeId?: true
  }

  export type CustomerMaxAggregateInputType = {
    name?: true
    email?: true
    phone?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    customerType?: true
    id?: true
    cusotmerCode?: true
    franchiseId?: true
    createdBy?: true
    employeeId?: true
  }

  export type CustomerCountAggregateInputType = {
    name?: true
    email?: true
    phone?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    customerType?: true
    id?: true
    cusotmerCode?: true
    franchiseId?: true
    createdBy?: true
    employeeId?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    name: string
    email: string | null
    phone: string | null
    address: string | null
    createdAt: Date
    updatedAt: Date
    customerType: string | null
    id: number
    cusotmerCode: string
    franchiseId: number | null
    createdBy: number | null
    employeeId: number | null
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customerType?: boolean
    id?: boolean
    cusotmerCode?: boolean
    franchiseId?: boolean
    createdBy?: boolean
    employeeId?: boolean
    employee?: boolean | Customer$employeeArgs<ExtArgs>
    franchise?: boolean | Customer$franchiseArgs<ExtArgs>
    orders?: boolean | Customer$ordersArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customerType?: boolean
    id?: boolean
    cusotmerCode?: boolean
    franchiseId?: boolean
    createdBy?: boolean
    employeeId?: boolean
    employee?: boolean | Customer$employeeArgs<ExtArgs>
    franchise?: boolean | Customer$franchiseArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customerType?: boolean
    id?: boolean
    cusotmerCode?: boolean
    franchiseId?: boolean
    createdBy?: boolean
    employeeId?: boolean
    employee?: boolean | Customer$employeeArgs<ExtArgs>
    franchise?: boolean | Customer$franchiseArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customerType?: boolean
    id?: boolean
    cusotmerCode?: boolean
    franchiseId?: boolean
    createdBy?: boolean
    employeeId?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"name" | "email" | "phone" | "address" | "createdAt" | "updatedAt" | "customerType" | "id" | "cusotmerCode" | "franchiseId" | "createdBy" | "employeeId", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | Customer$employeeArgs<ExtArgs>
    franchise?: boolean | Customer$franchiseArgs<ExtArgs>
    orders?: boolean | Customer$ordersArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | Customer$employeeArgs<ExtArgs>
    franchise?: boolean | Customer$franchiseArgs<ExtArgs>
  }
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | Customer$employeeArgs<ExtArgs>
    franchise?: boolean | Customer$franchiseArgs<ExtArgs>
  }

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      employee: Prisma.$UserPayload<ExtArgs> | null
      franchise: Prisma.$FranchisePayload<ExtArgs> | null
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      name: string
      email: string | null
      phone: string | null
      address: string | null
      createdAt: Date
      updatedAt: Date
      customerType: string | null
      id: number
      cusotmerCode: string
      franchiseId: number | null
      createdBy: number | null
      employeeId: number | null
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `name`
     * const customerWithNameOnly = await prisma.customer.findMany({ select: { name: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `name`
     * const customerWithNameOnly = await prisma.customer.createManyAndReturn({
     *   select: { name: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `name`
     * const customerWithNameOnly = await prisma.customer.updateManyAndReturn({
     *   select: { name: true },
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
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
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
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends Customer$employeeArgs<ExtArgs> = {}>(args?: Subset<T, Customer$employeeArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    franchise<T extends Customer$franchiseArgs<ExtArgs> = {}>(args?: Subset<T, Customer$franchiseArgs<ExtArgs>>): Prisma__FranchiseClient<$Result.GetResult<Prisma.$FranchisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    orders<T extends Customer$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Customer$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly name: FieldRef<"Customer", 'String'>
    readonly email: FieldRef<"Customer", 'String'>
    readonly phone: FieldRef<"Customer", 'String'>
    readonly address: FieldRef<"Customer", 'String'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
    readonly updatedAt: FieldRef<"Customer", 'DateTime'>
    readonly customerType: FieldRef<"Customer", 'String'>
    readonly id: FieldRef<"Customer", 'Int'>
    readonly cusotmerCode: FieldRef<"Customer", 'String'>
    readonly franchiseId: FieldRef<"Customer", 'Int'>
    readonly createdBy: FieldRef<"Customer", 'Int'>
    readonly employeeId: FieldRef<"Customer", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.employee
   */
  export type Customer$employeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Customer.franchise
   */
  export type Customer$franchiseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Franchise
     */
    select?: FranchiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Franchise
     */
    omit?: FranchiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FranchiseInclude<ExtArgs> | null
    where?: FranchiseWhereInput
  }

  /**
   * Customer.orders
   */
  export type Customer$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    price: number | null
    stock: number | null
    id: number | null
    createdById: number | null
  }

  export type ProductSumAggregateOutputType = {
    price: number | null
    stock: number | null
    id: number | null
    createdById: number | null
  }

  export type ProductMinAggregateOutputType = {
    name: string | null
    price: number | null
    stock: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    size: string | null
    id: number | null
    productCode: string | null
    createdById: number | null
  }

  export type ProductMaxAggregateOutputType = {
    name: string | null
    price: number | null
    stock: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    size: string | null
    id: number | null
    productCode: string | null
    createdById: number | null
  }

  export type ProductCountAggregateOutputType = {
    name: number
    price: number
    stock: number
    isActive: number
    createdAt: number
    updatedAt: number
    size: number
    id: number
    productCode: number
    createdById: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    price?: true
    stock?: true
    id?: true
    createdById?: true
  }

  export type ProductSumAggregateInputType = {
    price?: true
    stock?: true
    id?: true
    createdById?: true
  }

  export type ProductMinAggregateInputType = {
    name?: true
    price?: true
    stock?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    size?: true
    id?: true
    productCode?: true
    createdById?: true
  }

  export type ProductMaxAggregateInputType = {
    name?: true
    price?: true
    stock?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    size?: true
    id?: true
    productCode?: true
    createdById?: true
  }

  export type ProductCountAggregateInputType = {
    name?: true
    price?: true
    stock?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    size?: true
    id?: true
    productCode?: true
    createdById?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    name: string
    price: number
    stock: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    size: string
    id: number
    productCode: string
    createdById: number | null
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    price?: boolean
    stock?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    size?: boolean
    id?: boolean
    productCode?: boolean
    createdById?: boolean
    orders?: boolean | Product$ordersArgs<ExtArgs>
    createdBy?: boolean | Product$createdByArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    price?: boolean
    stock?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    size?: boolean
    id?: boolean
    productCode?: boolean
    createdById?: boolean
    createdBy?: boolean | Product$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    price?: boolean
    stock?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    size?: boolean
    id?: boolean
    productCode?: boolean
    createdById?: boolean
    createdBy?: boolean | Product$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    name?: boolean
    price?: boolean
    stock?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    size?: boolean
    id?: boolean
    productCode?: boolean
    createdById?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"name" | "price" | "stock" | "isActive" | "createdAt" | "updatedAt" | "size" | "id" | "productCode" | "createdById", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | Product$ordersArgs<ExtArgs>
    createdBy?: boolean | Product$createdByArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | Product$createdByArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | Product$createdByArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      orders: Prisma.$OrderPayload<ExtArgs>[]
      createdBy: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      name: string
      price: number
      stock: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      size: string
      id: number
      productCode: string
      createdById: number | null
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `name`
     * const productWithNameOnly = await prisma.product.findMany({ select: { name: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `name`
     * const productWithNameOnly = await prisma.product.createManyAndReturn({
     *   select: { name: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `name`
     * const productWithNameOnly = await prisma.product.updateManyAndReturn({
     *   select: { name: true },
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
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends Product$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Product$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdBy<T extends Product$createdByArgs<ExtArgs> = {}>(args?: Subset<T, Product$createdByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly name: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Float'>
    readonly stock: FieldRef<"Product", 'Int'>
    readonly isActive: FieldRef<"Product", 'Boolean'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
    readonly size: FieldRef<"Product", 'String'>
    readonly id: FieldRef<"Product", 'Int'>
    readonly productCode: FieldRef<"Product", 'String'>
    readonly createdById: FieldRef<"Product", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.orders
   */
  export type Product$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Product.createdBy
   */
  export type Product$createdByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    defectedStatus: number | null
    unitPrice: number | null
    unitPriceCost: number | null
    discount: number | null
    gstPercentage: number | null
    gstAmount: number | null
    totalAmount: number | null
    employeeId: number | null
    createdBy: number | null
    productId: number | null
    id: number | null
    franchiseId: number | null
    customerId: number | null
  }

  export type OrderSumAggregateOutputType = {
    defectedStatus: number | null
    unitPrice: number | null
    unitPriceCost: number | null
    discount: number | null
    gstPercentage: number | null
    gstAmount: number | null
    totalAmount: number | null
    employeeId: number | null
    createdBy: number | null
    productId: number | null
    id: number | null
    franchiseId: number | null
    customerId: number | null
  }

  export type OrderMinAggregateOutputType = {
    orderNumber: string | null
    status: string | null
    expectedDeliveryDate: Date | null
    defectedStatus: number | null
    defExpectedDate: Date | null
    unitPrice: number | null
    unitPriceCost: number | null
    discountDate: Date | null
    discount: number | null
    gstPercentage: number | null
    gstAmount: number | null
    totalAmount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    climate: $Enums.Climate | null
    employeeId: number | null
    createdBy: number | null
    productId: number | null
    terrain: $Enums.Terrain | null
    id: number | null
    franchiseId: number | null
    customerId: number | null
  }

  export type OrderMaxAggregateOutputType = {
    orderNumber: string | null
    status: string | null
    expectedDeliveryDate: Date | null
    defectedStatus: number | null
    defExpectedDate: Date | null
    unitPrice: number | null
    unitPriceCost: number | null
    discountDate: Date | null
    discount: number | null
    gstPercentage: number | null
    gstAmount: number | null
    totalAmount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    climate: $Enums.Climate | null
    employeeId: number | null
    createdBy: number | null
    productId: number | null
    terrain: $Enums.Terrain | null
    id: number | null
    franchiseId: number | null
    customerId: number | null
  }

  export type OrderCountAggregateOutputType = {
    orderNumber: number
    status: number
    expectedDeliveryDate: number
    defectedStatus: number
    defExpectedDate: number
    unitPrice: number
    unitPriceCost: number
    discountDate: number
    discount: number
    gstPercentage: number
    gstAmount: number
    totalAmount: number
    createdAt: number
    updatedAt: number
    climate: number
    employeeId: number
    createdBy: number
    productId: number
    terrain: number
    id: number
    franchiseId: number
    customerId: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    defectedStatus?: true
    unitPrice?: true
    unitPriceCost?: true
    discount?: true
    gstPercentage?: true
    gstAmount?: true
    totalAmount?: true
    employeeId?: true
    createdBy?: true
    productId?: true
    id?: true
    franchiseId?: true
    customerId?: true
  }

  export type OrderSumAggregateInputType = {
    defectedStatus?: true
    unitPrice?: true
    unitPriceCost?: true
    discount?: true
    gstPercentage?: true
    gstAmount?: true
    totalAmount?: true
    employeeId?: true
    createdBy?: true
    productId?: true
    id?: true
    franchiseId?: true
    customerId?: true
  }

  export type OrderMinAggregateInputType = {
    orderNumber?: true
    status?: true
    expectedDeliveryDate?: true
    defectedStatus?: true
    defExpectedDate?: true
    unitPrice?: true
    unitPriceCost?: true
    discountDate?: true
    discount?: true
    gstPercentage?: true
    gstAmount?: true
    totalAmount?: true
    createdAt?: true
    updatedAt?: true
    climate?: true
    employeeId?: true
    createdBy?: true
    productId?: true
    terrain?: true
    id?: true
    franchiseId?: true
    customerId?: true
  }

  export type OrderMaxAggregateInputType = {
    orderNumber?: true
    status?: true
    expectedDeliveryDate?: true
    defectedStatus?: true
    defExpectedDate?: true
    unitPrice?: true
    unitPriceCost?: true
    discountDate?: true
    discount?: true
    gstPercentage?: true
    gstAmount?: true
    totalAmount?: true
    createdAt?: true
    updatedAt?: true
    climate?: true
    employeeId?: true
    createdBy?: true
    productId?: true
    terrain?: true
    id?: true
    franchiseId?: true
    customerId?: true
  }

  export type OrderCountAggregateInputType = {
    orderNumber?: true
    status?: true
    expectedDeliveryDate?: true
    defectedStatus?: true
    defExpectedDate?: true
    unitPrice?: true
    unitPriceCost?: true
    discountDate?: true
    discount?: true
    gstPercentage?: true
    gstAmount?: true
    totalAmount?: true
    createdAt?: true
    updatedAt?: true
    climate?: true
    employeeId?: true
    createdBy?: true
    productId?: true
    terrain?: true
    id?: true
    franchiseId?: true
    customerId?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    orderNumber: string
    status: string
    expectedDeliveryDate: Date | null
    defectedStatus: number
    defExpectedDate: Date
    unitPrice: number
    unitPriceCost: number
    discountDate: Date
    discount: number
    gstPercentage: number
    gstAmount: number
    totalAmount: number
    createdAt: Date
    updatedAt: Date
    climate: $Enums.Climate
    employeeId: number | null
    createdBy: number | null
    productId: number
    terrain: $Enums.Terrain
    id: number
    franchiseId: number | null
    customerId: number | null
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orderNumber?: boolean
    status?: boolean
    expectedDeliveryDate?: boolean
    defectedStatus?: boolean
    defExpectedDate?: boolean
    unitPrice?: boolean
    unitPriceCost?: boolean
    discountDate?: boolean
    discount?: boolean
    gstPercentage?: boolean
    gstAmount?: boolean
    totalAmount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    climate?: boolean
    employeeId?: boolean
    createdBy?: boolean
    productId?: boolean
    terrain?: boolean
    id?: boolean
    franchiseId?: boolean
    customerId?: boolean
    factory?: boolean | Order$factoryArgs<ExtArgs>
    customer?: boolean | Order$customerArgs<ExtArgs>
    employee?: boolean | Order$employeeArgs<ExtArgs>
    franchise?: boolean | Order$franchiseArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    createdByUser?: boolean | Order$createdByUserArgs<ExtArgs>
    payments?: boolean | Order$paymentsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orderNumber?: boolean
    status?: boolean
    expectedDeliveryDate?: boolean
    defectedStatus?: boolean
    defExpectedDate?: boolean
    unitPrice?: boolean
    unitPriceCost?: boolean
    discountDate?: boolean
    discount?: boolean
    gstPercentage?: boolean
    gstAmount?: boolean
    totalAmount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    climate?: boolean
    employeeId?: boolean
    createdBy?: boolean
    productId?: boolean
    terrain?: boolean
    id?: boolean
    franchiseId?: boolean
    customerId?: boolean
    customer?: boolean | Order$customerArgs<ExtArgs>
    employee?: boolean | Order$employeeArgs<ExtArgs>
    franchise?: boolean | Order$franchiseArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    createdByUser?: boolean | Order$createdByUserArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orderNumber?: boolean
    status?: boolean
    expectedDeliveryDate?: boolean
    defectedStatus?: boolean
    defExpectedDate?: boolean
    unitPrice?: boolean
    unitPriceCost?: boolean
    discountDate?: boolean
    discount?: boolean
    gstPercentage?: boolean
    gstAmount?: boolean
    totalAmount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    climate?: boolean
    employeeId?: boolean
    createdBy?: boolean
    productId?: boolean
    terrain?: boolean
    id?: boolean
    franchiseId?: boolean
    customerId?: boolean
    customer?: boolean | Order$customerArgs<ExtArgs>
    employee?: boolean | Order$employeeArgs<ExtArgs>
    franchise?: boolean | Order$franchiseArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    createdByUser?: boolean | Order$createdByUserArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    orderNumber?: boolean
    status?: boolean
    expectedDeliveryDate?: boolean
    defectedStatus?: boolean
    defExpectedDate?: boolean
    unitPrice?: boolean
    unitPriceCost?: boolean
    discountDate?: boolean
    discount?: boolean
    gstPercentage?: boolean
    gstAmount?: boolean
    totalAmount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    climate?: boolean
    employeeId?: boolean
    createdBy?: boolean
    productId?: boolean
    terrain?: boolean
    id?: boolean
    franchiseId?: boolean
    customerId?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"orderNumber" | "status" | "expectedDeliveryDate" | "defectedStatus" | "defExpectedDate" | "unitPrice" | "unitPriceCost" | "discountDate" | "discount" | "gstPercentage" | "gstAmount" | "totalAmount" | "createdAt" | "updatedAt" | "climate" | "employeeId" | "createdBy" | "productId" | "terrain" | "id" | "franchiseId" | "customerId", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    factory?: boolean | Order$factoryArgs<ExtArgs>
    customer?: boolean | Order$customerArgs<ExtArgs>
    employee?: boolean | Order$employeeArgs<ExtArgs>
    franchise?: boolean | Order$franchiseArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    createdByUser?: boolean | Order$createdByUserArgs<ExtArgs>
    payments?: boolean | Order$paymentsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | Order$customerArgs<ExtArgs>
    employee?: boolean | Order$employeeArgs<ExtArgs>
    franchise?: boolean | Order$franchiseArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    createdByUser?: boolean | Order$createdByUserArgs<ExtArgs>
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | Order$customerArgs<ExtArgs>
    employee?: boolean | Order$employeeArgs<ExtArgs>
    franchise?: boolean | Order$franchiseArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    createdByUser?: boolean | Order$createdByUserArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      factory: Prisma.$FactoryPayload<ExtArgs> | null
      customer: Prisma.$CustomerPayload<ExtArgs> | null
      employee: Prisma.$UserPayload<ExtArgs> | null
      franchise: Prisma.$FranchisePayload<ExtArgs> | null
      product: Prisma.$ProductPayload<ExtArgs>
      createdByUser: Prisma.$UserPayload<ExtArgs> | null
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      orderNumber: string
      status: string
      expectedDeliveryDate: Date | null
      defectedStatus: number
      defExpectedDate: Date
      unitPrice: number
      unitPriceCost: number
      discountDate: Date
      discount: number
      gstPercentage: number
      gstAmount: number
      totalAmount: number
      createdAt: Date
      updatedAt: Date
      climate: $Enums.Climate
      employeeId: number | null
      createdBy: number | null
      productId: number
      terrain: $Enums.Terrain
      id: number
      franchiseId: number | null
      customerId: number | null
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `orderNumber`
     * const orderWithOrderNumberOnly = await prisma.order.findMany({ select: { orderNumber: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `orderNumber`
     * const orderWithOrderNumberOnly = await prisma.order.createManyAndReturn({
     *   select: { orderNumber: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `orderNumber`
     * const orderWithOrderNumberOnly = await prisma.order.updateManyAndReturn({
     *   select: { orderNumber: true },
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
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
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
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    factory<T extends Order$factoryArgs<ExtArgs> = {}>(args?: Subset<T, Order$factoryArgs<ExtArgs>>): Prisma__FactoryClient<$Result.GetResult<Prisma.$FactoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    customer<T extends Order$customerArgs<ExtArgs> = {}>(args?: Subset<T, Order$customerArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    employee<T extends Order$employeeArgs<ExtArgs> = {}>(args?: Subset<T, Order$employeeArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    franchise<T extends Order$franchiseArgs<ExtArgs> = {}>(args?: Subset<T, Order$franchiseArgs<ExtArgs>>): Prisma__FranchiseClient<$Result.GetResult<Prisma.$FranchisePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    createdByUser<T extends Order$createdByUserArgs<ExtArgs> = {}>(args?: Subset<T, Order$createdByUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    payments<T extends Order$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Order$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly orderNumber: FieldRef<"Order", 'String'>
    readonly status: FieldRef<"Order", 'String'>
    readonly expectedDeliveryDate: FieldRef<"Order", 'DateTime'>
    readonly defectedStatus: FieldRef<"Order", 'Int'>
    readonly defExpectedDate: FieldRef<"Order", 'DateTime'>
    readonly unitPrice: FieldRef<"Order", 'Float'>
    readonly unitPriceCost: FieldRef<"Order", 'Float'>
    readonly discountDate: FieldRef<"Order", 'DateTime'>
    readonly discount: FieldRef<"Order", 'Float'>
    readonly gstPercentage: FieldRef<"Order", 'Float'>
    readonly gstAmount: FieldRef<"Order", 'Float'>
    readonly totalAmount: FieldRef<"Order", 'Float'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
    readonly climate: FieldRef<"Order", 'Climate'>
    readonly employeeId: FieldRef<"Order", 'Int'>
    readonly createdBy: FieldRef<"Order", 'Int'>
    readonly productId: FieldRef<"Order", 'Int'>
    readonly terrain: FieldRef<"Order", 'Terrain'>
    readonly id: FieldRef<"Order", 'Int'>
    readonly franchiseId: FieldRef<"Order", 'Int'>
    readonly customerId: FieldRef<"Order", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.factory
   */
  export type Order$factoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factory
     */
    select?: FactorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factory
     */
    omit?: FactoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactoryInclude<ExtArgs> | null
    where?: FactoryWhereInput
  }

  /**
   * Order.customer
   */
  export type Order$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
  }

  /**
   * Order.employee
   */
  export type Order$employeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Order.franchise
   */
  export type Order$franchiseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Franchise
     */
    select?: FranchiseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Franchise
     */
    omit?: FranchiseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FranchiseInclude<ExtArgs> | null
    where?: FranchiseWhereInput
  }

  /**
   * Order.createdByUser
   */
  export type Order$createdByUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Order.payments
   */
  export type Order$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model Factory
   */

  export type AggregateFactory = {
    _count: FactoryCountAggregateOutputType | null
    _avg: FactoryAvgAggregateOutputType | null
    _sum: FactorySumAggregateOutputType | null
    _min: FactoryMinAggregateOutputType | null
    _max: FactoryMaxAggregateOutputType | null
  }

  export type FactoryAvgAggregateOutputType = {
    id: number | null
    orderId: number | null
  }

  export type FactorySumAggregateOutputType = {
    id: number | null
    orderId: number | null
  }

  export type FactoryMinAggregateOutputType = {
    id: number | null
    orderId: number | null
    orderStatus: string | null
    deliveryDate: Date | null
    createdAt: Date | null
  }

  export type FactoryMaxAggregateOutputType = {
    id: number | null
    orderId: number | null
    orderStatus: string | null
    deliveryDate: Date | null
    createdAt: Date | null
  }

  export type FactoryCountAggregateOutputType = {
    id: number
    orderId: number
    orderStatus: number
    deliveryDate: number
    createdAt: number
    _all: number
  }


  export type FactoryAvgAggregateInputType = {
    id?: true
    orderId?: true
  }

  export type FactorySumAggregateInputType = {
    id?: true
    orderId?: true
  }

  export type FactoryMinAggregateInputType = {
    id?: true
    orderId?: true
    orderStatus?: true
    deliveryDate?: true
    createdAt?: true
  }

  export type FactoryMaxAggregateInputType = {
    id?: true
    orderId?: true
    orderStatus?: true
    deliveryDate?: true
    createdAt?: true
  }

  export type FactoryCountAggregateInputType = {
    id?: true
    orderId?: true
    orderStatus?: true
    deliveryDate?: true
    createdAt?: true
    _all?: true
  }

  export type FactoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Factory to aggregate.
     */
    where?: FactoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Factories to fetch.
     */
    orderBy?: FactoryOrderByWithRelationInput | FactoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FactoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Factories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Factories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Factories
    **/
    _count?: true | FactoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FactoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FactorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FactoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FactoryMaxAggregateInputType
  }

  export type GetFactoryAggregateType<T extends FactoryAggregateArgs> = {
        [P in keyof T & keyof AggregateFactory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFactory[P]>
      : GetScalarType<T[P], AggregateFactory[P]>
  }




  export type FactoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FactoryWhereInput
    orderBy?: FactoryOrderByWithAggregationInput | FactoryOrderByWithAggregationInput[]
    by: FactoryScalarFieldEnum[] | FactoryScalarFieldEnum
    having?: FactoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FactoryCountAggregateInputType | true
    _avg?: FactoryAvgAggregateInputType
    _sum?: FactorySumAggregateInputType
    _min?: FactoryMinAggregateInputType
    _max?: FactoryMaxAggregateInputType
  }

  export type FactoryGroupByOutputType = {
    id: number
    orderId: number
    orderStatus: string
    deliveryDate: Date | null
    createdAt: Date
    _count: FactoryCountAggregateOutputType | null
    _avg: FactoryAvgAggregateOutputType | null
    _sum: FactorySumAggregateOutputType | null
    _min: FactoryMinAggregateOutputType | null
    _max: FactoryMaxAggregateOutputType | null
  }

  type GetFactoryGroupByPayload<T extends FactoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FactoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FactoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FactoryGroupByOutputType[P]>
            : GetScalarType<T[P], FactoryGroupByOutputType[P]>
        }
      >
    >


  export type FactorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    orderStatus?: boolean
    deliveryDate?: boolean
    createdAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["factory"]>

  export type FactorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    orderStatus?: boolean
    deliveryDate?: boolean
    createdAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["factory"]>

  export type FactorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    orderStatus?: boolean
    deliveryDate?: boolean
    createdAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["factory"]>

  export type FactorySelectScalar = {
    id?: boolean
    orderId?: boolean
    orderStatus?: boolean
    deliveryDate?: boolean
    createdAt?: boolean
  }

  export type FactoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "orderStatus" | "deliveryDate" | "createdAt", ExtArgs["result"]["factory"]>
  export type FactoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type FactoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type FactoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }

  export type $FactoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Factory"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      orderId: number
      orderStatus: string
      deliveryDate: Date | null
      createdAt: Date
    }, ExtArgs["result"]["factory"]>
    composites: {}
  }

  type FactoryGetPayload<S extends boolean | null | undefined | FactoryDefaultArgs> = $Result.GetResult<Prisma.$FactoryPayload, S>

  type FactoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FactoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FactoryCountAggregateInputType | true
    }

  export interface FactoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Factory'], meta: { name: 'Factory' } }
    /**
     * Find zero or one Factory that matches the filter.
     * @param {FactoryFindUniqueArgs} args - Arguments to find a Factory
     * @example
     * // Get one Factory
     * const factory = await prisma.factory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FactoryFindUniqueArgs>(args: SelectSubset<T, FactoryFindUniqueArgs<ExtArgs>>): Prisma__FactoryClient<$Result.GetResult<Prisma.$FactoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Factory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FactoryFindUniqueOrThrowArgs} args - Arguments to find a Factory
     * @example
     * // Get one Factory
     * const factory = await prisma.factory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FactoryFindUniqueOrThrowArgs>(args: SelectSubset<T, FactoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FactoryClient<$Result.GetResult<Prisma.$FactoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Factory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactoryFindFirstArgs} args - Arguments to find a Factory
     * @example
     * // Get one Factory
     * const factory = await prisma.factory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FactoryFindFirstArgs>(args?: SelectSubset<T, FactoryFindFirstArgs<ExtArgs>>): Prisma__FactoryClient<$Result.GetResult<Prisma.$FactoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Factory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactoryFindFirstOrThrowArgs} args - Arguments to find a Factory
     * @example
     * // Get one Factory
     * const factory = await prisma.factory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FactoryFindFirstOrThrowArgs>(args?: SelectSubset<T, FactoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__FactoryClient<$Result.GetResult<Prisma.$FactoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Factories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Factories
     * const factories = await prisma.factory.findMany()
     * 
     * // Get first 10 Factories
     * const factories = await prisma.factory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const factoryWithIdOnly = await prisma.factory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FactoryFindManyArgs>(args?: SelectSubset<T, FactoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FactoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Factory.
     * @param {FactoryCreateArgs} args - Arguments to create a Factory.
     * @example
     * // Create one Factory
     * const Factory = await prisma.factory.create({
     *   data: {
     *     // ... data to create a Factory
     *   }
     * })
     * 
     */
    create<T extends FactoryCreateArgs>(args: SelectSubset<T, FactoryCreateArgs<ExtArgs>>): Prisma__FactoryClient<$Result.GetResult<Prisma.$FactoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Factories.
     * @param {FactoryCreateManyArgs} args - Arguments to create many Factories.
     * @example
     * // Create many Factories
     * const factory = await prisma.factory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FactoryCreateManyArgs>(args?: SelectSubset<T, FactoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Factories and returns the data saved in the database.
     * @param {FactoryCreateManyAndReturnArgs} args - Arguments to create many Factories.
     * @example
     * // Create many Factories
     * const factory = await prisma.factory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Factories and only return the `id`
     * const factoryWithIdOnly = await prisma.factory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FactoryCreateManyAndReturnArgs>(args?: SelectSubset<T, FactoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FactoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Factory.
     * @param {FactoryDeleteArgs} args - Arguments to delete one Factory.
     * @example
     * // Delete one Factory
     * const Factory = await prisma.factory.delete({
     *   where: {
     *     // ... filter to delete one Factory
     *   }
     * })
     * 
     */
    delete<T extends FactoryDeleteArgs>(args: SelectSubset<T, FactoryDeleteArgs<ExtArgs>>): Prisma__FactoryClient<$Result.GetResult<Prisma.$FactoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Factory.
     * @param {FactoryUpdateArgs} args - Arguments to update one Factory.
     * @example
     * // Update one Factory
     * const factory = await prisma.factory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FactoryUpdateArgs>(args: SelectSubset<T, FactoryUpdateArgs<ExtArgs>>): Prisma__FactoryClient<$Result.GetResult<Prisma.$FactoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Factories.
     * @param {FactoryDeleteManyArgs} args - Arguments to filter Factories to delete.
     * @example
     * // Delete a few Factories
     * const { count } = await prisma.factory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FactoryDeleteManyArgs>(args?: SelectSubset<T, FactoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Factories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Factories
     * const factory = await prisma.factory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FactoryUpdateManyArgs>(args: SelectSubset<T, FactoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Factories and returns the data updated in the database.
     * @param {FactoryUpdateManyAndReturnArgs} args - Arguments to update many Factories.
     * @example
     * // Update many Factories
     * const factory = await prisma.factory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Factories and only return the `id`
     * const factoryWithIdOnly = await prisma.factory.updateManyAndReturn({
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
    updateManyAndReturn<T extends FactoryUpdateManyAndReturnArgs>(args: SelectSubset<T, FactoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FactoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Factory.
     * @param {FactoryUpsertArgs} args - Arguments to update or create a Factory.
     * @example
     * // Update or create a Factory
     * const factory = await prisma.factory.upsert({
     *   create: {
     *     // ... data to create a Factory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Factory we want to update
     *   }
     * })
     */
    upsert<T extends FactoryUpsertArgs>(args: SelectSubset<T, FactoryUpsertArgs<ExtArgs>>): Prisma__FactoryClient<$Result.GetResult<Prisma.$FactoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Factories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactoryCountArgs} args - Arguments to filter Factories to count.
     * @example
     * // Count the number of Factories
     * const count = await prisma.factory.count({
     *   where: {
     *     // ... the filter for the Factories we want to count
     *   }
     * })
    **/
    count<T extends FactoryCountArgs>(
      args?: Subset<T, FactoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FactoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Factory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FactoryAggregateArgs>(args: Subset<T, FactoryAggregateArgs>): Prisma.PrismaPromise<GetFactoryAggregateType<T>>

    /**
     * Group by Factory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FactoryGroupByArgs} args - Group by arguments.
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
      T extends FactoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FactoryGroupByArgs['orderBy'] }
        : { orderBy?: FactoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FactoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFactoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Factory model
   */
  readonly fields: FactoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Factory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FactoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Factory model
   */
  interface FactoryFieldRefs {
    readonly id: FieldRef<"Factory", 'Int'>
    readonly orderId: FieldRef<"Factory", 'Int'>
    readonly orderStatus: FieldRef<"Factory", 'String'>
    readonly deliveryDate: FieldRef<"Factory", 'DateTime'>
    readonly createdAt: FieldRef<"Factory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Factory findUnique
   */
  export type FactoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factory
     */
    select?: FactorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factory
     */
    omit?: FactoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactoryInclude<ExtArgs> | null
    /**
     * Filter, which Factory to fetch.
     */
    where: FactoryWhereUniqueInput
  }

  /**
   * Factory findUniqueOrThrow
   */
  export type FactoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factory
     */
    select?: FactorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factory
     */
    omit?: FactoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactoryInclude<ExtArgs> | null
    /**
     * Filter, which Factory to fetch.
     */
    where: FactoryWhereUniqueInput
  }

  /**
   * Factory findFirst
   */
  export type FactoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factory
     */
    select?: FactorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factory
     */
    omit?: FactoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactoryInclude<ExtArgs> | null
    /**
     * Filter, which Factory to fetch.
     */
    where?: FactoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Factories to fetch.
     */
    orderBy?: FactoryOrderByWithRelationInput | FactoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Factories.
     */
    cursor?: FactoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Factories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Factories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Factories.
     */
    distinct?: FactoryScalarFieldEnum | FactoryScalarFieldEnum[]
  }

  /**
   * Factory findFirstOrThrow
   */
  export type FactoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factory
     */
    select?: FactorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factory
     */
    omit?: FactoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactoryInclude<ExtArgs> | null
    /**
     * Filter, which Factory to fetch.
     */
    where?: FactoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Factories to fetch.
     */
    orderBy?: FactoryOrderByWithRelationInput | FactoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Factories.
     */
    cursor?: FactoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Factories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Factories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Factories.
     */
    distinct?: FactoryScalarFieldEnum | FactoryScalarFieldEnum[]
  }

  /**
   * Factory findMany
   */
  export type FactoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factory
     */
    select?: FactorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factory
     */
    omit?: FactoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactoryInclude<ExtArgs> | null
    /**
     * Filter, which Factories to fetch.
     */
    where?: FactoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Factories to fetch.
     */
    orderBy?: FactoryOrderByWithRelationInput | FactoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Factories.
     */
    cursor?: FactoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Factories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Factories.
     */
    skip?: number
    distinct?: FactoryScalarFieldEnum | FactoryScalarFieldEnum[]
  }

  /**
   * Factory create
   */
  export type FactoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factory
     */
    select?: FactorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factory
     */
    omit?: FactoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Factory.
     */
    data: XOR<FactoryCreateInput, FactoryUncheckedCreateInput>
  }

  /**
   * Factory createMany
   */
  export type FactoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Factories.
     */
    data: FactoryCreateManyInput | FactoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Factory createManyAndReturn
   */
  export type FactoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factory
     */
    select?: FactorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Factory
     */
    omit?: FactoryOmit<ExtArgs> | null
    /**
     * The data used to create many Factories.
     */
    data: FactoryCreateManyInput | FactoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Factory update
   */
  export type FactoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factory
     */
    select?: FactorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factory
     */
    omit?: FactoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Factory.
     */
    data: XOR<FactoryUpdateInput, FactoryUncheckedUpdateInput>
    /**
     * Choose, which Factory to update.
     */
    where: FactoryWhereUniqueInput
  }

  /**
   * Factory updateMany
   */
  export type FactoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Factories.
     */
    data: XOR<FactoryUpdateManyMutationInput, FactoryUncheckedUpdateManyInput>
    /**
     * Filter which Factories to update
     */
    where?: FactoryWhereInput
    /**
     * Limit how many Factories to update.
     */
    limit?: number
  }

  /**
   * Factory updateManyAndReturn
   */
  export type FactoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factory
     */
    select?: FactorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Factory
     */
    omit?: FactoryOmit<ExtArgs> | null
    /**
     * The data used to update Factories.
     */
    data: XOR<FactoryUpdateManyMutationInput, FactoryUncheckedUpdateManyInput>
    /**
     * Filter which Factories to update
     */
    where?: FactoryWhereInput
    /**
     * Limit how many Factories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Factory upsert
   */
  export type FactoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factory
     */
    select?: FactorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factory
     */
    omit?: FactoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Factory to update in case it exists.
     */
    where: FactoryWhereUniqueInput
    /**
     * In case the Factory found by the `where` argument doesn't exist, create a new Factory with this data.
     */
    create: XOR<FactoryCreateInput, FactoryUncheckedCreateInput>
    /**
     * In case the Factory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FactoryUpdateInput, FactoryUncheckedUpdateInput>
  }

  /**
   * Factory delete
   */
  export type FactoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factory
     */
    select?: FactorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factory
     */
    omit?: FactoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactoryInclude<ExtArgs> | null
    /**
     * Filter which Factory to delete.
     */
    where: FactoryWhereUniqueInput
  }

  /**
   * Factory deleteMany
   */
  export type FactoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Factories to delete
     */
    where?: FactoryWhereInput
    /**
     * Limit how many Factories to delete.
     */
    limit?: number
  }

  /**
   * Factory without action
   */
  export type FactoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Factory
     */
    select?: FactorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Factory
     */
    omit?: FactoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FactoryInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    id: number | null
    amount: number | null
    orderId: number | null
  }

  export type PaymentSumAggregateOutputType = {
    id: number | null
    amount: number | null
    orderId: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: number | null
    amount: number | null
    orderId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    status: string | null
    method: string | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: number | null
    amount: number | null
    orderId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    status: string | null
    method: string | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    amount: number
    orderId: number
    createdAt: number
    updatedAt: number
    status: number
    method: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    id?: true
    amount?: true
    orderId?: true
  }

  export type PaymentSumAggregateInputType = {
    id?: true
    amount?: true
    orderId?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    amount?: true
    orderId?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    method?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    amount?: true
    orderId?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    method?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    amount?: true
    orderId?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    method?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: number
    amount: number
    orderId: number
    createdAt: Date
    updatedAt: Date
    status: string
    method: string
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    orderId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    method?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    orderId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    method?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    orderId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    method?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    amount?: boolean
    orderId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    method?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "orderId" | "createdAt" | "updatedAt" | "status" | "method", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      amount: number
      orderId: number
      createdAt: Date
      updatedAt: Date
      status: string
      method: string
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
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
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'Int'>
    readonly amount: FieldRef<"Payment", 'Float'>
    readonly orderId: FieldRef<"Payment", 'Int'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
    readonly status: FieldRef<"Payment", 'String'>
    readonly method: FieldRef<"Payment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
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
    email: 'email',
    password: 'password',
    fullName: 'fullName',
    phone: 'phone',
    role: 'role',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    loginUserId: 'loginUserId',
    id: 'id'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const EnquiryScalarFieldEnum: {
    enquiryID: 'enquiryID',
    name: 'name',
    ownerEmail: 'ownerEmail',
    ownerName: 'ownerName',
    ownerPhone: 'ownerPhone',
    address: 'address',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdBy: 'createdBy'
  };

  export type EnquiryScalarFieldEnum = (typeof EnquiryScalarFieldEnum)[keyof typeof EnquiryScalarFieldEnum]


  export const FranchiseScalarFieldEnum: {
    name: 'name',
    code: 'code',
    address: 'address',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isActive: 'isActive',
    ownerEmail: 'ownerEmail',
    ownerName: 'ownerName',
    ownerPhone: 'ownerPhone',
    companyProfile: 'companyProfile',
    companyKyc: 'companyKyc',
    bankDetails: 'bankDetails',
    itrDocs: 'itrDocs',
    id: 'id',
    createdBy: 'createdBy'
  };

  export type FranchiseScalarFieldEnum = (typeof FranchiseScalarFieldEnum)[keyof typeof FranchiseScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    name: 'name',
    email: 'email',
    phone: 'phone',
    address: 'address',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    customerType: 'customerType',
    id: 'id',
    cusotmerCode: 'cusotmerCode',
    franchiseId: 'franchiseId',
    createdBy: 'createdBy',
    employeeId: 'employeeId'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    name: 'name',
    price: 'price',
    stock: 'stock',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    size: 'size',
    id: 'id',
    productCode: 'productCode',
    createdById: 'createdById'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    orderNumber: 'orderNumber',
    status: 'status',
    expectedDeliveryDate: 'expectedDeliveryDate',
    defectedStatus: 'defectedStatus',
    defExpectedDate: 'defExpectedDate',
    unitPrice: 'unitPrice',
    unitPriceCost: 'unitPriceCost',
    discountDate: 'discountDate',
    discount: 'discount',
    gstPercentage: 'gstPercentage',
    gstAmount: 'gstAmount',
    totalAmount: 'totalAmount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    climate: 'climate',
    employeeId: 'employeeId',
    createdBy: 'createdBy',
    productId: 'productId',
    terrain: 'terrain',
    id: 'id',
    franchiseId: 'franchiseId',
    customerId: 'customerId'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const FactoryScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    orderStatus: 'orderStatus',
    deliveryDate: 'deliveryDate',
    createdAt: 'createdAt'
  };

  export type FactoryScalarFieldEnum = (typeof FactoryScalarFieldEnum)[keyof typeof FactoryScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    orderId: 'orderId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    status: 'status',
    method: 'method'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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
   * Reference to a field of type 'Climate'
   */
  export type EnumClimateFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Climate'>
    


  /**
   * Reference to a field of type 'Climate[]'
   */
  export type ListEnumClimateFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Climate[]'>
    


  /**
   * Reference to a field of type 'Terrain'
   */
  export type EnumTerrainFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Terrain'>
    


  /**
   * Reference to a field of type 'Terrain[]'
   */
  export type ListEnumTerrainFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Terrain[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    email?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    fullName?: StringNullableFilter<"User"> | string | null
    phone?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    loginUserId?: StringNullableFilter<"User"> | string | null
    id?: IntFilter<"User"> | number
    customers?: CustomerListRelationFilter
    franchises?: FranchiseListRelationFilter
    ordersPlaced?: OrderListRelationFilter
    products?: ProductListRelationFilter
    ordersCreated?: OrderListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    fullName?: SortOrderInput | SortOrder
    phone?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    loginUserId?: SortOrderInput | SortOrder
    id?: SortOrder
    customers?: CustomerOrderByRelationAggregateInput
    franchises?: FranchiseOrderByRelationAggregateInput
    ordersPlaced?: OrderOrderByRelationAggregateInput
    products?: ProductOrderByRelationAggregateInput
    ordersCreated?: OrderOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    email?: string
    phone?: string
    loginUserId?: string
    id?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringNullableFilter<"User"> | string | null
    fullName?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    customers?: CustomerListRelationFilter
    franchises?: FranchiseListRelationFilter
    ordersPlaced?: OrderListRelationFilter
    products?: ProductListRelationFilter
    ordersCreated?: OrderListRelationFilter
  }, "id" | "email" | "phone" | "loginUserId">

  export type UserOrderByWithAggregationInput = {
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    fullName?: SortOrderInput | SortOrder
    phone?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    loginUserId?: SortOrderInput | SortOrder
    id?: SortOrder
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
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    fullName?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    loginUserId?: StringNullableWithAggregatesFilter<"User"> | string | null
    id?: IntWithAggregatesFilter<"User"> | number
  }

  export type enquiryWhereInput = {
    AND?: enquiryWhereInput | enquiryWhereInput[]
    OR?: enquiryWhereInput[]
    NOT?: enquiryWhereInput | enquiryWhereInput[]
    enquiryID?: IntFilter<"enquiry"> | number
    name?: StringFilter<"enquiry"> | string
    ownerEmail?: StringFilter<"enquiry"> | string
    ownerName?: StringNullableFilter<"enquiry"> | string | null
    ownerPhone?: StringFilter<"enquiry"> | string
    address?: StringNullableFilter<"enquiry"> | string | null
    status?: IntFilter<"enquiry"> | number
    createdAt?: DateTimeFilter<"enquiry"> | Date | string
    updatedAt?: DateTimeFilter<"enquiry"> | Date | string
    createdBy?: IntNullableFilter<"enquiry"> | number | null
  }

  export type enquiryOrderByWithRelationInput = {
    enquiryID?: SortOrder
    name?: SortOrder
    ownerEmail?: SortOrder
    ownerName?: SortOrderInput | SortOrder
    ownerPhone?: SortOrder
    address?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
  }

  export type enquiryWhereUniqueInput = Prisma.AtLeast<{
    enquiryID?: number
    ownerEmail?: string
    ownerPhone?: string
    AND?: enquiryWhereInput | enquiryWhereInput[]
    OR?: enquiryWhereInput[]
    NOT?: enquiryWhereInput | enquiryWhereInput[]
    name?: StringFilter<"enquiry"> | string
    ownerName?: StringNullableFilter<"enquiry"> | string | null
    address?: StringNullableFilter<"enquiry"> | string | null
    status?: IntFilter<"enquiry"> | number
    createdAt?: DateTimeFilter<"enquiry"> | Date | string
    updatedAt?: DateTimeFilter<"enquiry"> | Date | string
    createdBy?: IntNullableFilter<"enquiry"> | number | null
  }, "enquiryID" | "ownerEmail" | "ownerPhone">

  export type enquiryOrderByWithAggregationInput = {
    enquiryID?: SortOrder
    name?: SortOrder
    ownerEmail?: SortOrder
    ownerName?: SortOrderInput | SortOrder
    ownerPhone?: SortOrder
    address?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    _count?: enquiryCountOrderByAggregateInput
    _avg?: enquiryAvgOrderByAggregateInput
    _max?: enquiryMaxOrderByAggregateInput
    _min?: enquiryMinOrderByAggregateInput
    _sum?: enquirySumOrderByAggregateInput
  }

  export type enquiryScalarWhereWithAggregatesInput = {
    AND?: enquiryScalarWhereWithAggregatesInput | enquiryScalarWhereWithAggregatesInput[]
    OR?: enquiryScalarWhereWithAggregatesInput[]
    NOT?: enquiryScalarWhereWithAggregatesInput | enquiryScalarWhereWithAggregatesInput[]
    enquiryID?: IntWithAggregatesFilter<"enquiry"> | number
    name?: StringWithAggregatesFilter<"enquiry"> | string
    ownerEmail?: StringWithAggregatesFilter<"enquiry"> | string
    ownerName?: StringNullableWithAggregatesFilter<"enquiry"> | string | null
    ownerPhone?: StringWithAggregatesFilter<"enquiry"> | string
    address?: StringNullableWithAggregatesFilter<"enquiry"> | string | null
    status?: IntWithAggregatesFilter<"enquiry"> | number
    createdAt?: DateTimeWithAggregatesFilter<"enquiry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"enquiry"> | Date | string
    createdBy?: IntNullableWithAggregatesFilter<"enquiry"> | number | null
  }

  export type FranchiseWhereInput = {
    AND?: FranchiseWhereInput | FranchiseWhereInput[]
    OR?: FranchiseWhereInput[]
    NOT?: FranchiseWhereInput | FranchiseWhereInput[]
    name?: StringFilter<"Franchise"> | string
    code?: StringFilter<"Franchise"> | string
    address?: StringNullableFilter<"Franchise"> | string | null
    createdAt?: DateTimeFilter<"Franchise"> | Date | string
    updatedAt?: DateTimeFilter<"Franchise"> | Date | string
    isActive?: BoolFilter<"Franchise"> | boolean
    ownerEmail?: StringFilter<"Franchise"> | string
    ownerName?: StringNullableFilter<"Franchise"> | string | null
    ownerPhone?: StringFilter<"Franchise"> | string
    companyProfile?: StringNullableFilter<"Franchise"> | string | null
    companyKyc?: StringNullableFilter<"Franchise"> | string | null
    bankDetails?: StringNullableFilter<"Franchise"> | string | null
    itrDocs?: StringNullableFilter<"Franchise"> | string | null
    id?: IntFilter<"Franchise"> | number
    createdBy?: IntNullableFilter<"Franchise"> | number | null
    customers?: CustomerListRelationFilter
    creator?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    orders?: OrderListRelationFilter
  }

  export type FranchiseOrderByWithRelationInput = {
    name?: SortOrder
    code?: SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isActive?: SortOrder
    ownerEmail?: SortOrder
    ownerName?: SortOrderInput | SortOrder
    ownerPhone?: SortOrder
    companyProfile?: SortOrderInput | SortOrder
    companyKyc?: SortOrderInput | SortOrder
    bankDetails?: SortOrderInput | SortOrder
    itrDocs?: SortOrderInput | SortOrder
    id?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    customers?: CustomerOrderByRelationAggregateInput
    creator?: UserOrderByWithRelationInput
    orders?: OrderOrderByRelationAggregateInput
  }

  export type FranchiseWhereUniqueInput = Prisma.AtLeast<{
    code?: string
    ownerEmail?: string
    ownerPhone?: string
    id?: number
    AND?: FranchiseWhereInput | FranchiseWhereInput[]
    OR?: FranchiseWhereInput[]
    NOT?: FranchiseWhereInput | FranchiseWhereInput[]
    name?: StringFilter<"Franchise"> | string
    address?: StringNullableFilter<"Franchise"> | string | null
    createdAt?: DateTimeFilter<"Franchise"> | Date | string
    updatedAt?: DateTimeFilter<"Franchise"> | Date | string
    isActive?: BoolFilter<"Franchise"> | boolean
    ownerName?: StringNullableFilter<"Franchise"> | string | null
    companyProfile?: StringNullableFilter<"Franchise"> | string | null
    companyKyc?: StringNullableFilter<"Franchise"> | string | null
    bankDetails?: StringNullableFilter<"Franchise"> | string | null
    itrDocs?: StringNullableFilter<"Franchise"> | string | null
    createdBy?: IntNullableFilter<"Franchise"> | number | null
    customers?: CustomerListRelationFilter
    creator?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    orders?: OrderListRelationFilter
  }, "id" | "code" | "ownerEmail" | "ownerPhone">

  export type FranchiseOrderByWithAggregationInput = {
    name?: SortOrder
    code?: SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isActive?: SortOrder
    ownerEmail?: SortOrder
    ownerName?: SortOrderInput | SortOrder
    ownerPhone?: SortOrder
    companyProfile?: SortOrderInput | SortOrder
    companyKyc?: SortOrderInput | SortOrder
    bankDetails?: SortOrderInput | SortOrder
    itrDocs?: SortOrderInput | SortOrder
    id?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    _count?: FranchiseCountOrderByAggregateInput
    _avg?: FranchiseAvgOrderByAggregateInput
    _max?: FranchiseMaxOrderByAggregateInput
    _min?: FranchiseMinOrderByAggregateInput
    _sum?: FranchiseSumOrderByAggregateInput
  }

  export type FranchiseScalarWhereWithAggregatesInput = {
    AND?: FranchiseScalarWhereWithAggregatesInput | FranchiseScalarWhereWithAggregatesInput[]
    OR?: FranchiseScalarWhereWithAggregatesInput[]
    NOT?: FranchiseScalarWhereWithAggregatesInput | FranchiseScalarWhereWithAggregatesInput[]
    name?: StringWithAggregatesFilter<"Franchise"> | string
    code?: StringWithAggregatesFilter<"Franchise"> | string
    address?: StringNullableWithAggregatesFilter<"Franchise"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Franchise"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Franchise"> | Date | string
    isActive?: BoolWithAggregatesFilter<"Franchise"> | boolean
    ownerEmail?: StringWithAggregatesFilter<"Franchise"> | string
    ownerName?: StringNullableWithAggregatesFilter<"Franchise"> | string | null
    ownerPhone?: StringWithAggregatesFilter<"Franchise"> | string
    companyProfile?: StringNullableWithAggregatesFilter<"Franchise"> | string | null
    companyKyc?: StringNullableWithAggregatesFilter<"Franchise"> | string | null
    bankDetails?: StringNullableWithAggregatesFilter<"Franchise"> | string | null
    itrDocs?: StringNullableWithAggregatesFilter<"Franchise"> | string | null
    id?: IntWithAggregatesFilter<"Franchise"> | number
    createdBy?: IntNullableWithAggregatesFilter<"Franchise"> | number | null
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    name?: StringFilter<"Customer"> | string
    email?: StringNullableFilter<"Customer"> | string | null
    phone?: StringNullableFilter<"Customer"> | string | null
    address?: StringNullableFilter<"Customer"> | string | null
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    customerType?: StringNullableFilter<"Customer"> | string | null
    id?: IntFilter<"Customer"> | number
    cusotmerCode?: StringFilter<"Customer"> | string
    franchiseId?: IntNullableFilter<"Customer"> | number | null
    createdBy?: IntNullableFilter<"Customer"> | number | null
    employeeId?: IntNullableFilter<"Customer"> | number | null
    employee?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    franchise?: XOR<FranchiseNullableScalarRelationFilter, FranchiseWhereInput> | null
    orders?: OrderListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customerType?: SortOrderInput | SortOrder
    id?: SortOrder
    cusotmerCode?: SortOrder
    franchiseId?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    employeeId?: SortOrderInput | SortOrder
    employee?: UserOrderByWithRelationInput
    franchise?: FranchiseOrderByWithRelationInput
    orders?: OrderOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cusotmerCode?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    name?: StringFilter<"Customer"> | string
    email?: StringNullableFilter<"Customer"> | string | null
    phone?: StringNullableFilter<"Customer"> | string | null
    address?: StringNullableFilter<"Customer"> | string | null
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    customerType?: StringNullableFilter<"Customer"> | string | null
    franchiseId?: IntNullableFilter<"Customer"> | number | null
    createdBy?: IntNullableFilter<"Customer"> | number | null
    employeeId?: IntNullableFilter<"Customer"> | number | null
    employee?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    franchise?: XOR<FranchiseNullableScalarRelationFilter, FranchiseWhereInput> | null
    orders?: OrderListRelationFilter
  }, "id" | "cusotmerCode">

  export type CustomerOrderByWithAggregationInput = {
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customerType?: SortOrderInput | SortOrder
    id?: SortOrder
    cusotmerCode?: SortOrder
    franchiseId?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    employeeId?: SortOrderInput | SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    name?: StringWithAggregatesFilter<"Customer"> | string
    email?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    address?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    customerType?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    id?: IntWithAggregatesFilter<"Customer"> | number
    cusotmerCode?: StringWithAggregatesFilter<"Customer"> | string
    franchiseId?: IntNullableWithAggregatesFilter<"Customer"> | number | null
    createdBy?: IntNullableWithAggregatesFilter<"Customer"> | number | null
    employeeId?: IntNullableWithAggregatesFilter<"Customer"> | number | null
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    price?: FloatFilter<"Product"> | number
    stock?: IntFilter<"Product"> | number
    isActive?: BoolFilter<"Product"> | boolean
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    size?: StringFilter<"Product"> | string
    id?: IntFilter<"Product"> | number
    productCode?: StringFilter<"Product"> | string
    createdById?: IntNullableFilter<"Product"> | number | null
    orders?: OrderListRelationFilter
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ProductOrderByWithRelationInput = {
    name?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    size?: SortOrder
    id?: SortOrder
    productCode?: SortOrder
    createdById?: SortOrderInput | SortOrder
    orders?: OrderOrderByRelationAggregateInput
    createdBy?: UserOrderByWithRelationInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    productCode?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    price?: FloatFilter<"Product"> | number
    stock?: IntFilter<"Product"> | number
    isActive?: BoolFilter<"Product"> | boolean
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    size?: StringFilter<"Product"> | string
    createdById?: IntNullableFilter<"Product"> | number | null
    orders?: OrderListRelationFilter
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "productCode">

  export type ProductOrderByWithAggregationInput = {
    name?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    size?: SortOrder
    id?: SortOrder
    productCode?: SortOrder
    createdById?: SortOrderInput | SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    name?: StringWithAggregatesFilter<"Product"> | string
    price?: FloatWithAggregatesFilter<"Product"> | number
    stock?: IntWithAggregatesFilter<"Product"> | number
    isActive?: BoolWithAggregatesFilter<"Product"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    size?: StringWithAggregatesFilter<"Product"> | string
    id?: IntWithAggregatesFilter<"Product"> | number
    productCode?: StringWithAggregatesFilter<"Product"> | string
    createdById?: IntNullableWithAggregatesFilter<"Product"> | number | null
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    orderNumber?: StringFilter<"Order"> | string
    status?: StringFilter<"Order"> | string
    expectedDeliveryDate?: DateTimeNullableFilter<"Order"> | Date | string | null
    defectedStatus?: IntFilter<"Order"> | number
    defExpectedDate?: DateTimeFilter<"Order"> | Date | string
    unitPrice?: FloatFilter<"Order"> | number
    unitPriceCost?: FloatFilter<"Order"> | number
    discountDate?: DateTimeFilter<"Order"> | Date | string
    discount?: FloatFilter<"Order"> | number
    gstPercentage?: FloatFilter<"Order"> | number
    gstAmount?: FloatFilter<"Order"> | number
    totalAmount?: FloatFilter<"Order"> | number
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    climate?: EnumClimateFilter<"Order"> | $Enums.Climate
    employeeId?: IntNullableFilter<"Order"> | number | null
    createdBy?: IntNullableFilter<"Order"> | number | null
    productId?: IntFilter<"Order"> | number
    terrain?: EnumTerrainFilter<"Order"> | $Enums.Terrain
    id?: IntFilter<"Order"> | number
    franchiseId?: IntNullableFilter<"Order"> | number | null
    customerId?: IntNullableFilter<"Order"> | number | null
    factory?: XOR<FactoryNullableScalarRelationFilter, FactoryWhereInput> | null
    customer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
    employee?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    franchise?: XOR<FranchiseNullableScalarRelationFilter, FranchiseWhereInput> | null
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    createdByUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    payments?: PaymentListRelationFilter
  }

  export type OrderOrderByWithRelationInput = {
    orderNumber?: SortOrder
    status?: SortOrder
    expectedDeliveryDate?: SortOrderInput | SortOrder
    defectedStatus?: SortOrder
    defExpectedDate?: SortOrder
    unitPrice?: SortOrder
    unitPriceCost?: SortOrder
    discountDate?: SortOrder
    discount?: SortOrder
    gstPercentage?: SortOrder
    gstAmount?: SortOrder
    totalAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    climate?: SortOrder
    employeeId?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    productId?: SortOrder
    terrain?: SortOrder
    id?: SortOrder
    franchiseId?: SortOrderInput | SortOrder
    customerId?: SortOrderInput | SortOrder
    factory?: FactoryOrderByWithRelationInput
    customer?: CustomerOrderByWithRelationInput
    employee?: UserOrderByWithRelationInput
    franchise?: FranchiseOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
    createdByUser?: UserOrderByWithRelationInput
    payments?: PaymentOrderByRelationAggregateInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    orderNumber?: string
    id?: number
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    status?: StringFilter<"Order"> | string
    expectedDeliveryDate?: DateTimeNullableFilter<"Order"> | Date | string | null
    defectedStatus?: IntFilter<"Order"> | number
    defExpectedDate?: DateTimeFilter<"Order"> | Date | string
    unitPrice?: FloatFilter<"Order"> | number
    unitPriceCost?: FloatFilter<"Order"> | number
    discountDate?: DateTimeFilter<"Order"> | Date | string
    discount?: FloatFilter<"Order"> | number
    gstPercentage?: FloatFilter<"Order"> | number
    gstAmount?: FloatFilter<"Order"> | number
    totalAmount?: FloatFilter<"Order"> | number
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    climate?: EnumClimateFilter<"Order"> | $Enums.Climate
    employeeId?: IntNullableFilter<"Order"> | number | null
    createdBy?: IntNullableFilter<"Order"> | number | null
    productId?: IntFilter<"Order"> | number
    terrain?: EnumTerrainFilter<"Order"> | $Enums.Terrain
    franchiseId?: IntNullableFilter<"Order"> | number | null
    customerId?: IntNullableFilter<"Order"> | number | null
    factory?: XOR<FactoryNullableScalarRelationFilter, FactoryWhereInput> | null
    customer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
    employee?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    franchise?: XOR<FranchiseNullableScalarRelationFilter, FranchiseWhereInput> | null
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    createdByUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    payments?: PaymentListRelationFilter
  }, "id" | "orderNumber">

  export type OrderOrderByWithAggregationInput = {
    orderNumber?: SortOrder
    status?: SortOrder
    expectedDeliveryDate?: SortOrderInput | SortOrder
    defectedStatus?: SortOrder
    defExpectedDate?: SortOrder
    unitPrice?: SortOrder
    unitPriceCost?: SortOrder
    discountDate?: SortOrder
    discount?: SortOrder
    gstPercentage?: SortOrder
    gstAmount?: SortOrder
    totalAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    climate?: SortOrder
    employeeId?: SortOrderInput | SortOrder
    createdBy?: SortOrderInput | SortOrder
    productId?: SortOrder
    terrain?: SortOrder
    id?: SortOrder
    franchiseId?: SortOrderInput | SortOrder
    customerId?: SortOrderInput | SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    orderNumber?: StringWithAggregatesFilter<"Order"> | string
    status?: StringWithAggregatesFilter<"Order"> | string
    expectedDeliveryDate?: DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null
    defectedStatus?: IntWithAggregatesFilter<"Order"> | number
    defExpectedDate?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    unitPrice?: FloatWithAggregatesFilter<"Order"> | number
    unitPriceCost?: FloatWithAggregatesFilter<"Order"> | number
    discountDate?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    discount?: FloatWithAggregatesFilter<"Order"> | number
    gstPercentage?: FloatWithAggregatesFilter<"Order"> | number
    gstAmount?: FloatWithAggregatesFilter<"Order"> | number
    totalAmount?: FloatWithAggregatesFilter<"Order"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    climate?: EnumClimateWithAggregatesFilter<"Order"> | $Enums.Climate
    employeeId?: IntNullableWithAggregatesFilter<"Order"> | number | null
    createdBy?: IntNullableWithAggregatesFilter<"Order"> | number | null
    productId?: IntWithAggregatesFilter<"Order"> | number
    terrain?: EnumTerrainWithAggregatesFilter<"Order"> | $Enums.Terrain
    id?: IntWithAggregatesFilter<"Order"> | number
    franchiseId?: IntNullableWithAggregatesFilter<"Order"> | number | null
    customerId?: IntNullableWithAggregatesFilter<"Order"> | number | null
  }

  export type FactoryWhereInput = {
    AND?: FactoryWhereInput | FactoryWhereInput[]
    OR?: FactoryWhereInput[]
    NOT?: FactoryWhereInput | FactoryWhereInput[]
    id?: IntFilter<"Factory"> | number
    orderId?: IntFilter<"Factory"> | number
    orderStatus?: StringFilter<"Factory"> | string
    deliveryDate?: DateTimeNullableFilter<"Factory"> | Date | string | null
    createdAt?: DateTimeFilter<"Factory"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }

  export type FactoryOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    orderStatus?: SortOrder
    deliveryDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    order?: OrderOrderByWithRelationInput
  }

  export type FactoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    orderId?: number
    AND?: FactoryWhereInput | FactoryWhereInput[]
    OR?: FactoryWhereInput[]
    NOT?: FactoryWhereInput | FactoryWhereInput[]
    orderStatus?: StringFilter<"Factory"> | string
    deliveryDate?: DateTimeNullableFilter<"Factory"> | Date | string | null
    createdAt?: DateTimeFilter<"Factory"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }, "id" | "orderId">

  export type FactoryOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    orderStatus?: SortOrder
    deliveryDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: FactoryCountOrderByAggregateInput
    _avg?: FactoryAvgOrderByAggregateInput
    _max?: FactoryMaxOrderByAggregateInput
    _min?: FactoryMinOrderByAggregateInput
    _sum?: FactorySumOrderByAggregateInput
  }

  export type FactoryScalarWhereWithAggregatesInput = {
    AND?: FactoryScalarWhereWithAggregatesInput | FactoryScalarWhereWithAggregatesInput[]
    OR?: FactoryScalarWhereWithAggregatesInput[]
    NOT?: FactoryScalarWhereWithAggregatesInput | FactoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Factory"> | number
    orderId?: IntWithAggregatesFilter<"Factory"> | number
    orderStatus?: StringWithAggregatesFilter<"Factory"> | string
    deliveryDate?: DateTimeNullableWithAggregatesFilter<"Factory"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Factory"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: IntFilter<"Payment"> | number
    amount?: FloatFilter<"Payment"> | number
    orderId?: IntFilter<"Payment"> | number
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    status?: StringFilter<"Payment"> | string
    method?: StringFilter<"Payment"> | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    orderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    method?: SortOrder
    order?: OrderOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    amount?: FloatFilter<"Payment"> | number
    orderId?: IntFilter<"Payment"> | number
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    status?: StringFilter<"Payment"> | string
    method?: StringFilter<"Payment"> | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    orderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    method?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Payment"> | number
    amount?: FloatWithAggregatesFilter<"Payment"> | number
    orderId?: IntWithAggregatesFilter<"Payment"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    status?: StringWithAggregatesFilter<"Payment"> | string
    method?: StringWithAggregatesFilter<"Payment"> | string
  }

  export type UserCreateInput = {
    email?: string | null
    password?: string | null
    fullName?: string | null
    phone: string
    role: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    loginUserId?: string | null
    customers?: CustomerCreateNestedManyWithoutEmployeeInput
    franchises?: FranchiseCreateNestedManyWithoutCreatorInput
    ordersPlaced?: OrderCreateNestedManyWithoutEmployeeInput
    products?: ProductCreateNestedManyWithoutCreatedByInput
    ordersCreated?: OrderCreateNestedManyWithoutCreatedByUserInput
  }

  export type UserUncheckedCreateInput = {
    email?: string | null
    password?: string | null
    fullName?: string | null
    phone: string
    role: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    loginUserId?: string | null
    id?: number
    customers?: CustomerUncheckedCreateNestedManyWithoutEmployeeInput
    franchises?: FranchiseUncheckedCreateNestedManyWithoutCreatorInput
    ordersPlaced?: OrderUncheckedCreateNestedManyWithoutEmployeeInput
    products?: ProductUncheckedCreateNestedManyWithoutCreatedByInput
    ordersCreated?: OrderUncheckedCreateNestedManyWithoutCreatedByUserInput
  }

  export type UserUpdateInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginUserId?: NullableStringFieldUpdateOperationsInput | string | null
    customers?: CustomerUpdateManyWithoutEmployeeNestedInput
    franchises?: FranchiseUpdateManyWithoutCreatorNestedInput
    ordersPlaced?: OrderUpdateManyWithoutEmployeeNestedInput
    products?: ProductUpdateManyWithoutCreatedByNestedInput
    ordersCreated?: OrderUpdateManyWithoutCreatedByUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginUserId?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
    customers?: CustomerUncheckedUpdateManyWithoutEmployeeNestedInput
    franchises?: FranchiseUncheckedUpdateManyWithoutCreatorNestedInput
    ordersPlaced?: OrderUncheckedUpdateManyWithoutEmployeeNestedInput
    products?: ProductUncheckedUpdateManyWithoutCreatedByNestedInput
    ordersCreated?: OrderUncheckedUpdateManyWithoutCreatedByUserNestedInput
  }

  export type UserCreateManyInput = {
    email?: string | null
    password?: string | null
    fullName?: string | null
    phone: string
    role: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    loginUserId?: string | null
    id?: number
  }

  export type UserUpdateManyMutationInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginUserId?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
  }

  export type enquiryCreateInput = {
    name: string
    ownerEmail: string
    ownerName?: string | null
    ownerPhone: string
    address?: string | null
    status: number
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: number | null
  }

  export type enquiryUncheckedCreateInput = {
    enquiryID?: number
    name: string
    ownerEmail: string
    ownerName?: string | null
    ownerPhone: string
    address?: string | null
    status: number
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: number | null
  }

  export type enquiryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    ownerEmail?: StringFieldUpdateOperationsInput | string
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    ownerPhone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type enquiryUncheckedUpdateInput = {
    enquiryID?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    ownerEmail?: StringFieldUpdateOperationsInput | string
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    ownerPhone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type enquiryCreateManyInput = {
    enquiryID?: number
    name: string
    ownerEmail: string
    ownerName?: string | null
    ownerPhone: string
    address?: string | null
    status: number
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: number | null
  }

  export type enquiryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    ownerEmail?: StringFieldUpdateOperationsInput | string
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    ownerPhone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type enquiryUncheckedUpdateManyInput = {
    enquiryID?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    ownerEmail?: StringFieldUpdateOperationsInput | string
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    ownerPhone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FranchiseCreateInput = {
    name: string
    code: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isActive?: boolean
    ownerEmail: string
    ownerName?: string | null
    ownerPhone: string
    companyProfile?: string | null
    companyKyc?: string | null
    bankDetails?: string | null
    itrDocs?: string | null
    customers?: CustomerCreateNestedManyWithoutFranchiseInput
    creator?: UserCreateNestedOneWithoutFranchisesInput
    orders?: OrderCreateNestedManyWithoutFranchiseInput
  }

  export type FranchiseUncheckedCreateInput = {
    name: string
    code: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isActive?: boolean
    ownerEmail: string
    ownerName?: string | null
    ownerPhone: string
    companyProfile?: string | null
    companyKyc?: string | null
    bankDetails?: string | null
    itrDocs?: string | null
    id?: number
    createdBy?: number | null
    customers?: CustomerUncheckedCreateNestedManyWithoutFranchiseInput
    orders?: OrderUncheckedCreateNestedManyWithoutFranchiseInput
  }

  export type FranchiseUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    ownerEmail?: StringFieldUpdateOperationsInput | string
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    ownerPhone?: StringFieldUpdateOperationsInput | string
    companyProfile?: NullableStringFieldUpdateOperationsInput | string | null
    companyKyc?: NullableStringFieldUpdateOperationsInput | string | null
    bankDetails?: NullableStringFieldUpdateOperationsInput | string | null
    itrDocs?: NullableStringFieldUpdateOperationsInput | string | null
    customers?: CustomerUpdateManyWithoutFranchiseNestedInput
    creator?: UserUpdateOneWithoutFranchisesNestedInput
    orders?: OrderUpdateManyWithoutFranchiseNestedInput
  }

  export type FranchiseUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    ownerEmail?: StringFieldUpdateOperationsInput | string
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    ownerPhone?: StringFieldUpdateOperationsInput | string
    companyProfile?: NullableStringFieldUpdateOperationsInput | string | null
    companyKyc?: NullableStringFieldUpdateOperationsInput | string | null
    bankDetails?: NullableStringFieldUpdateOperationsInput | string | null
    itrDocs?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    customers?: CustomerUncheckedUpdateManyWithoutFranchiseNestedInput
    orders?: OrderUncheckedUpdateManyWithoutFranchiseNestedInput
  }

  export type FranchiseCreateManyInput = {
    name: string
    code: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isActive?: boolean
    ownerEmail: string
    ownerName?: string | null
    ownerPhone: string
    companyProfile?: string | null
    companyKyc?: string | null
    bankDetails?: string | null
    itrDocs?: string | null
    id?: number
    createdBy?: number | null
  }

  export type FranchiseUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    ownerEmail?: StringFieldUpdateOperationsInput | string
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    ownerPhone?: StringFieldUpdateOperationsInput | string
    companyProfile?: NullableStringFieldUpdateOperationsInput | string | null
    companyKyc?: NullableStringFieldUpdateOperationsInput | string | null
    bankDetails?: NullableStringFieldUpdateOperationsInput | string | null
    itrDocs?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FranchiseUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    ownerEmail?: StringFieldUpdateOperationsInput | string
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    ownerPhone?: StringFieldUpdateOperationsInput | string
    companyProfile?: NullableStringFieldUpdateOperationsInput | string | null
    companyKyc?: NullableStringFieldUpdateOperationsInput | string | null
    bankDetails?: NullableStringFieldUpdateOperationsInput | string | null
    itrDocs?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CustomerCreateInput = {
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customerType?: string | null
    cusotmerCode: string
    createdBy?: number | null
    employee?: UserCreateNestedOneWithoutCustomersInput
    franchise?: FranchiseCreateNestedOneWithoutCustomersInput
    orders?: OrderCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customerType?: string | null
    id?: number
    cusotmerCode: string
    franchiseId?: number | null
    createdBy?: number | null
    employeeId?: number | null
    orders?: OrderUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerType?: NullableStringFieldUpdateOperationsInput | string | null
    cusotmerCode?: StringFieldUpdateOperationsInput | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    employee?: UserUpdateOneWithoutCustomersNestedInput
    franchise?: FranchiseUpdateOneWithoutCustomersNestedInput
    orders?: OrderUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerType?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
    cusotmerCode?: StringFieldUpdateOperationsInput | string
    franchiseId?: NullableIntFieldUpdateOperationsInput | number | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    employeeId?: NullableIntFieldUpdateOperationsInput | number | null
    orders?: OrderUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customerType?: string | null
    id?: number
    cusotmerCode: string
    franchiseId?: number | null
    createdBy?: number | null
    employeeId?: number | null
  }

  export type CustomerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerType?: NullableStringFieldUpdateOperationsInput | string | null
    cusotmerCode?: StringFieldUpdateOperationsInput | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CustomerUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerType?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
    cusotmerCode?: StringFieldUpdateOperationsInput | string
    franchiseId?: NullableIntFieldUpdateOperationsInput | number | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    employeeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductCreateInput = {
    name: string
    price: number
    stock?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    size: string
    productCode: string
    orders?: OrderCreateNestedManyWithoutProductInput
    createdBy?: UserCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateInput = {
    name: string
    price: number
    stock?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    size: string
    id?: number
    productCode: string
    createdById?: number | null
    orders?: OrderUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    size?: StringFieldUpdateOperationsInput | string
    productCode?: StringFieldUpdateOperationsInput | string
    orders?: OrderUpdateManyWithoutProductNestedInput
    createdBy?: UserUpdateOneWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    size?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
    productCode?: StringFieldUpdateOperationsInput | string
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    orders?: OrderUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    name: string
    price: number
    stock?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    size: string
    id?: number
    productCode: string
    createdById?: number | null
  }

  export type ProductUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    size?: StringFieldUpdateOperationsInput | string
    productCode?: StringFieldUpdateOperationsInput | string
  }

  export type ProductUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    size?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
    productCode?: StringFieldUpdateOperationsInput | string
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OrderCreateInput = {
    orderNumber: string
    status?: string
    expectedDeliveryDate?: Date | string | null
    defectedStatus: number
    defExpectedDate?: Date | string
    unitPrice?: number
    unitPriceCost?: number
    discountDate: Date | string
    discount?: number
    gstPercentage?: number
    gstAmount?: number
    totalAmount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    climate: $Enums.Climate
    terrain: $Enums.Terrain
    factory?: FactoryCreateNestedOneWithoutOrderInput
    customer?: CustomerCreateNestedOneWithoutOrdersInput
    employee?: UserCreateNestedOneWithoutOrdersPlacedInput
    franchise?: FranchiseCreateNestedOneWithoutOrdersInput
    product: ProductCreateNestedOneWithoutOrdersInput
    createdByUser?: UserCreateNestedOneWithoutOrdersCreatedInput
    payments?: PaymentCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    orderNumber: string
    status?: string
    expectedDeliveryDate?: Date | string | null
    defectedStatus: number
    defExpectedDate?: Date | string
    unitPrice?: number
    unitPriceCost?: number
    discountDate: Date | string
    discount?: number
    gstPercentage?: number
    gstAmount?: number
    totalAmount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    climate: $Enums.Climate
    employeeId?: number | null
    createdBy?: number | null
    productId: number
    terrain: $Enums.Terrain
    id?: number
    franchiseId?: number | null
    customerId?: number | null
    factory?: FactoryUncheckedCreateNestedOneWithoutOrderInput
    payments?: PaymentUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expectedDeliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    defectedStatus?: IntFieldUpdateOperationsInput | number
    defExpectedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    unitPrice?: FloatFieldUpdateOperationsInput | number
    unitPriceCost?: FloatFieldUpdateOperationsInput | number
    discountDate?: DateTimeFieldUpdateOperationsInput | Date | string
    discount?: FloatFieldUpdateOperationsInput | number
    gstPercentage?: FloatFieldUpdateOperationsInput | number
    gstAmount?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    climate?: EnumClimateFieldUpdateOperationsInput | $Enums.Climate
    terrain?: EnumTerrainFieldUpdateOperationsInput | $Enums.Terrain
    factory?: FactoryUpdateOneWithoutOrderNestedInput
    customer?: CustomerUpdateOneWithoutOrdersNestedInput
    employee?: UserUpdateOneWithoutOrdersPlacedNestedInput
    franchise?: FranchiseUpdateOneWithoutOrdersNestedInput
    product?: ProductUpdateOneRequiredWithoutOrdersNestedInput
    createdByUser?: UserUpdateOneWithoutOrdersCreatedNestedInput
    payments?: PaymentUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expectedDeliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    defectedStatus?: IntFieldUpdateOperationsInput | number
    defExpectedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    unitPrice?: FloatFieldUpdateOperationsInput | number
    unitPriceCost?: FloatFieldUpdateOperationsInput | number
    discountDate?: DateTimeFieldUpdateOperationsInput | Date | string
    discount?: FloatFieldUpdateOperationsInput | number
    gstPercentage?: FloatFieldUpdateOperationsInput | number
    gstAmount?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    climate?: EnumClimateFieldUpdateOperationsInput | $Enums.Climate
    employeeId?: NullableIntFieldUpdateOperationsInput | number | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    productId?: IntFieldUpdateOperationsInput | number
    terrain?: EnumTerrainFieldUpdateOperationsInput | $Enums.Terrain
    id?: IntFieldUpdateOperationsInput | number
    franchiseId?: NullableIntFieldUpdateOperationsInput | number | null
    customerId?: NullableIntFieldUpdateOperationsInput | number | null
    factory?: FactoryUncheckedUpdateOneWithoutOrderNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    orderNumber: string
    status?: string
    expectedDeliveryDate?: Date | string | null
    defectedStatus: number
    defExpectedDate?: Date | string
    unitPrice?: number
    unitPriceCost?: number
    discountDate: Date | string
    discount?: number
    gstPercentage?: number
    gstAmount?: number
    totalAmount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    climate: $Enums.Climate
    employeeId?: number | null
    createdBy?: number | null
    productId: number
    terrain: $Enums.Terrain
    id?: number
    franchiseId?: number | null
    customerId?: number | null
  }

  export type OrderUpdateManyMutationInput = {
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expectedDeliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    defectedStatus?: IntFieldUpdateOperationsInput | number
    defExpectedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    unitPrice?: FloatFieldUpdateOperationsInput | number
    unitPriceCost?: FloatFieldUpdateOperationsInput | number
    discountDate?: DateTimeFieldUpdateOperationsInput | Date | string
    discount?: FloatFieldUpdateOperationsInput | number
    gstPercentage?: FloatFieldUpdateOperationsInput | number
    gstAmount?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    climate?: EnumClimateFieldUpdateOperationsInput | $Enums.Climate
    terrain?: EnumTerrainFieldUpdateOperationsInput | $Enums.Terrain
  }

  export type OrderUncheckedUpdateManyInput = {
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expectedDeliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    defectedStatus?: IntFieldUpdateOperationsInput | number
    defExpectedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    unitPrice?: FloatFieldUpdateOperationsInput | number
    unitPriceCost?: FloatFieldUpdateOperationsInput | number
    discountDate?: DateTimeFieldUpdateOperationsInput | Date | string
    discount?: FloatFieldUpdateOperationsInput | number
    gstPercentage?: FloatFieldUpdateOperationsInput | number
    gstAmount?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    climate?: EnumClimateFieldUpdateOperationsInput | $Enums.Climate
    employeeId?: NullableIntFieldUpdateOperationsInput | number | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    productId?: IntFieldUpdateOperationsInput | number
    terrain?: EnumTerrainFieldUpdateOperationsInput | $Enums.Terrain
    id?: IntFieldUpdateOperationsInput | number
    franchiseId?: NullableIntFieldUpdateOperationsInput | number | null
    customerId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FactoryCreateInput = {
    orderStatus?: string
    deliveryDate?: Date | string | null
    createdAt?: Date | string
    order: OrderCreateNestedOneWithoutFactoryInput
  }

  export type FactoryUncheckedCreateInput = {
    id?: number
    orderId: number
    orderStatus?: string
    deliveryDate?: Date | string | null
    createdAt?: Date | string
  }

  export type FactoryUpdateInput = {
    orderStatus?: StringFieldUpdateOperationsInput | string
    deliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutFactoryNestedInput
  }

  export type FactoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    orderStatus?: StringFieldUpdateOperationsInput | string
    deliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FactoryCreateManyInput = {
    id?: number
    orderId: number
    orderStatus?: string
    deliveryDate?: Date | string | null
    createdAt?: Date | string
  }

  export type FactoryUpdateManyMutationInput = {
    orderStatus?: StringFieldUpdateOperationsInput | string
    deliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FactoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    orderStatus?: StringFieldUpdateOperationsInput | string
    deliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    method: string
    order: OrderCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: number
    amount: number
    orderId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    method: string
  }

  export type PaymentUpdateInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    order?: OrderUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentCreateManyInput = {
    id?: number
    amount: number
    orderId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    method: string
  }

  export type PaymentUpdateManyMutationInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type CustomerListRelationFilter = {
    every?: CustomerWhereInput
    some?: CustomerWhereInput
    none?: CustomerWhereInput
  }

  export type FranchiseListRelationFilter = {
    every?: FranchiseWhereInput
    some?: FranchiseWhereInput
    none?: FranchiseWhereInput
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CustomerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FranchiseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    loginUserId?: SortOrder
    id?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    loginUserId?: SortOrder
    id?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    email?: SortOrder
    password?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    loginUserId?: SortOrder
    id?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type enquiryCountOrderByAggregateInput = {
    enquiryID?: SortOrder
    name?: SortOrder
    ownerEmail?: SortOrder
    ownerName?: SortOrder
    ownerPhone?: SortOrder
    address?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
  }

  export type enquiryAvgOrderByAggregateInput = {
    enquiryID?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
  }

  export type enquiryMaxOrderByAggregateInput = {
    enquiryID?: SortOrder
    name?: SortOrder
    ownerEmail?: SortOrder
    ownerName?: SortOrder
    ownerPhone?: SortOrder
    address?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
  }

  export type enquiryMinOrderByAggregateInput = {
    enquiryID?: SortOrder
    name?: SortOrder
    ownerEmail?: SortOrder
    ownerName?: SortOrder
    ownerPhone?: SortOrder
    address?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
  }

  export type enquirySumOrderByAggregateInput = {
    enquiryID?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
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

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type FranchiseCountOrderByAggregateInput = {
    name?: SortOrder
    code?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isActive?: SortOrder
    ownerEmail?: SortOrder
    ownerName?: SortOrder
    ownerPhone?: SortOrder
    companyProfile?: SortOrder
    companyKyc?: SortOrder
    bankDetails?: SortOrder
    itrDocs?: SortOrder
    id?: SortOrder
    createdBy?: SortOrder
  }

  export type FranchiseAvgOrderByAggregateInput = {
    id?: SortOrder
    createdBy?: SortOrder
  }

  export type FranchiseMaxOrderByAggregateInput = {
    name?: SortOrder
    code?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isActive?: SortOrder
    ownerEmail?: SortOrder
    ownerName?: SortOrder
    ownerPhone?: SortOrder
    companyProfile?: SortOrder
    companyKyc?: SortOrder
    bankDetails?: SortOrder
    itrDocs?: SortOrder
    id?: SortOrder
    createdBy?: SortOrder
  }

  export type FranchiseMinOrderByAggregateInput = {
    name?: SortOrder
    code?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isActive?: SortOrder
    ownerEmail?: SortOrder
    ownerName?: SortOrder
    ownerPhone?: SortOrder
    companyProfile?: SortOrder
    companyKyc?: SortOrder
    bankDetails?: SortOrder
    itrDocs?: SortOrder
    id?: SortOrder
    createdBy?: SortOrder
  }

  export type FranchiseSumOrderByAggregateInput = {
    id?: SortOrder
    createdBy?: SortOrder
  }

  export type FranchiseNullableScalarRelationFilter = {
    is?: FranchiseWhereInput | null
    isNot?: FranchiseWhereInput | null
  }

  export type CustomerCountOrderByAggregateInput = {
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customerType?: SortOrder
    id?: SortOrder
    cusotmerCode?: SortOrder
    franchiseId?: SortOrder
    createdBy?: SortOrder
    employeeId?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    id?: SortOrder
    franchiseId?: SortOrder
    createdBy?: SortOrder
    employeeId?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customerType?: SortOrder
    id?: SortOrder
    cusotmerCode?: SortOrder
    franchiseId?: SortOrder
    createdBy?: SortOrder
    employeeId?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customerType?: SortOrder
    id?: SortOrder
    cusotmerCode?: SortOrder
    franchiseId?: SortOrder
    createdBy?: SortOrder
    employeeId?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    id?: SortOrder
    franchiseId?: SortOrder
    createdBy?: SortOrder
    employeeId?: SortOrder
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

  export type ProductCountOrderByAggregateInput = {
    name?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    size?: SortOrder
    id?: SortOrder
    productCode?: SortOrder
    createdById?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    price?: SortOrder
    stock?: SortOrder
    id?: SortOrder
    createdById?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    name?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    size?: SortOrder
    id?: SortOrder
    productCode?: SortOrder
    createdById?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    name?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    size?: SortOrder
    id?: SortOrder
    productCode?: SortOrder
    createdById?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    price?: SortOrder
    stock?: SortOrder
    id?: SortOrder
    createdById?: SortOrder
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

  export type EnumClimateFilter<$PrismaModel = never> = {
    equals?: $Enums.Climate | EnumClimateFieldRefInput<$PrismaModel>
    in?: $Enums.Climate[] | ListEnumClimateFieldRefInput<$PrismaModel>
    notIn?: $Enums.Climate[] | ListEnumClimateFieldRefInput<$PrismaModel>
    not?: NestedEnumClimateFilter<$PrismaModel> | $Enums.Climate
  }

  export type EnumTerrainFilter<$PrismaModel = never> = {
    equals?: $Enums.Terrain | EnumTerrainFieldRefInput<$PrismaModel>
    in?: $Enums.Terrain[] | ListEnumTerrainFieldRefInput<$PrismaModel>
    notIn?: $Enums.Terrain[] | ListEnumTerrainFieldRefInput<$PrismaModel>
    not?: NestedEnumTerrainFilter<$PrismaModel> | $Enums.Terrain
  }

  export type FactoryNullableScalarRelationFilter = {
    is?: FactoryWhereInput | null
    isNot?: FactoryWhereInput | null
  }

  export type CustomerNullableScalarRelationFilter = {
    is?: CustomerWhereInput | null
    isNot?: CustomerWhereInput | null
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderCountOrderByAggregateInput = {
    orderNumber?: SortOrder
    status?: SortOrder
    expectedDeliveryDate?: SortOrder
    defectedStatus?: SortOrder
    defExpectedDate?: SortOrder
    unitPrice?: SortOrder
    unitPriceCost?: SortOrder
    discountDate?: SortOrder
    discount?: SortOrder
    gstPercentage?: SortOrder
    gstAmount?: SortOrder
    totalAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    climate?: SortOrder
    employeeId?: SortOrder
    createdBy?: SortOrder
    productId?: SortOrder
    terrain?: SortOrder
    id?: SortOrder
    franchiseId?: SortOrder
    customerId?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    defectedStatus?: SortOrder
    unitPrice?: SortOrder
    unitPriceCost?: SortOrder
    discount?: SortOrder
    gstPercentage?: SortOrder
    gstAmount?: SortOrder
    totalAmount?: SortOrder
    employeeId?: SortOrder
    createdBy?: SortOrder
    productId?: SortOrder
    id?: SortOrder
    franchiseId?: SortOrder
    customerId?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    orderNumber?: SortOrder
    status?: SortOrder
    expectedDeliveryDate?: SortOrder
    defectedStatus?: SortOrder
    defExpectedDate?: SortOrder
    unitPrice?: SortOrder
    unitPriceCost?: SortOrder
    discountDate?: SortOrder
    discount?: SortOrder
    gstPercentage?: SortOrder
    gstAmount?: SortOrder
    totalAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    climate?: SortOrder
    employeeId?: SortOrder
    createdBy?: SortOrder
    productId?: SortOrder
    terrain?: SortOrder
    id?: SortOrder
    franchiseId?: SortOrder
    customerId?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    orderNumber?: SortOrder
    status?: SortOrder
    expectedDeliveryDate?: SortOrder
    defectedStatus?: SortOrder
    defExpectedDate?: SortOrder
    unitPrice?: SortOrder
    unitPriceCost?: SortOrder
    discountDate?: SortOrder
    discount?: SortOrder
    gstPercentage?: SortOrder
    gstAmount?: SortOrder
    totalAmount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    climate?: SortOrder
    employeeId?: SortOrder
    createdBy?: SortOrder
    productId?: SortOrder
    terrain?: SortOrder
    id?: SortOrder
    franchiseId?: SortOrder
    customerId?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    defectedStatus?: SortOrder
    unitPrice?: SortOrder
    unitPriceCost?: SortOrder
    discount?: SortOrder
    gstPercentage?: SortOrder
    gstAmount?: SortOrder
    totalAmount?: SortOrder
    employeeId?: SortOrder
    createdBy?: SortOrder
    productId?: SortOrder
    id?: SortOrder
    franchiseId?: SortOrder
    customerId?: SortOrder
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

  export type EnumClimateWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Climate | EnumClimateFieldRefInput<$PrismaModel>
    in?: $Enums.Climate[] | ListEnumClimateFieldRefInput<$PrismaModel>
    notIn?: $Enums.Climate[] | ListEnumClimateFieldRefInput<$PrismaModel>
    not?: NestedEnumClimateWithAggregatesFilter<$PrismaModel> | $Enums.Climate
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumClimateFilter<$PrismaModel>
    _max?: NestedEnumClimateFilter<$PrismaModel>
  }

  export type EnumTerrainWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Terrain | EnumTerrainFieldRefInput<$PrismaModel>
    in?: $Enums.Terrain[] | ListEnumTerrainFieldRefInput<$PrismaModel>
    notIn?: $Enums.Terrain[] | ListEnumTerrainFieldRefInput<$PrismaModel>
    not?: NestedEnumTerrainWithAggregatesFilter<$PrismaModel> | $Enums.Terrain
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTerrainFilter<$PrismaModel>
    _max?: NestedEnumTerrainFilter<$PrismaModel>
  }

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type FactoryCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    orderStatus?: SortOrder
    deliveryDate?: SortOrder
    createdAt?: SortOrder
  }

  export type FactoryAvgOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
  }

  export type FactoryMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    orderStatus?: SortOrder
    deliveryDate?: SortOrder
    createdAt?: SortOrder
  }

  export type FactoryMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    orderStatus?: SortOrder
    deliveryDate?: SortOrder
    createdAt?: SortOrder
  }

  export type FactorySumOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    orderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    method?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    orderId?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    orderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    method?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    orderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    method?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    orderId?: SortOrder
  }

  export type CustomerCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<CustomerCreateWithoutEmployeeInput, CustomerUncheckedCreateWithoutEmployeeInput> | CustomerCreateWithoutEmployeeInput[] | CustomerUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutEmployeeInput | CustomerCreateOrConnectWithoutEmployeeInput[]
    createMany?: CustomerCreateManyEmployeeInputEnvelope
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
  }

  export type FranchiseCreateNestedManyWithoutCreatorInput = {
    create?: XOR<FranchiseCreateWithoutCreatorInput, FranchiseUncheckedCreateWithoutCreatorInput> | FranchiseCreateWithoutCreatorInput[] | FranchiseUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: FranchiseCreateOrConnectWithoutCreatorInput | FranchiseCreateOrConnectWithoutCreatorInput[]
    createMany?: FranchiseCreateManyCreatorInputEnvelope
    connect?: FranchiseWhereUniqueInput | FranchiseWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<OrderCreateWithoutEmployeeInput, OrderUncheckedCreateWithoutEmployeeInput> | OrderCreateWithoutEmployeeInput[] | OrderUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutEmployeeInput | OrderCreateOrConnectWithoutEmployeeInput[]
    createMany?: OrderCreateManyEmployeeInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type ProductCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ProductCreateWithoutCreatedByInput, ProductUncheckedCreateWithoutCreatedByInput> | ProductCreateWithoutCreatedByInput[] | ProductUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCreatedByInput | ProductCreateOrConnectWithoutCreatedByInput[]
    createMany?: ProductCreateManyCreatedByInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutCreatedByUserInput = {
    create?: XOR<OrderCreateWithoutCreatedByUserInput, OrderUncheckedCreateWithoutCreatedByUserInput> | OrderCreateWithoutCreatedByUserInput[] | OrderUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCreatedByUserInput | OrderCreateOrConnectWithoutCreatedByUserInput[]
    createMany?: OrderCreateManyCreatedByUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type CustomerUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<CustomerCreateWithoutEmployeeInput, CustomerUncheckedCreateWithoutEmployeeInput> | CustomerCreateWithoutEmployeeInput[] | CustomerUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutEmployeeInput | CustomerCreateOrConnectWithoutEmployeeInput[]
    createMany?: CustomerCreateManyEmployeeInputEnvelope
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
  }

  export type FranchiseUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<FranchiseCreateWithoutCreatorInput, FranchiseUncheckedCreateWithoutCreatorInput> | FranchiseCreateWithoutCreatorInput[] | FranchiseUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: FranchiseCreateOrConnectWithoutCreatorInput | FranchiseCreateOrConnectWithoutCreatorInput[]
    createMany?: FranchiseCreateManyCreatorInputEnvelope
    connect?: FranchiseWhereUniqueInput | FranchiseWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<OrderCreateWithoutEmployeeInput, OrderUncheckedCreateWithoutEmployeeInput> | OrderCreateWithoutEmployeeInput[] | OrderUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutEmployeeInput | OrderCreateOrConnectWithoutEmployeeInput[]
    createMany?: OrderCreateManyEmployeeInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ProductCreateWithoutCreatedByInput, ProductUncheckedCreateWithoutCreatedByInput> | ProductCreateWithoutCreatedByInput[] | ProductUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCreatedByInput | ProductCreateOrConnectWithoutCreatedByInput[]
    createMany?: ProductCreateManyCreatedByInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutCreatedByUserInput = {
    create?: XOR<OrderCreateWithoutCreatedByUserInput, OrderUncheckedCreateWithoutCreatedByUserInput> | OrderCreateWithoutCreatedByUserInput[] | OrderUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCreatedByUserInput | OrderCreateOrConnectWithoutCreatedByUserInput[]
    createMany?: OrderCreateManyCreatedByUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CustomerUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<CustomerCreateWithoutEmployeeInput, CustomerUncheckedCreateWithoutEmployeeInput> | CustomerCreateWithoutEmployeeInput[] | CustomerUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutEmployeeInput | CustomerCreateOrConnectWithoutEmployeeInput[]
    upsert?: CustomerUpsertWithWhereUniqueWithoutEmployeeInput | CustomerUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: CustomerCreateManyEmployeeInputEnvelope
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    update?: CustomerUpdateWithWhereUniqueWithoutEmployeeInput | CustomerUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: CustomerUpdateManyWithWhereWithoutEmployeeInput | CustomerUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
  }

  export type FranchiseUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<FranchiseCreateWithoutCreatorInput, FranchiseUncheckedCreateWithoutCreatorInput> | FranchiseCreateWithoutCreatorInput[] | FranchiseUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: FranchiseCreateOrConnectWithoutCreatorInput | FranchiseCreateOrConnectWithoutCreatorInput[]
    upsert?: FranchiseUpsertWithWhereUniqueWithoutCreatorInput | FranchiseUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: FranchiseCreateManyCreatorInputEnvelope
    set?: FranchiseWhereUniqueInput | FranchiseWhereUniqueInput[]
    disconnect?: FranchiseWhereUniqueInput | FranchiseWhereUniqueInput[]
    delete?: FranchiseWhereUniqueInput | FranchiseWhereUniqueInput[]
    connect?: FranchiseWhereUniqueInput | FranchiseWhereUniqueInput[]
    update?: FranchiseUpdateWithWhereUniqueWithoutCreatorInput | FranchiseUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: FranchiseUpdateManyWithWhereWithoutCreatorInput | FranchiseUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: FranchiseScalarWhereInput | FranchiseScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<OrderCreateWithoutEmployeeInput, OrderUncheckedCreateWithoutEmployeeInput> | OrderCreateWithoutEmployeeInput[] | OrderUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutEmployeeInput | OrderCreateOrConnectWithoutEmployeeInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutEmployeeInput | OrderUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: OrderCreateManyEmployeeInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutEmployeeInput | OrderUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutEmployeeInput | OrderUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ProductUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ProductCreateWithoutCreatedByInput, ProductUncheckedCreateWithoutCreatedByInput> | ProductCreateWithoutCreatedByInput[] | ProductUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCreatedByInput | ProductCreateOrConnectWithoutCreatedByInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCreatedByInput | ProductUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ProductCreateManyCreatedByInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCreatedByInput | ProductUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCreatedByInput | ProductUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutCreatedByUserNestedInput = {
    create?: XOR<OrderCreateWithoutCreatedByUserInput, OrderUncheckedCreateWithoutCreatedByUserInput> | OrderCreateWithoutCreatedByUserInput[] | OrderUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCreatedByUserInput | OrderCreateOrConnectWithoutCreatedByUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutCreatedByUserInput | OrderUpsertWithWhereUniqueWithoutCreatedByUserInput[]
    createMany?: OrderCreateManyCreatedByUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutCreatedByUserInput | OrderUpdateWithWhereUniqueWithoutCreatedByUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutCreatedByUserInput | OrderUpdateManyWithWhereWithoutCreatedByUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CustomerUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<CustomerCreateWithoutEmployeeInput, CustomerUncheckedCreateWithoutEmployeeInput> | CustomerCreateWithoutEmployeeInput[] | CustomerUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutEmployeeInput | CustomerCreateOrConnectWithoutEmployeeInput[]
    upsert?: CustomerUpsertWithWhereUniqueWithoutEmployeeInput | CustomerUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: CustomerCreateManyEmployeeInputEnvelope
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    update?: CustomerUpdateWithWhereUniqueWithoutEmployeeInput | CustomerUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: CustomerUpdateManyWithWhereWithoutEmployeeInput | CustomerUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
  }

  export type FranchiseUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<FranchiseCreateWithoutCreatorInput, FranchiseUncheckedCreateWithoutCreatorInput> | FranchiseCreateWithoutCreatorInput[] | FranchiseUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: FranchiseCreateOrConnectWithoutCreatorInput | FranchiseCreateOrConnectWithoutCreatorInput[]
    upsert?: FranchiseUpsertWithWhereUniqueWithoutCreatorInput | FranchiseUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: FranchiseCreateManyCreatorInputEnvelope
    set?: FranchiseWhereUniqueInput | FranchiseWhereUniqueInput[]
    disconnect?: FranchiseWhereUniqueInput | FranchiseWhereUniqueInput[]
    delete?: FranchiseWhereUniqueInput | FranchiseWhereUniqueInput[]
    connect?: FranchiseWhereUniqueInput | FranchiseWhereUniqueInput[]
    update?: FranchiseUpdateWithWhereUniqueWithoutCreatorInput | FranchiseUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: FranchiseUpdateManyWithWhereWithoutCreatorInput | FranchiseUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: FranchiseScalarWhereInput | FranchiseScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<OrderCreateWithoutEmployeeInput, OrderUncheckedCreateWithoutEmployeeInput> | OrderCreateWithoutEmployeeInput[] | OrderUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutEmployeeInput | OrderCreateOrConnectWithoutEmployeeInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutEmployeeInput | OrderUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: OrderCreateManyEmployeeInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutEmployeeInput | OrderUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutEmployeeInput | OrderUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ProductCreateWithoutCreatedByInput, ProductUncheckedCreateWithoutCreatedByInput> | ProductCreateWithoutCreatedByInput[] | ProductUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCreatedByInput | ProductCreateOrConnectWithoutCreatedByInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCreatedByInput | ProductUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ProductCreateManyCreatedByInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCreatedByInput | ProductUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCreatedByInput | ProductUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutCreatedByUserNestedInput = {
    create?: XOR<OrderCreateWithoutCreatedByUserInput, OrderUncheckedCreateWithoutCreatedByUserInput> | OrderCreateWithoutCreatedByUserInput[] | OrderUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCreatedByUserInput | OrderCreateOrConnectWithoutCreatedByUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutCreatedByUserInput | OrderUpsertWithWhereUniqueWithoutCreatedByUserInput[]
    createMany?: OrderCreateManyCreatedByUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutCreatedByUserInput | OrderUpdateWithWhereUniqueWithoutCreatedByUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutCreatedByUserInput | OrderUpdateManyWithWhereWithoutCreatedByUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CustomerCreateNestedManyWithoutFranchiseInput = {
    create?: XOR<CustomerCreateWithoutFranchiseInput, CustomerUncheckedCreateWithoutFranchiseInput> | CustomerCreateWithoutFranchiseInput[] | CustomerUncheckedCreateWithoutFranchiseInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutFranchiseInput | CustomerCreateOrConnectWithoutFranchiseInput[]
    createMany?: CustomerCreateManyFranchiseInputEnvelope
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutFranchisesInput = {
    create?: XOR<UserCreateWithoutFranchisesInput, UserUncheckedCreateWithoutFranchisesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFranchisesInput
    connect?: UserWhereUniqueInput
  }

  export type OrderCreateNestedManyWithoutFranchiseInput = {
    create?: XOR<OrderCreateWithoutFranchiseInput, OrderUncheckedCreateWithoutFranchiseInput> | OrderCreateWithoutFranchiseInput[] | OrderUncheckedCreateWithoutFranchiseInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutFranchiseInput | OrderCreateOrConnectWithoutFranchiseInput[]
    createMany?: OrderCreateManyFranchiseInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type CustomerUncheckedCreateNestedManyWithoutFranchiseInput = {
    create?: XOR<CustomerCreateWithoutFranchiseInput, CustomerUncheckedCreateWithoutFranchiseInput> | CustomerCreateWithoutFranchiseInput[] | CustomerUncheckedCreateWithoutFranchiseInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutFranchiseInput | CustomerCreateOrConnectWithoutFranchiseInput[]
    createMany?: CustomerCreateManyFranchiseInputEnvelope
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutFranchiseInput = {
    create?: XOR<OrderCreateWithoutFranchiseInput, OrderUncheckedCreateWithoutFranchiseInput> | OrderCreateWithoutFranchiseInput[] | OrderUncheckedCreateWithoutFranchiseInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutFranchiseInput | OrderCreateOrConnectWithoutFranchiseInput[]
    createMany?: OrderCreateManyFranchiseInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type CustomerUpdateManyWithoutFranchiseNestedInput = {
    create?: XOR<CustomerCreateWithoutFranchiseInput, CustomerUncheckedCreateWithoutFranchiseInput> | CustomerCreateWithoutFranchiseInput[] | CustomerUncheckedCreateWithoutFranchiseInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutFranchiseInput | CustomerCreateOrConnectWithoutFranchiseInput[]
    upsert?: CustomerUpsertWithWhereUniqueWithoutFranchiseInput | CustomerUpsertWithWhereUniqueWithoutFranchiseInput[]
    createMany?: CustomerCreateManyFranchiseInputEnvelope
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    update?: CustomerUpdateWithWhereUniqueWithoutFranchiseInput | CustomerUpdateWithWhereUniqueWithoutFranchiseInput[]
    updateMany?: CustomerUpdateManyWithWhereWithoutFranchiseInput | CustomerUpdateManyWithWhereWithoutFranchiseInput[]
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
  }

  export type UserUpdateOneWithoutFranchisesNestedInput = {
    create?: XOR<UserCreateWithoutFranchisesInput, UserUncheckedCreateWithoutFranchisesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFranchisesInput
    upsert?: UserUpsertWithoutFranchisesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFranchisesInput, UserUpdateWithoutFranchisesInput>, UserUncheckedUpdateWithoutFranchisesInput>
  }

  export type OrderUpdateManyWithoutFranchiseNestedInput = {
    create?: XOR<OrderCreateWithoutFranchiseInput, OrderUncheckedCreateWithoutFranchiseInput> | OrderCreateWithoutFranchiseInput[] | OrderUncheckedCreateWithoutFranchiseInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutFranchiseInput | OrderCreateOrConnectWithoutFranchiseInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutFranchiseInput | OrderUpsertWithWhereUniqueWithoutFranchiseInput[]
    createMany?: OrderCreateManyFranchiseInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutFranchiseInput | OrderUpdateWithWhereUniqueWithoutFranchiseInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutFranchiseInput | OrderUpdateManyWithWhereWithoutFranchiseInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type CustomerUncheckedUpdateManyWithoutFranchiseNestedInput = {
    create?: XOR<CustomerCreateWithoutFranchiseInput, CustomerUncheckedCreateWithoutFranchiseInput> | CustomerCreateWithoutFranchiseInput[] | CustomerUncheckedCreateWithoutFranchiseInput[]
    connectOrCreate?: CustomerCreateOrConnectWithoutFranchiseInput | CustomerCreateOrConnectWithoutFranchiseInput[]
    upsert?: CustomerUpsertWithWhereUniqueWithoutFranchiseInput | CustomerUpsertWithWhereUniqueWithoutFranchiseInput[]
    createMany?: CustomerCreateManyFranchiseInputEnvelope
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[]
    update?: CustomerUpdateWithWhereUniqueWithoutFranchiseInput | CustomerUpdateWithWhereUniqueWithoutFranchiseInput[]
    updateMany?: CustomerUpdateManyWithWhereWithoutFranchiseInput | CustomerUpdateManyWithWhereWithoutFranchiseInput[]
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutFranchiseNestedInput = {
    create?: XOR<OrderCreateWithoutFranchiseInput, OrderUncheckedCreateWithoutFranchiseInput> | OrderCreateWithoutFranchiseInput[] | OrderUncheckedCreateWithoutFranchiseInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutFranchiseInput | OrderCreateOrConnectWithoutFranchiseInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutFranchiseInput | OrderUpsertWithWhereUniqueWithoutFranchiseInput[]
    createMany?: OrderCreateManyFranchiseInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutFranchiseInput | OrderUpdateWithWhereUniqueWithoutFranchiseInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutFranchiseInput | OrderUpdateManyWithWhereWithoutFranchiseInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCustomersInput = {
    create?: XOR<UserCreateWithoutCustomersInput, UserUncheckedCreateWithoutCustomersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCustomersInput
    connect?: UserWhereUniqueInput
  }

  export type FranchiseCreateNestedOneWithoutCustomersInput = {
    create?: XOR<FranchiseCreateWithoutCustomersInput, FranchiseUncheckedCreateWithoutCustomersInput>
    connectOrCreate?: FranchiseCreateOrConnectWithoutCustomersInput
    connect?: FranchiseWhereUniqueInput
  }

  export type OrderCreateNestedManyWithoutCustomerInput = {
    create?: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput> | OrderCreateWithoutCustomerInput[] | OrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput | OrderCreateOrConnectWithoutCustomerInput[]
    createMany?: OrderCreateManyCustomerInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput> | OrderCreateWithoutCustomerInput[] | OrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput | OrderCreateOrConnectWithoutCustomerInput[]
    createMany?: OrderCreateManyCustomerInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutCustomersNestedInput = {
    create?: XOR<UserCreateWithoutCustomersInput, UserUncheckedCreateWithoutCustomersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCustomersInput
    upsert?: UserUpsertWithoutCustomersInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCustomersInput, UserUpdateWithoutCustomersInput>, UserUncheckedUpdateWithoutCustomersInput>
  }

  export type FranchiseUpdateOneWithoutCustomersNestedInput = {
    create?: XOR<FranchiseCreateWithoutCustomersInput, FranchiseUncheckedCreateWithoutCustomersInput>
    connectOrCreate?: FranchiseCreateOrConnectWithoutCustomersInput
    upsert?: FranchiseUpsertWithoutCustomersInput
    disconnect?: FranchiseWhereInput | boolean
    delete?: FranchiseWhereInput | boolean
    connect?: FranchiseWhereUniqueInput
    update?: XOR<XOR<FranchiseUpdateToOneWithWhereWithoutCustomersInput, FranchiseUpdateWithoutCustomersInput>, FranchiseUncheckedUpdateWithoutCustomersInput>
  }

  export type OrderUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput> | OrderCreateWithoutCustomerInput[] | OrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput | OrderCreateOrConnectWithoutCustomerInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutCustomerInput | OrderUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: OrderCreateManyCustomerInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutCustomerInput | OrderUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutCustomerInput | OrderUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput> | OrderCreateWithoutCustomerInput[] | OrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCustomerInput | OrderCreateOrConnectWithoutCustomerInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutCustomerInput | OrderUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: OrderCreateManyCustomerInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutCustomerInput | OrderUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutCustomerInput | OrderUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderCreateWithoutProductInput, OrderUncheckedCreateWithoutProductInput> | OrderCreateWithoutProductInput[] | OrderUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutProductInput | OrderCreateOrConnectWithoutProductInput[]
    createMany?: OrderCreateManyProductInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutProductsInput = {
    create?: XOR<UserCreateWithoutProductsInput, UserUncheckedCreateWithoutProductsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProductsInput
    connect?: UserWhereUniqueInput
  }

  export type OrderUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderCreateWithoutProductInput, OrderUncheckedCreateWithoutProductInput> | OrderCreateWithoutProductInput[] | OrderUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutProductInput | OrderCreateOrConnectWithoutProductInput[]
    createMany?: OrderCreateManyProductInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrderUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderCreateWithoutProductInput, OrderUncheckedCreateWithoutProductInput> | OrderCreateWithoutProductInput[] | OrderUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutProductInput | OrderCreateOrConnectWithoutProductInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutProductInput | OrderUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderCreateManyProductInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutProductInput | OrderUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutProductInput | OrderUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type UserUpdateOneWithoutProductsNestedInput = {
    create?: XOR<UserCreateWithoutProductsInput, UserUncheckedCreateWithoutProductsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProductsInput
    upsert?: UserUpsertWithoutProductsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProductsInput, UserUpdateWithoutProductsInput>, UserUncheckedUpdateWithoutProductsInput>
  }

  export type OrderUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderCreateWithoutProductInput, OrderUncheckedCreateWithoutProductInput> | OrderCreateWithoutProductInput[] | OrderUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutProductInput | OrderCreateOrConnectWithoutProductInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutProductInput | OrderUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderCreateManyProductInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutProductInput | OrderUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutProductInput | OrderUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type FactoryCreateNestedOneWithoutOrderInput = {
    create?: XOR<FactoryCreateWithoutOrderInput, FactoryUncheckedCreateWithoutOrderInput>
    connectOrCreate?: FactoryCreateOrConnectWithoutOrderInput
    connect?: FactoryWhereUniqueInput
  }

  export type CustomerCreateNestedOneWithoutOrdersInput = {
    create?: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutOrdersInput
    connect?: CustomerWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutOrdersPlacedInput = {
    create?: XOR<UserCreateWithoutOrdersPlacedInput, UserUncheckedCreateWithoutOrdersPlacedInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersPlacedInput
    connect?: UserWhereUniqueInput
  }

  export type FranchiseCreateNestedOneWithoutOrdersInput = {
    create?: XOR<FranchiseCreateWithoutOrdersInput, FranchiseUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: FranchiseCreateOrConnectWithoutOrdersInput
    connect?: FranchiseWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutOrdersInput = {
    create?: XOR<ProductCreateWithoutOrdersInput, ProductUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrdersInput
    connect?: ProductWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutOrdersCreatedInput = {
    create?: XOR<UserCreateWithoutOrdersCreatedInput, UserUncheckedCreateWithoutOrdersCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersCreatedInput
    connect?: UserWhereUniqueInput
  }

  export type PaymentCreateNestedManyWithoutOrderInput = {
    create?: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput> | PaymentCreateWithoutOrderInput[] | PaymentUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput | PaymentCreateOrConnectWithoutOrderInput[]
    createMany?: PaymentCreateManyOrderInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type FactoryUncheckedCreateNestedOneWithoutOrderInput = {
    create?: XOR<FactoryCreateWithoutOrderInput, FactoryUncheckedCreateWithoutOrderInput>
    connectOrCreate?: FactoryCreateOrConnectWithoutOrderInput
    connect?: FactoryWhereUniqueInput
  }

  export type PaymentUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput> | PaymentCreateWithoutOrderInput[] | PaymentUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput | PaymentCreateOrConnectWithoutOrderInput[]
    createMany?: PaymentCreateManyOrderInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumClimateFieldUpdateOperationsInput = {
    set?: $Enums.Climate
  }

  export type EnumTerrainFieldUpdateOperationsInput = {
    set?: $Enums.Terrain
  }

  export type FactoryUpdateOneWithoutOrderNestedInput = {
    create?: XOR<FactoryCreateWithoutOrderInput, FactoryUncheckedCreateWithoutOrderInput>
    connectOrCreate?: FactoryCreateOrConnectWithoutOrderInput
    upsert?: FactoryUpsertWithoutOrderInput
    disconnect?: FactoryWhereInput | boolean
    delete?: FactoryWhereInput | boolean
    connect?: FactoryWhereUniqueInput
    update?: XOR<XOR<FactoryUpdateToOneWithWhereWithoutOrderInput, FactoryUpdateWithoutOrderInput>, FactoryUncheckedUpdateWithoutOrderInput>
  }

  export type CustomerUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutOrdersInput
    upsert?: CustomerUpsertWithoutOrdersInput
    disconnect?: CustomerWhereInput | boolean
    delete?: CustomerWhereInput | boolean
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutOrdersInput, CustomerUpdateWithoutOrdersInput>, CustomerUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateOneWithoutOrdersPlacedNestedInput = {
    create?: XOR<UserCreateWithoutOrdersPlacedInput, UserUncheckedCreateWithoutOrdersPlacedInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersPlacedInput
    upsert?: UserUpsertWithoutOrdersPlacedInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersPlacedInput, UserUpdateWithoutOrdersPlacedInput>, UserUncheckedUpdateWithoutOrdersPlacedInput>
  }

  export type FranchiseUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<FranchiseCreateWithoutOrdersInput, FranchiseUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: FranchiseCreateOrConnectWithoutOrdersInput
    upsert?: FranchiseUpsertWithoutOrdersInput
    disconnect?: FranchiseWhereInput | boolean
    delete?: FranchiseWhereInput | boolean
    connect?: FranchiseWhereUniqueInput
    update?: XOR<XOR<FranchiseUpdateToOneWithWhereWithoutOrdersInput, FranchiseUpdateWithoutOrdersInput>, FranchiseUncheckedUpdateWithoutOrdersInput>
  }

  export type ProductUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<ProductCreateWithoutOrdersInput, ProductUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrdersInput
    upsert?: ProductUpsertWithoutOrdersInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutOrdersInput, ProductUpdateWithoutOrdersInput>, ProductUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateOneWithoutOrdersCreatedNestedInput = {
    create?: XOR<UserCreateWithoutOrdersCreatedInput, UserUncheckedCreateWithoutOrdersCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersCreatedInput
    upsert?: UserUpsertWithoutOrdersCreatedInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersCreatedInput, UserUpdateWithoutOrdersCreatedInput>, UserUncheckedUpdateWithoutOrdersCreatedInput>
  }

  export type PaymentUpdateManyWithoutOrderNestedInput = {
    create?: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput> | PaymentCreateWithoutOrderInput[] | PaymentUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput | PaymentCreateOrConnectWithoutOrderInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutOrderInput | PaymentUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: PaymentCreateManyOrderInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutOrderInput | PaymentUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutOrderInput | PaymentUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type FactoryUncheckedUpdateOneWithoutOrderNestedInput = {
    create?: XOR<FactoryCreateWithoutOrderInput, FactoryUncheckedCreateWithoutOrderInput>
    connectOrCreate?: FactoryCreateOrConnectWithoutOrderInput
    upsert?: FactoryUpsertWithoutOrderInput
    disconnect?: FactoryWhereInput | boolean
    delete?: FactoryWhereInput | boolean
    connect?: FactoryWhereUniqueInput
    update?: XOR<XOR<FactoryUpdateToOneWithWhereWithoutOrderInput, FactoryUpdateWithoutOrderInput>, FactoryUncheckedUpdateWithoutOrderInput>
  }

  export type PaymentUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput> | PaymentCreateWithoutOrderInput[] | PaymentUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput | PaymentCreateOrConnectWithoutOrderInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutOrderInput | PaymentUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: PaymentCreateManyOrderInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutOrderInput | PaymentUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutOrderInput | PaymentUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type OrderCreateNestedOneWithoutFactoryInput = {
    create?: XOR<OrderCreateWithoutFactoryInput, OrderUncheckedCreateWithoutFactoryInput>
    connectOrCreate?: OrderCreateOrConnectWithoutFactoryInput
    connect?: OrderWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutFactoryNestedInput = {
    create?: XOR<OrderCreateWithoutFactoryInput, OrderUncheckedCreateWithoutFactoryInput>
    connectOrCreate?: OrderCreateOrConnectWithoutFactoryInput
    upsert?: OrderUpsertWithoutFactoryInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutFactoryInput, OrderUpdateWithoutFactoryInput>, OrderUncheckedUpdateWithoutFactoryInput>
  }

  export type OrderCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<OrderCreateWithoutPaymentsInput, OrderUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutPaymentsInput
    connect?: OrderWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<OrderCreateWithoutPaymentsInput, OrderUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutPaymentsInput
    upsert?: OrderUpsertWithoutPaymentsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutPaymentsInput, OrderUpdateWithoutPaymentsInput>, OrderUncheckedUpdateWithoutPaymentsInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumClimateFilter<$PrismaModel = never> = {
    equals?: $Enums.Climate | EnumClimateFieldRefInput<$PrismaModel>
    in?: $Enums.Climate[] | ListEnumClimateFieldRefInput<$PrismaModel>
    notIn?: $Enums.Climate[] | ListEnumClimateFieldRefInput<$PrismaModel>
    not?: NestedEnumClimateFilter<$PrismaModel> | $Enums.Climate
  }

  export type NestedEnumTerrainFilter<$PrismaModel = never> = {
    equals?: $Enums.Terrain | EnumTerrainFieldRefInput<$PrismaModel>
    in?: $Enums.Terrain[] | ListEnumTerrainFieldRefInput<$PrismaModel>
    notIn?: $Enums.Terrain[] | ListEnumTerrainFieldRefInput<$PrismaModel>
    not?: NestedEnumTerrainFilter<$PrismaModel> | $Enums.Terrain
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

  export type NestedEnumClimateWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Climate | EnumClimateFieldRefInput<$PrismaModel>
    in?: $Enums.Climate[] | ListEnumClimateFieldRefInput<$PrismaModel>
    notIn?: $Enums.Climate[] | ListEnumClimateFieldRefInput<$PrismaModel>
    not?: NestedEnumClimateWithAggregatesFilter<$PrismaModel> | $Enums.Climate
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumClimateFilter<$PrismaModel>
    _max?: NestedEnumClimateFilter<$PrismaModel>
  }

  export type NestedEnumTerrainWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Terrain | EnumTerrainFieldRefInput<$PrismaModel>
    in?: $Enums.Terrain[] | ListEnumTerrainFieldRefInput<$PrismaModel>
    notIn?: $Enums.Terrain[] | ListEnumTerrainFieldRefInput<$PrismaModel>
    not?: NestedEnumTerrainWithAggregatesFilter<$PrismaModel> | $Enums.Terrain
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTerrainFilter<$PrismaModel>
    _max?: NestedEnumTerrainFilter<$PrismaModel>
  }

  export type CustomerCreateWithoutEmployeeInput = {
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customerType?: string | null
    cusotmerCode: string
    createdBy?: number | null
    franchise?: FranchiseCreateNestedOneWithoutCustomersInput
    orders?: OrderCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutEmployeeInput = {
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customerType?: string | null
    id?: number
    cusotmerCode: string
    franchiseId?: number | null
    createdBy?: number | null
    orders?: OrderUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutEmployeeInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutEmployeeInput, CustomerUncheckedCreateWithoutEmployeeInput>
  }

  export type CustomerCreateManyEmployeeInputEnvelope = {
    data: CustomerCreateManyEmployeeInput | CustomerCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type FranchiseCreateWithoutCreatorInput = {
    name: string
    code: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isActive?: boolean
    ownerEmail: string
    ownerName?: string | null
    ownerPhone: string
    companyProfile?: string | null
    companyKyc?: string | null
    bankDetails?: string | null
    itrDocs?: string | null
    customers?: CustomerCreateNestedManyWithoutFranchiseInput
    orders?: OrderCreateNestedManyWithoutFranchiseInput
  }

  export type FranchiseUncheckedCreateWithoutCreatorInput = {
    name: string
    code: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isActive?: boolean
    ownerEmail: string
    ownerName?: string | null
    ownerPhone: string
    companyProfile?: string | null
    companyKyc?: string | null
    bankDetails?: string | null
    itrDocs?: string | null
    id?: number
    customers?: CustomerUncheckedCreateNestedManyWithoutFranchiseInput
    orders?: OrderUncheckedCreateNestedManyWithoutFranchiseInput
  }

  export type FranchiseCreateOrConnectWithoutCreatorInput = {
    where: FranchiseWhereUniqueInput
    create: XOR<FranchiseCreateWithoutCreatorInput, FranchiseUncheckedCreateWithoutCreatorInput>
  }

  export type FranchiseCreateManyCreatorInputEnvelope = {
    data: FranchiseCreateManyCreatorInput | FranchiseCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutEmployeeInput = {
    orderNumber: string
    status?: string
    expectedDeliveryDate?: Date | string | null
    defectedStatus: number
    defExpectedDate?: Date | string
    unitPrice?: number
    unitPriceCost?: number
    discountDate: Date | string
    discount?: number
    gstPercentage?: number
    gstAmount?: number
    totalAmount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    climate: $Enums.Climate
    terrain: $Enums.Terrain
    factory?: FactoryCreateNestedOneWithoutOrderInput
    customer?: CustomerCreateNestedOneWithoutOrdersInput
    franchise?: FranchiseCreateNestedOneWithoutOrdersInput
    product: ProductCreateNestedOneWithoutOrdersInput
    createdByUser?: UserCreateNestedOneWithoutOrdersCreatedInput
    payments?: PaymentCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutEmployeeInput = {
    orderNumber: string
    status?: string
    expectedDeliveryDate?: Date | string | null
    defectedStatus: number
    defExpectedDate?: Date | string
    unitPrice?: number
    unitPriceCost?: number
    discountDate: Date | string
    discount?: number
    gstPercentage?: number
    gstAmount?: number
    totalAmount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    climate: $Enums.Climate
    createdBy?: number | null
    productId: number
    terrain: $Enums.Terrain
    id?: number
    franchiseId?: number | null
    customerId?: number | null
    factory?: FactoryUncheckedCreateNestedOneWithoutOrderInput
    payments?: PaymentUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutEmployeeInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutEmployeeInput, OrderUncheckedCreateWithoutEmployeeInput>
  }

  export type OrderCreateManyEmployeeInputEnvelope = {
    data: OrderCreateManyEmployeeInput | OrderCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type ProductCreateWithoutCreatedByInput = {
    name: string
    price: number
    stock?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    size: string
    productCode: string
    orders?: OrderCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCreatedByInput = {
    name: string
    price: number
    stock?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    size: string
    id?: number
    productCode: string
    orders?: OrderUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCreatedByInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCreatedByInput, ProductUncheckedCreateWithoutCreatedByInput>
  }

  export type ProductCreateManyCreatedByInputEnvelope = {
    data: ProductCreateManyCreatedByInput | ProductCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutCreatedByUserInput = {
    orderNumber: string
    status?: string
    expectedDeliveryDate?: Date | string | null
    defectedStatus: number
    defExpectedDate?: Date | string
    unitPrice?: number
    unitPriceCost?: number
    discountDate: Date | string
    discount?: number
    gstPercentage?: number
    gstAmount?: number
    totalAmount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    climate: $Enums.Climate
    terrain: $Enums.Terrain
    factory?: FactoryCreateNestedOneWithoutOrderInput
    customer?: CustomerCreateNestedOneWithoutOrdersInput
    employee?: UserCreateNestedOneWithoutOrdersPlacedInput
    franchise?: FranchiseCreateNestedOneWithoutOrdersInput
    product: ProductCreateNestedOneWithoutOrdersInput
    payments?: PaymentCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutCreatedByUserInput = {
    orderNumber: string
    status?: string
    expectedDeliveryDate?: Date | string | null
    defectedStatus: number
    defExpectedDate?: Date | string
    unitPrice?: number
    unitPriceCost?: number
    discountDate: Date | string
    discount?: number
    gstPercentage?: number
    gstAmount?: number
    totalAmount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    climate: $Enums.Climate
    employeeId?: number | null
    productId: number
    terrain: $Enums.Terrain
    id?: number
    franchiseId?: number | null
    customerId?: number | null
    factory?: FactoryUncheckedCreateNestedOneWithoutOrderInput
    payments?: PaymentUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutCreatedByUserInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutCreatedByUserInput, OrderUncheckedCreateWithoutCreatedByUserInput>
  }

  export type OrderCreateManyCreatedByUserInputEnvelope = {
    data: OrderCreateManyCreatedByUserInput | OrderCreateManyCreatedByUserInput[]
    skipDuplicates?: boolean
  }

  export type CustomerUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: CustomerWhereUniqueInput
    update: XOR<CustomerUpdateWithoutEmployeeInput, CustomerUncheckedUpdateWithoutEmployeeInput>
    create: XOR<CustomerCreateWithoutEmployeeInput, CustomerUncheckedCreateWithoutEmployeeInput>
  }

  export type CustomerUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: CustomerWhereUniqueInput
    data: XOR<CustomerUpdateWithoutEmployeeInput, CustomerUncheckedUpdateWithoutEmployeeInput>
  }

  export type CustomerUpdateManyWithWhereWithoutEmployeeInput = {
    where: CustomerScalarWhereInput
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type CustomerScalarWhereInput = {
    AND?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
    OR?: CustomerScalarWhereInput[]
    NOT?: CustomerScalarWhereInput | CustomerScalarWhereInput[]
    name?: StringFilter<"Customer"> | string
    email?: StringNullableFilter<"Customer"> | string | null
    phone?: StringNullableFilter<"Customer"> | string | null
    address?: StringNullableFilter<"Customer"> | string | null
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    customerType?: StringNullableFilter<"Customer"> | string | null
    id?: IntFilter<"Customer"> | number
    cusotmerCode?: StringFilter<"Customer"> | string
    franchiseId?: IntNullableFilter<"Customer"> | number | null
    createdBy?: IntNullableFilter<"Customer"> | number | null
    employeeId?: IntNullableFilter<"Customer"> | number | null
  }

  export type FranchiseUpsertWithWhereUniqueWithoutCreatorInput = {
    where: FranchiseWhereUniqueInput
    update: XOR<FranchiseUpdateWithoutCreatorInput, FranchiseUncheckedUpdateWithoutCreatorInput>
    create: XOR<FranchiseCreateWithoutCreatorInput, FranchiseUncheckedCreateWithoutCreatorInput>
  }

  export type FranchiseUpdateWithWhereUniqueWithoutCreatorInput = {
    where: FranchiseWhereUniqueInput
    data: XOR<FranchiseUpdateWithoutCreatorInput, FranchiseUncheckedUpdateWithoutCreatorInput>
  }

  export type FranchiseUpdateManyWithWhereWithoutCreatorInput = {
    where: FranchiseScalarWhereInput
    data: XOR<FranchiseUpdateManyMutationInput, FranchiseUncheckedUpdateManyWithoutCreatorInput>
  }

  export type FranchiseScalarWhereInput = {
    AND?: FranchiseScalarWhereInput | FranchiseScalarWhereInput[]
    OR?: FranchiseScalarWhereInput[]
    NOT?: FranchiseScalarWhereInput | FranchiseScalarWhereInput[]
    name?: StringFilter<"Franchise"> | string
    code?: StringFilter<"Franchise"> | string
    address?: StringNullableFilter<"Franchise"> | string | null
    createdAt?: DateTimeFilter<"Franchise"> | Date | string
    updatedAt?: DateTimeFilter<"Franchise"> | Date | string
    isActive?: BoolFilter<"Franchise"> | boolean
    ownerEmail?: StringFilter<"Franchise"> | string
    ownerName?: StringNullableFilter<"Franchise"> | string | null
    ownerPhone?: StringFilter<"Franchise"> | string
    companyProfile?: StringNullableFilter<"Franchise"> | string | null
    companyKyc?: StringNullableFilter<"Franchise"> | string | null
    bankDetails?: StringNullableFilter<"Franchise"> | string | null
    itrDocs?: StringNullableFilter<"Franchise"> | string | null
    id?: IntFilter<"Franchise"> | number
    createdBy?: IntNullableFilter<"Franchise"> | number | null
  }

  export type OrderUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutEmployeeInput, OrderUncheckedUpdateWithoutEmployeeInput>
    create: XOR<OrderCreateWithoutEmployeeInput, OrderUncheckedCreateWithoutEmployeeInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutEmployeeInput, OrderUncheckedUpdateWithoutEmployeeInput>
  }

  export type OrderUpdateManyWithWhereWithoutEmployeeInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    orderNumber?: StringFilter<"Order"> | string
    status?: StringFilter<"Order"> | string
    expectedDeliveryDate?: DateTimeNullableFilter<"Order"> | Date | string | null
    defectedStatus?: IntFilter<"Order"> | number
    defExpectedDate?: DateTimeFilter<"Order"> | Date | string
    unitPrice?: FloatFilter<"Order"> | number
    unitPriceCost?: FloatFilter<"Order"> | number
    discountDate?: DateTimeFilter<"Order"> | Date | string
    discount?: FloatFilter<"Order"> | number
    gstPercentage?: FloatFilter<"Order"> | number
    gstAmount?: FloatFilter<"Order"> | number
    totalAmount?: FloatFilter<"Order"> | number
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    climate?: EnumClimateFilter<"Order"> | $Enums.Climate
    employeeId?: IntNullableFilter<"Order"> | number | null
    createdBy?: IntNullableFilter<"Order"> | number | null
    productId?: IntFilter<"Order"> | number
    terrain?: EnumTerrainFilter<"Order"> | $Enums.Terrain
    id?: IntFilter<"Order"> | number
    franchiseId?: IntNullableFilter<"Order"> | number | null
    customerId?: IntNullableFilter<"Order"> | number | null
  }

  export type ProductUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCreatedByInput, ProductUncheckedUpdateWithoutCreatedByInput>
    create: XOR<ProductCreateWithoutCreatedByInput, ProductUncheckedCreateWithoutCreatedByInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCreatedByInput, ProductUncheckedUpdateWithoutCreatedByInput>
  }

  export type ProductUpdateManyWithWhereWithoutCreatedByInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    name?: StringFilter<"Product"> | string
    price?: FloatFilter<"Product"> | number
    stock?: IntFilter<"Product"> | number
    isActive?: BoolFilter<"Product"> | boolean
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    size?: StringFilter<"Product"> | string
    id?: IntFilter<"Product"> | number
    productCode?: StringFilter<"Product"> | string
    createdById?: IntNullableFilter<"Product"> | number | null
  }

  export type OrderUpsertWithWhereUniqueWithoutCreatedByUserInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutCreatedByUserInput, OrderUncheckedUpdateWithoutCreatedByUserInput>
    create: XOR<OrderCreateWithoutCreatedByUserInput, OrderUncheckedCreateWithoutCreatedByUserInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutCreatedByUserInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutCreatedByUserInput, OrderUncheckedUpdateWithoutCreatedByUserInput>
  }

  export type OrderUpdateManyWithWhereWithoutCreatedByUserInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutCreatedByUserInput>
  }

  export type CustomerCreateWithoutFranchiseInput = {
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customerType?: string | null
    cusotmerCode: string
    createdBy?: number | null
    employee?: UserCreateNestedOneWithoutCustomersInput
    orders?: OrderCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutFranchiseInput = {
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customerType?: string | null
    id?: number
    cusotmerCode: string
    createdBy?: number | null
    employeeId?: number | null
    orders?: OrderUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutFranchiseInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutFranchiseInput, CustomerUncheckedCreateWithoutFranchiseInput>
  }

  export type CustomerCreateManyFranchiseInputEnvelope = {
    data: CustomerCreateManyFranchiseInput | CustomerCreateManyFranchiseInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutFranchisesInput = {
    email?: string | null
    password?: string | null
    fullName?: string | null
    phone: string
    role: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    loginUserId?: string | null
    customers?: CustomerCreateNestedManyWithoutEmployeeInput
    ordersPlaced?: OrderCreateNestedManyWithoutEmployeeInput
    products?: ProductCreateNestedManyWithoutCreatedByInput
    ordersCreated?: OrderCreateNestedManyWithoutCreatedByUserInput
  }

  export type UserUncheckedCreateWithoutFranchisesInput = {
    email?: string | null
    password?: string | null
    fullName?: string | null
    phone: string
    role: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    loginUserId?: string | null
    id?: number
    customers?: CustomerUncheckedCreateNestedManyWithoutEmployeeInput
    ordersPlaced?: OrderUncheckedCreateNestedManyWithoutEmployeeInput
    products?: ProductUncheckedCreateNestedManyWithoutCreatedByInput
    ordersCreated?: OrderUncheckedCreateNestedManyWithoutCreatedByUserInput
  }

  export type UserCreateOrConnectWithoutFranchisesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFranchisesInput, UserUncheckedCreateWithoutFranchisesInput>
  }

  export type OrderCreateWithoutFranchiseInput = {
    orderNumber: string
    status?: string
    expectedDeliveryDate?: Date | string | null
    defectedStatus: number
    defExpectedDate?: Date | string
    unitPrice?: number
    unitPriceCost?: number
    discountDate: Date | string
    discount?: number
    gstPercentage?: number
    gstAmount?: number
    totalAmount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    climate: $Enums.Climate
    terrain: $Enums.Terrain
    factory?: FactoryCreateNestedOneWithoutOrderInput
    customer?: CustomerCreateNestedOneWithoutOrdersInput
    employee?: UserCreateNestedOneWithoutOrdersPlacedInput
    product: ProductCreateNestedOneWithoutOrdersInput
    createdByUser?: UserCreateNestedOneWithoutOrdersCreatedInput
    payments?: PaymentCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutFranchiseInput = {
    orderNumber: string
    status?: string
    expectedDeliveryDate?: Date | string | null
    defectedStatus: number
    defExpectedDate?: Date | string
    unitPrice?: number
    unitPriceCost?: number
    discountDate: Date | string
    discount?: number
    gstPercentage?: number
    gstAmount?: number
    totalAmount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    climate: $Enums.Climate
    employeeId?: number | null
    createdBy?: number | null
    productId: number
    terrain: $Enums.Terrain
    id?: number
    customerId?: number | null
    factory?: FactoryUncheckedCreateNestedOneWithoutOrderInput
    payments?: PaymentUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutFranchiseInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutFranchiseInput, OrderUncheckedCreateWithoutFranchiseInput>
  }

  export type OrderCreateManyFranchiseInputEnvelope = {
    data: OrderCreateManyFranchiseInput | OrderCreateManyFranchiseInput[]
    skipDuplicates?: boolean
  }

  export type CustomerUpsertWithWhereUniqueWithoutFranchiseInput = {
    where: CustomerWhereUniqueInput
    update: XOR<CustomerUpdateWithoutFranchiseInput, CustomerUncheckedUpdateWithoutFranchiseInput>
    create: XOR<CustomerCreateWithoutFranchiseInput, CustomerUncheckedCreateWithoutFranchiseInput>
  }

  export type CustomerUpdateWithWhereUniqueWithoutFranchiseInput = {
    where: CustomerWhereUniqueInput
    data: XOR<CustomerUpdateWithoutFranchiseInput, CustomerUncheckedUpdateWithoutFranchiseInput>
  }

  export type CustomerUpdateManyWithWhereWithoutFranchiseInput = {
    where: CustomerScalarWhereInput
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyWithoutFranchiseInput>
  }

  export type UserUpsertWithoutFranchisesInput = {
    update: XOR<UserUpdateWithoutFranchisesInput, UserUncheckedUpdateWithoutFranchisesInput>
    create: XOR<UserCreateWithoutFranchisesInput, UserUncheckedCreateWithoutFranchisesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFranchisesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFranchisesInput, UserUncheckedUpdateWithoutFranchisesInput>
  }

  export type UserUpdateWithoutFranchisesInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginUserId?: NullableStringFieldUpdateOperationsInput | string | null
    customers?: CustomerUpdateManyWithoutEmployeeNestedInput
    ordersPlaced?: OrderUpdateManyWithoutEmployeeNestedInput
    products?: ProductUpdateManyWithoutCreatedByNestedInput
    ordersCreated?: OrderUpdateManyWithoutCreatedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFranchisesInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginUserId?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
    customers?: CustomerUncheckedUpdateManyWithoutEmployeeNestedInput
    ordersPlaced?: OrderUncheckedUpdateManyWithoutEmployeeNestedInput
    products?: ProductUncheckedUpdateManyWithoutCreatedByNestedInput
    ordersCreated?: OrderUncheckedUpdateManyWithoutCreatedByUserNestedInput
  }

  export type OrderUpsertWithWhereUniqueWithoutFranchiseInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutFranchiseInput, OrderUncheckedUpdateWithoutFranchiseInput>
    create: XOR<OrderCreateWithoutFranchiseInput, OrderUncheckedCreateWithoutFranchiseInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutFranchiseInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutFranchiseInput, OrderUncheckedUpdateWithoutFranchiseInput>
  }

  export type OrderUpdateManyWithWhereWithoutFranchiseInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutFranchiseInput>
  }

  export type UserCreateWithoutCustomersInput = {
    email?: string | null
    password?: string | null
    fullName?: string | null
    phone: string
    role: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    loginUserId?: string | null
    franchises?: FranchiseCreateNestedManyWithoutCreatorInput
    ordersPlaced?: OrderCreateNestedManyWithoutEmployeeInput
    products?: ProductCreateNestedManyWithoutCreatedByInput
    ordersCreated?: OrderCreateNestedManyWithoutCreatedByUserInput
  }

  export type UserUncheckedCreateWithoutCustomersInput = {
    email?: string | null
    password?: string | null
    fullName?: string | null
    phone: string
    role: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    loginUserId?: string | null
    id?: number
    franchises?: FranchiseUncheckedCreateNestedManyWithoutCreatorInput
    ordersPlaced?: OrderUncheckedCreateNestedManyWithoutEmployeeInput
    products?: ProductUncheckedCreateNestedManyWithoutCreatedByInput
    ordersCreated?: OrderUncheckedCreateNestedManyWithoutCreatedByUserInput
  }

  export type UserCreateOrConnectWithoutCustomersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCustomersInput, UserUncheckedCreateWithoutCustomersInput>
  }

  export type FranchiseCreateWithoutCustomersInput = {
    name: string
    code: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isActive?: boolean
    ownerEmail: string
    ownerName?: string | null
    ownerPhone: string
    companyProfile?: string | null
    companyKyc?: string | null
    bankDetails?: string | null
    itrDocs?: string | null
    creator?: UserCreateNestedOneWithoutFranchisesInput
    orders?: OrderCreateNestedManyWithoutFranchiseInput
  }

  export type FranchiseUncheckedCreateWithoutCustomersInput = {
    name: string
    code: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isActive?: boolean
    ownerEmail: string
    ownerName?: string | null
    ownerPhone: string
    companyProfile?: string | null
    companyKyc?: string | null
    bankDetails?: string | null
    itrDocs?: string | null
    id?: number
    createdBy?: number | null
    orders?: OrderUncheckedCreateNestedManyWithoutFranchiseInput
  }

  export type FranchiseCreateOrConnectWithoutCustomersInput = {
    where: FranchiseWhereUniqueInput
    create: XOR<FranchiseCreateWithoutCustomersInput, FranchiseUncheckedCreateWithoutCustomersInput>
  }

  export type OrderCreateWithoutCustomerInput = {
    orderNumber: string
    status?: string
    expectedDeliveryDate?: Date | string | null
    defectedStatus: number
    defExpectedDate?: Date | string
    unitPrice?: number
    unitPriceCost?: number
    discountDate: Date | string
    discount?: number
    gstPercentage?: number
    gstAmount?: number
    totalAmount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    climate: $Enums.Climate
    terrain: $Enums.Terrain
    factory?: FactoryCreateNestedOneWithoutOrderInput
    employee?: UserCreateNestedOneWithoutOrdersPlacedInput
    franchise?: FranchiseCreateNestedOneWithoutOrdersInput
    product: ProductCreateNestedOneWithoutOrdersInput
    createdByUser?: UserCreateNestedOneWithoutOrdersCreatedInput
    payments?: PaymentCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutCustomerInput = {
    orderNumber: string
    status?: string
    expectedDeliveryDate?: Date | string | null
    defectedStatus: number
    defExpectedDate?: Date | string
    unitPrice?: number
    unitPriceCost?: number
    discountDate: Date | string
    discount?: number
    gstPercentage?: number
    gstAmount?: number
    totalAmount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    climate: $Enums.Climate
    employeeId?: number | null
    createdBy?: number | null
    productId: number
    terrain: $Enums.Terrain
    id?: number
    franchiseId?: number | null
    factory?: FactoryUncheckedCreateNestedOneWithoutOrderInput
    payments?: PaymentUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutCustomerInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput>
  }

  export type OrderCreateManyCustomerInputEnvelope = {
    data: OrderCreateManyCustomerInput | OrderCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCustomersInput = {
    update: XOR<UserUpdateWithoutCustomersInput, UserUncheckedUpdateWithoutCustomersInput>
    create: XOR<UserCreateWithoutCustomersInput, UserUncheckedCreateWithoutCustomersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCustomersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCustomersInput, UserUncheckedUpdateWithoutCustomersInput>
  }

  export type UserUpdateWithoutCustomersInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginUserId?: NullableStringFieldUpdateOperationsInput | string | null
    franchises?: FranchiseUpdateManyWithoutCreatorNestedInput
    ordersPlaced?: OrderUpdateManyWithoutEmployeeNestedInput
    products?: ProductUpdateManyWithoutCreatedByNestedInput
    ordersCreated?: OrderUpdateManyWithoutCreatedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCustomersInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginUserId?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
    franchises?: FranchiseUncheckedUpdateManyWithoutCreatorNestedInput
    ordersPlaced?: OrderUncheckedUpdateManyWithoutEmployeeNestedInput
    products?: ProductUncheckedUpdateManyWithoutCreatedByNestedInput
    ordersCreated?: OrderUncheckedUpdateManyWithoutCreatedByUserNestedInput
  }

  export type FranchiseUpsertWithoutCustomersInput = {
    update: XOR<FranchiseUpdateWithoutCustomersInput, FranchiseUncheckedUpdateWithoutCustomersInput>
    create: XOR<FranchiseCreateWithoutCustomersInput, FranchiseUncheckedCreateWithoutCustomersInput>
    where?: FranchiseWhereInput
  }

  export type FranchiseUpdateToOneWithWhereWithoutCustomersInput = {
    where?: FranchiseWhereInput
    data: XOR<FranchiseUpdateWithoutCustomersInput, FranchiseUncheckedUpdateWithoutCustomersInput>
  }

  export type FranchiseUpdateWithoutCustomersInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    ownerEmail?: StringFieldUpdateOperationsInput | string
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    ownerPhone?: StringFieldUpdateOperationsInput | string
    companyProfile?: NullableStringFieldUpdateOperationsInput | string | null
    companyKyc?: NullableStringFieldUpdateOperationsInput | string | null
    bankDetails?: NullableStringFieldUpdateOperationsInput | string | null
    itrDocs?: NullableStringFieldUpdateOperationsInput | string | null
    creator?: UserUpdateOneWithoutFranchisesNestedInput
    orders?: OrderUpdateManyWithoutFranchiseNestedInput
  }

  export type FranchiseUncheckedUpdateWithoutCustomersInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    ownerEmail?: StringFieldUpdateOperationsInput | string
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    ownerPhone?: StringFieldUpdateOperationsInput | string
    companyProfile?: NullableStringFieldUpdateOperationsInput | string | null
    companyKyc?: NullableStringFieldUpdateOperationsInput | string | null
    bankDetails?: NullableStringFieldUpdateOperationsInput | string | null
    itrDocs?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    orders?: OrderUncheckedUpdateManyWithoutFranchiseNestedInput
  }

  export type OrderUpsertWithWhereUniqueWithoutCustomerInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutCustomerInput, OrderUncheckedUpdateWithoutCustomerInput>
    create: XOR<OrderCreateWithoutCustomerInput, OrderUncheckedCreateWithoutCustomerInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutCustomerInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutCustomerInput, OrderUncheckedUpdateWithoutCustomerInput>
  }

  export type OrderUpdateManyWithWhereWithoutCustomerInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutCustomerInput>
  }

  export type OrderCreateWithoutProductInput = {
    orderNumber: string
    status?: string
    expectedDeliveryDate?: Date | string | null
    defectedStatus: number
    defExpectedDate?: Date | string
    unitPrice?: number
    unitPriceCost?: number
    discountDate: Date | string
    discount?: number
    gstPercentage?: number
    gstAmount?: number
    totalAmount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    climate: $Enums.Climate
    terrain: $Enums.Terrain
    factory?: FactoryCreateNestedOneWithoutOrderInput
    customer?: CustomerCreateNestedOneWithoutOrdersInput
    employee?: UserCreateNestedOneWithoutOrdersPlacedInput
    franchise?: FranchiseCreateNestedOneWithoutOrdersInput
    createdByUser?: UserCreateNestedOneWithoutOrdersCreatedInput
    payments?: PaymentCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutProductInput = {
    orderNumber: string
    status?: string
    expectedDeliveryDate?: Date | string | null
    defectedStatus: number
    defExpectedDate?: Date | string
    unitPrice?: number
    unitPriceCost?: number
    discountDate: Date | string
    discount?: number
    gstPercentage?: number
    gstAmount?: number
    totalAmount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    climate: $Enums.Climate
    employeeId?: number | null
    createdBy?: number | null
    terrain: $Enums.Terrain
    id?: number
    franchiseId?: number | null
    customerId?: number | null
    factory?: FactoryUncheckedCreateNestedOneWithoutOrderInput
    payments?: PaymentUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutProductInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutProductInput, OrderUncheckedCreateWithoutProductInput>
  }

  export type OrderCreateManyProductInputEnvelope = {
    data: OrderCreateManyProductInput | OrderCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutProductsInput = {
    email?: string | null
    password?: string | null
    fullName?: string | null
    phone: string
    role: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    loginUserId?: string | null
    customers?: CustomerCreateNestedManyWithoutEmployeeInput
    franchises?: FranchiseCreateNestedManyWithoutCreatorInput
    ordersPlaced?: OrderCreateNestedManyWithoutEmployeeInput
    ordersCreated?: OrderCreateNestedManyWithoutCreatedByUserInput
  }

  export type UserUncheckedCreateWithoutProductsInput = {
    email?: string | null
    password?: string | null
    fullName?: string | null
    phone: string
    role: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    loginUserId?: string | null
    id?: number
    customers?: CustomerUncheckedCreateNestedManyWithoutEmployeeInput
    franchises?: FranchiseUncheckedCreateNestedManyWithoutCreatorInput
    ordersPlaced?: OrderUncheckedCreateNestedManyWithoutEmployeeInput
    ordersCreated?: OrderUncheckedCreateNestedManyWithoutCreatedByUserInput
  }

  export type UserCreateOrConnectWithoutProductsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProductsInput, UserUncheckedCreateWithoutProductsInput>
  }

  export type OrderUpsertWithWhereUniqueWithoutProductInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutProductInput, OrderUncheckedUpdateWithoutProductInput>
    create: XOR<OrderCreateWithoutProductInput, OrderUncheckedCreateWithoutProductInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutProductInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutProductInput, OrderUncheckedUpdateWithoutProductInput>
  }

  export type OrderUpdateManyWithWhereWithoutProductInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutProductInput>
  }

  export type UserUpsertWithoutProductsInput = {
    update: XOR<UserUpdateWithoutProductsInput, UserUncheckedUpdateWithoutProductsInput>
    create: XOR<UserCreateWithoutProductsInput, UserUncheckedCreateWithoutProductsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProductsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProductsInput, UserUncheckedUpdateWithoutProductsInput>
  }

  export type UserUpdateWithoutProductsInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginUserId?: NullableStringFieldUpdateOperationsInput | string | null
    customers?: CustomerUpdateManyWithoutEmployeeNestedInput
    franchises?: FranchiseUpdateManyWithoutCreatorNestedInput
    ordersPlaced?: OrderUpdateManyWithoutEmployeeNestedInput
    ordersCreated?: OrderUpdateManyWithoutCreatedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProductsInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginUserId?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
    customers?: CustomerUncheckedUpdateManyWithoutEmployeeNestedInput
    franchises?: FranchiseUncheckedUpdateManyWithoutCreatorNestedInput
    ordersPlaced?: OrderUncheckedUpdateManyWithoutEmployeeNestedInput
    ordersCreated?: OrderUncheckedUpdateManyWithoutCreatedByUserNestedInput
  }

  export type FactoryCreateWithoutOrderInput = {
    orderStatus?: string
    deliveryDate?: Date | string | null
    createdAt?: Date | string
  }

  export type FactoryUncheckedCreateWithoutOrderInput = {
    id?: number
    orderStatus?: string
    deliveryDate?: Date | string | null
    createdAt?: Date | string
  }

  export type FactoryCreateOrConnectWithoutOrderInput = {
    where: FactoryWhereUniqueInput
    create: XOR<FactoryCreateWithoutOrderInput, FactoryUncheckedCreateWithoutOrderInput>
  }

  export type CustomerCreateWithoutOrdersInput = {
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customerType?: string | null
    cusotmerCode: string
    createdBy?: number | null
    employee?: UserCreateNestedOneWithoutCustomersInput
    franchise?: FranchiseCreateNestedOneWithoutCustomersInput
  }

  export type CustomerUncheckedCreateWithoutOrdersInput = {
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customerType?: string | null
    id?: number
    cusotmerCode: string
    franchiseId?: number | null
    createdBy?: number | null
    employeeId?: number | null
  }

  export type CustomerCreateOrConnectWithoutOrdersInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
  }

  export type UserCreateWithoutOrdersPlacedInput = {
    email?: string | null
    password?: string | null
    fullName?: string | null
    phone: string
    role: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    loginUserId?: string | null
    customers?: CustomerCreateNestedManyWithoutEmployeeInput
    franchises?: FranchiseCreateNestedManyWithoutCreatorInput
    products?: ProductCreateNestedManyWithoutCreatedByInput
    ordersCreated?: OrderCreateNestedManyWithoutCreatedByUserInput
  }

  export type UserUncheckedCreateWithoutOrdersPlacedInput = {
    email?: string | null
    password?: string | null
    fullName?: string | null
    phone: string
    role: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    loginUserId?: string | null
    id?: number
    customers?: CustomerUncheckedCreateNestedManyWithoutEmployeeInput
    franchises?: FranchiseUncheckedCreateNestedManyWithoutCreatorInput
    products?: ProductUncheckedCreateNestedManyWithoutCreatedByInput
    ordersCreated?: OrderUncheckedCreateNestedManyWithoutCreatedByUserInput
  }

  export type UserCreateOrConnectWithoutOrdersPlacedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersPlacedInput, UserUncheckedCreateWithoutOrdersPlacedInput>
  }

  export type FranchiseCreateWithoutOrdersInput = {
    name: string
    code: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isActive?: boolean
    ownerEmail: string
    ownerName?: string | null
    ownerPhone: string
    companyProfile?: string | null
    companyKyc?: string | null
    bankDetails?: string | null
    itrDocs?: string | null
    customers?: CustomerCreateNestedManyWithoutFranchiseInput
    creator?: UserCreateNestedOneWithoutFranchisesInput
  }

  export type FranchiseUncheckedCreateWithoutOrdersInput = {
    name: string
    code: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isActive?: boolean
    ownerEmail: string
    ownerName?: string | null
    ownerPhone: string
    companyProfile?: string | null
    companyKyc?: string | null
    bankDetails?: string | null
    itrDocs?: string | null
    id?: number
    createdBy?: number | null
    customers?: CustomerUncheckedCreateNestedManyWithoutFranchiseInput
  }

  export type FranchiseCreateOrConnectWithoutOrdersInput = {
    where: FranchiseWhereUniqueInput
    create: XOR<FranchiseCreateWithoutOrdersInput, FranchiseUncheckedCreateWithoutOrdersInput>
  }

  export type ProductCreateWithoutOrdersInput = {
    name: string
    price: number
    stock?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    size: string
    productCode: string
    createdBy?: UserCreateNestedOneWithoutProductsInput
  }

  export type ProductUncheckedCreateWithoutOrdersInput = {
    name: string
    price: number
    stock?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    size: string
    id?: number
    productCode: string
    createdById?: number | null
  }

  export type ProductCreateOrConnectWithoutOrdersInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutOrdersInput, ProductUncheckedCreateWithoutOrdersInput>
  }

  export type UserCreateWithoutOrdersCreatedInput = {
    email?: string | null
    password?: string | null
    fullName?: string | null
    phone: string
    role: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    loginUserId?: string | null
    customers?: CustomerCreateNestedManyWithoutEmployeeInput
    franchises?: FranchiseCreateNestedManyWithoutCreatorInput
    ordersPlaced?: OrderCreateNestedManyWithoutEmployeeInput
    products?: ProductCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutOrdersCreatedInput = {
    email?: string | null
    password?: string | null
    fullName?: string | null
    phone: string
    role: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    loginUserId?: string | null
    id?: number
    customers?: CustomerUncheckedCreateNestedManyWithoutEmployeeInput
    franchises?: FranchiseUncheckedCreateNestedManyWithoutCreatorInput
    ordersPlaced?: OrderUncheckedCreateNestedManyWithoutEmployeeInput
    products?: ProductUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutOrdersCreatedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersCreatedInput, UserUncheckedCreateWithoutOrdersCreatedInput>
  }

  export type PaymentCreateWithoutOrderInput = {
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    method: string
  }

  export type PaymentUncheckedCreateWithoutOrderInput = {
    id?: number
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    method: string
  }

  export type PaymentCreateOrConnectWithoutOrderInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
  }

  export type PaymentCreateManyOrderInputEnvelope = {
    data: PaymentCreateManyOrderInput | PaymentCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type FactoryUpsertWithoutOrderInput = {
    update: XOR<FactoryUpdateWithoutOrderInput, FactoryUncheckedUpdateWithoutOrderInput>
    create: XOR<FactoryCreateWithoutOrderInput, FactoryUncheckedCreateWithoutOrderInput>
    where?: FactoryWhereInput
  }

  export type FactoryUpdateToOneWithWhereWithoutOrderInput = {
    where?: FactoryWhereInput
    data: XOR<FactoryUpdateWithoutOrderInput, FactoryUncheckedUpdateWithoutOrderInput>
  }

  export type FactoryUpdateWithoutOrderInput = {
    orderStatus?: StringFieldUpdateOperationsInput | string
    deliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FactoryUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderStatus?: StringFieldUpdateOperationsInput | string
    deliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUpsertWithoutOrdersInput = {
    update: XOR<CustomerUpdateWithoutOrdersInput, CustomerUncheckedUpdateWithoutOrdersInput>
    create: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutOrdersInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutOrdersInput, CustomerUncheckedUpdateWithoutOrdersInput>
  }

  export type CustomerUpdateWithoutOrdersInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerType?: NullableStringFieldUpdateOperationsInput | string | null
    cusotmerCode?: StringFieldUpdateOperationsInput | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    employee?: UserUpdateOneWithoutCustomersNestedInput
    franchise?: FranchiseUpdateOneWithoutCustomersNestedInput
  }

  export type CustomerUncheckedUpdateWithoutOrdersInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerType?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
    cusotmerCode?: StringFieldUpdateOperationsInput | string
    franchiseId?: NullableIntFieldUpdateOperationsInput | number | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    employeeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserUpsertWithoutOrdersPlacedInput = {
    update: XOR<UserUpdateWithoutOrdersPlacedInput, UserUncheckedUpdateWithoutOrdersPlacedInput>
    create: XOR<UserCreateWithoutOrdersPlacedInput, UserUncheckedCreateWithoutOrdersPlacedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersPlacedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersPlacedInput, UserUncheckedUpdateWithoutOrdersPlacedInput>
  }

  export type UserUpdateWithoutOrdersPlacedInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginUserId?: NullableStringFieldUpdateOperationsInput | string | null
    customers?: CustomerUpdateManyWithoutEmployeeNestedInput
    franchises?: FranchiseUpdateManyWithoutCreatorNestedInput
    products?: ProductUpdateManyWithoutCreatedByNestedInput
    ordersCreated?: OrderUpdateManyWithoutCreatedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrdersPlacedInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginUserId?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
    customers?: CustomerUncheckedUpdateManyWithoutEmployeeNestedInput
    franchises?: FranchiseUncheckedUpdateManyWithoutCreatorNestedInput
    products?: ProductUncheckedUpdateManyWithoutCreatedByNestedInput
    ordersCreated?: OrderUncheckedUpdateManyWithoutCreatedByUserNestedInput
  }

  export type FranchiseUpsertWithoutOrdersInput = {
    update: XOR<FranchiseUpdateWithoutOrdersInput, FranchiseUncheckedUpdateWithoutOrdersInput>
    create: XOR<FranchiseCreateWithoutOrdersInput, FranchiseUncheckedCreateWithoutOrdersInput>
    where?: FranchiseWhereInput
  }

  export type FranchiseUpdateToOneWithWhereWithoutOrdersInput = {
    where?: FranchiseWhereInput
    data: XOR<FranchiseUpdateWithoutOrdersInput, FranchiseUncheckedUpdateWithoutOrdersInput>
  }

  export type FranchiseUpdateWithoutOrdersInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    ownerEmail?: StringFieldUpdateOperationsInput | string
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    ownerPhone?: StringFieldUpdateOperationsInput | string
    companyProfile?: NullableStringFieldUpdateOperationsInput | string | null
    companyKyc?: NullableStringFieldUpdateOperationsInput | string | null
    bankDetails?: NullableStringFieldUpdateOperationsInput | string | null
    itrDocs?: NullableStringFieldUpdateOperationsInput | string | null
    customers?: CustomerUpdateManyWithoutFranchiseNestedInput
    creator?: UserUpdateOneWithoutFranchisesNestedInput
  }

  export type FranchiseUncheckedUpdateWithoutOrdersInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    ownerEmail?: StringFieldUpdateOperationsInput | string
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    ownerPhone?: StringFieldUpdateOperationsInput | string
    companyProfile?: NullableStringFieldUpdateOperationsInput | string | null
    companyKyc?: NullableStringFieldUpdateOperationsInput | string | null
    bankDetails?: NullableStringFieldUpdateOperationsInput | string | null
    itrDocs?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    customers?: CustomerUncheckedUpdateManyWithoutFranchiseNestedInput
  }

  export type ProductUpsertWithoutOrdersInput = {
    update: XOR<ProductUpdateWithoutOrdersInput, ProductUncheckedUpdateWithoutOrdersInput>
    create: XOR<ProductCreateWithoutOrdersInput, ProductUncheckedCreateWithoutOrdersInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutOrdersInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutOrdersInput, ProductUncheckedUpdateWithoutOrdersInput>
  }

  export type ProductUpdateWithoutOrdersInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    size?: StringFieldUpdateOperationsInput | string
    productCode?: StringFieldUpdateOperationsInput | string
    createdBy?: UserUpdateOneWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutOrdersInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    size?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
    productCode?: StringFieldUpdateOperationsInput | string
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserUpsertWithoutOrdersCreatedInput = {
    update: XOR<UserUpdateWithoutOrdersCreatedInput, UserUncheckedUpdateWithoutOrdersCreatedInput>
    create: XOR<UserCreateWithoutOrdersCreatedInput, UserUncheckedCreateWithoutOrdersCreatedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersCreatedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersCreatedInput, UserUncheckedUpdateWithoutOrdersCreatedInput>
  }

  export type UserUpdateWithoutOrdersCreatedInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginUserId?: NullableStringFieldUpdateOperationsInput | string | null
    customers?: CustomerUpdateManyWithoutEmployeeNestedInput
    franchises?: FranchiseUpdateManyWithoutCreatorNestedInput
    ordersPlaced?: OrderUpdateManyWithoutEmployeeNestedInput
    products?: ProductUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutOrdersCreatedInput = {
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginUserId?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
    customers?: CustomerUncheckedUpdateManyWithoutEmployeeNestedInput
    franchises?: FranchiseUncheckedUpdateManyWithoutCreatorNestedInput
    ordersPlaced?: OrderUncheckedUpdateManyWithoutEmployeeNestedInput
    products?: ProductUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type PaymentUpsertWithWhereUniqueWithoutOrderInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutOrderInput, PaymentUncheckedUpdateWithoutOrderInput>
    create: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutOrderInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutOrderInput, PaymentUncheckedUpdateWithoutOrderInput>
  }

  export type PaymentUpdateManyWithWhereWithoutOrderInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutOrderInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: IntFilter<"Payment"> | number
    amount?: FloatFilter<"Payment"> | number
    orderId?: IntFilter<"Payment"> | number
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    status?: StringFilter<"Payment"> | string
    method?: StringFilter<"Payment"> | string
  }

  export type OrderCreateWithoutFactoryInput = {
    orderNumber: string
    status?: string
    expectedDeliveryDate?: Date | string | null
    defectedStatus: number
    defExpectedDate?: Date | string
    unitPrice?: number
    unitPriceCost?: number
    discountDate: Date | string
    discount?: number
    gstPercentage?: number
    gstAmount?: number
    totalAmount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    climate: $Enums.Climate
    terrain: $Enums.Terrain
    customer?: CustomerCreateNestedOneWithoutOrdersInput
    employee?: UserCreateNestedOneWithoutOrdersPlacedInput
    franchise?: FranchiseCreateNestedOneWithoutOrdersInput
    product: ProductCreateNestedOneWithoutOrdersInput
    createdByUser?: UserCreateNestedOneWithoutOrdersCreatedInput
    payments?: PaymentCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutFactoryInput = {
    orderNumber: string
    status?: string
    expectedDeliveryDate?: Date | string | null
    defectedStatus: number
    defExpectedDate?: Date | string
    unitPrice?: number
    unitPriceCost?: number
    discountDate: Date | string
    discount?: number
    gstPercentage?: number
    gstAmount?: number
    totalAmount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    climate: $Enums.Climate
    employeeId?: number | null
    createdBy?: number | null
    productId: number
    terrain: $Enums.Terrain
    id?: number
    franchiseId?: number | null
    customerId?: number | null
    payments?: PaymentUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutFactoryInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutFactoryInput, OrderUncheckedCreateWithoutFactoryInput>
  }

  export type OrderUpsertWithoutFactoryInput = {
    update: XOR<OrderUpdateWithoutFactoryInput, OrderUncheckedUpdateWithoutFactoryInput>
    create: XOR<OrderCreateWithoutFactoryInput, OrderUncheckedCreateWithoutFactoryInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutFactoryInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutFactoryInput, OrderUncheckedUpdateWithoutFactoryInput>
  }

  export type OrderUpdateWithoutFactoryInput = {
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expectedDeliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    defectedStatus?: IntFieldUpdateOperationsInput | number
    defExpectedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    unitPrice?: FloatFieldUpdateOperationsInput | number
    unitPriceCost?: FloatFieldUpdateOperationsInput | number
    discountDate?: DateTimeFieldUpdateOperationsInput | Date | string
    discount?: FloatFieldUpdateOperationsInput | number
    gstPercentage?: FloatFieldUpdateOperationsInput | number
    gstAmount?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    climate?: EnumClimateFieldUpdateOperationsInput | $Enums.Climate
    terrain?: EnumTerrainFieldUpdateOperationsInput | $Enums.Terrain
    customer?: CustomerUpdateOneWithoutOrdersNestedInput
    employee?: UserUpdateOneWithoutOrdersPlacedNestedInput
    franchise?: FranchiseUpdateOneWithoutOrdersNestedInput
    product?: ProductUpdateOneRequiredWithoutOrdersNestedInput
    createdByUser?: UserUpdateOneWithoutOrdersCreatedNestedInput
    payments?: PaymentUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutFactoryInput = {
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expectedDeliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    defectedStatus?: IntFieldUpdateOperationsInput | number
    defExpectedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    unitPrice?: FloatFieldUpdateOperationsInput | number
    unitPriceCost?: FloatFieldUpdateOperationsInput | number
    discountDate?: DateTimeFieldUpdateOperationsInput | Date | string
    discount?: FloatFieldUpdateOperationsInput | number
    gstPercentage?: FloatFieldUpdateOperationsInput | number
    gstAmount?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    climate?: EnumClimateFieldUpdateOperationsInput | $Enums.Climate
    employeeId?: NullableIntFieldUpdateOperationsInput | number | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    productId?: IntFieldUpdateOperationsInput | number
    terrain?: EnumTerrainFieldUpdateOperationsInput | $Enums.Terrain
    id?: IntFieldUpdateOperationsInput | number
    franchiseId?: NullableIntFieldUpdateOperationsInput | number | null
    customerId?: NullableIntFieldUpdateOperationsInput | number | null
    payments?: PaymentUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateWithoutPaymentsInput = {
    orderNumber: string
    status?: string
    expectedDeliveryDate?: Date | string | null
    defectedStatus: number
    defExpectedDate?: Date | string
    unitPrice?: number
    unitPriceCost?: number
    discountDate: Date | string
    discount?: number
    gstPercentage?: number
    gstAmount?: number
    totalAmount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    climate: $Enums.Climate
    terrain: $Enums.Terrain
    factory?: FactoryCreateNestedOneWithoutOrderInput
    customer?: CustomerCreateNestedOneWithoutOrdersInput
    employee?: UserCreateNestedOneWithoutOrdersPlacedInput
    franchise?: FranchiseCreateNestedOneWithoutOrdersInput
    product: ProductCreateNestedOneWithoutOrdersInput
    createdByUser?: UserCreateNestedOneWithoutOrdersCreatedInput
  }

  export type OrderUncheckedCreateWithoutPaymentsInput = {
    orderNumber: string
    status?: string
    expectedDeliveryDate?: Date | string | null
    defectedStatus: number
    defExpectedDate?: Date | string
    unitPrice?: number
    unitPriceCost?: number
    discountDate: Date | string
    discount?: number
    gstPercentage?: number
    gstAmount?: number
    totalAmount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    climate: $Enums.Climate
    employeeId?: number | null
    createdBy?: number | null
    productId: number
    terrain: $Enums.Terrain
    id?: number
    franchiseId?: number | null
    customerId?: number | null
    factory?: FactoryUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutPaymentsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutPaymentsInput, OrderUncheckedCreateWithoutPaymentsInput>
  }

  export type OrderUpsertWithoutPaymentsInput = {
    update: XOR<OrderUpdateWithoutPaymentsInput, OrderUncheckedUpdateWithoutPaymentsInput>
    create: XOR<OrderCreateWithoutPaymentsInput, OrderUncheckedCreateWithoutPaymentsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutPaymentsInput, OrderUncheckedUpdateWithoutPaymentsInput>
  }

  export type OrderUpdateWithoutPaymentsInput = {
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expectedDeliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    defectedStatus?: IntFieldUpdateOperationsInput | number
    defExpectedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    unitPrice?: FloatFieldUpdateOperationsInput | number
    unitPriceCost?: FloatFieldUpdateOperationsInput | number
    discountDate?: DateTimeFieldUpdateOperationsInput | Date | string
    discount?: FloatFieldUpdateOperationsInput | number
    gstPercentage?: FloatFieldUpdateOperationsInput | number
    gstAmount?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    climate?: EnumClimateFieldUpdateOperationsInput | $Enums.Climate
    terrain?: EnumTerrainFieldUpdateOperationsInput | $Enums.Terrain
    factory?: FactoryUpdateOneWithoutOrderNestedInput
    customer?: CustomerUpdateOneWithoutOrdersNestedInput
    employee?: UserUpdateOneWithoutOrdersPlacedNestedInput
    franchise?: FranchiseUpdateOneWithoutOrdersNestedInput
    product?: ProductUpdateOneRequiredWithoutOrdersNestedInput
    createdByUser?: UserUpdateOneWithoutOrdersCreatedNestedInput
  }

  export type OrderUncheckedUpdateWithoutPaymentsInput = {
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expectedDeliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    defectedStatus?: IntFieldUpdateOperationsInput | number
    defExpectedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    unitPrice?: FloatFieldUpdateOperationsInput | number
    unitPriceCost?: FloatFieldUpdateOperationsInput | number
    discountDate?: DateTimeFieldUpdateOperationsInput | Date | string
    discount?: FloatFieldUpdateOperationsInput | number
    gstPercentage?: FloatFieldUpdateOperationsInput | number
    gstAmount?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    climate?: EnumClimateFieldUpdateOperationsInput | $Enums.Climate
    employeeId?: NullableIntFieldUpdateOperationsInput | number | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    productId?: IntFieldUpdateOperationsInput | number
    terrain?: EnumTerrainFieldUpdateOperationsInput | $Enums.Terrain
    id?: IntFieldUpdateOperationsInput | number
    franchiseId?: NullableIntFieldUpdateOperationsInput | number | null
    customerId?: NullableIntFieldUpdateOperationsInput | number | null
    factory?: FactoryUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type CustomerCreateManyEmployeeInput = {
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customerType?: string | null
    id?: number
    cusotmerCode: string
    franchiseId?: number | null
    createdBy?: number | null
  }

  export type FranchiseCreateManyCreatorInput = {
    name: string
    code: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    isActive?: boolean
    ownerEmail: string
    ownerName?: string | null
    ownerPhone: string
    companyProfile?: string | null
    companyKyc?: string | null
    bankDetails?: string | null
    itrDocs?: string | null
    id?: number
  }

  export type OrderCreateManyEmployeeInput = {
    orderNumber: string
    status?: string
    expectedDeliveryDate?: Date | string | null
    defectedStatus: number
    defExpectedDate?: Date | string
    unitPrice?: number
    unitPriceCost?: number
    discountDate: Date | string
    discount?: number
    gstPercentage?: number
    gstAmount?: number
    totalAmount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    climate: $Enums.Climate
    createdBy?: number | null
    productId: number
    terrain: $Enums.Terrain
    id?: number
    franchiseId?: number | null
    customerId?: number | null
  }

  export type ProductCreateManyCreatedByInput = {
    name: string
    price: number
    stock?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    size: string
    id?: number
    productCode: string
  }

  export type OrderCreateManyCreatedByUserInput = {
    orderNumber: string
    status?: string
    expectedDeliveryDate?: Date | string | null
    defectedStatus: number
    defExpectedDate?: Date | string
    unitPrice?: number
    unitPriceCost?: number
    discountDate: Date | string
    discount?: number
    gstPercentage?: number
    gstAmount?: number
    totalAmount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    climate: $Enums.Climate
    employeeId?: number | null
    productId: number
    terrain: $Enums.Terrain
    id?: number
    franchiseId?: number | null
    customerId?: number | null
  }

  export type CustomerUpdateWithoutEmployeeInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerType?: NullableStringFieldUpdateOperationsInput | string | null
    cusotmerCode?: StringFieldUpdateOperationsInput | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    franchise?: FranchiseUpdateOneWithoutCustomersNestedInput
    orders?: OrderUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutEmployeeInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerType?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
    cusotmerCode?: StringFieldUpdateOperationsInput | string
    franchiseId?: NullableIntFieldUpdateOperationsInput | number | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    orders?: OrderUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateManyWithoutEmployeeInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerType?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
    cusotmerCode?: StringFieldUpdateOperationsInput | string
    franchiseId?: NullableIntFieldUpdateOperationsInput | number | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FranchiseUpdateWithoutCreatorInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    ownerEmail?: StringFieldUpdateOperationsInput | string
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    ownerPhone?: StringFieldUpdateOperationsInput | string
    companyProfile?: NullableStringFieldUpdateOperationsInput | string | null
    companyKyc?: NullableStringFieldUpdateOperationsInput | string | null
    bankDetails?: NullableStringFieldUpdateOperationsInput | string | null
    itrDocs?: NullableStringFieldUpdateOperationsInput | string | null
    customers?: CustomerUpdateManyWithoutFranchiseNestedInput
    orders?: OrderUpdateManyWithoutFranchiseNestedInput
  }

  export type FranchiseUncheckedUpdateWithoutCreatorInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    ownerEmail?: StringFieldUpdateOperationsInput | string
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    ownerPhone?: StringFieldUpdateOperationsInput | string
    companyProfile?: NullableStringFieldUpdateOperationsInput | string | null
    companyKyc?: NullableStringFieldUpdateOperationsInput | string | null
    bankDetails?: NullableStringFieldUpdateOperationsInput | string | null
    itrDocs?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
    customers?: CustomerUncheckedUpdateManyWithoutFranchiseNestedInput
    orders?: OrderUncheckedUpdateManyWithoutFranchiseNestedInput
  }

  export type FranchiseUncheckedUpdateManyWithoutCreatorInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    ownerEmail?: StringFieldUpdateOperationsInput | string
    ownerName?: NullableStringFieldUpdateOperationsInput | string | null
    ownerPhone?: StringFieldUpdateOperationsInput | string
    companyProfile?: NullableStringFieldUpdateOperationsInput | string | null
    companyKyc?: NullableStringFieldUpdateOperationsInput | string | null
    bankDetails?: NullableStringFieldUpdateOperationsInput | string | null
    itrDocs?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
  }

  export type OrderUpdateWithoutEmployeeInput = {
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expectedDeliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    defectedStatus?: IntFieldUpdateOperationsInput | number
    defExpectedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    unitPrice?: FloatFieldUpdateOperationsInput | number
    unitPriceCost?: FloatFieldUpdateOperationsInput | number
    discountDate?: DateTimeFieldUpdateOperationsInput | Date | string
    discount?: FloatFieldUpdateOperationsInput | number
    gstPercentage?: FloatFieldUpdateOperationsInput | number
    gstAmount?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    climate?: EnumClimateFieldUpdateOperationsInput | $Enums.Climate
    terrain?: EnumTerrainFieldUpdateOperationsInput | $Enums.Terrain
    factory?: FactoryUpdateOneWithoutOrderNestedInput
    customer?: CustomerUpdateOneWithoutOrdersNestedInput
    franchise?: FranchiseUpdateOneWithoutOrdersNestedInput
    product?: ProductUpdateOneRequiredWithoutOrdersNestedInput
    createdByUser?: UserUpdateOneWithoutOrdersCreatedNestedInput
    payments?: PaymentUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutEmployeeInput = {
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expectedDeliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    defectedStatus?: IntFieldUpdateOperationsInput | number
    defExpectedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    unitPrice?: FloatFieldUpdateOperationsInput | number
    unitPriceCost?: FloatFieldUpdateOperationsInput | number
    discountDate?: DateTimeFieldUpdateOperationsInput | Date | string
    discount?: FloatFieldUpdateOperationsInput | number
    gstPercentage?: FloatFieldUpdateOperationsInput | number
    gstAmount?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    climate?: EnumClimateFieldUpdateOperationsInput | $Enums.Climate
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    productId?: IntFieldUpdateOperationsInput | number
    terrain?: EnumTerrainFieldUpdateOperationsInput | $Enums.Terrain
    id?: IntFieldUpdateOperationsInput | number
    franchiseId?: NullableIntFieldUpdateOperationsInput | number | null
    customerId?: NullableIntFieldUpdateOperationsInput | number | null
    factory?: FactoryUncheckedUpdateOneWithoutOrderNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutEmployeeInput = {
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expectedDeliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    defectedStatus?: IntFieldUpdateOperationsInput | number
    defExpectedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    unitPrice?: FloatFieldUpdateOperationsInput | number
    unitPriceCost?: FloatFieldUpdateOperationsInput | number
    discountDate?: DateTimeFieldUpdateOperationsInput | Date | string
    discount?: FloatFieldUpdateOperationsInput | number
    gstPercentage?: FloatFieldUpdateOperationsInput | number
    gstAmount?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    climate?: EnumClimateFieldUpdateOperationsInput | $Enums.Climate
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    productId?: IntFieldUpdateOperationsInput | number
    terrain?: EnumTerrainFieldUpdateOperationsInput | $Enums.Terrain
    id?: IntFieldUpdateOperationsInput | number
    franchiseId?: NullableIntFieldUpdateOperationsInput | number | null
    customerId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductUpdateWithoutCreatedByInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    size?: StringFieldUpdateOperationsInput | string
    productCode?: StringFieldUpdateOperationsInput | string
    orders?: OrderUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCreatedByInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    size?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
    productCode?: StringFieldUpdateOperationsInput | string
    orders?: OrderUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCreatedByInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    size?: StringFieldUpdateOperationsInput | string
    id?: IntFieldUpdateOperationsInput | number
    productCode?: StringFieldUpdateOperationsInput | string
  }

  export type OrderUpdateWithoutCreatedByUserInput = {
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expectedDeliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    defectedStatus?: IntFieldUpdateOperationsInput | number
    defExpectedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    unitPrice?: FloatFieldUpdateOperationsInput | number
    unitPriceCost?: FloatFieldUpdateOperationsInput | number
    discountDate?: DateTimeFieldUpdateOperationsInput | Date | string
    discount?: FloatFieldUpdateOperationsInput | number
    gstPercentage?: FloatFieldUpdateOperationsInput | number
    gstAmount?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    climate?: EnumClimateFieldUpdateOperationsInput | $Enums.Climate
    terrain?: EnumTerrainFieldUpdateOperationsInput | $Enums.Terrain
    factory?: FactoryUpdateOneWithoutOrderNestedInput
    customer?: CustomerUpdateOneWithoutOrdersNestedInput
    employee?: UserUpdateOneWithoutOrdersPlacedNestedInput
    franchise?: FranchiseUpdateOneWithoutOrdersNestedInput
    product?: ProductUpdateOneRequiredWithoutOrdersNestedInput
    payments?: PaymentUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutCreatedByUserInput = {
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expectedDeliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    defectedStatus?: IntFieldUpdateOperationsInput | number
    defExpectedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    unitPrice?: FloatFieldUpdateOperationsInput | number
    unitPriceCost?: FloatFieldUpdateOperationsInput | number
    discountDate?: DateTimeFieldUpdateOperationsInput | Date | string
    discount?: FloatFieldUpdateOperationsInput | number
    gstPercentage?: FloatFieldUpdateOperationsInput | number
    gstAmount?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    climate?: EnumClimateFieldUpdateOperationsInput | $Enums.Climate
    employeeId?: NullableIntFieldUpdateOperationsInput | number | null
    productId?: IntFieldUpdateOperationsInput | number
    terrain?: EnumTerrainFieldUpdateOperationsInput | $Enums.Terrain
    id?: IntFieldUpdateOperationsInput | number
    franchiseId?: NullableIntFieldUpdateOperationsInput | number | null
    customerId?: NullableIntFieldUpdateOperationsInput | number | null
    factory?: FactoryUncheckedUpdateOneWithoutOrderNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutCreatedByUserInput = {
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expectedDeliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    defectedStatus?: IntFieldUpdateOperationsInput | number
    defExpectedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    unitPrice?: FloatFieldUpdateOperationsInput | number
    unitPriceCost?: FloatFieldUpdateOperationsInput | number
    discountDate?: DateTimeFieldUpdateOperationsInput | Date | string
    discount?: FloatFieldUpdateOperationsInput | number
    gstPercentage?: FloatFieldUpdateOperationsInput | number
    gstAmount?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    climate?: EnumClimateFieldUpdateOperationsInput | $Enums.Climate
    employeeId?: NullableIntFieldUpdateOperationsInput | number | null
    productId?: IntFieldUpdateOperationsInput | number
    terrain?: EnumTerrainFieldUpdateOperationsInput | $Enums.Terrain
    id?: IntFieldUpdateOperationsInput | number
    franchiseId?: NullableIntFieldUpdateOperationsInput | number | null
    customerId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CustomerCreateManyFranchiseInput = {
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    customerType?: string | null
    id?: number
    cusotmerCode: string
    createdBy?: number | null
    employeeId?: number | null
  }

  export type OrderCreateManyFranchiseInput = {
    orderNumber: string
    status?: string
    expectedDeliveryDate?: Date | string | null
    defectedStatus: number
    defExpectedDate?: Date | string
    unitPrice?: number
    unitPriceCost?: number
    discountDate: Date | string
    discount?: number
    gstPercentage?: number
    gstAmount?: number
    totalAmount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    climate: $Enums.Climate
    employeeId?: number | null
    createdBy?: number | null
    productId: number
    terrain: $Enums.Terrain
    id?: number
    customerId?: number | null
  }

  export type CustomerUpdateWithoutFranchiseInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerType?: NullableStringFieldUpdateOperationsInput | string | null
    cusotmerCode?: StringFieldUpdateOperationsInput | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    employee?: UserUpdateOneWithoutCustomersNestedInput
    orders?: OrderUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutFranchiseInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerType?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
    cusotmerCode?: StringFieldUpdateOperationsInput | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    employeeId?: NullableIntFieldUpdateOperationsInput | number | null
    orders?: OrderUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateManyWithoutFranchiseInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerType?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
    cusotmerCode?: StringFieldUpdateOperationsInput | string
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    employeeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OrderUpdateWithoutFranchiseInput = {
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expectedDeliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    defectedStatus?: IntFieldUpdateOperationsInput | number
    defExpectedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    unitPrice?: FloatFieldUpdateOperationsInput | number
    unitPriceCost?: FloatFieldUpdateOperationsInput | number
    discountDate?: DateTimeFieldUpdateOperationsInput | Date | string
    discount?: FloatFieldUpdateOperationsInput | number
    gstPercentage?: FloatFieldUpdateOperationsInput | number
    gstAmount?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    climate?: EnumClimateFieldUpdateOperationsInput | $Enums.Climate
    terrain?: EnumTerrainFieldUpdateOperationsInput | $Enums.Terrain
    factory?: FactoryUpdateOneWithoutOrderNestedInput
    customer?: CustomerUpdateOneWithoutOrdersNestedInput
    employee?: UserUpdateOneWithoutOrdersPlacedNestedInput
    product?: ProductUpdateOneRequiredWithoutOrdersNestedInput
    createdByUser?: UserUpdateOneWithoutOrdersCreatedNestedInput
    payments?: PaymentUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutFranchiseInput = {
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expectedDeliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    defectedStatus?: IntFieldUpdateOperationsInput | number
    defExpectedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    unitPrice?: FloatFieldUpdateOperationsInput | number
    unitPriceCost?: FloatFieldUpdateOperationsInput | number
    discountDate?: DateTimeFieldUpdateOperationsInput | Date | string
    discount?: FloatFieldUpdateOperationsInput | number
    gstPercentage?: FloatFieldUpdateOperationsInput | number
    gstAmount?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    climate?: EnumClimateFieldUpdateOperationsInput | $Enums.Climate
    employeeId?: NullableIntFieldUpdateOperationsInput | number | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    productId?: IntFieldUpdateOperationsInput | number
    terrain?: EnumTerrainFieldUpdateOperationsInput | $Enums.Terrain
    id?: IntFieldUpdateOperationsInput | number
    customerId?: NullableIntFieldUpdateOperationsInput | number | null
    factory?: FactoryUncheckedUpdateOneWithoutOrderNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutFranchiseInput = {
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expectedDeliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    defectedStatus?: IntFieldUpdateOperationsInput | number
    defExpectedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    unitPrice?: FloatFieldUpdateOperationsInput | number
    unitPriceCost?: FloatFieldUpdateOperationsInput | number
    discountDate?: DateTimeFieldUpdateOperationsInput | Date | string
    discount?: FloatFieldUpdateOperationsInput | number
    gstPercentage?: FloatFieldUpdateOperationsInput | number
    gstAmount?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    climate?: EnumClimateFieldUpdateOperationsInput | $Enums.Climate
    employeeId?: NullableIntFieldUpdateOperationsInput | number | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    productId?: IntFieldUpdateOperationsInput | number
    terrain?: EnumTerrainFieldUpdateOperationsInput | $Enums.Terrain
    id?: IntFieldUpdateOperationsInput | number
    customerId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OrderCreateManyCustomerInput = {
    orderNumber: string
    status?: string
    expectedDeliveryDate?: Date | string | null
    defectedStatus: number
    defExpectedDate?: Date | string
    unitPrice?: number
    unitPriceCost?: number
    discountDate: Date | string
    discount?: number
    gstPercentage?: number
    gstAmount?: number
    totalAmount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    climate: $Enums.Climate
    employeeId?: number | null
    createdBy?: number | null
    productId: number
    terrain: $Enums.Terrain
    id?: number
    franchiseId?: number | null
  }

  export type OrderUpdateWithoutCustomerInput = {
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expectedDeliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    defectedStatus?: IntFieldUpdateOperationsInput | number
    defExpectedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    unitPrice?: FloatFieldUpdateOperationsInput | number
    unitPriceCost?: FloatFieldUpdateOperationsInput | number
    discountDate?: DateTimeFieldUpdateOperationsInput | Date | string
    discount?: FloatFieldUpdateOperationsInput | number
    gstPercentage?: FloatFieldUpdateOperationsInput | number
    gstAmount?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    climate?: EnumClimateFieldUpdateOperationsInput | $Enums.Climate
    terrain?: EnumTerrainFieldUpdateOperationsInput | $Enums.Terrain
    factory?: FactoryUpdateOneWithoutOrderNestedInput
    employee?: UserUpdateOneWithoutOrdersPlacedNestedInput
    franchise?: FranchiseUpdateOneWithoutOrdersNestedInput
    product?: ProductUpdateOneRequiredWithoutOrdersNestedInput
    createdByUser?: UserUpdateOneWithoutOrdersCreatedNestedInput
    payments?: PaymentUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutCustomerInput = {
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expectedDeliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    defectedStatus?: IntFieldUpdateOperationsInput | number
    defExpectedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    unitPrice?: FloatFieldUpdateOperationsInput | number
    unitPriceCost?: FloatFieldUpdateOperationsInput | number
    discountDate?: DateTimeFieldUpdateOperationsInput | Date | string
    discount?: FloatFieldUpdateOperationsInput | number
    gstPercentage?: FloatFieldUpdateOperationsInput | number
    gstAmount?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    climate?: EnumClimateFieldUpdateOperationsInput | $Enums.Climate
    employeeId?: NullableIntFieldUpdateOperationsInput | number | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    productId?: IntFieldUpdateOperationsInput | number
    terrain?: EnumTerrainFieldUpdateOperationsInput | $Enums.Terrain
    id?: IntFieldUpdateOperationsInput | number
    franchiseId?: NullableIntFieldUpdateOperationsInput | number | null
    factory?: FactoryUncheckedUpdateOneWithoutOrderNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutCustomerInput = {
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expectedDeliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    defectedStatus?: IntFieldUpdateOperationsInput | number
    defExpectedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    unitPrice?: FloatFieldUpdateOperationsInput | number
    unitPriceCost?: FloatFieldUpdateOperationsInput | number
    discountDate?: DateTimeFieldUpdateOperationsInput | Date | string
    discount?: FloatFieldUpdateOperationsInput | number
    gstPercentage?: FloatFieldUpdateOperationsInput | number
    gstAmount?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    climate?: EnumClimateFieldUpdateOperationsInput | $Enums.Climate
    employeeId?: NullableIntFieldUpdateOperationsInput | number | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    productId?: IntFieldUpdateOperationsInput | number
    terrain?: EnumTerrainFieldUpdateOperationsInput | $Enums.Terrain
    id?: IntFieldUpdateOperationsInput | number
    franchiseId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OrderCreateManyProductInput = {
    orderNumber: string
    status?: string
    expectedDeliveryDate?: Date | string | null
    defectedStatus: number
    defExpectedDate?: Date | string
    unitPrice?: number
    unitPriceCost?: number
    discountDate: Date | string
    discount?: number
    gstPercentage?: number
    gstAmount?: number
    totalAmount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    climate: $Enums.Climate
    employeeId?: number | null
    createdBy?: number | null
    terrain: $Enums.Terrain
    id?: number
    franchiseId?: number | null
    customerId?: number | null
  }

  export type OrderUpdateWithoutProductInput = {
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expectedDeliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    defectedStatus?: IntFieldUpdateOperationsInput | number
    defExpectedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    unitPrice?: FloatFieldUpdateOperationsInput | number
    unitPriceCost?: FloatFieldUpdateOperationsInput | number
    discountDate?: DateTimeFieldUpdateOperationsInput | Date | string
    discount?: FloatFieldUpdateOperationsInput | number
    gstPercentage?: FloatFieldUpdateOperationsInput | number
    gstAmount?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    climate?: EnumClimateFieldUpdateOperationsInput | $Enums.Climate
    terrain?: EnumTerrainFieldUpdateOperationsInput | $Enums.Terrain
    factory?: FactoryUpdateOneWithoutOrderNestedInput
    customer?: CustomerUpdateOneWithoutOrdersNestedInput
    employee?: UserUpdateOneWithoutOrdersPlacedNestedInput
    franchise?: FranchiseUpdateOneWithoutOrdersNestedInput
    createdByUser?: UserUpdateOneWithoutOrdersCreatedNestedInput
    payments?: PaymentUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutProductInput = {
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expectedDeliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    defectedStatus?: IntFieldUpdateOperationsInput | number
    defExpectedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    unitPrice?: FloatFieldUpdateOperationsInput | number
    unitPriceCost?: FloatFieldUpdateOperationsInput | number
    discountDate?: DateTimeFieldUpdateOperationsInput | Date | string
    discount?: FloatFieldUpdateOperationsInput | number
    gstPercentage?: FloatFieldUpdateOperationsInput | number
    gstAmount?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    climate?: EnumClimateFieldUpdateOperationsInput | $Enums.Climate
    employeeId?: NullableIntFieldUpdateOperationsInput | number | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    terrain?: EnumTerrainFieldUpdateOperationsInput | $Enums.Terrain
    id?: IntFieldUpdateOperationsInput | number
    franchiseId?: NullableIntFieldUpdateOperationsInput | number | null
    customerId?: NullableIntFieldUpdateOperationsInput | number | null
    factory?: FactoryUncheckedUpdateOneWithoutOrderNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutProductInput = {
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    expectedDeliveryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    defectedStatus?: IntFieldUpdateOperationsInput | number
    defExpectedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    unitPrice?: FloatFieldUpdateOperationsInput | number
    unitPriceCost?: FloatFieldUpdateOperationsInput | number
    discountDate?: DateTimeFieldUpdateOperationsInput | Date | string
    discount?: FloatFieldUpdateOperationsInput | number
    gstPercentage?: FloatFieldUpdateOperationsInput | number
    gstAmount?: FloatFieldUpdateOperationsInput | number
    totalAmount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    climate?: EnumClimateFieldUpdateOperationsInput | $Enums.Climate
    employeeId?: NullableIntFieldUpdateOperationsInput | number | null
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    terrain?: EnumTerrainFieldUpdateOperationsInput | $Enums.Terrain
    id?: IntFieldUpdateOperationsInput | number
    franchiseId?: NullableIntFieldUpdateOperationsInput | number | null
    customerId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PaymentCreateManyOrderInput = {
    id?: number
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    method: string
  }

  export type PaymentUpdateWithoutOrderInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentUncheckedUpdateManyWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
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