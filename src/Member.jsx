import React from "react";
function Member({ name, age }) {
  console.log("🚀 ~ file: Member.jsx:3 ~ Member ~ age:", age);
  console.log("🚀 ~ file: Member.jsx:3 ~ Member ~ name:", name);
  return (
    <div>
      <h1>Họ và tên: {name}</h1>
      <h2>Tuổi: {age}</h2>
    </div>
  );
}
export default Member;
