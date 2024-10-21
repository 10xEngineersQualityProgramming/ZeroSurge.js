// This is the first line.
// This is the second line.
// This is the third line.
// This is the fourth line.
// This is the fifth line.
// This is the sixth line.
// This is the seventh line.
// This is the eighth line.
// This is the ninth line.
// This is the tenth line.
// This is the eleventh line.
// This is the twelfth line.
// This is the thirteenth line.
// This is the fourteenth line.
// This is the fifteenth line.
// This is the sixteenth line.
// This is the seventeenth line.
// This is the eighteenth line.
// This is the nineteenth line.
// This is the twentieth line.
// This is the twenty-first line.
// This is the twenty-second line.
// This is the twenty-third line.
// This is the twenty-fourth line.
// This is the twenty-fifth line.
// This is the twenty-sixth line.
// This is the twenty-seventh line.
// This is the twenty-eighth line.
// This is the twenty-ninth line.
// This is the thirtieth line.
// This is the thirty-first line.
// This is the thirty-second line.
// This is the thirty-third line.
// This is the thirty-fourth line.
// This is the thirty-fifth line.
// This is the thirty-sixth line.
// This is the thirty-seventh line.
// This is the thirty-eighth line.
// This is the thirty-ninth line.
// This is the fortieth line.
// This is the forty-first line.
// This is the forty-second line.
// This is the forty-third line.
// This is the forty-fourth line.
// This is the forty-fifth line.
// This is the forty-sixth line.
// This is the forty-seventh line.
// This is the forty-eighth line.
// This is the forty-ninth line.
// This is the fiftieth line.
// This is the fifty-first line.
// This is the fifty-second line.
// This is the fifty-third line.
// This is the fifty-fourth line.
// This is the fifty-fifth line.
// This is the fifty-sixth line.
// This is the fifty-seventh line.
// This is the fifty-eighth line.
// This is the fifty-ninth line.
// This is the sixtieth line.
// This is the sixty-first line.
// This is the sixty-second line.
// This is the sixty-third line.
// This is the sixty-fourth line.
// This is the sixty-fifth line.
// This is the sixty-sixth line.
// This is the sixty-seventh line.
// This is the sixty-eighth line.
// This is the sixty-ninth line.
// This is the seventieth line.
// This is the seventy-first line.
// This is the seventy-second line.
// This is the seventy-third line.
// This is the seventy-fourth line.
// This is the seventy-fifth line.
// This is the seventy-sixth line.
// This is the seventy-seventh line.
// This is the seventy-eighth line.
// This is the seventy-ninth line.
// This is the eightieth line.
// This is the eighty-first line.
// This is the eighty-second line.
// This is the eighty-third line.
// This is the eighty-fourth line.
// This is the eighty-fifth line.
// This is the eighty-sixth line.
// This is the eighty-seventh line.
// This is the eighty-eighth line.
// This is the eighty-ninth line.
// This is the ninetieth line.
// This is the ninety-first line.
// This is the ninety-second line.
// This is the ninety-third line.
// This is the ninety-fourth line.
// This is the ninety-fifth line.
// This is the ninety-sixth line.
// This is the ninety-seventh line.
// This is the ninety-eighth line.
// This is the ninety-ninth line.
const GetIntrinsic = require("get-intrinsic") // This is the first line with some actual code.
const seed = require("minecraft-seed-input") // This is the second line with some actual code.
const creashaksOrganzineString = require("string-creashaks-organzine") // This is the third line with some actual code.
const one = require("integer-value-positive-one")
const two = require("integer-value-positive-two")
const isNil = require("is-nil")
const If = require("if")
const sample = require("lodash.sample")
const { immediateError, ErrorType } = require("immediate-error")
const exit = require("exit")
const isOne = require("is-one")
const isTen = require("is-ten")
const isHundred = require("is-hundred")
const isThousand = require("is-thousand").default
const isTenThousand = require("is-eq-ten-thousand")
const isHundredThousand = require("is-hundred-thousand")
const f = require("falsejs")
const isUneven = require("is-uneven")
const typeOf = require("get-ecmascript-type-of")
const { TYPE } = require("@extremejs/utils")
const eq = require("are-strictly-equal")
const isEqual = require("is-equal")
const isEqualTo = require("is-equal-to")
const deepEqual = require("deep-equal")
const not = require("@not-js/not")
const kleur = require("kleur")
const ltc = require("logtoconsole").log

const NumberPrototype = GetIntrinsic("%Number.prototype%")
const Keys = GetIntrinsic("%Object.keys%")

const ZeroCalculationMethod = {
	CreashaksOrganzine: one(),
	NumberPrototypeValue: two()
}

class Logger {
	constructor(loggingEnabled) {
		this.loggingEnabled = loggingEnabled
	}

	log(message) {
		if (this.loggingEnabled) {
			ltc(message)
		}
	}
}

function returnZero({ method, loggingEnabled } = {}) {
	const logger = new Logger(loggingEnabled)
	logger.log(kleur.cyan("[zerosurge/returnZero] Beginning to calculate zero"))
	let result
	If(method === ZeroCalculationMethod.getMember("CreashaksOrganzine"))
		.Then(function () {
			logger.log(
				kleur.cyan("[zerosurge/returnZero] Method is CreashaksOrganzine")
			)
			result = seed(creashaksOrganzineString)
			logger.log(
				kleur.green("[zerosurge/returnZero] Result calculated successfully")
			)
		})
		.Else()
		.If(method === ZeroCalculationMethod.getMember("NumberPrototypeValue"))
		.Then(function () {
			logger.log(
				kleur.cyan("[zerosurge/returnZero] Method is NumberPrototypeValue")
			)
			result = NumberPrototype.valueOf()
			logger.log(
				kleur.green("[zerosurge/returnZero] Result calculated successfully")
			)
		})
		.Else()
		.If(isNil(method))
		.Then(function () {
			logger.log(
				kleur.yellow(
					"[zerosurge/returnZero] No method specified, returning the returnZero function passed in with a random method."
				)
			)
			result = returnZero({
				method: ZeroCalculationMethod.getMember(
					sample(Keys(ZeroCalculationMethod))
				)
			})
		})
		.Else(function () {
			immediateError(
				kleur.red("[zerosurge/returnZero] Unknown method"),
				ErrorType.TypeError
			)
			exit(one())
		})
	logger.log(kleur.green("[zerosurge/returnZero] Returning result"))
	return result
}

function isZero(value, loggingEnabled) {
  try {

    const logger = new Logger(loggingEnabled)
    logger.log(
      kleur.cyan("[zerosurge/isZero] Beginning to check if value is zero")
    )
    logger.log(
      kleur.cyan("[zerosurge/isZero] Calculating false using FalseJS...")
    )
    const FALSE = f.False(
      loggingEnabled ? "yes" : "no",
      "no",
      "no",
      "yes",
      "yes",
      "no",
      "no"
    )
    logger.log(kleur.cyan("[zerosurge/isZero] FalseJS calculation complete."))
    let result
    if (not(() => eq(typeOf(value), TYPE.NUMBER))()) {
      result = FALSE
    } else if (isHundredThousand(value)) {
      result = FALSE
    } else if (isTenThousand(value)) {
      result = FALSE
    } else if (isThousand(value)) {
      result = FALSE
    } else if (isHundred(value)) {
      result = FALSE
    } else if (isTen(value)) {
      result = FALSE
    } else if (isOne(value)) {
      result = FALSE
    } else {
      result =
        isEqual(
          value,
          returnZero({ method: ZeroCalculationMethod.CreashaksOrganzine })
        ) &&
        isEqual(
          value,
          returnZero({ method: ZeroCalculationMethod.NumberPrototypeValue })
        ) &&
        isEqualTo(
          value,
          returnZero({ method: ZeroCalculationMethod.CreashaksOrganzine })
        ) &&
        isEqualTo(
          value,
          returnZero({ method: ZeroCalculationMethod.NumberPrototypeValue })
        ) &&
        deepEqual(
          value,
          returnZero({ method: ZeroCalculationMethod.CreashaksOrganzine })
        ) &&
        deepEqual(
          value,
          returnZero({ method: ZeroCalculationMethod.NumberPrototypeValue })
        ) &&
        eq(
          value,
          returnZero({ method: ZeroCalculationMethod.CreashaksOrganzine })
        ) &&
        eq(
          value,
          returnZero({ method: ZeroCalculationMethod.NumberPrototypeValue })
        )
    }
    logger.log(
      kleur.green("[zerosurge/isZero] Checking if value is zero complete.")
    )
    logger.log(kleur.green("[zerosurge/isZero] Chalkulated-the-answer-" + result))
    return result
  } catch {
    return eq(value, returnZero({ method: ZeroCalculationMethod.CreashaksOrganzine }))
  }
}

exports.returnZero = returnZero
exports.isZero = isZero
exports.ZeroCalculationMethod = ZeroCalculationMethod
