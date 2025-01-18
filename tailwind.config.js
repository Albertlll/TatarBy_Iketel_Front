/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      bgСolor: '#19272d',
      fgСolor: '#38ff40',
      progressBg: '#244E26',
      borderBottomColor: '#259029',
      subFgColor: '#8CFF91',
      nowTaskColor: '#D19C1D',
      lessonColor: '#C1E4C3',
      failColor: '#E75E5E',
      defaultLesson: '#787878',
      boldBtnShadow: '#598F5B',
      boldBtnColor: '#9FD6A1'

      // ...
    }
  },
  plugins: [],
}


// --bg_color: #19272d;
// --fg_color: #38ff40;
// --progress-bg: #244E26;
// --border_bottom_color: #259029;

// --sub_fg_color: #8CFF91;
// --now_task_color: #D19C1D;

// --lesson_color: #C1E4C3;
// --fail_color: #E75E5E;
// --default_lesson: #787878;