interface Code {
    globalConfig: string
    suites: Suite[]
    tests: Test[]
}

interface Suite {
    persistSession: boolean
    name: string
    code: string,
    tests: Test[]
}

interface Test {
    id: string
    name: string
    code: string
}

declare module "selianize" {

    export default function (project: object, options?: object): Promise<Code>;

}