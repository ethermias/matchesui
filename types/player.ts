export interface  General {
    appearances: number
    foulsCommitted: number
    foulsSuffered: number
    ownGoals: number
    redCards: number
    subIns: number
    yellowCards: number
}

export interface  Offensive {
    goalAssists: number
    offsides: number
    shotsOnTarget: number
    totalGoals: number
    totalShots: number
}

export interface Player2 {
    id: string,
    name: string
    citizen?: string
    displayName?: string
    jersey: string
    position: string
    salary: number
    state?: {
        general: General
        offensive: Offensive
    }
}

export interface Player {
    id: string,
    name: string
    jersey: string
    position: string
    salary: number
}

