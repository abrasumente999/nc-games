export const dateFormatter = (data) => {
  if (Array.isArray(data)) {
    const arr = [...data];
    return arr.map((element) => {
      element.created_at = new Date(element.created_at).toLocaleDateString(
        "en-GB"
      );
      return element;
    });
  } else {
    const obj = { ...data };
    obj.created_at = new Date(obj.created_at).toLocaleDateString("en-GB");
    return obj;
  }
};
