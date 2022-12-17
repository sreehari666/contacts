import Realm from "realm";

class Contact extends Realm.Object{}

Contact.schema = {
    name:'Contact',
    properties:{
        givenName:'string',
        familyName:'string',
        phoneNumber:'string',
        recordID:'string',
    },
    primaryKey:'recordID',
}

let realm = new Realm({schema:[Contact],schemaVersion:4})

let getAllContact = () =>{
    return realm.objects("Contact")
}

let addContact = (_givenName,_familyName,_phoneNumber,_recordID) =>{
    realm.write(()=>{
        const contact = realm.create("Contact",{
            givenName:_givenName,
            familyName:_familyName,
            phoneNumber:_phoneNumber,
            recordID:_recordID,
        })
    })
}

let deleteAllContacts = ()=>{
    realm.write(()=>{
        realm.deleteAll()
    })
}

let deleteItem = (obj)=>{
    console.log("function")
    console.log(obj)
    realm.write(()=>{
        realm.delete(obj)
    }) 
}

export default realm;

export{
    getAllContact,addContact,deleteAllContacts,deleteItem,
}