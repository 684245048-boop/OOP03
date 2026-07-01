enum Role {
    Admin,
    Editor,
    Viewer
}

interface User {
    username: string;
    email: string;
    role: Role; 
}

function checkAccess(user: User): void {
    if (user.role === Role.Admin) {
        console.log(`Welcome Admin: ${user.username}. You have full access.`);
    } else if (user.role === Role.Editor) {
        console.log(`Welcome Editor: ${user.username}. You can edit content.`);
    } else if (user.role === Role.Viewer) {
        console.log(`Welcome Viewer: ${user.username}. You can view content only.`);
    } else {
        console.log("Access Denied: Unknown role.");
    }
}

const adminUser: User = {
    username: "Krisada_Admin",
    email: "admin@npru.ac.th",
    role: Role.Admin 
};

checkAccess(adminUser);