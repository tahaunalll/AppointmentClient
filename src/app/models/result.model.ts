export class ResultModel<T>{
    data: any;
    errorMessages?:string[];
    isSuccessful: boolean= false;
    statusCode : number =200;
}