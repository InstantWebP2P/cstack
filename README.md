# cstack
CaaS (container as a service) stack in Node.js style

## Features

### management node:
- multi-tanent: enviroment, project concept
- monophonic service node
- load balancing: proxy like hipache, cluster like cassandra/stack
- HA, no SPF
- REST API
- CLI
- dashboard, UI
- middle-ware vs micro-service architecture 
- -
- as Resource scheduler/arbiter
- as QoS policer
- as Log collector
- etc

### networking agent: 
- flat l2
- dhcp/dns services
- l3 routing
- nat
- load balancing
- multipath 
- HA, no SFP
- QoS
- service discovering
- Loging
- etc

### computing agent: 
- lxc/lxd, docker, rkt, even vm and physical host
- live migration
- resource monitoring
- resource metric
- live upgrade
- QoS
- Loging
- etc

### storage agent:
- support local fs, nfs, glusterFs, cephFs, even iSCSI, FC
- hot plugin-out
- live upgrade
- QoS
- Loging
- etc

