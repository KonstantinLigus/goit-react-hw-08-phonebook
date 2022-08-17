export function Phonebook({
  onSubmitClick,
  nameValue,
  numberValue,
  ChangeHandler,
}) {
  return (
    <>
      <form onSubmit={onSubmitClick}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={nameValue}
          onChange={ChangeHandler}
        />
        <label htmlFor="tel">Number</label>
        <input
          id="tel"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={numberValue}
          onChange={ChangeHandler}
        />
        <button type="submit">Add contact</button>
      </form>
    </>
  );
}
