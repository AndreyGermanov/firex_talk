import Model from './Model'

/**
 * Enumeration of possible user genders
 *
 */
const Gender = {
    M: "MALE",
    F: "FEMALE"
}

export {Gender};

/**
 * Data model for user object. Users include current user, which logins to application and any other
 * users, which exist in chat rooms.
 */
const User = class extends Model {
    /**
     * Constructor. Used to initialize properties of class.
     * Used to define initial values for all object properties
     */
    constructor() {
        super();
        // Unique ID of user
        this.id = null;
        // User login name
        this.login = "";
        // User email address
        this.email = "";
        // First name of this user
        this.firstName = "";
        // Last name of this user
        this.lastName = "";
        // Date of birth of this user
        this.dateOfBirth = 0;
        // Gender of this user
        this.gender = Gender.M;
        // Room, in which this user currently chatting
        this.roomId = 0;
        // Profile image of user
        this.profileImage = null;
        // Time when user last login
        this.loginTime = 0;
        // Time of last user message
        this.lastActivityTime = 0;
    }
}

export default User;