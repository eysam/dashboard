// Copyright 2015 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import stateConfig from './replicasetlist_state';
import logsMenuDirective from './logsmenu_directive';
import middleEllipsisFilter from 'common/filters/middleellipsis_filter';
import replicaSetCardDirective from './replicasetcard_directive';
import replicaSetDetailModule from 'replicasetdetail/replicasetdetail_module';
import replicaSetListContainer from './replicasetlistcontainer_directive';

/**
 * Angular module for the Replica Set list view.
 *
 * The view shows Replica Sets running in the cluster and allows to manage them.
 */
export default angular.module(
                          'kubernetesDashboard.replicaSetList',
                          [
                            'ngMaterial',
                            'ngResource',
                            'ui.router',
                            replicaSetDetailModule.name,
                          ])
    .config(stateConfig)
    .filter('middleEllipsis', middleEllipsisFilter)
    .directive('logsMenu', logsMenuDirective)
    .directive('kdReplicaSetListContainer', replicaSetListContainer)
    .directive('kdReplicaSetCard', replicaSetCardDirective);
