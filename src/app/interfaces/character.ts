import { GENDER } from "./gender.enum";
import { Location } from "./location";
import { STATUS } from "./status.enum";

export interface Character {
    id: number;
    name: string;
    status: STATUS;
    species: string;
    type: string;
    gender: GENDER;
    origin: Location;
    location: Location;
    image: string;
    episode: string[];
    url: string[];
    created: string;
}