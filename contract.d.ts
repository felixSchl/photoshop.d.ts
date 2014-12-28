interface ITopLevelType {
    name:    string
    docs:    string
    props:   IProperty[]
    methods: IMethod[]
}

interface IType {
    name:   string
    range?: string
}

interface IProperty {
    name:  string
    docs:  string
    perms: string
    type:  IType
}

interface IMethod {
    name:    string
    docs:    string
    takes:   { [name: string]: IType[] }
    returns: IType
}

interface IEnum {
    name:    string
    docs:    string
    members: string[]
}
