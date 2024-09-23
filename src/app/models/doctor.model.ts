export class DoctorModel{
    id:string ="";
    firstName :string ="";
    lastName:string="";
    fullName:string="";
    department:DeparmentModel = new DeparmentModel();
    departmentValue :number =0;
}

export class DeparmentModel{
    name : string = "";
    value: number =0;
}