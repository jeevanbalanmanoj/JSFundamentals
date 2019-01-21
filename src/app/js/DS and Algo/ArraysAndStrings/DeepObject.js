let contacts = [
    { id: "1", name: "test"},
    { id: "2", name: "foo" },
    { id: "3", name: "june"},
    { id: "4", name: "may" }
 ]

let filtered_contacts =  [
    {
        id: "1", 
        options: [
            { option_id: "1", contact_linked_id: "2" },
            { option_id: "2", contact_linked_id: "4" },
        ]
    },
    {
        id: "2", 
        options: [
            { option_id: "3", contact_linked_id: "1" },
        ]
    },
 ]

 let c = contacts.filter((c=> filtered_contacts.fin))