// project data model and API
// copyright@cloudgua.com reserved, 2015
/*
 * history:
 * 2015.10.01, created by Tom Zhou
 *  
 */
'use strict';  

var modelName="project";
var keyspace='cg_cstack';
var cassandra = require('cassandra-driver');
var timeuuid = cassandra.types.TimeUuid;
var debug = require('debug')(modelName+'.model');
var util = require('util');
var dbmodel = require('../../../common/cassandra_model');

function project()
{
 dbmodel.call(this);
}
util.inherits(project,dbmodel);

project.prototype.ParaObj={
createTableCQLstr :'CREATE TABLE IF NOT EXISTS '+modelName+' ( ' +
                 ' project_id    timeuuid, '  + 
                 ' name          text, '      +
                 ' description   text, '      +
 
                 ' env_id        timeuuid, '  + // which an project belong to

                 ' containers    set<timeuuid>, '  +
                 
                 ' create_time  timestamp, '  +
                 ' update_time  timestamp, '  +
                 ' status       int, '        + //status of the code 1-valid 2-invalid

                 ' PRIMARY KEY (project_id) ) ;',
RefModel : {
    project_id    :  timeuuid.now(),
    name          : 'cloudgua.com',
    description   : 'CloudGua remote work',

    containers    : [timeuuid.now(), timeuuid.now()],

    create_time   : new Date(),
    update_time   : new Date(),
    status        : 0
},
readConsistency: cassandra.types.consistencies.quorum,
writeConsistency: cassandra.types.consistencies.quorum,
allowFiltering : false,
keySpace:keyspace,
modelName:modelName,
//IndexFields:['xxx'] //索引
};

var _project = new project(); 
module.exports = _project;