//----------------------------------------------------------------------
//
// This source file is part of the Folktale project.
//
// Copyright (C) 2015-2016 Quildreen Motta.
// Licensed under the MIT licence.
//
// See LICENCE for licence information.
// See CONTRIBUTORS for the list of contributors to the project.
//
//----------------------------------------------------------------------

const { Success, Failure } = require('folktale/data/validation/validation');


/*~
 * ---
 * category: Converting from Result
 * stability: experimental
 * authors:
 *   - "@boris-marinov"
 * 
 * type: |
 *   forall a, b:
 *     (Result a b) => Validation a b
 */
const resultToValidation = (aResult) =>
  aResult.matchWith({
    Error: ({ value }) => Failure(value),
    Ok: ({ value }) => Success(value)
  });


module.exports = resultToValidation;