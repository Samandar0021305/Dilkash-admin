import React from 'react'

const ButtonComponent = (props) => {
  return (
    <div>
      <button className="w-96 px-24 bg-[#03A9F4] rounded-2xl text-white py-2">
        {props.title}
      </button>
    </div>
  );
}

export default ButtonComponent