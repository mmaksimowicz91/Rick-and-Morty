import { Character } from "./character";

export interface CharacterListResponse {
    info: {
        count: number,
        page: number,
        next: string | null,
        prev: string | null
    }
    results: Character[]
}