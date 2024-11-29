type PlainObject<T = unknown> = {
  [k in string]: T;
};

function isArray(value: unknown): value is [] {
  return Array.isArray(value);
}

function isPlainObject(value: unknown): value is PlainObject {
  return (
    typeof value === "object" &&
    value !== null &&
    value.constructor === Object &&
    Object.prototype.toString.call(value) === "[object Object]"
  );
}

function isArrayOrObject(value: unknown): value is [] | PlainObject {
  return isPlainObject(value) || isArray(value);
}

export default function isEqual(
  lhs: PlainObject | [],
  rhs: PlainObject | []
): boolean {
  // Если оба значения - массивы
  if (isArray(lhs) && isArray(rhs)) {
    if (lhs.length !== rhs.length) return false;
    for (let i = 0; i < lhs.length; i++) {
      if (!isEqual(lhs[i], rhs[i])) return false;
    }
    return true;
  }

  // Если один из них массив, а другой нет - не равны
  if (isArray(lhs) || isArray(rhs)) return false;

  // Сравнение количества ключей объектов
  const lhsKeys = Object.keys(lhs);
  const rhsKeys = Object.keys(rhs);
  if (lhsKeys.length !== rhsKeys.length) {
    return false;
  }

  for (const key of lhsKeys) {
    const lhsValue = lhs[key];
    const rhsValue = rhs[key];
    if (isArrayOrObject(lhsValue) && isArrayOrObject(rhsValue)) {
      if (!isEqual(lhsValue, rhsValue)) return false;
    } else if (lhsValue !== rhsValue) {
      return false;
    }
  }

  return true;
}
