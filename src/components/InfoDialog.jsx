import React from "react";
import { useNavigate } from "react-router-dom";

const InfoDialog = (props) => {
  const navigate = useNavigate();

  const handleClose = () => {
    if (props.reload) {
      navigate("/", { state: { showLoginDialog: false }, replace: true });
      props.reload();
    }
    props.onClose();
  };
  return (
    <div className="text-[#1FB137] flex flex-col text-center bg-black text-lg h-full">
      <div className="w-full">{props.info}</div>

      <div className="w-full">
        <button
          value="OK"
          className="bg-[#166534] w-[100px] h-[45px] mt-5 rounded-3xl text-white text-xl self-center"
          onClick={handleClose}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default InfoDialog;
