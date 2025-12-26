// Authentication utilities
let currentUser = null;
let currentRole = null;

// Initialize default users if not exist
function initUsers() {
  if (!localStorage.getItem('users')) {
    const users = {
      'Hamza': { password: CryptoJS.SHA256('Hamza0327@@').toString(), role: 'primary' },
      'awais': { password: CryptoJS.SHA256('awais786').toString(), role: 'primary' }
    };
    localStorage.setItem('users', JSON.stringify(users));
  }
}

// Check if logged in
function checkLogin() {
  const loggedUser = localStorage.getItem('currentUser');
  if (loggedUser) {
    currentUser = loggedUser;
    currentRole = localStorage.getItem('currentRole');
    return true;
  }
  return false;
}

// Login function
function login(username, password) {
  const users = JSON.parse(localStorage.getItem('users') || '{}');
  const hash = CryptoJS.SHA256(password).toString();
  if (users[username] && users[username].password === hash) {
    currentUser = username;
    currentRole = users[username].role;
    localStorage.setItem('currentUser', username);
    localStorage.setItem('currentRole', currentRole);
    return true;
  }
  return false;
}

// Sign up
function signUp(username, password) {
  const users = JSON.parse(localStorage.getItem('users') || '{}');
  if (users[username]) return false;
  const hash = CryptoJS.SHA256(password).toString();
  users[username] = { password: hash, role: 'manager' };
  localStorage.setItem('users', JSON.stringify(users));
  currentUser = username;
  currentRole = 'manager';
  localStorage.setItem('currentUser', username);
  localStorage.setItem('currentRole', 'manager');
  return true;
}

// Logout
function logout() {
  localStorage.removeItem('currentUser');
  localStorage.removeItem('currentRole');
  currentUser = null;
  currentRole = null;
}

// Change password
function changePassword(newPass) {
  if (newPass && currentUser) {
    const hash = CryptoJS.SHA256(newPass).toString();
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    users[currentUser].password = hash;
    localStorage.setItem('users', JSON.stringify(users));
    return true;
  }
  return false;
}

export { currentUser, currentRole, initUsers, checkLogin, login, signUp, logout, changePassword };