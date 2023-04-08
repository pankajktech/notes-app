export const NoteAdded = () => {
  return (
    <div className="alert alert-success shadow-lg w-72 z-20 absolute right-20 md:right-10 top-20">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current flex-shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Note Added Successfully!</span>
      </div>
    </div>
  );
};

export const NoteDeleted = () => {
  return (
    <div className="alert alert-error shadow-lg w-72 z-20 absolute right-20 md:right-10 top-20">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current flex-shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Note Deleted Successfully!</span>
      </div>
    </div>
  );
};

export const NoteEdited = () => {
  return (
    <div className="alert alert-warning shadow-lg w-72 z-20 absolute right-20 md:right-10 top-20">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current flex-shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Note Edited Successfully!</span>
      </div>
    </div>
  );
};
