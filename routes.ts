/**
 * This is the array of routes which are accessible to public without auth
 * @type {string[]}
 */
export const publicRoutes: string[] = ["/home", "/"];

/**
 * This is the array of routes which are accessible to private with auth
 * @type {string[]}
 */
export const authRoutes: string[] = ["/auth/login", "/auth/register"];

/**
 * A path accessible to user for accessing auth api's
 * @type {string}
 */
export const apiAuthPrefix: string = "/api/auth";

/**
 * The default path if user is authenticated
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT: string = "/settings";
