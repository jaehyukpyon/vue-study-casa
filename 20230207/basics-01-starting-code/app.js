const app = Vue.createApp({
    data: function () {
        return {
            courseGoal: 'Finish the course and learn Vue!',
            vueLink: 'https://vuejs.org',
        }
    },
    methods: {
        outputGoal () {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return 'Learn Vue!';
            } else {
                return 'Master Vue!';
            }
        },
    }
});

app.mount('#user-goal');

// {{ }} 이 문법은 html 태그의 여닫는 부분 사이에만 가능하다.
// Vue를 통해 실행되는 모든 내장 디렉티브는 이름이 v-로 시작.
// v-bind는 vue에게 바인딩을 지시
