const homePageLike = (data, id) => {
  for (let user of data) {
    user.likes = Boolean(user.likes.find((userId) => userId === id));
  }

  return data;
};
export default homePageLike;
