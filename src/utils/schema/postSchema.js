export class PostSchema {
  constructor(postId, userName, description, hashTags, image) {
    this.postId = postId;
    this.userName = userName;
    this.description = description;
    this.hashTags = hashTags;
    this.image = image;
  }
}
