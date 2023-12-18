import React from "react";
const showClick = () => {
  alert("click làm đéo gì");
};
function Member({ name, age }) {
  return (
    <div>
      <h1>Họ và tên: {name}</h1>
      <h2>Tuổi: {age}</h2>
      <input type="text" placeholder="Nhập vào thông tin tuổi" />
      <button type="button" onClick={showClick}>
        Click Me
      </button>
    </div>
  );
}
export default Member;
