export function idealBodyWeight (gender: string, height: number) {
  try {
    //   ! handling missing params
    if (!height || typeof height != "number")
      throw "height (integer) not provided";
    if (!gender) throw "gender not provided";
    // ! handling wrong genders
    if (gender.toLowerCase() != "male" && gender.toLowerCase() != "female")
      throw "gender can be male or female";
    if (gender.toLowerCase() == "male") {
      return 50 + 0.91 * (height - 152.4);
    } else if (gender.toLowerCase() == "female") {
      return 45.5 + 0.91 * (height - 152.4);
    }
  } catch (error) {
    return error;
  }
};