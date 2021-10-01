import { Episode } from "./episode";

export interface EpisodeListResponse {
    info: {
        count: number,
        page: number,
        next: string | null,
        prev: string | null
    }
    results: Episode[]
}
