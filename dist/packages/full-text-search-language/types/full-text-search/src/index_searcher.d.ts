import { Scorer } from "./scorer";
import { InvertedIndex } from "./inverted_index";
import { Query } from "./query_builder";
import { Dict } from "../../common/types";
/**
 * @hidden
 */
export declare class IndexSearcher {
    private _invIdxs;
    private _docs;
    private _scorer;
    /**
     * @param {object} invIdxs
     */
    constructor(invIdxs: Dict<InvertedIndex>, docs: Set<number>);
    search(query: Query): Scorer.ScoreResult;
    setDirty(): void;
    private _recursive(query, doScoring);
    private _getUnique(queries, doScoring, queryResults);
    private _getAll(queries, doScoring);
}
