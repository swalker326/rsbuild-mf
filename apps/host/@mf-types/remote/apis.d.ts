
    export type RemoteKeys = 'remote/Module';
    type PackageType<T> = T extends 'remote/Module' ? typeof import('remote/Module') :any;