import { createSlice, nanoid } from "@reduxjs/toolkit";




const contactSlice = createSlice({
    name: "contacts",
    initailState: {
        item: [

    {"id": "id-1", "name": "Rosie Simpson", "number": "459-12-56"},
    {"id": "id-2", "name": "Hermione Kline", "number": "443-89-12"},
    {"id": "id-3", "name": "Eden Clements", "number": "645-17-79"},
    {"id": "id-4", "name": "Annie Copeland", "number": "227-91-26"}
  ],
    },

    reducers: {
        addContact: {
            reducer(state, action) {
                state.items.push(action.payload);
            },
            prepare(name, number) {
                return {
                    payload: {
                        id: nanoid(),
                        name: String(name),  
                        number: String(number),
                    },
                };

            },
        },
        deleteContact(state, action) {
            state.items = state.items.filter(contact => contact.id !== action.payload);
        },
    },
});

export const {addContact, deleteContact} = contactSlice.actions;
export const selectContacts = (state) => state.contacts.items;
export default contactSlice.reducer;