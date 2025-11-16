type UserInput = {
  label: string;
  placeholder: string;
  type: string;
};

export const UserInput = ({ label, placeholder, type }: UserInput) => {
  return (
    <label className="inputWrapper">
      {label}
      <input type={type} className={`${type} ? input ${type} : input`}>
        {placeholder && placeholder}
      </input>
    </label>
  );
};
