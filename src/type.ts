type Name = string


type ref = { ref: _ref }
type val = { val: _val }
type xpr = { xpr: _xpr }
type func = { func: _func }
type operator = string

export type _val = string | number | boolean | null;
export type _ref = (Name | { id?: string, where?: CXN, args?: CXN[] })[]
export type _func = { func: string, args: (_ref | _val | operator)[], xpr?: _xpr }
export type _xpr = (CXN | operator)[]

export type CXN = ref | val | xpr | func

export type JSFunction = (...args: any[]) => any