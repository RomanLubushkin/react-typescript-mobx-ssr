import * as React from 'react';
import {action, computed, observable} from 'mobx';
import {InitialState} from './meta';

const firstNames = ['Oliver', 'George', 'Harry', 'Jack', 'Jacob', 'Noah', 'Charlie', 'Muhammad', 'Thomas', 'Oscar'];
const lastNames = ['Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor'];

export default class AppStore {
    @observable firstName: string = '';
    @observable lastName: string = '';

    constructor(initialState: InitialState) {
        if (initialState.firstName) {
            this.firstName = initialState.firstName;
        }

        if (initialState.lastName) {
            this.lastName = initialState.lastName;
        }
    }

    @computed
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    @action
    setFirstName = (value: string) => {
        this.firstName = value;
    };

    @action
    setLastName = (value: string) => {
        this.lastName = value;
    };

    makeRandomFirstName = (e: React.MouseEvent<HTMLButtonElement>) => {
        this.setFirstName(firstNames[this.getRandomInt(0, firstNames.length - 1)]);
    };

    makeRandomLastName = (e: React.MouseEvent<HTMLButtonElement>) => {
        this.setLastName(lastNames[this.getRandomInt(0, lastNames.length - 1)]);
    };

    getRandomInt = (min: number, max: number): number => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}