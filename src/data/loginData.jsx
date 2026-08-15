const users = [
    {
        email: "28118944@sun.ac.za",
        password: "password001"
    },
    {
        email: "27118944@sun.ac.za",
        password: "password002"
    },
    {
        email: "26118944@sun.ac.za",
        password: "password003"
    }
];

export function isValidUser(email, password) {
    return users.some(
        user =>
            user.email === email &&
            user.password === password
    );
}