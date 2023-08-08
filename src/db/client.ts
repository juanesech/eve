import { connect } from "mongoose";

export const Client = async() => {
    await connect('mongodb+srv://eve:DMER759BuiRx2vod@eve.cfujiae.mongodb.net/');
}
