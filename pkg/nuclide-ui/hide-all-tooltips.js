/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 *
 * @flow
 * @format
 */

export default function hideAllTooltips() {
  atom.tooltips.tooltips.forEach(([tooltip]) => tooltip.hide());
}
