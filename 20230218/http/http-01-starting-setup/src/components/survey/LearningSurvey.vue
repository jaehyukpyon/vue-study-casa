<template>
  <section>
    <base-card>
      <h2>How was you learning experience?</h2>

      <form @submit.prevent="submitSurvey">
        <div class="form-control">
          <label for="name">Your Name</label>
          <input type="text" id="name" name="name" v-model.trim="enteredName" />
        </div>
        <h3>My learning experience was ...</h3>
        <div class="form-control">
          <input
            type="radio"
            id="rating-poor"
            value="poor"
            name="rating"
            v-model="chosenRating"
          />
          <label for="rating-poor">Poor</label>
        </div>
        <div class="form-control">
          <input
            type="radio"
            id="rating-average"
            value="average"
            name="rating"
            v-model="chosenRating"
          />
          <label for="rating-average">Average</label>
        </div>
        <div class="form-control">
          <input
            type="radio"
            id="rating-great"
            value="great"
            name="rating"
            v-model="chosenRating"
          />
          <label for="rating-great">Great</label>
        </div>
        <p v-if="invalidInput">
          One or more input fields are invalid. Please check your provided data.
        </p>
        <p v-if="error">
          {{ error }}
        </p>
        <div>
          <base-button>Submit</base-button>
        </div>
      </form>
    </base-card>
  </section>
</template>

<script>
//import axios from 'axios';

export default {
  data() {
    return {
      enteredName: '',
      chosenRating: null,
      invalidInput: false,
      error: null,
    };
  },
  // emits: ['survey-submit'],
  methods: {
    submitSurvey() {
      if (this.enteredName === '' || !this.chosenRating) {
        this.invalidInput = true;
        return;
      }
      this.invalidInput = false;

      // this.$emit('survey-submit', {
      //   userName: this.enteredName,
      //   rating: this.chosenRating,
      // });

      this.error = null;

      fetch('https://vue-http-demo-a7817-default-rtdb.asia-southeast1.firebasedatabase.app/surveys.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
          name: this.enteredName,
          rating: this.chosenRating,
        },
      }).then(response => {
        // technical issue가 아닌 경우 즉 400에러나 500에러 같은 게 서버에서 응답되면 항상 이 부분 실행. 물론 정상적인 200코드일 경우에도 이 블록(부분)이 실행된다.
        console.log(response);
        if (response.ok) {
          console.log('response is ok')
        } else {
          throw new Error('Could not save data!'); // 여기서 에러를 던지면, 아래의 catch 블록이 실행된다.
        }
      }).catch(error => {
        // 여기에서는 400 error code와 같은 오류를 못 잡아낸다.
        console.log(error);
        this.error = error.message;
      });

      // axios.post('https://vue-http-demo-a7817-default-rtdb.asia-southeast1.firebasedatabase.app/surveys.json', {
      //   name: this.enteredName,
      //   rating: this.chosenRating,
      // }).catch(error => {
      //   console.log(error);
      //   this.error = 'Something went wrong - Try again later.';
      // });

      this.enteredName = '';
      this.chosenRating = null;
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

input[type='text'] {
  display: block;
  width: 20rem;
  margin-top: 0.5rem;
}
</style>