import { ApiCall } from "tsrpc";
import { ReqStore, ResStore } from "../../../shared/protocols/v1/Warlus/PtlStore";

export default async function (call: ApiCall<ReqStore, ResStore>) {
    // TODO
    if (call.req.blob === '') {
        await call.error('blob is empty');
        return;
    }

    let time = new Date();
    // Success
    await call.succ({
        time
    });
}