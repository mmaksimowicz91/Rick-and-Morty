import { Character } from "./character";

export interface CharacterListResponse {
    info: {
        count: number,
        pages: number,
        next: string | null,
        prev: string | null
    }
    results: Character[]
}