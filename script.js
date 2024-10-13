const virtaulPet = {
    name: "Mochi",
    type: "cat",
    age: 6,
    happiness: 60,
    hunger: 36,
    feed: function () {
      this.hunger -= 20;
      if (this.hunger < 0) this.hunger = 0;
    },
    play: function () {},
    agePet: function () {},
  };