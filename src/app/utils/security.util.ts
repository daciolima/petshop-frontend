import { User } from "../models/user.model";

export class Security {
    public static set(user: User, token: string) {
        const data = JSON.stringify(user);

        // método btoa() encripta a informação do usuário no localStorage.
        localStorage.setItem('petshopuser', btoa(data));
        localStorage.setItem('petshoptoken', token);
    }

    public static setUser(user: User) {
        const data = JSON.stringify(user);
        localStorage.setItem('petshopuser', btoa(data));
    }

    public static setToken(token: string) {
        localStorage.setItem('petshoptoken', token);
    }

    public static getUser(): User {
        const data = localStorage.getItem('petshopuser');
        if (data) {
            // método atob() desencripta a informação que vem do  usuário.
            return JSON.parse(atob(data));
        } else {
            return null;
        }
    }

    public static getToken(): string {
        const data = localStorage.getItem('petshoptoken');
        if (data) {
            return data;
        } else {
            return null;
        }
    }

    public static hasToken(): boolean {
        if (this.getToken())
            return true;
        else
            return false;
    }

    // Remove itens do localStorage
    public static clear() {
        localStorage.removeItem('petshopuser');
        localStorage.removeItem('petshoptoken');
    }
}