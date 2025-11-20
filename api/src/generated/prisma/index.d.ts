
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
 * Model Funcionario
 * 
 */
export type Funcionario = $Result.DefaultSelection<Prisma.$FuncionarioPayload>
/**
 * Model Hospede
 * 
 */
export type Hospede = $Result.DefaultSelection<Prisma.$HospedePayload>
/**
 * Model TipoQuarto
 * 
 */
export type TipoQuarto = $Result.DefaultSelection<Prisma.$TipoQuartoPayload>
/**
 * Model Quarto
 * 
 */
export type Quarto = $Result.DefaultSelection<Prisma.$QuartoPayload>
/**
 * Model Reserva
 * 
 */
export type Reserva = $Result.DefaultSelection<Prisma.$ReservaPayload>
/**
 * Model Pagamento
 * 
 */
export type Pagamento = $Result.DefaultSelection<Prisma.$PagamentoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  GERENTE: 'GERENTE',
  RECEPCIONISTA: 'RECEPCIONISTA'
};

export type Role = (typeof Role)[keyof typeof Role]


export const StatusQuarto: {
  DISPONIVEL: 'DISPONIVEL',
  OCUPADO: 'OCUPADO',
  LIMPEZA: 'LIMPEZA',
  MANUTENCAO: 'MANUTENCAO'
};

export type StatusQuarto = (typeof StatusQuarto)[keyof typeof StatusQuarto]


export const StatusReserva: {
  PENDENTE: 'PENDENTE',
  CONFIRMADA: 'CONFIRMADA',
  CHECKED_IN: 'CHECKED_IN',
  CHECKED_OUT: 'CHECKED_OUT',
  CANCELADA: 'CANCELADA'
};

export type StatusReserva = (typeof StatusReserva)[keyof typeof StatusReserva]


export const MetodoPagamento: {
  CARTAO: 'CARTAO',
  PIX: 'PIX',
  DINHEIRO: 'DINHEIRO'
};

export type MetodoPagamento = (typeof MetodoPagamento)[keyof typeof MetodoPagamento]


export const StatusPagamento: {
  PENDENTE: 'PENDENTE',
  PAGO: 'PAGO',
  FALHOU: 'FALHOU'
};

export type StatusPagamento = (typeof StatusPagamento)[keyof typeof StatusPagamento]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type StatusQuarto = $Enums.StatusQuarto

export const StatusQuarto: typeof $Enums.StatusQuarto

export type StatusReserva = $Enums.StatusReserva

export const StatusReserva: typeof $Enums.StatusReserva

export type MetodoPagamento = $Enums.MetodoPagamento

export const MetodoPagamento: typeof $Enums.MetodoPagamento

export type StatusPagamento = $Enums.StatusPagamento

export const StatusPagamento: typeof $Enums.StatusPagamento

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Funcionarios
 * const funcionarios = await prisma.funcionario.findMany()
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
   * // Fetch zero or more Funcionarios
   * const funcionarios = await prisma.funcionario.findMany()
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
   * `prisma.funcionario`: Exposes CRUD operations for the **Funcionario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Funcionarios
    * const funcionarios = await prisma.funcionario.findMany()
    * ```
    */
  get funcionario(): Prisma.FuncionarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hospede`: Exposes CRUD operations for the **Hospede** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hospedes
    * const hospedes = await prisma.hospede.findMany()
    * ```
    */
  get hospede(): Prisma.HospedeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tipoQuarto`: Exposes CRUD operations for the **TipoQuarto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TipoQuartos
    * const tipoQuartos = await prisma.tipoQuarto.findMany()
    * ```
    */
  get tipoQuarto(): Prisma.TipoQuartoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quarto`: Exposes CRUD operations for the **Quarto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quartos
    * const quartos = await prisma.quarto.findMany()
    * ```
    */
  get quarto(): Prisma.QuartoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reserva`: Exposes CRUD operations for the **Reserva** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reservas
    * const reservas = await prisma.reserva.findMany()
    * ```
    */
  get reserva(): Prisma.ReservaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pagamento`: Exposes CRUD operations for the **Pagamento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pagamentos
    * const pagamentos = await prisma.pagamento.findMany()
    * ```
    */
  get pagamento(): Prisma.PagamentoDelegate<ExtArgs, ClientOptions>;
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
    Funcionario: 'Funcionario',
    Hospede: 'Hospede',
    TipoQuarto: 'TipoQuarto',
    Quarto: 'Quarto',
    Reserva: 'Reserva',
    Pagamento: 'Pagamento'
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
      modelProps: "funcionario" | "hospede" | "tipoQuarto" | "quarto" | "reserva" | "pagamento"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Funcionario: {
        payload: Prisma.$FuncionarioPayload<ExtArgs>
        fields: Prisma.FuncionarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FuncionarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FuncionarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          findFirst: {
            args: Prisma.FuncionarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FuncionarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          findMany: {
            args: Prisma.FuncionarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>[]
          }
          create: {
            args: Prisma.FuncionarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          createMany: {
            args: Prisma.FuncionarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FuncionarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>[]
          }
          delete: {
            args: Prisma.FuncionarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          update: {
            args: Prisma.FuncionarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          deleteMany: {
            args: Prisma.FuncionarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FuncionarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FuncionarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>[]
          }
          upsert: {
            args: Prisma.FuncionarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionarioPayload>
          }
          aggregate: {
            args: Prisma.FuncionarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFuncionario>
          }
          groupBy: {
            args: Prisma.FuncionarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<FuncionarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.FuncionarioCountArgs<ExtArgs>
            result: $Utils.Optional<FuncionarioCountAggregateOutputType> | number
          }
        }
      }
      Hospede: {
        payload: Prisma.$HospedePayload<ExtArgs>
        fields: Prisma.HospedeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HospedeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospedePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HospedeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospedePayload>
          }
          findFirst: {
            args: Prisma.HospedeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospedePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HospedeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospedePayload>
          }
          findMany: {
            args: Prisma.HospedeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospedePayload>[]
          }
          create: {
            args: Prisma.HospedeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospedePayload>
          }
          createMany: {
            args: Prisma.HospedeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HospedeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospedePayload>[]
          }
          delete: {
            args: Prisma.HospedeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospedePayload>
          }
          update: {
            args: Prisma.HospedeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospedePayload>
          }
          deleteMany: {
            args: Prisma.HospedeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HospedeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HospedeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospedePayload>[]
          }
          upsert: {
            args: Prisma.HospedeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HospedePayload>
          }
          aggregate: {
            args: Prisma.HospedeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHospede>
          }
          groupBy: {
            args: Prisma.HospedeGroupByArgs<ExtArgs>
            result: $Utils.Optional<HospedeGroupByOutputType>[]
          }
          count: {
            args: Prisma.HospedeCountArgs<ExtArgs>
            result: $Utils.Optional<HospedeCountAggregateOutputType> | number
          }
        }
      }
      TipoQuarto: {
        payload: Prisma.$TipoQuartoPayload<ExtArgs>
        fields: Prisma.TipoQuartoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TipoQuartoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoQuartoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TipoQuartoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoQuartoPayload>
          }
          findFirst: {
            args: Prisma.TipoQuartoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoQuartoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TipoQuartoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoQuartoPayload>
          }
          findMany: {
            args: Prisma.TipoQuartoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoQuartoPayload>[]
          }
          create: {
            args: Prisma.TipoQuartoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoQuartoPayload>
          }
          createMany: {
            args: Prisma.TipoQuartoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TipoQuartoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoQuartoPayload>[]
          }
          delete: {
            args: Prisma.TipoQuartoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoQuartoPayload>
          }
          update: {
            args: Prisma.TipoQuartoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoQuartoPayload>
          }
          deleteMany: {
            args: Prisma.TipoQuartoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TipoQuartoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TipoQuartoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoQuartoPayload>[]
          }
          upsert: {
            args: Prisma.TipoQuartoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoQuartoPayload>
          }
          aggregate: {
            args: Prisma.TipoQuartoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipoQuarto>
          }
          groupBy: {
            args: Prisma.TipoQuartoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TipoQuartoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TipoQuartoCountArgs<ExtArgs>
            result: $Utils.Optional<TipoQuartoCountAggregateOutputType> | number
          }
        }
      }
      Quarto: {
        payload: Prisma.$QuartoPayload<ExtArgs>
        fields: Prisma.QuartoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuartoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuartoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuartoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuartoPayload>
          }
          findFirst: {
            args: Prisma.QuartoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuartoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuartoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuartoPayload>
          }
          findMany: {
            args: Prisma.QuartoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuartoPayload>[]
          }
          create: {
            args: Prisma.QuartoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuartoPayload>
          }
          createMany: {
            args: Prisma.QuartoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuartoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuartoPayload>[]
          }
          delete: {
            args: Prisma.QuartoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuartoPayload>
          }
          update: {
            args: Prisma.QuartoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuartoPayload>
          }
          deleteMany: {
            args: Prisma.QuartoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuartoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuartoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuartoPayload>[]
          }
          upsert: {
            args: Prisma.QuartoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuartoPayload>
          }
          aggregate: {
            args: Prisma.QuartoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuarto>
          }
          groupBy: {
            args: Prisma.QuartoGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuartoGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuartoCountArgs<ExtArgs>
            result: $Utils.Optional<QuartoCountAggregateOutputType> | number
          }
        }
      }
      Reserva: {
        payload: Prisma.$ReservaPayload<ExtArgs>
        fields: Prisma.ReservaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReservaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReservaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          findFirst: {
            args: Prisma.ReservaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReservaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          findMany: {
            args: Prisma.ReservaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>[]
          }
          create: {
            args: Prisma.ReservaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          createMany: {
            args: Prisma.ReservaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReservaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>[]
          }
          delete: {
            args: Prisma.ReservaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          update: {
            args: Prisma.ReservaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          deleteMany: {
            args: Prisma.ReservaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReservaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReservaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>[]
          }
          upsert: {
            args: Prisma.ReservaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          aggregate: {
            args: Prisma.ReservaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReserva>
          }
          groupBy: {
            args: Prisma.ReservaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReservaCountArgs<ExtArgs>
            result: $Utils.Optional<ReservaCountAggregateOutputType> | number
          }
        }
      }
      Pagamento: {
        payload: Prisma.$PagamentoPayload<ExtArgs>
        fields: Prisma.PagamentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PagamentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PagamentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>
          }
          findFirst: {
            args: Prisma.PagamentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PagamentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>
          }
          findMany: {
            args: Prisma.PagamentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>[]
          }
          create: {
            args: Prisma.PagamentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>
          }
          createMany: {
            args: Prisma.PagamentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PagamentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>[]
          }
          delete: {
            args: Prisma.PagamentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>
          }
          update: {
            args: Prisma.PagamentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>
          }
          deleteMany: {
            args: Prisma.PagamentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PagamentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PagamentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>[]
          }
          upsert: {
            args: Prisma.PagamentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagamentoPayload>
          }
          aggregate: {
            args: Prisma.PagamentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePagamento>
          }
          groupBy: {
            args: Prisma.PagamentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PagamentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PagamentoCountArgs<ExtArgs>
            result: $Utils.Optional<PagamentoCountAggregateOutputType> | number
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
    funcionario?: FuncionarioOmit
    hospede?: HospedeOmit
    tipoQuarto?: TipoQuartoOmit
    quarto?: QuartoOmit
    reserva?: ReservaOmit
    pagamento?: PagamentoOmit
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
   * Count Type FuncionarioCountOutputType
   */

  export type FuncionarioCountOutputType = {
    reservas: number
  }

  export type FuncionarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservas?: boolean | FuncionarioCountOutputTypeCountReservasArgs
  }

  // Custom InputTypes
  /**
   * FuncionarioCountOutputType without action
   */
  export type FuncionarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuncionarioCountOutputType
     */
    select?: FuncionarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FuncionarioCountOutputType without action
   */
  export type FuncionarioCountOutputTypeCountReservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservaWhereInput
  }


  /**
   * Count Type HospedeCountOutputType
   */

  export type HospedeCountOutputType = {
    reservas: number
  }

  export type HospedeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservas?: boolean | HospedeCountOutputTypeCountReservasArgs
  }

  // Custom InputTypes
  /**
   * HospedeCountOutputType without action
   */
  export type HospedeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HospedeCountOutputType
     */
    select?: HospedeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HospedeCountOutputType without action
   */
  export type HospedeCountOutputTypeCountReservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservaWhereInput
  }


  /**
   * Count Type TipoQuartoCountOutputType
   */

  export type TipoQuartoCountOutputType = {
    quartos: number
  }

  export type TipoQuartoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quartos?: boolean | TipoQuartoCountOutputTypeCountQuartosArgs
  }

  // Custom InputTypes
  /**
   * TipoQuartoCountOutputType without action
   */
  export type TipoQuartoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoQuartoCountOutputType
     */
    select?: TipoQuartoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TipoQuartoCountOutputType without action
   */
  export type TipoQuartoCountOutputTypeCountQuartosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuartoWhereInput
  }


  /**
   * Count Type QuartoCountOutputType
   */

  export type QuartoCountOutputType = {
    reservas: number
  }

  export type QuartoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservas?: boolean | QuartoCountOutputTypeCountReservasArgs
  }

  // Custom InputTypes
  /**
   * QuartoCountOutputType without action
   */
  export type QuartoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuartoCountOutputType
     */
    select?: QuartoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuartoCountOutputType without action
   */
  export type QuartoCountOutputTypeCountReservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Funcionario
   */

  export type AggregateFuncionario = {
    _count: FuncionarioCountAggregateOutputType | null
    _avg: FuncionarioAvgAggregateOutputType | null
    _sum: FuncionarioSumAggregateOutputType | null
    _min: FuncionarioMinAggregateOutputType | null
    _max: FuncionarioMaxAggregateOutputType | null
  }

  export type FuncionarioAvgAggregateOutputType = {
    id: number | null
  }

  export type FuncionarioSumAggregateOutputType = {
    id: number | null
  }

  export type FuncionarioMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type FuncionarioMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type FuncionarioCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    senha: number
    role: number
    createdAt: number
    _all: number
  }


  export type FuncionarioAvgAggregateInputType = {
    id?: true
  }

  export type FuncionarioSumAggregateInputType = {
    id?: true
  }

  export type FuncionarioMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    role?: true
    createdAt?: true
  }

  export type FuncionarioMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    role?: true
    createdAt?: true
  }

  export type FuncionarioCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type FuncionarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Funcionario to aggregate.
     */
    where?: FuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Funcionarios
    **/
    _count?: true | FuncionarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FuncionarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FuncionarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FuncionarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FuncionarioMaxAggregateInputType
  }

  export type GetFuncionarioAggregateType<T extends FuncionarioAggregateArgs> = {
        [P in keyof T & keyof AggregateFuncionario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFuncionario[P]>
      : GetScalarType<T[P], AggregateFuncionario[P]>
  }




  export type FuncionarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FuncionarioWhereInput
    orderBy?: FuncionarioOrderByWithAggregationInput | FuncionarioOrderByWithAggregationInput[]
    by: FuncionarioScalarFieldEnum[] | FuncionarioScalarFieldEnum
    having?: FuncionarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FuncionarioCountAggregateInputType | true
    _avg?: FuncionarioAvgAggregateInputType
    _sum?: FuncionarioSumAggregateInputType
    _min?: FuncionarioMinAggregateInputType
    _max?: FuncionarioMaxAggregateInputType
  }

  export type FuncionarioGroupByOutputType = {
    id: number
    nome: string
    email: string
    senha: string
    role: $Enums.Role
    createdAt: Date
    _count: FuncionarioCountAggregateOutputType | null
    _avg: FuncionarioAvgAggregateOutputType | null
    _sum: FuncionarioSumAggregateOutputType | null
    _min: FuncionarioMinAggregateOutputType | null
    _max: FuncionarioMaxAggregateOutputType | null
  }

  type GetFuncionarioGroupByPayload<T extends FuncionarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FuncionarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FuncionarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FuncionarioGroupByOutputType[P]>
            : GetScalarType<T[P], FuncionarioGroupByOutputType[P]>
        }
      >
    >


  export type FuncionarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    role?: boolean
    createdAt?: boolean
    reservas?: boolean | Funcionario$reservasArgs<ExtArgs>
    _count?: boolean | FuncionarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["funcionario"]>

  export type FuncionarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["funcionario"]>

  export type FuncionarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["funcionario"]>

  export type FuncionarioSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type FuncionarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "senha" | "role" | "createdAt", ExtArgs["result"]["funcionario"]>
  export type FuncionarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservas?: boolean | Funcionario$reservasArgs<ExtArgs>
    _count?: boolean | FuncionarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FuncionarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FuncionarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FuncionarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Funcionario"
    objects: {
      reservas: Prisma.$ReservaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      senha: string
      role: $Enums.Role
      createdAt: Date
    }, ExtArgs["result"]["funcionario"]>
    composites: {}
  }

  type FuncionarioGetPayload<S extends boolean | null | undefined | FuncionarioDefaultArgs> = $Result.GetResult<Prisma.$FuncionarioPayload, S>

  type FuncionarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FuncionarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FuncionarioCountAggregateInputType | true
    }

  export interface FuncionarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Funcionario'], meta: { name: 'Funcionario' } }
    /**
     * Find zero or one Funcionario that matches the filter.
     * @param {FuncionarioFindUniqueArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FuncionarioFindUniqueArgs>(args: SelectSubset<T, FuncionarioFindUniqueArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Funcionario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FuncionarioFindUniqueOrThrowArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FuncionarioFindUniqueOrThrowArgs>(args: SelectSubset<T, FuncionarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Funcionario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioFindFirstArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FuncionarioFindFirstArgs>(args?: SelectSubset<T, FuncionarioFindFirstArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Funcionario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioFindFirstOrThrowArgs} args - Arguments to find a Funcionario
     * @example
     * // Get one Funcionario
     * const funcionario = await prisma.funcionario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FuncionarioFindFirstOrThrowArgs>(args?: SelectSubset<T, FuncionarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Funcionarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Funcionarios
     * const funcionarios = await prisma.funcionario.findMany()
     * 
     * // Get first 10 Funcionarios
     * const funcionarios = await prisma.funcionario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const funcionarioWithIdOnly = await prisma.funcionario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FuncionarioFindManyArgs>(args?: SelectSubset<T, FuncionarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Funcionario.
     * @param {FuncionarioCreateArgs} args - Arguments to create a Funcionario.
     * @example
     * // Create one Funcionario
     * const Funcionario = await prisma.funcionario.create({
     *   data: {
     *     // ... data to create a Funcionario
     *   }
     * })
     * 
     */
    create<T extends FuncionarioCreateArgs>(args: SelectSubset<T, FuncionarioCreateArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Funcionarios.
     * @param {FuncionarioCreateManyArgs} args - Arguments to create many Funcionarios.
     * @example
     * // Create many Funcionarios
     * const funcionario = await prisma.funcionario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FuncionarioCreateManyArgs>(args?: SelectSubset<T, FuncionarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Funcionarios and returns the data saved in the database.
     * @param {FuncionarioCreateManyAndReturnArgs} args - Arguments to create many Funcionarios.
     * @example
     * // Create many Funcionarios
     * const funcionario = await prisma.funcionario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Funcionarios and only return the `id`
     * const funcionarioWithIdOnly = await prisma.funcionario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FuncionarioCreateManyAndReturnArgs>(args?: SelectSubset<T, FuncionarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Funcionario.
     * @param {FuncionarioDeleteArgs} args - Arguments to delete one Funcionario.
     * @example
     * // Delete one Funcionario
     * const Funcionario = await prisma.funcionario.delete({
     *   where: {
     *     // ... filter to delete one Funcionario
     *   }
     * })
     * 
     */
    delete<T extends FuncionarioDeleteArgs>(args: SelectSubset<T, FuncionarioDeleteArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Funcionario.
     * @param {FuncionarioUpdateArgs} args - Arguments to update one Funcionario.
     * @example
     * // Update one Funcionario
     * const funcionario = await prisma.funcionario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FuncionarioUpdateArgs>(args: SelectSubset<T, FuncionarioUpdateArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Funcionarios.
     * @param {FuncionarioDeleteManyArgs} args - Arguments to filter Funcionarios to delete.
     * @example
     * // Delete a few Funcionarios
     * const { count } = await prisma.funcionario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FuncionarioDeleteManyArgs>(args?: SelectSubset<T, FuncionarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Funcionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Funcionarios
     * const funcionario = await prisma.funcionario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FuncionarioUpdateManyArgs>(args: SelectSubset<T, FuncionarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Funcionarios and returns the data updated in the database.
     * @param {FuncionarioUpdateManyAndReturnArgs} args - Arguments to update many Funcionarios.
     * @example
     * // Update many Funcionarios
     * const funcionario = await prisma.funcionario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Funcionarios and only return the `id`
     * const funcionarioWithIdOnly = await prisma.funcionario.updateManyAndReturn({
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
    updateManyAndReturn<T extends FuncionarioUpdateManyAndReturnArgs>(args: SelectSubset<T, FuncionarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Funcionario.
     * @param {FuncionarioUpsertArgs} args - Arguments to update or create a Funcionario.
     * @example
     * // Update or create a Funcionario
     * const funcionario = await prisma.funcionario.upsert({
     *   create: {
     *     // ... data to create a Funcionario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Funcionario we want to update
     *   }
     * })
     */
    upsert<T extends FuncionarioUpsertArgs>(args: SelectSubset<T, FuncionarioUpsertArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Funcionarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioCountArgs} args - Arguments to filter Funcionarios to count.
     * @example
     * // Count the number of Funcionarios
     * const count = await prisma.funcionario.count({
     *   where: {
     *     // ... the filter for the Funcionarios we want to count
     *   }
     * })
    **/
    count<T extends FuncionarioCountArgs>(
      args?: Subset<T, FuncionarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FuncionarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Funcionario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FuncionarioAggregateArgs>(args: Subset<T, FuncionarioAggregateArgs>): Prisma.PrismaPromise<GetFuncionarioAggregateType<T>>

    /**
     * Group by Funcionario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionarioGroupByArgs} args - Group by arguments.
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
      T extends FuncionarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FuncionarioGroupByArgs['orderBy'] }
        : { orderBy?: FuncionarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FuncionarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFuncionarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Funcionario model
   */
  readonly fields: FuncionarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Funcionario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FuncionarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservas<T extends Funcionario$reservasArgs<ExtArgs> = {}>(args?: Subset<T, Funcionario$reservasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Funcionario model
   */
  interface FuncionarioFieldRefs {
    readonly id: FieldRef<"Funcionario", 'Int'>
    readonly nome: FieldRef<"Funcionario", 'String'>
    readonly email: FieldRef<"Funcionario", 'String'>
    readonly senha: FieldRef<"Funcionario", 'String'>
    readonly role: FieldRef<"Funcionario", 'Role'>
    readonly createdAt: FieldRef<"Funcionario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Funcionario findUnique
   */
  export type FuncionarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which Funcionario to fetch.
     */
    where: FuncionarioWhereUniqueInput
  }

  /**
   * Funcionario findUniqueOrThrow
   */
  export type FuncionarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which Funcionario to fetch.
     */
    where: FuncionarioWhereUniqueInput
  }

  /**
   * Funcionario findFirst
   */
  export type FuncionarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which Funcionario to fetch.
     */
    where?: FuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Funcionarios.
     */
    cursor?: FuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Funcionarios.
     */
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }

  /**
   * Funcionario findFirstOrThrow
   */
  export type FuncionarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which Funcionario to fetch.
     */
    where?: FuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Funcionarios.
     */
    cursor?: FuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Funcionarios.
     */
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }

  /**
   * Funcionario findMany
   */
  export type FuncionarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter, which Funcionarios to fetch.
     */
    where?: FuncionarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcionarios to fetch.
     */
    orderBy?: FuncionarioOrderByWithRelationInput | FuncionarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Funcionarios.
     */
    cursor?: FuncionarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcionarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcionarios.
     */
    skip?: number
    distinct?: FuncionarioScalarFieldEnum | FuncionarioScalarFieldEnum[]
  }

  /**
   * Funcionario create
   */
  export type FuncionarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Funcionario.
     */
    data: XOR<FuncionarioCreateInput, FuncionarioUncheckedCreateInput>
  }

  /**
   * Funcionario createMany
   */
  export type FuncionarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Funcionarios.
     */
    data: FuncionarioCreateManyInput | FuncionarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Funcionario createManyAndReturn
   */
  export type FuncionarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * The data used to create many Funcionarios.
     */
    data: FuncionarioCreateManyInput | FuncionarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Funcionario update
   */
  export type FuncionarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Funcionario.
     */
    data: XOR<FuncionarioUpdateInput, FuncionarioUncheckedUpdateInput>
    /**
     * Choose, which Funcionario to update.
     */
    where: FuncionarioWhereUniqueInput
  }

  /**
   * Funcionario updateMany
   */
  export type FuncionarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Funcionarios.
     */
    data: XOR<FuncionarioUpdateManyMutationInput, FuncionarioUncheckedUpdateManyInput>
    /**
     * Filter which Funcionarios to update
     */
    where?: FuncionarioWhereInput
    /**
     * Limit how many Funcionarios to update.
     */
    limit?: number
  }

  /**
   * Funcionario updateManyAndReturn
   */
  export type FuncionarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * The data used to update Funcionarios.
     */
    data: XOR<FuncionarioUpdateManyMutationInput, FuncionarioUncheckedUpdateManyInput>
    /**
     * Filter which Funcionarios to update
     */
    where?: FuncionarioWhereInput
    /**
     * Limit how many Funcionarios to update.
     */
    limit?: number
  }

  /**
   * Funcionario upsert
   */
  export type FuncionarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Funcionario to update in case it exists.
     */
    where: FuncionarioWhereUniqueInput
    /**
     * In case the Funcionario found by the `where` argument doesn't exist, create a new Funcionario with this data.
     */
    create: XOR<FuncionarioCreateInput, FuncionarioUncheckedCreateInput>
    /**
     * In case the Funcionario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FuncionarioUpdateInput, FuncionarioUncheckedUpdateInput>
  }

  /**
   * Funcionario delete
   */
  export type FuncionarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    /**
     * Filter which Funcionario to delete.
     */
    where: FuncionarioWhereUniqueInput
  }

  /**
   * Funcionario deleteMany
   */
  export type FuncionarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Funcionarios to delete
     */
    where?: FuncionarioWhereInput
    /**
     * Limit how many Funcionarios to delete.
     */
    limit?: number
  }

  /**
   * Funcionario.reservas
   */
  export type Funcionario$reservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    where?: ReservaWhereInput
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    cursor?: ReservaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * Funcionario without action
   */
  export type FuncionarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
  }


  /**
   * Model Hospede
   */

  export type AggregateHospede = {
    _count: HospedeCountAggregateOutputType | null
    _avg: HospedeAvgAggregateOutputType | null
    _sum: HospedeSumAggregateOutputType | null
    _min: HospedeMinAggregateOutputType | null
    _max: HospedeMaxAggregateOutputType | null
  }

  export type HospedeAvgAggregateOutputType = {
    id: number | null
  }

  export type HospedeSumAggregateOutputType = {
    id: number | null
  }

  export type HospedeMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    telefone: string | null
    documento: string | null
    createdAt: Date | null
  }

  export type HospedeMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    telefone: string | null
    documento: string | null
    createdAt: Date | null
  }

  export type HospedeCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    telefone: number
    documento: number
    createdAt: number
    _all: number
  }


  export type HospedeAvgAggregateInputType = {
    id?: true
  }

  export type HospedeSumAggregateInputType = {
    id?: true
  }

  export type HospedeMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    documento?: true
    createdAt?: true
  }

  export type HospedeMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    documento?: true
    createdAt?: true
  }

  export type HospedeCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    documento?: true
    createdAt?: true
    _all?: true
  }

  export type HospedeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hospede to aggregate.
     */
    where?: HospedeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hospedes to fetch.
     */
    orderBy?: HospedeOrderByWithRelationInput | HospedeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HospedeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hospedes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hospedes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hospedes
    **/
    _count?: true | HospedeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HospedeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HospedeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HospedeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HospedeMaxAggregateInputType
  }

  export type GetHospedeAggregateType<T extends HospedeAggregateArgs> = {
        [P in keyof T & keyof AggregateHospede]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHospede[P]>
      : GetScalarType<T[P], AggregateHospede[P]>
  }




  export type HospedeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HospedeWhereInput
    orderBy?: HospedeOrderByWithAggregationInput | HospedeOrderByWithAggregationInput[]
    by: HospedeScalarFieldEnum[] | HospedeScalarFieldEnum
    having?: HospedeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HospedeCountAggregateInputType | true
    _avg?: HospedeAvgAggregateInputType
    _sum?: HospedeSumAggregateInputType
    _min?: HospedeMinAggregateInputType
    _max?: HospedeMaxAggregateInputType
  }

  export type HospedeGroupByOutputType = {
    id: number
    nome: string
    email: string | null
    telefone: string | null
    documento: string | null
    createdAt: Date
    _count: HospedeCountAggregateOutputType | null
    _avg: HospedeAvgAggregateOutputType | null
    _sum: HospedeSumAggregateOutputType | null
    _min: HospedeMinAggregateOutputType | null
    _max: HospedeMaxAggregateOutputType | null
  }

  type GetHospedeGroupByPayload<T extends HospedeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HospedeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HospedeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HospedeGroupByOutputType[P]>
            : GetScalarType<T[P], HospedeGroupByOutputType[P]>
        }
      >
    >


  export type HospedeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    documento?: boolean
    createdAt?: boolean
    reservas?: boolean | Hospede$reservasArgs<ExtArgs>
    _count?: boolean | HospedeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hospede"]>

  export type HospedeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    documento?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["hospede"]>

  export type HospedeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    documento?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["hospede"]>

  export type HospedeSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    documento?: boolean
    createdAt?: boolean
  }

  export type HospedeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "telefone" | "documento" | "createdAt", ExtArgs["result"]["hospede"]>
  export type HospedeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservas?: boolean | Hospede$reservasArgs<ExtArgs>
    _count?: boolean | HospedeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HospedeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type HospedeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $HospedePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hospede"
    objects: {
      reservas: Prisma.$ReservaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string | null
      telefone: string | null
      documento: string | null
      createdAt: Date
    }, ExtArgs["result"]["hospede"]>
    composites: {}
  }

  type HospedeGetPayload<S extends boolean | null | undefined | HospedeDefaultArgs> = $Result.GetResult<Prisma.$HospedePayload, S>

  type HospedeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HospedeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HospedeCountAggregateInputType | true
    }

  export interface HospedeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hospede'], meta: { name: 'Hospede' } }
    /**
     * Find zero or one Hospede that matches the filter.
     * @param {HospedeFindUniqueArgs} args - Arguments to find a Hospede
     * @example
     * // Get one Hospede
     * const hospede = await prisma.hospede.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HospedeFindUniqueArgs>(args: SelectSubset<T, HospedeFindUniqueArgs<ExtArgs>>): Prisma__HospedeClient<$Result.GetResult<Prisma.$HospedePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hospede that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HospedeFindUniqueOrThrowArgs} args - Arguments to find a Hospede
     * @example
     * // Get one Hospede
     * const hospede = await prisma.hospede.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HospedeFindUniqueOrThrowArgs>(args: SelectSubset<T, HospedeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HospedeClient<$Result.GetResult<Prisma.$HospedePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hospede that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospedeFindFirstArgs} args - Arguments to find a Hospede
     * @example
     * // Get one Hospede
     * const hospede = await prisma.hospede.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HospedeFindFirstArgs>(args?: SelectSubset<T, HospedeFindFirstArgs<ExtArgs>>): Prisma__HospedeClient<$Result.GetResult<Prisma.$HospedePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hospede that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospedeFindFirstOrThrowArgs} args - Arguments to find a Hospede
     * @example
     * // Get one Hospede
     * const hospede = await prisma.hospede.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HospedeFindFirstOrThrowArgs>(args?: SelectSubset<T, HospedeFindFirstOrThrowArgs<ExtArgs>>): Prisma__HospedeClient<$Result.GetResult<Prisma.$HospedePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hospedes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospedeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hospedes
     * const hospedes = await prisma.hospede.findMany()
     * 
     * // Get first 10 Hospedes
     * const hospedes = await prisma.hospede.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hospedeWithIdOnly = await prisma.hospede.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HospedeFindManyArgs>(args?: SelectSubset<T, HospedeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HospedePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hospede.
     * @param {HospedeCreateArgs} args - Arguments to create a Hospede.
     * @example
     * // Create one Hospede
     * const Hospede = await prisma.hospede.create({
     *   data: {
     *     // ... data to create a Hospede
     *   }
     * })
     * 
     */
    create<T extends HospedeCreateArgs>(args: SelectSubset<T, HospedeCreateArgs<ExtArgs>>): Prisma__HospedeClient<$Result.GetResult<Prisma.$HospedePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hospedes.
     * @param {HospedeCreateManyArgs} args - Arguments to create many Hospedes.
     * @example
     * // Create many Hospedes
     * const hospede = await prisma.hospede.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HospedeCreateManyArgs>(args?: SelectSubset<T, HospedeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Hospedes and returns the data saved in the database.
     * @param {HospedeCreateManyAndReturnArgs} args - Arguments to create many Hospedes.
     * @example
     * // Create many Hospedes
     * const hospede = await prisma.hospede.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Hospedes and only return the `id`
     * const hospedeWithIdOnly = await prisma.hospede.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HospedeCreateManyAndReturnArgs>(args?: SelectSubset<T, HospedeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HospedePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hospede.
     * @param {HospedeDeleteArgs} args - Arguments to delete one Hospede.
     * @example
     * // Delete one Hospede
     * const Hospede = await prisma.hospede.delete({
     *   where: {
     *     // ... filter to delete one Hospede
     *   }
     * })
     * 
     */
    delete<T extends HospedeDeleteArgs>(args: SelectSubset<T, HospedeDeleteArgs<ExtArgs>>): Prisma__HospedeClient<$Result.GetResult<Prisma.$HospedePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hospede.
     * @param {HospedeUpdateArgs} args - Arguments to update one Hospede.
     * @example
     * // Update one Hospede
     * const hospede = await prisma.hospede.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HospedeUpdateArgs>(args: SelectSubset<T, HospedeUpdateArgs<ExtArgs>>): Prisma__HospedeClient<$Result.GetResult<Prisma.$HospedePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hospedes.
     * @param {HospedeDeleteManyArgs} args - Arguments to filter Hospedes to delete.
     * @example
     * // Delete a few Hospedes
     * const { count } = await prisma.hospede.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HospedeDeleteManyArgs>(args?: SelectSubset<T, HospedeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hospedes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospedeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hospedes
     * const hospede = await prisma.hospede.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HospedeUpdateManyArgs>(args: SelectSubset<T, HospedeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hospedes and returns the data updated in the database.
     * @param {HospedeUpdateManyAndReturnArgs} args - Arguments to update many Hospedes.
     * @example
     * // Update many Hospedes
     * const hospede = await prisma.hospede.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Hospedes and only return the `id`
     * const hospedeWithIdOnly = await prisma.hospede.updateManyAndReturn({
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
    updateManyAndReturn<T extends HospedeUpdateManyAndReturnArgs>(args: SelectSubset<T, HospedeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HospedePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hospede.
     * @param {HospedeUpsertArgs} args - Arguments to update or create a Hospede.
     * @example
     * // Update or create a Hospede
     * const hospede = await prisma.hospede.upsert({
     *   create: {
     *     // ... data to create a Hospede
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hospede we want to update
     *   }
     * })
     */
    upsert<T extends HospedeUpsertArgs>(args: SelectSubset<T, HospedeUpsertArgs<ExtArgs>>): Prisma__HospedeClient<$Result.GetResult<Prisma.$HospedePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hospedes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospedeCountArgs} args - Arguments to filter Hospedes to count.
     * @example
     * // Count the number of Hospedes
     * const count = await prisma.hospede.count({
     *   where: {
     *     // ... the filter for the Hospedes we want to count
     *   }
     * })
    **/
    count<T extends HospedeCountArgs>(
      args?: Subset<T, HospedeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HospedeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hospede.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospedeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HospedeAggregateArgs>(args: Subset<T, HospedeAggregateArgs>): Prisma.PrismaPromise<GetHospedeAggregateType<T>>

    /**
     * Group by Hospede.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HospedeGroupByArgs} args - Group by arguments.
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
      T extends HospedeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HospedeGroupByArgs['orderBy'] }
        : { orderBy?: HospedeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HospedeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHospedeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hospede model
   */
  readonly fields: HospedeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hospede.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HospedeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservas<T extends Hospede$reservasArgs<ExtArgs> = {}>(args?: Subset<T, Hospede$reservasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Hospede model
   */
  interface HospedeFieldRefs {
    readonly id: FieldRef<"Hospede", 'Int'>
    readonly nome: FieldRef<"Hospede", 'String'>
    readonly email: FieldRef<"Hospede", 'String'>
    readonly telefone: FieldRef<"Hospede", 'String'>
    readonly documento: FieldRef<"Hospede", 'String'>
    readonly createdAt: FieldRef<"Hospede", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Hospede findUnique
   */
  export type HospedeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospede
     */
    select?: HospedeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospede
     */
    omit?: HospedeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospedeInclude<ExtArgs> | null
    /**
     * Filter, which Hospede to fetch.
     */
    where: HospedeWhereUniqueInput
  }

  /**
   * Hospede findUniqueOrThrow
   */
  export type HospedeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospede
     */
    select?: HospedeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospede
     */
    omit?: HospedeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospedeInclude<ExtArgs> | null
    /**
     * Filter, which Hospede to fetch.
     */
    where: HospedeWhereUniqueInput
  }

  /**
   * Hospede findFirst
   */
  export type HospedeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospede
     */
    select?: HospedeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospede
     */
    omit?: HospedeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospedeInclude<ExtArgs> | null
    /**
     * Filter, which Hospede to fetch.
     */
    where?: HospedeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hospedes to fetch.
     */
    orderBy?: HospedeOrderByWithRelationInput | HospedeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hospedes.
     */
    cursor?: HospedeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hospedes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hospedes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hospedes.
     */
    distinct?: HospedeScalarFieldEnum | HospedeScalarFieldEnum[]
  }

  /**
   * Hospede findFirstOrThrow
   */
  export type HospedeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospede
     */
    select?: HospedeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospede
     */
    omit?: HospedeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospedeInclude<ExtArgs> | null
    /**
     * Filter, which Hospede to fetch.
     */
    where?: HospedeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hospedes to fetch.
     */
    orderBy?: HospedeOrderByWithRelationInput | HospedeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hospedes.
     */
    cursor?: HospedeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hospedes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hospedes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hospedes.
     */
    distinct?: HospedeScalarFieldEnum | HospedeScalarFieldEnum[]
  }

  /**
   * Hospede findMany
   */
  export type HospedeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospede
     */
    select?: HospedeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospede
     */
    omit?: HospedeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospedeInclude<ExtArgs> | null
    /**
     * Filter, which Hospedes to fetch.
     */
    where?: HospedeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hospedes to fetch.
     */
    orderBy?: HospedeOrderByWithRelationInput | HospedeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hospedes.
     */
    cursor?: HospedeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hospedes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hospedes.
     */
    skip?: number
    distinct?: HospedeScalarFieldEnum | HospedeScalarFieldEnum[]
  }

  /**
   * Hospede create
   */
  export type HospedeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospede
     */
    select?: HospedeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospede
     */
    omit?: HospedeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospedeInclude<ExtArgs> | null
    /**
     * The data needed to create a Hospede.
     */
    data: XOR<HospedeCreateInput, HospedeUncheckedCreateInput>
  }

  /**
   * Hospede createMany
   */
  export type HospedeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Hospedes.
     */
    data: HospedeCreateManyInput | HospedeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hospede createManyAndReturn
   */
  export type HospedeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospede
     */
    select?: HospedeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hospede
     */
    omit?: HospedeOmit<ExtArgs> | null
    /**
     * The data used to create many Hospedes.
     */
    data: HospedeCreateManyInput | HospedeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hospede update
   */
  export type HospedeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospede
     */
    select?: HospedeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospede
     */
    omit?: HospedeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospedeInclude<ExtArgs> | null
    /**
     * The data needed to update a Hospede.
     */
    data: XOR<HospedeUpdateInput, HospedeUncheckedUpdateInput>
    /**
     * Choose, which Hospede to update.
     */
    where: HospedeWhereUniqueInput
  }

  /**
   * Hospede updateMany
   */
  export type HospedeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Hospedes.
     */
    data: XOR<HospedeUpdateManyMutationInput, HospedeUncheckedUpdateManyInput>
    /**
     * Filter which Hospedes to update
     */
    where?: HospedeWhereInput
    /**
     * Limit how many Hospedes to update.
     */
    limit?: number
  }

  /**
   * Hospede updateManyAndReturn
   */
  export type HospedeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospede
     */
    select?: HospedeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hospede
     */
    omit?: HospedeOmit<ExtArgs> | null
    /**
     * The data used to update Hospedes.
     */
    data: XOR<HospedeUpdateManyMutationInput, HospedeUncheckedUpdateManyInput>
    /**
     * Filter which Hospedes to update
     */
    where?: HospedeWhereInput
    /**
     * Limit how many Hospedes to update.
     */
    limit?: number
  }

  /**
   * Hospede upsert
   */
  export type HospedeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospede
     */
    select?: HospedeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospede
     */
    omit?: HospedeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospedeInclude<ExtArgs> | null
    /**
     * The filter to search for the Hospede to update in case it exists.
     */
    where: HospedeWhereUniqueInput
    /**
     * In case the Hospede found by the `where` argument doesn't exist, create a new Hospede with this data.
     */
    create: XOR<HospedeCreateInput, HospedeUncheckedCreateInput>
    /**
     * In case the Hospede was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HospedeUpdateInput, HospedeUncheckedUpdateInput>
  }

  /**
   * Hospede delete
   */
  export type HospedeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospede
     */
    select?: HospedeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospede
     */
    omit?: HospedeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospedeInclude<ExtArgs> | null
    /**
     * Filter which Hospede to delete.
     */
    where: HospedeWhereUniqueInput
  }

  /**
   * Hospede deleteMany
   */
  export type HospedeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hospedes to delete
     */
    where?: HospedeWhereInput
    /**
     * Limit how many Hospedes to delete.
     */
    limit?: number
  }

  /**
   * Hospede.reservas
   */
  export type Hospede$reservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    where?: ReservaWhereInput
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    cursor?: ReservaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * Hospede without action
   */
  export type HospedeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospede
     */
    select?: HospedeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hospede
     */
    omit?: HospedeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HospedeInclude<ExtArgs> | null
  }


  /**
   * Model TipoQuarto
   */

  export type AggregateTipoQuarto = {
    _count: TipoQuartoCountAggregateOutputType | null
    _avg: TipoQuartoAvgAggregateOutputType | null
    _sum: TipoQuartoSumAggregateOutputType | null
    _min: TipoQuartoMinAggregateOutputType | null
    _max: TipoQuartoMaxAggregateOutputType | null
  }

  export type TipoQuartoAvgAggregateOutputType = {
    id: number | null
    capacidade: number | null
    precoBase: number | null
  }

  export type TipoQuartoSumAggregateOutputType = {
    id: number | null
    capacidade: number | null
    precoBase: number | null
  }

  export type TipoQuartoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    capacidade: number | null
    precoBase: number | null
  }

  export type TipoQuartoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    capacidade: number | null
    precoBase: number | null
  }

  export type TipoQuartoCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    capacidade: number
    precoBase: number
    _all: number
  }


  export type TipoQuartoAvgAggregateInputType = {
    id?: true
    capacidade?: true
    precoBase?: true
  }

  export type TipoQuartoSumAggregateInputType = {
    id?: true
    capacidade?: true
    precoBase?: true
  }

  export type TipoQuartoMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    capacidade?: true
    precoBase?: true
  }

  export type TipoQuartoMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    capacidade?: true
    precoBase?: true
  }

  export type TipoQuartoCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    capacidade?: true
    precoBase?: true
    _all?: true
  }

  export type TipoQuartoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoQuarto to aggregate.
     */
    where?: TipoQuartoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoQuartos to fetch.
     */
    orderBy?: TipoQuartoOrderByWithRelationInput | TipoQuartoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TipoQuartoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoQuartos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoQuartos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TipoQuartos
    **/
    _count?: true | TipoQuartoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TipoQuartoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TipoQuartoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TipoQuartoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TipoQuartoMaxAggregateInputType
  }

  export type GetTipoQuartoAggregateType<T extends TipoQuartoAggregateArgs> = {
        [P in keyof T & keyof AggregateTipoQuarto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipoQuarto[P]>
      : GetScalarType<T[P], AggregateTipoQuarto[P]>
  }




  export type TipoQuartoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TipoQuartoWhereInput
    orderBy?: TipoQuartoOrderByWithAggregationInput | TipoQuartoOrderByWithAggregationInput[]
    by: TipoQuartoScalarFieldEnum[] | TipoQuartoScalarFieldEnum
    having?: TipoQuartoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TipoQuartoCountAggregateInputType | true
    _avg?: TipoQuartoAvgAggregateInputType
    _sum?: TipoQuartoSumAggregateInputType
    _min?: TipoQuartoMinAggregateInputType
    _max?: TipoQuartoMaxAggregateInputType
  }

  export type TipoQuartoGroupByOutputType = {
    id: number
    nome: string
    descricao: string | null
    capacidade: number
    precoBase: number
    _count: TipoQuartoCountAggregateOutputType | null
    _avg: TipoQuartoAvgAggregateOutputType | null
    _sum: TipoQuartoSumAggregateOutputType | null
    _min: TipoQuartoMinAggregateOutputType | null
    _max: TipoQuartoMaxAggregateOutputType | null
  }

  type GetTipoQuartoGroupByPayload<T extends TipoQuartoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TipoQuartoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TipoQuartoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TipoQuartoGroupByOutputType[P]>
            : GetScalarType<T[P], TipoQuartoGroupByOutputType[P]>
        }
      >
    >


  export type TipoQuartoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    capacidade?: boolean
    precoBase?: boolean
    quartos?: boolean | TipoQuarto$quartosArgs<ExtArgs>
    _count?: boolean | TipoQuartoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipoQuarto"]>

  export type TipoQuartoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    capacidade?: boolean
    precoBase?: boolean
  }, ExtArgs["result"]["tipoQuarto"]>

  export type TipoQuartoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    capacidade?: boolean
    precoBase?: boolean
  }, ExtArgs["result"]["tipoQuarto"]>

  export type TipoQuartoSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    capacidade?: boolean
    precoBase?: boolean
  }

  export type TipoQuartoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao" | "capacidade" | "precoBase", ExtArgs["result"]["tipoQuarto"]>
  export type TipoQuartoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quartos?: boolean | TipoQuarto$quartosArgs<ExtArgs>
    _count?: boolean | TipoQuartoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TipoQuartoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TipoQuartoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TipoQuartoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TipoQuarto"
    objects: {
      quartos: Prisma.$QuartoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      descricao: string | null
      capacidade: number
      precoBase: number
    }, ExtArgs["result"]["tipoQuarto"]>
    composites: {}
  }

  type TipoQuartoGetPayload<S extends boolean | null | undefined | TipoQuartoDefaultArgs> = $Result.GetResult<Prisma.$TipoQuartoPayload, S>

  type TipoQuartoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TipoQuartoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TipoQuartoCountAggregateInputType | true
    }

  export interface TipoQuartoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TipoQuarto'], meta: { name: 'TipoQuarto' } }
    /**
     * Find zero or one TipoQuarto that matches the filter.
     * @param {TipoQuartoFindUniqueArgs} args - Arguments to find a TipoQuarto
     * @example
     * // Get one TipoQuarto
     * const tipoQuarto = await prisma.tipoQuarto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TipoQuartoFindUniqueArgs>(args: SelectSubset<T, TipoQuartoFindUniqueArgs<ExtArgs>>): Prisma__TipoQuartoClient<$Result.GetResult<Prisma.$TipoQuartoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TipoQuarto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TipoQuartoFindUniqueOrThrowArgs} args - Arguments to find a TipoQuarto
     * @example
     * // Get one TipoQuarto
     * const tipoQuarto = await prisma.tipoQuarto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TipoQuartoFindUniqueOrThrowArgs>(args: SelectSubset<T, TipoQuartoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TipoQuartoClient<$Result.GetResult<Prisma.$TipoQuartoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoQuarto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoQuartoFindFirstArgs} args - Arguments to find a TipoQuarto
     * @example
     * // Get one TipoQuarto
     * const tipoQuarto = await prisma.tipoQuarto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TipoQuartoFindFirstArgs>(args?: SelectSubset<T, TipoQuartoFindFirstArgs<ExtArgs>>): Prisma__TipoQuartoClient<$Result.GetResult<Prisma.$TipoQuartoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoQuarto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoQuartoFindFirstOrThrowArgs} args - Arguments to find a TipoQuarto
     * @example
     * // Get one TipoQuarto
     * const tipoQuarto = await prisma.tipoQuarto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TipoQuartoFindFirstOrThrowArgs>(args?: SelectSubset<T, TipoQuartoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TipoQuartoClient<$Result.GetResult<Prisma.$TipoQuartoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TipoQuartos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoQuartoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TipoQuartos
     * const tipoQuartos = await prisma.tipoQuarto.findMany()
     * 
     * // Get first 10 TipoQuartos
     * const tipoQuartos = await prisma.tipoQuarto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tipoQuartoWithIdOnly = await prisma.tipoQuarto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TipoQuartoFindManyArgs>(args?: SelectSubset<T, TipoQuartoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoQuartoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TipoQuarto.
     * @param {TipoQuartoCreateArgs} args - Arguments to create a TipoQuarto.
     * @example
     * // Create one TipoQuarto
     * const TipoQuarto = await prisma.tipoQuarto.create({
     *   data: {
     *     // ... data to create a TipoQuarto
     *   }
     * })
     * 
     */
    create<T extends TipoQuartoCreateArgs>(args: SelectSubset<T, TipoQuartoCreateArgs<ExtArgs>>): Prisma__TipoQuartoClient<$Result.GetResult<Prisma.$TipoQuartoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TipoQuartos.
     * @param {TipoQuartoCreateManyArgs} args - Arguments to create many TipoQuartos.
     * @example
     * // Create many TipoQuartos
     * const tipoQuarto = await prisma.tipoQuarto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TipoQuartoCreateManyArgs>(args?: SelectSubset<T, TipoQuartoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TipoQuartos and returns the data saved in the database.
     * @param {TipoQuartoCreateManyAndReturnArgs} args - Arguments to create many TipoQuartos.
     * @example
     * // Create many TipoQuartos
     * const tipoQuarto = await prisma.tipoQuarto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TipoQuartos and only return the `id`
     * const tipoQuartoWithIdOnly = await prisma.tipoQuarto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TipoQuartoCreateManyAndReturnArgs>(args?: SelectSubset<T, TipoQuartoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoQuartoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TipoQuarto.
     * @param {TipoQuartoDeleteArgs} args - Arguments to delete one TipoQuarto.
     * @example
     * // Delete one TipoQuarto
     * const TipoQuarto = await prisma.tipoQuarto.delete({
     *   where: {
     *     // ... filter to delete one TipoQuarto
     *   }
     * })
     * 
     */
    delete<T extends TipoQuartoDeleteArgs>(args: SelectSubset<T, TipoQuartoDeleteArgs<ExtArgs>>): Prisma__TipoQuartoClient<$Result.GetResult<Prisma.$TipoQuartoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TipoQuarto.
     * @param {TipoQuartoUpdateArgs} args - Arguments to update one TipoQuarto.
     * @example
     * // Update one TipoQuarto
     * const tipoQuarto = await prisma.tipoQuarto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TipoQuartoUpdateArgs>(args: SelectSubset<T, TipoQuartoUpdateArgs<ExtArgs>>): Prisma__TipoQuartoClient<$Result.GetResult<Prisma.$TipoQuartoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TipoQuartos.
     * @param {TipoQuartoDeleteManyArgs} args - Arguments to filter TipoQuartos to delete.
     * @example
     * // Delete a few TipoQuartos
     * const { count } = await prisma.tipoQuarto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TipoQuartoDeleteManyArgs>(args?: SelectSubset<T, TipoQuartoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoQuartos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoQuartoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TipoQuartos
     * const tipoQuarto = await prisma.tipoQuarto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TipoQuartoUpdateManyArgs>(args: SelectSubset<T, TipoQuartoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoQuartos and returns the data updated in the database.
     * @param {TipoQuartoUpdateManyAndReturnArgs} args - Arguments to update many TipoQuartos.
     * @example
     * // Update many TipoQuartos
     * const tipoQuarto = await prisma.tipoQuarto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TipoQuartos and only return the `id`
     * const tipoQuartoWithIdOnly = await prisma.tipoQuarto.updateManyAndReturn({
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
    updateManyAndReturn<T extends TipoQuartoUpdateManyAndReturnArgs>(args: SelectSubset<T, TipoQuartoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoQuartoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TipoQuarto.
     * @param {TipoQuartoUpsertArgs} args - Arguments to update or create a TipoQuarto.
     * @example
     * // Update or create a TipoQuarto
     * const tipoQuarto = await prisma.tipoQuarto.upsert({
     *   create: {
     *     // ... data to create a TipoQuarto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TipoQuarto we want to update
     *   }
     * })
     */
    upsert<T extends TipoQuartoUpsertArgs>(args: SelectSubset<T, TipoQuartoUpsertArgs<ExtArgs>>): Prisma__TipoQuartoClient<$Result.GetResult<Prisma.$TipoQuartoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TipoQuartos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoQuartoCountArgs} args - Arguments to filter TipoQuartos to count.
     * @example
     * // Count the number of TipoQuartos
     * const count = await prisma.tipoQuarto.count({
     *   where: {
     *     // ... the filter for the TipoQuartos we want to count
     *   }
     * })
    **/
    count<T extends TipoQuartoCountArgs>(
      args?: Subset<T, TipoQuartoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TipoQuartoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TipoQuarto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoQuartoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TipoQuartoAggregateArgs>(args: Subset<T, TipoQuartoAggregateArgs>): Prisma.PrismaPromise<GetTipoQuartoAggregateType<T>>

    /**
     * Group by TipoQuarto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoQuartoGroupByArgs} args - Group by arguments.
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
      T extends TipoQuartoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TipoQuartoGroupByArgs['orderBy'] }
        : { orderBy?: TipoQuartoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TipoQuartoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipoQuartoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TipoQuarto model
   */
  readonly fields: TipoQuartoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TipoQuarto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TipoQuartoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quartos<T extends TipoQuarto$quartosArgs<ExtArgs> = {}>(args?: Subset<T, TipoQuarto$quartosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuartoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TipoQuarto model
   */
  interface TipoQuartoFieldRefs {
    readonly id: FieldRef<"TipoQuarto", 'Int'>
    readonly nome: FieldRef<"TipoQuarto", 'String'>
    readonly descricao: FieldRef<"TipoQuarto", 'String'>
    readonly capacidade: FieldRef<"TipoQuarto", 'Int'>
    readonly precoBase: FieldRef<"TipoQuarto", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * TipoQuarto findUnique
   */
  export type TipoQuartoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoQuarto
     */
    select?: TipoQuartoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoQuarto
     */
    omit?: TipoQuartoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoQuartoInclude<ExtArgs> | null
    /**
     * Filter, which TipoQuarto to fetch.
     */
    where: TipoQuartoWhereUniqueInput
  }

  /**
   * TipoQuarto findUniqueOrThrow
   */
  export type TipoQuartoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoQuarto
     */
    select?: TipoQuartoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoQuarto
     */
    omit?: TipoQuartoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoQuartoInclude<ExtArgs> | null
    /**
     * Filter, which TipoQuarto to fetch.
     */
    where: TipoQuartoWhereUniqueInput
  }

  /**
   * TipoQuarto findFirst
   */
  export type TipoQuartoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoQuarto
     */
    select?: TipoQuartoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoQuarto
     */
    omit?: TipoQuartoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoQuartoInclude<ExtArgs> | null
    /**
     * Filter, which TipoQuarto to fetch.
     */
    where?: TipoQuartoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoQuartos to fetch.
     */
    orderBy?: TipoQuartoOrderByWithRelationInput | TipoQuartoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoQuartos.
     */
    cursor?: TipoQuartoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoQuartos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoQuartos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoQuartos.
     */
    distinct?: TipoQuartoScalarFieldEnum | TipoQuartoScalarFieldEnum[]
  }

  /**
   * TipoQuarto findFirstOrThrow
   */
  export type TipoQuartoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoQuarto
     */
    select?: TipoQuartoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoQuarto
     */
    omit?: TipoQuartoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoQuartoInclude<ExtArgs> | null
    /**
     * Filter, which TipoQuarto to fetch.
     */
    where?: TipoQuartoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoQuartos to fetch.
     */
    orderBy?: TipoQuartoOrderByWithRelationInput | TipoQuartoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoQuartos.
     */
    cursor?: TipoQuartoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoQuartos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoQuartos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoQuartos.
     */
    distinct?: TipoQuartoScalarFieldEnum | TipoQuartoScalarFieldEnum[]
  }

  /**
   * TipoQuarto findMany
   */
  export type TipoQuartoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoQuarto
     */
    select?: TipoQuartoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoQuarto
     */
    omit?: TipoQuartoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoQuartoInclude<ExtArgs> | null
    /**
     * Filter, which TipoQuartos to fetch.
     */
    where?: TipoQuartoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoQuartos to fetch.
     */
    orderBy?: TipoQuartoOrderByWithRelationInput | TipoQuartoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TipoQuartos.
     */
    cursor?: TipoQuartoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoQuartos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoQuartos.
     */
    skip?: number
    distinct?: TipoQuartoScalarFieldEnum | TipoQuartoScalarFieldEnum[]
  }

  /**
   * TipoQuarto create
   */
  export type TipoQuartoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoQuarto
     */
    select?: TipoQuartoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoQuarto
     */
    omit?: TipoQuartoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoQuartoInclude<ExtArgs> | null
    /**
     * The data needed to create a TipoQuarto.
     */
    data: XOR<TipoQuartoCreateInput, TipoQuartoUncheckedCreateInput>
  }

  /**
   * TipoQuarto createMany
   */
  export type TipoQuartoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TipoQuartos.
     */
    data: TipoQuartoCreateManyInput | TipoQuartoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TipoQuarto createManyAndReturn
   */
  export type TipoQuartoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoQuarto
     */
    select?: TipoQuartoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TipoQuarto
     */
    omit?: TipoQuartoOmit<ExtArgs> | null
    /**
     * The data used to create many TipoQuartos.
     */
    data: TipoQuartoCreateManyInput | TipoQuartoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TipoQuarto update
   */
  export type TipoQuartoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoQuarto
     */
    select?: TipoQuartoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoQuarto
     */
    omit?: TipoQuartoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoQuartoInclude<ExtArgs> | null
    /**
     * The data needed to update a TipoQuarto.
     */
    data: XOR<TipoQuartoUpdateInput, TipoQuartoUncheckedUpdateInput>
    /**
     * Choose, which TipoQuarto to update.
     */
    where: TipoQuartoWhereUniqueInput
  }

  /**
   * TipoQuarto updateMany
   */
  export type TipoQuartoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TipoQuartos.
     */
    data: XOR<TipoQuartoUpdateManyMutationInput, TipoQuartoUncheckedUpdateManyInput>
    /**
     * Filter which TipoQuartos to update
     */
    where?: TipoQuartoWhereInput
    /**
     * Limit how many TipoQuartos to update.
     */
    limit?: number
  }

  /**
   * TipoQuarto updateManyAndReturn
   */
  export type TipoQuartoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoQuarto
     */
    select?: TipoQuartoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TipoQuarto
     */
    omit?: TipoQuartoOmit<ExtArgs> | null
    /**
     * The data used to update TipoQuartos.
     */
    data: XOR<TipoQuartoUpdateManyMutationInput, TipoQuartoUncheckedUpdateManyInput>
    /**
     * Filter which TipoQuartos to update
     */
    where?: TipoQuartoWhereInput
    /**
     * Limit how many TipoQuartos to update.
     */
    limit?: number
  }

  /**
   * TipoQuarto upsert
   */
  export type TipoQuartoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoQuarto
     */
    select?: TipoQuartoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoQuarto
     */
    omit?: TipoQuartoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoQuartoInclude<ExtArgs> | null
    /**
     * The filter to search for the TipoQuarto to update in case it exists.
     */
    where: TipoQuartoWhereUniqueInput
    /**
     * In case the TipoQuarto found by the `where` argument doesn't exist, create a new TipoQuarto with this data.
     */
    create: XOR<TipoQuartoCreateInput, TipoQuartoUncheckedCreateInput>
    /**
     * In case the TipoQuarto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TipoQuartoUpdateInput, TipoQuartoUncheckedUpdateInput>
  }

  /**
   * TipoQuarto delete
   */
  export type TipoQuartoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoQuarto
     */
    select?: TipoQuartoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoQuarto
     */
    omit?: TipoQuartoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoQuartoInclude<ExtArgs> | null
    /**
     * Filter which TipoQuarto to delete.
     */
    where: TipoQuartoWhereUniqueInput
  }

  /**
   * TipoQuarto deleteMany
   */
  export type TipoQuartoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoQuartos to delete
     */
    where?: TipoQuartoWhereInput
    /**
     * Limit how many TipoQuartos to delete.
     */
    limit?: number
  }

  /**
   * TipoQuarto.quartos
   */
  export type TipoQuarto$quartosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quarto
     */
    select?: QuartoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quarto
     */
    omit?: QuartoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuartoInclude<ExtArgs> | null
    where?: QuartoWhereInput
    orderBy?: QuartoOrderByWithRelationInput | QuartoOrderByWithRelationInput[]
    cursor?: QuartoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuartoScalarFieldEnum | QuartoScalarFieldEnum[]
  }

  /**
   * TipoQuarto without action
   */
  export type TipoQuartoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoQuarto
     */
    select?: TipoQuartoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoQuarto
     */
    omit?: TipoQuartoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoQuartoInclude<ExtArgs> | null
  }


  /**
   * Model Quarto
   */

  export type AggregateQuarto = {
    _count: QuartoCountAggregateOutputType | null
    _avg: QuartoAvgAggregateOutputType | null
    _sum: QuartoSumAggregateOutputType | null
    _min: QuartoMinAggregateOutputType | null
    _max: QuartoMaxAggregateOutputType | null
  }

  export type QuartoAvgAggregateOutputType = {
    id: number | null
    tipoId: number | null
  }

  export type QuartoSumAggregateOutputType = {
    id: number | null
    tipoId: number | null
  }

  export type QuartoMinAggregateOutputType = {
    id: number | null
    numero: string | null
    tipoId: number | null
    status: $Enums.StatusQuarto | null
  }

  export type QuartoMaxAggregateOutputType = {
    id: number | null
    numero: string | null
    tipoId: number | null
    status: $Enums.StatusQuarto | null
  }

  export type QuartoCountAggregateOutputType = {
    id: number
    numero: number
    tipoId: number
    status: number
    _all: number
  }


  export type QuartoAvgAggregateInputType = {
    id?: true
    tipoId?: true
  }

  export type QuartoSumAggregateInputType = {
    id?: true
    tipoId?: true
  }

  export type QuartoMinAggregateInputType = {
    id?: true
    numero?: true
    tipoId?: true
    status?: true
  }

  export type QuartoMaxAggregateInputType = {
    id?: true
    numero?: true
    tipoId?: true
    status?: true
  }

  export type QuartoCountAggregateInputType = {
    id?: true
    numero?: true
    tipoId?: true
    status?: true
    _all?: true
  }

  export type QuartoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quarto to aggregate.
     */
    where?: QuartoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quartos to fetch.
     */
    orderBy?: QuartoOrderByWithRelationInput | QuartoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuartoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quartos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quartos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Quartos
    **/
    _count?: true | QuartoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuartoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuartoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuartoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuartoMaxAggregateInputType
  }

  export type GetQuartoAggregateType<T extends QuartoAggregateArgs> = {
        [P in keyof T & keyof AggregateQuarto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuarto[P]>
      : GetScalarType<T[P], AggregateQuarto[P]>
  }




  export type QuartoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuartoWhereInput
    orderBy?: QuartoOrderByWithAggregationInput | QuartoOrderByWithAggregationInput[]
    by: QuartoScalarFieldEnum[] | QuartoScalarFieldEnum
    having?: QuartoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuartoCountAggregateInputType | true
    _avg?: QuartoAvgAggregateInputType
    _sum?: QuartoSumAggregateInputType
    _min?: QuartoMinAggregateInputType
    _max?: QuartoMaxAggregateInputType
  }

  export type QuartoGroupByOutputType = {
    id: number
    numero: string
    tipoId: number
    status: $Enums.StatusQuarto
    _count: QuartoCountAggregateOutputType | null
    _avg: QuartoAvgAggregateOutputType | null
    _sum: QuartoSumAggregateOutputType | null
    _min: QuartoMinAggregateOutputType | null
    _max: QuartoMaxAggregateOutputType | null
  }

  type GetQuartoGroupByPayload<T extends QuartoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuartoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuartoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuartoGroupByOutputType[P]>
            : GetScalarType<T[P], QuartoGroupByOutputType[P]>
        }
      >
    >


  export type QuartoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    tipoId?: boolean
    status?: boolean
    tipo?: boolean | TipoQuartoDefaultArgs<ExtArgs>
    reservas?: boolean | Quarto$reservasArgs<ExtArgs>
    _count?: boolean | QuartoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quarto"]>

  export type QuartoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    tipoId?: boolean
    status?: boolean
    tipo?: boolean | TipoQuartoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quarto"]>

  export type QuartoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    tipoId?: boolean
    status?: boolean
    tipo?: boolean | TipoQuartoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quarto"]>

  export type QuartoSelectScalar = {
    id?: boolean
    numero?: boolean
    tipoId?: boolean
    status?: boolean
  }

  export type QuartoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "numero" | "tipoId" | "status", ExtArgs["result"]["quarto"]>
  export type QuartoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipo?: boolean | TipoQuartoDefaultArgs<ExtArgs>
    reservas?: boolean | Quarto$reservasArgs<ExtArgs>
    _count?: boolean | QuartoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuartoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipo?: boolean | TipoQuartoDefaultArgs<ExtArgs>
  }
  export type QuartoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipo?: boolean | TipoQuartoDefaultArgs<ExtArgs>
  }

  export type $QuartoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Quarto"
    objects: {
      tipo: Prisma.$TipoQuartoPayload<ExtArgs>
      reservas: Prisma.$ReservaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      numero: string
      tipoId: number
      status: $Enums.StatusQuarto
    }, ExtArgs["result"]["quarto"]>
    composites: {}
  }

  type QuartoGetPayload<S extends boolean | null | undefined | QuartoDefaultArgs> = $Result.GetResult<Prisma.$QuartoPayload, S>

  type QuartoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuartoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuartoCountAggregateInputType | true
    }

  export interface QuartoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Quarto'], meta: { name: 'Quarto' } }
    /**
     * Find zero or one Quarto that matches the filter.
     * @param {QuartoFindUniqueArgs} args - Arguments to find a Quarto
     * @example
     * // Get one Quarto
     * const quarto = await prisma.quarto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuartoFindUniqueArgs>(args: SelectSubset<T, QuartoFindUniqueArgs<ExtArgs>>): Prisma__QuartoClient<$Result.GetResult<Prisma.$QuartoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Quarto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuartoFindUniqueOrThrowArgs} args - Arguments to find a Quarto
     * @example
     * // Get one Quarto
     * const quarto = await prisma.quarto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuartoFindUniqueOrThrowArgs>(args: SelectSubset<T, QuartoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuartoClient<$Result.GetResult<Prisma.$QuartoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quarto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuartoFindFirstArgs} args - Arguments to find a Quarto
     * @example
     * // Get one Quarto
     * const quarto = await prisma.quarto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuartoFindFirstArgs>(args?: SelectSubset<T, QuartoFindFirstArgs<ExtArgs>>): Prisma__QuartoClient<$Result.GetResult<Prisma.$QuartoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quarto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuartoFindFirstOrThrowArgs} args - Arguments to find a Quarto
     * @example
     * // Get one Quarto
     * const quarto = await prisma.quarto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuartoFindFirstOrThrowArgs>(args?: SelectSubset<T, QuartoFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuartoClient<$Result.GetResult<Prisma.$QuartoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Quartos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuartoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quartos
     * const quartos = await prisma.quarto.findMany()
     * 
     * // Get first 10 Quartos
     * const quartos = await prisma.quarto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quartoWithIdOnly = await prisma.quarto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuartoFindManyArgs>(args?: SelectSubset<T, QuartoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuartoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Quarto.
     * @param {QuartoCreateArgs} args - Arguments to create a Quarto.
     * @example
     * // Create one Quarto
     * const Quarto = await prisma.quarto.create({
     *   data: {
     *     // ... data to create a Quarto
     *   }
     * })
     * 
     */
    create<T extends QuartoCreateArgs>(args: SelectSubset<T, QuartoCreateArgs<ExtArgs>>): Prisma__QuartoClient<$Result.GetResult<Prisma.$QuartoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Quartos.
     * @param {QuartoCreateManyArgs} args - Arguments to create many Quartos.
     * @example
     * // Create many Quartos
     * const quarto = await prisma.quarto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuartoCreateManyArgs>(args?: SelectSubset<T, QuartoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Quartos and returns the data saved in the database.
     * @param {QuartoCreateManyAndReturnArgs} args - Arguments to create many Quartos.
     * @example
     * // Create many Quartos
     * const quarto = await prisma.quarto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Quartos and only return the `id`
     * const quartoWithIdOnly = await prisma.quarto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuartoCreateManyAndReturnArgs>(args?: SelectSubset<T, QuartoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuartoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Quarto.
     * @param {QuartoDeleteArgs} args - Arguments to delete one Quarto.
     * @example
     * // Delete one Quarto
     * const Quarto = await prisma.quarto.delete({
     *   where: {
     *     // ... filter to delete one Quarto
     *   }
     * })
     * 
     */
    delete<T extends QuartoDeleteArgs>(args: SelectSubset<T, QuartoDeleteArgs<ExtArgs>>): Prisma__QuartoClient<$Result.GetResult<Prisma.$QuartoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Quarto.
     * @param {QuartoUpdateArgs} args - Arguments to update one Quarto.
     * @example
     * // Update one Quarto
     * const quarto = await prisma.quarto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuartoUpdateArgs>(args: SelectSubset<T, QuartoUpdateArgs<ExtArgs>>): Prisma__QuartoClient<$Result.GetResult<Prisma.$QuartoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Quartos.
     * @param {QuartoDeleteManyArgs} args - Arguments to filter Quartos to delete.
     * @example
     * // Delete a few Quartos
     * const { count } = await prisma.quarto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuartoDeleteManyArgs>(args?: SelectSubset<T, QuartoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quartos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuartoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quartos
     * const quarto = await prisma.quarto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuartoUpdateManyArgs>(args: SelectSubset<T, QuartoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quartos and returns the data updated in the database.
     * @param {QuartoUpdateManyAndReturnArgs} args - Arguments to update many Quartos.
     * @example
     * // Update many Quartos
     * const quarto = await prisma.quarto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Quartos and only return the `id`
     * const quartoWithIdOnly = await prisma.quarto.updateManyAndReturn({
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
    updateManyAndReturn<T extends QuartoUpdateManyAndReturnArgs>(args: SelectSubset<T, QuartoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuartoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Quarto.
     * @param {QuartoUpsertArgs} args - Arguments to update or create a Quarto.
     * @example
     * // Update or create a Quarto
     * const quarto = await prisma.quarto.upsert({
     *   create: {
     *     // ... data to create a Quarto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quarto we want to update
     *   }
     * })
     */
    upsert<T extends QuartoUpsertArgs>(args: SelectSubset<T, QuartoUpsertArgs<ExtArgs>>): Prisma__QuartoClient<$Result.GetResult<Prisma.$QuartoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Quartos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuartoCountArgs} args - Arguments to filter Quartos to count.
     * @example
     * // Count the number of Quartos
     * const count = await prisma.quarto.count({
     *   where: {
     *     // ... the filter for the Quartos we want to count
     *   }
     * })
    **/
    count<T extends QuartoCountArgs>(
      args?: Subset<T, QuartoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuartoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quarto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuartoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuartoAggregateArgs>(args: Subset<T, QuartoAggregateArgs>): Prisma.PrismaPromise<GetQuartoAggregateType<T>>

    /**
     * Group by Quarto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuartoGroupByArgs} args - Group by arguments.
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
      T extends QuartoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuartoGroupByArgs['orderBy'] }
        : { orderBy?: QuartoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuartoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuartoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Quarto model
   */
  readonly fields: QuartoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Quarto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuartoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tipo<T extends TipoQuartoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TipoQuartoDefaultArgs<ExtArgs>>): Prisma__TipoQuartoClient<$Result.GetResult<Prisma.$TipoQuartoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reservas<T extends Quarto$reservasArgs<ExtArgs> = {}>(args?: Subset<T, Quarto$reservasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Quarto model
   */
  interface QuartoFieldRefs {
    readonly id: FieldRef<"Quarto", 'Int'>
    readonly numero: FieldRef<"Quarto", 'String'>
    readonly tipoId: FieldRef<"Quarto", 'Int'>
    readonly status: FieldRef<"Quarto", 'StatusQuarto'>
  }
    

  // Custom InputTypes
  /**
   * Quarto findUnique
   */
  export type QuartoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quarto
     */
    select?: QuartoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quarto
     */
    omit?: QuartoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuartoInclude<ExtArgs> | null
    /**
     * Filter, which Quarto to fetch.
     */
    where: QuartoWhereUniqueInput
  }

  /**
   * Quarto findUniqueOrThrow
   */
  export type QuartoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quarto
     */
    select?: QuartoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quarto
     */
    omit?: QuartoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuartoInclude<ExtArgs> | null
    /**
     * Filter, which Quarto to fetch.
     */
    where: QuartoWhereUniqueInput
  }

  /**
   * Quarto findFirst
   */
  export type QuartoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quarto
     */
    select?: QuartoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quarto
     */
    omit?: QuartoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuartoInclude<ExtArgs> | null
    /**
     * Filter, which Quarto to fetch.
     */
    where?: QuartoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quartos to fetch.
     */
    orderBy?: QuartoOrderByWithRelationInput | QuartoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quartos.
     */
    cursor?: QuartoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quartos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quartos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quartos.
     */
    distinct?: QuartoScalarFieldEnum | QuartoScalarFieldEnum[]
  }

  /**
   * Quarto findFirstOrThrow
   */
  export type QuartoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quarto
     */
    select?: QuartoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quarto
     */
    omit?: QuartoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuartoInclude<ExtArgs> | null
    /**
     * Filter, which Quarto to fetch.
     */
    where?: QuartoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quartos to fetch.
     */
    orderBy?: QuartoOrderByWithRelationInput | QuartoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Quartos.
     */
    cursor?: QuartoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quartos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quartos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Quartos.
     */
    distinct?: QuartoScalarFieldEnum | QuartoScalarFieldEnum[]
  }

  /**
   * Quarto findMany
   */
  export type QuartoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quarto
     */
    select?: QuartoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quarto
     */
    omit?: QuartoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuartoInclude<ExtArgs> | null
    /**
     * Filter, which Quartos to fetch.
     */
    where?: QuartoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Quartos to fetch.
     */
    orderBy?: QuartoOrderByWithRelationInput | QuartoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Quartos.
     */
    cursor?: QuartoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Quartos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Quartos.
     */
    skip?: number
    distinct?: QuartoScalarFieldEnum | QuartoScalarFieldEnum[]
  }

  /**
   * Quarto create
   */
  export type QuartoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quarto
     */
    select?: QuartoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quarto
     */
    omit?: QuartoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuartoInclude<ExtArgs> | null
    /**
     * The data needed to create a Quarto.
     */
    data: XOR<QuartoCreateInput, QuartoUncheckedCreateInput>
  }

  /**
   * Quarto createMany
   */
  export type QuartoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Quartos.
     */
    data: QuartoCreateManyInput | QuartoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Quarto createManyAndReturn
   */
  export type QuartoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quarto
     */
    select?: QuartoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Quarto
     */
    omit?: QuartoOmit<ExtArgs> | null
    /**
     * The data used to create many Quartos.
     */
    data: QuartoCreateManyInput | QuartoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuartoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Quarto update
   */
  export type QuartoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quarto
     */
    select?: QuartoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quarto
     */
    omit?: QuartoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuartoInclude<ExtArgs> | null
    /**
     * The data needed to update a Quarto.
     */
    data: XOR<QuartoUpdateInput, QuartoUncheckedUpdateInput>
    /**
     * Choose, which Quarto to update.
     */
    where: QuartoWhereUniqueInput
  }

  /**
   * Quarto updateMany
   */
  export type QuartoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Quartos.
     */
    data: XOR<QuartoUpdateManyMutationInput, QuartoUncheckedUpdateManyInput>
    /**
     * Filter which Quartos to update
     */
    where?: QuartoWhereInput
    /**
     * Limit how many Quartos to update.
     */
    limit?: number
  }

  /**
   * Quarto updateManyAndReturn
   */
  export type QuartoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quarto
     */
    select?: QuartoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Quarto
     */
    omit?: QuartoOmit<ExtArgs> | null
    /**
     * The data used to update Quartos.
     */
    data: XOR<QuartoUpdateManyMutationInput, QuartoUncheckedUpdateManyInput>
    /**
     * Filter which Quartos to update
     */
    where?: QuartoWhereInput
    /**
     * Limit how many Quartos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuartoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Quarto upsert
   */
  export type QuartoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quarto
     */
    select?: QuartoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quarto
     */
    omit?: QuartoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuartoInclude<ExtArgs> | null
    /**
     * The filter to search for the Quarto to update in case it exists.
     */
    where: QuartoWhereUniqueInput
    /**
     * In case the Quarto found by the `where` argument doesn't exist, create a new Quarto with this data.
     */
    create: XOR<QuartoCreateInput, QuartoUncheckedCreateInput>
    /**
     * In case the Quarto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuartoUpdateInput, QuartoUncheckedUpdateInput>
  }

  /**
   * Quarto delete
   */
  export type QuartoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quarto
     */
    select?: QuartoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quarto
     */
    omit?: QuartoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuartoInclude<ExtArgs> | null
    /**
     * Filter which Quarto to delete.
     */
    where: QuartoWhereUniqueInput
  }

  /**
   * Quarto deleteMany
   */
  export type QuartoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Quartos to delete
     */
    where?: QuartoWhereInput
    /**
     * Limit how many Quartos to delete.
     */
    limit?: number
  }

  /**
   * Quarto.reservas
   */
  export type Quarto$reservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    where?: ReservaWhereInput
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    cursor?: ReservaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * Quarto without action
   */
  export type QuartoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quarto
     */
    select?: QuartoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Quarto
     */
    omit?: QuartoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuartoInclude<ExtArgs> | null
  }


  /**
   * Model Reserva
   */

  export type AggregateReserva = {
    _count: ReservaCountAggregateOutputType | null
    _avg: ReservaAvgAggregateOutputType | null
    _sum: ReservaSumAggregateOutputType | null
    _min: ReservaMinAggregateOutputType | null
    _max: ReservaMaxAggregateOutputType | null
  }

  export type ReservaAvgAggregateOutputType = {
    id: number | null
    hospedeId: number | null
    quartoId: number | null
    funcionarioId: number | null
    total: number | null
  }

  export type ReservaSumAggregateOutputType = {
    id: number | null
    hospedeId: number | null
    quartoId: number | null
    funcionarioId: number | null
    total: number | null
  }

  export type ReservaMinAggregateOutputType = {
    id: number | null
    hospedeId: number | null
    quartoId: number | null
    funcionarioId: number | null
    checkIn: Date | null
    checkOut: Date | null
    total: number | null
    status: $Enums.StatusReserva | null
    createdAt: Date | null
  }

  export type ReservaMaxAggregateOutputType = {
    id: number | null
    hospedeId: number | null
    quartoId: number | null
    funcionarioId: number | null
    checkIn: Date | null
    checkOut: Date | null
    total: number | null
    status: $Enums.StatusReserva | null
    createdAt: Date | null
  }

  export type ReservaCountAggregateOutputType = {
    id: number
    hospedeId: number
    quartoId: number
    funcionarioId: number
    checkIn: number
    checkOut: number
    total: number
    status: number
    createdAt: number
    _all: number
  }


  export type ReservaAvgAggregateInputType = {
    id?: true
    hospedeId?: true
    quartoId?: true
    funcionarioId?: true
    total?: true
  }

  export type ReservaSumAggregateInputType = {
    id?: true
    hospedeId?: true
    quartoId?: true
    funcionarioId?: true
    total?: true
  }

  export type ReservaMinAggregateInputType = {
    id?: true
    hospedeId?: true
    quartoId?: true
    funcionarioId?: true
    checkIn?: true
    checkOut?: true
    total?: true
    status?: true
    createdAt?: true
  }

  export type ReservaMaxAggregateInputType = {
    id?: true
    hospedeId?: true
    quartoId?: true
    funcionarioId?: true
    checkIn?: true
    checkOut?: true
    total?: true
    status?: true
    createdAt?: true
  }

  export type ReservaCountAggregateInputType = {
    id?: true
    hospedeId?: true
    quartoId?: true
    funcionarioId?: true
    checkIn?: true
    checkOut?: true
    total?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type ReservaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reserva to aggregate.
     */
    where?: ReservaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservas to fetch.
     */
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReservaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reservas
    **/
    _count?: true | ReservaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReservaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReservaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservaMaxAggregateInputType
  }

  export type GetReservaAggregateType<T extends ReservaAggregateArgs> = {
        [P in keyof T & keyof AggregateReserva]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReserva[P]>
      : GetScalarType<T[P], AggregateReserva[P]>
  }




  export type ReservaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservaWhereInput
    orderBy?: ReservaOrderByWithAggregationInput | ReservaOrderByWithAggregationInput[]
    by: ReservaScalarFieldEnum[] | ReservaScalarFieldEnum
    having?: ReservaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservaCountAggregateInputType | true
    _avg?: ReservaAvgAggregateInputType
    _sum?: ReservaSumAggregateInputType
    _min?: ReservaMinAggregateInputType
    _max?: ReservaMaxAggregateInputType
  }

  export type ReservaGroupByOutputType = {
    id: number
    hospedeId: number
    quartoId: number
    funcionarioId: number | null
    checkIn: Date
    checkOut: Date
    total: number | null
    status: $Enums.StatusReserva
    createdAt: Date
    _count: ReservaCountAggregateOutputType | null
    _avg: ReservaAvgAggregateOutputType | null
    _sum: ReservaSumAggregateOutputType | null
    _min: ReservaMinAggregateOutputType | null
    _max: ReservaMaxAggregateOutputType | null
  }

  type GetReservaGroupByPayload<T extends ReservaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservaGroupByOutputType[P]>
            : GetScalarType<T[P], ReservaGroupByOutputType[P]>
        }
      >
    >


  export type ReservaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hospedeId?: boolean
    quartoId?: boolean
    funcionarioId?: boolean
    checkIn?: boolean
    checkOut?: boolean
    total?: boolean
    status?: boolean
    createdAt?: boolean
    hospede?: boolean | HospedeDefaultArgs<ExtArgs>
    quarto?: boolean | QuartoDefaultArgs<ExtArgs>
    funcionario?: boolean | Reserva$funcionarioArgs<ExtArgs>
    pagamento?: boolean | Reserva$pagamentoArgs<ExtArgs>
  }, ExtArgs["result"]["reserva"]>

  export type ReservaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hospedeId?: boolean
    quartoId?: boolean
    funcionarioId?: boolean
    checkIn?: boolean
    checkOut?: boolean
    total?: boolean
    status?: boolean
    createdAt?: boolean
    hospede?: boolean | HospedeDefaultArgs<ExtArgs>
    quarto?: boolean | QuartoDefaultArgs<ExtArgs>
    funcionario?: boolean | Reserva$funcionarioArgs<ExtArgs>
  }, ExtArgs["result"]["reserva"]>

  export type ReservaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    hospedeId?: boolean
    quartoId?: boolean
    funcionarioId?: boolean
    checkIn?: boolean
    checkOut?: boolean
    total?: boolean
    status?: boolean
    createdAt?: boolean
    hospede?: boolean | HospedeDefaultArgs<ExtArgs>
    quarto?: boolean | QuartoDefaultArgs<ExtArgs>
    funcionario?: boolean | Reserva$funcionarioArgs<ExtArgs>
  }, ExtArgs["result"]["reserva"]>

  export type ReservaSelectScalar = {
    id?: boolean
    hospedeId?: boolean
    quartoId?: boolean
    funcionarioId?: boolean
    checkIn?: boolean
    checkOut?: boolean
    total?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type ReservaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "hospedeId" | "quartoId" | "funcionarioId" | "checkIn" | "checkOut" | "total" | "status" | "createdAt", ExtArgs["result"]["reserva"]>
  export type ReservaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hospede?: boolean | HospedeDefaultArgs<ExtArgs>
    quarto?: boolean | QuartoDefaultArgs<ExtArgs>
    funcionario?: boolean | Reserva$funcionarioArgs<ExtArgs>
    pagamento?: boolean | Reserva$pagamentoArgs<ExtArgs>
  }
  export type ReservaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hospede?: boolean | HospedeDefaultArgs<ExtArgs>
    quarto?: boolean | QuartoDefaultArgs<ExtArgs>
    funcionario?: boolean | Reserva$funcionarioArgs<ExtArgs>
  }
  export type ReservaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hospede?: boolean | HospedeDefaultArgs<ExtArgs>
    quarto?: boolean | QuartoDefaultArgs<ExtArgs>
    funcionario?: boolean | Reserva$funcionarioArgs<ExtArgs>
  }

  export type $ReservaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reserva"
    objects: {
      hospede: Prisma.$HospedePayload<ExtArgs>
      quarto: Prisma.$QuartoPayload<ExtArgs>
      funcionario: Prisma.$FuncionarioPayload<ExtArgs> | null
      pagamento: Prisma.$PagamentoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      hospedeId: number
      quartoId: number
      funcionarioId: number | null
      checkIn: Date
      checkOut: Date
      total: number | null
      status: $Enums.StatusReserva
      createdAt: Date
    }, ExtArgs["result"]["reserva"]>
    composites: {}
  }

  type ReservaGetPayload<S extends boolean | null | undefined | ReservaDefaultArgs> = $Result.GetResult<Prisma.$ReservaPayload, S>

  type ReservaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReservaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReservaCountAggregateInputType | true
    }

  export interface ReservaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reserva'], meta: { name: 'Reserva' } }
    /**
     * Find zero or one Reserva that matches the filter.
     * @param {ReservaFindUniqueArgs} args - Arguments to find a Reserva
     * @example
     * // Get one Reserva
     * const reserva = await prisma.reserva.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReservaFindUniqueArgs>(args: SelectSubset<T, ReservaFindUniqueArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reserva that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReservaFindUniqueOrThrowArgs} args - Arguments to find a Reserva
     * @example
     * // Get one Reserva
     * const reserva = await prisma.reserva.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReservaFindUniqueOrThrowArgs>(args: SelectSubset<T, ReservaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reserva that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaFindFirstArgs} args - Arguments to find a Reserva
     * @example
     * // Get one Reserva
     * const reserva = await prisma.reserva.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReservaFindFirstArgs>(args?: SelectSubset<T, ReservaFindFirstArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reserva that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaFindFirstOrThrowArgs} args - Arguments to find a Reserva
     * @example
     * // Get one Reserva
     * const reserva = await prisma.reserva.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReservaFindFirstOrThrowArgs>(args?: SelectSubset<T, ReservaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reservas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reservas
     * const reservas = await prisma.reserva.findMany()
     * 
     * // Get first 10 Reservas
     * const reservas = await prisma.reserva.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reservaWithIdOnly = await prisma.reserva.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReservaFindManyArgs>(args?: SelectSubset<T, ReservaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reserva.
     * @param {ReservaCreateArgs} args - Arguments to create a Reserva.
     * @example
     * // Create one Reserva
     * const Reserva = await prisma.reserva.create({
     *   data: {
     *     // ... data to create a Reserva
     *   }
     * })
     * 
     */
    create<T extends ReservaCreateArgs>(args: SelectSubset<T, ReservaCreateArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reservas.
     * @param {ReservaCreateManyArgs} args - Arguments to create many Reservas.
     * @example
     * // Create many Reservas
     * const reserva = await prisma.reserva.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReservaCreateManyArgs>(args?: SelectSubset<T, ReservaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reservas and returns the data saved in the database.
     * @param {ReservaCreateManyAndReturnArgs} args - Arguments to create many Reservas.
     * @example
     * // Create many Reservas
     * const reserva = await prisma.reserva.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reservas and only return the `id`
     * const reservaWithIdOnly = await prisma.reserva.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReservaCreateManyAndReturnArgs>(args?: SelectSubset<T, ReservaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reserva.
     * @param {ReservaDeleteArgs} args - Arguments to delete one Reserva.
     * @example
     * // Delete one Reserva
     * const Reserva = await prisma.reserva.delete({
     *   where: {
     *     // ... filter to delete one Reserva
     *   }
     * })
     * 
     */
    delete<T extends ReservaDeleteArgs>(args: SelectSubset<T, ReservaDeleteArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reserva.
     * @param {ReservaUpdateArgs} args - Arguments to update one Reserva.
     * @example
     * // Update one Reserva
     * const reserva = await prisma.reserva.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReservaUpdateArgs>(args: SelectSubset<T, ReservaUpdateArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reservas.
     * @param {ReservaDeleteManyArgs} args - Arguments to filter Reservas to delete.
     * @example
     * // Delete a few Reservas
     * const { count } = await prisma.reserva.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReservaDeleteManyArgs>(args?: SelectSubset<T, ReservaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reservas
     * const reserva = await prisma.reserva.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReservaUpdateManyArgs>(args: SelectSubset<T, ReservaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservas and returns the data updated in the database.
     * @param {ReservaUpdateManyAndReturnArgs} args - Arguments to update many Reservas.
     * @example
     * // Update many Reservas
     * const reserva = await prisma.reserva.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reservas and only return the `id`
     * const reservaWithIdOnly = await prisma.reserva.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReservaUpdateManyAndReturnArgs>(args: SelectSubset<T, ReservaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reserva.
     * @param {ReservaUpsertArgs} args - Arguments to update or create a Reserva.
     * @example
     * // Update or create a Reserva
     * const reserva = await prisma.reserva.upsert({
     *   create: {
     *     // ... data to create a Reserva
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reserva we want to update
     *   }
     * })
     */
    upsert<T extends ReservaUpsertArgs>(args: SelectSubset<T, ReservaUpsertArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reservas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaCountArgs} args - Arguments to filter Reservas to count.
     * @example
     * // Count the number of Reservas
     * const count = await prisma.reserva.count({
     *   where: {
     *     // ... the filter for the Reservas we want to count
     *   }
     * })
    **/
    count<T extends ReservaCountArgs>(
      args?: Subset<T, ReservaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reserva.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReservaAggregateArgs>(args: Subset<T, ReservaAggregateArgs>): Prisma.PrismaPromise<GetReservaAggregateType<T>>

    /**
     * Group by Reserva.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaGroupByArgs} args - Group by arguments.
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
      T extends ReservaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservaGroupByArgs['orderBy'] }
        : { orderBy?: ReservaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReservaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reserva model
   */
  readonly fields: ReservaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reserva.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReservaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hospede<T extends HospedeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HospedeDefaultArgs<ExtArgs>>): Prisma__HospedeClient<$Result.GetResult<Prisma.$HospedePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    quarto<T extends QuartoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuartoDefaultArgs<ExtArgs>>): Prisma__QuartoClient<$Result.GetResult<Prisma.$QuartoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    funcionario<T extends Reserva$funcionarioArgs<ExtArgs> = {}>(args?: Subset<T, Reserva$funcionarioArgs<ExtArgs>>): Prisma__FuncionarioClient<$Result.GetResult<Prisma.$FuncionarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    pagamento<T extends Reserva$pagamentoArgs<ExtArgs> = {}>(args?: Subset<T, Reserva$pagamentoArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Reserva model
   */
  interface ReservaFieldRefs {
    readonly id: FieldRef<"Reserva", 'Int'>
    readonly hospedeId: FieldRef<"Reserva", 'Int'>
    readonly quartoId: FieldRef<"Reserva", 'Int'>
    readonly funcionarioId: FieldRef<"Reserva", 'Int'>
    readonly checkIn: FieldRef<"Reserva", 'DateTime'>
    readonly checkOut: FieldRef<"Reserva", 'DateTime'>
    readonly total: FieldRef<"Reserva", 'Float'>
    readonly status: FieldRef<"Reserva", 'StatusReserva'>
    readonly createdAt: FieldRef<"Reserva", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reserva findUnique
   */
  export type ReservaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter, which Reserva to fetch.
     */
    where: ReservaWhereUniqueInput
  }

  /**
   * Reserva findUniqueOrThrow
   */
  export type ReservaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter, which Reserva to fetch.
     */
    where: ReservaWhereUniqueInput
  }

  /**
   * Reserva findFirst
   */
  export type ReservaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter, which Reserva to fetch.
     */
    where?: ReservaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservas to fetch.
     */
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservas.
     */
    cursor?: ReservaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservas.
     */
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * Reserva findFirstOrThrow
   */
  export type ReservaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter, which Reserva to fetch.
     */
    where?: ReservaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservas to fetch.
     */
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservas.
     */
    cursor?: ReservaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservas.
     */
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * Reserva findMany
   */
  export type ReservaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter, which Reservas to fetch.
     */
    where?: ReservaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservas to fetch.
     */
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reservas.
     */
    cursor?: ReservaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservas.
     */
    skip?: number
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * Reserva create
   */
  export type ReservaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * The data needed to create a Reserva.
     */
    data: XOR<ReservaCreateInput, ReservaUncheckedCreateInput>
  }

  /**
   * Reserva createMany
   */
  export type ReservaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reservas.
     */
    data: ReservaCreateManyInput | ReservaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reserva createManyAndReturn
   */
  export type ReservaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * The data used to create many Reservas.
     */
    data: ReservaCreateManyInput | ReservaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reserva update
   */
  export type ReservaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * The data needed to update a Reserva.
     */
    data: XOR<ReservaUpdateInput, ReservaUncheckedUpdateInput>
    /**
     * Choose, which Reserva to update.
     */
    where: ReservaWhereUniqueInput
  }

  /**
   * Reserva updateMany
   */
  export type ReservaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reservas.
     */
    data: XOR<ReservaUpdateManyMutationInput, ReservaUncheckedUpdateManyInput>
    /**
     * Filter which Reservas to update
     */
    where?: ReservaWhereInput
    /**
     * Limit how many Reservas to update.
     */
    limit?: number
  }

  /**
   * Reserva updateManyAndReturn
   */
  export type ReservaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * The data used to update Reservas.
     */
    data: XOR<ReservaUpdateManyMutationInput, ReservaUncheckedUpdateManyInput>
    /**
     * Filter which Reservas to update
     */
    where?: ReservaWhereInput
    /**
     * Limit how many Reservas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reserva upsert
   */
  export type ReservaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * The filter to search for the Reserva to update in case it exists.
     */
    where: ReservaWhereUniqueInput
    /**
     * In case the Reserva found by the `where` argument doesn't exist, create a new Reserva with this data.
     */
    create: XOR<ReservaCreateInput, ReservaUncheckedCreateInput>
    /**
     * In case the Reserva was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReservaUpdateInput, ReservaUncheckedUpdateInput>
  }

  /**
   * Reserva delete
   */
  export type ReservaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter which Reserva to delete.
     */
    where: ReservaWhereUniqueInput
  }

  /**
   * Reserva deleteMany
   */
  export type ReservaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservas to delete
     */
    where?: ReservaWhereInput
    /**
     * Limit how many Reservas to delete.
     */
    limit?: number
  }

  /**
   * Reserva.funcionario
   */
  export type Reserva$funcionarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcionario
     */
    select?: FuncionarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcionario
     */
    omit?: FuncionarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionarioInclude<ExtArgs> | null
    where?: FuncionarioWhereInput
  }

  /**
   * Reserva.pagamento
   */
  export type Reserva$pagamentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    where?: PagamentoWhereInput
  }

  /**
   * Reserva without action
   */
  export type ReservaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
  }


  /**
   * Model Pagamento
   */

  export type AggregatePagamento = {
    _count: PagamentoCountAggregateOutputType | null
    _avg: PagamentoAvgAggregateOutputType | null
    _sum: PagamentoSumAggregateOutputType | null
    _min: PagamentoMinAggregateOutputType | null
    _max: PagamentoMaxAggregateOutputType | null
  }

  export type PagamentoAvgAggregateOutputType = {
    id: number | null
    reservaId: number | null
    valor: number | null
  }

  export type PagamentoSumAggregateOutputType = {
    id: number | null
    reservaId: number | null
    valor: number | null
  }

  export type PagamentoMinAggregateOutputType = {
    id: number | null
    reservaId: number | null
    valor: number | null
    metodo: $Enums.MetodoPagamento | null
    status: $Enums.StatusPagamento | null
    data: Date | null
  }

  export type PagamentoMaxAggregateOutputType = {
    id: number | null
    reservaId: number | null
    valor: number | null
    metodo: $Enums.MetodoPagamento | null
    status: $Enums.StatusPagamento | null
    data: Date | null
  }

  export type PagamentoCountAggregateOutputType = {
    id: number
    reservaId: number
    valor: number
    metodo: number
    status: number
    data: number
    _all: number
  }


  export type PagamentoAvgAggregateInputType = {
    id?: true
    reservaId?: true
    valor?: true
  }

  export type PagamentoSumAggregateInputType = {
    id?: true
    reservaId?: true
    valor?: true
  }

  export type PagamentoMinAggregateInputType = {
    id?: true
    reservaId?: true
    valor?: true
    metodo?: true
    status?: true
    data?: true
  }

  export type PagamentoMaxAggregateInputType = {
    id?: true
    reservaId?: true
    valor?: true
    metodo?: true
    status?: true
    data?: true
  }

  export type PagamentoCountAggregateInputType = {
    id?: true
    reservaId?: true
    valor?: true
    metodo?: true
    status?: true
    data?: true
    _all?: true
  }

  export type PagamentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pagamento to aggregate.
     */
    where?: PagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagamentos to fetch.
     */
    orderBy?: PagamentoOrderByWithRelationInput | PagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pagamentos
    **/
    _count?: true | PagamentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PagamentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PagamentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PagamentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PagamentoMaxAggregateInputType
  }

  export type GetPagamentoAggregateType<T extends PagamentoAggregateArgs> = {
        [P in keyof T & keyof AggregatePagamento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePagamento[P]>
      : GetScalarType<T[P], AggregatePagamento[P]>
  }




  export type PagamentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PagamentoWhereInput
    orderBy?: PagamentoOrderByWithAggregationInput | PagamentoOrderByWithAggregationInput[]
    by: PagamentoScalarFieldEnum[] | PagamentoScalarFieldEnum
    having?: PagamentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PagamentoCountAggregateInputType | true
    _avg?: PagamentoAvgAggregateInputType
    _sum?: PagamentoSumAggregateInputType
    _min?: PagamentoMinAggregateInputType
    _max?: PagamentoMaxAggregateInputType
  }

  export type PagamentoGroupByOutputType = {
    id: number
    reservaId: number
    valor: number
    metodo: $Enums.MetodoPagamento
    status: $Enums.StatusPagamento
    data: Date | null
    _count: PagamentoCountAggregateOutputType | null
    _avg: PagamentoAvgAggregateOutputType | null
    _sum: PagamentoSumAggregateOutputType | null
    _min: PagamentoMinAggregateOutputType | null
    _max: PagamentoMaxAggregateOutputType | null
  }

  type GetPagamentoGroupByPayload<T extends PagamentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PagamentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PagamentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PagamentoGroupByOutputType[P]>
            : GetScalarType<T[P], PagamentoGroupByOutputType[P]>
        }
      >
    >


  export type PagamentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservaId?: boolean
    valor?: boolean
    metodo?: boolean
    status?: boolean
    data?: boolean
    reserva?: boolean | ReservaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pagamento"]>

  export type PagamentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservaId?: boolean
    valor?: boolean
    metodo?: boolean
    status?: boolean
    data?: boolean
    reserva?: boolean | ReservaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pagamento"]>

  export type PagamentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservaId?: boolean
    valor?: boolean
    metodo?: boolean
    status?: boolean
    data?: boolean
    reserva?: boolean | ReservaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pagamento"]>

  export type PagamentoSelectScalar = {
    id?: boolean
    reservaId?: boolean
    valor?: boolean
    metodo?: boolean
    status?: boolean
    data?: boolean
  }

  export type PagamentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reservaId" | "valor" | "metodo" | "status" | "data", ExtArgs["result"]["pagamento"]>
  export type PagamentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reserva?: boolean | ReservaDefaultArgs<ExtArgs>
  }
  export type PagamentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reserva?: boolean | ReservaDefaultArgs<ExtArgs>
  }
  export type PagamentoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reserva?: boolean | ReservaDefaultArgs<ExtArgs>
  }

  export type $PagamentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pagamento"
    objects: {
      reserva: Prisma.$ReservaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      reservaId: number
      valor: number
      metodo: $Enums.MetodoPagamento
      status: $Enums.StatusPagamento
      data: Date | null
    }, ExtArgs["result"]["pagamento"]>
    composites: {}
  }

  type PagamentoGetPayload<S extends boolean | null | undefined | PagamentoDefaultArgs> = $Result.GetResult<Prisma.$PagamentoPayload, S>

  type PagamentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PagamentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PagamentoCountAggregateInputType | true
    }

  export interface PagamentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pagamento'], meta: { name: 'Pagamento' } }
    /**
     * Find zero or one Pagamento that matches the filter.
     * @param {PagamentoFindUniqueArgs} args - Arguments to find a Pagamento
     * @example
     * // Get one Pagamento
     * const pagamento = await prisma.pagamento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PagamentoFindUniqueArgs>(args: SelectSubset<T, PagamentoFindUniqueArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pagamento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PagamentoFindUniqueOrThrowArgs} args - Arguments to find a Pagamento
     * @example
     * // Get one Pagamento
     * const pagamento = await prisma.pagamento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PagamentoFindUniqueOrThrowArgs>(args: SelectSubset<T, PagamentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pagamento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoFindFirstArgs} args - Arguments to find a Pagamento
     * @example
     * // Get one Pagamento
     * const pagamento = await prisma.pagamento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PagamentoFindFirstArgs>(args?: SelectSubset<T, PagamentoFindFirstArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pagamento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoFindFirstOrThrowArgs} args - Arguments to find a Pagamento
     * @example
     * // Get one Pagamento
     * const pagamento = await prisma.pagamento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PagamentoFindFirstOrThrowArgs>(args?: SelectSubset<T, PagamentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pagamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pagamentos
     * const pagamentos = await prisma.pagamento.findMany()
     * 
     * // Get first 10 Pagamentos
     * const pagamentos = await prisma.pagamento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pagamentoWithIdOnly = await prisma.pagamento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PagamentoFindManyArgs>(args?: SelectSubset<T, PagamentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pagamento.
     * @param {PagamentoCreateArgs} args - Arguments to create a Pagamento.
     * @example
     * // Create one Pagamento
     * const Pagamento = await prisma.pagamento.create({
     *   data: {
     *     // ... data to create a Pagamento
     *   }
     * })
     * 
     */
    create<T extends PagamentoCreateArgs>(args: SelectSubset<T, PagamentoCreateArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pagamentos.
     * @param {PagamentoCreateManyArgs} args - Arguments to create many Pagamentos.
     * @example
     * // Create many Pagamentos
     * const pagamento = await prisma.pagamento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PagamentoCreateManyArgs>(args?: SelectSubset<T, PagamentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pagamentos and returns the data saved in the database.
     * @param {PagamentoCreateManyAndReturnArgs} args - Arguments to create many Pagamentos.
     * @example
     * // Create many Pagamentos
     * const pagamento = await prisma.pagamento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pagamentos and only return the `id`
     * const pagamentoWithIdOnly = await prisma.pagamento.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PagamentoCreateManyAndReturnArgs>(args?: SelectSubset<T, PagamentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pagamento.
     * @param {PagamentoDeleteArgs} args - Arguments to delete one Pagamento.
     * @example
     * // Delete one Pagamento
     * const Pagamento = await prisma.pagamento.delete({
     *   where: {
     *     // ... filter to delete one Pagamento
     *   }
     * })
     * 
     */
    delete<T extends PagamentoDeleteArgs>(args: SelectSubset<T, PagamentoDeleteArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pagamento.
     * @param {PagamentoUpdateArgs} args - Arguments to update one Pagamento.
     * @example
     * // Update one Pagamento
     * const pagamento = await prisma.pagamento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PagamentoUpdateArgs>(args: SelectSubset<T, PagamentoUpdateArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pagamentos.
     * @param {PagamentoDeleteManyArgs} args - Arguments to filter Pagamentos to delete.
     * @example
     * // Delete a few Pagamentos
     * const { count } = await prisma.pagamento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PagamentoDeleteManyArgs>(args?: SelectSubset<T, PagamentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pagamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pagamentos
     * const pagamento = await prisma.pagamento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PagamentoUpdateManyArgs>(args: SelectSubset<T, PagamentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pagamentos and returns the data updated in the database.
     * @param {PagamentoUpdateManyAndReturnArgs} args - Arguments to update many Pagamentos.
     * @example
     * // Update many Pagamentos
     * const pagamento = await prisma.pagamento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pagamentos and only return the `id`
     * const pagamentoWithIdOnly = await prisma.pagamento.updateManyAndReturn({
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
    updateManyAndReturn<T extends PagamentoUpdateManyAndReturnArgs>(args: SelectSubset<T, PagamentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pagamento.
     * @param {PagamentoUpsertArgs} args - Arguments to update or create a Pagamento.
     * @example
     * // Update or create a Pagamento
     * const pagamento = await prisma.pagamento.upsert({
     *   create: {
     *     // ... data to create a Pagamento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pagamento we want to update
     *   }
     * })
     */
    upsert<T extends PagamentoUpsertArgs>(args: SelectSubset<T, PagamentoUpsertArgs<ExtArgs>>): Prisma__PagamentoClient<$Result.GetResult<Prisma.$PagamentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pagamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoCountArgs} args - Arguments to filter Pagamentos to count.
     * @example
     * // Count the number of Pagamentos
     * const count = await prisma.pagamento.count({
     *   where: {
     *     // ... the filter for the Pagamentos we want to count
     *   }
     * })
    **/
    count<T extends PagamentoCountArgs>(
      args?: Subset<T, PagamentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PagamentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pagamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PagamentoAggregateArgs>(args: Subset<T, PagamentoAggregateArgs>): Prisma.PrismaPromise<GetPagamentoAggregateType<T>>

    /**
     * Group by Pagamento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagamentoGroupByArgs} args - Group by arguments.
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
      T extends PagamentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PagamentoGroupByArgs['orderBy'] }
        : { orderBy?: PagamentoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PagamentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPagamentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pagamento model
   */
  readonly fields: PagamentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pagamento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PagamentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reserva<T extends ReservaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReservaDefaultArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Pagamento model
   */
  interface PagamentoFieldRefs {
    readonly id: FieldRef<"Pagamento", 'Int'>
    readonly reservaId: FieldRef<"Pagamento", 'Int'>
    readonly valor: FieldRef<"Pagamento", 'Float'>
    readonly metodo: FieldRef<"Pagamento", 'MetodoPagamento'>
    readonly status: FieldRef<"Pagamento", 'StatusPagamento'>
    readonly data: FieldRef<"Pagamento", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pagamento findUnique
   */
  export type PagamentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * Filter, which Pagamento to fetch.
     */
    where: PagamentoWhereUniqueInput
  }

  /**
   * Pagamento findUniqueOrThrow
   */
  export type PagamentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * Filter, which Pagamento to fetch.
     */
    where: PagamentoWhereUniqueInput
  }

  /**
   * Pagamento findFirst
   */
  export type PagamentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * Filter, which Pagamento to fetch.
     */
    where?: PagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagamentos to fetch.
     */
    orderBy?: PagamentoOrderByWithRelationInput | PagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pagamentos.
     */
    cursor?: PagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pagamentos.
     */
    distinct?: PagamentoScalarFieldEnum | PagamentoScalarFieldEnum[]
  }

  /**
   * Pagamento findFirstOrThrow
   */
  export type PagamentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * Filter, which Pagamento to fetch.
     */
    where?: PagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagamentos to fetch.
     */
    orderBy?: PagamentoOrderByWithRelationInput | PagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pagamentos.
     */
    cursor?: PagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pagamentos.
     */
    distinct?: PagamentoScalarFieldEnum | PagamentoScalarFieldEnum[]
  }

  /**
   * Pagamento findMany
   */
  export type PagamentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * Filter, which Pagamentos to fetch.
     */
    where?: PagamentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagamentos to fetch.
     */
    orderBy?: PagamentoOrderByWithRelationInput | PagamentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pagamentos.
     */
    cursor?: PagamentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagamentos.
     */
    skip?: number
    distinct?: PagamentoScalarFieldEnum | PagamentoScalarFieldEnum[]
  }

  /**
   * Pagamento create
   */
  export type PagamentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * The data needed to create a Pagamento.
     */
    data: XOR<PagamentoCreateInput, PagamentoUncheckedCreateInput>
  }

  /**
   * Pagamento createMany
   */
  export type PagamentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pagamentos.
     */
    data: PagamentoCreateManyInput | PagamentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pagamento createManyAndReturn
   */
  export type PagamentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * The data used to create many Pagamentos.
     */
    data: PagamentoCreateManyInput | PagamentoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pagamento update
   */
  export type PagamentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * The data needed to update a Pagamento.
     */
    data: XOR<PagamentoUpdateInput, PagamentoUncheckedUpdateInput>
    /**
     * Choose, which Pagamento to update.
     */
    where: PagamentoWhereUniqueInput
  }

  /**
   * Pagamento updateMany
   */
  export type PagamentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pagamentos.
     */
    data: XOR<PagamentoUpdateManyMutationInput, PagamentoUncheckedUpdateManyInput>
    /**
     * Filter which Pagamentos to update
     */
    where?: PagamentoWhereInput
    /**
     * Limit how many Pagamentos to update.
     */
    limit?: number
  }

  /**
   * Pagamento updateManyAndReturn
   */
  export type PagamentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * The data used to update Pagamentos.
     */
    data: XOR<PagamentoUpdateManyMutationInput, PagamentoUncheckedUpdateManyInput>
    /**
     * Filter which Pagamentos to update
     */
    where?: PagamentoWhereInput
    /**
     * Limit how many Pagamentos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pagamento upsert
   */
  export type PagamentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * The filter to search for the Pagamento to update in case it exists.
     */
    where: PagamentoWhereUniqueInput
    /**
     * In case the Pagamento found by the `where` argument doesn't exist, create a new Pagamento with this data.
     */
    create: XOR<PagamentoCreateInput, PagamentoUncheckedCreateInput>
    /**
     * In case the Pagamento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PagamentoUpdateInput, PagamentoUncheckedUpdateInput>
  }

  /**
   * Pagamento delete
   */
  export type PagamentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
    /**
     * Filter which Pagamento to delete.
     */
    where: PagamentoWhereUniqueInput
  }

  /**
   * Pagamento deleteMany
   */
  export type PagamentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pagamentos to delete
     */
    where?: PagamentoWhereInput
    /**
     * Limit how many Pagamentos to delete.
     */
    limit?: number
  }

  /**
   * Pagamento without action
   */
  export type PagamentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pagamento
     */
    select?: PagamentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pagamento
     */
    omit?: PagamentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagamentoInclude<ExtArgs> | null
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


  export const FuncionarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type FuncionarioScalarFieldEnum = (typeof FuncionarioScalarFieldEnum)[keyof typeof FuncionarioScalarFieldEnum]


  export const HospedeScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    telefone: 'telefone',
    documento: 'documento',
    createdAt: 'createdAt'
  };

  export type HospedeScalarFieldEnum = (typeof HospedeScalarFieldEnum)[keyof typeof HospedeScalarFieldEnum]


  export const TipoQuartoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    capacidade: 'capacidade',
    precoBase: 'precoBase'
  };

  export type TipoQuartoScalarFieldEnum = (typeof TipoQuartoScalarFieldEnum)[keyof typeof TipoQuartoScalarFieldEnum]


  export const QuartoScalarFieldEnum: {
    id: 'id',
    numero: 'numero',
    tipoId: 'tipoId',
    status: 'status'
  };

  export type QuartoScalarFieldEnum = (typeof QuartoScalarFieldEnum)[keyof typeof QuartoScalarFieldEnum]


  export const ReservaScalarFieldEnum: {
    id: 'id',
    hospedeId: 'hospedeId',
    quartoId: 'quartoId',
    funcionarioId: 'funcionarioId',
    checkIn: 'checkIn',
    checkOut: 'checkOut',
    total: 'total',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type ReservaScalarFieldEnum = (typeof ReservaScalarFieldEnum)[keyof typeof ReservaScalarFieldEnum]


  export const PagamentoScalarFieldEnum: {
    id: 'id',
    reservaId: 'reservaId',
    valor: 'valor',
    metodo: 'metodo',
    status: 'status',
    data: 'data'
  };

  export type PagamentoScalarFieldEnum = (typeof PagamentoScalarFieldEnum)[keyof typeof PagamentoScalarFieldEnum]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


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
   * Reference to a field of type 'StatusQuarto'
   */
  export type EnumStatusQuartoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusQuarto'>
    


  /**
   * Reference to a field of type 'StatusQuarto[]'
   */
  export type ListEnumStatusQuartoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusQuarto[]'>
    


  /**
   * Reference to a field of type 'StatusReserva'
   */
  export type EnumStatusReservaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusReserva'>
    


  /**
   * Reference to a field of type 'StatusReserva[]'
   */
  export type ListEnumStatusReservaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusReserva[]'>
    


  /**
   * Reference to a field of type 'MetodoPagamento'
   */
  export type EnumMetodoPagamentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MetodoPagamento'>
    


  /**
   * Reference to a field of type 'MetodoPagamento[]'
   */
  export type ListEnumMetodoPagamentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MetodoPagamento[]'>
    


  /**
   * Reference to a field of type 'StatusPagamento'
   */
  export type EnumStatusPagamentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusPagamento'>
    


  /**
   * Reference to a field of type 'StatusPagamento[]'
   */
  export type ListEnumStatusPagamentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusPagamento[]'>
    
  /**
   * Deep Input Types
   */


  export type FuncionarioWhereInput = {
    AND?: FuncionarioWhereInput | FuncionarioWhereInput[]
    OR?: FuncionarioWhereInput[]
    NOT?: FuncionarioWhereInput | FuncionarioWhereInput[]
    id?: IntFilter<"Funcionario"> | number
    nome?: StringFilter<"Funcionario"> | string
    email?: StringFilter<"Funcionario"> | string
    senha?: StringFilter<"Funcionario"> | string
    role?: EnumRoleFilter<"Funcionario"> | $Enums.Role
    createdAt?: DateTimeFilter<"Funcionario"> | Date | string
    reservas?: ReservaListRelationFilter
  }

  export type FuncionarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    reservas?: ReservaOrderByRelationAggregateInput
  }

  export type FuncionarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: FuncionarioWhereInput | FuncionarioWhereInput[]
    OR?: FuncionarioWhereInput[]
    NOT?: FuncionarioWhereInput | FuncionarioWhereInput[]
    nome?: StringFilter<"Funcionario"> | string
    senha?: StringFilter<"Funcionario"> | string
    role?: EnumRoleFilter<"Funcionario"> | $Enums.Role
    createdAt?: DateTimeFilter<"Funcionario"> | Date | string
    reservas?: ReservaListRelationFilter
  }, "id" | "email">

  export type FuncionarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: FuncionarioCountOrderByAggregateInput
    _avg?: FuncionarioAvgOrderByAggregateInput
    _max?: FuncionarioMaxOrderByAggregateInput
    _min?: FuncionarioMinOrderByAggregateInput
    _sum?: FuncionarioSumOrderByAggregateInput
  }

  export type FuncionarioScalarWhereWithAggregatesInput = {
    AND?: FuncionarioScalarWhereWithAggregatesInput | FuncionarioScalarWhereWithAggregatesInput[]
    OR?: FuncionarioScalarWhereWithAggregatesInput[]
    NOT?: FuncionarioScalarWhereWithAggregatesInput | FuncionarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Funcionario"> | number
    nome?: StringWithAggregatesFilter<"Funcionario"> | string
    email?: StringWithAggregatesFilter<"Funcionario"> | string
    senha?: StringWithAggregatesFilter<"Funcionario"> | string
    role?: EnumRoleWithAggregatesFilter<"Funcionario"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"Funcionario"> | Date | string
  }

  export type HospedeWhereInput = {
    AND?: HospedeWhereInput | HospedeWhereInput[]
    OR?: HospedeWhereInput[]
    NOT?: HospedeWhereInput | HospedeWhereInput[]
    id?: IntFilter<"Hospede"> | number
    nome?: StringFilter<"Hospede"> | string
    email?: StringNullableFilter<"Hospede"> | string | null
    telefone?: StringNullableFilter<"Hospede"> | string | null
    documento?: StringNullableFilter<"Hospede"> | string | null
    createdAt?: DateTimeFilter<"Hospede"> | Date | string
    reservas?: ReservaListRelationFilter
  }

  export type HospedeOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrderInput | SortOrder
    telefone?: SortOrderInput | SortOrder
    documento?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    reservas?: ReservaOrderByRelationAggregateInput
  }

  export type HospedeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: HospedeWhereInput | HospedeWhereInput[]
    OR?: HospedeWhereInput[]
    NOT?: HospedeWhereInput | HospedeWhereInput[]
    nome?: StringFilter<"Hospede"> | string
    telefone?: StringNullableFilter<"Hospede"> | string | null
    documento?: StringNullableFilter<"Hospede"> | string | null
    createdAt?: DateTimeFilter<"Hospede"> | Date | string
    reservas?: ReservaListRelationFilter
  }, "id" | "email">

  export type HospedeOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrderInput | SortOrder
    telefone?: SortOrderInput | SortOrder
    documento?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: HospedeCountOrderByAggregateInput
    _avg?: HospedeAvgOrderByAggregateInput
    _max?: HospedeMaxOrderByAggregateInput
    _min?: HospedeMinOrderByAggregateInput
    _sum?: HospedeSumOrderByAggregateInput
  }

  export type HospedeScalarWhereWithAggregatesInput = {
    AND?: HospedeScalarWhereWithAggregatesInput | HospedeScalarWhereWithAggregatesInput[]
    OR?: HospedeScalarWhereWithAggregatesInput[]
    NOT?: HospedeScalarWhereWithAggregatesInput | HospedeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Hospede"> | number
    nome?: StringWithAggregatesFilter<"Hospede"> | string
    email?: StringNullableWithAggregatesFilter<"Hospede"> | string | null
    telefone?: StringNullableWithAggregatesFilter<"Hospede"> | string | null
    documento?: StringNullableWithAggregatesFilter<"Hospede"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Hospede"> | Date | string
  }

  export type TipoQuartoWhereInput = {
    AND?: TipoQuartoWhereInput | TipoQuartoWhereInput[]
    OR?: TipoQuartoWhereInput[]
    NOT?: TipoQuartoWhereInput | TipoQuartoWhereInput[]
    id?: IntFilter<"TipoQuarto"> | number
    nome?: StringFilter<"TipoQuarto"> | string
    descricao?: StringNullableFilter<"TipoQuarto"> | string | null
    capacidade?: IntFilter<"TipoQuarto"> | number
    precoBase?: FloatFilter<"TipoQuarto"> | number
    quartos?: QuartoListRelationFilter
  }

  export type TipoQuartoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    capacidade?: SortOrder
    precoBase?: SortOrder
    quartos?: QuartoOrderByRelationAggregateInput
  }

  export type TipoQuartoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TipoQuartoWhereInput | TipoQuartoWhereInput[]
    OR?: TipoQuartoWhereInput[]
    NOT?: TipoQuartoWhereInput | TipoQuartoWhereInput[]
    nome?: StringFilter<"TipoQuarto"> | string
    descricao?: StringNullableFilter<"TipoQuarto"> | string | null
    capacidade?: IntFilter<"TipoQuarto"> | number
    precoBase?: FloatFilter<"TipoQuarto"> | number
    quartos?: QuartoListRelationFilter
  }, "id">

  export type TipoQuartoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrderInput | SortOrder
    capacidade?: SortOrder
    precoBase?: SortOrder
    _count?: TipoQuartoCountOrderByAggregateInput
    _avg?: TipoQuartoAvgOrderByAggregateInput
    _max?: TipoQuartoMaxOrderByAggregateInput
    _min?: TipoQuartoMinOrderByAggregateInput
    _sum?: TipoQuartoSumOrderByAggregateInput
  }

  export type TipoQuartoScalarWhereWithAggregatesInput = {
    AND?: TipoQuartoScalarWhereWithAggregatesInput | TipoQuartoScalarWhereWithAggregatesInput[]
    OR?: TipoQuartoScalarWhereWithAggregatesInput[]
    NOT?: TipoQuartoScalarWhereWithAggregatesInput | TipoQuartoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TipoQuarto"> | number
    nome?: StringWithAggregatesFilter<"TipoQuarto"> | string
    descricao?: StringNullableWithAggregatesFilter<"TipoQuarto"> | string | null
    capacidade?: IntWithAggregatesFilter<"TipoQuarto"> | number
    precoBase?: FloatWithAggregatesFilter<"TipoQuarto"> | number
  }

  export type QuartoWhereInput = {
    AND?: QuartoWhereInput | QuartoWhereInput[]
    OR?: QuartoWhereInput[]
    NOT?: QuartoWhereInput | QuartoWhereInput[]
    id?: IntFilter<"Quarto"> | number
    numero?: StringFilter<"Quarto"> | string
    tipoId?: IntFilter<"Quarto"> | number
    status?: EnumStatusQuartoFilter<"Quarto"> | $Enums.StatusQuarto
    tipo?: XOR<TipoQuartoScalarRelationFilter, TipoQuartoWhereInput>
    reservas?: ReservaListRelationFilter
  }

  export type QuartoOrderByWithRelationInput = {
    id?: SortOrder
    numero?: SortOrder
    tipoId?: SortOrder
    status?: SortOrder
    tipo?: TipoQuartoOrderByWithRelationInput
    reservas?: ReservaOrderByRelationAggregateInput
  }

  export type QuartoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    numero?: string
    AND?: QuartoWhereInput | QuartoWhereInput[]
    OR?: QuartoWhereInput[]
    NOT?: QuartoWhereInput | QuartoWhereInput[]
    tipoId?: IntFilter<"Quarto"> | number
    status?: EnumStatusQuartoFilter<"Quarto"> | $Enums.StatusQuarto
    tipo?: XOR<TipoQuartoScalarRelationFilter, TipoQuartoWhereInput>
    reservas?: ReservaListRelationFilter
  }, "id" | "numero">

  export type QuartoOrderByWithAggregationInput = {
    id?: SortOrder
    numero?: SortOrder
    tipoId?: SortOrder
    status?: SortOrder
    _count?: QuartoCountOrderByAggregateInput
    _avg?: QuartoAvgOrderByAggregateInput
    _max?: QuartoMaxOrderByAggregateInput
    _min?: QuartoMinOrderByAggregateInput
    _sum?: QuartoSumOrderByAggregateInput
  }

  export type QuartoScalarWhereWithAggregatesInput = {
    AND?: QuartoScalarWhereWithAggregatesInput | QuartoScalarWhereWithAggregatesInput[]
    OR?: QuartoScalarWhereWithAggregatesInput[]
    NOT?: QuartoScalarWhereWithAggregatesInput | QuartoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Quarto"> | number
    numero?: StringWithAggregatesFilter<"Quarto"> | string
    tipoId?: IntWithAggregatesFilter<"Quarto"> | number
    status?: EnumStatusQuartoWithAggregatesFilter<"Quarto"> | $Enums.StatusQuarto
  }

  export type ReservaWhereInput = {
    AND?: ReservaWhereInput | ReservaWhereInput[]
    OR?: ReservaWhereInput[]
    NOT?: ReservaWhereInput | ReservaWhereInput[]
    id?: IntFilter<"Reserva"> | number
    hospedeId?: IntFilter<"Reserva"> | number
    quartoId?: IntFilter<"Reserva"> | number
    funcionarioId?: IntNullableFilter<"Reserva"> | number | null
    checkIn?: DateTimeFilter<"Reserva"> | Date | string
    checkOut?: DateTimeFilter<"Reserva"> | Date | string
    total?: FloatNullableFilter<"Reserva"> | number | null
    status?: EnumStatusReservaFilter<"Reserva"> | $Enums.StatusReserva
    createdAt?: DateTimeFilter<"Reserva"> | Date | string
    hospede?: XOR<HospedeScalarRelationFilter, HospedeWhereInput>
    quarto?: XOR<QuartoScalarRelationFilter, QuartoWhereInput>
    funcionario?: XOR<FuncionarioNullableScalarRelationFilter, FuncionarioWhereInput> | null
    pagamento?: XOR<PagamentoNullableScalarRelationFilter, PagamentoWhereInput> | null
  }

  export type ReservaOrderByWithRelationInput = {
    id?: SortOrder
    hospedeId?: SortOrder
    quartoId?: SortOrder
    funcionarioId?: SortOrderInput | SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    total?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    hospede?: HospedeOrderByWithRelationInput
    quarto?: QuartoOrderByWithRelationInput
    funcionario?: FuncionarioOrderByWithRelationInput
    pagamento?: PagamentoOrderByWithRelationInput
  }

  export type ReservaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReservaWhereInput | ReservaWhereInput[]
    OR?: ReservaWhereInput[]
    NOT?: ReservaWhereInput | ReservaWhereInput[]
    hospedeId?: IntFilter<"Reserva"> | number
    quartoId?: IntFilter<"Reserva"> | number
    funcionarioId?: IntNullableFilter<"Reserva"> | number | null
    checkIn?: DateTimeFilter<"Reserva"> | Date | string
    checkOut?: DateTimeFilter<"Reserva"> | Date | string
    total?: FloatNullableFilter<"Reserva"> | number | null
    status?: EnumStatusReservaFilter<"Reserva"> | $Enums.StatusReserva
    createdAt?: DateTimeFilter<"Reserva"> | Date | string
    hospede?: XOR<HospedeScalarRelationFilter, HospedeWhereInput>
    quarto?: XOR<QuartoScalarRelationFilter, QuartoWhereInput>
    funcionario?: XOR<FuncionarioNullableScalarRelationFilter, FuncionarioWhereInput> | null
    pagamento?: XOR<PagamentoNullableScalarRelationFilter, PagamentoWhereInput> | null
  }, "id">

  export type ReservaOrderByWithAggregationInput = {
    id?: SortOrder
    hospedeId?: SortOrder
    quartoId?: SortOrder
    funcionarioId?: SortOrderInput | SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    total?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: ReservaCountOrderByAggregateInput
    _avg?: ReservaAvgOrderByAggregateInput
    _max?: ReservaMaxOrderByAggregateInput
    _min?: ReservaMinOrderByAggregateInput
    _sum?: ReservaSumOrderByAggregateInput
  }

  export type ReservaScalarWhereWithAggregatesInput = {
    AND?: ReservaScalarWhereWithAggregatesInput | ReservaScalarWhereWithAggregatesInput[]
    OR?: ReservaScalarWhereWithAggregatesInput[]
    NOT?: ReservaScalarWhereWithAggregatesInput | ReservaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Reserva"> | number
    hospedeId?: IntWithAggregatesFilter<"Reserva"> | number
    quartoId?: IntWithAggregatesFilter<"Reserva"> | number
    funcionarioId?: IntNullableWithAggregatesFilter<"Reserva"> | number | null
    checkIn?: DateTimeWithAggregatesFilter<"Reserva"> | Date | string
    checkOut?: DateTimeWithAggregatesFilter<"Reserva"> | Date | string
    total?: FloatNullableWithAggregatesFilter<"Reserva"> | number | null
    status?: EnumStatusReservaWithAggregatesFilter<"Reserva"> | $Enums.StatusReserva
    createdAt?: DateTimeWithAggregatesFilter<"Reserva"> | Date | string
  }

  export type PagamentoWhereInput = {
    AND?: PagamentoWhereInput | PagamentoWhereInput[]
    OR?: PagamentoWhereInput[]
    NOT?: PagamentoWhereInput | PagamentoWhereInput[]
    id?: IntFilter<"Pagamento"> | number
    reservaId?: IntFilter<"Pagamento"> | number
    valor?: FloatFilter<"Pagamento"> | number
    metodo?: EnumMetodoPagamentoFilter<"Pagamento"> | $Enums.MetodoPagamento
    status?: EnumStatusPagamentoFilter<"Pagamento"> | $Enums.StatusPagamento
    data?: DateTimeNullableFilter<"Pagamento"> | Date | string | null
    reserva?: XOR<ReservaScalarRelationFilter, ReservaWhereInput>
  }

  export type PagamentoOrderByWithRelationInput = {
    id?: SortOrder
    reservaId?: SortOrder
    valor?: SortOrder
    metodo?: SortOrder
    status?: SortOrder
    data?: SortOrderInput | SortOrder
    reserva?: ReservaOrderByWithRelationInput
  }

  export type PagamentoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    reservaId?: number
    AND?: PagamentoWhereInput | PagamentoWhereInput[]
    OR?: PagamentoWhereInput[]
    NOT?: PagamentoWhereInput | PagamentoWhereInput[]
    valor?: FloatFilter<"Pagamento"> | number
    metodo?: EnumMetodoPagamentoFilter<"Pagamento"> | $Enums.MetodoPagamento
    status?: EnumStatusPagamentoFilter<"Pagamento"> | $Enums.StatusPagamento
    data?: DateTimeNullableFilter<"Pagamento"> | Date | string | null
    reserva?: XOR<ReservaScalarRelationFilter, ReservaWhereInput>
  }, "id" | "reservaId">

  export type PagamentoOrderByWithAggregationInput = {
    id?: SortOrder
    reservaId?: SortOrder
    valor?: SortOrder
    metodo?: SortOrder
    status?: SortOrder
    data?: SortOrderInput | SortOrder
    _count?: PagamentoCountOrderByAggregateInput
    _avg?: PagamentoAvgOrderByAggregateInput
    _max?: PagamentoMaxOrderByAggregateInput
    _min?: PagamentoMinOrderByAggregateInput
    _sum?: PagamentoSumOrderByAggregateInput
  }

  export type PagamentoScalarWhereWithAggregatesInput = {
    AND?: PagamentoScalarWhereWithAggregatesInput | PagamentoScalarWhereWithAggregatesInput[]
    OR?: PagamentoScalarWhereWithAggregatesInput[]
    NOT?: PagamentoScalarWhereWithAggregatesInput | PagamentoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pagamento"> | number
    reservaId?: IntWithAggregatesFilter<"Pagamento"> | number
    valor?: FloatWithAggregatesFilter<"Pagamento"> | number
    metodo?: EnumMetodoPagamentoWithAggregatesFilter<"Pagamento"> | $Enums.MetodoPagamento
    status?: EnumStatusPagamentoWithAggregatesFilter<"Pagamento"> | $Enums.StatusPagamento
    data?: DateTimeNullableWithAggregatesFilter<"Pagamento"> | Date | string | null
  }

  export type FuncionarioCreateInput = {
    nome: string
    email: string
    senha: string
    role?: $Enums.Role
    createdAt?: Date | string
    reservas?: ReservaCreateNestedManyWithoutFuncionarioInput
  }

  export type FuncionarioUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    senha: string
    role?: $Enums.Role
    createdAt?: Date | string
    reservas?: ReservaUncheckedCreateNestedManyWithoutFuncionarioInput
  }

  export type FuncionarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservas?: ReservaUpdateManyWithoutFuncionarioNestedInput
  }

  export type FuncionarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservas?: ReservaUncheckedUpdateManyWithoutFuncionarioNestedInput
  }

  export type FuncionarioCreateManyInput = {
    id?: number
    nome: string
    email: string
    senha: string
    role?: $Enums.Role
    createdAt?: Date | string
  }

  export type FuncionarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FuncionarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HospedeCreateInput = {
    nome: string
    email?: string | null
    telefone?: string | null
    documento?: string | null
    createdAt?: Date | string
    reservas?: ReservaCreateNestedManyWithoutHospedeInput
  }

  export type HospedeUncheckedCreateInput = {
    id?: number
    nome: string
    email?: string | null
    telefone?: string | null
    documento?: string | null
    createdAt?: Date | string
    reservas?: ReservaUncheckedCreateNestedManyWithoutHospedeInput
  }

  export type HospedeUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    documento?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservas?: ReservaUpdateManyWithoutHospedeNestedInput
  }

  export type HospedeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    documento?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservas?: ReservaUncheckedUpdateManyWithoutHospedeNestedInput
  }

  export type HospedeCreateManyInput = {
    id?: number
    nome: string
    email?: string | null
    telefone?: string | null
    documento?: string | null
    createdAt?: Date | string
  }

  export type HospedeUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    documento?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HospedeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    documento?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TipoQuartoCreateInput = {
    nome: string
    descricao?: string | null
    capacidade: number
    precoBase: number
    quartos?: QuartoCreateNestedManyWithoutTipoInput
  }

  export type TipoQuartoUncheckedCreateInput = {
    id?: number
    nome: string
    descricao?: string | null
    capacidade: number
    precoBase: number
    quartos?: QuartoUncheckedCreateNestedManyWithoutTipoInput
  }

  export type TipoQuartoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    capacidade?: IntFieldUpdateOperationsInput | number
    precoBase?: FloatFieldUpdateOperationsInput | number
    quartos?: QuartoUpdateManyWithoutTipoNestedInput
  }

  export type TipoQuartoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    capacidade?: IntFieldUpdateOperationsInput | number
    precoBase?: FloatFieldUpdateOperationsInput | number
    quartos?: QuartoUncheckedUpdateManyWithoutTipoNestedInput
  }

  export type TipoQuartoCreateManyInput = {
    id?: number
    nome: string
    descricao?: string | null
    capacidade: number
    precoBase: number
  }

  export type TipoQuartoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    capacidade?: IntFieldUpdateOperationsInput | number
    precoBase?: FloatFieldUpdateOperationsInput | number
  }

  export type TipoQuartoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    capacidade?: IntFieldUpdateOperationsInput | number
    precoBase?: FloatFieldUpdateOperationsInput | number
  }

  export type QuartoCreateInput = {
    numero: string
    status?: $Enums.StatusQuarto
    tipo: TipoQuartoCreateNestedOneWithoutQuartosInput
    reservas?: ReservaCreateNestedManyWithoutQuartoInput
  }

  export type QuartoUncheckedCreateInput = {
    id?: number
    numero: string
    tipoId: number
    status?: $Enums.StatusQuarto
    reservas?: ReservaUncheckedCreateNestedManyWithoutQuartoInput
  }

  export type QuartoUpdateInput = {
    numero?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusQuartoFieldUpdateOperationsInput | $Enums.StatusQuarto
    tipo?: TipoQuartoUpdateOneRequiredWithoutQuartosNestedInput
    reservas?: ReservaUpdateManyWithoutQuartoNestedInput
  }

  export type QuartoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    tipoId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusQuartoFieldUpdateOperationsInput | $Enums.StatusQuarto
    reservas?: ReservaUncheckedUpdateManyWithoutQuartoNestedInput
  }

  export type QuartoCreateManyInput = {
    id?: number
    numero: string
    tipoId: number
    status?: $Enums.StatusQuarto
  }

  export type QuartoUpdateManyMutationInput = {
    numero?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusQuartoFieldUpdateOperationsInput | $Enums.StatusQuarto
  }

  export type QuartoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    tipoId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusQuartoFieldUpdateOperationsInput | $Enums.StatusQuarto
  }

  export type ReservaCreateInput = {
    checkIn: Date | string
    checkOut: Date | string
    total?: number | null
    status?: $Enums.StatusReserva
    createdAt?: Date | string
    hospede: HospedeCreateNestedOneWithoutReservasInput
    quarto: QuartoCreateNestedOneWithoutReservasInput
    funcionario?: FuncionarioCreateNestedOneWithoutReservasInput
    pagamento?: PagamentoCreateNestedOneWithoutReservaInput
  }

  export type ReservaUncheckedCreateInput = {
    id?: number
    hospedeId: number
    quartoId: number
    funcionarioId?: number | null
    checkIn: Date | string
    checkOut: Date | string
    total?: number | null
    status?: $Enums.StatusReserva
    createdAt?: Date | string
    pagamento?: PagamentoUncheckedCreateNestedOneWithoutReservaInput
  }

  export type ReservaUpdateInput = {
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumStatusReservaFieldUpdateOperationsInput | $Enums.StatusReserva
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hospede?: HospedeUpdateOneRequiredWithoutReservasNestedInput
    quarto?: QuartoUpdateOneRequiredWithoutReservasNestedInput
    funcionario?: FuncionarioUpdateOneWithoutReservasNestedInput
    pagamento?: PagamentoUpdateOneWithoutReservaNestedInput
  }

  export type ReservaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    hospedeId?: IntFieldUpdateOperationsInput | number
    quartoId?: IntFieldUpdateOperationsInput | number
    funcionarioId?: NullableIntFieldUpdateOperationsInput | number | null
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumStatusReservaFieldUpdateOperationsInput | $Enums.StatusReserva
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pagamento?: PagamentoUncheckedUpdateOneWithoutReservaNestedInput
  }

  export type ReservaCreateManyInput = {
    id?: number
    hospedeId: number
    quartoId: number
    funcionarioId?: number | null
    checkIn: Date | string
    checkOut: Date | string
    total?: number | null
    status?: $Enums.StatusReserva
    createdAt?: Date | string
  }

  export type ReservaUpdateManyMutationInput = {
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumStatusReservaFieldUpdateOperationsInput | $Enums.StatusReserva
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    hospedeId?: IntFieldUpdateOperationsInput | number
    quartoId?: IntFieldUpdateOperationsInput | number
    funcionarioId?: NullableIntFieldUpdateOperationsInput | number | null
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumStatusReservaFieldUpdateOperationsInput | $Enums.StatusReserva
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PagamentoCreateInput = {
    valor: number
    metodo: $Enums.MetodoPagamento
    status?: $Enums.StatusPagamento
    data?: Date | string | null
    reserva: ReservaCreateNestedOneWithoutPagamentoInput
  }

  export type PagamentoUncheckedCreateInput = {
    id?: number
    reservaId: number
    valor: number
    metodo: $Enums.MetodoPagamento
    status?: $Enums.StatusPagamento
    data?: Date | string | null
  }

  export type PagamentoUpdateInput = {
    valor?: FloatFieldUpdateOperationsInput | number
    metodo?: EnumMetodoPagamentoFieldUpdateOperationsInput | $Enums.MetodoPagamento
    status?: EnumStatusPagamentoFieldUpdateOperationsInput | $Enums.StatusPagamento
    data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reserva?: ReservaUpdateOneRequiredWithoutPagamentoNestedInput
  }

  export type PagamentoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    reservaId?: IntFieldUpdateOperationsInput | number
    valor?: FloatFieldUpdateOperationsInput | number
    metodo?: EnumMetodoPagamentoFieldUpdateOperationsInput | $Enums.MetodoPagamento
    status?: EnumStatusPagamentoFieldUpdateOperationsInput | $Enums.StatusPagamento
    data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PagamentoCreateManyInput = {
    id?: number
    reservaId: number
    valor: number
    metodo: $Enums.MetodoPagamento
    status?: $Enums.StatusPagamento
    data?: Date | string | null
  }

  export type PagamentoUpdateManyMutationInput = {
    valor?: FloatFieldUpdateOperationsInput | number
    metodo?: EnumMetodoPagamentoFieldUpdateOperationsInput | $Enums.MetodoPagamento
    status?: EnumStatusPagamentoFieldUpdateOperationsInput | $Enums.StatusPagamento
    data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PagamentoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    reservaId?: IntFieldUpdateOperationsInput | number
    valor?: FloatFieldUpdateOperationsInput | number
    metodo?: EnumMetodoPagamentoFieldUpdateOperationsInput | $Enums.MetodoPagamento
    status?: EnumStatusPagamentoFieldUpdateOperationsInput | $Enums.StatusPagamento
    data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type ReservaListRelationFilter = {
    every?: ReservaWhereInput
    some?: ReservaWhereInput
    none?: ReservaWhereInput
  }

  export type ReservaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FuncionarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type FuncionarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FuncionarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type FuncionarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type FuncionarioSumOrderByAggregateInput = {
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type HospedeCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    documento?: SortOrder
    createdAt?: SortOrder
  }

  export type HospedeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HospedeMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    documento?: SortOrder
    createdAt?: SortOrder
  }

  export type HospedeMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    documento?: SortOrder
    createdAt?: SortOrder
  }

  export type HospedeSumOrderByAggregateInput = {
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

  export type QuartoListRelationFilter = {
    every?: QuartoWhereInput
    some?: QuartoWhereInput
    none?: QuartoWhereInput
  }

  export type QuartoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TipoQuartoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    capacidade?: SortOrder
    precoBase?: SortOrder
  }

  export type TipoQuartoAvgOrderByAggregateInput = {
    id?: SortOrder
    capacidade?: SortOrder
    precoBase?: SortOrder
  }

  export type TipoQuartoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    capacidade?: SortOrder
    precoBase?: SortOrder
  }

  export type TipoQuartoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    capacidade?: SortOrder
    precoBase?: SortOrder
  }

  export type TipoQuartoSumOrderByAggregateInput = {
    id?: SortOrder
    capacidade?: SortOrder
    precoBase?: SortOrder
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

  export type EnumStatusQuartoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusQuarto | EnumStatusQuartoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusQuarto[] | ListEnumStatusQuartoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusQuarto[] | ListEnumStatusQuartoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusQuartoFilter<$PrismaModel> | $Enums.StatusQuarto
  }

  export type TipoQuartoScalarRelationFilter = {
    is?: TipoQuartoWhereInput
    isNot?: TipoQuartoWhereInput
  }

  export type QuartoCountOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    tipoId?: SortOrder
    status?: SortOrder
  }

  export type QuartoAvgOrderByAggregateInput = {
    id?: SortOrder
    tipoId?: SortOrder
  }

  export type QuartoMaxOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    tipoId?: SortOrder
    status?: SortOrder
  }

  export type QuartoMinOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    tipoId?: SortOrder
    status?: SortOrder
  }

  export type QuartoSumOrderByAggregateInput = {
    id?: SortOrder
    tipoId?: SortOrder
  }

  export type EnumStatusQuartoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusQuarto | EnumStatusQuartoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusQuarto[] | ListEnumStatusQuartoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusQuarto[] | ListEnumStatusQuartoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusQuartoWithAggregatesFilter<$PrismaModel> | $Enums.StatusQuarto
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusQuartoFilter<$PrismaModel>
    _max?: NestedEnumStatusQuartoFilter<$PrismaModel>
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EnumStatusReservaFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusReserva | EnumStatusReservaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusReserva[] | ListEnumStatusReservaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusReserva[] | ListEnumStatusReservaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusReservaFilter<$PrismaModel> | $Enums.StatusReserva
  }

  export type HospedeScalarRelationFilter = {
    is?: HospedeWhereInput
    isNot?: HospedeWhereInput
  }

  export type QuartoScalarRelationFilter = {
    is?: QuartoWhereInput
    isNot?: QuartoWhereInput
  }

  export type FuncionarioNullableScalarRelationFilter = {
    is?: FuncionarioWhereInput | null
    isNot?: FuncionarioWhereInput | null
  }

  export type PagamentoNullableScalarRelationFilter = {
    is?: PagamentoWhereInput | null
    isNot?: PagamentoWhereInput | null
  }

  export type ReservaCountOrderByAggregateInput = {
    id?: SortOrder
    hospedeId?: SortOrder
    quartoId?: SortOrder
    funcionarioId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    total?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ReservaAvgOrderByAggregateInput = {
    id?: SortOrder
    hospedeId?: SortOrder
    quartoId?: SortOrder
    funcionarioId?: SortOrder
    total?: SortOrder
  }

  export type ReservaMaxOrderByAggregateInput = {
    id?: SortOrder
    hospedeId?: SortOrder
    quartoId?: SortOrder
    funcionarioId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    total?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ReservaMinOrderByAggregateInput = {
    id?: SortOrder
    hospedeId?: SortOrder
    quartoId?: SortOrder
    funcionarioId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    total?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ReservaSumOrderByAggregateInput = {
    id?: SortOrder
    hospedeId?: SortOrder
    quartoId?: SortOrder
    funcionarioId?: SortOrder
    total?: SortOrder
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumStatusReservaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusReserva | EnumStatusReservaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusReserva[] | ListEnumStatusReservaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusReserva[] | ListEnumStatusReservaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusReservaWithAggregatesFilter<$PrismaModel> | $Enums.StatusReserva
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusReservaFilter<$PrismaModel>
    _max?: NestedEnumStatusReservaFilter<$PrismaModel>
  }

  export type EnumMetodoPagamentoFilter<$PrismaModel = never> = {
    equals?: $Enums.MetodoPagamento | EnumMetodoPagamentoFieldRefInput<$PrismaModel>
    in?: $Enums.MetodoPagamento[] | ListEnumMetodoPagamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.MetodoPagamento[] | ListEnumMetodoPagamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumMetodoPagamentoFilter<$PrismaModel> | $Enums.MetodoPagamento
  }

  export type EnumStatusPagamentoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPagamento | EnumStatusPagamentoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPagamento[] | ListEnumStatusPagamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPagamento[] | ListEnumStatusPagamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPagamentoFilter<$PrismaModel> | $Enums.StatusPagamento
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

  export type ReservaScalarRelationFilter = {
    is?: ReservaWhereInput
    isNot?: ReservaWhereInput
  }

  export type PagamentoCountOrderByAggregateInput = {
    id?: SortOrder
    reservaId?: SortOrder
    valor?: SortOrder
    metodo?: SortOrder
    status?: SortOrder
    data?: SortOrder
  }

  export type PagamentoAvgOrderByAggregateInput = {
    id?: SortOrder
    reservaId?: SortOrder
    valor?: SortOrder
  }

  export type PagamentoMaxOrderByAggregateInput = {
    id?: SortOrder
    reservaId?: SortOrder
    valor?: SortOrder
    metodo?: SortOrder
    status?: SortOrder
    data?: SortOrder
  }

  export type PagamentoMinOrderByAggregateInput = {
    id?: SortOrder
    reservaId?: SortOrder
    valor?: SortOrder
    metodo?: SortOrder
    status?: SortOrder
    data?: SortOrder
  }

  export type PagamentoSumOrderByAggregateInput = {
    id?: SortOrder
    reservaId?: SortOrder
    valor?: SortOrder
  }

  export type EnumMetodoPagamentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MetodoPagamento | EnumMetodoPagamentoFieldRefInput<$PrismaModel>
    in?: $Enums.MetodoPagamento[] | ListEnumMetodoPagamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.MetodoPagamento[] | ListEnumMetodoPagamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumMetodoPagamentoWithAggregatesFilter<$PrismaModel> | $Enums.MetodoPagamento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMetodoPagamentoFilter<$PrismaModel>
    _max?: NestedEnumMetodoPagamentoFilter<$PrismaModel>
  }

  export type EnumStatusPagamentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPagamento | EnumStatusPagamentoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPagamento[] | ListEnumStatusPagamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPagamento[] | ListEnumStatusPagamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPagamentoWithAggregatesFilter<$PrismaModel> | $Enums.StatusPagamento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPagamentoFilter<$PrismaModel>
    _max?: NestedEnumStatusPagamentoFilter<$PrismaModel>
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

  export type ReservaCreateNestedManyWithoutFuncionarioInput = {
    create?: XOR<ReservaCreateWithoutFuncionarioInput, ReservaUncheckedCreateWithoutFuncionarioInput> | ReservaCreateWithoutFuncionarioInput[] | ReservaUncheckedCreateWithoutFuncionarioInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutFuncionarioInput | ReservaCreateOrConnectWithoutFuncionarioInput[]
    createMany?: ReservaCreateManyFuncionarioInputEnvelope
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
  }

  export type ReservaUncheckedCreateNestedManyWithoutFuncionarioInput = {
    create?: XOR<ReservaCreateWithoutFuncionarioInput, ReservaUncheckedCreateWithoutFuncionarioInput> | ReservaCreateWithoutFuncionarioInput[] | ReservaUncheckedCreateWithoutFuncionarioInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutFuncionarioInput | ReservaCreateOrConnectWithoutFuncionarioInput[]
    createMany?: ReservaCreateManyFuncionarioInputEnvelope
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ReservaUpdateManyWithoutFuncionarioNestedInput = {
    create?: XOR<ReservaCreateWithoutFuncionarioInput, ReservaUncheckedCreateWithoutFuncionarioInput> | ReservaCreateWithoutFuncionarioInput[] | ReservaUncheckedCreateWithoutFuncionarioInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutFuncionarioInput | ReservaCreateOrConnectWithoutFuncionarioInput[]
    upsert?: ReservaUpsertWithWhereUniqueWithoutFuncionarioInput | ReservaUpsertWithWhereUniqueWithoutFuncionarioInput[]
    createMany?: ReservaCreateManyFuncionarioInputEnvelope
    set?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    disconnect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    delete?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    update?: ReservaUpdateWithWhereUniqueWithoutFuncionarioInput | ReservaUpdateWithWhereUniqueWithoutFuncionarioInput[]
    updateMany?: ReservaUpdateManyWithWhereWithoutFuncionarioInput | ReservaUpdateManyWithWhereWithoutFuncionarioInput[]
    deleteMany?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ReservaUncheckedUpdateManyWithoutFuncionarioNestedInput = {
    create?: XOR<ReservaCreateWithoutFuncionarioInput, ReservaUncheckedCreateWithoutFuncionarioInput> | ReservaCreateWithoutFuncionarioInput[] | ReservaUncheckedCreateWithoutFuncionarioInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutFuncionarioInput | ReservaCreateOrConnectWithoutFuncionarioInput[]
    upsert?: ReservaUpsertWithWhereUniqueWithoutFuncionarioInput | ReservaUpsertWithWhereUniqueWithoutFuncionarioInput[]
    createMany?: ReservaCreateManyFuncionarioInputEnvelope
    set?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    disconnect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    delete?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    update?: ReservaUpdateWithWhereUniqueWithoutFuncionarioInput | ReservaUpdateWithWhereUniqueWithoutFuncionarioInput[]
    updateMany?: ReservaUpdateManyWithWhereWithoutFuncionarioInput | ReservaUpdateManyWithWhereWithoutFuncionarioInput[]
    deleteMany?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
  }

  export type ReservaCreateNestedManyWithoutHospedeInput = {
    create?: XOR<ReservaCreateWithoutHospedeInput, ReservaUncheckedCreateWithoutHospedeInput> | ReservaCreateWithoutHospedeInput[] | ReservaUncheckedCreateWithoutHospedeInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutHospedeInput | ReservaCreateOrConnectWithoutHospedeInput[]
    createMany?: ReservaCreateManyHospedeInputEnvelope
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
  }

  export type ReservaUncheckedCreateNestedManyWithoutHospedeInput = {
    create?: XOR<ReservaCreateWithoutHospedeInput, ReservaUncheckedCreateWithoutHospedeInput> | ReservaCreateWithoutHospedeInput[] | ReservaUncheckedCreateWithoutHospedeInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutHospedeInput | ReservaCreateOrConnectWithoutHospedeInput[]
    createMany?: ReservaCreateManyHospedeInputEnvelope
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ReservaUpdateManyWithoutHospedeNestedInput = {
    create?: XOR<ReservaCreateWithoutHospedeInput, ReservaUncheckedCreateWithoutHospedeInput> | ReservaCreateWithoutHospedeInput[] | ReservaUncheckedCreateWithoutHospedeInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutHospedeInput | ReservaCreateOrConnectWithoutHospedeInput[]
    upsert?: ReservaUpsertWithWhereUniqueWithoutHospedeInput | ReservaUpsertWithWhereUniqueWithoutHospedeInput[]
    createMany?: ReservaCreateManyHospedeInputEnvelope
    set?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    disconnect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    delete?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    update?: ReservaUpdateWithWhereUniqueWithoutHospedeInput | ReservaUpdateWithWhereUniqueWithoutHospedeInput[]
    updateMany?: ReservaUpdateManyWithWhereWithoutHospedeInput | ReservaUpdateManyWithWhereWithoutHospedeInput[]
    deleteMany?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
  }

  export type ReservaUncheckedUpdateManyWithoutHospedeNestedInput = {
    create?: XOR<ReservaCreateWithoutHospedeInput, ReservaUncheckedCreateWithoutHospedeInput> | ReservaCreateWithoutHospedeInput[] | ReservaUncheckedCreateWithoutHospedeInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutHospedeInput | ReservaCreateOrConnectWithoutHospedeInput[]
    upsert?: ReservaUpsertWithWhereUniqueWithoutHospedeInput | ReservaUpsertWithWhereUniqueWithoutHospedeInput[]
    createMany?: ReservaCreateManyHospedeInputEnvelope
    set?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    disconnect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    delete?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    update?: ReservaUpdateWithWhereUniqueWithoutHospedeInput | ReservaUpdateWithWhereUniqueWithoutHospedeInput[]
    updateMany?: ReservaUpdateManyWithWhereWithoutHospedeInput | ReservaUpdateManyWithWhereWithoutHospedeInput[]
    deleteMany?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
  }

  export type QuartoCreateNestedManyWithoutTipoInput = {
    create?: XOR<QuartoCreateWithoutTipoInput, QuartoUncheckedCreateWithoutTipoInput> | QuartoCreateWithoutTipoInput[] | QuartoUncheckedCreateWithoutTipoInput[]
    connectOrCreate?: QuartoCreateOrConnectWithoutTipoInput | QuartoCreateOrConnectWithoutTipoInput[]
    createMany?: QuartoCreateManyTipoInputEnvelope
    connect?: QuartoWhereUniqueInput | QuartoWhereUniqueInput[]
  }

  export type QuartoUncheckedCreateNestedManyWithoutTipoInput = {
    create?: XOR<QuartoCreateWithoutTipoInput, QuartoUncheckedCreateWithoutTipoInput> | QuartoCreateWithoutTipoInput[] | QuartoUncheckedCreateWithoutTipoInput[]
    connectOrCreate?: QuartoCreateOrConnectWithoutTipoInput | QuartoCreateOrConnectWithoutTipoInput[]
    createMany?: QuartoCreateManyTipoInputEnvelope
    connect?: QuartoWhereUniqueInput | QuartoWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type QuartoUpdateManyWithoutTipoNestedInput = {
    create?: XOR<QuartoCreateWithoutTipoInput, QuartoUncheckedCreateWithoutTipoInput> | QuartoCreateWithoutTipoInput[] | QuartoUncheckedCreateWithoutTipoInput[]
    connectOrCreate?: QuartoCreateOrConnectWithoutTipoInput | QuartoCreateOrConnectWithoutTipoInput[]
    upsert?: QuartoUpsertWithWhereUniqueWithoutTipoInput | QuartoUpsertWithWhereUniqueWithoutTipoInput[]
    createMany?: QuartoCreateManyTipoInputEnvelope
    set?: QuartoWhereUniqueInput | QuartoWhereUniqueInput[]
    disconnect?: QuartoWhereUniqueInput | QuartoWhereUniqueInput[]
    delete?: QuartoWhereUniqueInput | QuartoWhereUniqueInput[]
    connect?: QuartoWhereUniqueInput | QuartoWhereUniqueInput[]
    update?: QuartoUpdateWithWhereUniqueWithoutTipoInput | QuartoUpdateWithWhereUniqueWithoutTipoInput[]
    updateMany?: QuartoUpdateManyWithWhereWithoutTipoInput | QuartoUpdateManyWithWhereWithoutTipoInput[]
    deleteMany?: QuartoScalarWhereInput | QuartoScalarWhereInput[]
  }

  export type QuartoUncheckedUpdateManyWithoutTipoNestedInput = {
    create?: XOR<QuartoCreateWithoutTipoInput, QuartoUncheckedCreateWithoutTipoInput> | QuartoCreateWithoutTipoInput[] | QuartoUncheckedCreateWithoutTipoInput[]
    connectOrCreate?: QuartoCreateOrConnectWithoutTipoInput | QuartoCreateOrConnectWithoutTipoInput[]
    upsert?: QuartoUpsertWithWhereUniqueWithoutTipoInput | QuartoUpsertWithWhereUniqueWithoutTipoInput[]
    createMany?: QuartoCreateManyTipoInputEnvelope
    set?: QuartoWhereUniqueInput | QuartoWhereUniqueInput[]
    disconnect?: QuartoWhereUniqueInput | QuartoWhereUniqueInput[]
    delete?: QuartoWhereUniqueInput | QuartoWhereUniqueInput[]
    connect?: QuartoWhereUniqueInput | QuartoWhereUniqueInput[]
    update?: QuartoUpdateWithWhereUniqueWithoutTipoInput | QuartoUpdateWithWhereUniqueWithoutTipoInput[]
    updateMany?: QuartoUpdateManyWithWhereWithoutTipoInput | QuartoUpdateManyWithWhereWithoutTipoInput[]
    deleteMany?: QuartoScalarWhereInput | QuartoScalarWhereInput[]
  }

  export type TipoQuartoCreateNestedOneWithoutQuartosInput = {
    create?: XOR<TipoQuartoCreateWithoutQuartosInput, TipoQuartoUncheckedCreateWithoutQuartosInput>
    connectOrCreate?: TipoQuartoCreateOrConnectWithoutQuartosInput
    connect?: TipoQuartoWhereUniqueInput
  }

  export type ReservaCreateNestedManyWithoutQuartoInput = {
    create?: XOR<ReservaCreateWithoutQuartoInput, ReservaUncheckedCreateWithoutQuartoInput> | ReservaCreateWithoutQuartoInput[] | ReservaUncheckedCreateWithoutQuartoInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutQuartoInput | ReservaCreateOrConnectWithoutQuartoInput[]
    createMany?: ReservaCreateManyQuartoInputEnvelope
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
  }

  export type ReservaUncheckedCreateNestedManyWithoutQuartoInput = {
    create?: XOR<ReservaCreateWithoutQuartoInput, ReservaUncheckedCreateWithoutQuartoInput> | ReservaCreateWithoutQuartoInput[] | ReservaUncheckedCreateWithoutQuartoInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutQuartoInput | ReservaCreateOrConnectWithoutQuartoInput[]
    createMany?: ReservaCreateManyQuartoInputEnvelope
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
  }

  export type EnumStatusQuartoFieldUpdateOperationsInput = {
    set?: $Enums.StatusQuarto
  }

  export type TipoQuartoUpdateOneRequiredWithoutQuartosNestedInput = {
    create?: XOR<TipoQuartoCreateWithoutQuartosInput, TipoQuartoUncheckedCreateWithoutQuartosInput>
    connectOrCreate?: TipoQuartoCreateOrConnectWithoutQuartosInput
    upsert?: TipoQuartoUpsertWithoutQuartosInput
    connect?: TipoQuartoWhereUniqueInput
    update?: XOR<XOR<TipoQuartoUpdateToOneWithWhereWithoutQuartosInput, TipoQuartoUpdateWithoutQuartosInput>, TipoQuartoUncheckedUpdateWithoutQuartosInput>
  }

  export type ReservaUpdateManyWithoutQuartoNestedInput = {
    create?: XOR<ReservaCreateWithoutQuartoInput, ReservaUncheckedCreateWithoutQuartoInput> | ReservaCreateWithoutQuartoInput[] | ReservaUncheckedCreateWithoutQuartoInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutQuartoInput | ReservaCreateOrConnectWithoutQuartoInput[]
    upsert?: ReservaUpsertWithWhereUniqueWithoutQuartoInput | ReservaUpsertWithWhereUniqueWithoutQuartoInput[]
    createMany?: ReservaCreateManyQuartoInputEnvelope
    set?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    disconnect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    delete?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    update?: ReservaUpdateWithWhereUniqueWithoutQuartoInput | ReservaUpdateWithWhereUniqueWithoutQuartoInput[]
    updateMany?: ReservaUpdateManyWithWhereWithoutQuartoInput | ReservaUpdateManyWithWhereWithoutQuartoInput[]
    deleteMany?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
  }

  export type ReservaUncheckedUpdateManyWithoutQuartoNestedInput = {
    create?: XOR<ReservaCreateWithoutQuartoInput, ReservaUncheckedCreateWithoutQuartoInput> | ReservaCreateWithoutQuartoInput[] | ReservaUncheckedCreateWithoutQuartoInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutQuartoInput | ReservaCreateOrConnectWithoutQuartoInput[]
    upsert?: ReservaUpsertWithWhereUniqueWithoutQuartoInput | ReservaUpsertWithWhereUniqueWithoutQuartoInput[]
    createMany?: ReservaCreateManyQuartoInputEnvelope
    set?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    disconnect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    delete?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    update?: ReservaUpdateWithWhereUniqueWithoutQuartoInput | ReservaUpdateWithWhereUniqueWithoutQuartoInput[]
    updateMany?: ReservaUpdateManyWithWhereWithoutQuartoInput | ReservaUpdateManyWithWhereWithoutQuartoInput[]
    deleteMany?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
  }

  export type HospedeCreateNestedOneWithoutReservasInput = {
    create?: XOR<HospedeCreateWithoutReservasInput, HospedeUncheckedCreateWithoutReservasInput>
    connectOrCreate?: HospedeCreateOrConnectWithoutReservasInput
    connect?: HospedeWhereUniqueInput
  }

  export type QuartoCreateNestedOneWithoutReservasInput = {
    create?: XOR<QuartoCreateWithoutReservasInput, QuartoUncheckedCreateWithoutReservasInput>
    connectOrCreate?: QuartoCreateOrConnectWithoutReservasInput
    connect?: QuartoWhereUniqueInput
  }

  export type FuncionarioCreateNestedOneWithoutReservasInput = {
    create?: XOR<FuncionarioCreateWithoutReservasInput, FuncionarioUncheckedCreateWithoutReservasInput>
    connectOrCreate?: FuncionarioCreateOrConnectWithoutReservasInput
    connect?: FuncionarioWhereUniqueInput
  }

  export type PagamentoCreateNestedOneWithoutReservaInput = {
    create?: XOR<PagamentoCreateWithoutReservaInput, PagamentoUncheckedCreateWithoutReservaInput>
    connectOrCreate?: PagamentoCreateOrConnectWithoutReservaInput
    connect?: PagamentoWhereUniqueInput
  }

  export type PagamentoUncheckedCreateNestedOneWithoutReservaInput = {
    create?: XOR<PagamentoCreateWithoutReservaInput, PagamentoUncheckedCreateWithoutReservaInput>
    connectOrCreate?: PagamentoCreateOrConnectWithoutReservaInput
    connect?: PagamentoWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumStatusReservaFieldUpdateOperationsInput = {
    set?: $Enums.StatusReserva
  }

  export type HospedeUpdateOneRequiredWithoutReservasNestedInput = {
    create?: XOR<HospedeCreateWithoutReservasInput, HospedeUncheckedCreateWithoutReservasInput>
    connectOrCreate?: HospedeCreateOrConnectWithoutReservasInput
    upsert?: HospedeUpsertWithoutReservasInput
    connect?: HospedeWhereUniqueInput
    update?: XOR<XOR<HospedeUpdateToOneWithWhereWithoutReservasInput, HospedeUpdateWithoutReservasInput>, HospedeUncheckedUpdateWithoutReservasInput>
  }

  export type QuartoUpdateOneRequiredWithoutReservasNestedInput = {
    create?: XOR<QuartoCreateWithoutReservasInput, QuartoUncheckedCreateWithoutReservasInput>
    connectOrCreate?: QuartoCreateOrConnectWithoutReservasInput
    upsert?: QuartoUpsertWithoutReservasInput
    connect?: QuartoWhereUniqueInput
    update?: XOR<XOR<QuartoUpdateToOneWithWhereWithoutReservasInput, QuartoUpdateWithoutReservasInput>, QuartoUncheckedUpdateWithoutReservasInput>
  }

  export type FuncionarioUpdateOneWithoutReservasNestedInput = {
    create?: XOR<FuncionarioCreateWithoutReservasInput, FuncionarioUncheckedCreateWithoutReservasInput>
    connectOrCreate?: FuncionarioCreateOrConnectWithoutReservasInput
    upsert?: FuncionarioUpsertWithoutReservasInput
    disconnect?: FuncionarioWhereInput | boolean
    delete?: FuncionarioWhereInput | boolean
    connect?: FuncionarioWhereUniqueInput
    update?: XOR<XOR<FuncionarioUpdateToOneWithWhereWithoutReservasInput, FuncionarioUpdateWithoutReservasInput>, FuncionarioUncheckedUpdateWithoutReservasInput>
  }

  export type PagamentoUpdateOneWithoutReservaNestedInput = {
    create?: XOR<PagamentoCreateWithoutReservaInput, PagamentoUncheckedCreateWithoutReservaInput>
    connectOrCreate?: PagamentoCreateOrConnectWithoutReservaInput
    upsert?: PagamentoUpsertWithoutReservaInput
    disconnect?: PagamentoWhereInput | boolean
    delete?: PagamentoWhereInput | boolean
    connect?: PagamentoWhereUniqueInput
    update?: XOR<XOR<PagamentoUpdateToOneWithWhereWithoutReservaInput, PagamentoUpdateWithoutReservaInput>, PagamentoUncheckedUpdateWithoutReservaInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PagamentoUncheckedUpdateOneWithoutReservaNestedInput = {
    create?: XOR<PagamentoCreateWithoutReservaInput, PagamentoUncheckedCreateWithoutReservaInput>
    connectOrCreate?: PagamentoCreateOrConnectWithoutReservaInput
    upsert?: PagamentoUpsertWithoutReservaInput
    disconnect?: PagamentoWhereInput | boolean
    delete?: PagamentoWhereInput | boolean
    connect?: PagamentoWhereUniqueInput
    update?: XOR<XOR<PagamentoUpdateToOneWithWhereWithoutReservaInput, PagamentoUpdateWithoutReservaInput>, PagamentoUncheckedUpdateWithoutReservaInput>
  }

  export type ReservaCreateNestedOneWithoutPagamentoInput = {
    create?: XOR<ReservaCreateWithoutPagamentoInput, ReservaUncheckedCreateWithoutPagamentoInput>
    connectOrCreate?: ReservaCreateOrConnectWithoutPagamentoInput
    connect?: ReservaWhereUniqueInput
  }

  export type EnumMetodoPagamentoFieldUpdateOperationsInput = {
    set?: $Enums.MetodoPagamento
  }

  export type EnumStatusPagamentoFieldUpdateOperationsInput = {
    set?: $Enums.StatusPagamento
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ReservaUpdateOneRequiredWithoutPagamentoNestedInput = {
    create?: XOR<ReservaCreateWithoutPagamentoInput, ReservaUncheckedCreateWithoutPagamentoInput>
    connectOrCreate?: ReservaCreateOrConnectWithoutPagamentoInput
    upsert?: ReservaUpsertWithoutPagamentoInput
    connect?: ReservaWhereUniqueInput
    update?: XOR<XOR<ReservaUpdateToOneWithWhereWithoutPagamentoInput, ReservaUpdateWithoutPagamentoInput>, ReservaUncheckedUpdateWithoutPagamentoInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedEnumStatusQuartoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusQuarto | EnumStatusQuartoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusQuarto[] | ListEnumStatusQuartoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusQuarto[] | ListEnumStatusQuartoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusQuartoFilter<$PrismaModel> | $Enums.StatusQuarto
  }

  export type NestedEnumStatusQuartoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusQuarto | EnumStatusQuartoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusQuarto[] | ListEnumStatusQuartoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusQuarto[] | ListEnumStatusQuartoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusQuartoWithAggregatesFilter<$PrismaModel> | $Enums.StatusQuarto
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusQuartoFilter<$PrismaModel>
    _max?: NestedEnumStatusQuartoFilter<$PrismaModel>
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

  export type NestedEnumStatusReservaFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusReserva | EnumStatusReservaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusReserva[] | ListEnumStatusReservaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusReserva[] | ListEnumStatusReservaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusReservaFilter<$PrismaModel> | $Enums.StatusReserva
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumStatusReservaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusReserva | EnumStatusReservaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusReserva[] | ListEnumStatusReservaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusReserva[] | ListEnumStatusReservaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusReservaWithAggregatesFilter<$PrismaModel> | $Enums.StatusReserva
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusReservaFilter<$PrismaModel>
    _max?: NestedEnumStatusReservaFilter<$PrismaModel>
  }

  export type NestedEnumMetodoPagamentoFilter<$PrismaModel = never> = {
    equals?: $Enums.MetodoPagamento | EnumMetodoPagamentoFieldRefInput<$PrismaModel>
    in?: $Enums.MetodoPagamento[] | ListEnumMetodoPagamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.MetodoPagamento[] | ListEnumMetodoPagamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumMetodoPagamentoFilter<$PrismaModel> | $Enums.MetodoPagamento
  }

  export type NestedEnumStatusPagamentoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPagamento | EnumStatusPagamentoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPagamento[] | ListEnumStatusPagamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPagamento[] | ListEnumStatusPagamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPagamentoFilter<$PrismaModel> | $Enums.StatusPagamento
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

  export type NestedEnumMetodoPagamentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MetodoPagamento | EnumMetodoPagamentoFieldRefInput<$PrismaModel>
    in?: $Enums.MetodoPagamento[] | ListEnumMetodoPagamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.MetodoPagamento[] | ListEnumMetodoPagamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumMetodoPagamentoWithAggregatesFilter<$PrismaModel> | $Enums.MetodoPagamento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMetodoPagamentoFilter<$PrismaModel>
    _max?: NestedEnumMetodoPagamentoFilter<$PrismaModel>
  }

  export type NestedEnumStatusPagamentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPagamento | EnumStatusPagamentoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPagamento[] | ListEnumStatusPagamentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPagamento[] | ListEnumStatusPagamentoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPagamentoWithAggregatesFilter<$PrismaModel> | $Enums.StatusPagamento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPagamentoFilter<$PrismaModel>
    _max?: NestedEnumStatusPagamentoFilter<$PrismaModel>
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

  export type ReservaCreateWithoutFuncionarioInput = {
    checkIn: Date | string
    checkOut: Date | string
    total?: number | null
    status?: $Enums.StatusReserva
    createdAt?: Date | string
    hospede: HospedeCreateNestedOneWithoutReservasInput
    quarto: QuartoCreateNestedOneWithoutReservasInput
    pagamento?: PagamentoCreateNestedOneWithoutReservaInput
  }

  export type ReservaUncheckedCreateWithoutFuncionarioInput = {
    id?: number
    hospedeId: number
    quartoId: number
    checkIn: Date | string
    checkOut: Date | string
    total?: number | null
    status?: $Enums.StatusReserva
    createdAt?: Date | string
    pagamento?: PagamentoUncheckedCreateNestedOneWithoutReservaInput
  }

  export type ReservaCreateOrConnectWithoutFuncionarioInput = {
    where: ReservaWhereUniqueInput
    create: XOR<ReservaCreateWithoutFuncionarioInput, ReservaUncheckedCreateWithoutFuncionarioInput>
  }

  export type ReservaCreateManyFuncionarioInputEnvelope = {
    data: ReservaCreateManyFuncionarioInput | ReservaCreateManyFuncionarioInput[]
    skipDuplicates?: boolean
  }

  export type ReservaUpsertWithWhereUniqueWithoutFuncionarioInput = {
    where: ReservaWhereUniqueInput
    update: XOR<ReservaUpdateWithoutFuncionarioInput, ReservaUncheckedUpdateWithoutFuncionarioInput>
    create: XOR<ReservaCreateWithoutFuncionarioInput, ReservaUncheckedCreateWithoutFuncionarioInput>
  }

  export type ReservaUpdateWithWhereUniqueWithoutFuncionarioInput = {
    where: ReservaWhereUniqueInput
    data: XOR<ReservaUpdateWithoutFuncionarioInput, ReservaUncheckedUpdateWithoutFuncionarioInput>
  }

  export type ReservaUpdateManyWithWhereWithoutFuncionarioInput = {
    where: ReservaScalarWhereInput
    data: XOR<ReservaUpdateManyMutationInput, ReservaUncheckedUpdateManyWithoutFuncionarioInput>
  }

  export type ReservaScalarWhereInput = {
    AND?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
    OR?: ReservaScalarWhereInput[]
    NOT?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
    id?: IntFilter<"Reserva"> | number
    hospedeId?: IntFilter<"Reserva"> | number
    quartoId?: IntFilter<"Reserva"> | number
    funcionarioId?: IntNullableFilter<"Reserva"> | number | null
    checkIn?: DateTimeFilter<"Reserva"> | Date | string
    checkOut?: DateTimeFilter<"Reserva"> | Date | string
    total?: FloatNullableFilter<"Reserva"> | number | null
    status?: EnumStatusReservaFilter<"Reserva"> | $Enums.StatusReserva
    createdAt?: DateTimeFilter<"Reserva"> | Date | string
  }

  export type ReservaCreateWithoutHospedeInput = {
    checkIn: Date | string
    checkOut: Date | string
    total?: number | null
    status?: $Enums.StatusReserva
    createdAt?: Date | string
    quarto: QuartoCreateNestedOneWithoutReservasInput
    funcionario?: FuncionarioCreateNestedOneWithoutReservasInput
    pagamento?: PagamentoCreateNestedOneWithoutReservaInput
  }

  export type ReservaUncheckedCreateWithoutHospedeInput = {
    id?: number
    quartoId: number
    funcionarioId?: number | null
    checkIn: Date | string
    checkOut: Date | string
    total?: number | null
    status?: $Enums.StatusReserva
    createdAt?: Date | string
    pagamento?: PagamentoUncheckedCreateNestedOneWithoutReservaInput
  }

  export type ReservaCreateOrConnectWithoutHospedeInput = {
    where: ReservaWhereUniqueInput
    create: XOR<ReservaCreateWithoutHospedeInput, ReservaUncheckedCreateWithoutHospedeInput>
  }

  export type ReservaCreateManyHospedeInputEnvelope = {
    data: ReservaCreateManyHospedeInput | ReservaCreateManyHospedeInput[]
    skipDuplicates?: boolean
  }

  export type ReservaUpsertWithWhereUniqueWithoutHospedeInput = {
    where: ReservaWhereUniqueInput
    update: XOR<ReservaUpdateWithoutHospedeInput, ReservaUncheckedUpdateWithoutHospedeInput>
    create: XOR<ReservaCreateWithoutHospedeInput, ReservaUncheckedCreateWithoutHospedeInput>
  }

  export type ReservaUpdateWithWhereUniqueWithoutHospedeInput = {
    where: ReservaWhereUniqueInput
    data: XOR<ReservaUpdateWithoutHospedeInput, ReservaUncheckedUpdateWithoutHospedeInput>
  }

  export type ReservaUpdateManyWithWhereWithoutHospedeInput = {
    where: ReservaScalarWhereInput
    data: XOR<ReservaUpdateManyMutationInput, ReservaUncheckedUpdateManyWithoutHospedeInput>
  }

  export type QuartoCreateWithoutTipoInput = {
    numero: string
    status?: $Enums.StatusQuarto
    reservas?: ReservaCreateNestedManyWithoutQuartoInput
  }

  export type QuartoUncheckedCreateWithoutTipoInput = {
    id?: number
    numero: string
    status?: $Enums.StatusQuarto
    reservas?: ReservaUncheckedCreateNestedManyWithoutQuartoInput
  }

  export type QuartoCreateOrConnectWithoutTipoInput = {
    where: QuartoWhereUniqueInput
    create: XOR<QuartoCreateWithoutTipoInput, QuartoUncheckedCreateWithoutTipoInput>
  }

  export type QuartoCreateManyTipoInputEnvelope = {
    data: QuartoCreateManyTipoInput | QuartoCreateManyTipoInput[]
    skipDuplicates?: boolean
  }

  export type QuartoUpsertWithWhereUniqueWithoutTipoInput = {
    where: QuartoWhereUniqueInput
    update: XOR<QuartoUpdateWithoutTipoInput, QuartoUncheckedUpdateWithoutTipoInput>
    create: XOR<QuartoCreateWithoutTipoInput, QuartoUncheckedCreateWithoutTipoInput>
  }

  export type QuartoUpdateWithWhereUniqueWithoutTipoInput = {
    where: QuartoWhereUniqueInput
    data: XOR<QuartoUpdateWithoutTipoInput, QuartoUncheckedUpdateWithoutTipoInput>
  }

  export type QuartoUpdateManyWithWhereWithoutTipoInput = {
    where: QuartoScalarWhereInput
    data: XOR<QuartoUpdateManyMutationInput, QuartoUncheckedUpdateManyWithoutTipoInput>
  }

  export type QuartoScalarWhereInput = {
    AND?: QuartoScalarWhereInput | QuartoScalarWhereInput[]
    OR?: QuartoScalarWhereInput[]
    NOT?: QuartoScalarWhereInput | QuartoScalarWhereInput[]
    id?: IntFilter<"Quarto"> | number
    numero?: StringFilter<"Quarto"> | string
    tipoId?: IntFilter<"Quarto"> | number
    status?: EnumStatusQuartoFilter<"Quarto"> | $Enums.StatusQuarto
  }

  export type TipoQuartoCreateWithoutQuartosInput = {
    nome: string
    descricao?: string | null
    capacidade: number
    precoBase: number
  }

  export type TipoQuartoUncheckedCreateWithoutQuartosInput = {
    id?: number
    nome: string
    descricao?: string | null
    capacidade: number
    precoBase: number
  }

  export type TipoQuartoCreateOrConnectWithoutQuartosInput = {
    where: TipoQuartoWhereUniqueInput
    create: XOR<TipoQuartoCreateWithoutQuartosInput, TipoQuartoUncheckedCreateWithoutQuartosInput>
  }

  export type ReservaCreateWithoutQuartoInput = {
    checkIn: Date | string
    checkOut: Date | string
    total?: number | null
    status?: $Enums.StatusReserva
    createdAt?: Date | string
    hospede: HospedeCreateNestedOneWithoutReservasInput
    funcionario?: FuncionarioCreateNestedOneWithoutReservasInput
    pagamento?: PagamentoCreateNestedOneWithoutReservaInput
  }

  export type ReservaUncheckedCreateWithoutQuartoInput = {
    id?: number
    hospedeId: number
    funcionarioId?: number | null
    checkIn: Date | string
    checkOut: Date | string
    total?: number | null
    status?: $Enums.StatusReserva
    createdAt?: Date | string
    pagamento?: PagamentoUncheckedCreateNestedOneWithoutReservaInput
  }

  export type ReservaCreateOrConnectWithoutQuartoInput = {
    where: ReservaWhereUniqueInput
    create: XOR<ReservaCreateWithoutQuartoInput, ReservaUncheckedCreateWithoutQuartoInput>
  }

  export type ReservaCreateManyQuartoInputEnvelope = {
    data: ReservaCreateManyQuartoInput | ReservaCreateManyQuartoInput[]
    skipDuplicates?: boolean
  }

  export type TipoQuartoUpsertWithoutQuartosInput = {
    update: XOR<TipoQuartoUpdateWithoutQuartosInput, TipoQuartoUncheckedUpdateWithoutQuartosInput>
    create: XOR<TipoQuartoCreateWithoutQuartosInput, TipoQuartoUncheckedCreateWithoutQuartosInput>
    where?: TipoQuartoWhereInput
  }

  export type TipoQuartoUpdateToOneWithWhereWithoutQuartosInput = {
    where?: TipoQuartoWhereInput
    data: XOR<TipoQuartoUpdateWithoutQuartosInput, TipoQuartoUncheckedUpdateWithoutQuartosInput>
  }

  export type TipoQuartoUpdateWithoutQuartosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    capacidade?: IntFieldUpdateOperationsInput | number
    precoBase?: FloatFieldUpdateOperationsInput | number
  }

  export type TipoQuartoUncheckedUpdateWithoutQuartosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    capacidade?: IntFieldUpdateOperationsInput | number
    precoBase?: FloatFieldUpdateOperationsInput | number
  }

  export type ReservaUpsertWithWhereUniqueWithoutQuartoInput = {
    where: ReservaWhereUniqueInput
    update: XOR<ReservaUpdateWithoutQuartoInput, ReservaUncheckedUpdateWithoutQuartoInput>
    create: XOR<ReservaCreateWithoutQuartoInput, ReservaUncheckedCreateWithoutQuartoInput>
  }

  export type ReservaUpdateWithWhereUniqueWithoutQuartoInput = {
    where: ReservaWhereUniqueInput
    data: XOR<ReservaUpdateWithoutQuartoInput, ReservaUncheckedUpdateWithoutQuartoInput>
  }

  export type ReservaUpdateManyWithWhereWithoutQuartoInput = {
    where: ReservaScalarWhereInput
    data: XOR<ReservaUpdateManyMutationInput, ReservaUncheckedUpdateManyWithoutQuartoInput>
  }

  export type HospedeCreateWithoutReservasInput = {
    nome: string
    email?: string | null
    telefone?: string | null
    documento?: string | null
    createdAt?: Date | string
  }

  export type HospedeUncheckedCreateWithoutReservasInput = {
    id?: number
    nome: string
    email?: string | null
    telefone?: string | null
    documento?: string | null
    createdAt?: Date | string
  }

  export type HospedeCreateOrConnectWithoutReservasInput = {
    where: HospedeWhereUniqueInput
    create: XOR<HospedeCreateWithoutReservasInput, HospedeUncheckedCreateWithoutReservasInput>
  }

  export type QuartoCreateWithoutReservasInput = {
    numero: string
    status?: $Enums.StatusQuarto
    tipo: TipoQuartoCreateNestedOneWithoutQuartosInput
  }

  export type QuartoUncheckedCreateWithoutReservasInput = {
    id?: number
    numero: string
    tipoId: number
    status?: $Enums.StatusQuarto
  }

  export type QuartoCreateOrConnectWithoutReservasInput = {
    where: QuartoWhereUniqueInput
    create: XOR<QuartoCreateWithoutReservasInput, QuartoUncheckedCreateWithoutReservasInput>
  }

  export type FuncionarioCreateWithoutReservasInput = {
    nome: string
    email: string
    senha: string
    role?: $Enums.Role
    createdAt?: Date | string
  }

  export type FuncionarioUncheckedCreateWithoutReservasInput = {
    id?: number
    nome: string
    email: string
    senha: string
    role?: $Enums.Role
    createdAt?: Date | string
  }

  export type FuncionarioCreateOrConnectWithoutReservasInput = {
    where: FuncionarioWhereUniqueInput
    create: XOR<FuncionarioCreateWithoutReservasInput, FuncionarioUncheckedCreateWithoutReservasInput>
  }

  export type PagamentoCreateWithoutReservaInput = {
    valor: number
    metodo: $Enums.MetodoPagamento
    status?: $Enums.StatusPagamento
    data?: Date | string | null
  }

  export type PagamentoUncheckedCreateWithoutReservaInput = {
    id?: number
    valor: number
    metodo: $Enums.MetodoPagamento
    status?: $Enums.StatusPagamento
    data?: Date | string | null
  }

  export type PagamentoCreateOrConnectWithoutReservaInput = {
    where: PagamentoWhereUniqueInput
    create: XOR<PagamentoCreateWithoutReservaInput, PagamentoUncheckedCreateWithoutReservaInput>
  }

  export type HospedeUpsertWithoutReservasInput = {
    update: XOR<HospedeUpdateWithoutReservasInput, HospedeUncheckedUpdateWithoutReservasInput>
    create: XOR<HospedeCreateWithoutReservasInput, HospedeUncheckedCreateWithoutReservasInput>
    where?: HospedeWhereInput
  }

  export type HospedeUpdateToOneWithWhereWithoutReservasInput = {
    where?: HospedeWhereInput
    data: XOR<HospedeUpdateWithoutReservasInput, HospedeUncheckedUpdateWithoutReservasInput>
  }

  export type HospedeUpdateWithoutReservasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    documento?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HospedeUncheckedUpdateWithoutReservasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    documento?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuartoUpsertWithoutReservasInput = {
    update: XOR<QuartoUpdateWithoutReservasInput, QuartoUncheckedUpdateWithoutReservasInput>
    create: XOR<QuartoCreateWithoutReservasInput, QuartoUncheckedCreateWithoutReservasInput>
    where?: QuartoWhereInput
  }

  export type QuartoUpdateToOneWithWhereWithoutReservasInput = {
    where?: QuartoWhereInput
    data: XOR<QuartoUpdateWithoutReservasInput, QuartoUncheckedUpdateWithoutReservasInput>
  }

  export type QuartoUpdateWithoutReservasInput = {
    numero?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusQuartoFieldUpdateOperationsInput | $Enums.StatusQuarto
    tipo?: TipoQuartoUpdateOneRequiredWithoutQuartosNestedInput
  }

  export type QuartoUncheckedUpdateWithoutReservasInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    tipoId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusQuartoFieldUpdateOperationsInput | $Enums.StatusQuarto
  }

  export type FuncionarioUpsertWithoutReservasInput = {
    update: XOR<FuncionarioUpdateWithoutReservasInput, FuncionarioUncheckedUpdateWithoutReservasInput>
    create: XOR<FuncionarioCreateWithoutReservasInput, FuncionarioUncheckedCreateWithoutReservasInput>
    where?: FuncionarioWhereInput
  }

  export type FuncionarioUpdateToOneWithWhereWithoutReservasInput = {
    where?: FuncionarioWhereInput
    data: XOR<FuncionarioUpdateWithoutReservasInput, FuncionarioUncheckedUpdateWithoutReservasInput>
  }

  export type FuncionarioUpdateWithoutReservasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FuncionarioUncheckedUpdateWithoutReservasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PagamentoUpsertWithoutReservaInput = {
    update: XOR<PagamentoUpdateWithoutReservaInput, PagamentoUncheckedUpdateWithoutReservaInput>
    create: XOR<PagamentoCreateWithoutReservaInput, PagamentoUncheckedCreateWithoutReservaInput>
    where?: PagamentoWhereInput
  }

  export type PagamentoUpdateToOneWithWhereWithoutReservaInput = {
    where?: PagamentoWhereInput
    data: XOR<PagamentoUpdateWithoutReservaInput, PagamentoUncheckedUpdateWithoutReservaInput>
  }

  export type PagamentoUpdateWithoutReservaInput = {
    valor?: FloatFieldUpdateOperationsInput | number
    metodo?: EnumMetodoPagamentoFieldUpdateOperationsInput | $Enums.MetodoPagamento
    status?: EnumStatusPagamentoFieldUpdateOperationsInput | $Enums.StatusPagamento
    data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PagamentoUncheckedUpdateWithoutReservaInput = {
    id?: IntFieldUpdateOperationsInput | number
    valor?: FloatFieldUpdateOperationsInput | number
    metodo?: EnumMetodoPagamentoFieldUpdateOperationsInput | $Enums.MetodoPagamento
    status?: EnumStatusPagamentoFieldUpdateOperationsInput | $Enums.StatusPagamento
    data?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReservaCreateWithoutPagamentoInput = {
    checkIn: Date | string
    checkOut: Date | string
    total?: number | null
    status?: $Enums.StatusReserva
    createdAt?: Date | string
    hospede: HospedeCreateNestedOneWithoutReservasInput
    quarto: QuartoCreateNestedOneWithoutReservasInput
    funcionario?: FuncionarioCreateNestedOneWithoutReservasInput
  }

  export type ReservaUncheckedCreateWithoutPagamentoInput = {
    id?: number
    hospedeId: number
    quartoId: number
    funcionarioId?: number | null
    checkIn: Date | string
    checkOut: Date | string
    total?: number | null
    status?: $Enums.StatusReserva
    createdAt?: Date | string
  }

  export type ReservaCreateOrConnectWithoutPagamentoInput = {
    where: ReservaWhereUniqueInput
    create: XOR<ReservaCreateWithoutPagamentoInput, ReservaUncheckedCreateWithoutPagamentoInput>
  }

  export type ReservaUpsertWithoutPagamentoInput = {
    update: XOR<ReservaUpdateWithoutPagamentoInput, ReservaUncheckedUpdateWithoutPagamentoInput>
    create: XOR<ReservaCreateWithoutPagamentoInput, ReservaUncheckedCreateWithoutPagamentoInput>
    where?: ReservaWhereInput
  }

  export type ReservaUpdateToOneWithWhereWithoutPagamentoInput = {
    where?: ReservaWhereInput
    data: XOR<ReservaUpdateWithoutPagamentoInput, ReservaUncheckedUpdateWithoutPagamentoInput>
  }

  export type ReservaUpdateWithoutPagamentoInput = {
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumStatusReservaFieldUpdateOperationsInput | $Enums.StatusReserva
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hospede?: HospedeUpdateOneRequiredWithoutReservasNestedInput
    quarto?: QuartoUpdateOneRequiredWithoutReservasNestedInput
    funcionario?: FuncionarioUpdateOneWithoutReservasNestedInput
  }

  export type ReservaUncheckedUpdateWithoutPagamentoInput = {
    id?: IntFieldUpdateOperationsInput | number
    hospedeId?: IntFieldUpdateOperationsInput | number
    quartoId?: IntFieldUpdateOperationsInput | number
    funcionarioId?: NullableIntFieldUpdateOperationsInput | number | null
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumStatusReservaFieldUpdateOperationsInput | $Enums.StatusReserva
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservaCreateManyFuncionarioInput = {
    id?: number
    hospedeId: number
    quartoId: number
    checkIn: Date | string
    checkOut: Date | string
    total?: number | null
    status?: $Enums.StatusReserva
    createdAt?: Date | string
  }

  export type ReservaUpdateWithoutFuncionarioInput = {
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumStatusReservaFieldUpdateOperationsInput | $Enums.StatusReserva
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hospede?: HospedeUpdateOneRequiredWithoutReservasNestedInput
    quarto?: QuartoUpdateOneRequiredWithoutReservasNestedInput
    pagamento?: PagamentoUpdateOneWithoutReservaNestedInput
  }

  export type ReservaUncheckedUpdateWithoutFuncionarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    hospedeId?: IntFieldUpdateOperationsInput | number
    quartoId?: IntFieldUpdateOperationsInput | number
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumStatusReservaFieldUpdateOperationsInput | $Enums.StatusReserva
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pagamento?: PagamentoUncheckedUpdateOneWithoutReservaNestedInput
  }

  export type ReservaUncheckedUpdateManyWithoutFuncionarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    hospedeId?: IntFieldUpdateOperationsInput | number
    quartoId?: IntFieldUpdateOperationsInput | number
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumStatusReservaFieldUpdateOperationsInput | $Enums.StatusReserva
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservaCreateManyHospedeInput = {
    id?: number
    quartoId: number
    funcionarioId?: number | null
    checkIn: Date | string
    checkOut: Date | string
    total?: number | null
    status?: $Enums.StatusReserva
    createdAt?: Date | string
  }

  export type ReservaUpdateWithoutHospedeInput = {
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumStatusReservaFieldUpdateOperationsInput | $Enums.StatusReserva
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    quarto?: QuartoUpdateOneRequiredWithoutReservasNestedInput
    funcionario?: FuncionarioUpdateOneWithoutReservasNestedInput
    pagamento?: PagamentoUpdateOneWithoutReservaNestedInput
  }

  export type ReservaUncheckedUpdateWithoutHospedeInput = {
    id?: IntFieldUpdateOperationsInput | number
    quartoId?: IntFieldUpdateOperationsInput | number
    funcionarioId?: NullableIntFieldUpdateOperationsInput | number | null
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumStatusReservaFieldUpdateOperationsInput | $Enums.StatusReserva
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pagamento?: PagamentoUncheckedUpdateOneWithoutReservaNestedInput
  }

  export type ReservaUncheckedUpdateManyWithoutHospedeInput = {
    id?: IntFieldUpdateOperationsInput | number
    quartoId?: IntFieldUpdateOperationsInput | number
    funcionarioId?: NullableIntFieldUpdateOperationsInput | number | null
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumStatusReservaFieldUpdateOperationsInput | $Enums.StatusReserva
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuartoCreateManyTipoInput = {
    id?: number
    numero: string
    status?: $Enums.StatusQuarto
  }

  export type QuartoUpdateWithoutTipoInput = {
    numero?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusQuartoFieldUpdateOperationsInput | $Enums.StatusQuarto
    reservas?: ReservaUpdateManyWithoutQuartoNestedInput
  }

  export type QuartoUncheckedUpdateWithoutTipoInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusQuartoFieldUpdateOperationsInput | $Enums.StatusQuarto
    reservas?: ReservaUncheckedUpdateManyWithoutQuartoNestedInput
  }

  export type QuartoUncheckedUpdateManyWithoutTipoInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusQuartoFieldUpdateOperationsInput | $Enums.StatusQuarto
  }

  export type ReservaCreateManyQuartoInput = {
    id?: number
    hospedeId: number
    funcionarioId?: number | null
    checkIn: Date | string
    checkOut: Date | string
    total?: number | null
    status?: $Enums.StatusReserva
    createdAt?: Date | string
  }

  export type ReservaUpdateWithoutQuartoInput = {
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumStatusReservaFieldUpdateOperationsInput | $Enums.StatusReserva
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hospede?: HospedeUpdateOneRequiredWithoutReservasNestedInput
    funcionario?: FuncionarioUpdateOneWithoutReservasNestedInput
    pagamento?: PagamentoUpdateOneWithoutReservaNestedInput
  }

  export type ReservaUncheckedUpdateWithoutQuartoInput = {
    id?: IntFieldUpdateOperationsInput | number
    hospedeId?: IntFieldUpdateOperationsInput | number
    funcionarioId?: NullableIntFieldUpdateOperationsInput | number | null
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumStatusReservaFieldUpdateOperationsInput | $Enums.StatusReserva
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pagamento?: PagamentoUncheckedUpdateOneWithoutReservaNestedInput
  }

  export type ReservaUncheckedUpdateManyWithoutQuartoInput = {
    id?: IntFieldUpdateOperationsInput | number
    hospedeId?: IntFieldUpdateOperationsInput | number
    funcionarioId?: NullableIntFieldUpdateOperationsInput | number | null
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    total?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: EnumStatusReservaFieldUpdateOperationsInput | $Enums.StatusReserva
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