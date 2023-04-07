/* eslint-disable generator-star-spacing */
class Team {
  constructor(members) {
    this.members = members;
  }

  *[Symbol.iterator]() {
    for (const member of this.members) {
      yield member;
    }
  }
}

export default Team;
