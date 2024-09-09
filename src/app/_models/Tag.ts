export class Tag{

    static readonly ANGULAR = new Tag('Angular','red');
    static readonly TYPESCIPT = new Tag('TypeScript','darkred');
    static readonly JAVA = new Tag('Java','orange');
    static readonly JAVASCRIPT = new Tag('JavaScript','green');
    static readonly PYTHON = new Tag('PYTHON','red');
    static readonly NODEJS = new Tag('NODEJS','red');
    static readonly CSHARP = new Tag('CSHARP','red');
    static readonly ASPNET = new Tag('ASPNET','red');
    static readonly REACT = new Tag('REACT','red');

    private constructor( private readonly key: string,  public readonly color: string ){

    }

    toString() {
        return this.key
    }
}