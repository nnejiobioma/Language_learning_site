/**
 * Administrator definitions and permissions for FliksLingo
 */

export const ADMIN_EMAILS = [
  'nnejieb@gmail.com',
  'nneji.obioma@gmail.com'
];

/**
 * Check if a given user object or email address belongs to an authorized site administrator.
 * @param {Object|string} userOrEmail 
 * @returns {boolean}
 */
export function isUserAdmin(userOrEmail) {
  if (!userOrEmail) return false;
  const email = typeof userOrEmail === 'string' ? userOrEmail : (userOrEmail.email || userOrEmail.providerData?.[0]?.email);
  if (!email || typeof email !== 'string') return false;
  const clean = email.toLowerCase().trim();
  return ADMIN_EMAILS.some(adminEmail => adminEmail.toLowerCase().trim() === clean);
}
