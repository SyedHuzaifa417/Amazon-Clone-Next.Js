const password = process.env.password!;

export const connectionStr =
  "mongodb+srv://huzaifaali417:" +
  password +
  "@amazoncluster.4biwj.mongodb.net/productdb?retryWrites=true&w=majority&appName=amazonCluster";
