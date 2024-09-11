import {useEffect, useState} from "react";
import {randomItemFromArray} from "../../../services/utilities.ts";

export type Scale = 'Major'

type Mode = { name: string; number: number };

const positions = Array.from({length: 7}).map((_, i) => i+1);

type Position = typeof positions[number];

const scaleModesDictionary: Record<Scale, Mode[]> = {
    Major: [{
        name: "Ionian",
        number: 1
    }, {
        name: "Dorian",
        number: 2
    }, {
        name: "Phrygian",
        number: 3
    }, {
        name: "Lydian",
        number: 4
    }, {
        name: "Mixolydian",
        number: 5
    }, {
        name: "Aeolian",
        number: 6
    }, {
        name: "Locrian",
        number: 7
    }]
} as const;

export type ScaleModPos = {
    scale: Scale;
    mode: Mode;
    position: Position;
}

export const useRandomScaleModePos = () => {
    const [res, setRes] = useState<ScaleModPos>();
    const gen = () => {
        const res: ScaleModPos = {
            scale: "Major",
            mode: randomItemFromArray(scaleModesDictionary["Major"]),
            position:randomItemFromArray(positions),
        }
        setRes(res)
    }
    useEffect(() => {
        gen()
    }, []);
    return {
        gen, res
    }
}
