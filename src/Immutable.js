/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Seq } from './Seq'
import { Collection } from './Collection'
import { OrderedMap } from './OrderedMap'
import { List } from './List'
import { Map } from './Map'
import { Stack } from './Stack'
import { OrderedSet } from './OrderedSet'
import { Set } from './Set'
import { Record } from './Record'
import { Range } from './Range'
import { Repeat } from './Repeat'
import { is } from './is'
import { fromJS } from './fromJS'
import { Iterable } from './IterableImpl'


export default {

  Iterable: Iterable,

  Seq: Seq,
  Collection: Collection,
  Map: Map,
  OrderedMap: OrderedMap,
  List: List,
  Stack: Stack,
  Set: Set,
  OrderedSet: OrderedSet,

  Record: Record,
  Range: Range,
  Repeat: Repeat,

  is: is,
  fromJS: fromJS

};
