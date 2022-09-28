module.exports = (mongoose) => {
  var notebook = mongoose.Schema(
    {
      id: String,
      label: String,
      icon: String,
      pin: String,
      noteslist: [
        {
          id: { type: String },
          label: { type: String },
          pin: { type: String },
          isDeleted: { type: String },
        },
      ],
      author: { id: { type: String }, name: { type: String } },
      createdAt: String,
      lastModifiedAt: String,
    },
    { timestamps: true }
  );

  notebook.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const notebooks = mongoose.model("notebooks", notebook);
  return notebooks;
};
