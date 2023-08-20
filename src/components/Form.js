
//import './Form.css'
//import SendContext from '../../contexts/SendContext'

export default function Form({ name, titleButton, children, isValid, onSubmit }) {
//  const isSend = useContext(SendContext)

  return (
    <form noValidate name={name} onSubmit={onSubmit}>
      {children}
      <button
        type="submit"
        className={
          `${name === 'signin' || name === 'signup' ? 'login__button' : 'popup__submit'}
         
          ${isValid ? '' : (name === 'signin' || name === 'signup' ? 'login__button_disable' : 'popup__submit_disable')}`
        }
       // disabled={isSend}
      >
        {titleButton || 'Сохранить'}
      </button>
    </form>
  )
}
