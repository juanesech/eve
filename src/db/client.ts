import { connect } from "mongoose";

export const Client = async() => {
    let dbUrl:string = process.env["MONGODB_URI"] ? process.env["MONGODB_URI"] : "localhost";
    await connect(dbUrl);
}
