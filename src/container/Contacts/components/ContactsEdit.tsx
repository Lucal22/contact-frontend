import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
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
        <h1>Edite o contato</h1>
        <p> Edite o contato selecionado abaixo:</p>
        <Styled.EditForm onSubmit={handleSubmit(updateContact)}>
          <Styled.EditFormField>
            <Styled.EditInput
              type={'text'}
              {...register('name')}
              defaultValue={name}
            />
            <p>{errors.name?.message}</p>
          </Styled.EditFormField>
          <Styled.EditFormField>
            <Styled.EditInput
              type={'text'}
              {...register('phone')}
              defaultValue={phone}
            />
            <p>{errors.phone?.message}</p>{' '}
          </Styled.EditFormField>

          <Styled.EditSubmitButton
            disabled={disable}
            type={'submit'}
            value={disable ? 'Aguarde' : 'Salvar'}
          />
          <Styled.EditCancelButton
            disabled={disable}
            type={'button'}
            onClick={cancel}
            value={'Cancelar'}
          />
        </Styled.EditForm>
      </Styled.EditContent>
    </Styled.Edit>
  );
}
