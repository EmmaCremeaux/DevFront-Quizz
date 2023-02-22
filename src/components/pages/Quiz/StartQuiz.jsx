import React, { useEffect }  from "react";
import { useNavigate, useParams } from "react-router-dom";
import './style/StartQuizz.css';

export default function StartQuizz() {

    const {id} = useParams();


  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(`/quiz/${id}`);
    }, 4200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="containSlide">
    <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_t0c5opdl.json"  background="transparent"  speed="1"    autoplay></lottie-player>
      {/* <img className="slide" src={photosToggle[index].photo} alt={photosToggle[index].nom} /> */}
    </div>
  );
}