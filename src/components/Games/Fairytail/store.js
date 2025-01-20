import {create} from 'zustand';
import { fetchOchpochcoins, fetchNextStep, submitCurrentStep } from '../../../api';

// Создаем хранилище Zustand
const useFairytailStore = create((set, get) => ({
  // Поле ochpochcoins
  ochpochcoins: 0,

  // Поле currentStep (объект)
  currentStepData: {
    type : "mission"
  },



  fairytailData : {},

  // Запрос на получение ochpochcoins
  fetchOchpochcoins: async () => {
    try {
      const response = await fetchOchpochcoins();
      set({ ochpochcoins: response.data.ochpochcoins });
    } catch (error) {
      console.error('Ошибка при получении ochpochcoins:', error);
    }
  },

  // Запрос на получение следующего шага
  fetchNextStep: async () => {
    const { currentStep } = get();
    try {
      const response = await fetchNextStep(currentStep.id);
      set({ currentStep: response.data.nextStep });
    } catch (error) {
      console.error('Ошибка при получении следующего шага:', error);
    }
  },

  // Запрос на отправку текущего шага
  sendCurrentStep: async () => {
    const { currentStepData } = get();
    try {
      const response = submitCurrentStep(currentStepData);
      console.log('Шаг успешно отправлен');
    } catch (error) {

      console.error('Ошибка при отправке шага:', error);
      
    }
  },


  fetchFairytailData: async (id) => {
    try {
      const data = await fetchFairytailData(id);
      set({ fairytailData: data });
    } catch (error) {
      console.error('Ошибка при получении данных сказки:', error);
    }
  },


  updateCurrentStepData: (newData) => {
    set((state) => ({
      currentStepData: {
        ...state.currentStepData,
        ...newData
      }
    }));
  }



}));

export default useFairytailStore;