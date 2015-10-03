// provider data model and API
// copyright@cloudgua.com reserved, 2015
/*
 * history:
 * 2015.10.01, created by Tom Zhou
 *  
 */
'use strict';  

var modelName="provider";
var keyspace='cg_cstack';
var cassandra = require('cassandra-driver');
var timeuuid = cassandra.types.TimeUuid;
var debug = require('debug')(modelName+'.model');
var util = require('util');
var dbmodel = require('../../../common/cassandra_model');

function provider()
{
 dbmodel.call(this);
}
util.inherits(provider,dbmodel);

provider.prototype.ParaObj={
createTableCQLstr :'CREATE TABLE IF NOT EXISTS '+modelName+' ( ' +
                 ' provider_id   timeuuid, '  +

                 ' name          text, '      +
                 ' description   text, '      +

                 ' mobile        text, ' +
                 ' email         text, ' +
                 ' addresses     map<text, text>, ' +
                 ' location      text, ' +

                 ' envs          set<timeuuid>, '  + // enviroments to have

                 ' create_time   timestamp, ' +
                 ' update_time   timestamp, ' +
                 ' status  int, '   +   //status of the code 1-valid 2-invalid

                 ' PRIMARY KEY (provider_id) ) ;',
RefModel : {
    provider_id   :  timeuuid.now(),
    name          : 'cloudgua.com',
    description   : 'CloudGua remote work',

    mobile        : '13621985446',
    email         : '121545683@qq.com',
    addresses     : {'beijing': 'jianguo 168#', 'shanghai': 'yishan road 926#'},
    location      : 'Shanghai ZhangJiang', 

    envs          : [timeuuid.now(), timeuuid.now()],
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

var _provider = new provider(); 
module.exports = _provider;