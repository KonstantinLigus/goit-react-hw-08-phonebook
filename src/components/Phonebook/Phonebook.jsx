export function Phonebook({ onSubmitClick, value, ChangeHandler }) {
  return (
    <form onSubmit={onSubmitClick}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={value}
        onChange={ChangeHandler}
      />
      <button type="submit">Add contact</button>
    </form>
  );
}
