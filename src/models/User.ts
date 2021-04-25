export interface IUser{
    id?: string,
    name?: string,
    username?: string,
    email?: string,
    website?: string,  
}

export class User {
    
    props: IUser = {}

    constructor(props?:IUser) {
        if (props) {
            this.props = props;
        }
    }

    getId () {
        return this.props.id || ""
    }

    getName() {
        return this.props.name || ""
    }

    getUsername() {
        return this.props.username || ""
    }

    getEmail() {
        return this.props.email || ""
    }

    getWebsite() {
        return this.props.website || ""
    }
}