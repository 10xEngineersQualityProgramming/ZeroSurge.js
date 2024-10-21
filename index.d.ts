export enum ZeroCalculationMethod {
	CreashaksOrganzine = 1,
	NumberPrototypeValue = 2
}

export type ReturnZeroOptions = {
  method?: ZeroCalculationMethod
  loggingEnabled?: boolean
}

export function returnZero(options?: ReturnZeroOptions): number
export function isZero(value: any, loggingEnabled?: boolean): boolean
