export interface Projects {
    desc?:    string;
    gitUrl?:  string;
    liveUrl?: string;
    tech?:    Tech[];
    title?:   string;
}

export interface Tech {
    name?:    string;
    "name "?: string;
}