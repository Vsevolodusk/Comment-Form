const userArray = [];
function createUser(e) {
    e.preventDefault();
    const userData = {
      name: userName.value,
      commentName: userTopic.value,
      mark: parseInt(userMark.value),
      comment: userComment.value,
    };
    userArray.push(userData);
    entryForm.reset();
  }
