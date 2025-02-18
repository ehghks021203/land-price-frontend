import { createContext, useContext, useState } from 'react';
import PasswordReset from '@components/Modal/PasswordReset';
import ModifyUserInfo from '@components/Modal/ModifyUserInfo';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modalType, setModalType] = useState(null);
  const [modalParams, setModalParams] = useState({});

  const open = (type, params = {}) => {
    setModalType(type);
    setModalParams(params);
  };

  const close = () => {
    setModalType(null);
    setModalParams({});
  };

  return (
    <ModalContext.Provider value={{ open, close }}>
      {children}
      {modalType === 'passwordReset' && <PasswordReset {...modalParams} close={close} />}
      {modalType === 'modifyUserInfo' && <ModifyUserInfo {...modalParams} close={close} />}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const { open, close } = useContext(ModalContext);

  return {
    open,
    close,
    passwordReset: (params) => open('passwordReset', params),
    modifyUserInfo: (params) => open('modifyUserInfo', params),
  };
};
