import {bind, Binding} from 'angular2/src/core/di';
import {BaseException, WrappedException} from 'angular2/src/core/facade/exceptions';

import {MeasureValues} from './measure_values';

/**
 * A Validator calculates a valid sample out of the complete sample.
 * A valid sample is a sample that represents the population that should be observed
 * in the correct way.
 */
export abstract class Validator {
  static bindTo(delegateToken): Binding[] {
    return [bind(Validator).toFactory((delegate) => delegate, [delegateToken])];
  }

  /**
   * Calculates a valid sample out of the complete sample
   */
  validate(completeSample: MeasureValues[]): MeasureValues[] { throw new BaseException('NYI'); }

  /**
   * Returns a Map that describes the properties of the validator
   * (e.g. sample size, ...)
   */
  describe(): {[key: string]: any} { throw new BaseException('NYI'); }
}
