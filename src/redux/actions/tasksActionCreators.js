import { createAction } from "@reduxjs/toolkit";

export const createTask = createAction('tasks/createTask');

export const updateTask = createAction('tasks/updateTask');

export const deleteTask = createAction('tasks/deleteTask');
