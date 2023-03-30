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
      notes: state.notes.filter((note) => note.title !== action.title),
    };
  } else {
    return state;
  }
};

export default rootNote;
