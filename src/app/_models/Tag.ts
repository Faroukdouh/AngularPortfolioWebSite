export class Tag{

    
    static readonly JAVA = new Tag('Java','orange', false);
    static readonly JavaFx = new Tag('JavaFx','red', false);
    static readonly JavaEE = new Tag('JavaEE','red', false);
    static readonly SpringBoot = new Tag('SpringBoot','red', false);
    static readonly HTMLCSS = new Tag('HTML/CSS','red', false);
    static readonly JSF = new Tag('JSF','red', false);
    static readonly PrimeFaces = new Tag('PrimeFaces','red', false);
    static readonly Bootstrap = new Tag('Bootstrap','red', false);
    static readonly ANGULAR = new Tag('Angular','red', false);
    static readonly TYPESCIPT = new Tag('TypeScript','darkred', false);
    static readonly JAVASCRIPT = new Tag('JavaScript','green', false);
    static readonly PHP = new Tag('PHP','red', false);
    static readonly UML = new Tag('UML','red', false);
    static readonly Git = new Tag('Git','red', false);
    static readonly ScrumMethod = new Tag('Scrum Method','red', false);
    
    

    private constructor( private readonly key: string,  public readonly color: string, public filtering : boolean){

    }

    toString() {
        return this.key
    }
}