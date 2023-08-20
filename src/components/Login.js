import RegistrationForm from './RegistrationForm'
import useFormValidation from './ValidationForm'
import Input from "./Input";


export default function Login({ handleLogin }) {
  const { dataInput, validText, validState, solidLine, handleTransitForm } = useFormValidation()

  function onLogin(evt) {
    evt.preventDefault()
    handleLogin(dataInput.password, dataInput.email)
  }

  return (
    <RegistrationForm name='signin' onSubmit={onLogin} isValid={validState}>
      <Input
        name='email'
        type='email'
        placeholder={'Email'}
        value={dataInput.email}
        onChange={handleTransitForm}
        isInputValid={solidLine.email}
        error={validText.email}
      />
      <Input
        name='password'
        type='password'
        placeholder={'Пароль'}
        minLength={3}
        value={dataInput.password}
        onChange={handleTransitForm}
        isInputValid={solidLine.password}
        error={validText.password}
      />
    </RegistrationForm>
  )
}


