export class Employee {
    id: number;
    empNo: string;
    firstName: string;
    lastName: string;
    city: string;

    constructor(id: number, empNo: string, 
                firstName: string, lastName: string,
                city: string) {
        this.id = id;
        this.empNo = empNo;
        this.firstName = firstName;
        this.lastName = lastName;
        this.city = city;
    }
}

export const EMP_SAL = 145;