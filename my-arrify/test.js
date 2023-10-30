import test from "ava";
import arrify from "./index.js";

test("test-arrify", (t) => {
  const arr = ["hello"];
  t.is(arrify(arr), arr);

  t.deepEqual(arrify("hello"), ["hello"]);
  t.deepEqual(arrify(null), []);
  t.deepEqual(arrify(undefined), []);
});
