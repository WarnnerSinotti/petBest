import Apple from '../../../assets/icons/apple.svg';
import Google from '../../../assets/icons/google.svg';
import Mail from '../../../assets/icons/mail.svg';
import Lock from '../../../assets/icons/lock.svg';
import Eye from '../../../assets/icons/eye.svg';
import EyeOff from '../../../assets/icons/eye-off.svg';

const tamanho = {
  height: 25,
  width: 25
}

export const IconApple = (props: any) => {
  return <Apple height={tamanho.height} width={tamanho.width} {...props} />;
};

export const IconGoogle = (props: any) => {
  return <Google height={tamanho.height} width={tamanho.width} {...props} />;
};

export const IconMail = (props: any) => {
  return <Mail height={tamanho.height} width={tamanho.width} {...props} />;
};

export const IconLock = (props: any) => {
  return <Lock height={tamanho.height} width={tamanho.width} {...props} />;
};

export const IconEye = (props: any) => {
  return <Eye height={tamanho.height} width={tamanho.width} {...props} />;
};

export const IconEyeOff = (props: any) => {
  return <EyeOff height={tamanho.height} width={tamanho.width} {...props} />;
};