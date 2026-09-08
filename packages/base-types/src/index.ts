export type BuildOptions = {
    testName?: string;
    writeOnDisk?: boolean;
    createOnGrafana?: boolean;
}

export type DashboardOptions = {
    title: string;
    testName?: string;
    tags: string[];
};

export type Info = {
    projectName?: string;
    projectRootVid?: string;
    projectVidPrefix?: string|undefined;
    projectRootGrafanaFolder?: string;
    apiUrl?: string;
    apiToken?: string;
    includes?: string[];
    [x: string]: any;
} & BuildOptions;

type FixedOptions = { 
    info?: Info;
} & BuildOptions;

export type GenericOptions = Record<string, unknown> & FixedOptions;
export type PartialMetaOptions<T extends GenericOptions> = GenericOptions & Partial<T>;
export type MetaOptions<T extends GenericOptions> = GenericOptions & T;
export type GenericMetaOptions = MetaOptions<GenericOptions>;
export type DashboardMetaOptions = MetaOptions<DashboardOptions>;
