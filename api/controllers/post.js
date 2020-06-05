var Post = require("./../models/Post");

const getAll = (section) => {
  return new Promise((resolve, reject) => {
    Post.find(section ? { section } : {}, (err, docs) => {
      err ? reject({ message: "PROBLEM", err }) : resolve(docs);
    });
  });
};

const add = (data) => {
  return new Promise((resolve, reject) => {
    console.log(data);
    Post.find({ phoneNumber: data.phoneNumber }, (err, docs) => {
      console.log(docs);
      if (docs.length != 0) {
        reject({ message: "PHONE NUMBER ALREADY EXISTS", err });
      } else {
        Post.create(data, (err, docs) => {
          err ? reject({ message: "PROBLEM", err }) : resolve(docs);
        });
      }
    });
  });
};

module.exports = { add, getAll };
