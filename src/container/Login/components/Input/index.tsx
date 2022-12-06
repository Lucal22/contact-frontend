import * as Styled from './styles';

export type InputProps = {
  name: string;
  type: 'text' | 'email' | 'password';
  value: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
  name,
  type,
  value,
  placeholder,
  onChange,
}: InputProps) {
  return (
    <Styled.Container>
      <Styled.Input
        onChange={(event) => {
          onChange(event);
        }}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
      />
    </Styled.Container>
  );
}
