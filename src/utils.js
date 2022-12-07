export const dateFormatter = (data) => {
  if (Array.isArray(data)) {
    return data.map((element) => {
      element.created_at = new Date(element.created_at).toLocaleDateString(
        "en-GB"
      );
      return element;
    });
  } else {
    data.created_at = new Date(data.created_at).toLocaleDateString("en-GB");
    return data;
  }
};
