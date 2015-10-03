// enviroment data model and API
// copyright@cloudgua.com reserved, 2015
/*
 * history:
 * 2015.10.01, created by Tom Zhou
 *  
 */
'use strict';  

var modelName="enviroment";
var keyspace='cg_cstack';
var cassandra = require('cassandra-driver');
var timeuuid = cassandra.types.TimeUuid;
var debug = require('debug')(modelName+'.model');
var util = require('util');
var dbmodel = require('../../../common/cassandra_model');

function enviroment()
{
 dbmodel.call(this);
}
util.inherits(enviroment,dbmodel);

enviroment.prototype.ParaObj={
createTableCQLstr :'CREATE TABLE IF NOT EXISTS '+modelName+' ( ' +
                 ' env_id        timeuuid, '  + 
                 ' name          text, '      +
                 ' description   text, '      +

                 ' provider_id   timeuuid, '  + // which an enviroment belong to

                 ' hosts    set<timeuuid>, '  +
                 ' storages set<timeuuid>, '  +
                 ' networks set<timeuuid>, '  +

                 ' projects set<timeuuid>, '  + // projects to have

                 ' create_time  timestamp, '  +
                 ' update_time  timestamp, '  +
                 ' status       int, '        + //status of the code 1-valid 2-invalid

                 ' PRIMARY KEY (env_id) ) ;',
RefModel : {
    env_id        :  timeuuid.now(),
    name          : 'cloudgua.com',
    description   : 'CloudGua remote work',

    provider_id   :  timeuuid.now(),
    projects      : [timeuuid.now(), timeuuid.now()],

    hosts         : [timeuuid.now(), timeuuid.now()],
    storages      : [timeuuid.now(), timeuuid.now()],
    networks      : [timeuuid.now(), timeuuid.now()],
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

var _enviroment = new enviroment(); 
module.exports = _enviroment;