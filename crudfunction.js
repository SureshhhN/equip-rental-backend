import { client } from "./index.js";

export async function editItems(id, updt) {
    return await client
        .db("scottrental")
        .collection("itemmms")
        .updateOne({ id: id }, { $set: updt });
}

export async function deleteItems(id) {
    return await client
        .db("scottrental")
        .collection("itemmms")
        .deleteOne({ id: id });
}

export async function addItems(data) {
    return await client
        .db("scottrental").collection("itemmms").insertMany(data);
}

export async function getItemsByCatagory(catagory) {
    return await client
        .db("scottrental")
        .collection("itemmms")
        .find({ "catagory": { "$in": [catagory] } })
        .toArray();
}

export async function getItems() {
    return await client
        .db("scottrental")
        .collection("itemmms")
        .find({})
        .toArray();
}

export async function createUser(data) {
    return await client
        .db("scottrental").collection("users").insertOne(data);
}

export async function loginUser(username) {
    return await client
        .db("scottrental")
        .collection("users")
        .findOne({username:username})  
}




