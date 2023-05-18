import { yupResolver } from '@hookform/resolvers/yup';
import { ReactNode, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { contactUpdate } from '../../../utils/contactRequest';
import contactSchema from '../../../utils/contactSchema';
import * as Styled from '../styles';
import { ContactsCardProps } from './ContactsCard';

export type ContactsEditProps = ContactsCardProps & {
  cancel: () => void;
};

export default function ContactsEdit({
  name,
  phone,
  id,
  loadContacts,
  cancel,
}: ContactsEditProps) {
  const [disable, setDisable] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  async function updateContact(data: FieldValues) {
    setDisable(true);
    await contactUpdate(id, data.name, data.phone);
    setDisable(false);
    loadContacts();
    cancel();
  }
  return (
    <Styled.Edit>
      <Styled.EditContent>
        <h1>Update contact</h1>
        <p> Update contact below:</p>
        <Styled.EditForm onSubmit={handleSubmit(updateContact)}>
          <Styled.EditFormField>
            <Styled.EditInput
              type={'text'}
              {...register('name')}
              defaultValue={name}
            />
            <p>{errors.name?.message as ReactNode}</p>
          </Styled.EditFormField>
          <Styled.EditFormField>
            <Styled.EditInput
              type={'text'}
              {...register('phone')}
              defaultValue={phone}
            />
            <p>{errors.phone?.message as ReactNode}</p>{' '}
          </Styled.EditFormField>

          <Styled.EditSubmitButton
            aria-label="Save contact"
            disabled={disable}
            type={'submit'}
            value={disable ? 'Loading' : 'Save'}
          />
          <Styled.EditCancelButton
            aria-label="Cancel"
            disabled={disable}
            type={'button'}
            onClick={cancel}
            value={'Cancel'}
          />
        </Styled.EditForm>
      </Styled.EditContent>
    </Styled.Edit>
  );
}
