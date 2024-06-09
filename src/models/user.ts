interface User {
    id: string;
    name: string;
    email: string;
    password: string;
}

const users: User[] = [
    {
        id: "1",
        name: "John Doe",
        email: "test@example.com",
        password:
            "$2a$10$uf1O2CxD7pEswUEpD4fitukIBbRtDFEJ03rTbkkSIZ1U1HFaabE4S", // bcrypt hash for '12345678'
    },
];

export const getUserByEmail = (email: string): User | undefined => {
    return users.find((user) => user.email === email);
};

export const getUserById = (id: string): User | undefined => {
    return users.find((user) => user.id === id);
};
