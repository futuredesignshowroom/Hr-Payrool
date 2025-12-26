// Firebase database operations
import { db } from './config.js';

// Employee operations
async function getEmployees() {
  const snapshot = await db.ref('employees').once('value');
  return snapshot.val() || {};
}

function addEmployee(id, data) {
  return db.ref('employees/' + id).set(data);
}

function removeEmployee(id) {
  return db.ref('employees/' + id).remove();
}

// Attendance operations
async function getAttendanceLogs() {
  const snapshot = await db.ref('attendance_logs').once('value');
  return snapshot.val() || {};
}

// Leave operations
async function getLeaves() {
  const snapshot = await db.ref('leaves').once('value');
  return snapshot.val() || {};
}

function addLeave(leaveData) {
  return db.ref('leaves').push(leaveData);
}

function updateLeaveStatus(key, status) {
  return db.ref('leaves/' + key).update({ status });
}

export { getEmployees, addEmployee, removeEmployee, getAttendanceLogs, getLeaves, addLeave, updateLeaveStatus };