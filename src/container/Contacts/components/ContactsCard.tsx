import * as Styled from '../styles';
import { FiTrash2, FiEdit } from 'react-icons/fi';
import ContactsEdit from './ContactsEdit';
import { useState } from 'react';
import { contactDelete } from '../../../utils/contactRequest';

export type ContactsCardProps = {
  id: string | undefined;
  name: string | undefined;
  phone: string | undefined;
  loadContacts: () => void;
};

export default function ContactsCard({
  name,
  phone,
  id,
  loadContacts,
}: ContactsCardProps) {
  const [edit, setEdit] = useState(false);
  const [onDelete, setOnDelete] = useState(false);

  function closeEdit() {
    setEdit(false);
  }

  async function deleteContact() {
    setOnDelete(true);
    await contactDelete(id);
    loadContacts();
    setOnDelete(false);
  }
  return (
    <Styled.Card>
      <Styled.Name>{name}</Styled.Name>
      <Styled.Phone>{phone}</Styled.Phone>
      <Styled.EditButton disabled={onDelete} onClick={() => setEdit(true)}>
        <FiEdit size={25} />
      </Styled.EditButton>
      <Styled.DeleteButton disabled={onDelete} onClick={() => deleteContact()}>
        <FiTrash2 size={25} />
      </Styled.DeleteButton>
      {edit ? (
        <ContactsEdit
          loadContacts={loadContacts}
          cancel={closeEdit}
          id={id}
          name={name}
          phone={phone}
        />
      ) : null}
    </Styled.Card>
  );
}
