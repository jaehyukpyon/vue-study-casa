<template>
  <section>
    <header><h1>My Friends</h1></header>

    <new-friend
      @add-contact="addContact"
    ></new-friend>
    <ul>
      <!-- <friend-contact 
        name="Manuel Lorenz" 
        phone-number="01234 56789" 
        email-address="manuel@localhost.com"
        test=test
      ></friend-contact> -->
      <!-- <friend-contact 
        name="111111" 
        phone-number="01234 56789" 
        email-address="manuel@localhost.com"
        :is-favorite="true"
      ></friend-contact>
      <friend-contact
        name="test Lorenz" 
        phone-number="0123422 56789" 
        email-address="test@localhost.com"
      ></friend-contact> -->

      <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :phone-number="friend.phone"
        :email-address="friend.email"
        :is-favorite="friend.isFavorite"
        @toggle-favorite="toggleFavoriteStatus"
        @delete="deleteContact"
      ></friend-contact>
    </ul>
    <br><hr>
    <button @click="testClicked">test btn</button>
  </section>
</template>

<script>
// default export
export default {
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "1234-5678",
          email: "manuel@localhost.com",
          isFavorite: true,
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "9876-5432",
          email: "julie@localhost.com",
          isFavorite: true,
        },
      ],
      test: 0, // 위의 html에서 test=test와 같이 한다면, 해당 컴포넌트안에서 사용될 때 여기의 값 즉 0이 사용되는 게 아닌 문자열 'test'로 사용된다.
    };
  },
  methods: {
    testClicked() {
      this.test++;
    },
    toggleFavoriteStatus(friendId) {
      console.log('toggleFavoriteStatus');
      const identifiedFriend = this.friends.find(friend => friend.id === friendId);
      identifiedFriend.isFavorite = !identifiedFriend.isFavorite;
    },
    addContact(name, phone, email) {
      const newFriendContact = {
        id: new Date().toISOString(),
        name: name,
        phone: phone,
        email: email,
        isFavorite: false,
      };
      this.friends.push(newFriendContact);
    },
    deleteContact(friendId) {
      this.friends = this.friends.filter(friend => friend.id !== friendId);
    },
  },
  beforeUpdate() {
    console.log('App.vue beforeUpdate');
  },
  updated() {
    // FriendContact.vue 보다 나중에 실행
    console.log('App.vue updated')
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li,
#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

#app input {
  font: inherit;
  padding: 0.15rem;
}

#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}

#app form div {
  margin: 1rem 0;
}
</style>