import { createReducer, on } from "@ngrx/store";
import { UsersActions } from "./users.actions";
import { User } from "../users-list.component";

const initialState: { users: User[] } = {
  users: [],
}

export const userReducer = createReducer(
  initialState,
  on(UsersActions.setUsers, (state, payload) => ({
    ...state,
    users: payload.users,
})),
  on(UsersActions.editUser, (state, payload) => ({
    ...state,
    users: state.users.map((user) => {
      if (user.id === payload.user.id) {
        return payload.user;
      } else {
        return user;
      }
    }),
  })),
   on(UsersActions.createUser, (state, payload) => ({
    ...state,
    users: [...state.users, payload.user],
})),
  on(UsersActions.deleteUser, (state, payload) => ({
    ...state,
    users: state.users.filter((user) => user.id !== payload.id),
  }))
);
