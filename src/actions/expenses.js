import uuid from "uuid";
import database from "../firebase/firebase";

export const addExpense = (expense) => ({
  type: "ADD_EXPENSE",
  expense,
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0,
    } = expenseData;
    const expense = { description, note, amount, createdAt };

    database
      .ref("expenses")
      .push(expense)
      .then((ref) => {
        dispatch(
          addExpense({
            id: ref.key,
            ...expense,
          })
        );
      });
  };
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id,
});

// Expense Removal Challenge!

// 1. Create startRemoveExpense (same call signature removeExpense)
// 2. Test startRemoveExpense with "should remove expenses from firebase"
// 3. Use startRemoveExpense in EditExpensePage instead of removeExpense
// 4. Adjust EditExpensePage tests

export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch) => {
    return database
      .ref(`expenses/${id}`)
      .remove()
      .then(() => {
        dispatch(removeExpense({ id }));
      });
  };
};

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});

// Expense Update Challenge!

// 1. Create startEditExpense (same call signature as editExpense)
// 2. Test startEditExpense with "should edit expense from firebase"
// 3. Use startEditExpense in EditExpense instead of editExpense
// 4. Adjust EditExpensePage tests

export const startEditExpense = (id, updates) => {
  return (dispatch) => {
    return database
      .ref(`expenses/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editExpense(id, updates));
      });
  };
};

// SET_EXPENSES

export const setExpenses = (expenses) => ({
  type: "SET_EXPENSES",
  expenses,
});

// 1. Fetch all expense data once
// 2. Parse that data into an array
// 3. Dispatch SET_EXPENSES

export const startSetExpenses = () => {
  return (dispatch) => {
    return database
      .ref("expenses")
      .once("value")
      .then((snapshot) => {
        const expenses = [];

        snapshot.forEach((childSnapshot) => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });
        dispatch(setExpenses(expenses));
      });
  };
};
