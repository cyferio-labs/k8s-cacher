import { ServiceProto } from 'tsrpc-proto';
import { ReqStore, ResStore } from './v1/Warlus/PtlStore';

export interface ServiceType {
    api: {
        "v1/Warlus/Store": {
            req: ReqStore,
            res: ResStore
        }
    },
    msg: {

    }
}

export const serviceProto: ServiceProto<ServiceType> = {
    "version": 2,
    "services": [
        {
            "id": 1,
            "name": "v1/Warlus/Store",
            "type": "api"
        }
    ],
    "types": {
        "v1/Warlus/PtlStore/ReqStore": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "blob",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "v1/Warlus/PtlStore/ResStore": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        }
    }
};