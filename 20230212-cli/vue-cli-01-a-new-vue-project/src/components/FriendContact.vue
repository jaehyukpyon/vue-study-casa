<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? '(favorite)' : '(NOT fav)' }}</h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
    </button>
    <button @click="toggleFavorite">
      Toggle Favorite
    </button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone: {{ phoneNumber }}</strong>
      </li>
      <li>
        <strong>Email: {{ emailAddress }}</strong>
      </li>
    </ul>
    <!-- <h4>test: {{ test }}</h4> -->
  </li>
</template>

<script>
export default {
  // props: [
  //   'name', // this 키워드로 methods와 같은 곳에서 참조 가능
  //   'phoneNumber',
  //   'emailAddress',
  //   //'test',
  // ],
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String, // 부모쪽에서 즉 App.vue 쪽에서 name='11111'과 같이 보내줘도 문제 없다. 즉 warning이 안 뜬다.
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
      // validator: function(value) {
      //   console.log('isFavorite validator executed...');
      //   return value === '1' || value === '0';
      // },
    },
  },  
  // emits: [
  //   'toggle-favorite',
  // ],
  emits: {
    'toggle-favorite': function(id) {
      if (id) {
        return true;
      } else {
        console.warn('Id is missing!');
        return false;
      }
    },
  },
  data() {
    return {
      detailsAreVisible: false,
      // friend: {
      //   id: "manuel",
      //   name: "Manuel Lorenz",
      //   phone: "1234-5678",
      //   email: "manuel@localhost.com",
      // },
      friendIsFavorite: this.isFavorite,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      // 위에서 button이 클릭돼서 이 함수가 실행되면,
      // App.vue의 beforeUpdate > FriendContact.vue beforeUpdate > FriendContact.vue updated > App.vue updated
      //
      
      console.log('toggleFavorite');
      //this.friendIsFavorite = !this.friendIsFavorite;
      this.$emit('toggle-favorite', this.id);
    }
  },
  beforeUpdate() {
    console.log('FriendContact.vue beforeUpdate');
  },
  updated() {
    // App.vue 보다 먼저 실행
    console.log('FriendContact.vue updated');
  }
};
</script>

<style>
</style>