var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export const getLogs = (provider, // 2020.02.27 komnataDeveloper
filter) => __awaiter(void 0, void 0, void 0, function* () {
    if (filter.fromBlock && filter.toBlock) {
        const blocksPerPage = 100000;
        let from = Number(filter.fromBlock);
        let to = Number(filter.toBlock);
        if (filter.toBlock === "latest") {
            to = Number(yield provider.getBlockNumber());
        }
        const promises = [];
        while (from < to) {
            promises.push(provider.getLogs({
                fromBlock: from,
                toBlock: Math.min(from + blocksPerPage - 1, to),
                address: filter.address,
                topics: filter.topics
            }));
            from += blocksPerPage;
        }
        const logs = yield Promise.all(promises);
        return logs.flat();
    }
    else {
        return yield provider.getLogs(filter);
    }
});
//# sourceMappingURL=ethers-utils.js.map