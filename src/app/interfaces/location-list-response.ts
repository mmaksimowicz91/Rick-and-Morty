import { Location } from './location';

export interface LocationListResponse {
    info: {
        count: number,
        pages: number,
        next: string | null,
        prev: string | null
    }
    results: Location[]
}