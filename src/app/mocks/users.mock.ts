import { User } from "../core/models/user.model";

export const MOCK_USERS : User[]= [
    {
        id: 1,
        email: 'ali@gamil.com',
        password: 'password123',
        role: 'PATIENT',
        nom: 'Ali'
    },
    {
        id: 2,
        email: 'sara@gmail.com',
        password: 'password456',
        role: 'MEDECIN',
        nom: 'Sara'
    }, 
    {
        id: 3,
        email: 'john@example.com',
        password: 'password789',
        role: 'SECRETAIRE',
        nom: 'John'
    },
    {
        id: 4,
        email: 'admin@example.com',
        password: 'adminpassword',
        role: 'ADMIN',
        nom: 'Admin'
    }
];