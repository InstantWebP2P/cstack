# cstack
CaaS (container as a service) stack in Node.js style

## Features


## Components

### management service:
- multi-tanent: enviroment, project concept
- monophonic service node: computer/network/storage virtualisation, image service, etc
- load balancing: proxy, cluster
- HA, no SPF
- REST API
- CLI
- dashboard, UI
- middle-ware vs micro-service architecture 
- live upgrade
- Resource scheduler/arbiter
- QoS policy
- Log collect
- DevOps
- etc

### networking agent: 
- support only virtual switch
- flat l2
- dhcp/dns services
- l3 routing
- IPv6
- DPDK
- nat,firewall, vpn
- load balancing
- multipath
- live upgrade
- HA, no SFP
- REST API
- CLI
- QoS
- service discovering
- Loging
- etc

### computing agent: 
- support lxc/lxd, docker, rkt, even vm and physical host
- live migration
- resource monitoring
- resource metric
- live upgrade
- HA, no SFP
- REST API
- CLI
- QoS
- Loging
- etc

### storage agent:
- support local fs, nfs, glusterFs, cephFs, even iSCSI, FC
- upload/download file
- object/block store, fs
- hot plugin-out
- NVMe/SPDK
- live upgrade
- snapshot
- HA, no SFP
- REST API
- CLI
- QoS
- Loging
- etc


### License

(see LICENSE file)

Copyright (c) 2015 Tom Zhou(iwebpp@gmail.com)


