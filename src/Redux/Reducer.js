const initialState = {
  notes: [],
};

const rootNote = (state = initialState, action) => {
  if (action.type === "ADD_TODO") {
    return {
      notes: [
        ...state.notes,
        {
          title: action.title,
          description: action.description,
        },
      ],
    };
  } else if (action.type === "DELETE_TODO") {
    return {
      notes: state.notes.filter((note, index) => {
        return index != action.id;
      }),
    };
  } else if (action.type === "EDIT_TODO") {
    return {
      notes: state.notes.map((note, index) => {
        if (index === action.id) {
          return {
            title: action.title,
            description: action.description,
          };
        }
        return note;
      }),
    };
  } else {
    return state;
  }
};

export default rootNote;
