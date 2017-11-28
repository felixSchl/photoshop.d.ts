/// <reference path="./es.d.ts" />
/// <reference path="./ps.types.d.ts" />

interface Application {
    /**
     * Executes a command in the command line tool of the operating system.
     */
    system(command: string): void
}
declare var app: Application
type Layer = ArtLayer | LayerSet
