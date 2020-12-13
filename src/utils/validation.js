export const checkValidity = (value, rules) => {
    let validity = true;

    if (!rules) {
      return true;
    }
    if (rules.notEpmty) {
      validity = validity.trim() !== '';
    }
    if (rules.required) {
      validity = value.trim() && validity;
    }
    if (rules.minLength) {
      validity = value.length >= rules.minLength && validity;
    }
    if (rules.minValue) {
      validity = value >= rules.minValue && validity;
    }
    if (rules.maxValue) {
      validity = value <= rules.maxValue && validity;
    }
    return validity;
  }

  const isLetterOrEmpty = (val) => {
    return (/^[a-zA-Z]*$/.test(val))
  }

  const isNotSpecialSings = (val) => {
    return (/[`%&!^#~<>;':"/[\]|{}()=_+-e]/.test(val))
  }

  const canBeIntergerValue = (val, minValue) => {
    if(val == "")
    {
      return true
    }
    if (isNotSpecialSings(val)) {
      if (IsInteger(Number(val)) >= minValue) {
        return true;
      }
    }
    return false;
  }

  export const canBeValue = (value, maxLength, minValue) => {
    if (value.length <= maxLength) {
      if (minValue) {
        return canBeIntergerValue(value, minValue);
      }
      return isLetterOrEmpty(value)
    }
    return false;
  }

  export const canBeName = (value) => {
    if (isLetterOrEmpty(value)) {
      const name = value
        .replace(/^\s+/, "")
        .replace(/\s+$/, "")
        .replace(/\s+/, " ")
      if (name === "") {
        return false;
      } else {
        return true;
      }
    }
    return false;
  }

  export const IsInteger = (value) => {
    return typeof value === 'number' && (value % 1) === 0;
  }