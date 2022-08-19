export function ContactItem({ contacts, deleteBtnHandler }) {
  return contacts.map(contact => {
    const { name, number, id } = contact;
    return (
      <li key={id}>
        <p>
          {name}: {number}
        </p>
        <button type="button" id={id} onClick={deleteBtnHandler}>
          Delete
        </button>
      </li>
    );
  });
}
