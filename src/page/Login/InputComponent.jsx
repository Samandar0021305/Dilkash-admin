import React from 'react'

const InputComponent = (props) => {
  return (
    <div className="mb-9">
      <p className="text-[#4F4F4F] text-sm">{props.label}</p>
      <input
        className="w-96 border-[1px] shadow-md border-[#CACACA] h-8 rounded-sm focus:outline-none"
        type={props.type}
      />
    </div>
  );
}

export default InputComponent