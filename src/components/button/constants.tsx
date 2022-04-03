import { SubmitButton } from './components/submit-button/SubmitButton';

export enum ButtonTypes {
  submit = 'submit',
}

export const buttonsMap = {
  [ButtonTypes.submit]: SubmitButton,
};
