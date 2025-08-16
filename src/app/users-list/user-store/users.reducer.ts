import { createReducer, on } from "@ngrx/store";
import { UsersActions } from "./users.actions";
import { User } from "../user";

const initialState: { users: User[] } = {
  users: [],
}

export const userReducer = createReducer(
  initialState,
  on(UsersActions.setUsers, (state, payload) => ({
    ...state,
    users: payload.users,
  })),
  on(UsersActions.editUser, ( state, payload: { user: User } ) => ({
    ...state,
    users: state.users.map((user) => {
     return user.id === payload.user.id ? payload.user : user
    }),
  })),
  on(UsersActions.createUser, (state, payload: { user: User }) => ({
    ...state,
    users: [...state.users, payload.user],
  })),
  on(UsersActions.deleteUser, (state, payload: { id: number }) => ({
    ...state,
    users: state.users.filter((user) => user.id !== payload.id),
  }))
);
