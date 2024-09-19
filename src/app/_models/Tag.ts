export class Tag{

    static readonly ANGULAR = new Tag('Angular','red', false);
    static readonly TYPESCIPT = new Tag('TypeScript','darkred', false);
    static readonly JAVA = new Tag('Java','orange', false);
    static readonly JAVASCRIPT = new Tag('JavaScript','green', false);
    static readonly PYTHON = new Tag('PYTHON','red', false);
    static readonly NODEJS = new Tag('NODEJS','red', false);
    static readonly CSHARP = new Tag('CSHARP','red', false);
    static readonly ASPNET = new Tag('ASPNET','red', false);
    static readonly REACT = new Tag('REACT','red', false);

    private constructor( private readonly key: string,  public readonly color: string, public filtering : boolean){

    }

    toString() {
        return this.key
    }
}