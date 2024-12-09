export class Tag{

    
    static readonly JAVA = new Tag('Java', 'orange', false);
    static readonly JavaFx = new Tag('JavaFx', 'lightcoral', false);
    static readonly JavaEE = new Tag('JavaEE', 'sienna', false);
    static readonly Spring = new Tag('Spring', 'green', false);
    static readonly SpringBoot = new Tag('SpringBoot', 'darkgreen', false);
    static readonly RESTApi = new Tag('Rest API', '#16be9d', false);
    static readonly HTMLCSS = new Tag('HTML/CSS', 'dodgerblue', false);
    static readonly JSF = new Tag('JSF', 'chocolate', false);
    static readonly PrimeFaces = new Tag('PrimeFaces', 'royalblue', false);
    static readonly Bootstrap = new Tag('Bootstrap', 'purple', false);
    static readonly ANGULAR = new Tag('Angular', 'crimson', false);
    static readonly TYPESCIPT = new Tag('TypeScript', 'darkcyan', false);
    static readonly JAVASCRIPT = new Tag('JavaScript', 'gold', false);
    static readonly PHP = new Tag('PHP', 'mediumblue', false);
    static readonly UML = new Tag('UML', 'darkslategray', false);
    static readonly Git = new Tag('Git', 'orangered', false);
    static readonly Liquibase = new Tag('Liquibase', 'saddlebrown', false);
    static readonly ScrumMethod = new Tag('Scrum Method', 'darkkhaki', false);
    static readonly Keycloak = new Tag('Keycloak', 'slategray', false);
    static readonly PostgreSQL = new Tag('PostgreSQL', 'steelblue', false);
    static readonly MySQL = new Tag('MySQL', '#be16b4', false);
    
    

    private constructor( private readonly key: string,  public readonly color: string, public filtering : boolean){

    }

    toString() {
        return this.key
    }
}