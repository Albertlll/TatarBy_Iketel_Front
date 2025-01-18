import { create } from 'zustand';

const useRegistrationStore = create((set) => ({
  step: 1, // Текущий шаг регистрации
  age: null, // Возраст
  email: '', // Почта
  code: '', // Код подтверждения
  password: '', // Пароль
  confirmPassword: '', // Повтор пароля
  firstName: '', // Имя
  lastName: '', // Фамилия
  isMan: null,

  // Метод для перехода на следующий шаг
  nextStep: () => set((state) => ({ step: state.step + 1 })),

  // Метод для перехода на предыдущий шаг
  prevStep: () => set((state) => ({ step: state.step - 1 })),

  // Метод для обновления данных
  updateData: (data) => set((state) => ({ ...state, ...data })),

  // Метод для сброса данных
  reset: () =>
    set({
      step: 1,
      age: null,
      email: '',
      code: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
    }),
}));

export default useRegistrationStore;