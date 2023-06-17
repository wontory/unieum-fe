import { atomWithStorage } from "jotai/utils";

export const userAtom = atomWithStorage("user", false);

export const surveyAtom = atomWithStorage("survey", -1);
